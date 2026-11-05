// Entry point: the renderers, the engine, and the deck controller (stops and beats, the frame loop).
// A stop may hold beats (<div class="beat" data-…>): substeps that override its focus, labels and pulse
// without moving the camera. Next and previous walk the beats before leaving the stop.
//   stops.js  reads stops and beats from index.html     hud.js    breadcrumb, bar, questions, counter
//   cards.js  places the annotation cards               input.js  keys, touch, the #n.b hash
import * as THREE from "three";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
import { CSS3DRenderer } from "three/addons/renderers/CSS3DRenderer.js";
import { BANDS } from "./data.js";
import { RAD } from "./geometry.js";
import { createEngine, blendState } from "./engine/index.js";
import { resolveShot, blendShots, ease } from "./shots.js";
import { createLineArt, setPulse, setPulseBand } from "./render/lineart.js";
import { createLeaders } from "./leaders.js";
import { alignRight } from "./labels.js";
import { readStops, view, list, ideaAngle, anchorPoint, lags, pins, pulseBand } from "./stops.js";
import { createCards } from "./cards.js";
import { createHud } from "./hud.js";
import { bindInput, readHash, hashOf } from "./input.js";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// Same test as css/tokens.css; read when used, so turning the phone is covered
const phone = window.matchMedia("(pointer: coarse) and (max-height: 600px), (pointer: coarse) and (max-width: 600px)");
const DURATION = reduceMotion ? 0 : 1600;

// ---------- renderers ----------

const stage = document.getElementById("stage");
// No MSAA: the canvas only ever receives the full-screen composite
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
} catch (error) {
  // No WebGL (a blocked GPU, some previewers): the reading version, as with scripts off
  document.documentElement.className = "no-js";
  throw error;
}
stage.appendChild(renderer.domElement);

// Engraved names live in 3D on the parts' faces. The label layer sits outside the stage, above the HUD,
// so leader names can cross the HUD's veil (the stage is a stacking context of its own)
const engraving = new CSS3DRenderer();
engraving.domElement.className = "engraving";
stage.appendChild(engraving.domElement);

const labels = new CSS2DRenderer();
labels.domElement.className = "labels";
document.body.appendChild(labels.domElement);

const scene = new THREE.Scene();
// World matrices are updated once per frame in frame(), not by each of the three renderers
scene.matrixWorldAutoUpdate = false;
const lineart = createLineArt(renderer);
const FOV = 22; // vertical, at 16:9 and wider
// A deck whose stops visit sets (data-set) needs the rocket and its rooms, and a deeper view to frame them
const withSets = !!document.querySelector("#stops [data-set]");
const camera = new THREE.PerspectiveCamera(FOV, 1, withSets ? 0.5 : 0.1, withSets ? 2000 : 300);

const engine = createEngine(scene, { sets: withSets });
const leaders = createLeaders(engine.root, labels.domElement);

// ---------- deck ----------

const stops = readStops(document.getElementById("stops"));
const cards = createCards(document.getElementById("cards"), () => wake(100));
stops.forEach(cards.add);
const hud = createHud(stops, reduceMotion);

let current = null;
let beat = 0;
let shown = {}; // the current beat's attributes (view)
let focusTags = null;
let contextTags = [];
let plainLabels = []; // labels on screen that leader names keep clear of
let bandNames = []; // domain names on screen, kept in one column
let labelsChanged = false; // CSS2D adds a label to the page on its first render: list them after it
let layout = null; // where the bands land on the current stop
let from = null;
let to = null;
let started = 0;
let shot = { pos: new THREE.Vector3(0, 30, 0.01), target: new THREE.Vector3() };
let fromShot = shot;
let toShot = shot;
let shotName = null;
let shotStarted = 0; // a beat may move the camera without replaying the stop's move
let shotDuration = DURATION;
// A portal between two sets (sets.js PORTALS): the camera first flies to the old set's portal shot, then the
// sets swap behind the cut's fade and it flies on from the new set's portal shot. Each leg takes LEG ms.
const LEG = 1100;
let portal = null; // the move under way: { index, toBeat, via: { out, in } }

