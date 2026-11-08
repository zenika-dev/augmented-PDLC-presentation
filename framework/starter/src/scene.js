// A toy scene for the starter deck: a base plate, a core that lifts out of it, and a test bench to visit as a
// set, far enough from the machine to stand alone. It fills every required field of the contract (framework/docs/contract.md) and nothing more.
import * as THREE from "three";
import { defineScene, defineSet } from "../../scene/scene.js";
import { orbit, aside } from "../../scene/shots.js";
import { at, box, cyl } from "../../scene/kit.js";
import { leader, showLabels } from "../../scene/labels.js";
import { focusTargets, applyFocus, energize, charge } from "../../scene/parts.js";
import { patch, readEdition, pageLang } from "../../data/lists.js";
import { SECTIONS, QUESTIONS, MENTION } from "./lists.js";

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const isUnit = (x) => x !== "" && Number(x) >= 0 && Number(x) <= 1;

// The lists the HUD shows; an edition or a language may patch them
const base = () => ({ sections: structuredClone(SECTIONS), questions: structuredClone(QUESTIONS), mention: MENTION });
const listsFor = (edition) => {
  const L = base();
  patch(L.sections, edition?.sections);
  patch(L.questions, edition?.questions);
  if (edition?.mention) L.mention = edition.mention;
  return L;
};
const LISTS = listsFor(readEdition());

// The test bench: a place of its own, beside the machine
const BENCH = defineSet({
  name: "bench",
  points: { "bench:top": [null, v(1.2, 0.15, 0.6), ["bench"]] },
  build() {
    const group = new THREE.Group();
    group.add(box(5, 0.3, 3, ["bench"]), at(box(0.3, 1.4, 0.3, ["bench"]), -2, -0.85, 1));
    group.position.set(40, 0, 0);
    return { group };
  },
});

function createEngine(threeScene, { buildSets }) {
  const root = new THREE.Group();
  threeScene.add(root);
  const plate = box(6, 0.5, 6, ["base"]);
  const core = cyl(1.2, 3, ["core"], undefined, 48);
  root.add(plate, core);
  const plateName = leader("Base plate", "parts", "", "Holds the core", "notes");
  plateName.position.set(2.6, 0.25, 2.6);
  plate.add(plateName);
  const coreName = leader("Core", ["parts", "core"]);
  coreName.position.set(0, 1.2, 1.2);
  core.add(coreName);
  const sets = buildSets ? buildSets(root) : null;
  if (sets) root.add(sets.group);

  const meshes = [];
  root.traverse((o) => o.isMesh && o.material.uniforms?.dim && meshes.push(o));
  let current = { lift: 0 };
  let key = null;
  let targets = null;
  const apply = (s) => {
    core.position.y = 1.75 + 2.5 * s.lift;
    return { coreTop: core.position.y + 1.5 };
  };
  apply(current);
  return {
    root,
    sets,
    get state() {
      return current;
    },
    set(s) {
      current = s;
      return apply(s);
    },
    focus(tags, t, context) {
      if (`${tags}|${context}` !== key) {
        key = `${tags}|${context}`;
        targets = focusTargets(meshes, tags, context);
      }
      return applyFocus(meshes, targets, t);
    },
    align() {},
    relayout() {},
    energize: (tags) => energize(root, tags),
    charge: (tags, lags) => charge(root, tags, lags),
    labels: (groups) => showLabels(root, groups),
  };
}

export default defineScene({
  name: "starter",
  create: createEngine,
  defaults: () => ({ lift: 0 }),
  // data-lift (0–1): the core raised out of the plate
  stopState: (data) => ({ lift: Number(data.lift || 0) }),
  shots: {
    hero: orbit(135, 24, 40, aside(135, -4, 1.5), 8),
    close: orbit(150, 26, 30, aside(150, -3.5, 3.2), 6),
  },
  defaultShot: "hero",
  anchor: (name, layout) => (name === "core" ? v(0, layout.coreTop, 0) : v(0, 0, 0)),
  lists: () => LISTS,
  pageLists: (lang, edition) => listsFor(edition),
  sets: {
    defs: [BENCH],
    shots: { bench: { az: 200, elev: 22, dist: 26, k: -4, at: v(40, 0, 0) } },
    leads: () => ({ "bench:top": ["Test bench", "Each part is tested here"] }),
  },
  schema: {
    shotNames: () => ["bench"],
    anchor: () => (name) => ["core", "screen"].includes(name),
    attributes: () => ({ "data-lift": { check: isUnit, doc: "0–1: the core raised out of the plate" } }),
  },
  debug: { lang: pageLang() },
});
