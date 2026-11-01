// One builder per layer: each layer is a named engine part. Parts sit below y = 0 and report their height.
// Where a layer powers a phase, its working element (arm, bump, pipe, valve, terminal, dial) sits over that phase.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { LOOP } from "../data.js";
import { RING, DROP, RAD, extrude, polar, phaseAngle } from "../geometry.js";
import { mesh } from "../parts.js";

// Leader dots sit on the working element seen on the right of the band shots (camera at 210°, so screen
// right is 120°): the Develop phase, which every Contextualise part powers
const FACE = phaseAngle(2);

const WHITE = "#ffffff";
const INK = "#1e1e1e";

// Angles of the phases a layer powers (Drop sits over its lobe, outside Deepen)
function powered(on) {
  const out = [];
  on.forEach((v, i) => {
    if (!v) return;
    out.push(i < LOOP.length ? phaseAngle(i) : (DROP.from + DROP.to) / 2);
  });
  return out;
}

function annulus(rIn, rOut, h, chamfer) {
  const s = new THREE.Shape();
  s.absarc(0, 0, rOut, 0, Math.PI * 2, false);
  const hole = new THREE.Path();
  hole.absarc(0, 0, rIn, 0, Math.PI * 2, true);
  s.holes.push(hole);
  return extrude(s, h, chamfer);
}

// A disc-profile with radius r(a) and a bore: cams and gears
function profile(rIn, h, radius, steps = 720) {
  const s = new THREE.Shape();
  for (let k = 0; k <= steps; k++) {
    const a = (360 * k) / steps;
    const r = radius(a);
    const p = new THREE.Vector2(r * Math.sin(a * RAD), -r * Math.cos(a * RAD));
    if (k === 0) s.moveTo(p.x, p.y);
    else s.lineTo(p.x, p.y);
  }
  const hole = new THREE.Path();
  hole.absarc(0, 0, rIn, 0, Math.PI * 2, true);
  s.holes.push(hole);
  return s;
}

// A part placed on the ring at (r, angle, y), turned to face outward
function place(obj, r, a, y) {
  obj.position.copy(polar(r, a, y));
  obj.rotation.y = -a * RAD;
  return obj;
}

// Radial bar from r0 to r1, lying on top of the ring
function arm(r0, r1, a, y, w, h, tags) {
  const m = mesh(new THREE.BoxGeometry(w, h, r1 - r0), WHITE, tags);
  return place(m, (r0 + r1) / 2, a, y);
}

