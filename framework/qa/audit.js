// Runs in the page (qa.mjs injects it): for one stop and beat already on screen, the boxes that must not
// overlap or leave the screen (cards, HUD items, plain labels, leader boxes), the text under the size floor,
// and whether the deck's font has loaded. opts: { hud: [class names], minText: px (0: no floor), the floor
// for this viewport (a phone's is lower) }
(opts) => {
  const W = innerWidth;
  const H = innerHeight;
  const vis = (el) => {
    for (let e = el; e && e !== document; e = e.parentElement) {
      const s = getComputedStyle(e);
      if (s.display === "none" || s.visibility === "hidden" || +s.opacity < 0.3) return false;
    }
    const r = el.getBoundingClientRect();
    return r.width > 1 && r.height > 1;
  };
  const R = (el) => {
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  };
  const hit = (a, b) => a.x < b.x + b.w - 1 && a.x + a.w > b.x + 1 && a.y < b.y + b.h - 1 && a.y + a.h > b.y + 1;
  const name = (el) => (el.innerText || String(el.className)).trim().replace(/\s+/g, " ").slice(0, 24);

  const items = [];
  document.querySelectorAll(".card").forEach((el) => vis(el) && items.push({ k: "card", n: "card", r: R(el) }));
  opts.hud.forEach((c) => document.querySelectorAll("." + c).forEach((el) => vis(el) && items.push({ k: "hud", n: c, r: R(el) })));
  // Plain labels; letters engraved in 3D on a face (the CSS3D layer) turn with it and are left out
  document.querySelectorAll(".label.is-on:not(.lead)").forEach((el) => !el.closest(".engraving") && vis(el) && items.push({ k: "label", n: name(el), r: R(el.firstElementChild || el) }));
  document.querySelectorAll(".lead.is-on .lead-box").forEach((el) => vis(el) && items.push({ k: "lead", n: name(el), r: R(el) }));

  const issues = [];
  for (let p = 0; p < items.length; p++) {
    const a = items[p];
    if (a.k !== "hud" && (a.r.x < -0.5 || a.r.y < -0.5 || a.r.x + a.r.w > W + 0.5 || a.r.y + a.r.h > H + 0.5)) issues.push(`off-screen ${a.k}:${a.n}`);
    for (let q = p + 1; q < items.length; q++) {
      const c = items[q];
      if (a.k === "hud" && c.k === "hud") continue;
      if (hit(a.r, c.r)) issues.push(`overlap ${a.k}:${a.n} × ${c.k}:${c.n}`);
    }
  }

  // Text under the floor: cards, HUD, plain labels and leader names on screen (phones have a lower floor)
  if (opts.minText > 0) {
    const small = new Set();
    document.querySelectorAll(".card *, .hud *, .labels .label.is-on *").forEach((el) => {
      if (el.closest(".sr-only, [hidden]")) return;
      if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) return;
      if (!vis(el)) return;
      const px = parseFloat(getComputedStyle(el).fontSize);
      if (px < opts.minText) small.add(`${name(el)} ${px.toFixed(1)}px`);
    });
    small.forEach((s) => issues.push(`small-text ${s}`));
  }

  // The deck's own font, not a fallback
  const family = getComputedStyle(document.body).fontFamily.split(",")[0].trim();
  if (document.fonts && !document.fonts.check(`16px ${family}`)) issues.push(`font-not-loaded ${family}`);
  return issues;
}
