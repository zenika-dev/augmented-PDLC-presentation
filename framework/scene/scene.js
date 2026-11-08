// The contract between the deck core and a deck's scene: what the scene builds, the state a stop sets, the
// shots, anchors and roles it names, and the attributes it adds to stops and beats. framework/docs/contract.md
// describes each field; framework/starter/ is the smallest scene that fills them.
//
// defineScene({
//   name,
//   camera(page) → { fov, near, far }       page: { sets } (whether the page visits sets)
//   roles: { tag: role }                    tag → line-art role (energy, soft, accent, ink, part); "x:*" = prefix
//   create(threeScene, { buildSets }) → engine
//       engine: { root, state, set(state) → layout, focus(tags, t, context) → moving, align(camera),
//                 relayout(), energize(tags), charge(tags, lags), labels(groups), sets }
//       buildSets(root) → sets, or null when the page visits none: call it once the scene's parts are built
//   defaults() → state                      plain object of numbers (nested objects allowed), blended between stops
//   stopState(data) → state                 a stop's target state from its data-* attributes
//   enter(stop, from, to, { forward })      optional: adjust the target as a stop is entered
//   beatState(to, shown, stop) → patch|null optional: the state a beat changes (null: none)
//   holdOnBeat: [keys]                      keys that keep their current value when a beat changes the state
//   shots: { name: shot }, shotKinds: { kind: (id, layout) → shot }, defaultShot
//   anchor(name, layout) → Vector3          where a card hangs (data-anchor)
//   pulseBand(id, layout) → [lo, hi]        optional: the height the energy wave may light (data-pulse-band)
//   motion(engine) → { tick(dt, stop, reduced) → ambient, adjust(state), after(state, now), reset() }  optional
//   lists() → { sections, questions, mention }   what the HUD shows, after the language and edition patches
//   sets: { defs: [defineSet(…)], shots, leads(), attach }   optional
//   schema: { attributes, labelGroups, tags }   what the build's lint checks (framework/build/lint-stops.mjs)
// })

const REQUIRED = ["name", "create", "defaults", "stopState", "shots", "defaultShot", "lists"];

export function defineScene(scene) {
  const missing = REQUIRED.filter((k) => scene[k] === undefined);
  if (missing.length) throw new Error(`defineScene(${scene.name || "?"}): missing ${missing.join(", ")}`);
  return {
    camera: () => ({ fov: 22, near: 0.1, far: 300 }),
    roles: { energy: "energy", accent: "accent", soft: "soft" },
    holdOnBeat: [],
    shotKinds: {},
    schema: {},
    ...scene,
  };
}

// A set: a place a stop can visit (data-set). framework/scene/sets.js documents the fields
export function defineSet(set) {
  if (!set.name || typeof set.build !== "function") throw new Error(`defineSet: a set needs a name and build()`);
  return set;
}

// A state's own copy: numbers and nested plain objects
export function copyState(s) {
  const out = {};
  Object.keys(s).forEach((k) => (out[k] = s[k] && typeof s[k] === "object" ? copyState(s[k]) : s[k]));
  return out;
}

// Every number in a eased towards b by t, nested objects included (keys come from a)
export function blendState(a, b, t) {
  const out = {};
  Object.keys(a).forEach((k) => {
    const x = a[k];
    out[k] = x && typeof x === "object" ? blendState(x, b[k], t) : x + (b[k] - x) * t;
  });
  return out;
}