const BUILDERS = {
  // ---------- Discover: probes reaching outside the rim ----------
  L0(layer, tags, g) {
    g.add(mesh(annulus(RING.rIn, 1.95, 0.14), WHITE, tags));
    powered(layer.on).forEach((a) => {
      g.add(arm(1.9, 4.45, a, -0.07, 0.09, 0.07, tags));
      const dish = mesh(new THREE.CylinderGeometry(0.24, 0.1, 0.16, 32), WHITE, tags);
      g.add(place(dish, 4.55, a, -0.02));
      const tip = mesh(new THREE.SphereGeometry(0.05, 16, 8), INK, tags);
      g.add(place(tip, 4.55, a, 0.1));
    });
    return 0.14;
  },
  L12(layer, tags, g) {
    g.add(mesh(annulus(RING.rIn, 1.95, 0.14), WHITE, tags));
    powered(layer.on).forEach((a) => {
      g.add(arm(1.9, 4.0, a + 9, -0.07, 0.07, 0.06, tags));
      const head = mesh(new THREE.BoxGeometry(0.3, 0.18, 0.3), WHITE, tags);
      g.add(place(head, 4.1, a + 9, -0.03));
    });
    return 0.14;
  },

  // ---------- Build: the gear train ----------
  L2(layer, tags, g) {
    // Cam: a bump over each phase it shapes (spec sets the motion)
    const bumps = powered(layer.on);
    const radius = (a) => {
      let r = 2.7;
      bumps.forEach((b) => {
        const d = Math.abs(((a - b + 540) % 360) - 180);
        r += 0.75 * Math.pow(Math.max(0, Math.cos((d / 40) * (Math.PI / 2))), 2);
      });
      return r;
    };
    g.add(mesh(extrude(profile(RING.rIn, 0.18, radius), 0.18), WHITE, tags));
    return 0.18;
  },
  L1(layer, tags, g) {
    // Drive gear: teeth all round, lightening holes
    const teeth = 120;
    const radius = (a) => 3.42 + (Math.sin(((a * teeth) / 360) * Math.PI * 2) > 0 ? RING.tooth : 0);
    const s = profile(RING.rIn, 0.2, radius, teeth * 8);
    for (let k = 0; k < 6; k++) {
      const a = (k * 60 + 30) * RAD;
      const hole = new THREE.Path();
      hole.absarc(2.45 * Math.sin(a), -2.45 * Math.cos(a), 0.42, 0, Math.PI * 2, true);
      s.holes.push(hole);
    }
    g.add(mesh(extrude(s, 0.2), WHITE, tags));
    powered(layer.on).forEach((a) => {
      const boss = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.12, 32), WHITE, tags);
      g.add(place(boss, 3.0, a, 0.06));
    });
    return 0.2;
  },

  // ---------- Contextualise: the manifold that carries context out of the Nexus ----------
  L5(layer, tags, g) {
    g.add(mesh(annulus(RING.rIn, 1.8, 0.26), WHITE, tags));
    powered(layer.on).forEach((a) => {
      const pipe = mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.6, 24), WHITE, tags);
      pipe.rotation.x = Math.PI / 2;
      const holder = place(new THREE.Group(), 2.6, a, -0.13);
      holder.add(pipe);
      g.add(holder);
      const flange = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 32), WHITE, tags);
      flange.rotation.x = Math.PI / 2;
      const f = place(new THREE.Group(), 3.42, a, -0.13);
      f.add(flange);
      g.add(f);
    });
    g.userData.anchor = polar(2.9, FACE, -0.03);
    return 0.26;
  },
  L4(layer, tags, g) {
    g.add(mesh(annulus(RING.rIn, 3.1, 0.1), WHITE, tags));
    powered(layer.on).forEach((a) => {
      const block = mesh(new THREE.BoxGeometry(0.42, 0.22, 0.34), WHITE, tags);
      g.add(place(block, 2.6, a, 0.11));
      const stem = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 16), INK, tags);
      g.add(place(stem, 2.6, a, 0.3));
    });
    g.userData.anchor = polar(2.75, FACE, 0.22);
    return 0.1;
  },
  L6(layer, tags, g) {
    // Distributor: a cap with a terminal per phase, tall where it fires, and a rotor arm
    g.add(mesh(annulus(RING.rIn, 2.5, 0.2), WHITE, tags));
    const on = powered(layer.on);
    LOOP.forEach((p, i) => {
      const a = phaseAngle(i);
      const live = on.includes(a);
      const post = mesh(new THREE.CylinderGeometry(0.08, 0.08, live ? 0.34 : 0.14, 20), WHITE, tags);
      g.add(place(post, 2.25, a, live ? 0.17 : 0.07));
    });
    const rotor = mesh(new THREE.BoxGeometry(0.12, 0.06, 0.8), INK, tags);
    g.add(place(rotor, 1.85, on[0] ?? 0, 0.03));
    g.userData.anchor = polar(2.5, FACE - 24, -0.1);
    return 0.2;
  },

  // ---------- Measure: instruments ----------
  L8(layer, tags, g) {
    // Test bench: a grate the work passes through
    const s = new THREE.Shape();
    s.absarc(0, 0, 3.45, 0, Math.PI * 2, false);
    const bore = new THREE.Path();
    bore.absarc(0, 0, RING.rIn, 0, Math.PI * 2, true);
    s.holes.push(bore);
    for (let k = 0; k < 60; k++) {
      const a = k * 6 * RAD, w = 1.6 * RAD;
      const slot = new THREE.Path();
      const pt = (r, t) => new THREE.Vector2(r * Math.sin(t), -r * Math.cos(t));
      const p = [pt(2.3, a - w), pt(3.15, a - w), pt(3.15, a + w), pt(2.3, a + w)];
      slot.moveTo(p[0].x, p[0].y);
      [p[3], p[2], p[1], p[0]].forEach((q) => slot.lineTo(q.x, q.y));
      s.holes.push(slot);
    }
    g.add(mesh(extrude(s, 0.12), WHITE, tags));
    return 0.12;
  },
  L9(layer, tags, g) {
    g.add(mesh(annulus(RING.rIn, 3.2, 0.12), WHITE, tags));
    powered(layer.on).forEach((a) => {
      const dial = new THREE.Group();
      const body = mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.14, 40), WHITE, tags);
      body.rotation.x = Math.PI / 2;
      const needle = mesh(new THREE.BoxGeometry(0.04, 0.3, 0.03), INK, tags);
      needle.position.set(0.08, 0.06, 0.09);
      needle.rotation.z = -0.7;
      dial.add(body, needle);
      dial.position.y = 0.42;
      const holder = place(new THREE.Group(), 3.3, a, 0);
      holder.add(dial);
      g.add(holder);
    });
    return 0.12;
  },

  // ---------- Platform: the chassis ----------
  L3(layer, tags, g) {
    // Throttle: the body every model call passes through
    g.add(mesh(annulus(RING.rIn, 3.0, 0.16), WHITE, tags));
    const body = new THREE.Group();
    const barrel = mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.9, 40, 1, true), WHITE, tags);
    // Open tube: both faces drawn, as the normal pass does, so the inside reads as a wall
    barrel.material.side = THREE.DoubleSide;
    barrel.rotation.z = Math.PI / 2;
    const plate = mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.03, 40), INK, tags);
    plate.rotation.z = Math.PI / 2 + 0.6;
    const lever = mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), WHITE, tags);
    lever.position.set(0.5, 0.25, 0);
    body.add(barrel, plate, lever);
    body.position.y = 0.32;
    const holder = place(new THREE.Group(), 3.2, 90, 0);
    holder.add(body);
    g.add(holder);
    return 0.16;
  },
  L7(layer, tags, g) {
    // Fuel meter: tokens are the fuel
    g.add(mesh(annulus(RING.rIn, 3.25, 0.14), WHITE, tags));
    const meter = new THREE.Group();
    const face = mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.16, 48), WHITE, tags);
    face.rotation.x = Math.PI / 2;
    const needle = mesh(new THREE.BoxGeometry(0.05, 0.42, 0.03), "#ee2238", tags);
    needle.position.set(0.1, 0.1, 0.1);
    needle.rotation.z = 0.9;
    meter.add(face, needle);
    meter.position.y = 0.2;
    const holder = place(new THREE.Group(), 3.45, 200, -0.2);
    holder.add(meter);
    g.add(holder);
    return 0.14;
  },
  L10(layer, tags, g) {
    // Engine block: the heavy base, with cooling fins
    g.add(mesh(annulus(RING.rIn, 3.5, 0.5, 0.04), WHITE, tags));
    for (let k = 0; k < 64; k++) {
      const fin = mesh(new THREE.BoxGeometry(0.035, 0.42, 0.32), WHITE, tags);
      g.add(place(fin, 3.62, k * (360 / 64), -0.25));
    }
    return 0.5;
  },
};

