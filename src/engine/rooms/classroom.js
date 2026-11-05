// The classroom, one of the rooms around the rocket (src/engine/sets.js). No figures: chairs and manuals
// stand for the crew; gold (the energy role) marks the drawings, lit buttons and screen traces.
import * as THREE from "three";
import { RAD, polar } from "../../geometry.js";
import { mesh } from "../../parts.js";
import { WHITE, INK, box, cyl, plate, pipe, buttons, screen, merge } from "../kit.js";
import { buildRocket } from "../rocket.js";
import { v, put, schoolChair, manual, room, wallScreen } from "./furniture.js";

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

  // Rocket model on two cradles; it never moves, so its 700-odd parts bake into a few meshes
  const model = merge(buildRocket().group, { byTags: true });
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
