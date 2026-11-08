#!/usr/bin/env node
// Browser checks on the built single files (dist/*.html and editions/<name>/dist/*.html), in a headless
// Chrome of our own (chrome.mjs).
//
//   qa audit                   every stop and beat at every viewport: overlaps, off-screen items, small text,
//                              the font, the console, and any request leaving the file
//   qa shots [--out dir]       a PNG of every stop and beat (reduced motion, pulse held), plus a contact sheet
//   qa diff --base dir         shots into --out, then a pixel diff against the base (refactors meant to be invisible)
//   qa walk                    next() through the whole deck with motion on: the console across moves and portals
//   qa scene                   the three.js structure and cost: untagged or foreign meshes, unbaked crowds, draw calls
//                              and triangles per stop against the budgets (deck.config.mjs qa.scene), frame times
//                              through every move with motion on, geometries leaked by the walk
//   qa host                    each single file as SharePoint and Teams previews show it: in a sandboxed srcdoc frame
//                              under a strict CSP; the console stays empty and a key press moves the deck
//   qa a11y                    accessibility, in every theme the viewer can pick: text contrast against the pixels
//                              really behind it (drawing included), axe-core's WCAG rules, the reading version
//                              (scripts off) and print (light theme, white paper), a phone held upright
//
// Options: --force (a11y on a deck that set qa.a11y: false)  --page en,fr,<edition>  --vp 1920x1080,844x390p (p: phone)  --only 3,5.2,7-9  --theme light|dark
//          --jobs 3  --out qa/out  --gl metal|swiftshader  --dpr 2 (shots at a phone's pixel density; default 1)
// Exit code 1 when anything is found. The report goes to <out>/report.json.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative, resolve } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { launchChrome, frontmost } from "./chrome.mjs";
import { openPage } from "./driver.mjs";
import { comparePngs } from "./diff.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = process.cwd();
const config = (await import(pathToFileURL(join(root, "deck.config.mjs")).href)).default;
const qa = config.qa || {};
const AUDIT = readFileSync(join(here, "audit.js"), "utf8");
const CONTRAST = readFileSync(join(here, "contrast.js"), "utf8");

// ---------- arguments ----------

const [mode = "audit", ...rest] = process.argv.slice(2);
const opt = {};
for (let i = 0; i < rest.length; i++) {
  if (!rest[i].startsWith("--")) continue;
  const k = rest[i].slice(2);
  opt[k] = rest[i + 1] && !rest[i + 1].startsWith("--") ? rest[++i] : true;
}
if (!["audit", "shots", "diff", "walk", "scene", "a11y", "host"].includes(mode)) {
  console.error(`qa: unknown mode ${mode} (audit | shots | diff | walk | scene | a11y | host)`);
  process.exit(2);
}
// A deck that has not adopted the accessibility check yet says so in its config (qa.a11y: false); --force runs it
if (mode === "a11y" && qa.a11y === false && !opt.force) {
  console.log("qa a11y: not adopted by this deck (deck.config.mjs qa.a11y: false); --force runs it");
  process.exit(0);
}
const out = resolve(opt.out || "qa/out");
// The scene check times frames: one page at a time, so pages do not share the GPU while they are timed
const jobs = Number(opt.jobs) || (mode === "scene" ? 1 : 3);

const parseVp = (s) => {
  const m = /^(\d+)x(\d+)(p?)$/.exec(s.trim());
  if (!m) throw new Error(`qa: bad viewport ${s}`);
  return { w: +m[1], h: +m[2], phone: !!m[3] };
};
const vpName = (v) => `${v.w}x${v.h}${v.phone ? "p" : ""}`;
const viewports = opt.vp ? String(opt.vp).split(",").map(parseVp) : qa.viewports;