export function buildLayer(layer, tags) {
  const g = new THREE.Group();
  const h = BUILDERS[layer.id](layer, tags, g);
  g.userData.h = h;
  return merge(g);
}

// A layer moves as one piece and every sub-part carries the same tags, so its meshes are baked into one
// mesh per look (role and sides): L10's 64 fins become one draw call
function merge(g) {
  g.updateMatrixWorld(true);
  const looks = new Map();
  g.traverse((m) => {
    if (!m.isMesh) return;
    const key = `${m.material.uniforms.role.value}|${m.material.side}`;
    if (!looks.has(key)) looks.set(key, { material: m.material, tags: m.userData.tags, geos: [] });
    const geo = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    Object.keys(geo.attributes).forEach((name) => name !== "position" && name !== "normal" && geo.deleteAttribute(name));
    geo.clearGroups();
    looks.get(key).geos.push(geo.applyMatrix4(m.matrixWorld));
    m.geometry.dispose();
    if (looks.get(key).material !== m.material) m.material.dispose();
  });
  const out = new THREE.Group();
  out.userData = g.userData;
  looks.forEach(({ material, tags, geos }) => {
    const m = new THREE.Mesh(mergeGeometries(geos), material);
    m.userData.tags = tags;
    m.userData.role = material.uniforms.role.value;
    out.add(m);
    geos.forEach((geo) => geo.dispose());
  });
  return out;
}

// L11: the ignition key shaft. Collars where identity is checked, the key at the bottom.
export function buildKey(tags) {
  const key = new THREE.Group();
  const bow = mesh(new THREE.TorusGeometry(0.2, 0.06, 16, 40), WHITE, tags);
  bow.position.y = -0.35;
  const blade = mesh(new THREE.BoxGeometry(0.1, 0.4, 0.05), WHITE, tags);
  blade.position.y = -0.05;
  key.add(bow, blade);
  return key;
}
