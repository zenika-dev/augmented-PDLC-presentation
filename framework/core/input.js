// Keyboard, touch and the URL. The hash is the counter's number (#6), with the beat after a dot from
// the second beat on (#6.3). The footer's arrows (hud.js) are plain buttons.

export function hashOf(index, beat) {
  return `#${index + 1}${beat > 0 ? `.${beat + 1}` : ""}`;
}

// [stop index, beat index] from the hash; past the end lands on the last stop, anything unknown on the first
export function readHash(count) {
  const [n, b] = location.hash.slice(1).split(".").map(Number);
  const i = Number.isInteger(n) && n >= 1 ? Math.min(n, count) - 1 : 0;
  return [i, Number.isInteger(b) && b >= 1 ? b - 1 : 0];
}

// The reading version (a phone held upright, printing) scrolls like a page: keys and touches are the browser's
const reading = () => document.documentElement.classList.contains("no-js");

// deck: { next(), previous(), go(index, instant, beat), count }
export function bindInput(deck) {
  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || reading()) return;
    // A focused link or button (the closing links, the theme and full screen switches) keeps Space and Enter for itself
    if (e.target.closest?.("a, button") && [" ", "Enter"].includes(e.key)) return;
    // Esc leaves full screen; browsers mostly do it themselves, this covers hosts that pass the key on
    if (e.key === "Escape" && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) deck.next();
    else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(e.key)) deck.previous();
    else if (e.key === "Home") deck.go(0);
    else if (e.key === "End") deck.go(deck.count - 1);
    else return;
    e.preventDefault();
  });

  // Swipe left or up for next, right or down for previous, or tap the left or right half of the screen;
  // links, buttons and pinches pass through
  let touch = null;
  let full = false;
  document.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches[0];
      touch = e.touches.length === 1 && !reading() && !e.target.closest("a, button") ? { x: t.clientX, y: t.clientY, at: performance.now() } : null;
    },
    { passive: true },
  );
  document.addEventListener("touchend", (e) => {
    if (reading()) return;
    // First touch on a phone: hide the browser bars and hold landscape where the browser allows it
    // (Android, iPad; iPhone Safari has no element fullscreen)
    if (!full) {
      full = true;
      document.documentElement.requestFullscreen?.({ navigationUI: "hide" })
        .then(() => screen.orientation?.lock?.("landscape"))
        .catch(() => {});
    }
    if (!touch || e.touches.length) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.x;
    const dy = t.clientY - touch.y;
    // The longer axis decides: across like turning a page, up or down like scrolling one
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 40) {
      const ahead = Math.abs(dx) >= Math.abs(dy) ? dx < 0 : dy < 0;
      (ahead ? deck.next : deck.previous)();
    } else if (Math.hypot(dx, dy) < 10 && performance.now() - touch.at < 500) (t.clientX < window.innerWidth / 2 ? deck.previous : deck.next)();
    touch = null;
  });

  window.addEventListener("hashchange", () => {
    const [i, b] = readHash(deck.count);
    deck.go(i, false, b);
  });
}
