// The rocket that carries the engine (draft for the design boards). Three stages bottom to top: a booster with a
// ribbed skirt, fins and three nozzles; a middle stage whose base holds the engine and whose shell opens in two
// halves; the nose. Seams, flanges, straps, hatches, a vent plate and a conduit dress the body; gold marks the stage
// rings, the energy line from the engine up to the nose, and the nozzle rims. Also here: the launch pad and the moon.
import * as THREE from "three";
import { RAD, polar, extrude } from "../geometry.js";
import { mesh } from "../parts.js";
import { WHITE, INK, box, cyl, plate, bolts, pipe } from "./kit.js";

// Heights in world units; the engine's wheel sits at y = 0 and its stack goes down to about y = -4
export const ROCKET = {
  r: 5.7,
  booster: { y0: -24, y1: -6 },
  middle: { y0: -6, y1: 22 },
  nose: { y0: 22, y1: 28, tip: 42 },
  skirt: 2.2,
  nozzleY: -26.2,
  ring: 0.45,
};

const SEG = 96;
const R = ROCKET.r;

function shell(r, y0, y1, from, length, tags) {
  const geo = new THREE.CylinderGeometry(r, r, y1 - y0, SEG, 1, true, from, length);
  geo.translate(0, (y0 + y1) / 2, 0);
  const m = mesh(geo, WHITE, tags);
  m.material.side = THREE.DoubleSide;
  return m;
}

// Torus lying around the body at height y; arc limits it to part of the turn, starting at polar angle `from`
function hoop(r, tube, y, tags, arc = 360, from = 0) {
  const m = mesh(new THREE.TorusGeometry(r, tube, 6, SEG, arc * RAD), WHITE, tags);
  m.rotation.x = Math.PI / 2;
  m.rotation.z = (from - 90) * RAD;
  m.position.y = y;
  return m;
}

// The gold band where stages part, between two flanges
function joint(y, tags) {
  const g = new THREE.Group();
  g.add(shell(R + 0.07, y - ROCKET.ring / 2, y + ROCKET.ring / 2, 0, Math.PI * 2, [...tags, "energy", "ring"]));
  g.add(hoop(R + 0.06, 0.1, y - 0.36, tags), hoop(R + 0.06, 0.1, y + 0.36, tags));
  return g;
}

// Rivets in a row around the body at height y, between two polar angles
function rivets(y, n, tags, from = 0, to = 360) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    const a = from + ((to - from) * (i + 0.5)) / n;
    const rv = mesh(new THREE.SphereGeometry(0.09, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), INK, tags);
    rv.position.copy(polar(R, a, y));
    rv.lookAt(polar(R * 2, a, y));
    rv.rotateX(Math.PI / 2);
    g.add(rv);
  }
  return g;
}

// Sets an object on the body at polar angle a, height y, its local +z facing out
function onBody(obj, a, y, out = 0) {
  obj.position.copy(polar(R + out, a, y));
  obj.rotation.y = Math.PI - a * RAD;
  return obj;
}

// A porthole on the body: a bolted rim, a gold inner ring and the glass, facing out
function porthole(r, tags) {
  const g = new THREE.Group();
  g.name = "porthole";
  g.add(mesh(new THREE.TorusGeometry(r, 0.14, 8, 40), WHITE, [...tags, "porthole"]));
  g.add(mesh(new THREE.TorusGeometry(r - 0.16, 0.05, 6, 40), WHITE, [...tags, "porthole", "energy"]));
  const glass = cyl(r - 0.12, 0.06, [...tags, "porthole", "glass"], WHITE, 40);
  glass.rotation.x = Math.PI / 2;
  glass.position.z = -0.04;
  g.add(glass);
  for (let i = 0; i < 8; i++) {
    const b = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.06, 8), INK, tags);
    b.rotation.x = Math.PI / 2;
    b.position.set(Math.sin((i * Math.PI) / 4) * r, Math.cos((i * Math.PI) / 4) * r, 0.14);
    g.add(b);
  }
  return g;
}

// A strap around the body (or part of it) with a bolted buckle at angle a
function strap(y, a, tags, arc = 360, from = 0) {
  const g = new THREE.Group();
  g.add(shell(R + 0.08, y - 0.28, y + 0.28, (180 - from - arc) * RAD, arc * RAD, [...tags, "strap"]));
  const buckle = new THREE.Group();
  buckle.add(plate(1, 0.8, 0.3, 0.12, tags));
  const b = bolts(2, 0.5, tags, 0.08);
  b.position.z = 0.3;
  buckle.add(b);
  g.add(onBody(buckle, a, y - 0.4, 0.05));
  return g;
}

