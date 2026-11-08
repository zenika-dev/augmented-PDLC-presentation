// The deck's entry point: boot(scene, config) builds the renderers, the scene and the frame loop, which draws
// the way to where the deck is heading. A deck's own entry (src/main.js) is one call.
//   deck.js   stops and beats, the moves between them   motion.js  pulse, frame clock, the scene's ambient motion
//   stops.js  reads stops and beats from the page       hud.js     breadcrumb, bar, questions, counter
//   cards.js  places the annotation cards               input.js   keys, touch, the #n.b hash
import * as THREE from "three";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
import { CSS3DRenderer } from "three/addons/renderers/CSS3DRenderer.js";
import { RAD } from "../scene/math.js";
import { blendState } from "../scene/scene.js";
import { blendShots, ease, createShots } from "../scene/shots.js";
import { buildSets } from "../scene/sets.js";
import { setRoles } from "../scene/parts.js";
import { createLineArt } from "../render/lineart.js";
import { createLeaders } from "../scene/leaders.js";
import { alignRight, rightEdges, setNames } from "../scene/labels.js";
import { readStops, pins } from "./stops.js";
import { createCards } from "./cards.js";
import { createHud } from "./hud.js";
import { bindInput, readHash } from "./input.js";
import { createDeck } from "./deck.js";
import { createMotion } from "./motion.js";
import { readEdition, pageLang } from "../data/lists.js";

// Themes the scene's palette follows (body[data-theme]): 0 paper, 1 blueprint. A theme not listed is paper
const THEMES = { light: 0, dark: 1, blueprint: 1 };

