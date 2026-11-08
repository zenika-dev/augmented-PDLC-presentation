// The whole engine and its animated state. A stop sets target values; every frame eases towards them.
import * as THREE from "three";
import { BANDS, GATES, ROLES } from "../lists.js";
import { gateAngle, polar } from "../geometry.js";
import { buildWheel, ideaPosition } from "./wheel.js";
import { buildBands, layoutBands } from "./bands.js";
import { buildNexus, layoutNexus } from "./nexus.js";
import { applyFocus, focusTargets, energize, charge } from "../../../../framework/scene/parts.js";
import { showLabels, alignToArc, cullFaces, leader } from "../../../../framework/scene/labels.js";
import { ROLE } from "../../../../framework/render/lineart.js";

const FLASH_MS = 1200;

// Numeric state, eased between stops. presence.* brings a part into the engine (0 = absent).
export function defaultState() {
  const split = {};
  BANDS.forEach((b) => (split[b.id] = 0));
  return {
    explode: 0,
    telescope: 0,
    split,
    idea: 0,
    presence: { wheel: 1, nexus: 1, bands: 1 },
  };
}

// buildSets(root): builds the sets the page visits (the rocket and its rooms, src/engine/sets.js), or null
export function createEngine(scene, { buildSets = null } = {}) {
  const root = new THREE.Group();
  scene.add(root);

  const wheel = buildWheel();
  const stack = buildBands();
  const nexus = buildNexus();
  root.add(wheel, stack.group, nexus.group);
  const sets = buildSets ? buildSets(root) : null;
  if (sets) root.add(sets.group);
  const idea = wheel.getObjectByName("idea");
  roleLeaders(wheel, stack, nexus);

  // Gate parts by gate, for the flash when the Idea passes (G6 sits on Drop, off the Idea's track)
  const gateParts = GATES.slice(0, 5).map((g) => {
    const parts = [];
    wheel.traverse((o) => o.isMesh && (o.userData.tags || []).includes(`gate:${g.id}`) && parts.push(o));
    return parts;
  });
  const flashUntil = gateParts.map(() => 0);
  let lastIdea = null;

  // What the per-frame passes touch, collected once: shaded parts, names written along arcs, engraved letters
  const meshes = [];
  const arcs = [];
  const letters = [];
  root.traverse((o) => {
    if (o.isMesh && o.material.uniforms && o.material.uniforms.dim) meshes.push(o);
    else if (o.isCSS2DObject && o.userData.arc) arcs.push(o);
    else if (o.isCSS3DObject) letters.push(o);
  });
  let focusKey = null;
  let targets = null;

  let current = defaultState();

  function apply(state) {
    const { bottom, bandMid, layerY } = layoutBands(stack, state.explode, state.split);
    layoutNexus(nexus, bottom, state.telescope);
    idea.position.copy(ideaPosition(state.idea));

    // Parts enter from below (bands, nexus); absent parts are hidden
    const p = state.presence;
    wheel.visible = p.wheel > 0.001;
    stack.group.visible = p.bands > 0.001;
    stack.group.position.y = -8 * (1 - p.bands);
    nexus.group.visible = p.nexus > 0.001;
    nexus.group.position.y = -10 * (1 - p.nexus);
    return { bottom, bandMid, layerY };
  }

  apply(current);

  return {
    root,
    sets,
    get state() {
      return current;
    },
    // Returns the stack layout (band heights) for anchors and shots
    set(state) {
      current = state;
      return apply(state);
    },
    // Fades towards the focus; returns whether anything is still fading
    focus(tags, t, context) {
      const key = `${tags}|${context}`;
      if (key !== focusKey) {
        focusKey = key;
        targets = focusTargets(meshes, tags, context);
      }
      return applyFocus(meshes, targets, t);
    },
    // Names written along the lobes follow the arc on screen; engraved letters turned away are hidden
    align(camera) {
      alignToArc(arcs, camera);
      cullFaces(letters, camera);
    },
    // A gate turns red for a moment when the Idea passes through it (forward moves only)
    flashGates(angle, now) {
      if (lastIdea !== null && angle > lastIdea && angle - lastIdea < 180) {
        GATES.slice(0, 5).forEach((_, i) => {
          if ((((gateAngle(i) - lastIdea) % 360) + 360) % 360 < angle - lastIdea) flashUntil[i] = now + FLASH_MS;
        });
      }
      lastIdea = angle;
      gateParts.forEach((parts, i) => {
        const lit = now < flashUntil[i];
        parts.forEach((m) => {
          const u = m.material.uniforms;
          if (!m.userData.energized) u.role.value = lit ? ROLE.energy : m.userData.role;
        });
      });
    },
    // Text measured in the web font (engraved letters) is placed again once the font has loaded
    relayout() {
      wheel.userData.relayout();
    },
    // Idle: the wheel turns one way, the core the other
    spin(angle) {
      wheel.rotation.y = -angle;
      nexus.group.rotation.y = angle * 1.6;
    },
    // Role lens: parts with these tags are drawn in red, context flowing through them
    energize(tags) {
      energize(root, tags);
    },
    // Energy pulse: parts with these tags carry the red wave running out from the core
    charge(tags, lags) {
      charge(root, tags, lags);
    },
    labels(groups) {
      showLabels(root, groups);
    },
  };
}

// One leader per role, on the first part the role owns; its purpose hangs under the name (role lens)
function roleLeaders(wheel, stack, nexus) {
  ROLES.forEach((role) => {
    const tag = role.parts[0];
    const name = leader(role.name, `role:${role.id}`, "label-role", role.purpose, `role:${role.id}`);
    name.userData.reach = 1.6;
    const [kind, id] = tag.split(":");
    if (kind === "layer") {
      const part = stack.group.getObjectByName(tag);
      name.position.copy(part.userData.anchor || polar(1.62, 120, 0));
      part.add(name);
    } else if (kind === "register") {
      const reg = nexus.registers.find((r) => r.userData.register === id);
      name.position.copy(reg.position);
      name.userData.tube = reg.userData.tube;
      nexus.group.add(name);
      nexus.registers.push(name);
    } else if (tag === "gates") {
      name.position.copy(polar(2.85, gateAngle(2), 0.14));
      wheel.add(name);
    } else if (tag === "spine") {
      name.userData.track = stack.spine.name.userData.track;
      stack.spine.group.add(name);
    }
  });
}
