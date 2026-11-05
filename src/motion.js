// Ambient motion and the frame clock: the idle spin, the running Idea, the energy pulse, and the easing every
// fade shares. prefs.reduced (prefers-reduced-motion, followed live) stops the spin, the run and the pulse.
import { setPulse } from "./render/lineart.js";

const SPIN_SPEED = 0.06; // radians per second
const RUN_SPEED = 24; // degrees per second
const PULSE_SPEED = 2.6; // world units per second
const PULSE_EVERY = 3.2; // seconds

export function createMotion(engine, prefs) {
  // Idle: on stops marked data-idle the wheel and core turn slowly in opposite directions;
  // elsewhere they settle back to rest by the shortest way
  let spin = 0;
  let spinning = false;
  let last = 0;
  // Run: on stops with data-idea="run" the Idea travels its track, gates flashing as it passes
  let run = 0;
  // Seconds since the previous frame, capped so a hidden tab does not jump on return
  let dt = 0;
  // Pulse: on stops with data-pulse a red wave runs out from the core every few seconds, once the camera has landed
  let pulseStart = 0;
  let pulseHold = null; // debug: freeze the wave at a radius (deck.holdPulse)

  return {
    // Advances the clock and the spin and run to frame time now, on stop
    tick(now, stop) {
      dt = Math.min(0.1, (now - last) / 1000 || 0);
      last = now;
      const speed = prefs.reduced ? 0 : SPIN_SPEED;
      const idle = stop && stop.data.idle !== undefined;
      if (idle) spin += speed * dt;
      else {
        spin = Math.atan2(Math.sin(spin), Math.cos(spin));
        spin = Math.abs(spin) < 1e-4 ? 0 : spin + (0 - spin) * Math.min(1, dt * 3);
      }
      spinning = speed > 0 && (spin !== 0 || idle);
      engine.spin(spin);
      if (stop && stop.data.idea === "run") run += (prefs.reduced ? 0 : RUN_SPEED) * dt;
    },
    // Easing towards a target at the same pace whatever the display's refresh rate
    // (rate: fraction per second; 5 ≈ the 8 % per frame these fades had at 60 Hz)
    approach(rate) {
      return 1 - Math.exp(-rate * dt);
    },
    get spinning() {
      return spinning;
    },
    // Degrees the running Idea has travelled since the stop began; a new move folds it into its start
    get run() {
      return run;
    },
    resetRun() {
      run = 0;
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
