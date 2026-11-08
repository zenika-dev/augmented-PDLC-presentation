// Plug-in parts for the sets (design boards first): a capability as a cartridge pulled out of a lobe, a bay of
// model cartridges beside the gateway, a test bench and a selector gearbox. Same line art as the rest: white
// parts, ink details, gold where the energy runs. Sizes in engine units (the wheel is 8 across).
import * as THREE from "three";
import { RAD } from "../geometry.js";
import { mesh } from "../../../../framework/scene/parts.js";
import { WHITE, INK, at, box, cyl, plate, bolts, pipe } from "../../../../framework/scene/kit.js";
import { dial } from "./instruments.js";

const v = (x, y, z) => new THREE.Vector3(x, y, z);

// A capability: a cartridge that slides into its phase lobe. Its parts carry what the capability card describes:
// tool heads at the front (tooling), a plug and cable at the back (platform), a clamp around the body
// (guardrails), a small dial on top (autonomy score), a label plate on the side (description).
// Lies along +x, centred on the origin, 3 long.
export function buildCartridge(tags = [], { score = 0.86 } = {}) {
  const g = new THREE.Group();
  g.name = "cartridge";
  const t = [...tags, "cartridge"];
  const body = box(3, 0.7, 1.1, [...t, "cart:body"]);
  g.add(body);
  const rail = box(3.1, 0.08, 0.3, t);
  at(rail, 0, -0.39, 0);
  g.add(rail);
  // Side plate (description) with three ruled lines
  const sidePlate = plate(1.5, 0.46, 0.04, 0.05, [...t, "cart:label"]);
  at(sidePlate, -0.35, 0, 0.55);
  g.add(sidePlate);
  for (let i = 0; i < 3; i++) g.add(at(box(1.1 - i * 0.25, 0.03, 0.02, t, INK), -0.48 - i * 0.12, 0.12 - i * 0.12, 0.6));
  // Tool heads at the front
  const tools = new THREE.Group();
  tools.name = "cart:tools";
  [-0.28, 0.28].forEach((z, i) => {
    const neck = cyl(0.12, 0.3, [...t, "cart:tools"], WHITE, 16);
    neck.rotation.z = Math.PI / 2;
    at(neck, 1.65, 0.05, z);
    const head = mesh(new THREE.ConeGeometry(0.16, 0.36, 16), WHITE, [...t, "cart:tools"]);
    head.rotation.z = -Math.PI / 2;
    at(head, 1.98, 0.05, z);
    tools.add(neck, head);
    if (i === 0) tools.add(at(box(0.08, 0.3, 0.08, [...t, "cart:tools"]), 1.75, 0.3, z));
  });
  g.add(tools);
  // Plug and cable at the back: the way to the platform
  const plug = new THREE.Group();
  plug.name = "cart:plug";
  const socket = cyl(0.26, 0.3, [...t, "cart:plug"], WHITE, 20);
  socket.rotation.z = Math.PI / 2;
  at(socket, -1.65, 0, 0);
  plug.add(socket);
  [-0.1, 0.1].forEach((y) => {
    const pin = cyl(0.04, 0.22, [...t, "cart:plug"], INK, 8);
    pin.rotation.z = Math.PI / 2;
    plug.add(at(pin, -1.88, y, 0));
  });
  plug.add(pipe([v(-1.82, 0, 0), v(-2.4, -0.1, 0.1), v(-2.9, -0.6, 0.5), v(-3.5, -0.8, 0.9)], 0.07, [...t, "cart:plug", "energy"]));
  g.add(plug);
  // Clamp: two bolted bands around the body
  const clamp = new THREE.Group();
  clamp.name = "cart:clamp";
  [0.55, 0.95].forEach((x) => {
    const band = box(0.12, 0.84, 1.24, [...t, "cart:clamp", "energy"]);
    clamp.add(at(band, x, 0, 0));
    const b = bolts(1, 0, [...t, "cart:clamp"], 0.06);
    b.position.set(x, 0.3, 0.62);
    clamp.add(b);
  });
  g.add(clamp);
  // Autonomy dial on top, face up
  const d = dial(0.32, [...t, "cart:dial"], { value: score, ticks: 5, minor: 1, range: [0.8, 1] });
  d.name = "cart:dial";
  d.rotation.x = -Math.PI / 2;
  at(d, -0.9, 0.36, 0);
  g.add(d);
  // Handle to pull it out
  g.add(pipe([v(-1.2, 0.36, -0.3), v(-1.2, 0.7, -0.3), v(-0.7, 0.7, -0.3), v(-0.7, 0.36, -0.3)], 0.05, t));
  return g;
}

