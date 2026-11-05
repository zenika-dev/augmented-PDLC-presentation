// Sets: places beyond the engine that a deck can visit, one at a time. The rocket wraps the engine (its middle
// stage holds it at its base) and stands on a pad under the moon; the cockpit, the classroom, mission control and
// the contract dial are rooms of their own, built around the origin and shown alone. A stop picks its set with
// data-set; changing set is a cut, not a camera flight (main.js).
// Leader names on the sets come from the edition (EDITION.leads: { key: [name, note] }); no name, no leader.
import * as THREE from "three";
import { EDITION } from "../data.js";
import { polar, WHEEL, DROP, RAD, phaseAngle } from "../geometry.js";
import { label, leader } from "../labels.js";
import { ROCKET, buildRocket, poseRocket, buildPad, buildMoon } from "./rocket.js";
import { buildAutonomyDial } from "./instruments.js";
import { buildCockpit, buildClassroom, buildMissionControl } from "./rooms.js";
import { buildCartridge, buildModelBay } from "./modules.js";

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const R = ROCKET.r;

// Where each leader's dot sits, per set: [parent name or null for the set's root, local point, label groups]
const POINTS = {
  rocket: {
    "stage:1": ["rocket", polar(R, 150, -15), ["stages"]],
    "stage:2": ["rocket", polar(R, 150, 8), ["stages"]],
    "stage:3": ["rocket", polar(R * 0.62, 150, 31), ["stages"]],
    "energy-line": ["rocket", polar(R + 0.2, 112, 19), ["energy"]],
    nozzles: ["rocket", v(0, ROCKET.nozzleY - 3.6, 0), []],
    moon: ["moon", v(0, 0, 0), ["target"]],
    "pillar:pdlc": [null, v(0, 0.3, 0), ["pillars"]],
    "pillar:platform": [null, polar(3.4, 150, -2.6), ["pillars"]],
    "pillar:measure": ["rocket", polar(R, 150, 23), ["pillars"]],
    "pillar:people": ["rocket", polar(R + 0.1, 160, 25), ["pillars"]],
    // Parts a numbered pin points at (pin:1 to pin:4 in a beat's labels draw them)
    "part:line": ["rocket", polar(R + 0.2, 112, 19), ["pin:1"]],
    "part:bay": ["rocket", polar(R, 140, 0.5), ["pin:1"]],
    "part:hatch": ["rocket", polar(R, 160, 25), ["pin:2"]],
    "part:cabin": ["rocket", polar(R * 0.62, 150, 31.5), ["pin:2"]],
    "part:bays": ["rocket", polar(R, 150, 6), ["pin:3"]],
    "part:conduit": ["rocket", polar(R + 0.1, 170, 13.5), ["pin:3"]],
    "part:cockpit": ["rocket", polar(R * 0.45, 150, 35), ["pin:4"]],
    "part:dials": ["rocket", polar(R, 140, 23), ["pin:4"]],
  },
  cockpit: {
    "inst:throughput": ["inst:throughput", v(0, 1.2, 0.3), ["instruments"]],
    "inst:stability": ["inst:stability", v(0, 0.3, 0.2), ["instruments"]],
    "inst:cost": ["inst:cost", v(0, 0.9, 0.5), ["instruments"]],
    "inst:productivity": ["inst:productivity", v(0, 0.5, 0.3), ["instruments"]],
    "inst:experience": ["inst:experience", v(0, 0.14, 0.3), ["instruments"]],
    seats: ["seat:1", v(-0.9, 4.2, 0), ["cabin"]],
    columns: [null, v(2.4, 0.4, 1.95), ["cabin"]],
    hatch: [null, v(-5.4, -2.6, 1.8), ["cabin"]],
  },
  classroom: {
    specialisation: ["model", v(0, 0, 0), ["tiers"]],
    "deep-dives": ["blackboard", v(-2.4, 0.3, 0.3), ["tiers"]],
    hackathon: ["simulator", v(0, 5.6, 0), ["tiers"]],
    "self-paced": ["desk:5", v(0.3, 1.7, 0.05), ["tiers"]],
  },
  mission: {
    "screen:site": ["screen:site", v(0, 0, 0.3), ["screens"]],
    "screen:flight": ["screen:flight", v(0, 0, 0.3), ["screens"]],
    "screen:dials": ["screen:dials", v(0, 0, 0.3), ["screens"]],
    "screen:rocket": ["screen:rocket", v(0, 0, 0.3), ["screens"]],
    "screen:list": ["screen:list", v(0, 0, 0.3), ["screens"]],
    console: ["console:6", v(0, 3.2, -4.2), ["screens"]],
  },
  // Parts the sets hang on the engine itself (attach(), below), looked up in the engine's root
  engine: {
    capabilities: ["cap:design:1", v(0, 0.5, 0), ["capabilities"]],
    "cart:tools": ["cartridge", v(1.95, 0.05, 0.28), ["cartridge"]],
    "cart:label": ["cartridge", v(-0.35, 0, 0.6), ["cartridge"]],
    "cart:plug": ["cartridge", v(-2.9, -0.6, 0.5), ["cartridge"]],
    "cart:clamp": ["cartridge", v(0.75, 0.42, 0), ["cartridge"]],
    "cart:dial": ["cartridge", v(-0.9, 0.4, 0), ["cartridge"]],
    "bay:manual": ["model:2", v(0, 0.9, 0.65), ["bay"]],
    "bay:selector": ["selector", v(0, 3.2, 0.4), ["bay"]],
    "bay:indicator": ["indicator", v(2.1, 3.0, 0), ["bay"]],
    "bay:context": ["nexus", v(0, 0.4, 0), ["bay"]],
  },
  contract: {
    "zone:human": [null, polar(3.1, -60, 0.4), ["zones"]],
    "zone:hybrid": [null, polar(3.1, 36, 0.4), ["zones"]],
    "zone:ai": [null, polar(3.1, 96, 0.4), ["zones"]],
    ceiling: [null, polar(3.4, 69.6, 0.9), ["ceiling"]],
    needle: [null, polar(2.6, 69.6, 0.4), ["needle"]],
    "ring:score": [null, polar(2.05, -96, 0.35), ["rings"]],
    "ring:rule": [null, polar(1.65, -72, 0.35), ["rings"]],
    "ring:ceiling": [null, polar(1.25, -48, 0.35), ["rings"]],
  },
};