// Vent plate: a rounded frame with five slats
function vent(tags) {
  const g = new THREE.Group();
  g.add(plate(3.2, 2.5, 0.12, 0.4, tags));
  const frame = plate(3.2, 2.5, 0.08, 0.4, tags, { border: 0.18 });
  frame.position.z = 0.12;
  g.add(frame);
  for (let k = 0; k < 5; k++) {
    const slat = box(2.4, 0.14, 0.16, [...tags, "grille"]);
    slat.position.set(0, -0.8 + k * 0.4, 0.16);
    g.add(slat);
  }
  return g;
}

// Access hatch: a framed door with a handle and four bolts
function hatch(w, h, tags) {
  const g = new THREE.Group();
  g.add(plate(w, h, 0.1, 0.25, tags));
  const frame = plate(w, h, 0.08, 0.25, tags, { border: 0.12 });
  frame.position.z = 0.1;
  g.add(frame);
  const handle = pipe([new THREE.Vector3(-0.35, 0, 0.1), new THREE.Vector3(-0.3, 0, 0.35), new THREE.Vector3(0.3, 0, 0.35), new THREE.Vector3(0.35, 0, 0.1)], 0.05, tags);
  handle.position.y = -h * 0.2;
  g.add(handle);
  [[-1, 1], [1, 1], [-1, -1], [1, -1]].forEach(([x, y]) => {
    const b = bolts(1, 0, tags, 0.07);
    b.position.set(x * (w / 2 - 0.22), y * (h / 2 - 0.22), 0.1);
    g.add(b);
  });
  return g;
}

// A conduit running up the body at angle a, standing off on clips
function conduit(a, y0, y1, tags) {
  const g = new THREE.Group();
  const p = cyl(0.14, y1 - y0, [...tags, "conduit"], WHITE, 10);
  p.position.copy(polar(R + 0.4, a, (y0 + y1) / 2));
  g.add(p);
  for (let y = y0 + 1; y < y1; y += 3.5) g.add(onBody(box(0.5, 0.25, 0.55, tags), a, y, 0.22));
  return g;
}

// Swept fin in the plane of angle a, root on the body: thick, chamfered, bolted along the root and the leading edge
function fin(a, tags) {
  const s = new THREE.Shape();
  s.moveTo(0, -1.5);
  s.lineTo(0, 9);
  s.lineTo(4.6, 2.6);
  s.lineTo(5.2, -3.4);
  s.lineTo(3.6, -3.4);
  s.lineTo(2.2, -1.5);
  s.closePath();
  const th = 0.6;
  const geo = extrude(s, th, 0.1);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0, th / 2);
  const g = new THREE.Group();
  g.add(mesh(geo, WHITE, tags));
  [[0.5, 0], [0.5, 2], [0.5, 4], [0.5, 6], [1.6, 4.4], [2.8, 2.6], [3.9, 1.2], [4.2, -2.4], [2.4, -0.6]].forEach(([x, y]) => {
    const h = cyl(0.1, th + 0.06, tags, INK, 10);
    h.rotation.x = Math.PI / 2;
    h.position.set(x, y, 0);
    g.add(h);
  });
  g.position.copy(polar(R - 0.1, a, ROCKET.booster.y0 + 1.5));
  g.rotation.y = Math.PI / 2 - a * RAD;
  return g;
}

// Bell nozzle hanging below y: ribbed bell, gimbal ring at the throat, a gold rim at the exit
function nozzle(x, z, y, tags) {
  const g = new THREE.Group();
  const H = 3.6;
  const rad = (t) => 0.9 + 1.3 * t * t;
  const pts = [];
  for (let i = 0; i <= 16; i++) pts.push(new THREE.Vector2(rad(i / 16), -H * (i / 16)));
  const bell = mesh(new THREE.LatheGeometry(pts, 48), WHITE, [...tags, "nozzle"]);
  bell.material.side = THREE.DoubleSide;
  g.add(bell);
  [0.35, 0.6, 0.82].forEach((t) => g.add(hoop(rad(t) + 0.03, 0.05, -H * t, tags)));
  g.add(hoop(rad(1) + 0.02, 0.13, -H, [...tags, "energy", "rim"]));
  g.add(hoop(rad(1) - 0.18, 0.06, -H + 0.06, [...tags, "energy", "rim"]));
  const throat = cyl(1.05, 0.7, tags, WHITE, 32);
  throat.position.y = 0.35;
  g.add(throat, hoop(1.12, 0.12, 0.45, tags));
  g.position.set(x, y, z);
  return g;
}

// Radius of the ogive nose at t (0 at its base, 1 at the tip)
export const noseRadius = (t) => R * Math.pow(Math.cos((t * Math.PI) / 2), 0.85);

function noseGeo(from, length) {
  const { y1, tip } = ROCKET.nose;
  const pts = [];
  for (let i = 0; i <= 32; i++) pts.push(new THREE.Vector2(noseRadius(i / 32), y1 + ((tip - y1) * i) / 32));
  return new THREE.LatheGeometry(pts, SEG, from, length);
}

