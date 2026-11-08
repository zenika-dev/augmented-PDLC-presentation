// Writes the deck's boards for the Claude Design canvas (process.md stage 1): the files of a canvas folder
// (project/canvas.json, one project/<name>.dc.html per artboard) that the agent then publishes to the canvas.
//
//   node framework/boards/boards.mjs draft    the composed boards: one per stop, from the outline and the board
//                                             plan (docs/boards.json): shot, subjects, leader names, red word
//   node framework/boards/boards.mjs renders  the deck's own renders: one per stop and beat, from qa shots
//   node framework/boards/boards.mjs asset <file> <url>   records an uploaded file's /_blob/ url in the assets map
//
// Options: --outline inputs/outline.md, --plan docs/boards.json, --assets .deck/boards/assets.json (local file →
// uploaded /_blob/ url, written by the agent after each upload), --root .deck/boards/canvas (the canvas folder),
// --shots qa/boards (renders: the folder `qa shots --vp 1920x1080 --out qa/boards` filled, one page).
// The plan may set "theme" (light, blueprint) and "energy" (the red word's colour) for the boards' palette.
// An existing project/canvas.json in the folder (read from the canvas first) keeps every key the boards don't own.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, resolve, basename, relative } from "node:path";
import { parseOutline } from "../build/outline.mjs";

const args = process.argv.slice(2);
const mode = args[0];
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : def;
};
const root = resolve(opt("root", ".deck/boards/canvas"));
const project = join(root, "project");
const readJson = (p, def) => (existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : def);
const assets = readJson(resolve(opt("assets", ".deck/boards/assets.json")), {});

// boards.mjs asset <file> <url>: records an upload in the assets map
if (mode === "asset") {
  const file = resolve(opt("assets", ".deck/boards/assets.json"));
  const [, path, url] = args;
  if (!path || !url?.startsWith("/_blob/")) {
    console.error("boards: asset <file> </_blob/… url>");
    process.exit(1);
  }
  mkdirSync(resolve(file, ".."), { recursive: true });
  writeFileSync(file, JSON.stringify({ ...assets, [relative(process.cwd(), resolve(path))]: url }, null, 2) + "\n");
  console.log(`boards: ${relative(process.cwd(), resolve(path))} → ${url}`);
  process.exit(0);
}
const plan = readJson(resolve(opt("plan", "docs/boards.json")), { round: 1, stops: {} });
const { map, errors } = parseOutline(readFileSync(resolve(opt("outline", "inputs/outline.md")), "utf8"));
if (errors.length) {
  errors.forEach((e) => console.error(`error ${e}`));
  console.error("boards: fix the outline first (npm run outline)");
  process.exit(1);
}
const stops = map.acts.flatMap((a) => a.stops.map((s) => ({ ...s, actName: a.name })));
if (!["draft", "renders"].includes(mode)) {
  console.error("boards: draft | renders | asset <file> <url> (framework/skills/deck-boards/SKILL.md)");
  process.exit(1);
}

// The look of the deck's page (framework/css/tokens.css), so a board reads as the deck will
const W = 1280;
const H = 720;
// The plan's "theme" picks the palette (light: the paper backdrop; blueprint: white on blue with a grid), its
// "energy" the colour of the red word and the lit names
const THEMES = {
  light: { red: "#c8102e", ink: "#1e1e1e", muted: "#747775", lead: "#8b8590", backdrop: "linear-gradient(90deg, #fff6f5 6%, #e3e8fc 100%)", panel: "background: #ffffff; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06)", chip: "rgba(255, 255, 255, 0.74)" },
  blueprint: {
    red: "#f2b632",
    ink: "#ffffff",
    muted: "#c9d8ee",
    lead: "#9fb8de",
    backdrop: "linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px) 0 0 / 32px 32px, linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px) 0 0 / 32px 32px, #0f4c9c",
    panel: "background: #0b3a78; border: 1px solid rgba(255, 255, 255, 0.35)",
    chip: "#0b3a78",
  },
};
const T = { ...(THEMES[plan.theme] || THEMES.light), ...(plan.energy ? { red: plan.energy } : {}) };
const FONT = "Nunito, sans-serif";
const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
const asset = (file) => {
  const url = assets[file] || assets[`inputs/illustrations/${file}`] || assets[basename(file)];
  if (!url) missing.add(file);
  return url;
};
const missing = new Set();