// [[stop, beat], …] (1-based) from "3,5.2,7-9" (steps, a step's beat, a range of steps); null: all
const only = opt.only
  ? String(opt.only)
      .split(",")
      .flatMap((s) => (/^\d+-\d+$/.test(s) ? Array.from({ length: s.split("-")[1] - s.split("-")[0] + 1 }, (_, i) => [Number(s.split("-")[0]) + i]) : [s.split(".").map(Number)]))
  : null;

// ---------- pages ----------

// The built single files: the config's pages, then every edition's dist file
function pages() {
  const list = config.pages.map((p) => ({ name: p.name, file: resolve(p.out) }));
  const dir = resolve(config.editions || "editions");
  if (existsSync(dir)) {
    for (const name of readdirSync(dir)) {
      const dist = join(dir, name, "dist");
      if (!existsSync(join(dir, name, "index.html")) || !existsSync(dist)) continue;
      for (const f of readdirSync(dist)) if (f.endsWith(".html")) list.push({ name, file: join(dist, f), edition: true });
    }
  }
  const want = opt.page ? String(opt.page).split(",") : null;
  return list.filter((p) => !want || want.includes(p.name));
}

// ---------- one page at one viewport ----------

async function steps(page) {
  const counts = await page.ev("deck.stops.map((s) => Math.max(1, s.beats.length))");
  const all = [];
  counts.forEach((n, i) => {
    for (let b = 0; b < n; b++) all.push([i + 1, b + 1]);
  });
  return only ? all.filter(([s, b]) => only.some(([os, ob]) => os === s && (!ob || ob === b))) : all;
}

const goTo = (page, [s, b]) => page.ev(`(deck.go(${s - 1}, true, ${b - 1}), true)`);
const stepName = ([s, b]) => `${String(s).padStart(2, "0")}.${b}`;

// Every label group and tag a stop or beat names must exist in the built scene (a typo shows nothing)
const VOCABULARY = `(() => {
  const { groups, tags, keys = [] } = deck.vocabulary();
  const g = new Set(groups), t = new Set(tags), k = new Set(keys);
  const items = (v) => (v || "").split(",").map((s) => s.trim()).filter(Boolean);
  const out = [];
  deck.stops.forEach((s, i) => [s.data, ...s.beats].forEach((d, b) => {
    const at = String(i + 1).padStart(2, "0") + "." + (b + 1);
    items(d.labels).forEach((x) => g.has(x) || out.push(at + " unknown-label-group " + x));
    // data-focus="none": nothing in focus, everything fades
    ["focus", "context", "energize", "pulse"].forEach((k) => items(d[k]).forEach((x) => t.has(x) || (k === "focus" && x === "none") || out.push(at + " unknown-tag data-" + k + "=" + x)));
    items(d.pulseLag).forEach((p) => { const x = p.split("=")[0]; t.has(x) || out.push(at + " unknown-tag data-pulse-lag=" + x); });
    // A pinned leader name must exist (userData.key on its leader): a typo leaves the name where layout put it
    [["leadAt", "data-lead-at"], ["leadAtPhone", "data-lead-at-phone"]].forEach(([f, a]) => items(d[f]).forEach((p) => { const x = p.split("=")[0]; k.has(x) || out.push(at + " unknown-leader-key " + a + "=" + x); }));
  }));
  return [...new Set(out)];
})()`;

// The scene check's budgets: draw calls and triangles rendered for one frame (every pass of the line-art
// renderer), and the 95th-percentile main-thread time of a frame during a move (a warning: headless timings vary)
// gapMs: the time between two frames on screen during a move, GPU work included, at the scene check's pixel
// density (qa.scene.dpr, 2 by default: a laptop's screen); a move dropping more than 1 frame in 10 (3 at least:
// one late frame is the machine, not the deck) is a warning too
const BUDGET = { drawCalls: 400, triangles: 4_000_000, frameMs: 20, gapMs: 25, dpr: 2, ...qa.scene };
const p95 = (ms) => (ms.length ? [...ms].sort((a, b) => a - b)[Math.min(ms.length - 1, Math.floor(ms.length * 0.95))] : 0);

