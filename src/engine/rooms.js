// The rooms around the rocket, drawn for cutaway views: the cockpit (the nose opened along its axis), the
// classroom where crews train, and mission control. No figures: chairs, manuals and headsets stand for the crew.
// Gold (the energy role) marks the control columns, drawings, lit buttons and screen traces.
import * as THREE from "three";
import { RAD, polar, extrude } from "../geometry.js";
import { mesh } from "../parts.js";
import { WHITE, INK, box, cyl, plate, bolts, pipe, arcShape, toggle, buttons, screen } from "./kit.js";
import { dial, instrumentPanel } from "./instruments.js";
import { buildRocket } from "./rocket.js";

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const put = (parent, obj, x, y, z, ry = 0) => {
  obj.position.set(x, y, z);
  obj.rotation.y = ry;
  parent.add(obj);
  return obj;
};

// Office chair facing -z: five-star base on casters, gas post, seat, back
function officeChair(tags) {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const a = 72 * i;
    const leg = box(0.1, 0.08, 0.7, tags);
    leg.position.copy(polar(0.35, a, 0.18));
    leg.rotation.y = -a * RAD;
    const wheel = mesh(new THREE.SphereGeometry(0.08, 8, 6), WHITE, tags);
    wheel.position.copy(polar(0.7, a, 0.08));
    g.add(leg, wheel);
  }
  const post = cyl(0.06, 0.7, tags, WHITE, 10);
  post.position.y = 0.55;
  const seat = box(1, 0.18, 0.95, [...tags, "chair"]);
  seat.position.y = 0.95;
  const back = box(0.95, 1.1, 0.14, [...tags, "chair"]);
  back.position.set(0, 1.65, 0.5);
  back.rotation.x = 0.12;
  const arm = (s) => {
    const a = box(0.1, 0.08, 0.6, tags);
    a.position.set(s * 0.52, 1.3, 0.05);
    const p = box(0.06, 0.32, 0.06, tags);
    p.position.set(s * 0.52, 1.12, 0.2);
    g.add(a, p);
  };
  arm(-1);
  arm(1);
  g.add(post, seat, back);
  return g;
}

// School chair facing -z
function schoolChair(tags) {
  const g = new THREE.Group();
  const seat = box(0.9, 0.08, 0.85, [...tags, "chair"]);
  seat.position.y = 0.95;
  const back = box(0.9, 0.6, 0.06, [...tags, "chair"]);
  back.position.set(0, 1.55, 0.42);
  g.add(seat, back);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([x, z]) => {
    const l = cyl(0.04, 0.95, tags, WHITE, 6);
    l.position.set(x * 0.38, 0.47, z * 0.36);
    g.add(l);
  });
  [-1, 1].forEach((x) => {
    const p = cyl(0.03, 0.6, tags, WHITE, 6);
    p.position.set(x * 0.38, 1.25, 0.42);
    g.add(p);
  });
  return g;
}

// An open manual lying on a desk: two leaves in a shallow V and a spine
function manual(tags) {
  const g = new THREE.Group();
  [-1, 1].forEach((s) => {
    const leaf = box(0.55, 0.04, 0.75, [...tags, "manual"]);
    leaf.position.set(s * 0.29, 0.04, 0);
    leaf.rotation.z = -s * 0.08;
    g.add(leaf);
    for (let i = 0; i < 4; i++) {
      const line = box(0.38, 0.01, 0.025, tags, INK);
      line.position.set(s * 0.29, 0.08 + 0.02 * s * -0.0, -0.25 + i * 0.16);
      line.rotation.z = -s * 0.08;
      g.add(line);
    }
  });
  return g;
}

// A headset lying on a desk
function headset(tags) {
  const g = new THREE.Group();
  const band = mesh(new THREE.TorusGeometry(0.32, 0.035, 6, 24, Math.PI), WHITE, [...tags, "headset"]);
  band.rotation.x = -Math.PI / 2;
  band.rotation.z = 0;
  band.position.y = 0.1;
  g.add(band);
  [-1, 1].forEach((s) => {
    const cup = cyl(0.14, 0.12, [...tags, "headset"], WHITE, 14);
    cup.rotation.z = Math.PI / 2;
    cup.position.set(s * 0.32, 0.12, 0);
    g.add(cup);
  });
  return g;
}

