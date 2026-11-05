// Checks every stop and beat attribute that names something in src/ (shots, anchors, sections, questions,
// phases, shapes, bands, sets) or carries a number, so a typo fails the build instead of giving a NaN
// camera, an empty crumb or a stalled frame loop. Tags (data-focus, data-labels…) are not checked.
import { SECTIONS, CONCERNS, SHAPES, BANDS, PHASES } from "../src/data.js";
import { SHOTS } from "../src/shots.js";
import { SET_SHOTS, SET_NAMES } from "../src/engine/sets.js";

const attrs = (tag) => Object.fromEntries([...tag.matchAll(/\s(data-[\w-]+)(?:="([^"]*)")?/g)].map((m) => [m[1], m[2] ?? ""]));
const items = (v) => v.split(",").map((s) => s.trim()).filter(Boolean);
const isNum = (v) => v !== "" && Number.isFinite(Number(v));
const unit = (v) => isNum(v) && Number(v) >= 0 && Number(v) <= 1;

// edition: the page's #edition JSON or null; its lists replace ours as in applyEdition (src/data.js)
export function lintStops(src, html, edition) {
  const sections = (edition?.sections ?? SECTIONS).map((s) => s.id);
  const concerns = (edition?.concerns ?? CONCERNS).map((c) => c.id);
  const shapes = (edition?.shapes ?? SHAPES).map((s) => s.name);
  const bands = BANDS.map((b) => b.id);
  const phases = PHASES.map((p) => p.id);
  const shot = (v) => {
    if (SHOTS[v] || SET_SHOTS[v] || v === "spine") return true;
    const [kind, id] = v.split(":");
    return (kind === "phase" && phases.includes(id)) || (["band", "band-high"].includes(kind) && bands.includes(id));
  };
  const anchor = (v) => {
    const [kind, id] = v.split(":");
    if (["spine", "nexus", "screen"].includes(v)) return true;
    if (kind === "phase") return phases.includes(id);
    if (kind === "band") return bands.includes(id);
    return kind === "rim" && isNum(id);
  };
  const pairs = (v, ok) => items(v).every((p) => { const [k, x] = p.split("="); return k && x !== undefined && ok(x); });
  const RULES = {
    "data-shot": shot,
    "data-anchor": anchor,
    "data-section": (v) => sections.includes(v),
    "data-answers": (v) => items(v).every((id) => concerns.includes(id)),
    "data-idea": (v) => ["run", "drop"].includes(v) || phases.includes(v) || shapes.includes(v) || isNum(v),
    "data-split": (v) => bands.includes(v),
    "data-pulse-band": (v) => bands.includes(v),
    "data-set": (v) => SET_NAMES.includes(v),
    "data-side": (v) => ["left", "right", "center"].includes(v),
    "data-lead-side": (v) => ["left", "right"].includes(v),
    "data-hud": (v) => ["bare", "crumb"].includes(v),
    "data-dock": (v) => v === "bottom",
    "data-theme": (v) => ["light", "dark", "blueprint"].includes(v),
    "data-explode": unit,
    "data-telescope": unit,
    "data-lead-column": unit,
    "data-lead-drop": unit,
    "data-lead-at": (v) => pairs(v, (x) => x.split("/").length === 2 && x.split("/").every(unit)),
    "data-lead-at-phone": (v) => pairs(v, (x) => x.split("/").length === 2 && x.split("/").every(unit)),
    "data-pulse-lag": (v) => pairs(v, isNum),
    "data-beat": isNum,
    "data-from": isNum,
  };
  const errors = [];
  const stops = html.split('<div id="stops">')[1]?.split(/<div class="hud"/)[0];
  if (!stops) return [`${src}: no <div id="stops">`];
  let stop = 0;
  let beat = 0;
  for (const m of stops.matchAll(/<(section|div|span|li|p)\b[^>]*>/g)) {
    const tag = m[0];
    if (/\bclass="[^"]*\bstop\b/.test(tag)) { stop++; beat = 0; }
    else if (/\bclass="[^"]*\bbeat\b/.test(tag)) beat++;
    for (const [name, value] of Object.entries(attrs(tag))) {
      if (RULES[name] && !RULES[name](value)) errors.push(`${src}: step ${stop}${beat > 1 ? `.${beat}` : ""}: ${name}="${value}"`);
    }
  }
  return errors;
}
