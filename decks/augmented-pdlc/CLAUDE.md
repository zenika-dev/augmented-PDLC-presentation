# The augmented PDLC — executive keynote

Interactive three.js keynote for Comex / VP audiences: Zenika's point of view on AI across the Product Delivery Life Cycle. English (`index.html`) and French (`index.fr.html`), ~25 min. The audience watches one engine being assembled and run; by the end they can sketch it on a napkin.

- Engine model and deck mechanics: `docs/model.md` (source of truth: change the model there first, then `src/lists.js`); where the deck stands, its decisions and backlog: `docs/progress.md`
- The 16 steps as built: `inputs/outline.md` (the framework's outline format) and `docs/stop-map.md`, both written from the pages; the first 36-stop outline: `docs/outline-36-stops.md`; French voiceover for the 16 steps: `docs/voiceover.fr.md`
- Brand rules: `brand/zenika/brand-guidelines.md` (written for slides; adapted below)
- `docs/itinerary.md` is the superseded impress.js plan; its vocabulary and content rules still hold
- The deck runs on `framework/`, a content-agnostic core; the engine is its scene (`src/scene.js`). Rules for any deck on it: `framework/docs/principles.md`; the board-first process from an outline to a delivered deck: `framework/docs/process.md`; what a deck provides: `framework/docs/contract.md`; the gates: `framework/docs/gates.md`. The process runs through the `/deck` skill and its stage skills (`framework/skills/`) and agents (`framework/agents/`), linked into `.claude/`; `npm run new-deck -- decks/<name>` scaffolds a new deck package of this repository from `framework/starter/` (`-- ../<name>`: a repository of its own)

## The engine, not slides

One 3D engine in clean line art on a pastel backdrop (anime.js look: white parts, thin outlines, red means energy). Each `<section class="stop">` in `index.html` is a camera shot plus the engine's state; `<div class="beat">` inside a stop is a substep that changes focus, labels, role lens or HUD without moving the camera. The core's `data-*` attributes are in `framework/docs/contract.md`, the engine's in `docs/attributes.md` (both generated: `npm run docs`).

- Four pillars, one cylinder: the wheel on top, 13 layers in 5 bands under it, the Context Nexus column through the centre, people as a role lens on the parts.
- Labels: leader lines (dot on the part, name on a tail, one light box), phase names on the lobes, engraved names on the napkin stop. No blur veils on labels; the HUD block has a light veil and leader names draw above it. Names are laid out automatically; a stop can pin a name with `data-lead-at` / `data-lead-at-phone` (step 5). A name turns red with its part when a beat energizes it.
- HUD: Section › part breadcrumb over the seven pillars, one bar segment per pillar, the seven Comex questions lit where a step speaks to them, source, a discreet version number (`.hud-version`, written by the build from `package.json` `version`; raise it there at each delivery) and the `n / N` counter between previous/next arrows (`framework/core/hud.js`, icons from `framework/core/icons.js`; each block is a module `deck.config.mjs` `hud` switches on or off). The URL is the counter: `#6`, `#6.3` (third beat).
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
- French deck (`index.fr.html`): engine names stay in English (phases, gate names, registers, Org/BU/Team, domains, layers, roles, measure families); prose, crumbs, gate checks, role purposes, questions, sections and shapes are French (`src/lists.fr.js`, applied by `lists.js` when `<html lang="fr">`). Sentence-case titles, `&#8239;` (narrow no-break space) before `: ; ? !`, prose-style-guardian FR.

## Stack

- `framework/` is the content-agnostic core, `src/` the PDLC scene on it; esbuild bundles `src/main.js` (`npm run build`, `npm run dev` to watch and serve) into `dist/deck.js`, an IIFE. `dist/` is committed so the deck opens offline from `file://` with no build. `deck.config.mjs` holds the pages, outputs, HUD modules, set portals, copy rules and QA viewports.
  - `framework/core/`: `boot.js` (renderers and the frame loop, which only runs while something moves; `wake()` restarts it), `deck.js` (the deck controller: `go`, beats, portals; its `state` is what the frame loop reads), `stops.js` (reads stops and beats), `motion.js` (frame clock, pulse, the scene's ambient motion), `hud.js`, `cards.js`, `input.js` (keys, touch, `#n.b` hash), `ui-strings.js`
  - `framework/scene/`: `scene.js` (`defineScene`, `defineSet`, the state blend), `parts.js` (meshes, focus fades, role lens, energy pulse, tag → role rules), `labels.js` and `leaders.js` (CSS2D/CSS3D labels, the leader-line layout), `shots.js` (orbit, blend, resolver), `sets.js` (cuts, portals, turntables, poses), `kit.js` (shared shapes, `merge`, `bake`), `widgets.js` (dial, engraved names), `furniture.js`, `math.js`
  - `framework/render/lineart.js`: the line-art renderer (G-buffer then a full-screen composite); `framework/data/lists.js`: edition and language patches
  - `src/`: `scene.js` (the engine as a scene: state, Idea, shots, anchors, motion), `schema.js` (its attributes for the lint), `lists.js` (phases, gates, bands, roles, sections, questions), `geometry.js`, `shots.js`; `engine/` builds the parts (`wheel`, `nexus`, `bands`, `layers`) and `index.js` exposes the engine's state and lenses; `sets.js` declares the editions' sets, built by `rocket.js`, `rooms/`, `instruments.js`, `modules.js`
  - `framework/build/`: `build.mjs`, `lint-stops.mjs`, `check-copy.mjs`, `check-private.mjs`, `check-docs.mjs`, `gate.mjs`, and for new decks `outline.mjs`, `draft-stops.mjs`, `new-deck.mjs`; `framework/boards/boards.mjs` writes boards for the Claude Design canvas; `framework/qa/`: the headless Chrome checks
- The files to mail are `dist/the-augmented-pdlc.html` and `dist/the-augmented-pdlc.fr.html`: `npm run build` inlines the CSS, the bundle and the logo into a copy of `index.html` / `index.fr.html`. Never link a new external file without checking the build's inline step covers it.
- Every change to a stop, beat or `data-*` attribute goes into both pages; only the text and `data-crumb` differ. The build fails when `index.fr.html` drifts from `index.html`.
- `framework/css/tokens.css` (brand and role tokens, the cascade layer order), `framework/css/components.css` (stage, labels, leaders, cards, tiles), `css/deck.css` (the engine's own labels and card blocks), `framework/css/hud.css`, `framework/css/dark.css`, `framework/css/fallback.css`: layers tokens → components → themes → fallback; small red text uses `--red-text` (`#c8102e`, ≥ 4.5:1). Nunito is vendored in `brand/zenika/fonts/` and inlined by `brand/zenika/fonts.css`.
- Phones (coarse pointer, ≤600px in one dimension; the page head sets `html.phone`, CSS and scripts read it): the framework's text floor (9px, `--fl-phone` 0.8px) with cards a little wider than its default (`css/deck.css`), `.off-phone` on a paragraph the drawing already tells (steps 5, 9, 13), families showing only the lit item's description, HUD questions hidden, safe-area insets, fullscreen on the first touch, tap either half or swipe to move (left or up: next; right or down: previous). Held upright, a phone shows the reading version with a line asking to turn it ("Rotate for the full immersive experience"). A card's revealed items replace its text on phones. Without scripts (mail previewers), and when printing, `framework/css/fallback.css` shows the cards as a scrolling page.

## Client editions

- A client edition is a page in `editions/<name>/` (gitignored, never committed or pushed): its own `index.html`, theme, fonts, logo and a `<script type="application/json" id="edition">` block that replaces or patches our lists (`applyEdition` in `src/lists.js`; keys in `docs/editions.md`). Client names and prose never go into `src/`, `css/` or `docs/`.
- Themes set the role tokens in `framework/css/tokens.css` (`--ink`, `--panel-*`, `--lead-*`…) on `body` / `body[data-theme="dark"]`, not component selectors; `framework/css/dark.css` is the public decks' dark theme written that way.
- The engine reads its line-art colours from `--art-*` / `--art-dark-*` custom properties (`framework/render/lineart.js`; energy is `--art-energy-*`, the old `--art-red-*` still works), so an edition repaints it from CSS. Without them the deck keeps its own look.
- An edition's block may also turn HUD modules off (`"hud": { "questions": false }`), replace the portals (`"sets"`) and set its title style for `check:copy` (`"copy": { "titles": "sentence" }`).
- `npm run build` also builds each edition into `editions/<name>/dist/` (file name from `<meta name="single-file">`). The EN/FR parity check does not apply to editions.
- Generic engine work for an edition happens on a feature branch, not on `main`.
- Sets (`src/engine/sets.js`, declared with `defineSet`; the mechanism is `framework/scene/sets.js`): the rocket around the engine, the cockpit, the classroom, mission control and the contract dial. A page whose stops carry `data-set` builds the sets it visits; changing set is a cut, unless a portal joins the two sets (`deck.config.mjs` `sets.portals`: the camera flies to a shot on one side, the sets swap behind the fade, it flies on from the other) or a turntable holds them (`sets.pairs`). `body[data-set-moving]` and the `deck:set-landed` event follow a pose or turntable in motion. Sets also hang parts on the engine (capability cartridges, the model bay), shown through `data-parts`. Leader names on the sets come from the edition's `leads`. An edition can add a light/dark switch (`.hud-theme`, `data-theme-default`). The keynote never sets `data-set`, so it builds no set; the rollout deck (`../programme-rollout`) uses them on every stop. `editions/<name>/private-terms.txt` lists the words that must never reach the public repo.

## Checking changes

- "Step N" in feedback is the `N / 16` counter (the `#N` hash), not a section id.
- `npm run gate` runs the build, `check:copy`, `check:private`, `check:docs`, `qa audit`, `qa scene`, `qa host` and `qa a11y` in order (`framework/docs/gates.md`). Both decks run every check at the framework's defaults (text floors, contrast in both themes, print). The audit covers every stop and beat of every page at 1920×1080, 1440×900, 1366×768 and 844×390 (phone: mobile, touch, landscape): card, HUD block, logo, footer items, plain labels and leader boxes must not overlap or leave the screen; console empty; label groups and tags must name parts of the built scene. `npm run qa -- audit --only 5,6.2` narrows it to the steps touched.
- The checks run in a headless Chrome of their own (`framework/qa/chrome.mjs`): never the window the user watches, never `Page.bringToFront` (it took the focus on macOS). For a manual look in Chrome (DevTools MCP), use a background tab of your own, never leave a viewport emulation on, close the tab when done. `npm run qa -- shots --out <dir>` writes screenshots and contact sheets of what changed.
- Refactors meant to be invisible: `npm run qa -- shots --out qa/baseline` before, `npm run gate -- --base qa/baseline` after (pixel diff, threshold 24).
- Check both pages when a change touches shared code or layout.
- Republish the phone preview Artifacts: EN (claude.ai/artifact/XHaZUr2ZKrjW6QfhwA2se4) from `dist/the-augmented-pdlc.html`, FR (claude.ai/artifact/5P77AThmimWJgVafH4BZXm) from `dist/the-augmented-pdlc.fr.html`.