// A tiled floor and two walls (back at z = z0, left at x = x0) with panel seams
function room(tags, { x0, x1, z0, z1, h }) {
  const g = new THREE.Group();
  const T = 4;
  for (let x = x0; x < x1 - 0.01; x += T)
    for (let z = z0; z < z1 - 0.01; z += T) {
      const w = Math.min(T, x1 - x), d = Math.min(T, z1 - z);
      g.add(put(g, box(w - 0.05, 0.2, d - 0.05, [...tags, "floor"]), x + w / 2, -0.1, z + d / 2));
    }
  put(g, box(x1 - x0, h, 0.3, [...tags, "wall"]), (x0 + x1) / 2, h / 2, z0 - 0.15);
  put(g, box(0.3, h, z1 - z0, [...tags, "wall"]), x0 - 0.15, h / 2, (z0 + z1) / 2);
  for (let x = x0 + T; x < x1; x += T) put(g, box(0.06, h, 0.04, tags), x, h / 2, z0 + 0.02);
  for (let z = z0 + T; z < z1; z += T) put(g, box(0.04, h, 0.06, tags), x0 + 0.02, h / 2, z);
  put(g, box(x1 - x0, 0.25, 0.1, tags), (x0 + x1) / 2, 0.12, z0 + 0.05);
  put(g, box(0.1, 0.25, z1 - z0, tags), x0 + 0.05, 0.12, (z0 + z1) / 2);
  return g;
}

// A wall screen: frame, glass and whatever content the caller draws on the glass (z = 0.32), facing +z
function wallScreen(w, h, tags, name) {
  const g = new THREE.Group();
  g.name = name;
  g.add(plate(w + 0.4, h + 0.4, 0.2, 0.12, [...tags, "screen", name]));
  const glass = plate(w, h, 0.06, 0.06, [...tags, "screen", name, "glass"]);
  glass.position.z = 0.2;
  g.add(glass);
  return g;
}

// ---------------------------------------------------------------------------------------------------------------
// Cockpit: the nose opened along its axis (forward is +x). The near upper wall is cut away to show two pilot seats
// with gold control columns, the instrument panel wrapping the front, conduits and ring frames along the walls,
// a door hatch, floor plates and a floor hatch, framed windows in the dome.
export const COCKPIT = { r: 6, x0: -9, x1: 5, floor: -2.6, dome: 3.6 };