// Numbered pins on the rocket: gold dots that stay on while their group shows ("pins"), next to the parts
// their leaders point at
const PINS = {
  "pin:1": polar(R + 0.6, 125, 14),
  "pin:2": polar(R + 0.6, 178, 23.5),
  "pin:3": polar(R + 0.6, 160, 2),
  "pin:4": polar(R * 0.5, 140, 34.5),
};

// Portals: two sets the camera passes between without a cut, through a shot on each side (main.js flies to
// the first, swaps the sets, flies on from the second)
const PORTALS = [{ sets: ["rocket", "cockpit"], shots: ["nose-window", "cockpit-hatch"] }];

// Pairs: two rooms back to back on a turntable that pivots on their shared back wall (world z = pivot).
// Moving between them is no cut: the turntable turns half a circle and the other room takes the first one's
// place, so each room's shots stay as they are written below
const PAIRS = [{ sets: ["classroom", "mission"], pivot: -10.8 }];

// Camera shots on the sets: orbit azimuth, elevation, distance and roll around a point `at`, moved sideways by k
// (k < 0: the subject sits right of centre, leaving the left of the screen to a card; about -0.14 × distance)
// The sets a stop can show (data-set)
export const SET_NAMES = ["rocket", "cockpit", "classroom", "mission", "contract"];

