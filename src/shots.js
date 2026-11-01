// Named camera shots. Stops in index.html refer to them by name (data-shot), so the layout lives here.
// Each shot orbits a target: azimuth (clockwise from the top), elevation, distance, and a roll that tilts
// the axis on screen, like the anime.js engine.
import * as THREE from "three";
import { LOOP } from "./data.js";
import { polar, phaseAngle, dropCentre, SPINE_POS, DROP, RAD } from "./geometry.js";

const v = (x, y, z) => new THREE.Vector3(x, y, z);

function orbit(az, elev, dist, target, roll = 0) {
  const pos = polar(dist * Math.cos(elev * RAD), az, dist * Math.sin(elev * RAD)).add(target);
  return { pos, target, roll };
}

// Move the target sideways (in screen terms) so the engine sits left (k > 0) or right (k < 0) of centre
function aside(az, k, y = 0) {
  return polar(k, az - 90, y);
}

const SHOTS = {
  hero: orbit(135, 22, 29, aside(135, 0, -1.4), 10),
  "hero-right": orbit(135, 22, 35.5, aside(135, -6, -1.4), 10),
  "top-right": orbit(165, 62, 31, aside(165, -3.4, 0.4)),
  nexus: orbit(150, 30, 17, v(0, 0.6, 0), 6),
  "nexus-right": orbit(150, 30, 17, aside(150, -1.6, 0.6), 6),
  "top-wide": orbit(165, 80, 34, v(0, 0, 0)),
  "nexus-top": orbit(165, 88, 11, v(0, 0, 0)),
  telescope: orbit(150, 18, 16, v(0, 0.9, 0), 8),
  "telescope-left": orbit(150, 18, 16, aside(150, 1.5, 0.9), 8),
  side: orbit(210, 18, 51, aside(210, 0.5, -6.8)),
  exploded: orbit(200, 20, 47, aside(200, 0, -7.5), 36),
  "exploded-left": orbit(200, 20, 54, aside(200, -2, -6.6), -32),
};

// Above a phase, looking across it towards the centre
function phaseShot(id) {
  if (id === "drop") return orbit((DROP.from + DROP.to) / 2, 40, 14, dropCentre());
  const a = phaseAngle(LOOP.findIndex((p) => p.id === id));
  return orbit(a, 42, 23, polar(0.6, a, -0.8), 4);
}

function bandShot(mid) {
  return orbit(210, 20, 34, aside(210, -3.2, mid), 10);
}

// Higher and further back: the band and the wheel above it in one frame
function bandHighShot(mid) {
  return orbit(210, 34, 42, aside(210, -3.8, mid / 2), 10);
}

export function resolveShot(name, layout) {
  if (SHOTS[name]) return SHOTS[name];
  const [kind, id] = name.split(":");
  if (kind === "phase") return phaseShot(id);
  if (kind === "band") return bandShot(layout.bandMid[id]);
  if (kind === "band-high") return bandHighShot(layout.bandMid[id]);
  if (kind === "spine") return orbit(SPINE_POS.angle + 20, 12, 30, polar(SPINE_POS.r, SPINE_POS.angle, -8), 20);
  return SHOTS.hero;
}

// Camera moves ease in and out
export function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Camera moves around the cylinder: interpolate angle, distance and height about the vertical axis, and roll
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