export function buildCockpit() {
  const g = new THREE.Group();
  g.name = "cockpit";
  const tags = ["cockpit"];
  const { r, x0, x1, floor, dome } = COCKPIT;
  const keep = [25, 270]; // the shell's theta range kept (cylinder theta, after laying the axis along x)
  const along = (geo) => geo.rotateZ(-Math.PI / 2);

  const shellGeo = along(new THREE.CylinderGeometry(r, r, x1 - x0, 96, 1, true, keep[0] * RAD, (keep[1] - keep[0]) * RAD));
  shellGeo.translate((x0 + x1) / 2, 0, 0);
  const shell = mesh(shellGeo, WHITE, [...tags, "shell"]);
  shell.material.side = THREE.DoubleSide;
  g.add(shell);
  const domePts = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    domePts.push(new THREE.Vector2(r * Math.sqrt(Math.max(0, 1 - t * t)), dome * t));
  }
  const domeGeo = along(new THREE.LatheGeometry(domePts, 96, keep[0] * RAD, (keep[1] - keep[0]) * RAD));
  domeGeo.translate(x1, 0, 0);
  const domeM = mesh(domeGeo, WHITE, [...tags, "dome"]);
  domeM.material.side = THREE.DoubleSide;
  g.add(domeM);
  // A point on the wall at axial x, theta th, inset by k
  const wall = (x, th, k = 0) => v(x, -(r - k) * Math.sin(th * RAD), (r - k) * Math.cos(th * RAD));

  // Ring frames and stringers
  [-7.5, -4.5, -1.5, 1.5, 4.5].forEach((x) => {
    const geo = along(extrude(arcShape(r - 0.45, r - 0.02, 180 - keep[1], 180 - keep[0], 48), 0.3, 0.03));
    const f = mesh(geo, WHITE, [...tags, "frame"]);
    f.position.x = x + 0.15;
    g.add(f);
  });
  [70, 120, 200, 245].forEach((th) => {
    const s = box(x1 - x0, 0.12, 0.12, [...tags, "stringer"]);
    s.position.copy(wall((x0 + x1) / 2, th, 0.08));
    g.add(s);
  });
  // Conduits along the far wall, clipped at each frame
  [[150, 0.14], [162, 0.1], [228, 0.12]].forEach(([th, pr]) => {
    const p = cyl(pr, x1 - x0 - 0.4, [...tags, "conduit"], WHITE, 10);
    p.rotation.z = Math.PI / 2;
    p.position.copy(wall((x0 + x1) / 2, th, 0.55));
    g.add(p);
    [-6, -3, 0, 3].forEach((x) => {
      const clip = box(0.3, 0.4, 0.4, tags);
      clip.position.copy(wall(x, th, 0.45));
      g.add(clip);
    });
  });
  const drop = pipe([wall(-8.2, 150, 0.55), wall(-8.2, 120, 0.9), v(-8.2, floor + 0.6, -3.6)], 0.12, [...tags, "conduit"]);
  g.add(drop);

  // Floor: plates with seams, a hatch near the door
  const half = Math.sqrt(r * r - floor * floor) - 0.1;
  for (let x = x0 + 0.2; x < x1 - 1; x += 2.6)
    for (let k = 0; k < 3; k++) {
      const w = (2 * half) / 3;
      const p = box(2.55, 0.18, w - 0.06, [...tags, "floor"]);
      p.position.set(x + 1.3, floor - 0.09, -half + w * (k + 0.5));
      g.add(p);
    }
  const fh = plate(3, 2.2, 0.06, 0.25, [...tags, "hatch"], { border: 0.14 });
  fh.rotation.x = -Math.PI / 2;
  fh.position.set(-5.4, floor + 0.01, 1.8);
  g.add(fh);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => {
    const bt = bolts(1, 0, tags, 0.08);
    bt.rotation.x = -Math.PI / 2;
    bt.position.set(-5.4 + a * 1.3, floor + 0.02, 1.8 + b * 0.9);
    g.add(bt);
  });

  // Door hatch on the far wall: framed, a small window, a wheel
  const door = new THREE.Group();
  door.name = "door";
  door.add(plate(2.4, 3.4, 0.12, 0.6, [...tags, "door"]));
  const df = plate(2.4, 3.4, 0.1, 0.6, [...tags, "door"], { border: 0.16 });
  df.position.z = 0.12;
  const win = plate(0.9, 0.7, 0.06, 0.15, [...tags, "door"], { border: 0.1 });
  win.position.set(0, 0.8, 0.12);
  const wheel = mesh(new THREE.TorusGeometry(0.38, 0.05, 6, 24), WHITE, [...tags, "door"]);
  wheel.position.set(0, -0.4, 0.3);
  door.add(df, win, wheel);
  door.position.set(-6.4, 0.2, -5.62);
  g.add(door);

  // Wall panels on the far side: small screens and button grids above a side shelf
  const side = new THREE.Group();
  side.add(Object.assign(screen(1.6, 1.1, tags), {}));
  const bg = buttons(4, 3, tags, [1, 6]);
  bg.position.x = 1.8;
  side.add(bg);
  const s2 = screen(1.2, 1.1, tags, { traces: 2 });
  s2.position.x = 3.4;
  side.add(s2);
  side.position.set(-3.2, 1.6, -5.55);
  g.add(side);
  const shelf = box(4.6, 0.9, 1.1, tags);
  shelf.position.set(-1.6, floor + 0.45, -4.9);
  g.add(shelf);

  // Front console: a lower desk, the instrument panel leaning back, angled wing panels, a glare shield
  const desk = box(1.6, 2.1, 9.2, [...tags, "console"]);
  desk.position.set(4.1, floor + 1.05, 0);
  g.add(desk);
  const panel = instrumentPanel(tags);
  panel.scale.setScalar(0.62);
  panel.rotation.order = "YXZ";
  panel.rotation.set(-0.38, -Math.PI / 2, 0);
  panel.position.set(4.3, 0.95, 0);
  g.add(panel);
  const shield = box(1.1, 0.25, 6.6, tags);
  shield.position.set(4.75, 2.2, 0);
  g.add(shield);
  [-1, 1].forEach((s) => {
    const wing = new THREE.Group();
    wing.add(plate(3, 2.6, 0.3, 0.3, [...tags, "console"]));
    const sc = screen(1.3, 0.9, tags);
    sc.position.set(-0.6, 0.55, 0.3);
    const bt = buttons(3, 2, tags, s > 0 ? [2] : [3]);
    bt.position.set(0.75, 0.55, 0.3);
    const sw = new THREE.Group();
    [-0.9, -0.3, 0.3, 0.9].forEach((x, i) => {
      const t = toggle(tags, i % 2 === 0);
      t.scale.setScalar(0.6);
      t.position.x = x;
      sw.add(t);
    });
    sw.position.set(0, -0.6, 0.3);
    wing.add(sc, bt, sw);
    wing.rotation.order = "YXZ";
    wing.rotation.set(-0.3, -Math.PI / 2 - s * 0.55, 0);
    wing.position.set(3.4, 0.6, s * 4.1);
    g.add(wing);
  });
  // Centre pedestal between the seats: throttle levers (gold) and a button grid
  const ped = box(1.8, 1.5, 1, [...tags, "console"]);
  ped.position.set(2.2, floor + 0.75, 0);
  g.add(ped);
  [-0.25, 0.25].forEach((z) => {
    const lever = cyl(0.05, 0.6, [...tags, "energy", "throttle"], WHITE, 8);
    lever.position.set(2.3, floor + 1.75, z);
    lever.rotation.z = 0.35;
    const grip = box(0.18, 0.14, 0.3, [...tags, "energy", "throttle"]);
    grip.position.set(2.2, floor + 2.05, z);
    g.add(lever, grip);
  });
  const pb = buttons(3, 2, tags, [4]);
  pb.rotation.x = -Math.PI / 2;
  pb.rotation.z = Math.PI / 2;
  pb.position.set(1.7, floor + 1.51, 0);
  g.add(pb);

  // Two pilot seats facing forward, each with a gold control column
  [-1.95, 1.95].forEach((z, i) => {
    const s = new THREE.Group();
    s.name = `seat:${i + 1}`;
    const t = [...tags, "seat"];
    const base = box(1.3, 0.5, 1.2, t);
    base.position.y = 0.25;
    const post = cyl(0.18, 0.6, t, WHITE, 12);
    post.position.y = 0.8;
    const pan = box(1.5, 0.35, 1.5, t);
    pan.position.y = 1.25;
    const back = box(0.35, 2.5, 1.5, t);
    back.position.set(-0.78, 2.45, 0);
    back.rotation.z = 0.12;
    const head = box(0.3, 0.6, 0.9, t);
    head.position.set(-0.95, 4.0, 0);
    head.rotation.z = 0.12;
    s.add(base, post, pan, back, head);
    [-1, 1].forEach((k) => {
      const arm = box(1.1, 0.14, 0.18, t);
      arm.position.set(-0.1, 1.95, k * 0.82);
      const bol = box(1.3, 0.3, 0.16, t);
      bol.position.set(0, 1.55, k * 0.8);
      s.add(arm, bol);
    });
    s.position.set(0.6, floor, z);
    g.add(s);
    const col = pipe([v(2.5, floor, z), v(2.6, floor + 1.5, z), v(2.45, floor + 2.5, z)], 0.08, [...tags, "energy", "column"]);
    const yoke = pipe([v(2.4, floor + 3.05, z - 0.55), v(2.4, floor + 2.55, z - 0.5), v(2.45, floor + 2.5, z), v(2.4, floor + 2.55, z + 0.5), v(2.4, floor + 3.05, z + 0.55)], 0.07, [...tags, "energy", "column"]);
    g.add(col, yoke);
  });

  // Framed windows in the dome, facing in
  [[1.4, 205], [1.4, 240], [1.4, 262], [2.4, 230]].forEach(([h, th], i) => {
    const rr = r * Math.sqrt(1 - (h / dome) ** 2) - 0.06;
    const w = plate(i === 3 ? 1.3 : 1.6, i === 3 ? 0.8 : 1.1, 0.08, 0.2, [...tags, "window"], { border: 0.14 });
    w.position.set(x1 + h, -rr * Math.sin(th * RAD), rr * Math.cos(th * RAD));
    w.lookAt(v(x1 + h * 0.4, 0, 0));
    g.add(w);
  });
  return g;
}