export const SET_SHOTS = {
  pad: { az: 150, elev: 6, dist: 320, k: -44, at: v(0, 16, 0) },
  "rocket-flight": { az: 120, elev: 18, dist: 235, k: -33, at: v(0, 30, 0), roll: -34 },
  "rocket-hero": { az: 150, elev: 6, dist: 250, k: 38, at: v(-12, 24, -30), roll: -8 },
  "rocket-nose": { az: 150, elev: 18, dist: 70, k: -10, at: v(0, 24, 0), roll: 4 },
  "rocket-open": { az: 145, elev: 22, dist: 130, k: -18, at: v(0, 12, 0), roll: -12 },
  "rocket-moon": { az: 135, elev: -4, dist: 215, k: -34, at: v(0, 30, 0), roll: -24 },
  capability: { az: 205, elev: 40, dist: 44, k: -6, at: polar(5.2, 144, 0) },
  "model-bay": { az: 210, elev: 14, dist: 70, k: -10, at: v(3, -5, 1) },
  "nose-window": { az: 134, elev: 2, dist: 2.2, k: 0, at: polar(R, 134, 25.1) },
  "cockpit-hatch": { az: 262, elev: 12, dist: 24, k: 0, at: v(1.5, 0, 0.2) },
  cockpit: { az: 215, elev: 34, dist: 64, k: -9, at: v(0.5, -0.6, 1.4) },
  "cockpit-panel": { az: 270, elev: 8, dist: 18.5, k: -3.6, at: v(4.3, 0.95, 0) },
  classroom: { az: 135, elev: 33, dist: 96, k: -13, at: v(-4, 1.5, -2) },
  mission: { az: 135, elev: 33, dist: 100, k: -14, at: v(0, 2, 0) },
  "telescope-right": { az: 150, elev: 18, dist: 16, k: -1.5, at: v(0, 0.9, 0), roll: 8 },
  "mission-console": { az: 200, elev: 22, dist: 72, k: -10, at: v(0, 2, 2) },
  "mission-wall": { az: 168, elev: 10, dist: 46, k: 0, at: v(-3.5, 6.2, -11) },
  contract: { az: 180, elev: 56, dist: 34, k: 0, at: v(-3, 0, 0) },
};

// Turn a part lying along +x so its front (+x) points at the engine's axis from polar angle a
const facing = (a) => Math.atan2(-Math.cos(a * RAD), -Math.sin(a * RAD));

// Parts hung on the engine (engineRoot): capability cartridges half inserted into every lobe's rim, one
// cartridge pulled out of Develop, the model bay beside the gateway layer. They follow the wheel and the
// layout, and show only when a stop lists them in data-parts (cartridges, cartridge, bay).
function attach(engineRoot) {
  const wheel = engineRoot.getObjectByName("wheel");
  const cartridges = new THREE.Group();
  cartridges.name = "capabilities";
  const hang = (c, r, a) => {
    c.scale.setScalar(0.32);
    c.position.copy(polar(r, a, -0.16));
    c.rotation.y = facing(a);
    cartridges.add(c);
  };
  const per = { discover: 2, design: 3, develop: 3, deploy: 2, deepen: 2 };
  Object.entries(per).forEach(([id, n], i) => {
    for (let k = 0; k < n; k++) {
      const c = buildCartridge(["capabilities", `cap:${id}`]);
      c.name = `cap:${id}:${k + 1}`;
      hang(c, WHEEL.rOut + 0.3, phaseAngle(i) + (k - (n - 1) / 2) * 13);
    }
  });
  const d = buildCartridge(["capabilities", "cap:drop"]);
  d.name = "cap:drop:1";
  hang(d, DROP.rOut + 0.3, (DROP.from + DROP.to) / 2);
  wheel.add(cartridges);

  const cartridge = buildCartridge(["cartridge"]);
  cartridge.position.copy(polar(WHEEL.rOut + 2.6, phaseAngle(2), 0.15));
  cartridge.rotation.y = facing(phaseAngle(2));
  wheel.add(cartridge);

  const bay = buildModelBay(["bay"], { selected: 1 });
  bay.scale.setScalar(1.05);
  bay.position.set(5.4, -1.1, 2.4);
  bay.rotation.y = -0.45;
  (engineRoot.getObjectByName("layer:L3") || engineRoot).add(bay);
  return { cartridges, cartridge, bay };
}

