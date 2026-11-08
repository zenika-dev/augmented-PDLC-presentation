// The PDLC engine as a scene for the deck framework (framework/scene/scene.js): the wheel, the Nexus and the
// bands, the state a stop sets on them, the Idea running its track, the shots, the card anchors, and the sets
// a client edition visits. docs/model.md is the model; src/lists.js its lists.
import * as THREE from "three";
import { defineScene } from "../../../framework/scene/scene.js";
import { LOOP, SHAPES, BANDS, SECTIONS, CONCERNS, MENTION, LEADS, listsFor } from "./lists.js";
import { FR } from "./lists.fr.js";
import { WHEEL, RING, SPINE_POS, polar, phaseAngle, gateAngle, dropCentre } from "./geometry.js";
import { createEngine, defaultState } from "./engine/index.js";
import { SETS, ATTACH, SET_SHOTS } from "./engine/sets.js";
import { SHOTS, SHOT_KINDS } from "./shots.js";
import { list } from "../../../framework/core/stops.js";
import { schema } from "./schema.js";

const SPIN_SPEED = 0.06; // radians per second
const RUN_SPEED = 24; // degrees per second

const numberOr = (value, fallback) => (value === undefined || value === "" ? fallback : Number(value));

// Where the Idea goes on a stop; null keeps it where it is ("run" keeps it moving)
function ideaAngle(value) {
  if (!value || value === "run") return null;
  // The Idea stays on the loop; for Drop it waits at the G5 latch, where the side gear engages
  if (value === "drop") return gateAngle(4);
  const phase = LOOP.findIndex((p) => p.id === value);
  if (phase >= 0) return phaseAngle(phase);
  const shape = SHAPES.find((s) => s.name === value);
  if (shape) return shape.drop ? gateAngle(4) : shape.angle;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export default defineScene({
  name: "pdlc",

  // A deck whose stops visit sets (data-set) needs a deeper view to frame the rocket and its rooms
  camera: ({ sets }) => ({ fov: 22, near: sets ? 0.5 : 0.1, far: sets ? 2000 : 300 }),

  // Line art: the Idea and the Team core in energy red, the outer Nexus tubes in soft red, phase parts white
  // whatever their colour; dark parts (gates, rods) draw in ink
  roles: { idea: "energy", "level:team": "energy", energy: "energy", accent: "accent", nexus: "soft", soft: "soft", "phase:*": "part" },

  create: (threeScene, ctx) => createEngine(threeScene, ctx),

  defaults: defaultState,

  // data-explode, data-telescope (0–1), data-split <band id>, data-parts (which pillars are in place)
  stopState(data) {
    const s = defaultState();
    s.explode = Number(data.explode || 0);
    s.telescope = Number(data.telescope || 0);
    if (data.split) s.split[data.split] = 1;
    const parts = data.parts ? list(data.parts) : Object.keys(s.presence);
    Object.keys(s.presence).forEach((k) => (s.presence[k] = parts.includes(k) ? 1 : 0));
    return s;
  },

  // The Idea only moves clockwise going forward, and back the same way
  enter(stop, from, to, { forward }) {
    const target = ideaAngle(stop.data.idea);
    let ideaTo = target === null ? from.idea : target;
    if (forward && ideaTo < from.idea - 0.01) ideaTo += 360 * Math.ceil((from.idea - ideaTo) / 360);
    if (!forward && ideaTo > from.idea + 0.01) ideaTo -= 360 * Math.ceil((ideaTo - from.idea) / 360);
    to.idea = ideaTo;
  },

  // A beat may raise or lower the Nexus tubes (data-telescope); the Idea carries on from its current angle
  beatState(to, shown, stop) {
    const tel = numberOr(shown.telescope, stop.state.telescope);
    return to.telescope !== tel ? { telescope: tel } : null;
  },
  holdOnBeat: ["idea"],

  shots: SHOTS,
  shotKinds: SHOT_KINDS,
  defaultShot: "hero",

  // The world point a card hangs from (data-anchor), once the bands have landed (layout)
  anchor(name, layout) {
    const [kind, id] = (name || "").split(":");
    if (kind === "phase" && id === "drop") return dropCentre(0.4);
    if (kind === "phase") return polar(WHEEL.rOut + 0.9, phaseAngle(LOOP.findIndex((p) => p.id === id)), 0.4);
    if (kind === "band") return polar(RING.rOut + 1.2, 90, layout.bandMid[id]);
    if (kind === "spine") return polar(SPINE_POS.r + 0.8, SPINE_POS.angle, -2.2);
    if (kind === "rim") return polar(WHEEL.rOut + 1.2, Number(id), 0.6);
    if (kind === "nexus") return new THREE.Vector3(0, 1.4, 0);
    return new THREE.Vector3(0, 0, 0);
  },

  // data-pulse-band="<band id>": the wave only lights that band's height, Nexus slice included; [lo, hi] in world y
  pulseBand(id, layout) {
    const band = BANDS.find((b) => b.id === id);
    if (!band || !layout) return [-1e3, 1e3];
    const ys = band.layers.map((l) => layout.layerY[l.id]);
    return [Math.min(...ys) - 0.3, Math.max(...ys) + 0.45];
  },

  // Idle (data-idle): the wheel and core turn slowly in opposite directions; elsewhere they settle back to rest
  // by the shortest way. Run (data-idea="run"): the Idea travels its track, gates flashing as it passes
  motion(engine) {
    let spin = 0;
    let run = 0;
    return {
      tick(dt, stop, reduced) {
        const speed = reduced ? 0 : SPIN_SPEED;
        const idle = stop && stop.data.idle !== undefined;
        if (idle) spin += speed * dt;
        else {
          spin = Math.atan2(Math.sin(spin), Math.cos(spin));
          spin = Math.abs(spin) < 1e-4 ? 0 : spin + (0 - spin) * Math.min(1, dt * 3);
        }
        const spinning = speed > 0 && (spin !== 0 || idle);
        engine.spin(spin);
        const running = stop && stop.data.idea === "run";
        if (running) run += (reduced ? 0 : RUN_SPEED) * dt;
        return spinning || (!reduced && running);
      },
      // The running Idea's lap is folded into its start angle, so leaving a stop starts from where it is
      adjust(state) {
        state.idea += run;
      },
      after(state, now) {
        engine.flashGates(state.idea, now);
      },
      reset() {
        run = 0;
      },
    };
  },

  lists: () => ({ sections: SECTIONS, questions: CONCERNS, mention: MENTION }),
  // The same for one page in the build (Node): copies patched for its language and edition, with the lists
  // the lint checks names against
  pageLists(lang, edition) {
    const L = listsFor(lang, edition);
    return { ...L, questions: L.concerns, mention: edition?.mention ?? (lang === "fr" ? FR.mention : MENTION) };
  },

  sets: {
    defs: SETS,
    shots: SET_SHOTS,
    attach: ATTACH,
    leads: () => LEADS,
    // An edition's stop without data-set stands in the rocket
    defaultSet: "rocket",
  },

  schema,

  // On window.deck for headless checks
  debug: { BANDS },
});

