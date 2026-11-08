// Ambient motion and the frame clock: the energy pulse, the easing every fade shares, and the scene's own
// ambient motion (scene.motion: a slow spin, something running along a track). prefs.reduced
// (prefers-reduced-motion, followed live) stops the pulse; the scene's hooks receive it too.
import { setPulse } from "../render/lineart.js";

const PULSE_SPEED = 2.6; // world units per second
const PULSE_EVERY = 3.2; // seconds

// hooks: the scene's motion (scene.motion(engine)), or none
export function createMotion(hooks = {}, prefs) {
  let last = 0;
  // Seconds since the previous frame, capped so a hidden tab does not jump on return
  let dt = 0;
  // Whether the scene's own motion still wants frames
  let ambient = false;
  // Pulse: on stops with data-pulse a wave runs out from the scene's axis every few seconds, once the camera has landed
  let pulseStart = 0;
  let pulseHold = null; // debug: freeze the wave at a radius (deck.holdPulse)

  return {
    // Advances the clock and the scene's ambient motion to frame time now, on stop
    tick(now, stop) {
      dt = Math.min(0.1, (now - last) / 1000 || 0);
      last = now;
      ambient = !!hooks.tick?.(dt, stop, prefs.reduced);
    },
    // Easing towards a target at the same pace whatever the display's refresh rate
    // (rate: fraction per second; 5 ≈ the 8 % per frame these fades had at 60 Hz)
    approach(rate) {
      return 1 - Math.exp(-rate * dt);
    },
    get ambient() {
      return ambient;
    },
    // The blended state, before the scene takes it (adjust) and after (after)
    adjust(state) {
      hooks.adjust?.(state);
    },
    after(state, now) {
      hooks.after?.(state, now);
    },
    // A new move starts: the scene folds its ambient motion into the move's start
    reset() {
      hooks.reset?.();
    },
    // The first wave leaves at time at (after the camera's move)
    startPulse(at) {
      pulseStart = at;
    },
    pulse(now, on) {
      const t = (now - pulseStart) / 1000;
      setPulse(pulseHold !== null ? pulseHold : on && !prefs.reduced && t > 0 ? (t % PULSE_EVERY) * PULSE_SPEED : -10);
    },
    hold(r) {
      pulseHold = r;
    },
  };
}
