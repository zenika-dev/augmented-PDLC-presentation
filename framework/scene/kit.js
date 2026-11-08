// Small building blocks for the rocket, its instruments and its rooms: plates, bolts, pipes and arcs, all drawn
// as line-art meshes (white parts, ink details, energy where the tags say so).
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { RAD } from "./math.js";
import { mesh } from "./parts.js";
import { ROLE } from "../render/lineart.js";

export const WHITE = "#ffffff";
export const INK = "#1e1e1e";

// Moves an object and hands it back, so a part can be built, placed and added in one line
export const at = (obj, x, y, z) => (obj.position.set(x, y, z), obj);

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

// A part that moves as one piece has its meshes baked into one mesh per look (role and sides): L10's 64 fins
// become one draw call. byTags keeps parts with different tags apart, so focus still tells them apart
// local: the baked geometry is in g's own frame instead of the world's (for bake, below)
export function merge(g, { byTags = false, local = false } = {}) {
  g.updateMatrixWorld(true);
  const inv = g.matrixWorld.clone().invert();
  const looks = new Map();
  // Names (leaders, labels) hung on a merged mesh move to the baked mesh of its look, at the same place
  const names = [];
  g.traverse((m) => {
    if (!m.isMesh) return;
    const key = `${m.material.uniforms.role.value}|${m.material.side}${byTags ? `|${(m.userData.tags || []).join(",")}` : ""}`;
    if (!looks.has(key)) looks.set(key, { material: m.material, tags: m.userData.tags, geos: [] });
    const geo = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    Object.keys(geo.attributes).forEach((name) => name !== "position" && name !== "normal" && geo.deleteAttribute(name));
    geo.clearGroups();
    looks.get(key).geos.push(geo.applyMatrix4(local ? inv.clone().multiply(m.matrixWorld) : m.matrixWorld));
    m.children.filter((o) => o.isCSS2DObject || o.isCSS3DObject || o.userData.leader).forEach((o) => names.push([key, o]));
    m.geometry.dispose();
    if (looks.get(key).material !== m.material) m.material.dispose();
  });
  const out = new THREE.Group();
  out.userData = g.userData;
  const baked = new Map();
  looks.forEach(({ material, tags, geos }, key) => {
    const m = new THREE.Mesh(mergeGeometries(geos), material);
    m.userData.tags = tags;
    m.userData.role = material.uniforms.role.value;
    m.userData.baked = true;
    out.add(m);
    baked.set(key, m);
    geos.forEach((geo) => geo.dispose());
  });
  names.forEach(([key, o]) => {
    (local ? inv.clone().multiply(o.matrixWorld) : o.matrixWorld.clone()).decompose(o.position, o.quaternion, o.scale);
    baked.get(key).add(o);
  });
  // The baked part (not an ink detail) carrying a tag: where a leader added later hangs
  out.find = (tag) => out.children.find((m) => (m.userData.tags || []).includes(tag) && m.userData.role !== ROLE.ink);
  return out;
}

// Bake a still room or set in place: one mesh per look and tags instead of hundreds. The group keeps its
// transform; each named node stays as an empty anchor at the same place (leader names hang on them, by name);
// keep lists the parts that still move or change (a needle, a ring rebuilt as a value moves): they stay live.
// Leader names hung on a mesh move with it to its baked mesh; g.find(tag) gives the baked part carrying a tag
export function bake(g, { keep = [] } = {}) {
  g.updateMatrixWorld(true);
  const inv = g.matrixWorld.clone().invert();
  const frame = (o, to) => (inv.clone().multiply(o.matrixWorld).decompose(to.position, to.quaternion, to.scale), to);
  // A kept part keeps its own transform (a state sets its rotation); a holder carries its parent's frame
  const live = keep.map((o) => (o.parent === g ? o : frame(o.parent, new THREE.Object3D()).add(o)));
  live.forEach((o) => o.removeFromParent());
  const anchors = [];
  g.traverse((o) => {
    if (o === g || !o.name) return;
    const a = frame(o, new THREE.Object3D());
    a.name = o.name;
    anchors.push(a);
  });
  const baked = merge(g, { byTags: true, local: true });
  g.clear();
  g.add(...baked.children, ...anchors, ...live);
  g.find = (tag) => g.children.find((m) => m.userData.baked && (m.userData.tags || []).includes(tag) && m.userData.role !== ROLE.ink);
  return g;
}

// Shows only the slice of obj's meshes between heights lo and hi in obj's own frame: a liquid built once at its
// fullest and cut at its level, never rebuilt as the level moves. The cut compiles into those meshes only (the
// CLIP_Y define); clipY(obj) with no bounds shows everything again
const _clip = new THREE.Vector3();
export function clipY(obj, lo = -Infinity, hi = Infinity) {
  obj.updateWorldMatrix(true, false);
  const y = (h) => (Number.isFinite(h) ? _clip.set(0, h, 0).applyMatrix4(obj.matrixWorld).y : h > 0 ? 1e6 : -1e6);
  const [a, b] = [y(lo), y(hi)];
  obj.traverse((m) => {
    const u = m.isMesh && m.material.uniforms;
    if (!u || !u.clipY) return;
    if (m.material.defines?.CLIP_Y === undefined) {
      m.material.defines = { ...m.material.defines, CLIP_Y: "" };
      m.material.needsUpdate = true;
    }
    u.clipY.value.set(a, b);
  });
}

// ---------- geometry helpers for drawn parts (no mesh: a part merges them into one) ----------

// The back half of a solid of revolution (LatheGeometry phiStart, phiLength): the cutaway the audience looks into
export const BACK = [Math.PI / 2, Math.PI];

// Geometries merged into one, attributes reduced to position and normal; the inputs are disposed
export function joinGeometries(geos) {
  const flat = geos.map((g) => {
    const f = g.index ? g.toNonIndexed() : g;
    Object.keys(f.attributes).forEach((k) => k !== "position" && k !== "normal" && f.deleteAttribute(k));
    f.clearGroups();
    return f;
  });
  const out = mergeGeometries(flat);
  geos.forEach((g) => g.dispose());
  flat.forEach((g) => g.dispose());
  return out;
}

// The cut face of a cutaway: a flat face in the cut plane (z = 0 → depth), from a right-hand (r, y) outline
// mirrored to the left
export function section(right, depth) {
  const shape = (sx) => new THREE.Shape(right.map((p) => new THREE.Vector2(sx * p.x, p.y)));
  return new THREE.ExtrudeGeometry([shape(1), shape(-1)], { depth, bevelEnabled: false, curveSegments: 4 });
}

// A thin bar from p to q (a crack, a fibre, a strut): small real geometry the renderer draws as a fine line.
// Turned 45° on its length, so its faces slant away from a face it lies on and the crease reads head-on
const X = new THREE.Vector3(1, 0, 0);
export function crease(p, q, w = 0.05, d = w) {
  const dir = q.clone().sub(p);
  const geo = new THREE.BoxGeometry(dir.length(), w, d);
  geo.rotateX(Math.PI / 4);
  geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(X, dir.normalize()));
  geo.translate((p.x + q.x) / 2, (p.y + q.y) / 2, (p.z + q.z) / 2);
  return geo;
}

// A ring lying around the y axis at height y; arc π keeps the back half (the cutaway), 2π the whole turn
export function ring(r, tube, y, arc = Math.PI * 2) {
  const geo = new THREE.TorusGeometry(r, tube, 6, arc < 6 ? 32 : 48, arc);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, y, 0);
  return geo;
}

// A small seeded random, so bubbles, cracks and fibres land in the same place on every build
export function seeded(seed) {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
