// Mission control, one of the rooms around the rocket (src/engine/sets.js). No figures: chairs and headsets
// stand for the crew; gold (the energy role) marks the lit buttons and screen traces.
import * as THREE from "three";
import { RAD, polar, extrude } from "../../geometry.js";
import { mesh } from "../../parts.js";
import { WHITE, INK, box, cyl, plate, arcShape, screen, merge } from "../kit.js";
import { dial } from "../instruments.js";
import { buildRocket } from "../rocket.js";
import { v, put, officeChair, headset, room, wallScreen } from "./furniture.js";

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
  const mini = merge(buildRocket().group, { byTags: true });
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
