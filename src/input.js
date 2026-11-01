// Keyboard, touch and the URL. The hash is the counter's number (#6), with the beat after a dot from
// the second beat on (#6.3).

export function hashOf(index, beat) {
  return `#${index + 1}${beat > 0 ? `.${beat + 1}` : ""}`;
}

// [stop index, beat index] from the hash; anything unknown lands on the first stop
export function readHash(count) {
  const [n, b] = location.hash.slice(1).split(".").map(Number);
  const i = Number.isInteger(n) && n >= 1 && n <= count ? n - 1 : 0;
  return [i, Number.isInteger(b) && b >= 1 ? b - 1 : 0];
}

// deck: { next(), previous(), go(index, instant, beat), count }
export function bindInput(deck) {
  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) deck.next();
    else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(e.key)) deck.previous();
    else if (e.key === "Home") deck.go(0);
    else if (e.key === "End") deck.go(deck.count - 1);
    else return;
    e.preventDefault();
  });

  // Swipe left or right, or tap the left or right half of the screen; links and pinches pass through
  let touch = null;
  let full = false;
  document.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches[0];
      touch = e.touches.length === 1 && !e.target.closest("a") ? { x: t.clientX, y: t.clientY, at: performance.now() } : null;
    },
    { passive: true },
  );
  document.addEventListener("touchend", (e) => {
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
    if (Math.abs(dx) > 40) (dx < 0 ? deck.next : deck.previous)();
    else if (Math.hypot(dx, dy) < 10 && performance.now() - touch.at < 500) (t.clientX < window.innerWidth / 2 ? deck.previous : deck.next)();
    touch = null;
  });

  window.addEventListener("hashchange", () => {
    const [i, b] = readHash(deck.count);
    deck.go(i, false, b);
  });
}
