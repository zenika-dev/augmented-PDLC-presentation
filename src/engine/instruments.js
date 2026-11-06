// The measure instruments: round dials, the cockpit's instrument panel and the autonomy dial of the contract.
// Dials and the panel stand in the xy plane, their faces towards +z, twelve o'clock up. Values run 0–1 over a dial's
// sweep. Gold (the energy role) marks bezels, range arcs, needles and lit lamps.
import * as THREE from "three";
import { RAD, polar, extrude } from "../geometry.js";
import { mesh } from "../parts.js";
import { WHITE, INK, box, cyl, plate, bolts, toggle, arcShape } from "./kit.js";

// Point on a dial: radius r at angle a (degrees clockwise from twelve o'clock), height z above the face
const pos = (o, x, y, z) => (o.position.set(x, y, z), o);
const xy = (r, a, z = 0) => new THREE.Vector3(r * Math.sin(a * RAD), r * Math.cos(a * RAD), z);

// Flat ring sector on the face, from a0 to a1 (dial angles)
function sector(rIn, rOut, a0, a1, tags, z) {
  const m = mesh(new THREE.RingGeometry(rIn, rOut, 48, 1, (90 - a1) * RAD, (a1 - a0) * RAD), WHITE, tags);
  m.position.z = z;
  return m;
}

// A round dial: face, gold bezel, major and minor ticks, an optional gold range arc, a needle with a tail.
// centre: zero at twelve o'clock behind a baseline mark. sub: { r, x, y, value } a small dial inside this one.
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
    const s = dial(r * sub.r, [...tags, "sub"], { value: sub.value, ticks: 6, minor: 1, sweep: 300 });
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

