// The cockpit, one of the rooms around the rocket (src/engine/sets.js), drawn for a cutaway view. Gold (the
// energy role) marks the control columns and lit buttons.
import * as THREE from "three";
import { RAD, extrude } from "../../geometry.js";
import { mesh } from "../../parts.js";
import { WHITE, box, cyl, plate, bolts, pipe, arcShape, toggle, buttons, screen } from "../kit.js";
import { instrumentPanel } from "../instruments.js";
import { v } from "./furniture.js";

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
