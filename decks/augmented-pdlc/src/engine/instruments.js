// The measure instruments: round dials, the cockpit's instrument panel and the autonomy dial of the contract.
// Dials and the panel stand in the xy plane, their faces towards +z, twelve o'clock up. Values run 0–1 over a dial's
// sweep. Gold (the energy role) marks bezels, range arcs, needles and lit lamps.
import * as THREE from "three";
import { ZONES } from "../lists.js";
import { RAD, polar, extrude } from "../geometry.js";
import { mesh } from "../../../../framework/scene/parts.js";
import { WHITE, INK, box, cyl, plate, bolts, toggle, arcShape, bake } from "../../../../framework/scene/kit.js";
import { dial } from "../../../../framework/scene/widgets.js";

export { dial };

const pos = (o, x, y, z) => (o.position.set(x, y, z), o);


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

// The contract: an autonomy dial lying flat, one zone per delegation level (ZONES in lists.js; the top one hatched as
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
  ZONES.forEach(({ from, to, id, soft }) => {
    const z = mesh(extrude(arcShape(r * 0.7, r * 0.86, at(from), at(to)), 0.16, 0.02), WHITE, [...tags, id, ...(soft ? ["soft"] : [])]);
    z.position.y = 0.32;
    g.add(z);
  });
  // Locked: hatching across the top zone, once a limit keeps the needle out of it
  const top = ZONES[ZONES.length - 1];
  const hatch = new THREE.Group();
  for (let v = top.from + 1; v < top.to; v += 2) {
    const h = box(0.05, 0.05, r * 0.15, [...tags, top.id], INK);
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
    hatch.visible = Math.min(shown.includes("rule") ? rule : 100, shown.includes("ceiling") ? ceiling : 100) < top.from;
    needle.rotation.y = -at(Math.min(score, rule, ceiling)) * RAD;
  };
  g.userData.set({ score, rule, ceiling });
  // The housing, face, zones and ticks bake; the rings, the ceiling block and the needle move with the values
  return bake(g, { keep: [...rings, block, needle] });
}