// scene: defineScene(…) (framework/scene/scene.js); config: deck.config.mjs (hud, sets, themes)
export function boot(scene, config = {}) {

  // Reduced motion: no camera moves, spin, run or pulse. Followed live, so turning it on mid-talk applies at once
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefs = { reduced: motionQuery.matches };
  // The page head sets html.phone (and keeps it up as the phone turns); read when used
  const phone = { get matches() { return document.documentElement.classList.contains("phone"); } };

  // ---------- renderers ----------

  const stage = document.getElementById("stage");
  // No MSAA: the canvas only ever receives the full-screen composite
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
  } catch (error) {
    // No WebGL (a blocked GPU, some previewers): the reading version, as with scripts off
    document.documentElement.classList.replace("js", "no-js");
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

  const threeScene = new THREE.Scene();
  // World matrices are updated once per frame in frame(), not by each of the three renderers
  threeScene.matrixWorldAutoUpdate = false;
  const lineart = createLineArt(renderer);
  // A page whose stops visit sets (data-set) builds those sets, and the scene may want a deeper view for them
  const visited = [...document.querySelectorAll("#stops > .stop")].map((el) => el.dataset.set);
  const withSets = !!scene.sets && visited.some(Boolean);
  const view3d = scene.camera({ sets: withSets });
  const FOV = view3d.fov; // vertical, at 16:9 and wider
  const camera = new THREE.PerspectiveCamera(FOV, 1, view3d.near, view3d.far);

  // The deck's config, then the page's edition block, which wins: which HUD modules show, the sets' portals
  const edition = readEdition();
  const setsConfig = { ...config.sets, ...edition?.sets };
  // A stop without data-set shows no set, unless the scene names a default one
  const defaultSet = scene.sets?.defaultSet ?? null;
  const makeSets = withSets
    ? (root) =>
        buildSets(scene.sets.defs, [...new Set(visited.map((v) => v || defaultSet).filter(Boolean))], root, {
          portals: setsConfig.portals,
          pairs: setsConfig.pairs,
          leads: scene.sets.leads?.() || {},
          attach: scene.sets.attach,
        })
    : null;

  setRoles(scene.roles);
  // On-screen names come from the deck's names list (a language or an edition repaints them there)
  setNames(scene.lists().names);
  const engine = scene.create(threeScene, { buildSets: makeSets });
  const leaders = createLeaders(engine.root, labels.domElement);
  const resolveShot = createShots(scene, scene.sets?.shots);

  // ---------- deck ----------

  const stops = readStops(document.getElementById("stops"), scene.stopState);
  const cardLayer = document.getElementById("cards");
  const cards = createCards(cardLayer, () => wake(100));
  stops.forEach(cards.add);
  const hud = createHud(stops, () => prefs.reduced, { lists: scene.lists(), modules: { ...config.hud, ...edition?.hud }, lang: pageLang() });
  // Leader names that draw on rather than fade in (framework/css/components.css)
  if ({ ...config.leaders, ...edition?.leaders }.enter === "draw") document.documentElement.dataset.leadEnter = "draw";
  const motion = createMotion(scene.motion ? scene.motion(engine) : {}, prefs);
  const deck = createDeck({ stops, scene: { ...scene, defaultSet }, engine, resolveShot, cards, hud, motion, prefs, phone, wake });
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
    // The footer line: the bottom 7 %, or more where its text is taller (phones)
    const f = Math.min(h * 0.93, hud.footerTop() - 4);
    const out = [{ x: 0, y: f, w, h: h - f }];
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
  let setsMoving = false;
  function wake(ms) {
    awakeUntil = Math.max(awakeUntil, performance.now() + ms);
    if (looping) return;
    looping = true;
    requestAnimationFrame(frame);
  }

  // The theme switch and the stops' themes change the engine's palette: draw the blend
  new MutationObserver(() => wake(100)).observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

  // The scene's palette follows the page theme: paper, or blueprint (a closing stop, dark pages)
  let theme = 0;
  const themes = { ...THEMES, ...config.themes };
  const themeTarget = () => themes[document.body.dataset.theme] ?? 0;
  function blendTheme() {
    const target = themeTarget();
    if (theme === target) return false;
    theme = prefs.reduced || Math.abs(target - theme) < 0.002 ? target : theme + (target - theme) * motion.approach(3);
    lineart.setTheme(theme);
    return true;
  }

  // Frame timing for the scene check (framework/qa, qa scene): the time each drawn frame takes on the main thread
  const stats = { on: false, ms: [] };
  function frame(now) {
    // The reading version (printing, a phone held upright) shows no stage: nothing to draw or place
    if (document.documentElement.classList.contains("no-js")) {
      looping = false;
      return;
    }
    if (!stats.on) return step(now);
    const t0 = performance.now();
    const before = drawn;
    step(now);
    if (drawn > before) stats.ms.push(performance.now() - t0);
  }

  function step(now) {
    motion.tick(now, S.current);
    // The frame's time can be a hair older than a key press's performance.now(): never below 0
    const raw = Math.max(0, Math.min(1, (now - S.started) / deck.duration()));
    if (S.portal && now - S.shotStarted >= S.shotDuration) deck.landPortal();
    const camRaw = Math.max(0, Math.min(1, (now - S.shotStarted) / S.shotDuration));
    const moving = theme !== themeTarget() || raw < 1 || camRaw < 1 || settling || now < awakeUntil;
    const ambient = motion.ambient || (!prefs.reduced && !!S.shown.pulse);
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
      motion.adjust(state);
      engine.set(state);
      motion.after(state, now);
    }
    const fading = engine.focus(S.focusTags, prefs.reduced ? 1 : motion.approach(5), S.contextTags);
    const posing = engine.sets ? engine.sets.update(prefs.reduced ? 1 : motion.approach(2.5)) : false;
    // A set's pose or turntable still moving: body[data-set-moving] while it does, deck:set-landed once it stops,
    // so a card can wait for the room it belongs to
    if (posing !== setsMoving) {
      setsMoving = posing;
      document.body.toggleAttribute("data-set-moving", posing);
      if (!posing) document.dispatchEvent(new CustomEvent("deck:set-landed"));
    }
    const shot = (S.shot = blendShots(S.fromShot, S.toShot, ease(Number.isFinite(camRaw) ? camRaw : 1)));
    camera.position.copy(shot.pos);
    camera.lookAt(shot.target);
    camera.rotateZ((shot.roll || 0) * RAD);
    threeScene.updateMatrixWorld();
    lineart.render(threeScene, camera);
    engraving.render(threeScene, camera);
    labels.render(threeScene, camera);
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

  // ---------- the reading version ----------

  // Printing, and a phone held upright, give the reading version (framework/css/fallback.css): every card back
  // in its stop, in page order, on the light theme as paper and a page without scripts show it. Turning the
  // phone or closing the print dialog brings the deck back as it was.
  const portrait = window.matchMedia("(pointer: coarse) and (orientation: portrait)");
  const readers = new Set();
  let shownTheme;
  function reading(why, on) {
    const was = readers.size > 0;
    if (on) readers.add(why);
    else readers.delete(why);
    const root = document.documentElement;
    root.classList.toggle("reading-portrait", readers.has("portrait"));
    if (readers.size > 0 === was) return;
    if (!was) {
      stops.forEach((s) => {
        if (!s.card) return;
        s.card.style.transform = ""; // placed again on the next frame
        s.el.appendChild(s.card);
      });
      shownTheme = document.body.dataset.theme;
      document.body.dataset.theme = "light";
      root.classList.replace("js", "no-js");
    } else {
      root.classList.replace("no-js", "js");
      if (shownTheme === undefined) delete document.body.dataset.theme;
      else document.body.dataset.theme = shownTheme;
      stops.forEach((s) => s.card && cardLayer.appendChild(s.card));
      wake(300);
    }
  }
  window.addEventListener("beforeprint", () => reading("print", true));
  window.addEventListener("afterprint", () => reading("print", false));
  portrait.addEventListener("change", (e) => reading("portrait", e.matches));

  // ---------- start ----------

  const { go, next, previous } = deck;
  bindInput({ next, previous, go, count: stops.length });
  hud.bindSteps({ next, previous });

  // Debug handle for headless checks (framework/qa), plus whatever the scene adds (scene.debug)
  window.deck = {
    go, next, previous, stops, ...scene.debug,
    // The label groups and part tags the built scene holds, for the checks on data-labels, data-focus…
    vocabulary: () => {
      const groups = new Set();
      const tags = new Set();
      const keys = new Set();
      engine.root.traverse((o) => {
        [].concat(o.userData.group || [], o.userData.noteGroup || []).forEach((g) => g && groups.add(g));
        (o.userData.tags || []).forEach((t) => tags.add(t));
        if (o.userData.key) keys.add(o.userData.key);
      });
      return { groups: [...groups], tags: [...tags], keys: [...keys] };
    },
    holdPulse: (r = null) => motion.hold(r),
    drawn: () => drawn,
    // The scene's structure and what one frame costs (qa scene): draw calls and triangles rendered, meshes, materials,
    // geometries, the meshes that break the contract (no tags, not line art) or crowd one parent unbaked, and the
    // groups drawing the most meshes in this frame (heaviest: [path, visible meshes], two levels deep)
    inspect: () => {
      renderer.info.autoReset = false;
      renderer.info.reset();
      lineart.render(threeScene, camera);
      renderer.info.autoReset = true;
      const name = (o) => o.name || (o.userData.tags || []).join(",") || o.type;
      const path = (o) => {
        const parts = [];
        for (let p = o; p && p !== engine.root; p = p.parent) parts.unshift(name(p));
        return parts.join(" › ");
      };
      const out = { meshes: 0, visible: 0, triangles: 0, untagged: [], foreign: [], crowded: [] };
      const materials = new Set();
      const geometries = new Set();
      const children = new Map();
      const drawing = new Map();
      engine.root.traverse((o) => {
        if (!o.isMesh) return;
        out.meshes++;
        let shown = true;
        for (let p = o; p; p = p.parent) if (!p.visible) shown = false;
        if (shown) {
          out.visible++;
          const at = path(o.parent).split(" › ").slice(0, 2).join(" › ") || "root";
          drawing.set(at, (drawing.get(at) || 0) + 1);
        }
        if (!(o.userData.tags || []).length) out.untagged.push(path(o));
        if (!o.material?.uniforms?.dim) out.foreign.push(path(o));
        materials.add(o.material);
        geometries.add(o.geometry);
        const g = o.geometry;
        out.triangles += (g.index ? g.index.count : g.attributes.position?.count || 0) / 3;
        if (!o.userData.baked) children.set(o.parent, (children.get(o.parent) || 0) + 1);
      });
      children.forEach((n, p) => n > 40 && out.crowded.push(`${path(p) || "root"}: ${n} meshes`));
      return {
        ...out,
        triangles: Math.round(out.triangles),
        materials: materials.size,
        geometries: geometries.size,
        calls: renderer.info.render.calls,
        rendered: renderer.info.render.triangles,
        memory: { ...renderer.info.memory },
        programs: renderer.info.programs?.length ?? 0,
        heaviest: [...drawing].sort((a, b) => b[1] - a[1]).slice(0, 4),
      };
    },
    frameStats: (on) => {
      if (on !== undefined) {
        stats.on = on;
        stats.ms = [];
      }
      return stats.ms.slice();
    },
    drawCalls: () => {
      renderer.info.autoReset = false;
      renderer.info.reset();
      lineart.render(threeScene, camera);
      renderer.info.autoReset = true;
      return renderer.info.render.calls;
    },
  };

  const [startIndex, startBeat] = readHash(stops.length);
  go(startIndex, true, startBeat);
  S.fromShot = S.toShot;
  wake(300);
  // After the first stop has set its theme: a phone held upright opens on the reading version
  reading("portrait", portrait.matches);
}