function landPortal() {
  const { index, toBeat, via } = portal;
  portal = null;
  go(index, true, toBeat, true);
  fromShot = resolveShot(via.in, layout);
  shotStarted = performance.now();
  shotDuration = LEG;
}

function go(index, instant = false, toBeat = 0, through = false) {
  // A key during a portal's first leg lands the move at once
  if (portal) landPortal();
  const stop = stops[Math.max(0, Math.min(stops.length - 1, index))];
  const b = Math.max(0, Math.min(stop.beats.length - 1, toBeat < 0 ? stop.beats.length - 1 : toBeat));
  if (stop === current) {
    if (b !== beat) showBeat(b);
    return;
  }
  const forward = !current || stop.index > current.index;
  const left = current;
  current = stop;
  // Another set is a cut: no camera flight between places that do not share a space, unless a portal joins them
  const cut = !!left && setOf(left) !== setOf(stop) && !engine.sets?.joined(setOf(left), setOf(stop));
  const via = cut && !instant && !reduceMotion && engine.sets ? engine.sets.portal(setOf(left), setOf(stop)) : null;
  if (via) {
    current = left;
    portal = { index: stop.index, toBeat: b, via };
    fromShot = shot;
    toShot = resolveShot(via.out, layout);
    shotName = via.out;
    shotStarted = performance.now();
    shotDuration = LEG;
    // The old stop's card and names step aside while the camera dives
    cards.show({});
    engine.labels([]);
    labelsChanged = true;
    return;
  }

  // The running Idea's lap is folded into its start angle, so leaving a stop starts from where it is
  from = engine.state;
  if (!Number.isFinite(from.idea)) from.idea = 0;
  run = 0;
  to = { ...stop.state, split: { ...stop.state.split }, presence: { ...stop.state.presence } };

  // The Idea only moves clockwise going forward, and back the same way
  const target = ideaAngle(stop.data.idea);
  let ideaTo = target === null ? from.idea : target;
  if (forward && ideaTo < from.idea - 0.01) ideaTo += 360 * Math.ceil((from.idea - ideaTo) / 360);
  if (!forward && ideaTo > from.idea + 0.01) ideaTo -= 360 * Math.ceil((ideaTo - from.idea) / 360);
  to.idea = ideaTo;

  // Shot and card anchor depend on where the bands land at the end of the move
  layout = engine.set(to);
  engine.set(from);
  shotName = null;

  cards.show(stop);
  stop.anchor.copy(anchorPoint(stop.data.anchor, layout));
  started = instant || cut || DURATION === 0 ? -Infinity : performance.now();
  if (engine.sets) engine.sets.show(setOf(stop), list(stop.data.parts));
  showBeat(b, true);
  if (engine.sets && (instant || cut)) engine.sets.update(1);
  if (cut) {
    shot = fromShot = toShot;
    shotStarted = -Infinity;
    if (!reduceMotion || through) {
      document.body.classList.add("is-cut");
      requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove("is-cut")));
    }
  }
  if (left && !instant) hud.dock(left.card);
  pulseStart = performance.now() + DURATION;
}

function setOf(stop) {
  return stop.data.set || "rocket";
}

const numberOr = (value, fallback) => (value === undefined || value === "" ? fallback : Number(value));