// The cockpit's instrument panel, after a real one: a rounded housing on a deeper rear body, corner screws.
// Throughput is the main dial with Stability as a sub-dial inside it (speed is read with quality); Cost per unit is
// the fuel gauge at the left; Productivity against the baseline is the centre-zero dial at the right, the crew's
// experience three lamps under it. Also a set knob. 10 × 5 units, face at z = 0.5.
export function instrumentPanel(tags, { throughput = 0.66, stability = 0.7, productivity = 0.64, cost = 0.58, experience = 2 } = {}) {
  const g = new THREE.Group();
  g.name = "instrument-panel";
  const t = [...tags, "instruments"];
  const rear = plate(8.6, 4.2, 1.4, 0.8, t);
  rear.position.z = -1.4;
  const front = plate(10, 5, 0.5, 0.9, t);
  const lip = plate(9.5, 4.5, 0.06, 0.7, t, { border: 0.1 });
  lip.position.z = 0.5;
  g.add(rear, front, lip);
  [[-4.55, 2.05], [4.55, 2.05], [-4.55, -2.05], [4.55, -2.05]].forEach(([x, y]) => g.add(pos(bolts(1, 0, t, 0.11), x, y, 0.5)));

  // Main dial on its flange: throughput, with stability as a sub-dial inside it (speed read with quality)
  const flange = plate(4.2, 4.2, 0.12, 0.8, t);
  flange.position.set(-0.6, 0, 0.5);
  g.add(flange);
  [[-1.75, 1.75], [1.75, 1.75], [-1.75, -1.75], [1.75, -1.75]].forEach(([x, y]) => g.add(pos(bolts(1, 0, t, 0.09), -0.6 + x, y, 0.62)));
  const main = dial(1.72, [...t, "inst:throughput"], { value: throughput, range: [0.55, 0.85], sub: { r: 0.3, x: 0, y: -0.46, value: stability, name: "inst:stability" } });
  main.name = "inst:throughput";
  main.position.set(-0.6, 0, 0.62);
  g.add(main);
  const counter = plate(1.1, 0.3, 0.05, 0.04, [...t, "counter"]);
  counter.position.set(-0.6, 0.62, 0.8);
  g.add(counter);
  const knob = cyl(0.3, 0.35, [...t, "energy", "inst:knob"], WHITE, 20);
  knob.rotation.x = Math.PI / 2;
  knob.position.set(-2.45, -1.85, 0.75);
  knob.name = "inst:knob";
  g.add(knob);

  // Left column: the fuel gauge (cost per unit), a glass tube with its level, ticks and a float
  const fuel = new THREE.Group();
  fuel.name = "inst:cost";
  const ft = [...t, "inst:cost"];
  fuel.add(plate(1.05, 3.7, 0.12, 0.3, ft));
  const tube = cyl(0.2, 3.0, [...ft, "glass"], WHITE, 20);
  tube.position.z = 0.36;
  const level = cyl(0.13, 3.0 * cost, [...ft, "energy"], WHITE, 16);
  level.position.set(0, -1.5 + 1.5 * cost, 0.36);
  const float = mesh(new THREE.TorusGeometry(0.22, 0.05, 6, 24), WHITE, [...ft, "energy"]);
  float.rotation.x = Math.PI / 2;
  float.position.set(0, -1.5 + 3.0 * cost, 0.36);
  fuel.add(tube, level, float);
  [1.5, -1.5].forEach((y) => {
    const cap = cyl(0.26, 0.16, ft, WHITE, 20);
    cap.position.set(0, y, 0.36);
    fuel.add(cap);
  });
  for (let k = 0; k <= 8; k++) {
    const tick = box(k % 4 === 0 ? 0.26 : 0.14, 0.03, 0.03, ft, INK);
    tick.position.set(0.38 + (k % 4 === 0 ? 0 : -0.06), -1.4 + (2.8 * k) / 8, 0.16);
    fuel.add(tick);
  }
  const fuelPlate = plate(0.8, 0.2, 0.04, 0.03, ft);
  fuelPlate.position.set(0, -2.02, 0.12);
  fuel.add(fuelPlate);
  fuel.position.set(-4.0, 0.15, 0.5);
  g.add(fuel);

  // Right: productivity against the baseline in a square bezel, the crew's three lamps under it
  const sq = plate(2.1, 2.1, 0.14, 0.35, t);
  sq.position.set(3.35, 0.95, 0.5);
  g.add(sq);
  g.add(pos(bolts(2, 1.7, t, 0.07), 3.35, 1.85, 0.64));
  const prod = dial(0.78, [...t, "inst:productivity"], { value: productivity, centre: true, ticks: 8, minor: 1, sweep: 240 });
  prod.name = "inst:productivity";
  prod.position.set(3.35, 0.9, 0.64);
  g.add(prod);
  const lamps = new THREE.Group();
  lamps.name = "inst:experience";
  const lt = [...t, "inst:experience"];
  lamps.add(plate(2.1, 1.25, 0.1, 0.25, lt));
  for (let i = 0; i < 3; i++) {
    const on = i < experience;
    const bezel = mesh(new THREE.TorusGeometry(0.27, 0.06, 6, 28), WHITE, lt);
    const lens = cyl(0.22, 0.14, on ? [...lt, "energy", "lamp"] : [...lt, "lamp"], WHITE, 24);
    lens.rotation.x = Math.PI / 2;
    [bezel, lens].forEach((m) => m.position.set((i - 1) * 0.66, 0.14, 0.16));
    const name = plate(0.5, 0.14, 0.03, 0.03, lt);
    name.position.set((i - 1) * 0.66, -0.36, 0.1);
    lamps.add(bezel, lens, name);
  }
  lamps.position.set(3.35, -1.15, 0.5);
  g.add(lamps);
  return g;
}