export function buildRocket() {
  const group = new THREE.Group();
  group.name = "rocket";
  const { booster, middle, nose, skirt } = ROCKET;

  // Stage 1: the booster
  const s1 = new THREE.Group();
  s1.name = "stage:1";
  const t1 = ["rocket", "stage:1"];
  s1.add(shell(R, booster.y0, booster.y1, 0, Math.PI * 2, t1));
  s1.add(joint(booster.y1 - 0.4, t1));
  [-19, -13].forEach((y) => s1.add(hoop(R + 0.02, 0.035, y, t1), rivets(y + 0.3, 48, t1)));
  s1.add(rivets(booster.y0 + 0.4, 48, t1), rivets(booster.y1 - 1.1, 48, t1));
  s1.add(strap(-16, 200, t1));
  s1.add(onBody(hatch(1.6, 2.2, [...t1, "hatch"]), 180, -10, 0.02));
  s1.add(conduit(228, booster.y0 + 1, booster.y1 - 1.2, t1));
  [45, 135, 225, 315].forEach((a) => s1.add(fin(a, [...t1, "fin"])));
  // Skirt: a ribbed frustum below the shell, the nozzles hanging from its floor
  const sk = mesh(new THREE.CylinderGeometry(R, R * 0.86, skirt, SEG, 1, true), WHITE, [...t1, "skirt"]);
  sk.material.side = THREE.DoubleSide;
  sk.position.y = booster.y0 - skirt / 2;
  s1.add(sk);
  for (let i = 0; i < 24; i++) {
    const a = (360 * i) / 24;
    const rib = box(0.2, skirt, 0.24, t1);
    rib.position.copy(polar(R * 0.93 + 0.08, a, booster.y0 - skirt / 2));
    rib.rotation.y = -a * RAD;
    s1.add(rib);
  }
  const floor = cyl(R * 0.86, 0.3, t1, WHITE, SEG);
  floor.position.y = booster.y0 - skirt - 0.15;
  s1.add(floor);
  [0, 120, 240].forEach((a) => {
    const p = polar(2.4, a);
    s1.add(nozzle(p.x, p.z, ROCKET.nozzleY, t1));
    const pump = cyl(0.36, 1.3, [...t1, "pump"], WHITE, 16);
    pump.position.copy(polar(2.3, a + 60, ROCKET.nozzleY + 0.5));
    pump.rotation.set(0, -(a + 60) * RAD, Math.PI / 2, "YXZ");
    s1.add(pump);
  });
  group.add(s1);

  // Stage 2: the middle stage, two half-shells that open sideways around the engine at its base
  const s2 = new THREE.Group();
  s2.name = "stage:2";
  const t2 = ["rocket", "stage:2"];
  const halves = [0, 180].map((from, i) => {
    const h = new THREE.Group();
    h.name = `half:${i}`;
    h.add(shell(R, middle.y0, middle.y1, from * RAD, Math.PI, [...t2, "shell"]));
    // The polar angles this half covers (cylinder theta = 180° - polar angle)
    const p0 = from, p1 = from + 180;
    [0, 8, 15].forEach((y) => h.add(hoop(R + 0.02, 0.035, y, t2, 180, p0), rivets(y + 0.3, 24, t2, p0, p1)));
    h.add(rivets(middle.y0 + 0.5, 24, t2, p0, p1), rivets(middle.y1 - 1.1, 24, t2, p0, p1));
    h.add(strap(4, p0 + 60, t2, 180, p0), strap(18, p0 + 30, t2, 180, p0));
    h.userData.dir = i === 0 ? 1 : -1;
    s2.add(h);
    return h;
  });
  s2.add(joint(middle.y1 - 0.4, t2));
  halves[0].add(onBody(vent([...t2, "vent"]), 160, 10.8, 0.02));
  halves[1].add(onBody(hatch(1.8, 2.6, [...t2, "hatch"]), 200, 1.5, 0.02));
  halves[1].add(conduit(250, middle.y0 + 1, middle.y1 - 1.2, t2));
  // Energy line: from the engine bay up to the nose, clipped to the shell, with one node
  const energy = ["rocket", "energy", "energy-line"];
  const line = cyl(0.08, nose.y1 - middle.y0 - 1, energy, WHITE, 8);
  line.position.copy(polar(R + 0.12, 112, (middle.y0 + nose.y1) / 2 - 0.5));
  halves[0].add(line);
  for (let y = middle.y0 + 2; y < middle.y1 - 1; y += 4) halves[0].add(onBody(box(0.45, 0.22, 0.3, t2), 112, y, 0.06));
  const node = mesh(new THREE.SphereGeometry(0.42, 24, 12), WHITE, energy);
  node.position.copy(polar(R + 0.2, 112, middle.y1 - 3));
  const halo = mesh(new THREE.TorusGeometry(0.62, 0.06, 6, 32), WHITE, energy);
  onBody(halo, 112, middle.y1 - 3, 0.12);
  s2.add(node, halo);
  group.add(s2);

  // Stage 3: the nose, a short cylinder then the ogive, a gold band on the cone
  const s3 = new THREE.Group();
  s3.name = "stage:3";
  const t3 = ["rocket", "stage:3"];
  s3.add(shell(R, nose.y0, nose.y1, 0, Math.PI * 2, t3));
  const cone = mesh(noseGeo(0, Math.PI * 2), WHITE, [...t3, "cone"]);
  cone.material.side = THREE.DoubleSide;
  s3.add(cone);
  s3.add(hoop(R + 0.02, 0.05, nose.y1, t3), rivets(nose.y0 + 0.9, 48, t3), rivets(nose.y1 - 0.4, 48, t3));
  const at = (t) => nose.y1 + (nose.tip - nose.y1) * t;
  s3.add(hoop(noseRadius(0.32) + 0.05, 0.12, at(0.32), [...t3, "energy", "ring"]));
  s3.add(hoop(noseRadius(0.62) + 0.02, 0.04, at(0.62), t3));
  const tip = mesh(new THREE.SphereGeometry(0.22, 12, 8), WHITE, t3);
  tip.position.y = nose.tip;
  s3.add(tip);
  s3.add(onBody(hatch(1.4, 1.8, [...t3, "hatch"]), 160, 25, 0.02));
  // The cockpit's window, where the camera dives in
  s3.add(onBody(porthole(0.85, t3), 134, 25.1, 0.06));
  group.add(s3);

  return { group, stages: [s1, s2, s3], halves };
}