// Focus, labels, role lens, pulse and HUD of the current beat. Only the stop's own entry may snap the
// camera (a cut or a jump); a beat always flies
function showBeat(b, entering = false) {
  beat = b;
  const stop = current;
  shown = view(stop, b);
  // A beat may raise or lower the Nexus tubes (data-telescope): the engine blends there from where it stands,
  // the Idea carrying on from its current angle
  const tel = numberOr(shown.telescope, stop.state.telescope);
  if (to && to.telescope !== tel) {
    if (!entering) {
      from = engine.state;
      if (!Number.isFinite(from.idea)) from.idea = 0;
      run = 0;
      started = DURATION === 0 ? -Infinity : performance.now();
    }
    to = { ...to, split: { ...to.split }, presence: { ...to.presence }, telescope: tel, idea: entering ? to.idea : from.idea };
    layout = engine.set(to);
    engine.set(from);
  }
  // The camera heads for the beat's shot (the stop's unless the beat has its own)
  const name = shown.shot || "hero";
  if (name !== shotName) {
    shotName = name;
    fromShot = shot;
    toShot = resolveShot(name, layout);
    shotStarted = entering && started === -Infinity ? -Infinity : performance.now();
    shotDuration = DURATION;
  }
  focusTags = shown.focus ? list(shown.focus) : null;
  contextTags = list(shown.context);
  engine.labels(list(shown.labels));
  labelsChanged = true;
  engine.energize(list(shown.energize));
  engine.charge(list(shown.pulse), lags(shown.pulseLag));
  setPulseBand(...pulseBand(shown.pulseBand, layout));
  if (engine.sets)
    engine.sets.setTarget({
      separate: numberOr(shown.separate, 0),
      open: numberOr(shown.open, 0),
      score: numberOr(shown.score, 0),
      rule: numberOr(shown.rule, 100),
      ceiling: numberOr(shown.ceiling, 100),
      rings: list(shown.rings),
      select: numberOr(shown.select, 1),
    });
  hud.update(stop, b);
  if (stop.card) {
    stop.card.querySelectorAll("[data-beat]").forEach((el) => el.classList.toggle("is-now", Number(el.dataset.beat) === b));
    revealFrom(stop, b);
  }
  history.replaceState(null, "", hashOf(stop.index, b));
  wake(1000);
}

// Card items marked data-from show from their beat on. On phones they take the place of the text above
// them (css/engine.css): the text fades out, the two swap, the new content fades in
const SWAP_MS = 200;
// A quicker next beat or stop cancels the pending swap rather than racing it
let swapTimer = 0;
let swapping = null;
function revealFrom(stop, b) {
  clearTimeout(swapTimer);
  swapping?.classList.remove("is-swapping");
  swapping = null;
  const items = [...stop.card.querySelectorAll("[data-from]")];
  const show = (k) => items.forEach((el) => el.classList.toggle("is-shown", k >= Number(el.dataset.from)));
  const changes = items.some((el) => el.classList.contains("is-shown") !== b >= Number(el.dataset.from));
  if (!changes || !phone.matches || reduceMotion) {
    show(b);
    return;
  }
  stop.card.classList.add("is-swapping");
  swapping = stop.card;
  swapTimer = setTimeout(() => {
    swapping = null;
    if (current === stop) show(beat);
    // Two frames: the swapped content first lays out transparent, then fades in
    requestAnimationFrame(() => requestAnimationFrame(() => stop.card.classList.remove("is-swapping")));
  }, SWAP_MS);
}

// Beat by beat, then stop by stop; nothing past either end of the deck
function next() {
  if (!current) return;
  if (beat < current.beats.length - 1) go(current.index, false, beat + 1);
  else if (current.index < stops.length - 1) go(current.index + 1);
}

function previous() {
  if (!current) return;
  if (beat > 0) go(current.index, false, beat - 1);
  else if (current.index > 0) go(current.index - 1, false, -1);
}

// ---------- motion ----------

// Idle: on stops marked data-idle the wheel and core turn slowly in opposite directions;
// elsewhere they settle back to rest by the shortest way
let spin = 0;
let spinning = false;
let last = 0;
const SPIN_SPEED = reduceMotion ? 0 : 0.06; // radians per second

