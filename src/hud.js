// The fixed HUD: Section › part breadcrumb, one bar segment per run of stops, the seven Comex questions
// (lit where the step speaks to them), the source line and the n / N counter.
import { CONCERNS, SECTIONS, MENTION, LANG } from "./data.js";
import { list, view } from "./stops.js";
import { fillIcons } from "./icons.js";

// One choice per page: on one origin (file://, a share) the public decks and a dark edition keep their own
const THEME_KEY = `deck-theme:${location.pathname}`;

// reduceMotion: a function, the setting can change while the deck runs
export function createHud(stops, reduceMotion) {
  const el = {
    nav: document.querySelector(".hud-nav"),
    section: document.querySelector(".crumb-act"),
    part: document.querySelector(".crumb-part"),
    bar: document.querySelector(".hud-acts"),
    checklist: document.querySelector(".hud-checklist"),
    source: document.querySelector(".hud-source"),
    counter: document.querySelector(".hud-counter"),
    footer: document.querySelector(".hud-footer"),
  };

  // Screen readers hear one line per step, its number and its card's title, not the HUD's every change
  const announce = document.createElement("p");
  announce.className = "sr-only";
  announce.setAttribute("aria-live", "polite");
  document.body.appendChild(announce);
  const stepLine = (n, title) =>
    LANG === "fr" ? `Étape ${n} sur ${stops.length}${title ? `\u202f: ${title}` : ""}` : `Step ${n} of ${stops.length}${title ? `: ${title}` : ""}`;

  // Section bar: one segment per run of consecutive stops in one section, as wide as its stops.
  // Runs follow the page, not SECTIONS: an edition may open and close on the same section.
  const runs = [];
  stops.forEach((s) => {
    const last = runs[runs.length - 1];
    if (last && last.section === s.data.section) last.stops.push(s);
    else runs.push({ section: s.data.section, stops: [s] });
  });
  runs.forEach((r) => {
    const li = document.createElement("li");
    li.style.flexGrow = r.stops.length;
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

  // The page's theme where a stop sets none: data-theme-default on the body, else light. A page with a
  // .hud-theme switch lets the viewer flip it; the choice stays in this browser
  const toggle = document.querySelector(".hud-theme");
  let base = document.body.dataset.themeDefault || "light";
  let last = null;
  if (toggle) {
    // The icon shows where a click goes: the moon on a light page, the sun on a dark one
    fillIcons(toggle, "dark", "light");
    try {
      base = localStorage.getItem(THEME_KEY) || base;
    } catch {}
    toggle.addEventListener("click", () => {
      base = base === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, base);
      } catch {}
      if (last) applyTheme(last);
    });
  }
  // Full screen switch next to it, hidden where the page cannot go full screen (a frame without
  // allowfullscreen, iPhone Safari). Esc leaves full screen (input.js)
  const full = document.querySelector(".hud-fullscreen");
  if (full) {
    fillIcons(full, "fullscreen", "fullscreenExit");
    full.hidden = !document.fullscreenEnabled;
    full.addEventListener("click", () => {
      const going = document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen({ navigationUI: "hide" });
      going.catch(() => {});
    });
    document.addEventListener("fullscreenchange", () => {
      full.setAttribute("aria-pressed", String(!!document.fullscreenElement));
    });
  }

  function applyTheme(stop) {
    document.body.dataset.theme = stop.data.theme || base;
    toggle?.setAttribute("aria-pressed", String(document.body.dataset.theme !== "light"));
  }

  // The block's screen rectangle, measured once after each change or resize (undefined = to measure)
  let box;
  // The footer's top edge, measured with the block (its text grows on phones)
  let foot;
  function footerTop() {
    if (foot === undefined) foot = el.footer ? el.footer.getBoundingClientRect().top : window.innerHeight;
    return foot;
  }

  // The HUD for the beat on screen: section › part, how far through the section, the questions it speaks to
  function update(stop, b) {
    const shown = view(stop, b);
    const i = SECTIONS.findIndex((x) => x.id === stop.data.section);
    el.section.textContent = i >= 0 ? `${String(i + 1).padStart(2, "0")} · ${SECTIONS[i].name}` : "";
    el.part.textContent = shown.crumb || "";
    // Earlier runs full, later ones empty; the current one fills stop by stop, beat by beat
    const r = runs.findIndex((x) => x.stops.includes(stop));
    const done = runs[r].stops.indexOf(stop) + (b + 1) / Math.max(1, stop.beats.length);
    el.bar.querySelectorAll("li").forEach((li, k) => {
      const fill = k < r ? 1 : k > r ? 0 : done / runs[r].stops.length;
      li.firstChild.style.width = `${(fill * 100).toFixed(1)}%`;
    });
    // Opening the deck on a stop shows the bar as it stands instead of filling it from zero
    if (!el.bar.dataset.ready) requestAnimationFrame(() => requestAnimationFrame(() => (el.bar.dataset.ready = "1")));

    // Lit: the questions this beat speaks to
    const now = new Set(list(shown.answers));
    el.checklist.querySelectorAll("li").forEach((li) => {
      li.classList.toggle("is-now", now.has(li.dataset.concern));
      if (now.has(li.dataset.concern)) li.setAttribute("aria-current", "true");
      else li.removeAttribute("aria-current");
    });

    el.source.textContent = [stop.data.source, MENTION].filter(Boolean).join(" · ");
    el.counter.textContent = `${stop.index + 1} / ${stops.length}`;
    if (stop !== last) {
      const title = stop.card?.querySelector("h1, h2")?.textContent.replace(/\s+/g, " ").trim();
      announce.textContent = stepLine(stop.index + 1, title);
    }
    last = stop;
    applyTheme(stop);
    document.body.dataset.hud = shown.hud || "";
    box = foot = undefined;
  }

  // The top-left block as a screen rectangle grown by pad, or null when hidden. A page marked
  // data-hud-compact lets a tall card fold the questions away (tight: the block without them)
  const compact = document.body.dataset.hudCompact !== undefined;
  let questions = 0; // the questions' height and the gap above them, measured while they show
  function rect(pad = 0, tight = !!document.body.dataset.hudTight) {
    const folded = !!document.body.dataset.hudTight;
    if (box === undefined) {
      const r = el.nav.getBoundingClientRect();
      if (!folded && document.body.dataset.hud !== "crumb") {
        questions = el.checklist.getBoundingClientRect().height + parseFloat(getComputedStyle(el.nav).rowGap || 0);
      }
      box = document.body.dataset.hud === "bare" ? null : { x: r.left, y: r.top, w: r.width, h: r.height };
    }
    if (!box) return null;
    const q = document.body.dataset.hud === "crumb" ? 0 : questions;
    const h = tight === folded ? box.h : tight ? box.h - q : box.h + q;
    return { x: box.x - pad, y: box.y - pad, w: box.w + 2 * pad, h: h + 2 * pad };
  }

  // Fold the questions away (or back) for the card on screen; only on pages that allow it
  function tighten(on) {
    on = compact && on && document.body.dataset.hud !== "crumb";
    if (!!document.body.dataset.hudTight === on) return;
    if (on) document.body.dataset.hudTight = "";
    else delete document.body.dataset.hudTight;
    box = foot = undefined;
  }

  // Leaving the problem stop: its questions fly from the card into the checklist and stay there
  function dock(card) {
    const src = card && card.querySelector(".is-shown .concerns");
    if (!src || reduceMotion() || document.body.dataset.hud) return;
    el.checklist.querySelectorAll("li").forEach((li, k) => {
      const item = src.querySelector(`[data-concern="${li.dataset.concern}"]`);
      if (!item) return;
      const a = item.getBoundingClientRect();
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
    footerTop,
    tighten,
    compact,
    dock,
    // After a resize: measure the block again
    invalidate() {
      box = foot = undefined;
    },
  };
}
