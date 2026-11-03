// Top surface: a five-lobe flywheel. Each phase is a lobe whose tail tucks under the next one; the joint
// between two lobes is the gate. Drop hangs outside the loop, hooked to Deepen by a latch (G5: retire).
import * as THREE from "three";
import { CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { LOOP, GATES, SHAPES } from "../data.js";
import { WHEEL, SECTOR, DROP, RAD, lobeShape, lobeEdge, extrude, polar, phaseAngle } from "../geometry.js";
import { mesh } from "../parts.js";
import { label, leader } from "../labels.js";

const IDEA_R = 2.85;
const NAME_R = 3.3;
const edge = (a, r) => lobeEdge(a, r, WHEEL.rIn, WHEEL.rOut, WHEEL.sweep);

// Engraved names: one CSS3D letter per glyph on a lobe's outer face, read left to right from outside
const ENGRAVE_PX = 40; // font size of a letter element
const ENGRAVE_H = 0.2; // world height of that font size
const ENGRAVE_GAP = 0.035; // world units between letters

// Letters of `text` on the face of radius r, centred on angle aMid; returns the item to re-place later
function engrave(text, r, aMid, y, parent) {
  const letters = [...text.toUpperCase()].map((ch) => {
    const el = document.createElement("div");
    el.className = "label label-engraved";
    el.textContent = ch;
    const obj = new CSS3DObject(el);
    obj.userData.group = "phases-engraved";
    obj.scale.setScalar(ENGRAVE_H / ENGRAVE_PX);
    parent.add(obj);
    return obj;
  });
  const item = { text: text.toUpperCase(), r, aMid, y, letters };
  placeEngraving(item);
  return item;
}

// Letter widths from the font (measured again once Nunito has loaded, see buildWheel's relayout)
let measure = null;
function placeEngraving({ text, r, aMid, y, letters }) {
  measure = measure || document.createElement("canvas").getContext("2d");
  measure.font = `800 ${ENGRAVE_PX}px Nunito, sans-serif`;
  const widths = [...text].map((ch) => (measure.measureText(ch).width * ENGRAVE_H) / ENGRAVE_PX + ENGRAVE_GAP);
  const total = widths.reduce((a, b) => a + b, 0) - ENGRAVE_GAP;
  // Seen from outside, reading left to right runs towards smaller angles
  let s = total / 2;
  letters.forEach((obj, k) => {
    const a = aMid + ((s - widths[k] / 2 + ENGRAVE_GAP / 2) / r) / RAD;
    obj.position.copy(polar(r, a, y));
    obj.rotation.y = Math.PI - a * RAD;
    s -= widths[k];
  });
}

export function buildWheel() {
  const group = new THREE.Group();
  group.name = "wheel";
  const engravings = [];
  // Letter spacing depends on the font: call again once the web font has loaded
  group.userData.relayout = () => engravings.forEach(placeEngraving);

  LOOP.forEach((phase, i) => {
    const from = phaseAngle(i) - SECTOR / 2;
    const lobe = mesh(extrude(lobeShape(WHEEL.rIn, WHEEL.rOut, from, from + SECTOR, WHEEL.sweep, WHEEL.gap), WHEEL.depth), "#ffffff", ["wheel", `phase:${phase.id}`]);
    group.add(lobe);
    // The name is written along the lobe, centred on the clear band between the Idea's track and the pins
    const name = label(phase.name, "phases", "label-phase");
    const at = edge(phaseAngle(i), NAME_R);
    name.position.copy(polar(NAME_R, at, 0.02));
    name.userData.arc = { r: NAME_R, a: at, y: 0.02 };
    group.add(name);
    engravings.push(engrave(phase.name, WHEEL.rOut + 0.004, phaseAngle(i), -WHEEL.depth / 2, group));
  });

  // Gates: the joint between two lobes, marked by a pivot pin on the Idea's track
  LOOP.forEach((phase, i) => {
    const gate = GATES[i];
    const a = edge(phaseAngle(i) + SECTOR / 2, IDEA_R);
    const pin = mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.14, 24), "#1e1e1e", ["wheel", "gates", `gate:${gate.id}`]);
    pin.position.copy(polar(IDEA_R, a, 0.07));
    group.add(pin);
    const tag = leader(`${gate.id} · ${gate.name}`, "gate-names", "label-gate-name", gate.checks, "gate-notes");
    tag.userData.key = gate.id;
    tag.position.copy(polar(IDEA_R, a, 0.14));
    group.add(tag);
  });

  // Drop: a lobe outside the loop, hooked to the Deepen → Discover joint by a latch (G5)
  const drop = new THREE.Group();
  drop.name = "drop";
  drop.add(mesh(extrude(lobeShape(DROP.rIn, DROP.rOut, DROP.from, DROP.to, 16, 0), WHEEL.depth * 0.8), "#ffffff", ["wheel", "phase:drop"]));
  const g5 = phaseAngle(4) + SECTOR / 2;
  const latch = mesh(extrude(lobeShape(WHEEL.rOut - 0.35, DROP.rIn + 0.35, g5 - 4, g5 + 4, 0, 0), 0.08, 0.015), "#1e1e1e", ["wheel", "gates", "gate:G5", "latch"]);
  latch.position.y = 0.1;
  drop.add(latch);
  [WHEEL.rOut - 0.2, DROP.rIn + 0.2].forEach((r) => {
    const rivet = mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.2, 20), "#ffffff", ["wheel", "gates", "gate:G5"]);
    rivet.position.copy(polar(r, g5, 0.08));
    drop.add(rivet);
  });
  const g6 = mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.14, 24), "#1e1e1e", ["wheel", "gates", "gate:G6"]);
  g6.position.copy(polar((DROP.rIn + DROP.rOut) / 2, DROP.to - 4, 0.07));
  drop.add(g6);
  // Drop's name sits inside its lobe, between the G5 latch and the G6 pin
  const dropR = (DROP.rIn + DROP.rOut) / 2;
  const dropAt = 335;
  const dropName = label("Drop", "phases", "label-phase");
  dropName.position.copy(polar(dropR, dropAt, 0.02));
  dropName.userData.arc = { r: dropR, a: dropAt, y: 0.02 };
  drop.add(dropName);
  engravings.push(engrave("Drop", DROP.rOut + 0.004, (DROP.from + DROP.to) / 2, -WHEEL.depth * 0.4, drop));
  const g6tag = leader(`${GATES[5].id} · ${GATES[5].name}`, "gate-names", "label-gate-name", GATES[5].checks, "gate-notes");
  g6tag.userData.key = GATES[5].id;
  g6tag.position.copy(g6.position).setY(0.14);
  drop.add(g6tag);
  group.add(drop);

  // The Idea's track, and a pin for each shape it takes along the loop
  const track = mesh(new THREE.TorusGeometry(IDEA_R, 0.022, 8, 200), "#ee2238", ["wheel", "idea"]);
  track.rotation.x = Math.PI / 2;
  group.add(track);
  SHAPES.forEach((shape) => {
    const name = leader(shape.label || shape.name, "shapes", "label-shape");
    const pin = mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.08, 12), "#1e1e1e", ["wheel", "shapes"]);
    if (shape.drop) {
      pin.position.copy(polar(DROP.rOut - 0.2, DROP.to - 20, 0.04));
      name.position.copy(pin.position).setY(0.08);
      drop.add(pin, name);
      return;
    }
    pin.position.copy(polar(WHEEL.rOut - 0.22, edge(shape.angle, WHEEL.rOut - 0.22), 0.04));
    name.position.copy(pin.position).setY(0.08);
    group.add(pin, name);
  });

  const idea = mesh(new THREE.SphereGeometry(0.16, 32, 16), "#ee2238", ["wheel", "idea"]);
  idea.name = "idea";
  idea.position.copy(ideaPosition(0));
  group.add(idea);

  return group;
}

// The Idea runs half sunk in the wheel, like its track
export function ideaPosition(angle) {
  return polar(IDEA_R, edge(angle, IDEA_R), 0);
}

