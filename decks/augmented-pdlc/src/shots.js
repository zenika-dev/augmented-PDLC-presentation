// The engine's camera shots. Stops in index.html refer to them by name (data-shot), so the layout lives here;
// the orbit, the blend between shots and the resolver are the framework's (framework/scene/shots.js).
import * as THREE from "three";
import { orbit, aside } from "../../../framework/scene/shots.js";
import { LOOP } from "./lists.js";
import { polar, phaseAngle, dropCentre, SPINE_POS, DROP } from "./geometry.js";

const v = (x, y, z) => new THREE.Vector3(x, y, z);

export const SHOTS = {
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

// Shots that take an id: phase:<id>, band:<id>, band-high:<id>, and the spine
export const SHOT_KINDS = {
  phase: (id) => phaseShot(id),
  band: (id, layout) => bandShot(layout.bandMid[id]),
  "band-high": (id, layout) => bandHighShot(layout.bandMid[id]),
  spine: () => orbit(SPINE_POS.angle + 20, 12, 30, polar(SPINE_POS.r, SPINE_POS.angle, -8), 20),
};
