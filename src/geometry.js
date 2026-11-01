// Shared geometry. Angles are degrees clockwise from the top (north = -z) as seen from above.
import * as THREE from "three";

export const WHEEL = { rIn: 1.45, rOut: 4.0, depth: 0.32, sweep: 40, gap: 0.14 };
export const SECTOR = 72; // five phases in the loop
export const DROP = { from: 296, to: 348, rIn: 4.25, rOut: 5.35 }; // lobe hooked outside Deepen, latch at G5
export const NEXUS = { radii: [1.24, 0.86, 0.5], core: 0.12, sweep: 34, gap: 0.07 }; // Org, BU, Team outer radii
export const RING = { rIn: 1.36, rOut: 3.6, h: 0.18, gap: 0.06, splitGap: 0.55, tooth: 0.07 };
export const STACK = { top: -WHEEL.depth - 0.12, bandGap: 0.12, explodedGap: 2.2, wheelGap: 2.2 };
export const SPINE_POS = { angle: 180, r: 3.05, radius: 0.06 }; // L11, the ignition key shaft

export const RAD = Math.PI / 180;

export function phaseAngle(i) {
  return i * SECTOR;
}

export function gateAngle(i) {
  return i * SECTOR + SECTOR / 2;
}

// Middle of the Drop lobe, hooked outside the Deepen rim
export function dropCentre(y = 0) {
  return polar((DROP.rIn + DROP.rOut) / 2, (DROP.from + DROP.to) / 2, y);
}

// Shape-space point for radius r at clockwise angle a (shape y is world -z once the shape is laid flat)
function sp(r, a) {
  return new THREE.Vector2(r * Math.sin(a * RAD), -r * Math.cos(a * RAD));
}

// Flywheel lobe: the part of an annulus between two spiral edges. Each edge starts at the inner radius
// `sweep` degrees ahead and curls back to the outer radius, so a lobe's tail tucks under the next one.
// `gap` is a constant-width cut between neighbours. Extruded downward from y = 0 by depth.
export function lobeEdge(a, r, rIn, rOut, sweep) {
  return a + sweep * Math.pow(1 - (r - rIn) / (rOut - rIn), 1.7);
}

export function lobeShape(rIn, rOut, from, to, sweep, gap) {
  const edge = (a, r) => lobeEdge(a, r, rIn, rOut, sweep);
  const off = (r) => (gap / 2 / r) / RAD;
  const pts = [];
  const n = 32;
  for (let i = 0; i <= n; i++) {
    const r = rIn + ((rOut - rIn) * i) / n;
    pts.push(sp(r, edge(from, r) + off(r)));
  }
  const a0 = from + off(rOut), a1 = to - off(rOut);
  for (let i = 1; i < 48; i++) pts.push(sp(rOut, a0 + ((a1 - a0) * i) / 48));
  for (let i = n; i >= 0; i--) {
    const r = rIn + ((rOut - rIn) * i) / n;
    pts.push(sp(r, edge(to, r) - off(r)));
  }
  const b1 = edge(to, rIn) - off(rIn), b0 = edge(from, rIn) + off(rIn);
  for (let i = 1; i < 16; i++) pts.push(sp(rIn, b1 - ((b1 - b0) * i) / 16));
  return new THREE.Shape(pts);
}

// Extrude a flat shape downward from y = 0, with a small machined chamfer on the top edges
export function extrude(shape, depth, chamfer = 0.025) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: depth - 2 * chamfer,
    bevelEnabled: chamfer > 0,
    bevelThickness: chamfer,
    bevelSize: chamfer,
    bevelOffset: -chamfer,
    bevelSegments: 1,
    curveSegments: 48,
  });
  geo.rotateX(Math.PI / 2);
  geo.translate(0, -chamfer, 0);
  return geo;
}

// Point on the horizontal plane at height y
export function polar(r, angle, y = 0) {
  return new THREE.Vector3(r * Math.sin(angle * RAD), y, -r * Math.cos(angle * RAD));
}
