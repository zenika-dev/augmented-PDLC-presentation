// Room furniture for the sets: chairs, manuals and headsets stand for the crew (no figures), plus the room shell
// and its wall screens. put() places a part and adds it to its parent.
import * as THREE from "three";
import { RAD, polar } from "../../geometry.js";
import { mesh } from "../../parts.js";
import { WHITE, INK, box, cyl, plate, screen } from "../kit.js";

export const v = (x, y, z) => new THREE.Vector3(x, y, z);
export const put = (parent, obj, x, y, z, ry = 0) => {
  obj.position.set(x, y, z);
  obj.rotation.y = ry;
  parent.add(obj);
  return obj;
};

// Office chair facing -z: five-star base on casters, gas post, seat, back
export function officeChair(tags) {
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
export function schoolChair(tags) {
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
export function manual(tags) {
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
export function headset(tags) {
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
export function room(tags, { x0, x1, z0, z1, h }) {
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
export function wallScreen(w, h, tags, name) {
  const g = new THREE.Group();
  g.name = name;
  g.add(plate(w + 0.4, h + 0.4, 0.2, 0.12, [...tags, "screen", name]));
  const glass = plate(w, h, 0.06, 0.06, [...tags, "screen", name, "glass"]);
  glass.position.z = 0.2;
  g.add(glass);
  return g;
}