// Run: on stops with data-idea="run" the Idea travels its track, gates flashing as it passes
let run = 0;
const RUN_SPEED = reduceMotion ? 0 : 24; // degrees per second

// Seconds since the previous frame, capped so a hidden tab does not jump on return
let dt = 0;

// Easing towards a target at the same pace whatever the display's refresh rate
// (rate: fraction per second; 5 ≈ the 8 % per frame these fades had at 60 Hz)
function approach(rate) {
  return 1 - Math.exp(-rate * dt);
}

function idle(now) {
  dt = Math.min(0.1, (now - last) / 1000 || 0);
  last = now;
  if (current && current.data.idle !== undefined) spin += SPIN_SPEED * dt;
  else {
    spin = Math.atan2(Math.sin(spin), Math.cos(spin));
    spin = Math.abs(spin) < 1e-4 ? 0 : spin + (0 - spin) * Math.min(1, dt * 3);
  }
  spinning = SPIN_SPEED > 0 && (spin !== 0 || (current && current.data.idle !== undefined));
  engine.spin(spin);
  if (current && current.data.idea === "run") run += RUN_SPEED * dt;
}

// Pulse: on stops with data-pulse a red wave runs out from the core every few seconds, once the camera has landed
const PULSE_SPEED = 2.6; // world units per second
const PULSE_EVERY = 3.2; // seconds
let pulseStart = 0;
let pulseHold = null; // debug: freeze the wave at a radius (deck.holdPulse)

function pulse(now) {
  const t = (now - pulseStart) / 1000;
  setPulse(pulseHold !== null ? pulseHold : current && shown.pulse && !reduceMotion && t > 0 ? (t % PULSE_EVERY) * PULSE_SPEED : -10);
}

// Keep part names clear of the card, the HUD (top-left block, footer at the bottom) and the plain labels
function obstacles() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const out = [{ x: 0, y: h * 0.93, w, h: h * 0.07 }];
  const r = hud.rect(12);
  if (r) out.push(r);
  const c = cards.box;
  if (c) out.push({ x: c.x - 12, y: c.y - 12, w: c.w + 24, h: c.h + 24 });
  plainLabels.forEach((el) => {
    if (el.style.display === "none") return;
    // The text, not its box: names on an arc are rotated, domain names shifted into their column
    const q = (el.firstElementChild || el).getBoundingClientRect();
    out.push({ x: q.left - 4, y: q.top - 2, w: q.width + 8, h: q.height + 4 });
  });
  return out;
}

// ---------- frame loop ----------

const SIDES = { left: -1, right: 1 };

// The loop only draws while something moves: a camera move, the idle spin, the running Idea, the pulse,
// a fade or a gliding name, or a short wake after a beat, a resize or a card changing size
let awakeUntil = 0;
let settling = true;
let drawn = 0; // frames drawn, for headless checks of the idle loop
function wake(ms) {
  awakeUntil = Math.max(awakeUntil, performance.now() + ms);
}

// The engine's palette follows the page theme: paper, or blueprint on the closing stop (and on dark pages)
let theme = 0;
const themeTarget = () => (["blueprint", "dark"].includes(document.body.dataset.theme) ? 1 : 0);
function blendTheme() {
  const target = themeTarget();
  if (theme === target) return false;
  theme = reduceMotion || Math.abs(target - theme) < 0.002 ? target : theme + (target - theme) * approach(3);
  lineart.setTheme(theme);
  return true;
}