// A bay of model cartridges in a frame with slots, a selector arm on a rail above them and a lamp on top
// (the performance indicator). selected: the slot the arm stands over. Stands on y = 0, 5 wide.
export function buildModelBay(tags = [], { slots = 4, selected = 1 } = {}) {
  const g = new THREE.Group();
  g.name = "model-bay";
  const t = [...tags, "model-bay"];
  const w = slots * 1.1 + 0.4;
  g.add(at(box(w, 0.2, 1.6, t), 0, 0.1, 0));
  g.add(at(box(w, 0.16, 1.6, t), 0, 2.6, 0));
  [-w / 2 + 0.1, w / 2 - 0.1].forEach((x) => g.add(at(box(0.2, 2.6, 1.6, t), x, 1.3, 0)));
  for (let i = 0; i < slots; i++) {
    const x = -w / 2 + 0.75 + i * 1.1;
    const m = new THREE.Group();
    m.name = `model:${i + 1}`;
    const mt = [...t, `model:${i + 1}`];
    m.add(at(box(0.8, 1.7, 1.3, mt), 0, 0, 0));
    m.add(at(plate(0.5, 0.3, 0.04, 0.05, mt), 0, 0.5, 0.66));
    m.add(at(box(0.5, 0.06, 0.04, mt, INK), 0, -0.1, 0.67));
    m.add(at(box(0.3, 0.06, 0.04, mt, INK), -0.1, -0.25, 0.67));
    const grip = cyl(0.08, 0.5, mt, WHITE, 10);
    grip.rotation.x = Math.PI / 2;
    m.add(at(grip, 0, -0.55, 0.85));
    at(m, x, 1.15, 0);
    g.add(m);
    if (i < slots - 1) g.add(at(box(0.06, 2.3, 1.5, t), x + 0.55, 1.35, 0));
  }
  // Selector: a carriage on a rail above the slots, its arm down to the chosen one
  const rail = cyl(0.06, w - 0.4, t, WHITE, 8);
  rail.rotation.z = Math.PI / 2;
  g.add(at(rail, 0, 3.0, 0.4));
  const arm = new THREE.Group();
  arm.name = "selector";
  const slotX = (i) => -w / 2 + 0.75 + i * 1.1;
  const at_ = [...t, "selector", "energy"];
  arm.add(at(box(0.5, 0.36, 0.5, at_), 0, 3.0, 0.4));
  arm.add(at(cyl(0.05, 0.7, at_, WHITE, 8), 0, 2.5, 0.4));
  arm.add(at(box(0.5, 0.08, 0.2, at_), 0, 2.15, 0.4));
  g.add(arm);
  // Lamp: the performance indicator
  const lamp = new THREE.Group();
  lamp.name = "indicator";
  lamp.add(at(cyl(0.25, 0.25, [...t, "indicator"], WHITE, 16), w / 2 - 0.5, 2.8, 0));
  lamp.add(at(mesh(new THREE.SphereGeometry(0.2, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), WHITE, [...t, "indicator", "energy"]), w / 2 - 0.5, 2.92, 0));
  g.add(lamp);
  // Pose: 0 = the chosen cartridge lifted out by hand, the arm parked at the end of its rail;
  // 1 = the arm over the slot, the cartridge seated
  const chosen = g.getObjectByName(`model:${selected + 1}`);
  const seat = chosen.position.clone();
  g.userData.set = (k) => {
    arm.position.x = slotX(slots - 1) + 0.9 + (slotX(selected) - slotX(slots - 1) - 0.9) * k;
    chosen.position.set(seat.x, seat.y + 1.9 * (1 - k), seat.z + 0.9 * (1 - k));
  };
  g.userData.set(1);
  return g;
}
