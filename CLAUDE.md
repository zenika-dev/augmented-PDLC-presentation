# The augmented PDLC — executive keynote

Interactive three.js keynote for Comex / VP audiences: Zenika's point of view on AI across the Product Delivery Life Cycle. English, ~40 min. The audience watches one engine being assembled and run; by the end they can sketch it on a napkin.

- Engine model and deck mechanics: `docs/engine.md` (source of truth: change the model there first, then `src/data.js`)
- Narrative and voiceover: `docs/outline.md`
- Brand rules: `docs/brand-guidelines.md` (written for slides; adapted below)
- `docs/itinerary.md` is the superseded impress.js plan; its vocabulary and content rules still hold

## The engine, not slides

One 3D engine in clean line art on a pastel backdrop (anime.js look: white parts, thin outlines, red means energy). Each `<section class="stop">` in `index.html` is a camera shot plus the engine's state; `<div class="beat">` inside a stop is a substep that changes focus, labels, role lens or HUD without moving the camera. The header comment in `index.html` lists every `data-*` attribute.

- Four pillars, one cylinder: the wheel on top, 13 layers in 5 bands under it, the Context Nexus column through the centre, people as a role lens on the parts.
- Labels: leader lines (dot on the part, name on a tail, one light box), phase names on the lobes, engraved names on the napkin stop. No blur veils on labels; the HUD block has a light veil and leader names draw above it.
- HUD: Section › part breadcrumb over the seven pillars, one bar segment per pillar, the seven Comex questions lit where a step speaks to them, source and `n / N` counter. The URL is the counter: `#6`, `#6.3` (third beat).
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

## Stack

- `src/` ES modules, bundled by esbuild (`npm run build`, `npm run dev` to watch and serve) into `dist/deck.js`, an IIFE. `dist/` is committed so the deck opens offline from `file://` with no build.
- The file to mail is `dist/the-augmented-pdlc.html`: `npm run build` inlines the CSS, the bundle and the logo into a copy of `index.html`. Keep editing `index.html`; never link a new external file without checking the build's inline step covers it.
- Phones (coarse pointer, ≤600px in one dimension): font floors and the card minimum width off (`--fl`), HUD questions hidden, safe-area insets, fullscreen on the first touch, a rotate overlay in portrait. Without scripts (mail previewers) `css/fallback.css` shows the cards as a scrolling page.
  - `data.js` (phases, gates, bands, roles, sections, questions), `geometry.js`, `shots.js` (named camera shots)
  - `engine/` builds the parts (`wheel`, `nexus`, `bands`, `layers`) and `index.js` exposes the engine's state and lenses
  - `render/lineart.js`: the line-art renderer (G-buffer then a full-screen composite)
  - `parts.js` (meshes, focus fades, role lens, energy pulse), `labels.js` (CSS2D/CSS3D labels) and `leaders.js` (the leader-line layout)
  - `stops.js` reads stops and beats from `index.html`; `hud.js`, `cards.js`, `input.js` (keys, touch, `#n.b` hash)
  - `main.js` wires them: renderers, the deck controller (`go`, beats) and the frame loop, which only draws while something moves
- `css/tokens.css` (brand tokens), `css/engine.css` (labels, cards), `css/hud.css`. Nunito is vendored in `fonts/`.
- Check changes in Chrome (DevTools MCP) after `npm run build`: reload ignoring cache, screenshot, console empty. `window.deck` exposes `go`, `next`, `previous` for headless checks.
