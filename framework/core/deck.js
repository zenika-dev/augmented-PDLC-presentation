// The deck controller: which stop and beat are on screen, and the moves between them. go() sets where the
// scene, the camera and the cards are heading; the frame loop (boot.js) reads `state` and draws the way there.
// A stop may hold beats (<div class="beat" data-…>): substeps that override its focus, labels and pulse
// without moving the camera. Next and previous walk the beats before leaving the stop.
// What a stop's state means is the scene's business (framework/scene/scene.js): its hooks place the cards,
// pick the shots and adjust the state where a move needs more than a blend.
import * as THREE from "three";
import { setPulseBand } from "../render/lineart.js";
import { copyState } from "../scene/scene.js";
import { view, list, lags } from "./stops.js";
import { hashOf } from "./input.js";

// A portal between two sets (deck.config.mjs sets.portals): the camera first flies to the old set's portal shot, then the
// sets swap behind the cut's fade and it flies on from the new set's portal shot. Each leg takes LEG ms.
const LEG = 1100;
// Card items marked data-from show from their beat on. On phones they take the place of the text above
// them (framework/css/components.css): the text fades out, the two swap, the new content fades in
const SWAP_MS = 200;

// Non-finite numbers in a state taken mid-move start again from 0
function finite(state) {
  Object.keys(state).forEach((k) => {
    const v = state[k];
    if (typeof v === "number") state[k] = Number.isFinite(v) ? v : 0;
    else if (v && typeof v === "object") finite(v);
  });
  return state;
}

