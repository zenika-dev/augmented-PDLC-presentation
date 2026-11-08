// Under the surface: five bands, each a family of engine parts (probes, gear train, manifold, gauges, chassis).
// Each layer is one named part. The L11 shaft runs through the bands and ends in the ignition key.
import * as THREE from "three";
import { BANDS, SPINE } from "../lists.js";
import { RING, STACK, SPINE_POS, polar } from "../geometry.js";
import { mesh } from "../../../../framework/scene/parts.js";
import { label, leader } from "../../../../framework/scene/labels.js";
import { buildLayer, buildKey } from "./layers.js";

export function buildBands() {
  const group = new THREE.Group();
  group.name = "bands";
  const bands = [];

  BANDS.forEach((band, b) => {
    const bandGroup = new THREE.Group();
    bandGroup.name = `band:${band.id}`;
    const rings = [];

    band.layers.forEach((layer, k) => {
      const part = buildLayer(layer, ["bands", `band:${band.id}`, `layer:${layer.id}`]);
      part.name = `layer:${layer.id}`;

      // The name points at the part's working element when it has one, else at its top face
      const name = leader(`${layer.id} ${layer.name}`, `layers:${band.id}`, "label-layer");
      name.position.copy(part.userData.anchor || polar(1.62, 120, 0));
      part.add(name);
      // The same name pointing at the part's right side, for the exploded overview: names in a right column,
      // grouped by band, the band's name heading its first layer
      const right = leader(`${layer.id} ${layer.name}`, "layers-right", "label-layer");
      right.position.copy(polar(1.7, 110, 0));
      right.userData.band = b;
      if (k === 0) {
        const kicker = document.createElement("span");
        kicker.className = "lead-kicker";
        kicker.textContent = band.name;
        right.userData.leader.querySelector(".lead-box").prepend(kicker);
      }
      part.add(right);

      bandGroup.add(part);
      rings.push({ id: layer.id, object: part, h: part.userData.h });
    });

    // Heading: the domain's name (the card on screen says what each one does)
    const name = label(band.name, "bands", "label-band");
    name.userData.band = band.id;
    bandGroup.add(name);

    group.add(bandGroup);
    bands.push({ id: band.id, object: bandGroup, rings, name });
  });

  // L11: one shaft through every band, badge-checked where it crosses L3, L4, L10, with the key at the bottom
  const spine = new THREE.Group();
  spine.name = "spine";
  const tags = ["spine", "layer:L11"];
  const rod = mesh(new THREE.CylinderGeometry(SPINE_POS.radius, SPINE_POS.radius, 1, 16), "#1e1e1e", tags);
  spine.add(rod);
  const collars = SPINE.checks.map((id) => {
    const collar = mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.22, 32), "#ffffff", tags);
    collar.userData.layer = id;
    spine.add(collar);
    return collar;
  });
  const key = buildKey(tags);
  spine.add(key);
  const spineName = leader(`${SPINE.id} ${SPINE.name}`, "spine", "label-spine");
  // The dot slides along the rod to the point at mid-screen height (framework/scene/leaders.js)
  spineName.userData.track = [new THREE.Vector3(), new THREE.Vector3()];
  spine.add(spineName);
  group.add(spine);

  return { group, bands, spine: { group: spine, rod, collars, key, name: spineName } };
}

// Lay the stack out for a given explode (0 assembled → 1 exploded) and per-band split (0 → 1)
export function layoutBands(stack, explode, split) {
  let y = STACK.top - STACK.wheelGap * explode;
  const gap = STACK.bandGap + (STACK.explodedGap - STACK.bandGap) * explode;
  const layerY = {};
  const bandMid = {};

  stack.bands.forEach((band) => {
    const s = split[band.id] || 0;
    const ringGap = RING.gap + (RING.splitGap - RING.gap) * s;
    const top = y;
    band.rings.forEach((ring, k) => {
      ring.object.position.y = y;
      layerY[ring.id] = y - ring.h / 2;
      y -= ring.h + (k < band.rings.length - 1 ? ringGap : 0);
    });
    bandMid[band.id] = (top + y) / 2;
    band.name.position.copy(polar(RING.rOut + 2.0, 270, bandMid[band.id]));
    band.name.center.set(1, 0.5);
    y -= gap;
  });

  const bottom = y + gap;
  const { rod, collars, key, name } = stack.spine;
  const spineTop = STACK.top - STACK.wheelGap * explode + 0.15;
  rod.scale.y = spineTop - bottom + 0.15;
  rod.position.copy(polar(SPINE_POS.r, SPINE_POS.angle, (spineTop + bottom - 0.15) / 2));
  collars.forEach((c) => c.position.copy(polar(SPINE_POS.r, SPINE_POS.angle, layerY[c.userData.layer])));
  key.position.copy(polar(SPINE_POS.r, SPINE_POS.angle, bottom - 0.15));
  name.position.copy(polar(SPINE_POS.r, SPINE_POS.angle, bottom - 0.5));
  name.userData.track[0].copy(polar(SPINE_POS.r, SPINE_POS.angle, spineTop));
  name.userData.track[1].copy(polar(SPINE_POS.r, SPINE_POS.angle, bottom - 0.15));

  return { bottom, layerY, bandMid };
}
