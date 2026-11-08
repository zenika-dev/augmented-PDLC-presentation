// Annotation cards, one per stop, in a screen layer: projected from their stop's world anchor, kept inside
// the viewport and clear of the HUD block. Their sizes are watched rather than read every frame (a card grows
// when a beat reveals more of it).
import * as THREE from "three";

const MARGIN = 0.04;

// onResize: called when a card changes size, so the caller can draw again
export function createCards(container, onResize) {
  const sizes = new Map();
  const watch = new ResizeObserver((entries) => {
    entries.forEach((e) => sizes.set(e.target, [e.target.offsetWidth, e.target.offsetHeight]));
    onResize();
  });
  const cards = [];
  const p = new THREE.Vector3();
  let box = null;

  // The notch and rounded corners in landscape: a probe reads env(safe-area-inset-*) as pixels
  const probe = document.createElement("div");
  probe.style.cssText = "position:fixed;visibility:hidden;padding:0 env(safe-area-inset-right,0px) 0 env(safe-area-inset-left,0px)";
  document.body.appendChild(probe);
  // Read once per size, not per frame: turning the phone fires resize
  let sides = null;
  window.addEventListener("resize", () => (sides = null));
  const insets = () => {
    if (!sides) {
      const s = getComputedStyle(probe);
      sides = [parseFloat(s.paddingLeft) || 0, parseFloat(s.paddingRight) || 0];
    }
    return sides;
  };

  function add(stop) {
    const card = stop.card;
    if (!card) return;
    card.classList.add(`card-${stop.data.side || "right"}`);
    // Each tile's number, written once: on a phone a beat list shows its lit tile alone, and a hidden tile does
    // not count in the CSS counter (framework/css/components.css)
    card.querySelectorAll(".tiles > *").forEach((tile, i) => (tile.dataset.n = i + 1));
    container.appendChild(card);
    watch.observe(card);
    cards.push(card);
  }

  // Cards off screen are out of reach too: no focus on their links, nothing read aloud
  function show(stop) {
    cards.forEach((card) => {
      card.classList.toggle("is-on", card === stop.card);
      card.inert = card !== stop.card;
    });
    box = null;
  }

  // hud: the HUD block's screen rectangle (or null); tight: the same block with its questions folded away,
  // when the page allows it. Returns whether the card needs the block folded
  function place(stop, camera, hud, tight = null) {
    const card = stop.card;
    if (!card) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const side = stop.data.side || "right";
    const [cw, ch] = sizes.get(card) || [card.offsetWidth, card.offsetHeight];
    let x;
    let y;
    if (stop.data.anchor === "screen") {
      x = side === "left" ? w * 0.07 : side === "center" ? (w - cw) / 2 : w * 0.93 - cw;
      y = stop.data.dock === "bottom" ? h * 0.88 - ch : (h - ch) / 2;
    } else {
      p.copy(stop.anchor).project(camera);
      const sx = ((p.x + 1) / 2) * w;
      const sy = ((1 - p.y) / 2) * h;
      const gap = w * 0.02;
      x = side === "left" ? sx - cw - gap : side === "center" ? sx - cw / 2 : sx + gap;
      y = sy - ch / 2;
    }
    const [sl, sr] = insets();
    x = Math.max(Math.max(w * MARGIN, sl + 8), Math.min(Math.min(w * (1 - MARGIN), w - sr - 8) - cw, x));
    y = Math.max(h * 0.12, Math.min(h * 0.88 - ch, y));
    // Keep clear of the HUD block: below it if the card fits there, else below the folded block, else to its right
    let fold = false;
    if (hud && x < hud.x + hud.w && y < hud.y + hud.h) {
      if (hud.y + hud.h + ch < h * 0.9) y = hud.y + hud.h;
      else if (tight && tight.y + tight.h + ch < h * 0.9) {
        y = Math.max(y, tight.y + tight.h);
        fold = true;
      } else x = hud.x + hud.w;
    }
    card.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    box = { x, y, w: cw, h: ch };
    return fold;
  }

  return {
    add,
    show,
    place,
    // Where the current card was last placed, for the leaders to keep clear of
    get box() {
      return box;
    },
  };
}