// ---------------------------------------------------------------------------------------------------------------
// Classroom: where crews train. A rocket model on its cradles (specialisation, one stage per profile), a
// blackboard of orbits (deep-dives), a capsule simulator (the hackathon), desks with open flight manuals
// (self-paced), an empty lectern and a side console.
export function buildClassroom() {
  const g = new THREE.Group();
  g.name = "classroom";
  const tags = ["classroom"];
  g.add(room(tags, { x0: -14, x1: 14, z0: -10, z1: 10, h: 9 }));

  // Blackboard with orbit drawings
  const bb = new THREE.Group();
  bb.name = "blackboard";
  bb.add(plate(11.4, 4.8, 0.2, 0.1, [...tags, "board"]));
  const face = plate(11, 4.4, 0.05, 0.06, [...tags, "board"]);
  face.position.z = 0.2;
  bb.add(face);
  const tray = box(11, 0.12, 0.3, tags);
  tray.position.set(0, -2.45, 0.3);
  bb.add(tray);
  const gold = [...tags, "energy", "drawing"];
  const orbit = (rx, ry, x, y, rot) => {
    const o = mesh(new THREE.TorusGeometry(1, 0.025, 4, 64), WHITE, gold);
    o.scale.set(rx, ry, 1);
    o.rotation.z = rot;
    o.position.set(x, y, 0.3);
    bb.add(o);
  };
  orbit(1.6, 0.9, -3.4, 0.3, 0.3);
  orbit(1.1, 1.1, -3.4, 0.3, 0);
  orbit(1.4, 0.6, 0.6, 0.6, -0.4);
  const planet = cyl(0.3, 0.04, gold, WHITE, 24);
  planet.rotation.x = Math.PI / 2;
  planet.position.set(-3.4, 0.3, 0.3);
  bb.add(planet);
  const arc = pipe([v(-1.6, -1.4, 0.3), v(-0.4, 0.6, 0.3), v(1.8, 1.6, 0.3), v(3.2, 1.0, 0.3)], 0.03, gold);
  bb.add(arc);
  for (let i = 0; i < 6; i++) {
    const w = 1.2 + ((i * 7) % 5) * 0.4;
    const l = box(w, 0.06, 0.02, tags, INK);
    l.position.set(2.8 + w / 2, 1.3 - i * 0.5, 0.29);
    bb.add(l);
  }
  bb.position.set(1, 5, -10);
  g.add(bb);
  // A poster on the back wall and a schematic on the left wall
  const poster = wallScreen(3.4, 2.6, tags, "poster");
  orbitOn(poster, gold);
  poster.position.set(-9.5, 5.6, -10);
  g.add(poster);
  const schem = wallScreen(4, 3, tags, "schematic");
  for (let i = 0; i < 5; i++) {
    const l = box(2.6 - (i % 2) * 0.8, 0.05, 0.02, tags, INK);
    l.position.set(-0.4, 0.9 - i * 0.45, 0.3);
    schem.add(l);
  }
  schem.position.set(-14, 5.5, 3);
  schem.rotation.y = Math.PI / 2;
  g.add(schem);

  // Rocket model on two cradles
  const model = buildRocket().group;
  model.scale.setScalar(0.13);
  model.rotation.z = -Math.PI / 2;
  model.position.set(-6.2, 2.4, -5.2);
  model.name = "model";
  g.add(model);
  [-8.6, -3.8].forEach((x) => {
    const c = new THREE.Group();
    c.add(put(c, box(0.3, 1.6, 0.25, tags), 0, 0.8, -0.55), put(c, box(0.3, 1.6, 0.25, tags), 0, 0.8, 0.55));
    c.add(put(c, box(0.4, 0.2, 1.6, tags), 0, 1.65, 0), put(c, box(1.4, 0.15, 1.6, tags), 0, 0.08, 0));
    c.position.set(x, 0, -5.2);
    g.add(c);
  });
  const plaque = plate(1.4, 0.4, 0.06, 0.06, tags);
  plaque.position.set(-6.2, 0.6, -4.4);
  g.add(plaque);

  // Capsule simulator on legs, a ladder and a service gantry with a gold umbilical
  const sim = new THREE.Group();
  sim.name = "simulator";
  const prof = [v(2.6, 0, 0), v(2.5, 0.4, 0), v(1.5, 3.3, 0), v(1.3, 3.6, 0), v(0.9, 4.1, 0), v(0, 4.3, 0)].map((p) => new THREE.Vector2(p.x, p.y));
  const capsule = mesh(new THREE.LatheGeometry(prof, 48), WHITE, [...tags, "capsule"]);
  capsule.material.side = THREE.DoubleSide;
  capsule.position.y = 1.4;
  sim.add(capsule);
  const heat = mesh(new THREE.TorusGeometry(2.6, 0.12, 6, 48), WHITE, [...tags, "energy", "capsule"]);
  heat.rotation.x = Math.PI / 2;
  heat.position.y = 1.4;
  sim.add(heat);
  [0, 90, 180, 270].forEach((a) => {
    const leg = cyl(0.12, 1.5, tags, WHITE, 8);
    leg.position.copy(polar(1.9, a + 45, 0.7));
    sim.add(leg);
  });
  [[30, 2.6], [150, 2.6]].forEach(([a, y]) => {
    const w = plate(0.8, 0.6, 0.06, 0.15, [...tags, "window"], { border: 0.1 });
    const rr = 2.5 - ((y - 1.8) / 2.9) * 1.0;
    w.position.copy(polar(rr + 0.02, a, y));
    w.lookAt(polar(rr * 3, a, y + 0.6));
    sim.add(w);
  });
  const hatchS = plate(1.2, 1.4, 0.08, 0.3, [...tags, "hatch"], { border: 0.12 });
  hatchS.position.copy(polar(2.05, 90, 2.4));
  hatchS.lookAt(polar(6, 90, 3.2));
  sim.add(hatchS);
  for (let k = 0; k < 6; k++) {
    const rung = box(0.9, 0.06, 0.06, tags);
    rung.position.copy(polar(3.0, 90, 0.25 + k * 0.38));
    rung.rotation.y = -90 * RAD;
    sim.add(rung);
  }
  [-0.45, 0.45].forEach((d) => {
    const rail = box(0.06, 2.4, 0.06, tags);
    const p = polar(3.0, 90, 1.2);
    rail.position.set(p.x, 1.2, p.z + d);
    sim.add(rail);
  });
  const gantry = new THREE.Group();
  gantry.add(put(gantry, cyl(0.12, 6, tags, WHITE, 8), 0, 3, 0), put(gantry, box(2.6, 0.2, 0.2, tags), -1.2, 6, 0));
  sim.add(put(sim, gantry, 3.6, 0, -1.6));
  sim.add(pipe([v(2.4, 6, -1.6), v(1.4, 5.6, -1.4), v(1.0, 5.2, -0.7)], 0.06, [...tags, "energy", "umbilical"]));
  sim.position.set(9.4, 0, 2.6);
  sim.rotation.y = -0.6;
  g.add(sim);

  // Desks with chairs and open manuals, four rows facing the board
  let k = 0;
  [-2.4, 0.8, 4.0, 7.2].forEach((z) =>
    [-7.4, -3.0, 1.4].forEach((x) => {
      const d = new THREE.Group();
      d.name = `desk:${++k}`;
      d.add(put(d, box(2.4, 0.12, 1.3, [...tags, "desk"]), 0, 1.6, 0));
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => d.add(put(d, cyl(0.05, 1.6, tags, WHITE, 6), a * 1.1, 0.8, b * 0.55)));
      d.add(put(d, box(2.2, 0.06, 0.4, tags), 0, 1.25, -0.4));
      d.add(put(d, manual(tags), 0.3, 1.66, 0.05));
      d.add(put(d, schoolChair(tags), 0, 0, 1.25));
      d.position.set(x, 0, z);
      g.add(d);
    }),
  );
  // Lectern facing the class, and a side console
  const lec = new THREE.Group();
  lec.name = "lectern";
  lec.add(put(lec, box(1.3, 2.3, 0.9, tags), 0, 1.15, 0));
  const top = box(1.5, 0.12, 1.1, tags);
  top.position.set(0, 2.4, 0.05);
  top.rotation.x = 0.25;
  lec.add(top, put(lec, manual(tags), 0, 2.5, 0.05));
  lec.position.set(4.2, 0, -7.2);
  g.add(lec);
  const con = new THREE.Group();
  con.add(put(con, box(3, 2.2, 1.4, tags), 0, 1.1, 0));
  const cp = new THREE.Group();
  cp.add(put(cp, screen(1.2, 0.8, tags), -0.7, 0, 0), put(cp, buttons(3, 2, tags, [1, 5]), 0.8, 0, 0));
  cp.rotation.x = -0.6;
  cp.position.set(0, 2.25, 0.2);
  con.add(cp);
  con.position.set(-12.2, 0, 0.5);
  con.rotation.y = Math.PI / 2;
  g.add(con);
  return g;
}

