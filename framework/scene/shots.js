// Camera shots. Stops refer to them by name (data-shot); a scene names its own and may add kinds that take an
// id ("phase:design"). Each shot orbits a target: azimuth (clockwise from the top), elevation, distance, and a
// roll that tilts the axis on screen, like the anime.js engine.
import * as THREE from "three";
import { polar, RAD } from "./math.js";

export function orbit(az, elev, dist, target, roll = 0) {
  const pos = polar(dist * Math.cos(elev * RAD), az, dist * Math.sin(elev * RAD)).add(target);
  return { pos, target, roll };
}

// Move the target sideways (in screen terms) so the subject sits left (k > 0) or right (k < 0) of centre
export function aside(az, k, y = 0) {
  return polar(k, az - 90, y);
}

// A shot written as numbers ({ az, elev, dist, k, at, roll }): the form sets use
export function placed(s) {
  return orbit(s.az, s.elev, s.dist, s.at.clone().add(aside(s.az, s.k)), s.roll || 0);
}

// The resolver a deck uses: the scene's named shots, then its sets' shots, then the kinds that take an id
// ("kind:id", resolved with the layout of the stop's final state); anything unknown falls back.
// scene: { shots: { name: shot }, shotKinds: { kind: (id, layout) => shot }, defaultShot }
export function createShots(scene, setShots = {}) {
  const named = scene.shots || {};
  const kinds = scene.shotKinds || {};
  const fallback = scene.defaultShot || Object.keys(named)[0];
  return function resolveShot(name, layout) {
    if (named[name]) return named[name];
    if (setShots[name]) return placed(setShots[name]);
    const at = name.indexOf(":");
    const kind = at < 0 ? name : name.slice(0, at);
    if (kinds[kind]) {
      const shot = kinds[kind](at < 0 ? "" : name.slice(at + 1), layout);
      if (shot) return shot;
    }
    return named[fallback];
  };
}

// Camera moves ease in and out
export function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Camera moves around the vertical axis: interpolate angle, distance and height about it, and roll
function toCylinder(p) {
  return { r: Math.hypot(p.x, p.z), a: Math.atan2(p.x, -p.z), y: p.y };
}

export function blendShots(a, b, t) {
  const ca = toCylinder(a.pos);
  const cb = toCylinder(b.pos);
  let da = cb.a - ca.a;
  if (da > Math.PI) da -= 2 * Math.PI;
  if (da < -Math.PI) da += 2 * Math.PI;
  const r = ca.r + (cb.r - ca.r) * t;
  const angle = ca.a + da * t;
  const pos = new THREE.Vector3(r * Math.sin(angle), ca.y + (cb.y - ca.y) * t, -r * Math.cos(angle));
  const roll = (a.roll || 0) + ((b.roll || 0) - (a.roll || 0)) * t;
  return { pos, target: a.target.clone().lerp(b.target, t), roll };
}