const page = (title, body, w = W, h = H) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&amp;display=swap">
<style>
body{margin:0}
</style>
</helmet>
<div style="width: ${w}px; height: ${h}px; position: relative; overflow: hidden; box-sizing: border-box; font-family: ${FONT}; color: ${T.ink}; background: ${T.backdrop}">
${body}
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":${w},"height":${h}}}'>
class Component extends DCLogic {
renderVals() {
return {};
}
}
</script>
</body>
</html>
`;

// The red word: the plan names it, the title keeps the rest
const titled = (title, red) => {
  if (!red || !title.includes(red)) return esc(title);
  const i = title.indexOf(red);
  return `${esc(title.slice(0, i))}<em style="font-style: normal; color: ${T.red}">${esc(red)}</em>${esc(title.slice(i + red.length))}`;
};

// An image's size from its file header (PNG, JPEG, SVG viewBox), so boards can place names on it exactly
function imageSize(file) {
  const path = [file, join("inputs/illustrations", file)].map((f) => resolve(f)).find(existsSync);
  if (!path) return null;
  const b = readFileSync(path);
  if (b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b[0] === 0xff && b[1] === 0xd8) {
    for (let i = 2; i < b.length - 9; ) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      if (marker >= 0xc0 && marker <= 0xc3) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + b.readUInt16BE(i + 2);
    }
    return null;
  }
  const vb = b.toString("utf8", 0, 2000).match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);
  return vb ? [Number(vb[1]), Number(vb[2])] : null;
}

// The scene area of a stop board: the subject illustrations side by side, each fitted in an equal slot, and
// the leader names drawn on them as the deck draws them (a dot on the part, a line to an elbow, the name on its
// tail). A leader is a name (listed under the scene) or { name, on: <subject>, at: [x, y], to: [dx, dy] }: at is
// the dot, as fractions of that illustration; to the elbow's offset in px (default: outward and up).
function sceneArea(p, x0) {
  const W0 = 684, H0 = 470, Y0 = 90, GAP = 16;
  const files = (p.subjects || []).filter((f) => asset(f));
  if (!files.length)
    return `<div style="position: absolute; top: ${Y0}px; left: ${x0}px; width: ${W0}px; height: ${H0}px; box-sizing: border-box; border: 2px dashed ${T.lead}; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 16px; color: ${T.muted}">illustration</div>`;
  const slot = (W0 - GAP * (files.length - 1)) / files.length;
  const rects = {};
  const imgs = files.map((f, i) => {
    const [iw, ih] = imageSize(f) || [slot, H0];
    const k = Math.min(slot / iw, H0 / ih);
    const r = { x: x0 + i * (slot + GAP) + (slot - iw * k) / 2, y: Y0 + (H0 - ih * k) / 2, w: iw * k, h: ih * k };
    rects[f] = r;
    return `<img src="${asset(f)}" alt="" style="position: absolute; left: ${r.x.toFixed(1)}px; top: ${r.y.toFixed(1)}px; width: ${r.w.toFixed(1)}px; height: ${r.h.toFixed(1)}px">`;
  });
  const placed = [];
  const loose = [];
  for (const l of p.leaders || []) {
    const r = typeof l === "object" && rects[l.on];
    if (!r || !l.at) {
      loose.push(typeof l === "object" ? l.name : l);
      continue;
    }
    const ax = r.x + l.at[0] * r.w;
    const ay = r.y + l.at[1] * r.h;
    let [dx, dy] = l.to || [l.at[0] < 0.5 ? -60 : 60, -46];
    // A name never runs under the card: it turns to the other side
    const width = l.name.length * 9 + 18;
    const card = x0 > 300 ? [56, 506] : [774, 1224];
    const span = dx < 0 ? [ax + dx - width, ax + dx] : [ax + dx, ax + dx + width];
    if (span[0] < card[1] && span[1] > card[0]) dx = -dx;
    const ex = ax + dx;
    const ey = ay + dy;
    const side = dx < 0 ? "right" : "left";
    const edge = dx < 0 ? 1280 - ex : ex;
    placed.push(`<svg aria-hidden="true" width="1280" height="720" style="position: absolute; left: 0; top: 0; overflow: visible; pointer-events: none"><polyline points="${ax.toFixed(1)},${ay.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}" fill="none" stroke="${T.lead}" stroke-width="1.4"></polyline><circle cx="${ax.toFixed(1)}" cy="${ay.toFixed(1)}" r="3.5" fill="${T.ink}"></circle></svg>
