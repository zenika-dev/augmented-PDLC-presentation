// Stops and beats, read from index.html. Each <section class="stop"> is a camera shot plus the engine's
// state; each <div class="beat" data-…> inside it is a substep overriding some of the stop's attributes.
// The header comment in index.html lists every attribute.
import * as THREE from "three";
import { LOOP, SHAPES, BANDS } from "./data.js";
import { WHEEL, RING, SPINE_POS, polar, phaseAngle, gateAngle, dropCentre } from "./geometry.js";
import { defaultState } from "./engine/index.js";

// "a, b,c" → ["a", "b", "c"]
export function list(value) {
  return (value || "").split(",").map((s) => s.trim()).filter(Boolean);
}

export function readStops(container) {
  return [...container.querySelectorAll(":scope > .stop")].map((el, index) => ({
    el,
    index,
    data: el.dataset,
    beats: [...el.querySelectorAll(":scope > .beat")].map((b) => b.dataset),
    card: el.querySelector(".card"),
    anchor: new THREE.Vector3(),
    state: targetState(el.dataset),
  }));
}

// What a beat shows: the stop's attributes, overridden by the beat's own
export function view(stop, beat) {
  return Object.assign({}, stop.data, stop.beats[beat] || {});
}

function targetState(data) {
  const s = defaultState();
  s.explode = Number(data.explode || 0);
  s.telescope = Number(data.telescope || 0);
  if (data.split) s.split[data.split] = 1;
  const parts = data.parts ? list(data.parts) : Object.keys(s.presence);
  Object.keys(s.presence).forEach((k) => (s.presence[k] = parts.includes(k) ? 1 : 0));
  return s;
}

// Where the Idea goes on a stop; null keeps it where it is ("run" keeps it moving)
export function ideaAngle(value) {
  if (!value || value === "run") return null;
  // The Idea stays on the loop; for Drop it waits at the G5 latch, where the side gear engages
  if (value === "drop") return gateAngle(4);
  const phase = LOOP.findIndex((p) => p.id === value);
  if (phase >= 0) return phaseAngle(phase);
  const shape = SHAPES.find((s) => s.name === value);
  if (shape) return shape.drop ? gateAngle(4) : shape.angle;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

// The world point a card hangs from (data-anchor), once the bands have landed (layout)
export function anchorPoint(name, layout) {
  const [kind, id] = (name || "").split(":");
  if (kind === "phase" && id === "drop") return dropCentre(0.4);
  if (kind === "phase") return polar(WHEEL.rOut + 0.9, phaseAngle(LOOP.findIndex((p) => p.id === id)), 0.4);
  if (kind === "band") return polar(RING.rOut + 1.2, 90, layout.bandMid[id]);
  if (kind === "spine") return polar(SPINE_POS.r + 0.8, SPINE_POS.angle, -2.2);
  if (kind === "rim") return polar(WHEEL.rOut + 1.2, Number(id), 0.6);
  if (kind === "nexus") return new THREE.Vector3(0, 1.4, 0);
  return new THREE.Vector3(0, 0, 0);
}

// data-pulse-lag="layer:L4=0.35,layer:L6=0.7"
export function lags(value) {
  const out = {};
  list(value).forEach((pair) => {
    const [tag, v] = pair.split("=");
    out[tag] = Number(v) || 0;
  });
  return out;
}

// data-lead-at="G4=0.44/0.42": the leader name's elbow at that fraction of the screen width / height
export function pins(value) {
  const out = {};
  list(value).forEach((pair) => {
    const [key, v] = pair.split("=");
    out[key] = v.split("/").map(Number);
  });
  return out;
}

// data-pulse-band="<band id>": the wave only lights that band's height, Nexus slice included; [lo, hi] in world y
export function pulseBand(id, layout) {
  const band = BANDS.find((b) => b.id === id);
  if (!band || !layout) return [-1e3, 1e3];
  const ys = band.layers.map((l) => layout.layerY[l.id]);
  return [Math.min(...ys) - 0.3, Math.max(...ys) + 0.45];
}
