// Entry point: the renderers, the engine and the frame loop, which draws the way to where the deck is heading.
//   deck.js   stops and beats, the moves between them   motion.js  idle spin, running Idea, pulse, frame clock
//   stops.js  reads stops and beats from index.html     hud.js     breadcrumb, bar, questions, counter
//   cards.js  places the annotation cards               input.js   keys, touch, the #n.b hash
import * as THREE from "three";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
import { CSS3DRenderer } from "three/addons/renderers/CSS3DRenderer.js";
import { BANDS } from "./data.js";
import { RAD } from "./geometry.js";
import { createEngine, blendState } from "./engine/index.js";
import { blendShots, ease } from "./shots.js";
import { createLineArt } from "./render/lineart.js";
import { createLeaders } from "./leaders.js";
import { alignRight, rightEdges } from "./labels.js";
import { readStops, pins } from "./stops.js";
import { createCards } from "./cards.js";
import { createHud } from "./hud.js";
import { bindInput, readHash } from "./input.js";
import { createDeck } from "./deck.js";
import { createMotion } from "./motion.js";

// Reduced motion: no camera moves, spin, run or pulse. Followed live, so turning it on mid-talk applies at once
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefs = { reduced: motionQuery.matches };
// Same test as css/tokens.css; read when used, so turning the phone is covered
const phone = window.matchMedia("(pointer: coarse) and (max-height: 600px), (pointer: coarse) and (max-width: 600px)");

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
// The cards say it all: screen readers skip the drawing and the part names on it
labels.domElement.setAttribute("aria-hidden", "true");
stage.setAttribute("aria-hidden", "true");
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
const cardLayer = document.getElementById("cards");
const cards = createCards(cardLayer, () => wake(100));
stops.forEach(cards.add);
const hud = createHud(stops, () => prefs.reduced);
const motion = createMotion(engine, prefs);
const deck = createDeck({ stops, engine, cards, hud, motion, prefs, phone, wake });
const S = deck.state;

motionQuery.addEventListener("change", (e) => {
  prefs.reduced = e.matches;
  wake(300);
});

let plainLabels = []; // labels on screen that leader names keep clear of
let bandNames = []; // domain names on screen, kept in one column

// Keep part names clear of the card, the HUD (top-left block, footer at the bottom) and the plain labels.
// texts: each shown plain label's text box, read in the frame's one layout pass
function obstacles(texts) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const out = [{ x: 0, y: h * 0.93, w, h: h * 0.07 }];
  const r = hud.rect(12);
  if (r) out.push(r);
  const c = cards.box;
  if (c) out.push({ x: c.x - 12, y: c.y - 12, w: c.w + 24, h: c.h + 24 });
  texts.forEach((q) => out.push({ x: q.left - 4, y: q.top - 2, w: q.width + 8, h: q.height + 4 }));
  return out;
}

// ---------- frame loop ----------

const SIDES = { left: -1, right: 1 };

// The loop only runs while something moves: a camera move, the idle spin, the running Idea, the pulse,
// a fade or a gliding name, or a short wake after a beat, a resize or a card changing size. At rest it
// stops asking for frames; wake() starts it again
let awakeUntil = 0;
let settling = true;
let looping = false;
let lastDraw = 0;
let drawn = 0; // frames drawn, for headless checks of the idle loop
function wake(ms) {
  awakeUntil = Math.max(awakeUntil, performance.now() + ms);
  if (looping) return;
  looping = true;
  requestAnimationFrame(frame);
}

// The theme switch and the stops' themes change the engine's palette: draw the blend
new MutationObserver(() => wake(100)).observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

// The engine's palette follows the page theme: paper, or blueprint on the closing stop (and on dark pages)
let theme = 0;
const themeTarget = () => (["blueprint", "dark"].includes(document.body.dataset.theme) ? 1 : 0);
function blendTheme() {
  const target = themeTarget();
  if (theme === target) return false;
  theme = prefs.reduced || Math.abs(target - theme) < 0.002 ? target : theme + (target - theme) * motion.approach(3);
  lineart.setTheme(theme);
  return true;
}