function orbitOn(scr, tags) {
  [[1.2, 0.5, 0], [0.7, 0.7, 0]].forEach(([rx, ry, rot]) => {
    const o = mesh(new THREE.TorusGeometry(1, 0.025, 4, 48), WHITE, tags);
    o.scale.set(rx, ry, 1);
    o.rotation.z = rot;
    o.position.z = 0.3;
    scr.add(o);
  });
}

// ---------------------------------------------------------------------------------------------------------------
// Mission control: six curved consoles in three rows facing the back wall. Back wall: the flight from pad to moon,
// the showcase site, the cockpit's four dials. Left wall: our rocket in side view and a message list.
export const MISSION = { consoles: [[-6.5, -4.5], [6.5, -4.5], [-6.5, 1.5], [6.5, 1.5], [-6.5, 7.5], [6.5, 7.5]] };

function console6(tags, name) {
  const g = new THREE.Group();
  g.name = name;
  const t = [...tags, "console", name];
  const facing = (obj, rad, a, y, tilt = 0) => {
    obj.position.copy(polar(rad, a, y));
    obj.rotation.order = "YXZ";
    obj.rotation.set(tilt, -a * RAD, 0);
    g.add(obj);
    return obj;
  };
  const body = mesh(extrude(arcShape(3.9, 5.2, -36, 36), 1.5, 0.03), WHITE, t);
  body.position.y = 1.5;
  const top = mesh(extrude(arcShape(3.6, 5.3, -38, 38), 0.12, 0.02), WHITE, t);
  top.position.y = 1.62;
  const riser = mesh(extrude(arcShape(4.8, 5.3, -36, 36), 1.6, 0.03), WHITE, t);
  riser.position.y = 3.2;
  g.add(body, top, riser);
  [-24, 0, 24].forEach((a) => facing(plate(1.6, 1.0, 0.06, 0.08, t, { border: 0.08 }), 3.88, a, 0.75));
  [-24, 24].forEach((a) => facing(box(0.4, 0.05, 0.05, t, INK), 3.86, a, 1.0));
  [-27, -9, 9, 27].forEach((a, i) => facing(screen(2.1, 1.25, t, { traces: 3, lit: i % 2 === 0 }), 4.75, a, 2.45, -0.18));
  facing(box(1.7, 0.06, 0.5, t), 4.05, 0, 1.7);
  facing(box(0.2, 0.06, 0.25, t), 4.05, 14, 1.7);
  facing(headset(t), 4.3, -18, 1.68);
  g.add(put(g, officeChair(t), 0, 0, -2.8));
  return g;
}