<span style="position: absolute; ${side}: ${edge.toFixed(1)}px; top: ${(ey - 28).toFixed(1)}px; height: 28px; box-sizing: border-box; padding: 3px 8px; background: ${T.chip}; border-bottom: 1.4px solid ${T.lead}; border-radius: 4px 4px 0 0; font-size: 15px; font-weight: 700; white-space: nowrap">${esc(l.name)}</span>`);
  }
  const list = loose.length
    ? `<div style="position: absolute; top: 572px; left: ${x0}px; width: ${W0}px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center">${loose
        .map((l) => `<span style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 10px; background: ${T.chip}; border-radius: 6px; font-size: 15px; font-weight: 700"><span style="width: 8px; height: 8px; border-radius: 50%; background: ${T.lead}"></span>${esc(l)}</span>`)
        .join("")}</div>`
    : "";
  return [...imgs, ...placed, list].filter(Boolean).join("\n");
}

function stopBoard(s, n, p = {}) {
  const left = (p.side || "left") !== "right";
  const card = `<div style="position: absolute; top: 110px; ${left ? "left" : "right"}: 56px; width: 430px; box-sizing: border-box; padding: 28px 30px; ${T.panel}; border-radius: 14px; display: flex; flex-direction: column; gap: 12px">
<p style="margin: 0; font-size: 14px; font-weight: 700; color: ${T.muted}">${String(n).padStart(2, "0")}</p>
<h2 style="margin: 0; font-size: 30px; line-height: 1.15; font-weight: 800">${titled(s.title, p.red)}</h2>
<p style="margin: 0; font-size: 16px; line-height: 1.45">${esc(s.says)}</p>
${s.beats.length ? `<ol style="margin: 4px 0 0; padding: 0 0 0 18px; font-size: 13px; line-height: 1.4; color: ${T.muted}; display: flex; flex-direction: column; gap: 4px">${s.beats.map((b) => `<li>Beat ${b.n}: ${esc(b.text)}</li>`).join("")}</ol>` : ""}
</div>`;
  const sceneX = left ? 540 : 56;
  const scene = sceneArea(p, sceneX);
  const caption = [p.arrive && `Arrives: ${p.arrive}${p.move ? ` (${p.move})` : ""}`, p.shot && `Shot: ${p.shot}`, s.sees && `On screen: ${s.sees}`, p.note && `Note: ${p.note}`].filter(Boolean);
  const hud = `<p style="position: absolute; top: 34px; left: 56px; margin: 0; font-size: 14px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: ${T.muted}">${esc(s.actName)} › ${esc(s.title)}</p>
<p style="position: absolute; top: 34px; right: 56px; margin: 0; font-size: 13px; font-weight: 700; color: ${T.muted}">R${plan.round || 1}${s.draft ? " · draft" : ""}</p>
<p style="position: absolute; bottom: 26px; right: 56px; margin: 0; font-size: 14px; font-weight: 700; color: ${T.muted}">${n} / ${stops.length}</p>`;
  const foot = caption.length ? `<div style="position: absolute; bottom: 24px; left: ${sceneX}px; width: 600px; display: flex; flex-direction: column; gap: 4px; font-size: 13px; line-height: 1.35; color: ${T.muted}">${caption.map((c) => `<p style="margin: 0">${esc(c)}</p>`).join("")}</div>` : "";
  return page(`${s.id} · ${s.title}`, [scene, card, hud, foot].filter(Boolean).join("\n"));
}

function mainBoard() {
  const acts = map.acts.map((a) => `<li><span style="font-weight: 800">${esc(a.name)}</span> · ${a.stops.length} stop${a.stops.length > 1 ? "s" : ""}</li>`).join("");
  return page(
    map.title,
    `<div style="position: absolute; inset: 0; padding: 90px 96px; box-sizing: border-box; display: flex; flex-direction: column; gap: 22px">
