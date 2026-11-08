// A minimal CDP driver over Node's WebSocket: one page per browser, viewport and phone emulation, reduced
// motion, the viewer's theme, the console and every request that leaves the page.
// The deck's debug handle (window.deck: go, stops, holdPulse, drawn) makes each frame deterministic.

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// vp: { w, h, phone }; dpr: the pixel density (1 keeps shots comparable; a phone screen is 2 or more)
export async function openPage(chrome, { w, h, phone = false, reduced = true, theme = null, dpr = 1 }) {
  // One page per browser: close every other target, so the one left is the browser's only (and active) page
  const targets = await (await fetch(`${chrome.base}/json/list`)).json();
  const t = await (await fetch(`${chrome.base}/json/new?about:blank`, { method: "PUT" })).json();
  for (const o of targets) if (o.type === "page" && o.id !== t.id) await fetch(`${chrome.base}/json/close/${o.id}`);
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((r, j) => {
    ws.addEventListener("open", r);
    ws.addEventListener("error", j);
  });
  let id = 0;
  const wait = new Map();
  const logs = [];
  const requests = [];
  const listeners = new Set();
  ws.addEventListener("message", (e) => {
    const m = JSON.parse(e.data);
    if (m.id && wait.has(m.id)) {
      wait.get(m.id)(m);
      wait.delete(m.id);
      return;
    }
    if (m.method === "Runtime.exceptionThrown") logs.push("exception " + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
    if (m.method === "Runtime.consoleAPICalled" && ["error", "warning", "assert"].includes(m.params.type)) logs.push(m.params.type + " " + m.params.args.map((a) => a.value ?? a.description).join(" "));
    if (m.method === "Log.entryAdded" && ["error", "warning"].includes(m.params.entry.level)) logs.push(`${m.params.entry.level} ${m.params.entry.text}`);
    if (m.method === "Network.requestWillBeSent") requests.push(m.params.request.url);
    listeners.forEach((f) => f(m));
  });
  const send = (method, params = {}, timeout = 60000) =>
    new Promise((resolve, reject) => {
      const i = ++id;
      const timer = setTimeout(() => {
        wait.delete(i);
        const what = params.expression ? `: ${params.expression.replace(/\s+/g, " ").slice(0, 60)}` : "";
        reject(new Error(`CDP ${method} timed out${what}`));
      }, timeout);
      wait.set(i, (m) => {
        clearTimeout(timer);
        m.error ? reject(new Error(`${method}: ${m.error.message}`)) : resolve(m.result);
      });
      ws.send(JSON.stringify({ id: i, method, params }));
    });

  await send("Runtime.enable");
  await send("Log.enable");
  await send("Network.enable");
  await send("Page.enable");
  // Paint without being the front tab: what Page.bringToFront was used for, without taking the window focus
  await send("Emulation.setFocusEmulationEnabled", { enabled: true });
  await send("Page.setWebLifecycleState", { state: "active" });
  await send("Emulation.setDeviceMetricsOverride", {
    width: w,
    height: h,
    deviceScaleFactor: dpr,
    mobile: phone,
    screenOrientation: phone ? { type: "landscapePrimary", angle: 90 } : { type: "landscapePrimary", angle: 0 },
  });
  if (phone) await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
  const features = [{ name: "prefers-reduced-motion", value: reduced ? "reduce" : "no-preference" }];
  if (phone) features.push({ name: "pointer", value: "coarse" }, { name: "hover", value: "none" }, { name: "any-pointer", value: "coarse" });
  await send("Emulation.setEmulatedMedia", { features });
  // The viewer's theme choice, as the page reads it back: hud.js keys it by path and title, and the title is not
  // parsed yet when this runs, so any theme key answers with the choice
  if (theme)
    await send("Page.addScriptToEvaluateOnNewDocument", {
      source: `try{const g=Storage.prototype.getItem;Storage.prototype.getItem=function(k){return String(k).startsWith("deck-theme:")?${JSON.stringify(theme)}:g.call(this,k)}}catch(e){}`,
    });

  const ev = async (expression) => {
    const r = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };

  return {
    logs,
    requests,
    send,
    ev,
    on: (f) => listeners.add(f),
    async goto(url) {
      const loaded = new Promise((r) => {
        const f = (m) => {
          if (m.method === "Page.loadEventFired") {
            listeners.delete(f);
            r();
          }
        };
        listeners.add(f);
      });
      await send("Page.navigate", { url });
      await loaded;
      await ev("document.fonts ? document.fonts.ready.then(() => true) : true");
      // The deck's handle appears once the bundle has run
      for (let i = 0; i < 100 && !(await ev("!!window.deck")); i++) await sleep(50);
    },
    // Waits until the frame loop has stopped and no CSS transition runs: the frame is final
    async settle(max = 8000) {
      return ev(`(async () => {
        const t0 = performance.now();
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        await sleep(120);
        let last = -1, still = 0;
        while (performance.now() - t0 < ${max}) {
          const d = window.deck.drawn ? window.deck.drawn() : 0;
          const anims = document.getAnimations().filter((a) => a.playState === "running" && a.effect && a.effect.getComputedTiming().iterations !== Infinity).length;
          still = d === last && anims === 0 ? still + 1 : 0;
          if (still >= 4) return true;
          last = d;
          await sleep(60);
        }
        return false;
      })()`);
    },
    async shot(format = "png") {
      const r = await send("Page.captureScreenshot", { format, ...(format === "jpeg" ? { quality: 80 } : {}) });
      return Buffer.from(r.data, "base64");
    },
    async close() {
      try {
        ws.close();
      } catch {}
      await fetch(`${chrome.base}/json/close/${t.id}`).catch(() => {});
    },
  };
}
