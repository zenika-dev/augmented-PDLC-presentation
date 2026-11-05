// The deck controller: which stop and beat are on screen, and the moves between them. go() sets where the
// engine, the camera and the cards are heading; the frame loop (main.js) reads `state` and draws the way there.
// A stop may hold beats (<div class="beat" data-…>): substeps that override its focus, labels and pulse
// without moving the camera. Next and previous walk the beats before leaving the stop.
import * as THREE from "three";
import { resolveShot } from "./shots.js";
import { setPulseBand } from "./render/lineart.js";
import { view, list, ideaAngle, anchorPoint, lags, pulseBand } from "./stops.js";
import { hashOf } from "./input.js";

// A portal between two sets (sets.js PORTALS): the camera first flies to the old set's portal shot, then the
// sets swap behind the cut's fade and it flies on from the new set's portal shot. Each leg takes LEG ms.
const LEG = 1100;
// Card items marked data-from show from their beat on. On phones they take the place of the text above
// them (css/engine.css): the text fades out, the two swap, the new content fades in
const SWAP_MS = 200;

const numberOr = (value, fallback) => (value === undefined || value === "" ? fallback : Number(value));
const setOf = (stop) => stop.data.set || "rocket";

// prefs.reduced: prefers-reduced-motion (no camera moves); phone: the phone media query; wake(ms): draw for ms
export function createDeck({ stops, engine, cards, hud, motion, prefs, phone, wake }) {
  const shot = { pos: new THREE.Vector3(0, 30, 0.01), target: new THREE.Vector3() };
  const state = {
    current: null,
    beat: 0,
    shown: {}, // the current beat's attributes (view)
    focusTags: null,
    contextTags: [],
    labelsChanged: false, // CSS2D adds a label to the page on its first render: list them after it
    layout: null, // where the bands land on the current stop
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
  const duration = () => (prefs.reduced ? 0 : 1600);
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
    // Another set is a cut: no camera flight between places that do not share a space, unless a portal joins them
    const cut = !!left && setOf(left) !== setOf(stop) && !engine.sets?.joined(setOf(left), setOf(stop));
    const via = cut && !instant && !prefs.reduced && engine.sets ? engine.sets.portal(setOf(left), setOf(stop)) : null;
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

    // The running Idea's lap is folded into its start angle, so leaving a stop starts from where it is
    const from = (state.from = engine.state);
    if (!Number.isFinite(from.idea)) from.idea = 0;
    motion.resetRun();
    const to = (state.to = { ...stop.state, split: { ...stop.state.split }, presence: { ...stop.state.presence } });

    // The Idea only moves clockwise going forward, and back the same way
    const target = ideaAngle(stop.data.idea);
    let ideaTo = target === null ? from.idea : target;
    if (forward && ideaTo < from.idea - 0.01) ideaTo += 360 * Math.ceil((from.idea - ideaTo) / 360);
    if (!forward && ideaTo > from.idea + 0.01) ideaTo -= 360 * Math.ceil((ideaTo - from.idea) / 360);
    to.idea = ideaTo;

    // Shot and card anchor depend on where the bands land at the end of the move
    state.layout = engine.set(to);
    engine.set(from);
    state.shotName = null;

    cards.show(stop);
    stop.anchor.copy(anchorPoint(stop.data.anchor, state.layout));
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
    // A beat may raise or lower the Nexus tubes (data-telescope): the engine blends there from where it stands,
    // the Idea carrying on from its current angle
    const tel = numberOr(shown.telescope, stop.state.telescope);
    if (state.to && state.to.telescope !== tel) {
      if (!entering) {
        state.from = engine.state;
        if (!Number.isFinite(state.from.idea)) state.from.idea = 0;
        motion.resetRun();
        state.started = duration() === 0 ? -Infinity : performance.now();
      }
      const to = state.to;
      state.to = { ...to, split: { ...to.split }, presence: { ...to.presence }, telescope: tel, idea: entering ? to.idea : state.from.idea };
      state.layout = engine.set(state.to);
      engine.set(state.from);
    }
    // The camera heads for the beat's shot (the stop's unless the beat has its own)
    const name = shown.shot || "hero";
    if (name !== state.shotName) {
      state.shotName = name;
      state.fromShot = state.shot;
      state.toShot = resolveShot(name, state.layout);
      state.shotStarted = entering && state.started === -Infinity ? -Infinity : performance.now();
      state.shotDuration = duration();
    }
    state.focusTags = shown.focus ? list(shown.focus) : null;
    state.contextTags = list(shown.context);
    engine.labels(list(shown.labels));
    state.labelsChanged = true;
    engine.energize(list(shown.energize));
    engine.charge(list(shown.pulse), lags(shown.pulseLag));
    setPulseBand(...pulseBand(shown.pulseBand, state.layout));
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
