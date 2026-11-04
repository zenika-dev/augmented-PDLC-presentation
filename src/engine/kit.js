// Small building blocks for the rocket, its instruments and its rooms: plates, bolts, pipes and arcs, all drawn
// as line-art meshes (white parts, ink details, energy where the tags say so).
import * as THREE from "three";
import { RAD } from "../geometry.js";
import { mesh } from "../parts.js";

export const WHITE = "#ffffff";
export const INK = "#1e1e1e";

export function place(obj, x = 0, y = 0, z = 0, ry = 0) {
  obj.position.set(x, y, z);
  obj.rotation.y = ry;
  return obj;
}

export const box = (w, h, d, tags, color = WHITE) => mesh(new THREE.BoxGeometry(w, h, d), color, tags);

// Upright cylinder (axis y)
export const cyl = (r, h, tags, color = WHITE, seg = 24) => mesh(new THREE.CylinderGeometry(r, r, h, seg), color, tags);

// Rounded rectangle centred on the origin, in the shape plane
export function roundRect(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

// A rounded plate standing in the xy plane, its face towards +z (z from 0 to d). border > 0 makes it a frame.
export function plate(w, h, d, r, tags, { color = WHITE, border = 0 } = {}) {
  const s = roundRect(w, h, r);
  if (border > 0) s.holes.push(roundRect(w - 2 * border, h - 2 * border, Math.max(0.02, r - border)));
  const geo = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false, curveSegments: 6 });
  return mesh(geo, color, tags);
}

// Bolt heads in a row along x, on a face towards +z
export function bolts(n, span, tags, r = 0.08) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const b = mesh(new THREE.CylinderGeometry(r, r, 0.06, 10), INK, tags);
    b.rotation.x = Math.PI / 2;
    b.position.set(n === 1 ? 0 : -span / 2 + (span * i) / (n - 1), 0, 0.03);
    g.add(b);
  }
  return g;
}

// A pipe through the given points
export function pipe(points, r, tags, color = WHITE) {
  const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.2);
  return mesh(new THREE.TubeGeometry(curve, Math.max(8, points.length * 10), r, 8), color, tags);
}

// Annular sector between angles a0 and a1 (clockwise from -z, as polar()), laid flat by extrude()
export function arcShape(rIn, rOut, a0, a1, steps = 32) {
  const p = (r, a) => new THREE.Vector2(r * Math.sin(a * RAD), -r * Math.cos(a * RAD));
  const pts = [];
  for (let i = 0; i <= steps; i++) pts.push(p(rOut, a0 + ((a1 - a0) * i) / steps));
  for (let i = steps; i >= 0; i--) pts.push(p(rIn, a0 + ((a1 - a0) * i) / steps));
  return new THREE.Shape(pts);
}

// Toggle switch on a square base: a framed plate, a round nut, a lever with a ball tip, facing +z
export function toggle(tags, up = true) {
  const g = new THREE.Group();
  g.add(plate(0.6, 0.6, 0.08, 0.08, tags));
  const rim = plate(0.6, 0.6, 0.04, 0.08, tags, { border: 0.06 });
  rim.position.z = 0.08;
  const nut = mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.12, 16), WHITE, tags);
  nut.rotation.x = Math.PI / 2;
  nut.position.z = 0.14;
  const lever = new THREE.Group();
  const rod = mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.36, 8), WHITE, tags);
  rod.position.y = 0.18;
  const tip = mesh(new THREE.SphereGeometry(0.07, 10, 8), WHITE, tags);
  tip.position.y = 0.38;
  lever.add(rod, tip);
  lever.position.z = 0.2;
  lever.rotation.x = up ? 0.5 : Math.PI - 0.5;
  g.add(rim, nut, lever);
  return g;
}

// A grid of push buttons on a small plate, facing +z
export function buttons(cols, rows, tags, lit = []) {
  const g = new THREE.Group();
  const s = 0.32;
  g.add(plate(cols * s + 0.16, rows * s + 0.16, 0.06, 0.06, tags));
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++) {
      const on = lit.includes(j * cols + i);
      const b = box(0.22, 0.22, 0.08, on ? [...tags, "energy"] : tags);
      b.position.set((i - (cols - 1) / 2) * s, ((rows - 1) / 2 - j) * s, 0.1);
      g.add(b);
    }
  return g;
}

// A small screen: bezel, glass, and a few trace lines (gold when lit), facing +z
export function screen(w, h, tags, { traces = 3, lit = true } = {}) {
  const g = new THREE.Group();
  g.add(plate(w, h, 0.1, 0.08, tags));
  const glass = plate(w - 0.16, h - 0.16, 0.04, 0.05, [...tags, "glass"]);
  glass.position.z = 0.1;
  g.add(glass);
  for (let i = 0; i < traces; i++) {
    const tw = (w - 0.4) * (0.45 + 0.5 * (((i * 37) % 10) / 10));
    const t = box(tw, 0.035, 0.02, lit && i === 0 ? [...tags, "energy"] : tags);
    t.position.set(-(w - 0.4) / 2 + tw / 2, h / 2 - 0.3 - i * ((h - 0.5) / Math.max(1, traces)), 0.16);
    g.add(t);
  }
  return g;
}
