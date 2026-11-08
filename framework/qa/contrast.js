// Runs in the page (qa.mjs injects it): text contrast against what is really behind each text, the drawing
// included. collect() lists the visible texts with their colour (opacity folded in); qa.mjs then hides every
// text, takes the shot, and measure(items, png) reads the pixels under each text from it. A text passes when
// 90% of the pixels behind it give 4.5:1 (3:1 for large text: 24px, or 18.66px bold), so a thin line crossing
// it does not fail it but a drawing under it does. A rotated text (a name written along an arc) is read inside its
// own turned box, not the upright box around it, whose corners lie off the letters. paper(items): the same against
// white paper (printing).
({
  collect() {
    const out = [];
    const seen = new Set();
    const opacity = (el) => {
      let o = 1;
      for (let e = el; e && e.nodeType === 1; e = e.parentElement) o *= +getComputedStyle(e).opacity;
      return o;
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n; (n = walker.nextNode()); ) {
      if (!n.data.trim()) continue;
      const el = n.parentElement;
      if (seen.has(el) || el.closest(".sr-only, [hidden], .engraving, script, style")) continue;
      seen.add(el);
      const cs = getComputedStyle(el);
      if (cs.visibility !== "visible" || cs.display === "none") continue;
      const range = document.createRange();
      range.selectNodeContents(n);
      const b = range.getBoundingClientRect();
      if (b.width < 2 || b.height < 2 || b.right < 0 || b.bottom < 0 || b.left > innerWidth || b.top > innerHeight) continue;
      const o = opacity(el);
      if (o < 0.05) continue;
      // The text's turn: the rotations of its element and its ancestors (CSS2D labels only translate)
      let rot = 0;
      for (let e = el; e && e !== document.body; e = e.parentElement) {
        const t = getComputedStyle(e).transform;
        if (t && t !== "none") {
          const m = new DOMMatrixReadOnly(t);
          rot += Math.atan2(m.b, m.a);
        }
      }
      const turned = Math.abs(rot) > 0.01 && el.childNodes.length === 1;
      const cls = typeof el.className === "string" && el.className ? el.className.split(" ")[0] : el.tagName.toLowerCase();
      out.push({
        text: n.data.trim().replace(/\s+/g, " ").slice(0, 40),
        cls,
        color: cs.color,
        o,
        size: parseFloat(cs.fontSize),
        weight: +cs.fontWeight,
        x: Math.max(0, b.left),
        y: Math.max(0, b.top),
        w: Math.min(innerWidth, b.right) - Math.max(0, b.left),
        h: Math.min(innerHeight, b.bottom) - Math.max(0, b.top),
        // A turned text: its centre and its upright content box (the element's, padding off)
        ...(turned && {
          rot,
          cx: (b.left + b.right) / 2,
          cy: (b.top + b.bottom) / 2,
          rw: el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight),
          rh: el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom),
        }),
      });
    }
    return out;
  },

  async measure(items, png) {
    const img = new Image();
    img.src = "data:image/png;base64," + png;
    await img.decode();
    const c = new OffscreenCanvas(img.width, img.height);
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(img, 0, 0);
    const k = img.width / innerWidth;
    return items.map((it) => {
      const [r, gg, b, a] = this.rgba(it.color);
      const alpha = a * it.o;
      const W = Math.max(1, Math.floor(it.w * k));
      const d = g.getImageData(Math.floor(it.x * k), Math.floor(it.y * k), W, Math.max(1, Math.floor(it.h * k))).data;
      const [cos, sin] = [Math.cos(-it.rot || 0), Math.sin(-it.rot || 0)];
      const ratios = [];
      for (let i = 0; i < d.length; i += 12) {
        if (it.rot) {
          const p = i / 4;
          const x = it.x + (p % W) / k - it.cx;
          const y = it.y + Math.floor(p / W) / k - it.cy;
          if (Math.abs(x * cos - y * sin) > it.rw / 2 || Math.abs(x * sin + y * cos) > it.rh / 2) continue;
        }
        const fg = [r * alpha + d[i] * (1 - alpha), gg * alpha + d[i + 1] * (1 - alpha), b * alpha + d[i + 2] * (1 - alpha)];
        ratios.push(this.ratio(fg, [d[i], d[i + 1], d[i + 2]]));
      }
      ratios.sort((x, y) => x - y);
      return { ...it, ratio: ratios[Math.floor(ratios.length * 0.1)] ?? 21, need: this.need(it) };
    });
  },

  // Printing drops backgrounds: every text against white
  paper(items) {
    return items.map((it) => {
      const [r, g, b, a] = this.rgba(it.color);
      const alpha = a * it.o;
      const fg = [r, g, b].map((v) => v * alpha + 255 * (1 - alpha));
      return { ...it, ratio: this.ratio(fg, [255, 255, 255]), need: this.need(it) };
    });
  },

  need: (it) => (it.size >= 24 || (it.size >= 18.66 && it.weight >= 700) ? 3 : 4.5),

  // rgb(), rgba() and color(srgb …) (what color-mix() computes to)
  rgba(s) {
    const n = s.match(/[\d.]+/g).map(Number);
    return s.startsWith("color(") ? [n[0] * 255, n[1] * 255, n[2] * 255, n[3] ?? 1] : [n[0], n[1], n[2], n[3] ?? 1];
  },

  ratio(a, b) {
    const lin = (v) => ((v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    const L = (c) => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
    const [x, y] = [L(a), L(b)];
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  },
})
