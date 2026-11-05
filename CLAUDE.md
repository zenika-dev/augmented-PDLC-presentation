# The augmented PDLC — executive keynote

Interactive three.js keynote for Comex / VP audiences: Zenika's point of view on AI across the Product Delivery Life Cycle. English (`index.html`) and French (`index.fr.html`), ~25 min. The audience watches one engine being assembled and run; by the end they can sketch it on a napkin.

- Engine model and deck mechanics: `docs/engine.md` (source of truth: change the model there first, then `src/data.js`)
- Narrative and voiceover: `docs/outline.md` (English, older 36-stop outline); French voiceover for the 16 steps: `docs/voiceover.fr.md`
- Brand rules: `docs/brand-guidelines.md` (written for slides; adapted below)
- `docs/itinerary.md` is the superseded impress.js plan; its vocabulary and content rules still hold

## The engine, not slides

One 3D engine in clean line art on a pastel backdrop (anime.js look: white parts, thin outlines, red means energy). Each `<section class="stop">` in `index.html` is a camera shot plus the engine's state; `<div class="beat">` inside a stop is a substep that changes focus, labels, role lens or HUD without moving the camera. The header comment in `index.html` lists every `data-*` attribute.

- Four pillars, one cylinder: the wheel on top, 13 layers in 5 bands under it, the Context Nexus column through the centre, people as a role lens on the parts.
- Labels: leader lines (dot on the part, name on a tail, one light box), phase names on the lobes, engraved names on the napkin stop. No blur veils on labels; the HUD block has a light veil and leader names draw above it. Names are laid out automatically; a stop can pin a name with `data-lead-at` / `data-lead-at-phone` (step 5). A name turns red with its part when a beat energizes it.
- HUD: Section › part breadcrumb over the seven pillars, one bar segment per pillar, the seven Comex questions lit where a step speaks to them, source, a discreet version number (`.hud-version`, set by hand in each page; raise it at each delivery) and the `n / N` counter between previous/next arrows (`hud.js`, icons from `icons.js`). The URL is the counter: `#6`, `#6.3` (third beat).
- Motion lives in the camera, the running Idea and the energy pulse; respect `prefers-reduced-motion`.

## Vocabulary (do not mix variants)

- Wheel: Discover · Design · Develop · Deploy · Deepen, plus Drop as a side lobe.
- Phase gates: G1 Ready to Spec · G2 Ready to Build · G3 Ready to Release · G4 Released and Observable · G5 Opportunity or Retire · G6 Retirement Scoped. No other "G" numbering.
- Nexus registers: Knowledge · Intent · Contracts · Operations (not Purpose / Process). Intent is Team-only.
- Layers: L0–L12 in 5 domains ("bands" in code): Discover · Build · Contextualise · Measure · Platform. L11 Identity & Non-Human Access is the spine.
- Delegation: Human · AI-assisted · AI-executed · AI-autonomous, plus "never delegated".

## Content rules

- Figures only from Faros AI 2026, DORA 2025, McKinsey Nov 2025, each with its source in the HUD source bar. Zenika estimates labelled as such. No other numbers.
- No client names (anonymised sectors), no pricing, no commercial offer.
- Source documents (Zenika internal material, client work, template screenshots) are never committed: keep them in `sources/` or `assets/source/` (both ignored).
- Brand: Nunito only, one red word per title, never red text on dark (use `#ff6b7a`).
- Copy: titles in title case; every card explains itself to a reader who gets the deck by mail (prose-style-guardian-en: active voice, no hedging, no AI tics, no em dashes as separators).
- French deck (`index.fr.html`): engine names stay in English (phases, gate names, registers, Org/BU/Team, domains, layers, roles, measure families); prose, crumbs, gate checks, role purposes, questions, sections and shapes are French (`src/data.fr.js`, applied by `data.js` when `<html lang="fr">`). Sentence-case titles, `&#8239;` (narrow no-break space) before `: ; ? !`, prose-style-guardian FR.

## Stack

- `src/` ES modules, bundled by esbuild (`npm run build`, `npm run dev` to watch and serve) into `dist/deck.js`, an IIFE. `dist/` is committed so the deck opens offline from `file://` with no build.
  - `data.js` (phases, gates, bands, roles, sections, questions), `geometry.js`, `shots.js` (named camera shots)
  - `engine/` builds the parts (`wheel`, `nexus`, `bands`, `layers`) and `index.js` exposes the engine's state and lenses; `kit.js` (shared shapes, `merge`), `sets.js`, `rocket.js`, `rooms/`, `instruments.js`, `modules.js` build the editions' sets
  - `render/lineart.js`: the line-art renderer (G-buffer then a full-screen composite)
  - `parts.js` (meshes, focus fades, role lens, energy pulse), `labels.js` (CSS2D/CSS3D labels) and `leaders.js` (the leader-line layout)
  - `stops.js` reads stops and beats from `index.html`; `hud.js`, `cards.js`, `input.js` (keys, touch, `#n.b` hash)
  - `deck.js` is the deck controller (`go`, beats, portals; its `state` is what the frame loop reads), `motion.js` the idle spin, running Idea, pulse and frame clock
  - `main.js` wires them: renderers and the frame loop, which only runs while something moves (`wake()` restarts it)
