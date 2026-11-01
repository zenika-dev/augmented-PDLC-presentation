// Engine parts and their look: line-art meshes, focus fades, the role lens and the energy pulse.
// Each mesh keeps its base role in userData.role; the role lens (energize) and the gate flash both draw
// over it and fall back to it.
import * as THREE from "three";
import { lineMaterial, ROLE } from "./render/lineart.js";

// Line art: the Idea and the Team core in red, the outer Nexus tubes in soft red, gates and rods in ink, the rest white
function role(color, tags) {
  if (tags.includes("idea") || tags.includes("level:team")) return ROLE.red;
  if (tags.includes("nexus")) return ROLE.soft;
  if (tags.some((t) => t.startsWith("phase:"))) return ROLE.part;
  return new THREE.Color(color).getHSL({}, THREE.SRGBColorSpace).l < 0.2 ? ROLE.ink : ROLE.part;
}

export function mesh(geo, color, tags) {
  const base = role(color, tags);
  const m = new THREE.Mesh(geo, lineMaterial(base));
  m.userData.tags = tags;
  m.userData.role = base;
  return m;
}

// Focus fades the lines of everything else (still opaque: paper hides what is behind).
// Parts tagged in `context` fade only a bit, so the focus stands out inside its own assembly.
export function focusTargets(meshes, focus, context = null) {
  return meshes.map((m) => {
    const tags = m.userData.tags || [];
    const has = (list) => list && list.some((f) => tags.includes(f));
    return !focus || has(focus) ? 0 : has(context) ? 0.45 : 1;
  });
}

// Eases each part's fade towards its target by t (0–1); returns whether any part is still fading
export function applyFocus(meshes, targets, t) {
  let moving = false;
  meshes.forEach((m, i) => {
    const u = m.material.uniforms;
    const d = targets[i] - u.dim.value;
    if (Math.abs(d) < 0.002) u.dim.value = targets[i];
    else {
      u.dim.value += d * t;
      moving = true;
    }
  });
  return moving;
}

// Role lens: a part carrying one of these tags is drawn red while context flows through it
export function energize(root, tags) {
  root.traverse((obj) => {
    const u = obj.isMesh && obj.material.uniforms;
    if (!u || !u.role) return;
    const on = tags && tags.some((t) => (obj.userData.tags || []).includes(t));
    obj.userData.energized = !!on;
    u.role.value = on ? ROLE.red : obj.userData.role;
  });
  // A leader name lights with its part, so the red parts read against the names on screen
  root.traverse((obj) => {
    const el = obj.userData.leader;
    if (!el || !obj.parent) return;
    let on = false;
    obj.parent.traverse((m) => (on = on || !!m.userData.energized));
    el.classList.toggle("is-energized", on);
  });
}

// Energy pulse: parts carrying these tags let the red wave run through them (see lineart.js).
// lags: optional { tag: world units } delaying the wave on some parts
export function charge(root, tags, lags = {}) {
  root.traverse((obj) => {
    const u = obj.isMesh && obj.material.uniforms;
    if (!u || !u.charge) return;
    const own = obj.userData.tags || [];
    u.charge.value = tags && tags.some((t) => own.includes(t)) ? 1 : 0;
    u.lag.value = Object.keys(lags).reduce((v, t) => (own.includes(t) ? lags[t] : v), 0);
  });
}
