// The core: a column of nested tubes (Org ⊃ BU ⊃ Team). Each tube's cross-section is a four-lobe flywheel,
// one lobe per register. Intent exists only at Team level, so the outer tubes miss that lobe.
import * as THREE from "three";
import { REGISTERS, LEVELS } from "../lists.js";
import { NEXUS, lobeShape, extrude, polar } from "../geometry.js";
import { mesh } from "../../../../framework/scene/parts.js";
import { leader } from "../../../../framework/scene/labels.js";

// Telescope heights of each tube's top when extended (Org, BU, Team)
const RAISE = [0.25, 1.25, 2.25];

export function buildNexus() {
  const group = new THREE.Group();
  group.name = "nexus";

  const tubes = LEVELS.map((level, li) => {
    const tube = new THREE.Group();
    tube.name = `level:${level.id}`;
    const rOut = NEXUS.radii[li];
    const rIn = NEXUS.radii[li + 1] || NEXUS.core;

    REGISTERS.forEach((reg) => {
      if (reg.teamOnly && level.id !== "team") return;
      const geo = extrude(lobeShape(rIn + 0.04, rOut, reg.from, reg.from + 90, NEXUS.sweep, NEXUS.gap), 1, 0);
      tube.add(mesh(geo, level.color, ["nexus", `level:${level.id}`, `register:${reg.id}`]));
    });

    const name = leader(level.name, "levels", "label-level");
    name.position.copy(polar(rOut - 0.05, 235, 0));
    tube.add(name);

    group.add(tube);
    return { level: level.id, object: tube };
  });

  // Register names point at the top of the outermost tube that has the lobe (Intent: the Team tube)
  const registers = REGISTERS.map((reg) => {
    const li = reg.teamOnly ? LEVELS.length - 1 : 0;
    const name = leader(reg.name, ["registers", `register:${reg.id}`], "label-register");
    // Intent sits on the thin Team core: a longer elbow takes its name clear of the column
    if (reg.teamOnly) name.userData.reach = 2.2;
    name.position.copy(polar((NEXUS.radii[li] + (NEXUS.radii[li + 1] || NEXUS.core)) / 2, reg.from + 45, 0));
    name.userData.tube = li;
    name.userData.register = reg.id;
    group.add(name);
    return name;
  });

  return { group, tubes, registers };
}

// Column runs from its top down to the bottom of the stack; telescope lifts the inner tubes
export function layoutNexus(nexus, bottom, telescope) {
  nexus.tubes.forEach((tube, i) => {
    const top = 0.04 + RAISE[i] * telescope;
    tube.object.position.y = top;
    tube.object.scale.y = top - bottom;
  });
  nexus.registers.forEach((r) => (r.position.y = 0.04 + RAISE[r.userData.tube] * telescope));
}