export function buildMissionControl() {
  const g = new THREE.Group();
  g.name = "mission";
  const tags = ["mission"];
  const gold = [...tags, "energy"];
  g.add(room(tags, { x0: -15, x1: 15, z0: -11, z1: 11, h: 10 }));
  MISSION.consoles.forEach(([x, z], i) => {
    const c = console6(tags, `console:${i + 1}`);
    c.position.set(x, 0, z + 2.8);
    g.add(c);
  });

  // Back wall: the flight, the site, the dials
  const flight = wallScreen(8, 5, tags, "screen:flight");
  const earth = cyl(0.55, 0.04, tags, WHITE, 32);
  earth.rotation.x = Math.PI / 2;
  earth.position.set(-2.7, -1.3, 0.3);
  const moon = cyl(0.45, 0.04, tags, WHITE, 32);
  moon.rotation.x = Math.PI / 2;
  moon.position.set(2.8, 1.3, 0.3);
  const path = new THREE.QuadraticBezierCurve3(v(-2.4, -0.9, 0.32), v(-1.2, 2.0, 0.32), v(2.3, 1.2, 0.32));
  flight.add(earth, moon, mesh(new THREE.TubeGeometry(path, 48, 0.04, 6), WHITE, tags));
  const flown = new THREE.CatmullRomCurve3(Array.from({ length: 17 }, (_, i) => path.getPoint((0.55 * i) / 16)));
  flight.add(mesh(new THREE.TubeGeometry(flown, 32, 0.07, 6), WHITE, gold));
  const ship = mesh(new THREE.ConeGeometry(0.14, 0.45, 10), WHITE, gold);
  ship.position.copy(path.getPoint(0.55));
  ship.quaternion.setFromUnitVectors(v(0, 1, 0), path.getTangent(0.55));
  flight.add(ship);
  const orbitE = mesh(new THREE.TorusGeometry(1, 0.02, 4, 48), WHITE, tags);
  orbitE.scale.set(1.1, 0.5, 1);
  orbitE.position.set(-2.7, -1.3, 0.32);
  flight.add(orbitE);
  put(g, flight, -9.8, 5.8, -11);

  const site = wallScreen(9.2, 5.6, tags, "screen:site");
  site.add(put(site, box(8.2, 0.45, 0.04, tags), 0, 2.15, 0.3));
  site.add(put(site, box(0.7, 0.25, 0.04, gold), -3.6, 2.15, 0.34));
  site.add(put(site, plate(3.8, 1.8, 0.04, 0.08, [...tags, "soft"]), -2.0, 0.8, 0.28));
  [[3.4, 1.4], [2.8, 1.0], [1.8, 0.6]].forEach(([w, y]) => site.add(put(site, box(w, 0.12, 0.04, tags, INK), 0.4 + w / 2, y, 0.3)));
  site.add(put(site, box(1.2, 0.32, 0.04, gold), 1.0, 0.1, 0.3));
  [-2.8, 0, 2.8].forEach((x, c) => [-0.9, -1.9].forEach((y, r) => site.add(put(site, plate(2.5, 0.8, 0.04, 0.06, (c + r) % 3 === 0 ? [...tags, "soft"] : tags, { border: (c + r) % 3 === 0 ? 0 : 0.06 }), x, y, 0.28))));
  put(g, site, 0.6, 6.3, -11);

  const dials = wallScreen(6.4, 5, tags, "screen:dials");
  [{ value: 0.66, range: [0.55, 0.85] }, { value: 0.7, range: [0.6, 0.95] }, { value: 0.5, ticks: 4, minor: 0 }, { value: 0.64, centre: true, ticks: 8, minor: 1, sweep: 240 }].forEach((o, i) => {
    const d = dial(0.75, [...tags, "wall-dial"], { ticks: 10, minor: 1, ...o });
    d.position.set(i % 2 ? 1.4 : -1.4, i < 2 ? 0.95 : -1.0, 0.28);
    dials.add(d);
  });
  put(g, dials, 10.2, 5.8, -11);

  // Left wall: the rocket in side view, a message list
  const side = wallScreen(8, 4.4, tags, "screen:rocket");
  const mini = buildRocket().group;
  mini.scale.setScalar(0.09);
  mini.rotation.z = -Math.PI / 2;
  mini.position.set(-0.6, 0, 0.75);
  side.add(mini);
  put(g, side, -15, 6, -5, Math.PI / 2);
  const list = wallScreen(6, 5, tags, "screen:list");
  for (let i = 0; i < 7; i++) {
    list.add(put(list, box(0.18, 0.18, 0.04, i < 3 ? gold : tags), -2.0, 1.6 - i * 0.5, 0.3));
    list.add(put(list, box(2.4 + ((i * 3) % 4) * 0.3, 0.1, 0.04, tags, INK), -0.3 + ((i * 3) % 4) * 0.15, 1.6 - i * 0.5, 0.3));
  }
  put(g, list, -15, 6, 4, Math.PI / 2);
  // A clock and a small sign over the site screen
  const clock = dial(0.55, tags, { value: 0.3, ticks: 12, minor: 0, sweep: 360 });
  put(g, clock, -3.8, 9.3, -10.7);
  return g;
}