async function scene(page, result) {
  if (!(await page.ev("!!deck.inspect"))) {
    result.issues.push("no deck.inspect: rebuild with the current framework");
    return;
  }
  const first = await page.ev("deck.inspect()");
  first.untagged.forEach((m) => result.issues.push(`untagged-mesh ${m}`));
  first.foreign.forEach((m) => result.issues.push(`not-line-art ${m}`));
  first.crowded.forEach((m) => result.warnings.push(`unbaked ${m} (bake(group, { keep }))`));
  const all = await steps(page);
  const rows = [];
  for (const step of all) {
    await goTo(page, step);
    await page.settle();
    const r = await page.ev("deck.inspect()");
    rows.push({ step: stepName(step), calls: r.calls, triangles: r.rendered, visible: r.visible });
    // Over budget: the groups drawing the most meshes, where baking pays
    const heaviest = () => ` (most meshes drawn: ${r.heaviest.map(([p, n]) => `${p} ${n}`).join(", ")})`;
    if (r.calls > BUDGET.drawCalls) result.issues.push(`${stepName(step)} draw-calls ${r.calls} > ${BUDGET.drawCalls}${heaviest()}`);
    if (r.rendered > BUDGET.triangles) result.issues.push(`${stepName(step)} triangles ${r.rendered} > ${BUDGET.triangles}`);
  }
  // Every move with motion on, step by step: the frames it takes and how long each one runs
  await goTo(page, all[0]);
  await page.settle();
  const moves = [];
  for (let k = 1; k < all.length; k++) {
    // The time between frames on screen as well: what the GPU costs shows there, not in the main thread's time
    await page.ev(`(window.__gaps = [], window.__gapsOn = true, (() => { let last = performance.now(); const f = (t) => { __gaps.push(t - last); last = t; if (__gapsOn) requestAnimationFrame(f); }; requestAnimationFrame(f); })(), deck.frameStats(true), deck.next(), true)`);
    await page.settle(9000);
    const ms = await page.ev("deck.frameStats()");
    const gaps = (await page.ev("(window.__gapsOn = false, __gaps.slice(1))")).slice(0, Math.max(1, ms.length));
    const late = gaps.filter((g) => g > BUDGET.gapMs).length;
    moves.push({ to: stepName(all[k]), frames: ms.length, p95: +p95(ms).toFixed(1), max: +Math.max(0, ...ms).toFixed(1), gap: +p95(gaps).toFixed(1), late });
  }
  await page.ev("deck.frameStats(false)");
  moves.filter((m) => m.p95 > BUDGET.frameMs).forEach((m) => result.warnings.push(`move to ${m.to}: frames p95 ${m.p95} ms > ${BUDGET.frameMs} ms (max ${m.max})`));
  moves.filter((m) => m.late >= 3 && m.late > m.frames / 10).forEach((m) => result.warnings.push(`move to ${m.to}: ${m.late} of ${m.frames} frames more than ${BUDGET.gapMs} ms apart at ${BUDGET.dpr}x (p95 ${m.gap} ms): frames dropped (pixel density, the line-art pass, overdraw)`));
  // A leak grows with every walk; a part first shown mid-move (a surface riding a level) uploads once. So the
  // count after a second walk is compared with the count after the first
  await goTo(page, all[0]);
  await page.settle();
  const once = (await page.ev("deck.inspect()")).memory.geometries;
  for (let k = 1; k < all.length; k++) {
    await page.ev("(deck.next(), true)");
    await page.settle(9000);
  }
  await goTo(page, all[0]);
  await page.settle();
  const after = (await page.ev("deck.inspect()")).memory.geometries;
  if (after > once) result.issues.push(`geometry-leak ${after - once} geometries more after a second walk (dispose what a state rebuilds)`);
  result.scene = { structure: { ...first, untagged: first.untagged.length, foreign: first.foreign.length }, budget: BUDGET, steps: rows, moves };
  const worst = (k) => rows.reduce((a, r) => (r[k] > a[k] ? r : a), rows[0]);
  const slow = moves.reduce((a, m) => (m.p95 > (a?.p95 ?? -1) ? m : a), null);
  console.log(
    `${result.page}: ${first.meshes} meshes, ${first.materials} materials, ${first.geometries} geometries, ${first.triangles} triangles in the scene; ` +
      `most draw calls ${worst("calls").calls} (${worst("calls").step}), most triangles rendered ${worst("triangles").triangles} (${worst("triangles").step})` +
      (slow ? `; slowest move ${slow.to} p95 ${slow.p95} ms over ${slow.frames} frames` : "") +
      `; frames on screen every ${Math.max(0, ...moves.map((m) => m.gap))} ms at worst (p95 of a move, ${BUDGET.dpr}x)`,
  );
}