// scene: the deck's scene (hooks: enter, beatState, holdOnBeat, anchor, pulseBand, defaultShot, defaultSet);
// resolveShot(name, layout): the camera shots; prefs.reduced: prefers-reduced-motion (no camera moves);
// phone.matches: html.phone (the page head); wake(ms): draw for ms
export function createDeck({ stops, scene, engine, resolveShot, cards, hud, motion, prefs, phone, wake }) {
  // Where the scene lands at state `to` (the anchors its shots and cards read): the scene's layout(to) when it
  // has one, which builds nothing; otherwise set(to), read, then back to set(from)
  const layoutAt = (to, from) => {
    if (engine.layout) return engine.layout(to);
    const layout = engine.set(to);
    engine.set(from);
    return layout;
  };

  const setOf = (stop) => stop.data.set || scene.defaultSet;
  const shot = { pos: new THREE.Vector3(0, 30, 0.01), target: new THREE.Vector3() };
  const state = {
    current: null,
    beat: 0,
    shown: {}, // the current beat's attributes (view)
    focusTags: null,
    contextTags: [],
    labelsChanged: false, // CSS2D adds a label to the page on its first render: list them after it
    layout: null, // the scene's layout at the end of the current move (scene.set's return)
    from: null,
    to: null,
    started: 0,
    shot,
    fromShot: shot,
    toShot: shot,
    shotName: null,
    shotStarted: 0, // a beat may move the camera without replaying the stop's move
    shotDuration: 0,
    portal: null, // the move under way: { index, toBeat, via: { out, in } }
  };
  // How long the camera and the scene take to reach a stop or a beat: data-move picks a pace, cut jumps
  const MOVES = { slow: 2600, fast: 900, cut: 0 };
  const duration = () => (prefs.reduced ? 0 : (MOVES[state.move] ?? 1600));
  state.move = null;
  state.shotDuration = duration();

  function landPortal() {
    const { index, toBeat, via } = state.portal;
    state.portal = null;
    go(index, true, toBeat, true);
    state.fromShot = resolveShot(via.in, state.layout);
    state.shotStarted = performance.now();
    state.shotDuration = LEG;
  }

  function go(index, instant = false, toBeat = 0, through = false) {
    wake(100);
    // A key during a portal's first leg lands the move at once
    if (state.portal) landPortal();
    const stop = stops[Math.max(0, Math.min(stops.length - 1, index))];
    const b = Math.max(0, Math.min(stop.beats.length - 1, toBeat < 0 ? stop.beats.length - 1 : toBeat));
    if (stop === state.current) {
      if (b !== state.beat) showBeat(b);
      return;
    }
    const forward = !state.current || stop.index > state.current.index;
    const left = state.current;
    state.current = stop;
    state.move = view(stop, b).move || null;
    // Another set is a cut: no camera flight between places that do not share a space, unless a portal joins them
    const setCut = !!left && setOf(left) !== setOf(stop) && !engine.sets?.joined(setOf(left), setOf(stop));
    const via = setCut && !instant && !prefs.reduced && engine.sets ? engine.sets.portal(setOf(left), setOf(stop)) : null;
    if (via) {
      state.current = left;
      state.portal = { index: stop.index, toBeat: b, via };
      state.fromShot = state.shot;
      state.toShot = resolveShot(via.out, state.layout);
      state.shotName = via.out;
      state.shotStarted = performance.now();
      state.shotDuration = LEG;
      // The old stop's card and names step aside while the camera dives
      cards.show({});
      engine.labels([]);
      state.labelsChanged = true;
      return;
    }

    // data-move="cut" jumps within the same place, with the cut's fade
    const cut = setCut || (!!left && state.move === "cut");

    // The move starts from where the scene stands; ambient motion (a run, a spin) folds into that start
    const from = (state.from = finite(engine.state));
    motion.reset();
    const to = (state.to = copyState(stop.state));
    scene.enter?.(stop, from, to, { forward });

    // Shot and card anchor depend on where the scene lands at the end of the move
    state.layout = layoutAt(to, from);
    state.shotName = null;

    cards.show(stop);
    stop.anchor.copy(scene.anchor ? scene.anchor(stop.data.anchor, state.layout) : new THREE.Vector3());
    state.started = instant || cut || duration() === 0 ? -Infinity : performance.now();
    if (engine.sets) engine.sets.show(setOf(stop), list(stop.data.parts));
    showBeat(b, true);
    if (engine.sets && (instant || cut)) engine.sets.update(1);
    if (cut) {
      state.shot = state.fromShot = state.toShot;
      state.shotStarted = -Infinity;
      if (!prefs.reduced || through) {
        document.body.classList.add("is-cut");
        requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove("is-cut")));
      }
    }
    if (left && !instant) hud.dock(left.card);
    motion.startPulse(performance.now() + duration());
  }

  // Focus, labels, role lens, pulse and HUD of the current beat. Only the stop's own entry may snap the
  // camera (a cut or a jump); a beat always flies
  function showBeat(b, entering = false) {
    state.beat = b;
    const stop = state.current;
    const shown = (state.shown = view(stop, b));
    state.move = shown.move || null;
    // A beat may change some of the scene's state (scene.beatState): the scene blends there from where it
    // stands, the keys in scene.holdOnBeat carrying on from their current value
    const patch = state.to && scene.beatState ? scene.beatState(state.to, shown, stop) : null;
    if (patch) {
      if (!entering) {
        state.from = finite(engine.state);
        motion.reset();
        state.started = duration() === 0 ? -Infinity : performance.now();
      }
      const to = copyState(state.to);
      Object.assign(to, patch);
      if (!entering) (scene.holdOnBeat || []).forEach((k) => (to[k] = state.from[k]));
      state.to = to;
      state.layout = layoutAt(state.to, state.from);
    }
    // The camera heads for the beat's shot (the stop's unless the beat has its own)
    const name = shown.shot || scene.defaultShot;
    if (name !== state.shotName) {
      state.shotName = name;
      state.fromShot = state.shot;
      state.toShot = resolveShot(name, state.layout);
      state.shotStarted = entering && state.started === -Infinity ? -Infinity : performance.now();
      state.shotDuration = duration();
    }
    // Names that draw on wait for the camera to be mostly there (framework/css/components.css)
    const since = performance.now() - Math.max(state.started, state.shotStarted);
    const wait = since < 50 ? Math.max(state.shotDuration, duration()) * 0.6 : 0;
    document.documentElement.style.setProperty("--lead-wait", `${Math.round(wait)}ms`);
    state.focusTags = shown.focus ? list(shown.focus) : null;
    state.contextTags = list(shown.context);
    engine.labels(list(shown.labels));
    state.labelsChanged = true;
    engine.energize(list(shown.energize));
    engine.charge(list(shown.pulse), lags(shown.pulseLag));
    setPulseBand(...(scene.pulseBand ? scene.pulseBand(shown.pulseBand, state.layout) : [-1e3, 1e3]));
    if (engine.sets) engine.sets.target(shown);
    hud.update(stop, b);
    if (stop.card) {
      stop.card.querySelectorAll("[data-beat]").forEach((el) => el.classList.toggle("is-now", Number(el.dataset.beat) === b));
      revealFrom(stop, b);
    }
    // A sandboxed frame (SharePoint and Teams previews show the file in about:srcdoc) refuses to change the
    // URL; the deck runs on without the hash
    try {
      history.replaceState(null, "", hashOf(stop.index, b));
    } catch {}
    wake(1000);
  }

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
    if (!changes || !phone.matches || prefs.reduced) {
      show(b);
      return;
    }
    stop.card.classList.add("is-swapping");
    swapping = stop.card;
    swapTimer = setTimeout(() => {
      swapping = null;
      if (state.current === stop) show(state.beat);
      // Two frames: the swapped content first lays out transparent, then fades in
      requestAnimationFrame(() => requestAnimationFrame(() => stop.card.classList.remove("is-swapping")));
    }, SWAP_MS);
  }

  return {
    state,
    duration,
    go,
    landPortal,
    // Beat by beat, then stop by stop; nothing past either end of the deck
    next() {
      const { current, beat } = state;
      if (!current) return;
      if (beat < current.beats.length - 1) go(current.index, false, beat + 1);
      else if (current.index < stops.length - 1) go(current.index + 1);
    },
    previous() {
      const { current, beat } = state;
      if (!current) return;
      if (beat > 0) go(current.index, false, beat - 1);
      else if (current.index > 0) go(current.index - 1, false, -1);
    },
  };
}