<p style="margin: 0; font-size: 14px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: ${T.muted}">Boards · ${mode === "renders" ? "renders from the deck" : `round ${plan.round || 1}`}</p>
<h1 style="margin: 0; font-size: 56px; line-height: 1.1; font-weight: 800">${esc(map.title)}</h1>
${map.subtitle ? `<p style="margin: 0; font-size: 24px; color: ${T.muted}">${esc(map.subtitle)}</p>` : ""}
<p style="margin: 12px 0 0; font-size: 24px; line-height: 1.4; max-width: 900px">${esc(map.outcome)}</p>
<p style="margin: 0; font-size: 16px; color: ${T.muted}">${esc([map.audience, map.length].filter(Boolean).join(" · "))}</p>
<ol style="margin: 8px 0 0; padding: 0 0 0 20px; font-size: 18px; line-height: 1.6">${acts}</ol>
</div>`,
  );
}

// The views a render board shows: each stop, then each of its beats, as qa names its shots (NN.B.png)
function views(shots) {
  const files = existsSync(shots) ? readdirSync(shots).filter((f) => /^\d+\.\d+\.png$/.test(f)) : [];
  if (!files.length) {
    console.error(`boards: no shots in ${shots}; run npm run qa -- shots --page <page> --vp 1920x1080 --out qa/boards`);
    process.exit(1);
  }
  return stops.map((s, i) => files.filter((f) => Number(f.split(".")[0]) === i + 1).sort((a, b) => Number(a.split(".")[1]) - Number(b.split(".")[1])));
}

mkdirSync(project, { recursive: true });
const boards = { "Main.dc.html": { x: 0, y: 0, w: W, h: H, title: map.title } };
const order = ["Main.dc.html"];
const notes = {};
const write = (name, html) => writeFileSync(join(project, name), html);
write("Main.dc.html", mainBoard());

let y = H + 400;
const shotDir = resolve(opt("shots", "qa/boards"));
const shotViews = mode === "renders" ? views(shotDir) : null;
let n = 0;
for (const act of map.acts) {
  let x = 0;
  for (const s of act.stops) {
    n++;
    const frames =
      mode === "draft"
        ? [{ name: `${s.id}.dc.html`, title: `${s.id} · ${s.title}`, html: stopBoard({ ...s, actName: act.name }, n, plan.stops?.[s.id]) }]
        : shotViews[n - 1].map((f, b) => {
            const url = asset(relative(process.cwd(), join(shotDir, f)));
            const label = b ? `${s.id} · beat ${b + 1}` : `${s.id} · ${s.title}`;
            return { name: `${s.id}${b ? `.b${b + 1}` : ""}.dc.html`, title: label, html: page(label, url ? `<img src="${url}" alt="" style="width: ${W}px; height: ${H}px; display: block">` : `<p style="margin: 0; padding: 40px; color: ${T.muted}">${esc(f)} is not uploaded yet</p>`) };
          });
    for (const f of frames) {
      write(f.name, f.html);
      boards[f.name] = { x, y, w: W, h: H, title: f.title };
      order.push(f.name);
      x += W + 80;
    }
  }
  notes[`act-${act.id}`.slice(0, 40)] = { x: 0, y: y - 260, text: act.name, kind: "title1", maxW: Math.max(x - 80, W) };
  y += H + 400;
}

// Merge into the canvas's own index: keep what the boards don't own (design systems, the owner's notes, pages)
const indexPath = join(project, "canvas.json");
const current = readJson(indexPath, null);
const owned = (k) => k === "Main.dc.html" || stops.some((s) => k === `${s.id}.dc.html` || k.startsWith(`${s.id}.b`));
const index = current || { v: 3, createdOnFiles: { v: 1, at: new Date().toISOString().replace(/\.\d+Z$/, "Z") }, title: map.title, launch: { view: "canvas" }, pages: [], boards: {}, order: [], notes: {}, designSystems: [] };
const keptBoards = Object.fromEntries(Object.entries(index.boards || {}).filter(([k]) => !owned(k)));
index.boards = { ...keptBoards, ...boards };
index.order = [...(index.order || []).filter((k) => !owned(k)), ...order];
index.notes = { ...Object.fromEntries(Object.entries(index.notes || {}).filter(([k]) => !k.startsWith("act-"))), ...notes };
// --ds <url> --ds-name <title>: the design system's record (its tokens.json is copied in by the publish call)
const ds = opt("ds", null);
const dsFolder = ds ? (opt("ds-name", "ds").toLowerCase().replace(/[^a-z0-9_]+/g, "-").replace(/^[-_]+|-+$/g, "").slice(0, 64) || "ds") : null;
if (ds && !(index.designSystems || []).some((d) => d.artifact === ds))
  index.designSystems = [...(index.designSystems || []), { title: opt("ds-name", "Design system"), namespace: dsFolder, artifact: ds, version: null, copiedAt: new Date().toISOString().replace(/\.\d+Z$/, "Z") }];
writeFileSync(indexPath, JSON.stringify(index, null, 2) + "\n");

const stale = Object.keys(current?.boards || {}).filter((k) => owned(k) && !boards[k]);
console.log(`boards: ${order.length} artboards in ${project}`);
if (dsFolder) console.log(`boards: publish with files["project/ds/${dsFolder}/tokens.json"] = { artifact: "${ds}", path: "project/tokens.json" }`);
if (stale.length) console.log(`boards: no longer written, remove from the canvas with null: ${stale.join(", ")}`);
if (missing.size) {
  console.log(`boards: ${missing.size} file(s) not uploaded yet (upload them, add their urls to the assets map, run again):`);
  missing.forEach((f) => console.log(`  ${f}`));
}
