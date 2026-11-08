// Stops and beats, read from the page. Each <section class="stop"> is a camera shot plus the scene's state;
// each <div class="beat" data-…> inside it is a substep overriding some of the stop's attributes.
// framework/docs/contract.md lists the attributes the core reads; the scene adds its own.
import * as THREE from "three";

// "a, b,c" → ["a", "b", "c"]
export function list(value) {
  return (value || "").split(",").map((s) => s.trim()).filter(Boolean);
}

// stopState(data): the scene's state for a stop's attributes (scene.stopState)
export function readStops(container, stopState) {
  return [...container.querySelectorAll(":scope > .stop")].map((el, index) => ({
    el,
    index,
    data: el.dataset,
    beats: [...el.querySelectorAll(":scope > .beat")].map((b) => b.dataset),
    card: el.querySelector(".card"),
    anchor: new THREE.Vector3(),
    state: stopState(el.dataset),
  }));
}

// What a beat shows: the stop's attributes, overridden by the beat's own
export function view(stop, beat) {
  return Object.assign({}, stop.data, stop.beats[beat] || {});
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
    if (v) out[key] = v.split("/").map(Number);
  });
  return out;
}