function frame(now) {
  motion.tick(now, S.current);
  // The frame's time can be a hair older than a key press's performance.now(): never below 0
  const raw = Math.max(0, Math.min(1, (now - S.started) / deck.duration()));
  if (S.portal && now - S.shotStarted >= S.shotDuration) deck.landPortal();
  const camRaw = Math.max(0, Math.min(1, (now - S.shotStarted) / S.shotDuration));
  const moving = theme !== themeTarget() || raw < 1 || camRaw < 1 || settling || now < awakeUntil;
  const ambient = motion.spinning || (!prefs.reduced && (S.shown.pulse || (S.current && S.current.data.idea === "run")));
  if (!moving && !ambient) {
    looping = false;
    return;
  }
  requestAnimationFrame(frame);
  // The slow spin, the pulse and the running Idea need no more than 60 frames a second (120 Hz screens)
  if (!moving && now - lastDraw < 15) return;
  lastDraw = now;
  drawn++;

  motion.pulse(now, S.current && S.shown.pulse);
  blendTheme();
  const t = ease(Number.isFinite(raw) ? raw : 1);
  if (S.from && S.to) {
    const state = blendState(S.from, S.to, t);
    state.idea += motion.run;
    engine.set(state);
    engine.flashGates(state.idea, now);
  }
  const fading = engine.focus(S.focusTags, prefs.reduced ? 1 : motion.approach(5), S.contextTags);
  const posing = engine.sets ? engine.sets.update(prefs.reduced ? 1 : motion.approach(2.5)) : false;
  const shot = (S.shot = blendShots(S.fromShot, S.toShot, ease(Number.isFinite(camRaw) ? camRaw : 1)));
  camera.position.copy(shot.pos);
  camera.lookAt(shot.target);
  camera.rotateZ((shot.roll || 0) * RAD);
  scene.updateMatrixWorld();
  lineart.render(scene, camera);
  engraving.render(scene, camera);
  labels.render(scene, camera);
  if (S.labelsChanged) {
    S.labelsChanged = false;
    plainLabels = [...labels.domElement.querySelectorAll(".label.is-on:not(.lead)")];
    bandNames = plainLabels.filter((el) => el.classList.contains("label-band"));
  }
  // One layout read per frame, right after CSS2D has moved the labels: the band names' edges and every
  // plain label's text (not its box: names on an arc are rotated, domain names shifted into their column).
  // A domain name's text then moves into its column; its box follows by the same amount
  const edges = rightEdges(bandNames);
  const texts = plainLabels.filter((el) => el.style.display !== "none").map((el) => [el, (el.firstElementChild || el).getBoundingClientRect()]);
  const moved = alignRight(edges);
  const boxes = texts.map(([el, q]) => {
    const dx = moved.get(el) || 0;
    return dx ? { left: q.left + dx, top: q.top, width: q.width, height: q.height } : q;
  });
  engine.align(camera);
  const { current, shown } = S;
  if (current) {
    // Measured unfolded: folding is decided again for each card
    const fold = cards.place(current, camera, hud.rect(16, false), hud.compact ? hud.rect(16, true) : null);
    hud.tighten(fold);
  }
  const at = pins(phone.matches ? shown.leadAtPhone : shown.leadAt);
  const gliding = leaders.update(camera, window.innerWidth, window.innerHeight, obstacles(boxes), SIDES[shown.leadSide] || 0, Number(shown.leadColumn) || 0, prefs.reduced ? 1 : motion.approach(13), Number(shown.leadDrop) || 0, at);
  settling = fading || gliding || posing;
}

// ---------- sizing ----------

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  // Up to 2× and a pixel budget about 4K's: past it (5K and 6K screens) the composite pass costs more than
  // the extra sharpness gives; never below 1×
  renderer.setPixelRatio(Math.max(1, Math.min(window.devicePixelRatio, 2, Math.sqrt(9e6 / (w * h)))));
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

// Printing gives the reading version: every card back in its stop, in page order (css/fallback.css)
window.addEventListener("beforeprint", () => {
  stops.forEach((s) => {
    if (!s.card) return;
    s.card.style.transform = ""; // placed again on the next frame
    s.el.appendChild(s.card);
  });
  document.documentElement.className = "no-js";
});
window.addEventListener("afterprint", () => {
  document.documentElement.className = "js";
  stops.forEach((s) => s.card && cardLayer.appendChild(s.card));
  wake(300);
});

// ---------- start ----------

const { go, next, previous } = deck;
bindInput({ next, previous, go, count: stops.length });

// Debug handle for headless checks
window.deck = {
  go, next, previous, stops, BANDS,
  holdPulse: (r = null) => motion.hold(r),
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
S.fromShot = S.toShot;
wake(300);