export function buildSets(engineRoot) {
  const group = new THREE.Group();
  group.name = "sets";
  const rocket = buildRocket();
  const pad = buildPad();
  const moon = buildMoon(7);
  moon.position.set(-40, 62, -95);
  const pieces = {
    rocket: new THREE.Group(),
    cockpit: buildCockpit(),
    classroom: buildClassroom(),
    mission: buildMissionControl(),
    contract: buildAutonomyDial({ score: 0, rule: 100, ceiling: 100 }),
  };
  pieces.rocket.add(rocket.group, pad, moon);
  const tables = PAIRS.map(({ sets: [a, b], pivot }) => {
    const table = new THREE.Group();
    table.name = `turntable:${a}:${b}`;
    table.position.z = pivot;
    pieces[a].position.z = -pivot;
    pieces[b].position.z = pivot;
    pieces[b].rotation.y = Math.PI;
    group.add(table);
    return { table, a, b };
  });
  Object.entries(pieces).forEach(([name, p]) => {
    p.name = `set:${name}`;
    p.visible = false;
    const t = tables.find((x) => x.a === name || x.b === name);
    (t ? t.table : group).add(p);
  });
  let active = null;
  const hung = attach(engineRoot);
  addLeaders(pieces, engineRoot);
  Object.entries(PINS).forEach(([key, at]) => {
    const pin = label(key.split(":")[1], [key, "pins"], "label-pin");
    pin.position.copy(at);
    rocket.group.add(pin);
  });

  // Pose, eased towards the targets a stop or beat sets (setTarget); the contract dial's needle and pin too
  const pose = { separate: 0, open: 0, score: 0, rule: 100, ceiling: 100, select: 1, turn: 0 };
  const target = { ...pose };
  let rings = []; // the contract dial's rings on show

  return {
    group,
    // Which set shows, and which of the rocket set's parts (rocket, pad, moon)
    show(name, parts) {
      active = name;
      Object.entries(pieces).forEach(([k, p]) => (p.visible = k === name));
      const t = tables.find((x) => x.a === name || x.b === name);
      if (t) target.turn = name === t.b ? 1 : 0;
      rocket.group.visible = parts.includes("rocket");
      pad.visible = parts.includes("pad");
      moon.visible = parts.includes("moon");
      const here = name === "rocket";
      hung.cartridges.visible = here && parts.includes("cartridges");
      hung.cartridge.visible = here && parts.includes("cartridge");
      hung.bay.visible = here && parts.includes("bay");
    },
    // Whether sets a and b share a turntable (a move between them is no cut)
    joined(a, b) {
      return a !== b && PAIRS.some((p) => p.sets.includes(a) && p.sets.includes(b));
    },
    // The portal between sets a and b, as { out: a's shot, in: b's shot }, or null
    portal(a, b) {
      const p = PORTALS.find((q) => a !== b && q.sets.includes(a) && q.sets.includes(b));
      return p ? { out: p.shots[p.sets.indexOf(a)], in: p.shots[p.sets.indexOf(b)] } : null;
    },
    setTarget(t) {
      if (t.rings) rings = t.rings;
      Object.keys(target).forEach((k) => Number.isFinite(t[k]) && (target[k] = t[k]));
    },
    // k: easing fraction for this frame; returns whether anything still moves
    update(k) {
      let moving = false;
      Object.keys(pose).forEach((key) => {
        const d = target[key] - pose[key];
        if (Math.abs(d) < 0.001 * (["score", "rule", "ceiling"].includes(key) ? 100 : 1)) pose[key] = target[key];
        else {
          pose[key] += d * k;
          moving = true;
        }
      });
      poseRocket(rocket, pose);
      pieces.contract.userData.set(pose, rings);
      hung.bay.userData.set(pose.select);
      // A turning table shows both its rooms; at rest, only the one on show
      tables.forEach(({ table, a, b }) => {
        table.rotation.y = Math.PI * pose.turn;
        const turning = pose.turn > 0 && pose.turn < 1;
        if (active === a || active === b) {
          pieces[a].visible = active === a || turning;
          pieces[b].visible = active === b || turning;
        }
      });
      return moving;
    },
  };
}

function addLeaders(pieces, engineRoot) {
  const leads = EDITION?.leads || {};
  Object.entries(POINTS).forEach(([set, points]) => {
    const root = pieces[set] || engineRoot;
    Object.entries(points).forEach(([key, [parent, at, groups]]) => {
      if (!leads[key]) return;
      const [name, note = ""] = [].concat(leads[key]);
      const obj = leader(name, [key, ...groups], "label-set", note, note ? "notes" : "");
      obj.userData.key = key;
      obj.userData.reach = 1.4;
      obj.position.copy(at);
      (parent ? root.getObjectByName(parent) || engineRoot.getObjectByName(parent) || root : root).add(obj);
    });
  });
}
