// The engine's own stop and beat attributes, for the build's lint (framework/build/lint-stops.mjs) and the
// attribute reference (framework/docs/contract.md). L: the page's lists (scene.pageLists), so an edition's
// sections, questions and shapes count. Each rule: { check(value) → ok, doc, beat: whether a beat may set it }.
import { SHOTS } from "./shots.js";
import { SET_SHOTS } from "./engine/sets.js";

const items = (v) => v.split(",").map((s) => s.trim()).filter(Boolean);
const isNum = (v) => v !== "" && Number.isFinite(Number(v));
const unit = (v) => isNum(v) && Number(v) >= 0 && Number(v) <= 1;
const percent = (v) => isNum(v) && Number(v) >= 0 && Number(v) <= 100;

export const schema = {
  // Shot kinds that take an id, and what the id names
  shotKinds(L) {
    const phases = L.phases.map((p) => p.id);
    const bands = L.bands.map((b) => b.id);
    return {
      phase: (id) => phases.includes(id),
      band: (id) => bands.includes(id),
      "band-high": (id) => bands.includes(id),
      spine: (id) => id === "",
    };
  },
  shotNames: () => [...Object.keys(SHOTS), ...Object.keys(SET_SHOTS)],
  // data-anchor: where a card hangs (screen: fixed on screen, the core's own)
  anchor(L) {
    const phases = L.phases.map((p) => p.id);
    const bands = L.bands.map((b) => b.id);
    return (v) => {
      const [kind, id] = v.split(":");
      if (["spine", "nexus", "screen"].includes(v)) return true;
      if (kind === "phase") return phases.includes(id);
      if (kind === "band") return bands.includes(id);
      return kind === "rim" && isNum(id);
    };
  },
  attributes(L) {
    const phases = L.phases.map((p) => p.id);
    const bands = L.bands.map((b) => b.id);
    const shapes = L.shapes.map((s) => s.name);
    // The engine's pillars, and the parts the sets show
    const parts = ["wheel", "nexus", "bands", "none", "rocket", "pad", "moon", "cartridges", "cartridge", "bay"];
    return {
      "data-explode": { check: unit, doc: "0–1: the bands pulled apart" },
      "data-telescope": { check: unit, beat: true, doc: "0–1: the Nexus tubes raised (a beat may set it)" },
      "data-split": { check: (v) => bands.includes(v), doc: "band id: that band lifted out of the stack" },
      "data-pulse-band": { check: (v) => bands.includes(v), beat: true, doc: "band id: the energy wave lights only that band's height" },
      "data-idea": { check: (v) => ["run", "drop"].includes(v) || phases.includes(v) || shapes.includes(v) || isNum(v), doc: "phase id | shape name | angle | run (travels its track) | drop: where the Idea goes" },
      "data-idle": { check: (v) => v === "", doc: "flag: the wheel and core turn slowly" },
      "data-parts": { check: (v) => items(v).every((p) => parts.includes(p)), doc: "which parts are in place: wheel, nexus, bands (none: no engine); on a set, its parts" },
      "data-separate": { check: unit, beat: true, doc: "rocket set, 0–1: the stages apart" },
      "data-open": { check: unit, beat: true, doc: "rocket set, 0–1: the fuselage open" },
      "data-score": { check: percent, beat: true, doc: "contract set, 0–100: the needle" },
      "data-rule": { check: percent, beat: true, doc: "contract set, 0–100: the rule ring" },
      "data-ceiling": { check: percent, beat: true, doc: "contract set, 0–100: the ceiling" },
      "data-rings": { check: (v) => items(v).every((r) => ["score", "rule", "ceiling"].includes(r)), beat: true, doc: "contract set: the rings on show" },
      "data-select": { check: isNum, beat: true, doc: "rocket set: the model bay's selected slot" },
    };
  },
};
