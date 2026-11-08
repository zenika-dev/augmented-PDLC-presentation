// Labels on the engine: HTML names pinned to world points (CSS2D), leader-line names (laid out by
// framework/scene/leaders.js), engraved letters (CSS3D), and the per-frame passes that keep them readable.
import * as THREE from "three";
import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";
import { polar } from "./math.js";

// The deck's names list (lists.names: [{ id, text }], patched by a language or an edition): a label or a leader
// built with an id shows its text, and a leader keeps the id as its key (data-lead-at pins it by that key)
let NAMES = {};
export function setNames(list = []) {
  NAMES = Object.fromEntries(list.map((n) => [n.id, n.text]));
}
const named = (text) => NAMES[text] ?? text;

// HTML label pinned to a world position; groups decide when it shows. The text sits in an inner span
// because CSS2DRenderer owns the outer element's transform (alignToArc rotates the span).
export function label(text, group, className = "") {
  const div = document.createElement("div");
  div.className = `label ${className}`.trim();
  const span = document.createElement("span");
  span.className = "label-text";
  span.textContent = named(text);
  div.appendChild(span);
  const obj = new CSS2DObject(div);
  obj.userData.group = group;
  obj.center.set(0.5, 0.5);
  return obj;
}

// Part name on a leader line, like the parts list of an exploded view. The object marks the point on
// the part; leaders.js draws the line and places the text clear of the engine and the card.
// An optional note hangs under the tail; it shows when one of the stop's label groups is `noteGroup`.
export function leader(text, group, className = "", note = "", noteGroup = "") {
  const el = document.createElement("div");
  el.className = `label lead ${className}`.trim();
  el.innerHTML =
    '<svg class="lead-line"><polyline points="0,0 0,0" pathLength="1"/><circle r="2.5"/></svg><span class="lead-box"><span class="lead-text"></span></span>';
  el.querySelector(".lead-text").textContent = named(text);
  if (note) {
    const n = document.createElement("span");
    n.className = "lead-note";
    n.textContent = note;
    el.querySelector(".lead-box").appendChild(n);
  }
  const obj = new THREE.Object3D();
  obj.userData.group = group;
  obj.userData.noteGroup = noteGroup;
  obj.userData.leader = el;
  if (text in NAMES) obj.userData.key = text;
  return obj;
}

// Leaders that come on take their turn (--lead-i), so a deck whose leaders draw on staggers them
export function showLabels(root, groups) {
  let turn = 0;
  root.traverse((obj) => {
    const el = obj.isCSS2DObject || obj.isCSS3DObject ? obj.element : obj.userData.leader;
    if (!el || !obj.userData.group) return;
    const own = [].concat(obj.userData.group);
    const on = own.some((g) => groups.includes(g));
    if (on && obj.userData.leader && !el.classList.contains("is-on")) el.style.setProperty("--lead-i", turn++);
    el.classList.toggle("is-on", on);
    if (obj.userData.noteGroup) el.classList.toggle("show-note", groups.includes(obj.userData.noteGroup));
  });
}

// Names stacked down one side of the engine share one right edge on screen, whatever the camera's tilt:
// the text moves inside its label, so the label itself stays where CSS2D put it.
// Two steps so a frame reads layout once: rightEdges() only reads, alignRight() only writes
export function rightEdges(els) {
  return els.filter((el) => el.style.display !== "none").map((el) => [el, el.getBoundingClientRect().right]);
}

// Returns how far each name's text moved since the last call, for boxes read before the move
const shifted = new WeakMap();
export function alignRight(edges) {
  const moved = new Map();
  if (!edges.length) return moved;
  const edge = Math.min(...edges.map(([, right]) => right));
  edges.forEach(([el, right]) => {
    const x = Number((edge - right).toFixed(1));
    moved.set(el, x - (shifted.get(el) || 0));
    shifted.set(el, x);
    el.firstChild.style.transform = `translateX(${x.toFixed(1)}px)`;
  });
  return moved;
}

// Labels marked with userData.arc = { r, a, y } are written along that arc, like names on a map:
// rotated to the arc's screen tangent and kept upright
const ARC_A = new THREE.Vector3();
const ARC_B = new THREE.Vector3();
export function alignToArc(labels, camera) {
  labels.forEach((obj) => {
    const arc = obj.userData.arc;
    if (!obj.element.classList.contains("is-on")) return;
    const parent = obj.parent;
    ARC_A.copy(polar(arc.r, arc.a - 2, arc.y));
    ARC_B.copy(polar(arc.r, arc.a + 2, arc.y));
    parent.localToWorld(ARC_A).project(camera);
    parent.localToWorld(ARC_B).project(camera);
    let deg = (Math.atan2(-(ARC_B.y - ARC_A.y), (ARC_B.x - ARC_A.x) * camera.aspect) * 180) / Math.PI;
    if (deg > 90) deg -= 180;
    if (deg <= -90) deg += 180;
    obj.element.firstChild.style.transform = `rotate(${deg.toFixed(1)}deg)`;
  });
}


// Engraved letters (CSS3D) show only while their face turns towards the camera
const FACE_N = new THREE.Vector3();
const FACE_P = new THREE.Vector3();
const FACE_Q = new THREE.Quaternion();
export function cullFaces(letters, camera) {
  letters.forEach((obj) => {
    if (!obj.element.classList.contains("is-on")) return;
    obj.getWorldPosition(FACE_P);
    FACE_N.set(0, 0, 1).applyQuaternion(obj.getWorldQuaternion(FACE_Q));
    const facing = FACE_N.dot(FACE_P.sub(camera.position).negate()) > 0;
    obj.element.style.visibility = facing ? "" : "hidden";
  });
}