- The files to mail are `dist/the-augmented-pdlc.html` and `dist/the-augmented-pdlc.fr.html`: `npm run build` inlines the CSS, the bundle and the logo into a copy of `index.html` / `index.fr.html`. Never link a new external file without checking the build's inline step covers it.
- Every change to a stop, beat or `data-*` attribute goes into both pages; only the text and `data-crumb` differ. The build fails when `index.fr.html` drifts from `index.html`.
- `css/tokens.css` (brand and role tokens, the cascade layer order), `css/engine.css` (labels, cards), `css/hud.css`, `css/dark.css`, `css/fallback.css`: layers tokens → components → themes → fallback; small red text uses `--red-text` (`#c8102e`, ≥ 4.5:1). Nunito is vendored in `fonts/`.
- Phones (coarse pointer, ≤600px in one dimension; the page head sets `html.phone`, CSS and scripts read it): font floors and the card minimum width off (`--fl`) except for leader names and the footer, HUD questions hidden, safe-area insets, fullscreen on the first touch, tap either half or swipe to move (left or up: next; right or down: previous), a rotate overlay in portrait. A card's revealed items replace its text on phones. Without scripts (mail previewers) `css/fallback.css` shows the cards as a scrolling page.

## Client editions

- A client edition is a page in `editions/<name>/` (gitignored, never committed or pushed): its own `index.html`, theme, fonts, logo and a `<script type="application/json" id="edition">` block that replaces or patches our lists (`applyEdition` in `src/data.js`; keys in `docs/editions.md`). Client names and prose never go into `src/`, `css/` or `docs/`.
- Themes set the role tokens in `css/tokens.css` (`--ink`, `--panel-*`, `--lead-*`…) on `body` / `body[data-theme="dark"]`, not component selectors; `css/dark.css` is the public decks' dark theme written that way.
- The engine reads its line-art colours from `--art-*` / `--art-dark-*` custom properties (`src/render/lineart.js`), so an edition repaints it from CSS. Without them the deck keeps its own look.
- `npm run build` also builds each edition into `editions/<name>/dist/` (file name from `<meta name="single-file">`). The EN/FR parity check does not apply to editions.
- Generic engine work for an edition happens on a feature branch, not on `main`.
- Sets (`src/engine/sets.js`): the rocket around the engine, the cockpit, the classroom, mission control and the contract dial. A page whose stops carry `data-set` builds them; changing set is a cut, unless a portal joins the two sets (`PORTALS`: the camera flies to a shot on one side, the sets swap behind the fade, it flies on from the other). Sets also hang parts on the engine (capability cartridges, the model bay), shown through `data-parts`. Leader names on the sets come from the edition's `leads`. An edition can add a light/dark switch (`.hud-theme`, `data-theme-default`). The public decks never set `data-set`, so they do not build them. `editions/<name>/private-terms.txt` lists the words that must never reach the public repo.

## Checking changes

- "Step N" in feedback is the `N / 16` counter (the `#N` hash), not a section id.
- After `npm run build`, check in Chrome (DevTools MCP) in a background tab of your own: never leave a viewport emulation on in the window the user watches, and close the tab when done.
- Overlap check on every stop and beat touched, at 1920×1080, 1440×900, 1366×768 and 844×390 (phone: mobile, touch, landscape): card, HUD block, logo, footer items, plain labels and leader boxes must not overlap or leave the screen. Then screenshots of what changed, console empty. `window.deck` exposes `go`, `next`, `previous`, `stops`.
- Check both pages when a change touches shared code or layout.
- Republish the phone preview Artifacts: EN (claude.ai/artifact/XHaZUr2ZKrjW6QfhwA2se4) from `dist/the-augmented-pdlc.html`, FR (claude.ai/artifact/5P77AThmimWJgVafH4BZXm) from `dist/the-augmented-pdlc.fr.html`.

## Repository

- Public: github.com/zenika-dev/augmented-PDLC-presentation. Work on `main` and push only `main`.
- `feat/three-engine` and `feat/map-skeleton` are a local archive whose history holds material that must stay private: never push them, never `git push --all` or `--mirror`.
- Before every push, run `npm run check:private` (nothing tracked under `editions/`, no term from `editions/*/private-terms.txt` in the tree or the unpushed commits) and grep the commit for client names, references to internal or client documents, pricing and personal emails. Footer stays `© ZENIKA 2026 · All Rights Reserved` (FR: `© ZENIKA 2026 · Tous droits réservés`); no licence file.
- The Anthropic `pdf` and `pptx` agent skills stay local (gitignored); the other skills in `.agents/` are MIT or Apache.
