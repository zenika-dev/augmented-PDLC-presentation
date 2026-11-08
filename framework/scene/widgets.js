// Reusable scene pieces: a round dial with ticks and a needle, names engraved letter by letter on a curved
// face, and technical-drawing annotations (dimension lines, dashed arrows). All draw in line art through
// parts.mesh (the energy role marks bezels, ranges and needles). A callout circle is a leader style:
// labels.leader(name, groups, "lead-callout").
import * as THREE from "three";
import { CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { RAD, polar } from "./math.js";
import { mesh } from "./parts.js";
import { WHITE, INK, box, cyl, bake } from "./kit.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

// Point on a dial: radius r at angle a (degrees clockwise from twelve o'clock), height z above the face
export const xy = (r, a, z = 0) => new THREE.Vector3(r * Math.sin(a * RAD), r * Math.cos(a * RAD), z);

// Flat ring sector on the face, from a0 to a1 (dial angles)
export function sector(rIn, rOut, a0, a1, tags, z) {
  const m = mesh(new THREE.RingGeometry(rIn, rOut, 48, 1, (90 - a1) * RAD, (a1 - a0) * RAD), WHITE, tags);
  m.position.z = z;
  return m;
}

// A round dial: face, gold bezel, major and minor ticks, an optional gold range arc, a needle with a tail.
// centre: zero at twelve o'clock behind a baseline mark. sub: { r, x, y, value, name } a small dial inside this one,
// tagged with its name too, so it can be focused alone.
// Returns the group; userData.numbers lists where the major tick numbers go (local points), for board text.
export function dial(r, tags, { value = 0.6, range = null, centre = false, ticks = 10, minor = 4, sweep = 270, sub = null } = {}) {
  const g = new THREE.Group();
  const at = (v) => (centre ? sweep * (v - 0.5) : -sweep / 2 + sweep * v);
  const face = cyl(r, 0.1, [...tags, "face"], WHITE, 64);
  face.rotation.x = Math.PI / 2;
  face.position.z = 0.05;
  const bezel = mesh(new THREE.TorusGeometry(r * 1.04, r * 0.06, 10, 72), WHITE, [...tags, "energy", "bezel"]);
  bezel.position.z = 0.12;
  g.add(face, bezel);
  for (let i = 0; i <= ticks; i++) {
    const a = at(i / ticks);
    const t = box(r * 0.035, r * 0.16, 0.03, tags, INK);
    t.position.copy(xy(r * 0.84, a, 0.12));
    t.rotation.z = -a * RAD;
    g.add(t);
    if (i === ticks) break;
    for (let j = 1; j <= minor; j++) {
      const b = at((i + j / (minor + 1)) / ticks);
      const m = box(r * 0.016, r * 0.08, 0.03, tags, INK);
      m.position.copy(xy(r * 0.88, b, 0.12));
      m.rotation.z = -b * RAD;
      g.add(m);
    }
  }
  g.userData.numbers = Array.from({ length: ticks + 1 }, (_, i) => ({ i, at: xy(r * 0.64, at(i / ticks), 0.12) }));
  if (range) g.add(sector(r * 0.93, r * 0.99, at(range[0]), at(range[1]), [...tags, "energy", "range"], 0.125));
  if (centre) {
    g.add(sector(r * 0.93, r * 0.99, Math.min(0, at(value)), Math.max(0, at(value)), [...tags, "energy", "range"], 0.125));
    const mark = box(r * 0.07, r * 0.32, 0.05, [...tags, "baseline"], INK);
    mark.position.copy(xy(r * 0.74, 0, 0.14));
    g.add(mark);
  }
  if (sub) {
    const s = dial(r * sub.r, [...tags, "sub", ...(sub.name ? [sub.name] : [])], { value: sub.value, ticks: 6, minor: 1, sweep: 300 });
    s.position.set(r * sub.x, r * sub.y, 0.06);
    s.name = sub.name || "sub";
    g.add(s);
  }
  const needle = new THREE.Group();
  needle.name = "needle";
  const blade = box(r * 0.05, r * 0.82, 0.03, [...tags, "energy", "needle"]);
  blade.position.set(0, r * 0.36, 0.22);
  const tail = box(r * 0.1, r * 0.26, 0.03, [...tags, "energy", "needle"]);
  tail.position.set(0, -r * 0.12, 0.22);
  const hub = cyl(r * 0.1, 0.12, tags, INK);
  hub.rotation.x = Math.PI / 2;
  hub.position.z = 0.24;
  needle.add(blade, tail, hub);
  needle.rotation.z = -at(value) * RAD;
  g.add(needle);
  return g;
}

// Engraved names: one CSS3D letter per glyph on a lobe's outer face, read left to right from outside
const ENGRAVE_PX = 40; // font size of a letter element
const ENGRAVE_H = 0.2; // world height of that font size
const ENGRAVE_GAP = 0.035; // world units between letters

// Letters of `text` on the face of radius r, centred on angle aMid; returns the item to re-place later
// (placeEngraving, once the web font has loaded). group: the label group that shows them; font: the family
// measured (the page's by default)
export function engrave(text, r, aMid, y, parent, { group = "engraved", font = null } = {}) {
  const letters = [...text.toUpperCase()].map((ch) => {
    const el = document.createElement("div");
    el.className = "label label-engraved";
    el.textContent = ch;
    const obj = new CSS3DObject(el);
    obj.userData.group = group;
    obj.scale.setScalar(ENGRAVE_H / ENGRAVE_PX);
    parent.add(obj);
    return obj;
  });
  const item = { text: text.toUpperCase(), r, aMid, y, letters, font };
  placeEngraving(item);
  return item;
}

// Letter widths from the font (measured again once the web font has loaded: call it from scene.relayout)
let measure = null;
export function placeEngraving({ text, r, aMid, y, letters, font }) {
  measure = measure || document.createElement("canvas").getContext("2d");
  measure.font = `800 ${ENGRAVE_PX}px ${font || getComputedStyle(document.body).fontFamily}`;
  const widths = [...text].map((ch) => (measure.measureText(ch).width * ENGRAVE_H) / ENGRAVE_PX + ENGRAVE_GAP);
  const total = widths.reduce((a, b) => a + b, 0) - ENGRAVE_GAP;
  // Seen from outside, reading left to right runs towards smaller angles
  let s = total / 2;
  letters.forEach((obj, k) => {
    const a = aMid + ((s - widths[k] / 2 + ENGRAVE_GAP / 2) / r) / RAD;
    obj.position.copy(polar(r, a, y));
    obj.rotation.y = Math.PI - a * RAD;
    s -= widths[k];
  });
}

// Technical-drawing annotations, drawn as thin line-art parts so they share the scene's look and fades.

// A thin rod between two points, the building block of the annotations below
function rod(a, b, r, tags) {
  const d = new THREE.Vector3().subVectors(b, a);
  const m = cyl(r, d.length(), tags, WHITE, 8);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  return m;
}

// An arrowhead at `tip`, pointing along `dir`
function head(tip, dir, size, tags) {
  const m = mesh(new THREE.ConeGeometry(size * 0.38, size, 12), WHITE, tags);
  const d = dir.clone().normalize();
  m.position.copy(tip).addScaledVector(d, -size / 2);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
  return m;
}

// A dimension line from a to b, set off from the part by `offset` (a vector): the measured line with an
// arrowhead at each end, and an extension tick from each end back to the part. size: the arrowheads' length.
// Baked: one mesh, one draw call.
export function dimension(a, b, { offset = new THREE.Vector3(), tags = ["dimension"], r = 0.05, size = 0.7, ticks = true } = {}) {
  const g = new THREE.Group();
  const p = a.clone().add(offset);
  const q = b.clone().add(offset);
  const dir = new THREE.Vector3().subVectors(q, p);
  const len = dir.length();
  dir.normalize();
  g.add(rod(p.clone().addScaledVector(dir, size * 0.9), q.clone().addScaledVector(dir, -size * 0.9), r, tags));
  g.add(head(q, dir, size, tags), head(p, dir.clone().negate(), size, tags));
  if (ticks && offset.lengthSq() > 0) {
    const out = offset.clone().normalize();
    for (const [from, to] of [[a, p], [b, q]]) g.add(rod(from.clone().addScaledVector(out, offset.length() * 0.2), to.clone().addScaledVector(out, size * 0.4), r * 0.8, tags));
  }
  g.userData.length = len;
  g.userData.mid = p.clone().lerp(q, 0.5);
  return bake(g);
}

// A dashed arrow along a smooth path through `points`, ending in an arrowhead. The dashes are one mesh (one draw
// call); draw(t) shows only the first t (0–1) of them through the geometry's draw range, and the head once the
// path is complete, so a state key can run the arrow.
export function dashedArrow(points, { tags = ["arrow"], r = 0.06, dash = 0.9, gap = 0.6, size = 0.9 } = {}) {
  const g = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.3);
  const len = curve.getLength();
  const up = new THREE.Vector3(0, 1, 0);
  const parts = [];
  const ends = []; // [path fraction at the dash's end, index count up to it]
  let count = 0;
  for (let s = 0; s + dash < len - size; s += dash + gap) {
    const a = curve.getPointAt(s / len);
    const b = curve.getPointAt((s + dash) / len);
    const d = new THREE.Vector3().subVectors(b, a);
    const geo = new THREE.CylinderGeometry(r, r, d.length(), 8);
    geo.applyMatrix4(new THREE.Matrix4().compose(a.clone().addScaledVector(d, 0.5), new THREE.Quaternion().setFromUnitVectors(up, d.clone().normalize()), new THREE.Vector3(1, 1, 1)));
    count += geo.index.count;
    ends.push([(s + dash) / len, count]);
    parts.push(geo);
  }
  const dashes = mesh(mergeGeometries(parts), WHITE, tags);
  parts.forEach((p) => p.dispose());
  const arrow = head(curve.getPointAt(1), curve.getTangentAt(1), size, tags);
  g.add(dashes, arrow);
  g.userData.draw = (t) => {
    let n = 0;
    for (const [at, c] of ends) if (at <= t + 1e-6) n = c;
    dashes.geometry.setDrawRange(0, n);
    dashes.visible = n > 0;
    arrow.visible = t >= 0.999;
  };
  g.userData.draw(1);
  return g;
}
