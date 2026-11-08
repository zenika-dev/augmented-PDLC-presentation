// Leader-line labels, after the anime.js exploded views: a dot on the part, a short diagonal, the name
// sitting on a horizontal tail, an optional note under it. Each frame the text goes outward from the engine's
// axis (sideways and up or down), then a greedy pass tries a few elbow positions so no two names, the card
// or the HUD overlap.
//   userData.reach  longer elbow for names anchored near the axis
//   userData.track  [a, b] segment in the parent's space: the dot slides to the point at mid-screen height
//   userData.band   group index in a column: names of one group stay together, a gap between groups
//   userData.key    name a stop can pin to a screen point (data-lead-at)
import * as THREE from "three";

const CANDIDATES = [
  [1, -1], [1, -1.7], [1, -2.4], [1, 1], [1, 1.7], [1, -3.1],
  [-1, -1], [-1, -1.7], [-1, 1], [-1, -2.4],
];

export function createLeaders(root, container) {
  const items = [];
  root.traverse((obj) => {
    const el = obj.userData.leader;
    if (!el) return;
    container.appendChild(el);
    items.push({
      obj, el, line: el.querySelector("polyline"), box: el.querySelector(".lead-box"), text: el.querySelector(".lead-text"),
      note: el.querySelector(".lead-note"),
      ex: null, ey: null, size: null,
    });
  });

  const world = new THREE.Vector3();
  const screen = new THREE.Vector3();
  const axis = new THREE.Vector3();
  const ta = new THREE.Vector3();
  const tb = new THREE.Vector3();

  // Point of the track whose screen height is closest to the middle of the viewport
  function onTrack(obj, camera) {
    const [a, b] = obj.userData.track;
    ta.copy(a).applyMatrix4(obj.parent.matrixWorld);
    tb.copy(b).applyMatrix4(obj.parent.matrixWorld);
    const ya = screen.copy(ta).project(camera).y;
    const yb = screen.copy(tb).project(camera).y;
    const t = Math.abs(yb - ya) < 1e-6 ? 0.5 : Math.max(0, Math.min(1, (0 - ya) / (yb - ya)));
    return world.copy(ta).lerp(tb, t);
  }

  function shown(obj) {
    for (let o = obj; o; o = o.parent) if (!o.visible) return false;
    return true;
  }

  function overlaps(r, rects) {
    return rects.some((q) => r.x < q.x + q.w && r.x + r.w > q.x && r.y < q.y + q.h && r.y + r.h > q.y);
  }

  // Parts-list column: names stacked top to bottom in their anchors' order, starting at screen x = column * w
  // (right side) or ending there (left side), so no two can overlap
  function stack(live, w, h, side, column, obstacles) {
    const x = column * w;
    const gap = Math.max(4, 8 * Math.min(w / 1920, h / 1080));
    const width = Math.max(...live.map((it) => Math.max(it.size[0], it.size[2])));
    const [x0, x1] = side > 0 ? [x, x + width] : [x - width, x];
    // Start below whatever sits at the top of the column (the HUD block)
    let start = -Infinity;
    obstacles.forEach((q) => {
      if (q.x < x1 && q.x + q.w > x0 && q.y < h * 0.4) start = Math.max(start, q.y + q.h);
    });
    let floor;
    const lay = (g, groups) => {
      floor = start;
      return live.map((it, i) => {
        const [, nh, , mh] = it.size;
        const apart = i > 0 && it.obj.userData.band !== live[i - 1].obj.userData.band ? groups : 0;
        const top = Math.max(it.ay - nh, floor + g + apart);
        floor = top + nh + mh;
        return top;
      });
    };
    // Short screens (phones): close the gaps between groups, then between names, before the column has to lift
    let tops;
    for (const [g, groups] of [[gap, 2 * gap], [gap, 0], [gap / 2, 0]]) {
      tops = lay(g, groups);
      if (floor <= h * 0.92) break;
    }
    // Lift the whole column if it runs into the footer
    const lift = Math.max(0, floor - h * 0.92);
    return live.map((it, i) => {
      const [nw, nh, mw, mh] = it.size;
      const top = tops[i] - lift;
      return { ex: x - it.ax, ey: top + nh - it.ay, r: { x: side > 0 ? x : x - Math.max(nw, mw), y: top, w: Math.max(nw, mw), h: nh + mh } };
    });
  }

  // obstacles: screen rectangles to keep clear (the card, the HUD); side: force every name left (-1) or right (1);
  // column: with a side, stack the names in one column at that fraction of the screen width;
  // glide: how far names move towards their elbow this frame (0–1, from the frame time);
  // drop: when set, free names first try an elbow at that fraction of the screen height (below the engine);
  // at: { key: [x, y] } elbows the stop places by hand, as fractions of the screen; the other names keep clear.
  // Returns whether any name is still gliding.
  function update(camera, w, h, obstacles = [], forceSide = 0, column = 0, glide = 0.2, drop = 0, at = {}) {
    let gliding = false;
    const k = Math.min(w / 1920, h / 1080);
    const len = 46 * k; // scales all the way down, so a phone lays names out as the desktop does
    const pad = 6;
    const placed = obstacles.slice();
    const live = [];

    items.forEach((it) => {
      if (it.obj.userData.track) onTrack(it.obj, camera);
      else it.obj.getWorldPosition(world);
      const p = screen.copy(world).project(camera);
      const there = shown(it.obj) && p.z < 1;
      it.el.style.visibility = there ? "" : "hidden";
      if (!there || !it.el.classList.contains("is-on")) {
        it.ex = null;
        return;
      }
      axis.set(0, world.y, 0);
      const a = axis.project(camera);
      it.ax = ((p.x + 1) / 2) * w;
      it.ay = ((1 - p.y) / 2) * h;
      it.side = forceSide || (it.ax >= ((a.x + 1) / 2) * w ? 1 : -1);
      it.down = it.ay > ((1 - a.y) / 2) * h ? -1 : 1;
      const noted = it.note && it.el.classList.contains("show-note");
      if (!it.size || it.noted !== noted) {
        // [box width, box top to the name's tail, box width, note height]: one box holds a kicker, the name, its note
        const bw = it.box.offsetWidth;
        const nh = it.text.offsetTop + it.text.offsetHeight;
        it.size = [bw, nh, bw, it.box.offsetHeight - nh];
        it.noted = noted;
      }
      live.push(it);
    });

    live.sort((a, b) => (a.obj.userData.band ?? 0) - (b.obj.userData.band ?? 0) || a.ay - b.ay);
    const stacked = forceSide && column ? stack(live, w, h, forceSide, column, obstacles) : null;
    // Pinned names first, wherever the stop put them, so the others lay out around them
    const pinned = live.map((it) => {
      const p = at[it.obj.userData.key];
      if (!p) return null;
      const [nw, nh, mw, mh] = it.size;
      const tw = Math.max(nw, mw);
      const ex = p[0] * w - it.ax;
      const ey = p[1] * h - it.ay;
      const r = { x: ex > 0 ? it.ax + ex : it.ax + ex - tw, y: it.ay + ey - nh, w: tw, h: nh + mh };
      placed.push(r);
      return { ex, ey, r };
    });
    live.forEach((it, i) => {
      const [nw, nh, mw, mh] = it.size;
      const tw = Math.max(nw, mw);
      const reach = len * (it.obj.userData.reach || 1);
      let best = pinned[i] || (stacked ? stacked[i] : null);
      const tries = drop ? [[1, "drop"], [-1, "drop"], ...CANDIDATES] : CANDIDATES;
      if (!best) for (const [s, d] of tries) {
        if (forceSide && s < 0) continue;
        const side = s * it.side;
        // A dropped name also reaches further out, clear of the engine's silhouette
        const ex = side * (d === "drop" ? Math.max(reach, w * 0.12) : reach);
        const ey = d === "drop" ? h * drop - it.ay : d * len * it.down;
        const r = { x: side > 0 ? it.ax + ex : it.ax + ex - tw, y: it.ay + ey - nh, w: tw, h: nh + mh };
        const inside = r.x > pad && r.x + r.w < w - pad && r.y > pad && r.y + r.h < h - pad;
        if (!inside) continue;
        if (!best) best = { ex, ey, r };
        if (!overlaps(r, placed)) {
          best = { ex, ey, r };
          break;
        }
      }
      if (!best) best = { ex: it.side * reach, ey: -len * it.down, r: { x: 0, y: 0, w: 0, h: 0 } };
      if (!pinned[i]) placed.push(best.r);
      // Ease towards the chosen elbow so names glide instead of jumping while the camera moves
      if (it.ex === null) {
        it.ex = best.ex;
        it.ey = best.ey;
      } else {
        if (Math.abs(best.ex - it.ex) + Math.abs(best.ey - it.ey) > 0.5) gliding = true;
        it.ex += (best.ex - it.ex) * glide;
        it.ey += (best.ey - it.ey) * glide;
      }
      it.el.style.transform = `translate(${it.ax.toFixed(1)}px, ${it.ay.toFixed(1)}px)`;
      it.line.setAttribute("points", `0,0 ${it.ex.toFixed(1)},${it.ey.toFixed(1)}`);
      const left = forceSide ? forceSide < 0 : it.ex < 0;
      // The name's bottom border (the tail) sits on the elbow; the note hangs below in the same box
      it.box.style.transform = `translate(${it.ex.toFixed(1)}px, ${(it.ey - it.size[1]).toFixed(1)}px) translate(${left ? -100 : 0}%, 0)`;
      it.box.style.textAlign = left ? "right" : "left";
    });
    return gliding;
  }

  // Font sizes follow the viewport: measure again after a resize
  function resize() {
    items.forEach((it) => (it.size = null));
  }

  return { update, resize };
}
