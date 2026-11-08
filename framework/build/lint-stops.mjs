// Checks every stop and beat attribute that names something (shots, anchors, sections, questions, sets, the
// scene's own lists) or carries a number, so a typo fails the build instead of giving a NaN camera, an empty
// crumb or a stalled frame loop. The core's attributes are below; the scene adds its own (scene.schema).
// Label groups and tags name parts of the built scene: framework/qa checks those in the browser.
const items = (v) => v.split(",").map((s) => s.trim()).filter(Boolean);
const isNum = (v) => v !== "" && Number.isFinite(Number(v));
const unit = (v) => isNum(v) && Number(v) >= 0 && Number(v) <= 1;
const pairs = (v, ok) =>
  items(v).every((p) => {
    const [k, x] = p.split("=");
    return k && x !== undefined && ok(x);
  });
const at = (x) => x.split("/").length === 2 && x.split("/").every(unit);
const tags = () => true;

// Attributes in the stops that carry content for the core's markup rather than a stop's state: never typos
const PASSIVE = new Set(["data-list", "data-dock-list"]);

// The core's attributes: { check(value, ctx) → ok, doc, beat }. ctx: { L (the page's lists), shot(name),
// anchor(name), sets (names), themes (names), questions (whether the HUD shows them) }
export const CORE_ATTRIBUTES = {
  "data-shot": { check: (v, c) => c.shot(v), beat: true, doc: "the camera shot: a name the scene (or a set) defines, or kind:id" },
  "data-move": { check: (v) => ["cut", "slow", "fast"].includes(v), beat: true, doc: "cut | slow | fast: how the camera gets here (default: a 1.6 s move; slow 2.6 s, fast 0.9 s, cut jumps)" },
  "data-anchor": { check: (v, c) => c.anchor(v), doc: "where the card hangs: a point the scene names, or screen (fixed on screen)" },
  "data-side": { check: (v) => ["left", "right", "center"].includes(v), doc: "left | right | center: the card's side of its anchor" },
  "data-dock": { check: (v) => v === "bottom", doc: "bottom: a screen card sits at the bottom instead of mid-height" },
  "data-section": { check: (v, c) => c.L.sections.some((s) => s.id === v), doc: "section id: the breadcrumb's section and the bar segment it fills" },
  "data-crumb": { check: () => true, beat: true, doc: "the part on screen, after the section in the breadcrumb" },
  "data-answers": { check: (v, c) => items(v).every((id) => c.L.questions.some((q) => q.id === id)), beat: true, doc: "question ids this step speaks to (HUD questions module)" },
  "data-source": { check: () => true, doc: "the source line in the footer: every figure on the card names its source here" },
  "data-hud": { check: (v) => ["bare", "crumb"].includes(v), beat: true, doc: "bare (no top-left block) | crumb (no questions)" },
  "data-theme": { check: (v, c) => c.themes.includes(v), doc: "a page theme for this stop (blueprint: dark backdrop, white lines)" },
  "data-set": { check: (v, c) => c.sets.includes(v), doc: "the set this stop visits (a cut, a portal or a turntable from the last one)" },
  "data-labels": { check: tags, beat: true, doc: "label groups on show" },
  "data-focus": { check: tags, beat: true, doc: "tags of the parts in focus; the rest fades" },
  "data-context": { check: tags, beat: true, doc: "tags of the parts that fade only a bit" },
  "data-energize": { check: tags, beat: true, doc: "tags of the parts drawn in the energy colour (role lens), their names too" },
  "data-pulse": { check: tags, beat: true, doc: "tags of the parts the energy wave runs through" },
  "data-pulse-lag": { check: (v) => pairs(v, isNum), beat: true, doc: "tag=units,…: the wave reaches those parts later" },
  "data-lead-side": { check: (v) => ["left", "right"].includes(v), beat: true, doc: "left | right: the side of every leader name" },
  "data-lead-column": { check: unit, beat: true, doc: "0–1: with a side, the names stacked in one column at that screen x" },
  "data-lead-drop": { check: unit, beat: true, doc: "0–1: free names try an elbow at that screen height first" },
  "data-lead-at": { check: (v) => pairs(v, at), beat: true, doc: "key=x/y,…: that name's elbow at those fractions of the screen" },
  "data-lead-at-phone": { check: (v) => pairs(v, at), beat: true, doc: "the same on phones" },
  "data-beat": { check: isNum, doc: "on a card item: lit on beat n" },
  "data-from": { check: isNum, doc: "on a card item: shown from beat n on" },
};

