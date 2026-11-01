// The fixed HUD: Section › part breadcrumb, one bar segment per pillar, the seven Comex questions
// (lit where the step speaks to them, soft once met), the source line and the n / N counter.
import { CONCERNS, SECTIONS } from "./data.js";
import { list, view } from "./stops.js";

const MENTION = "© ZENIKA 2026 · All Rights Reserved";

export function createHud(stops, reduceMotion) {
  const el = {
    nav: document.querySelector(".hud-nav"),
    section: document.querySelector(".crumb-act"),
    part: document.querySelector(".crumb-part"),
    bar: document.querySelector(".hud-acts"),
    checklist: document.querySelector(".hud-checklist"),
    source: document.querySelector(".hud-source"),
    counter: document.querySelector(".hud-counter"),
  };

  // Section bar: one equal segment per pillar
  SECTIONS.forEach(() => {
    const li = document.createElement("li");
    li.innerHTML = "<span></span>";
    el.bar.appendChild(li);
  });

  CONCERNS.forEach((c) => {
    const li = document.createElement("li");
    li.dataset.concern = c.id;
    li.textContent = c.name;
    el.checklist.appendChild(li);
  });

  // The problem stop asks the same concerns as full questions (the single-file build writes them in already)
  document.querySelectorAll(".card .concerns:empty").forEach((ul) => {
    CONCERNS.forEach((c) => {
      const li = document.createElement("li");
      li.dataset.concern = c.id;
      li.textContent = c.question;
      ul.appendChild(li);
    });
  });

  // The block's screen rectangle, measured once after each change or resize (undefined = to measure)
  let box;

  // The HUD for the beat on screen: section › part, how far through the section, the questions it speaks to
  function update(stop, b) {
    const shown = view(stop, b);
    const i = SECTIONS.findIndex((x) => x.id === stop.data.section);
    el.section.textContent = i >= 0 ? `${String(i + 1).padStart(2, "0")} · ${SECTIONS[i].name}` : "";
    el.part.textContent = shown.crumb || "";
    // Earlier sections full, later ones empty; the current one fills stop by stop, beat by beat
    const inSection = stops.filter((s) => s.data.section === stop.data.section);
    const done = inSection.indexOf(stop) + (b + 1) / Math.max(1, stop.beats.length);
    el.bar.querySelectorAll("li").forEach((li, k) => {
      const fill = k < i ? 1 : k > i ? 0 : done / inSection.length;
      li.firstChild.style.width = `${(fill * 100).toFixed(1)}%`;
    });

    // Lit: the questions this beat speaks to; done: the ones met earlier in the talk
    const now = new Set(list(shown.answers));
    const met = new Set();
    stops.slice(0, stop.index + 1).forEach((s) => {
      const last = s === stop ? b - 1 : Math.max(0, s.beats.length - 1);
      for (let k = 0; k <= last; k++) list(view(s, k).answers).forEach((c) => met.add(c));
    });
    el.checklist.querySelectorAll("li").forEach((li) => {
      li.classList.toggle("is-now", now.has(li.dataset.concern));
      li.classList.toggle("is-done", met.has(li.dataset.concern) && !now.has(li.dataset.concern));
    });

    el.source.textContent = [stop.data.source, MENTION].filter(Boolean).join(" · ");
    el.counter.textContent = `${stop.index + 1} / ${stops.length}`;
    document.body.dataset.theme = stop.data.theme || "light";
    document.body.dataset.hud = shown.hud || "";
    box = undefined;
  }

  // The top-left block as a screen rectangle grown by pad, or null when hidden
  function rect(pad = 0) {
    if (box === undefined) {
      const r = el.nav.getBoundingClientRect();
      box = document.body.dataset.hud === "bare" ? null : { x: r.left, y: r.top, w: r.width, h: r.height };
    }
    if (!box) return null;
    return { x: box.x - pad, y: box.y - pad, w: box.w + 2 * pad, h: box.h + 2 * pad };
  }

  // Leaving the problem stop: its questions fly from the card into the checklist and stay there
  function dock(card) {
    const src = card && card.querySelector(".is-shown .concerns");
    if (!src || reduceMotion || document.body.dataset.hud) return;
    el.checklist.querySelectorAll("li").forEach((li, k) => {
      const a = src.querySelector(`[data-concern="${li.dataset.concern}"]`).getBoundingClientRect();
      const b = li.getBoundingClientRect();
      li.animate(
        [{ transform: `translate(${a.left - b.left}px, ${a.top - b.top}px)`, opacity: 0.5 }, { transform: "none", opacity: 1 }],
        { duration: 700, delay: k * 60, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "backwards" },
      );
    });
  }

  return {
    update,
    rect,
    dock,
    // After a resize: measure the block again
    invalidate() {
      box = undefined;
    },
  };
}
