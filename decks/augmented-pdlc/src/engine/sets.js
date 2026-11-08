// The engine's sets: places beyond the engine that a client edition can visit, one at a time. The rocket wraps
// the engine (its middle stage holds it at its base) and stands on a pad under the moon; the cockpit, the
// classroom, mission control and the contract dial are rooms of their own, built around the origin and shown
// alone. A stop picks its set with data-set; the mechanism (cuts, portals, turntables, poses, leaders) is the
// framework's (framework/scene/sets.js); portals and turntables are in deck.config.mjs.
// Leader names on the sets come from the edition (LEADS, its leads: { key: [name, note] }); no name, no leader.
import * as THREE from "three";
import { ZONES } from "../lists.js";
import { polar, WHEEL, DROP, RAD, phaseAngle } from "../geometry.js";
import { label } from "../../../../framework/scene/labels.js";
import { defineSet } from "../../../../framework/scene/scene.js";
import { bake } from "../../../../framework/scene/kit.js";
import { ROCKET, buildRocket, poseRocket, buildPad, buildMoon } from "./rocket.js";
import { buildAutonomyDial } from "./instruments.js";
import { buildCockpit } from "./rooms/cockpit.js";
import { buildClassroom } from "./rooms/classroom.js";
import { buildMissionControl } from "./rooms/mission.js";
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
    "bay:bench": ["model-bay", v(0, 0.3, 0.9), ["bay"]],
  },
  contract: {
    // One per zone, at its middle (the dial sweeps 240°, centred on twelve o'clock)
    ...Object.fromEntries(ZONES.map((z) => [z.id, [null, polar(3.1, -120 + 1.2 * (z.from + z.to), 0.4), ["zones"]]])),
    // These two ride on their parts, which turn to the value a beat sets
    ceiling: ["ceiling-block", polar(3.4, 0, 0.9), ["ceiling"]],
    needle: ["needle", polar(2.6, 0, 0.4), ["needle"]],
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
  // Thirteen cartridges of 37 meshes each: baked, they draw in a few calls (one per look and tags)
  wheel.add(bake(cartridges));

  const cartridge = bake(buildCartridge(["cartridge"]));
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

// The sets, in build order (only those a page visits are built)
export const SETS = [
  defineSet({
    name: "rocket",
    pose: { separate: { default: 0 }, open: { default: 0 } },
    points: POINTS.rocket,
    build() {
      const rocket = buildRocket();
      const pad = buildPad();
      const moon = buildMoon(7);
      moon.position.set(-40, 62, -95);
      const group = new THREE.Group();
      group.add(rocket.group, pad, moon);
      return {
        group,
        parts: { rocket: rocket.group, pad, moon },
        update: (pose) => poseRocket(rocket, pose),
        // Numbered pins: gold dots that stay on while their group shows ("pins"), next to the parts their
        // leaders point at; added once the leaders hang
        finish() {
          Object.entries(PINS).forEach(([key, at]) => {
            const pin = label(key.split(":")[1], [key, "pins"], "label-pin");
            pin.position.copy(at);
            rocket.group.add(pin);
          });
        },
      };
    },
  }),
  defineSet({ name: "cockpit", points: POINTS.cockpit, build: () => ({ group: buildCockpit() }) }),
  defineSet({ name: "classroom", points: POINTS.classroom, build: () => ({ group: buildClassroom() }) }),
  defineSet({ name: "mission", points: POINTS.mission, build: () => ({ group: buildMissionControl() }) }),
  defineSet({
    name: "contract",
    // The contract dial's needle and pins (0–100), and the rings on show
    pose: { score: { default: 0, scale: 100 }, rule: { default: 100, scale: 100 }, ceiling: { default: 100, scale: 100 }, rings: { list: true } },
    points: POINTS.contract,
    build() {
      const group = buildAutonomyDial({ score: 0, rule: 100, ceiling: 100 });
      return { group, update: (pose, lists) => group.userData.set(pose, lists.rings) };
    },
  }),
];

// Parts the rocket set hangs on the engine itself: capability cartridges, one pulled out, the model bay
export const ATTACH = {
  set: "rocket",
  points: POINTS.engine,
  pose: { select: { default: 1 } },
  build(engineRoot) {
    const hung = attach(engineRoot);
    return { parts: hung, update: (pose) => hung.bay.userData.set(pose.select) };
  },
};