// src: the page's path (for messages); html: its source; scene: defineScene(…); L: scene.pageLists(lang, edition);
// options: { questions: whether the HUD shows them, themes: theme names }
// Returns { errors, warnings }
export function lintStops(src, html, scene, L, { questions = true, themes = ["light", "dark", "blueprint"] } = {}) {
  const schema = scene.schema || {};
  const kinds = schema.shotKinds ? schema.shotKinds(L) : {};
  const names = new Set([...Object.keys(scene.shots || {}), ...Object.keys(scene.sets?.shots || {}), ...(schema.shotNames ? schema.shotNames() : [])]);
  const ctx = {
    L,
    themes,
    sets: (scene.sets?.defs || []).map((d) => d.name),
    shot(v) {
      if (names.has(v)) return true;
      const i = v.indexOf(":");
      const kind = i < 0 ? v : v.slice(0, i);
      return !!kinds[kind] && kinds[kind](i < 0 ? "" : v.slice(i + 1));
    },
    anchor: schema.anchor ? schema.anchor(L) : (v) => v === "screen",
  };
  const rules = { ...CORE_ATTRIBUTES, ...(schema.attributes ? schema.attributes(L) : {}) };
  const attrs = (tag) => Object.fromEntries([...tag.matchAll(/\s(data-[\w-]+)(?:="([^"]*)")?/g)].map((m) => [m[1], m[2] ?? ""]));
  const errors = [];
  const warnings = [];
  const stops = html.split('<div id="stops">')[1]?.split(/<div class="hud"/)[0];
  if (!stops) return { errors: [`${src}: no <div id="stops">`], warnings };
  let stop = 0;
  let beat = 0;
  // A beat shows the stop's attributes plus its own, never an earlier beat's (framework/core/stops.js view): what
  // the previous beat set and this one leaves out reverts to the stop's value
  let stopAttrs = {};
  let prev = null;
  for (const m of stops.matchAll(/<(section|div|span|li|p|ul)\b[^>]*>/g)) {
    const tag = m[0];
    const isStop = /\bclass="[^"]*\bstop\b/.test(tag);
    const isBeat = /\bclass="[^"]*\bbeat\b/.test(tag);
    if (isStop) {
      stop++;
      beat = 0;
      stopAttrs = attrs(tag);
      prev = null;
    } else if (isBeat) beat++;
    const where = `${src}: step ${stop}${beat > 1 ? `.${beat}` : ""}`;
    if (isBeat) {
      const own = attrs(tag);
      for (const [name, value] of Object.entries(prev || {})) {
        if (name in own || value === (stopAttrs[name] ?? "")) continue;
        const back = name in stopAttrs ? `the stop's "${stopAttrs[name]}"` : "nothing (the stop does not set it)";
        warnings.push(`${where}: ${name}="${value}" from the beat before reverts to ${back}: repeat it, or write ${name}="${stopAttrs[name] ?? ""}" here if the revert is meant`);
      }
      prev = own;
    }
    for (const [name, value] of Object.entries(attrs(tag))) {
      const rule = rules[name];
      // A data-* attribute no schema declares does nothing: most often a typo (data-juce for data-juice)
      if (!rule) {
        if (!PASSIVE.has(name)) errors.push(`${where}: ${name} is not an attribute the core or the scene reads`);
        continue;
      }
      if (name === "data-answers" && !questions) {
        warnings.push(`${where}: ${name}="${value}" (the HUD's questions are off on this page)`);
        continue;
      }
      if (isBeat && !rule.beat && !["data-beat", "data-from"].includes(name)) warnings.push(`${where}: ${name} on a beat has no effect`);
      if (!rule.check(value, ctx)) errors.push(`${where}: ${name}="${value}"`);
    }
  }
  return { errors, warnings };
}