// Pose: separation pulls the booster down and away, open spreads the middle halves
export function poseRocket(rocket, { separate = 0, open = 0 } = {}) {
  const [s1] = rocket.stages;
  s1.position.set(0, -12 * separate, 0);
  s1.rotation.z = 0.25 * separate;
  rocket.halves.forEach((h) => (h.position.x = h.userData.dir * open * R * 1.5));
}

export function buildPad() {
  const g = new THREE.Group();
  g.name = "pad";
  const tags = ["pad"];
  const top = ROCKET.nozzleY - 4.2;
  const deck = mesh(new THREE.CylinderGeometry(11, 12, 1.2, SEG), WHITE, tags);
  deck.position.y = top - 0.6;
  const trench = cyl(4.5, 0.2, tags, WHITE, 48);
  trench.position.y = top - 0.05;
  g.add(deck, trench, hoop(4.6, 0.12, top + 0.02, tags), hoop(8.5, 0.05, top + 0.02, tags));
  // Service tower: a lattice of posts and braces beside the rocket, two swing arms
  const tower = new THREE.Group();
  const H = 60;
  [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([x, z]) => {
    const p = box(0.3, H, 0.3, tags);
    p.position.set(x * 1.4, H / 2, z * 1.4);
    tower.add(p);
  });
  for (let y = 3; y < H; y += 4) {
    [0, 90, 180, 270].forEach((a) => {
      const b = box(2.8, 0.18, 0.18, tags);
      b.position.copy(polar(1.4, a, y));
      b.rotation.y = -a * RAD;
      const d = box(0.1, 4.7, 0.1, tags);
      d.position.copy(polar(1.42, a, y + 2));
      d.rotation.set(0, -a * RAD, 0.55, "YXZ");
      tower.add(b, d);
    });
  }
  [14, 36].forEach((y) => {
    const arm = box(5.2, 0.4, 0.8, [...tags, "arm"]);
    arm.position.set(-3.9, y, 0);
    tower.add(arm);
  });
  tower.position.set(R + 4.6, top, 0);
  g.add(tower);
  return g;
}

export function buildMoon(radius = 7) {
  const g = new THREE.Group();
  g.name = "moon";
  const tags = ["moon"];
  g.add(mesh(new THREE.SphereGeometry(radius, 64, 32), WHITE, tags));
  [[20, 30, 1.4], [-30, 60, 1], [40, 140, 1.8], [-10, 200, 0.9], [55, 260, 1.2], [-45, 300, 1.5], [5, 95, 0.7], [30, 340, 0.6], [-60, 20, 0.8]].forEach(([lat, lon, cr]) => {
    const c = mesh(new THREE.TorusGeometry(cr, cr * 0.12, 6, 32), WHITE, tags);
    const v = new THREE.Vector3().setFromSphericalCoords(radius, (90 - lat) * RAD, lon * RAD);
    c.position.copy(v);
    c.lookAt(v.clone().multiplyScalar(2));
    g.add(c);
  });
  return g;
}