// ---------- hosts ----------

// What document libraries and chat previews do to an HTML file (SharePoint, Teams): no URL of its own, the page in
// a sandboxed about:srcdoc frame (scripts on, no same origin, no full screen) under a strict policy. The deck must
// run there: no console error, no blocked resource, and a key press moves it on
const HOST_CSP = "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; media-src data: blob:; worker-src blob:";

async function host(chrome, target, vp) {
  const page = await openPage(chrome, { ...vp, reduced: true });
  const result = { page: target.name, vp: `${vpName(vp)} srcdoc`, issues: [], warnings: [], console: [], requests: [], shots: [] };
  try {
    // The policy goes in the framed document itself: a srcdoc frame inherits its host's, and the frame must load
    const csp = `<meta http-equiv="Content-Security-Policy" content="${HOST_CSP}">`;
    const html = readFileSync(target.file, "utf8").replace(/<head>/i, (h) => h + csp).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    mkdirSync(out, { recursive: true });
    const wrapper = join(out, `host-${target.name}.html`);
    writeFileSync(
      wrapper,
      `<!doctype html><meta charset="utf-8">` +
        `<style>html,body,iframe{margin:0;border:0;width:100%;height:100%;display:block}</style>` +
        `<iframe sandbox="allow-scripts allow-popups" srcdoc="${html}"></iframe>`,
    );
    const loaded = new Promise((r) => page.on((m) => m.method === "Page.loadEventFired" && r()));
    await page.send("Page.navigate", { url: pathToFileURL(wrapper).href });
    await loaded;
    const tree = await page.send("Page.getFrameTree");
    const frameId = tree.frameTree.childFrames?.[0]?.frame.id;
    if (!frameId) throw new Error("the frame did not load");
    const { executionContextId } = await page.send("Page.createIsolatedWorld", { frameId, worldName: "qa" });
    const inFrame = async (expression) => (await page.send("Runtime.evaluate", { expression, contextId: executionContextId, returnByValue: true })).result.value;
    const counter = () => inFrame(`(document.querySelector(".hud-counter") || {}).textContent || ""`);
    let first = "";
    for (let i = 0; i < 100 && !(first = await counter()); i++) await sleep(100);
    if ((await inFrame("document.documentElement.className")).includes("no-js")) result.issues.push("the deck did not start (no-js)");
    if (!first) result.issues.push("no step counter: the deck did not start");
    else {
      // A click gives the frame the focus, as a viewer's would; then the next step
      await page.send("Input.dispatchMouseEvent", { type: "mousePressed", x: 4, y: Math.round(vp.h / 2), button: "left", clickCount: 1 });
      await page.send("Input.dispatchMouseEvent", { type: "mouseReleased", x: 4, y: Math.round(vp.h / 2), button: "left", clickCount: 1 });
      await sleep(200);
      // The counter shows the step, not the beat: press until the next step (a first step may hold beats)
      const now = await counter();
      let after = now;
      for (let press = 0; press < 6 && after === now; press++) {
        await page.send("Input.dispatchKeyEvent", { type: "keyDown", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
        await page.send("Input.dispatchKeyEvent", { type: "keyUp", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
        for (let i = 0; i < 20 && after === now; i++) {
          await sleep(100);
          after = await counter();
        }
      }
      if (after === now) result.issues.push(`six key presses did not move the deck to its next step (counter stays "${now}")`);
    }
    result.console = [...page.logs];
    result.requests = page.requests.filter((u) => !/^(data|blob|about):/.test(u) && u !== pathToFileURL(wrapper).href);
  } catch (e) {
    result.issues.push(`error ${e.message}`);
  } finally {
    await page.close();
  }
  return result;
}

async function run(chrome, target, vp) {
  const page = await openPage(chrome, { ...vp, reduced: mode !== "walk" && mode !== "scene", theme: opt.theme || null, dpr: Number(opt.dpr) || (mode === "scene" ? BUDGET.dpr : 1) });
  const url = pathToFileURL(target.file).href;
  const result = { page: target.name, vp: vpName(vp), issues: [], warnings: [], console: [], requests: [], shots: [] };
  try {
    await page.goto(url);
    await page.settle();
    if (mode === "scene") await scene(page, result);
    else if (mode === "walk") {
      const n = await page.ev("deck.stops.reduce((n, s) => n + Math.max(1, s.beats.length), 0)");
      for (let k = 1; k < n; k++) {
        await page.ev("(deck.next(), true)");
        await page.settle(6000);
      }
    } else {
      if (mode !== "audit") await page.ev("(deck.holdPulse(-10), true)");
      // Once per page: the names stops give against the scene's
      if (mode === "audit" && vp === viewports[0] && (await page.ev("!!deck.vocabulary"))) (await page.ev(VOCABULARY)).forEach((f) => result.issues.push(f));
      for (const step of await steps(page)) {
        await goTo(page, step);
        const settled = await page.settle();
        if (!settled) result.issues.push(`${stepName(step)} did-not-settle`);
        if (mode === "audit") {
          const q = qaFor(target);
          const found = await page.ev(`(${AUDIT})(${JSON.stringify({ hud: q.hud || [], minText: vp.phone ? (q.minTextPhone ?? 9) : (q.minText ?? 11) })})`);
          found.forEach((f) => result.issues.push(`${stepName(step)} ${f}`));
        } else {
          const dir = join(out, target.name, vpName(vp));
          mkdirSync(dir, { recursive: true });
          const file = join(dir, `${stepName(step)}.png`);
          writeFileSync(file, await page.shot("png"));
          result.shots.push(file);
        }
      }
    }
    result.console = [...page.logs];
    // A mailed file loads nothing: every request other than the page itself is a leftover link
    result.requests = page.requests.filter((u) => u !== url && !/^(data|blob|about):/.test(u));
  } catch (e) {
    result.issues.push(`error ${e.message}`);
  } finally {
    await page.close();
  }
  return result;
}

// ---------- accessibility ----------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const C = (call) => `(${CONTRAST}).${call}`;
let AXE = null;
try {
  AXE = readFileSync(createRequire(join(root, "package.json")).resolve("axe-core/axe.min.js"), "utf8");
} catch {}
// WCAG 2.2 A and AA; contrast is ours (axe cannot see the drawing under a text)
const AXE_RUN = { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] }, rules: { "color-contrast": { enabled: false } } };
// The tokens a page without scripts must share with the light theme (the reading version is the light deck)
const READING_TOKENS = ["--ink", "--ink-strong", "--ink-muted", "--emph", "--emph-small", "--panel-bg"];

// Every text on screen against the shot taken with all text hidden (its halo, a text-shadow, stays: it is part of
// what the text reads against). A capture caught mid-repaint fails nearly everything at once: measured again
// before anything is reported
async function textContrast(page) {
  for (let attempt = 0; ; attempt++) {
    const items = await page.ev(C("collect()"));
    if (!items.length) return [];
    await page.ev(`(() => { const s = document.createElement("style"); s.id = "qa-hide-text"; s.textContent = "*{color:transparent!important;-webkit-text-stroke:0!important}"; document.head.append(s); return true; })()`);
    await sleep(150);
    const png = (await page.shot("png")).toString("base64");
    await page.ev(`(document.getElementById("qa-hide-text").remove(), true)`);
    const low = (await page.ev(C(`measure(${JSON.stringify(items)}, "${png}")`))).filter((m) => m.ratio < m.need);
    if (attempt === 0 && low.length > items.length / 2) continue;
    return low;
  }
}

// Findings gathered over steps: one line per text (or rule), with the steps it shows on and its worst ratio
function gather() {
  const map = new Map();
  return {
    add(key, at, ratio = null) {
      const e = map.get(key) || { steps: [], ratio: Infinity };
      if (!e.steps.includes(at)) e.steps.push(at);
      if (ratio !== null) e.ratio = Math.min(e.ratio, ratio);
      map.set(key, e);
    },
    lines: () => [...map].map(([k, e]) => (e.ratio < Infinity ? k.replace("{ratio}", e.ratio.toFixed(2)) : k) + ` (${e.steps.join(", ")})`),
  };
}
const lowLine = (prefix, m) => `${prefix}low-contrast {ratio}:1 < ${m.need} ${m.cls} "${m.text}" ${m.size.toFixed(1)}px`;

async function a11y(chrome, target, vp) {
  const url = pathToFileURL(target.file).href;
  const result = { page: target.name, vp: vpName(vp), issues: [], warnings: [], console: [], requests: [], shots: [] };
  const open = (o = {}) => openPage(chrome, { ...vp, reduced: true, ...o });
  const found = gather();
  let page;
  try {
    if (!AXE) result.issues.push("axe-core is not installed (npm install --save-dev axe-core)");
    // The themes the viewer can pick: both when the page has the switch, else the page's own
    page = await open();
    await page.goto(url);
    const themes = (await page.ev("!!document.querySelector('.hud-theme:not([hidden])')")) ? ["light", "dark"] : [null];
    await page.close();
    let lightTokens = null;
    for (const theme of themes) {
      page = await open({ theme });
      await page.goto(url);
      await page.settle();
      await page.ev("(deck.holdPulse(-10), true)");
      if (AXE) await page.ev(AXE + ";true");
      const tag = theme ? `${theme} ` : "";
      for (const step of await steps(page)) {
        await goTo(page, step);
        await page.settle();
        (await textContrast(page)).forEach((m) => found.add(lowLine(tag, m), stepName(step), m.ratio));
        // axe on each stop's first beat: beats only light items in a card the stop already shows
        if (AXE && step[1] === 1) {
          const v = await page.ev(`axe.run(document, ${JSON.stringify(AXE_RUN)}).then((r) => r.violations.map((x) => ({ id: x.id, impact: x.impact, help: x.help, nodes: x.nodes.slice(0, 2).map((n) => n.target.join(" ")) })))`);
          v.forEach((x) => found.add(`${tag}axe ${x.id} (${x.impact}): ${x.help} [${x.nodes.join(", ")}]`, stepName(step)));
        }
      }
      // Printing, once: the reading version on the light theme, every text against white paper
      if (theme === themes[0] && !vp.phone) {
        await page.send("Emulation.setEmulatedMedia", { media: "print" });
        await page.ev(`(dispatchEvent(new Event("beforeprint")), true)`);
        const h = await page.ev("document.documentElement.scrollHeight");
        await page.send("Emulation.setDeviceMetricsOverride", { width: vp.w, height: Math.min(h, 16000), deviceScaleFactor: 1, mobile: false });
        await sleep(100);
        (await page.ev(C(`paper(${C("collect()")})`))).filter((m) => m.ratio < m.need).forEach((m) => found.add(lowLine("print ", m), "print", m.ratio));
        lightTokens = await page.ev(`(() => { const s = getComputedStyle(document.body); return ${JSON.stringify(READING_TOKENS)}.map((t) => s.getPropertyValue(t).trim()); })()`);
        await page.ev(`(dispatchEvent(new Event("afterprint")), true)`);
      }
      result.console.push(...page.logs.map((l) => tag + l));
      await page.close();
    }

    if (!vp.phone) {
      // The reading version as a page without scripts shows it (mail previewers): the cards back in their stops,
      // no theme on the body. Its contrast on screen, and the light theme's colours
      page = await open();
      await page.goto(url);
      await page.ev(`(dispatchEvent(new Event("beforeprint")), delete document.body.dataset.theme, true)`);
      const h = await page.ev("document.documentElement.scrollHeight");
      await page.send("Emulation.setDeviceMetricsOverride", { width: vp.w, height: Math.min(h, 16000), deviceScaleFactor: 1, mobile: false });
      await sleep(200);
      (await textContrast(page)).forEach((m) => found.add(lowLine("reading ", m), "reading", m.ratio));
      const tokens = await page.ev(`(() => { const s = getComputedStyle(document.body); return ${JSON.stringify(READING_TOKENS)}.map((t) => s.getPropertyValue(t).trim()); })()`);
      if (lightTokens) READING_TOKENS.forEach((t, i) => tokens[i] !== lightTokens[i] && result.issues.push(`reading-theme ${t} is ${tokens[i] || "unset"} without scripts, ${lightTokens[i]} on the light theme (write the light tokens on body:not([data-theme="dark"]))`));
      await page.close();
    } else {
      // A phone held upright: the reading version, every card on show, with the line asking to turn it
      page = await open({ w: vp.h, h: vp.w });
      await page.goto(url);
      await sleep(300);
      await sleep(300);
      const p = await page.ev(`(() => { const shown = (e) => e && getComputedStyle(e).display !== "none" && e.getBoundingClientRect().height > 0;
        const cards = [...document.querySelectorAll(".card")];
        const r = cards.filter(shown).map((c) => c.getBoundingClientRect());
        const rotate = document.querySelector(".rotate");
        return { reading: document.documentElement.classList.contains("reading-portrait"), rotate: shown(rotate),
          above: !rotate || !r.length || rotate.getBoundingClientRect().bottom <= r[0].top + 1,
          overlaps: r.filter((b, i) => i && b.top < r[i - 1].bottom - 1).length,
          theme: document.body.dataset.theme || "", cards: r.length, all: cards.length }; })()`);
      if (!p.reading) result.issues.push("portrait: the phone held upright does not show the reading version");
      if (!p.rotate) result.issues.push("portrait: no line asking to turn the phone (.rotate)");
      else if (!p.above) result.issues.push("portrait: the line asking to turn the phone is not above the cards");
      if (p.cards < p.all) result.issues.push(`portrait: ${p.all - p.cards} card(s) hidden in the reading version`);
      if (p.overlaps) result.issues.push(`portrait: ${p.overlaps} card(s) overlap the one before (cards still placed by the deck?)`);
      if (p.theme && p.theme !== "light") result.issues.push(`portrait: the reading version is on the ${p.theme} theme, not the light one`);
      result.console.push(...page.logs.map((l) => "portrait " + l));
      await page.close();
    }
    result.issues.push(...found.lines());
  } catch (e) {
    result.issues.push(`error ${e.message}`);
    await page?.close();
  }
  return result;
}

// A contact sheet per page and viewport: every shot in order, captioned
function sheet(dir, files) {
  const figs = files.map((f) => `<figure><figcaption>${relative(dir, f).replace(/\.png$/, "")}</figcaption><img src="${relative(dir, f)}" loading="lazy"></figure>`).join("\n");
  writeFileSync(join(dir, "sheet.html"), `<!doctype html><meta charset="utf-8"><title>${dir}</title><style>body{margin:0;font:12px system-ui;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:6px;background:#888}figure{margin:0;background:#fff}img{width:100%;display:block}figcaption{padding:2px 6px}</style>\n${figs}\n`);
}

// ---------- the run ----------

// A private edition keeps its own layout: deck.config.mjs qa.editions overrides the floors and a11y for editions only
const qaFor = (t) => (t.edition && qa.editions ? { ...qa, ...qa.editions } : qa);
const targets = pages().filter((t) => mode !== "a11y" || opt.force || qaFor(t).a11y !== false);
if (!targets.length) {
  console.error("qa: no built page found (npm run build first)");
  process.exit(2);
}
const before = frontmost();
// a11y: the first viewport and the first phone (deck.config.mjs qa.a11y.viewports to change)
const a11yViewports = [...new Set(((qa.a11y && qa.a11y.viewports) || [viewports[0], viewports.find((v) => v.phone)]).filter(Boolean))];
const tasks = targets.flatMap((t) => (mode === "walk" || mode === "scene" || mode === "host" ? [[t, viewports[0]]] : (mode === "a11y" ? a11yViewports : viewports).map((v) => [t, v])));
const results = [];
let next = 0;
async function worker() {
  const chrome = await launchChrome({ gl: opt.gl, framesInProcess: mode === "host" });
  try {
    while (next < tasks.length) {
      const [t, v] = tasks[next++];
      const check = mode === "a11y" ? a11y : mode === "host" ? host : run;
      let r = await check(chrome, t, v);
      // A headless GPU page now and then stops answering: one more try on a fresh page, said in the report
      if (r.issues.some((i) => i.startsWith("error "))) {
        const first = r.issues.find((i) => i.startsWith("error "));
        r = await check(chrome, t, v);
        r.retried = first;
        if (!r.issues.some((i) => i.startsWith("error "))) console.log(`${r.page} ${r.vp}: retried after ${first}`);
      }
      results.push(r);
      const bad = r.issues.length + r.console.length + r.requests.length;
      console.log(`${r.page} ${r.vp}: ${bad ? `${bad} finding(s)` : mode === "shots" || mode === "diff" ? `${r.shots.length} shots` : "clean"}`);
    }
  } finally {
    chrome.close();
  }
}
await Promise.all(Array.from({ length: Math.min(jobs, tasks.length) }, worker));

if (mode === "shots" || mode === "diff") {
  for (const r of results) if (r.shots.length) sheet(join(out, r.page, r.vp), r.shots);
}

let diffs = [];
if (mode === "diff") {
  if (!opt.base) {
    console.error("qa diff: --base <dir> is required");
    process.exit(2);
  }
  const scope = results.map((r) => `${r.page}/${r.vp}`);
  diffs = await comparePngs(resolve(opt.base), out, { threshold: qa.diffThreshold ?? 24, gl: opt.gl, scope });
  diffs.forEach((d) => console.log(`diff ${d.name}: ${d.reason}`));
}

const after = frontmost();
// The viewer switching apps meanwhile is not ours; Chrome coming to the front is
const focus = before && after && before !== after && /chrom/i.test(after) ? `Chrome took the focus during the run (${before} → ${after})` : null;
if (focus) console.warn(`qa: warning, ${focus}`);

mkdirSync(out, { recursive: true });
results.sort((a, b) => (a.page + a.vp).localeCompare(b.page + b.vp));
writeFileSync(join(out, "report.json"), JSON.stringify({ mode, date: new Date().toISOString(), focus, results, diffs }, null, 2));

let failed = diffs.length > 0;
for (const r of results) {
  const lines = [...r.issues, ...r.console.map((c) => `console ${c}`), ...r.requests.map((u) => `request ${u}`)];
  if (r.warnings?.length) {
    console.log(`\n${r.page} ${r.vp} (warnings)`);
    r.warnings.forEach((w) => console.log(`  warning ${w}`));
  }
  if (!lines.length) continue;
  failed = true;
  console.log(`\n${r.page} ${r.vp}`);
  lines.forEach((l) => console.log(`  ${l}`));
}
console.log(failed ? `\nqa ${mode}: findings (${join(relative(root, out), "report.json")})` : `\nqa ${mode}: clean`);
process.exit(failed ? 1 : 0);