function frame(now) {
  requestAnimationFrame(frame);
  idle(now);
  // The frame's time can be a hair older than a key press's performance.now(): never below 0
  const raw = Math.max(0, Math.min(1, (now - started) / DURATION));
  if (portal && now - shotStarted >= shotDuration) landPortal();
  const camRaw = Math.max(0, Math.min(1, (now - shotStarted) / shotDuration));
  const live =
    theme !== themeTarget() ||
    raw < 1 ||
    camRaw < 1 ||
    settling ||
    now < awakeUntil ||
    spinning ||
    (!reduceMotion && (shown.pulse || (current && current.data.idea === "run")));
  if (!live) return;
  drawn++;

  pulse(now);
  blendTheme();
  const t = ease(Number.isFinite(raw) ? raw : 1);
  if (from && to) {
    const state = blendState(from, to, t);
    state.idea += run;
    engine.set(state);
    engine.flashGates(state.idea, now);
  }
  const fading = engine.focus(focusTags, reduceMotion ? 1 : approach(5), contextTags);
  const posing = engine.sets ? engine.sets.update(reduceMotion ? 1 : approach(2.5)) : false;
  shot = blendShots(fromShot, toShot, ease(Number.isFinite(camRaw) ? camRaw : 1));
  camera.position.copy(shot.pos);
  camera.lookAt(shot.target);
  camera.rotateZ((shot.roll || 0) * RAD);
  scene.updateMatrixWorld();
  lineart.render(scene, camera);
  engraving.render(scene, camera);
  labels.render(scene, camera);
  if (labelsChanged) {
    labelsChanged = false;
    plainLabels = [...labels.domElement.querySelectorAll(".label.is-on:not(.lead)")];
    bandNames = plainLabels.filter((el) => el.classList.contains("label-band"));
  }
  alignRight(bandNames);
  engine.align(camera);
  if (current) {
    // Measured unfolded: folding is decided again for each card
    const fold = cards.place(current, camera, hud.rect(16, false), hud.compact ? hud.rect(16, true) : null);
    hud.tighten(fold);
  }
  const at = pins(phone.matches ? shown.leadAtPhone : shown.leadAt);
  const gliding = leaders.update(camera, window.innerWidth, window.innerHeight, obstacles(), SIDES[shown.leadSide] || 0, Number(shown.leadColumn) || 0, approach(13), Number(shown.leadDrop) || 0, at);
  settling = fading || gliding || posing;
}

// ---------- sizing ----------

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  lineart.setSize();
  labels.setSize(w, h);
  engraving.setSize(w, h);
  // Narrower than 16:9 (16:10 laptops) the cards scale on the width (--u): the view keeps the 16:9 width too
  camera.aspect = w / h;
  camera.fov = camera.aspect >= 16 / 9 ? FOV : (2 * Math.atan((Math.tan((FOV * RAD) / 2) * 16) / 9 / camera.aspect)) / RAD;
  camera.updateProjectionMatrix();
  leaders.resize();
  hud.invalidate();
  wake(300);
}
window.addEventListener("resize", resize);
resize();

// three restores its buffers after a lost GPU context; the loop only draws when woken
renderer.domElement.addEventListener("webglcontextrestored", () => wake(500));

// Moving the window between a Retina laptop and a 1x projector changes the pixel ratio without always
// firing resize: watch the current ratio and size again when it changes
function watchPixelRatio() {
  matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener(
    "change",
    () => {
      resize();
      watchPixelRatio();
    },
    { once: true },
  );
}
watchPixelRatio();

// Text measured in the web font (engraved letters, leader boxes) is placed again once it has loaded
if (document.fonts) {
  document.fonts.ready.then(() => {
    engine.relayout();
    leaders.resize();
    wake(300);
  });
}

// ---------- start ----------

bindInput({ next, previous, go, count: stops.length });

// Debug handle for headless checks
window.deck = {
  go, next, previous, stops, BANDS,
  holdPulse: (r = null) => (pulseHold = r),
  drawn: () => drawn,
  drawCalls: () => {
    renderer.info.autoReset = false;
    renderer.info.reset();
    lineart.render(scene, camera);
    renderer.info.autoReset = true;
    return renderer.info.render.calls;
  },
};

const [startIndex, startBeat] = readHash(stops.length);
go(startIndex, true, startBeat);
fromShot = toShot;
requestAnimationFrame(frame);