// The contract: an autonomy dial lying flat, three zones (Full human ≤ 50, Hybrid 51–79, Full AI ≥ 80, hatched as
// locked once a rule or the ceiling falls below it), a needle at the task's score and a stop pin at the ceiling the foundations allow. value and ceiling 0–100.
export function buildAutonomyDial({ score = 72, rule = 100, ceiling = 79 } = {}) {
  const g = new THREE.Group();
  g.name = "autonomy";
  const tags = ["autonomy"];
  const r = 4, sweep = 240;
  const at = (v) => -sweep / 2 + (sweep * v) / 100;
  const housing = mesh(new THREE.CylinderGeometry(r * 1.2, r * 1.24, 0.5, 96), WHITE, [...tags, "housing"]);
  housing.position.y = -0.2;
  g.add(housing);
  for (let i = 0; i < 8; i++) {
    const s = cyl(0.13, 0.08, tags, INK, 12);
    s.position.copy(polar(r * 1.12, 22.5 + 45 * i, 0.08));
    g.add(s);
  }
  g.add(mesh(new THREE.CylinderGeometry(r, r, 0.3, 96), WHITE, tags));
  const bezel = mesh(new THREE.TorusGeometry(r * 1.03, 0.2, 10, 96), WHITE, [...tags, "energy", "bezel"]);
  bezel.rotation.x = Math.PI / 2;
  bezel.position.y = 0.2;
  g.add(bezel);
  [[0, 50, "zone:human"], [51, 79, "zone:hybrid"], [80, 100, "zone:ai"]].forEach(([a, b, id]) => {
    const z = mesh(extrude(arcShape(r * 0.7, r * 0.86, at(a), at(b)), 0.16, 0.02), WHITE, [...tags, id, ...(id === "zone:hybrid" ? ["soft"] : [])]);
    z.position.y = 0.32;
    g.add(z);
  });
  // Locked: hatching across the Full AI zone, once a limit keeps the needle out of it
  const hatch = new THREE.Group();
  for (let v = 81; v < 100; v += 2) {
    const h = box(0.05, 0.05, r * 0.15, [...tags, "zone:ai"], INK);
    h.position.copy(polar(r * 0.78, at(v), 0.36));
    h.rotation.y = -at(v) * RAD + 0.5;
    hatch.add(h);
  }
  g.add(hatch);
  for (let v = 0; v <= 100; v += 5) {
    const t = box(0.07, 0.06, v % 50 === 0 ? 0.7 : v % 10 === 0 ? 0.45 : 0.25, tags, INK);
    t.position.copy(polar(r * 0.6 - (v % 10 === 0 ? 0 : 0.1), at(v), 0.2));
    t.rotation.y = -at(v) * RAD;
    g.add(t);
  }
  // Three rings inside the face, one per test, each in its own colour: the task's score (gold), the
  // capability's blocking rule (accent), the foundations' ceiling (plain). Each runs from 0 to its value;
  // a limit with nothing to say stands at 100. The needle stops at the lowest of the three.
  const rings = [
    ["ring:score", 2.1, ["energy"], 0.5],
    ["ring:rule", 1.62, ["accent"], 0.38],
    ["ring:ceiling", 1.14, [], 0.26],
  ].map(([id, rr, extra, y]) => {
    const m = mesh(new THREE.BufferGeometry(), WHITE, [...tags, id, ...extra]);
    m.position.y = y;
    m.userData = { ...m.userData, ring: rr, value: -1 };
    g.add(m);
    return m;
  });
  const shape = (m, value, on) => {
    m.visible = on && value > 0.5;
    const q = Math.round(value * 2) / 2;
    if (!m.visible || m.userData.value === q) return;
    m.userData.value = q;
    m.geometry.dispose();
    m.geometry = extrude(arcShape(m.userData.ring - 0.2, m.userData.ring + 0.2, at(0), at(q)), 0.14, 0.03);
  };
  // The ceiling block: a raised bar across the rings and the zones, where the limit stands
  const block = new THREE.Group();
  block.name = "ceiling-block";
  const bar = box(0.36, 0.55, r * 0.92 - 0.95, [...tags, "ceiling"], INK);
  bar.position.set(0, 0.45, -(0.95 + r * 0.92) / 2);
  const cap = box(0.5, 0.12, 0.5, [...tags, "ceiling", "energy"]);
  cap.position.set(0, 0.78, -r * 0.92);
  block.add(bar, cap);
  g.add(block);
  const needle = new THREE.Group();
  needle.name = "needle";
  const n = box(0.22, 0.14, r * 0.85, [...tags, "energy", "needle"]);
  n.position.set(0, 0.32, -r * 0.4);
  const tail = box(0.4, 0.14, r * 0.25, [...tags, "energy", "needle"]);
  tail.position.set(0, 0.32, r * 0.12);
  const hub = mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.3, 32), INK, tags);
  hub.position.y = 0.36;
  needle.add(n, tail, hub);
  g.add(needle);
  // A stop sets the values (eased) and which rings show (shown: names among score, rule, ceiling)
  g.userData.set = ({ score = 0, rule = 100, ceiling = 100 }, shown = ["score", "rule", "ceiling"]) => {
    shape(rings[0], score, shown.includes("score"));
    shape(rings[1], rule, shown.includes("rule"));
    shape(rings[2], ceiling, shown.includes("ceiling"));
    block.visible = shown.includes("ceiling") && ceiling < 99.5;
    block.rotation.y = -at(ceiling) * RAD;
    hatch.visible = Math.min(shown.includes("rule") ? rule : 100, shown.includes("ceiling") ? ceiling : 100) < 80;
    needle.rotation.y = -at(Math.min(score, rule, ceiling)) * RAD;
  };
  g.userData.set({ score, rule, ceiling });
  return g;
}
