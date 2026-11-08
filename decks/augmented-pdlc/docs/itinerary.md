# Plan — "AI × PDLC" executive keynote (impress.js 3D map, Zenika V3)

> **Superseded (2026-10-30).** This was the plan for the impress.js map. The deck is now a three.js engine: see `docs/model.md` (model and deck mechanics) and `docs/outline.md` (narrative). The vocabulary, sources and content rules below still hold; the map, build plan and file layout do not.

## Context
Prospective keynote for Comex / VP: where AI for IT stands, what lands in the next 6–18 months, and Zenika's convictions on embedding AI across the Product Delivery Life Cycle. Deliverable: interactive impress.js experience, Zenika V3 brand (`~/Downloads/zenika-slide-design-guidelines.md`, adapted from slides to a 3D map).

Decided: **English** · **~40 min, 36 viewpoints** · **no slides: one spread map, camera travels it; two 3D moments** · **offline + web-published** · **4 pillars** (Wheel, People, Layers, Nexus) · **anonymised sector references, no pricing, no commercial CTA**.

Sources: Context Nexus v0.3, Zenika's AI×SDLC framework and delivery model, anonymised client work, aixsdlc.zenika.com, cnexus.fr.

**Title:** « The augmented PDLC » — subtitle « What's real, what's coming, what to decide ».
**Iteration 1 = walking skeleton** (sequence steps 0–1 below). Brand assets: user drops in `assets/source/`; placeholders until then.

## Canonical vocabulary
- Wheel: **Discover · Design · Develop · Deploy · Deepen · Drop**; phase gates **G1 Ready to Spec · G2 Ready to Build · G3 Ready to Release · G4 Released and Observable · G5 Opportunity or Retire · G6 Retirement Scoped**. No programme gates, no TOM guardrail "G" labels.
- Artefact chain: Business Intent Spec → Solution Design Spec → Code + Test Specs → Runtime Specs → Opportunity Spec → Retirement Spec.
- Nexus registers: **Knowledge · Intent · Contracts · Operations**.
- Layers: **13 layers L0–L12 in 5 domains** Discover · Build · Platform · Contextualise · Measure (one chip colour per domain, fixed).
- Delegation: Human · AI-assisted · AI-executed · AI-autonomous + never delegated.
- Figures: only Faros AI 2026, DORA 2025, McKinsey Nov 2025 (re-verify links). Zenika estimates labelled. No unsourced site/TOM numbers.

## Readability rules (the fix)
1. **Everything opaque.** No region fading, no blur, no translucent ghosts, no `is-above` logic. Remove those rules from `css/map.css`, `css/annotations.css`, `js/deck.js`.
2. **One slot per annotation.** Annotations are part of the map, always visible, never overlapping. Each sits in its own empty area next to the element it explains.
3. **Nothing between camera and target.** Surface viewpoints look straight down (rotate-z allowed, no tilt). 3D is used in exactly two places — layer swap and inheritance unfold — framed so no object crosses the camera.
4. **3D structures appear only when needed.** Layer pile (below) is hidden under the opaque wheel ground from above; inheritance planes (above the centre) are collapsed (`opacity 0`, `translateZ 0`) and unfold only on their viewpoints via a body flag.
5. **Scale for distance, not tricks.** Wide views use a bigger `data-scale`; text on panels is authored for the viewpoint that reads it. Overview labels are authored large on purpose.

## The map (top view, world px, one plane z = 0)

```
  OPEN SPACE (west)            THE WHEEL (centre 0,0)                       HORIZON / CLOSE (east)
  x ≈ -16000                   r 0–2400   Nexus disc: 4 quadrants + flows
  opening signals              r 2600–6000  6 phase sectors (annulus),     decisions, links
  pan east → map               Idea card per sector, gate on each boundary  answer pins at overview
                               r 6000–7600  people band: hats, delegation arc
                               horizon panels just outside each region
                                       │
            below (z < 0)  ── 13 layer slabs, shown as a cross-section wall under the south rim
            above (z > 0)  ── BU and Org Nexus planes over the centre, collapsed until unfolded
```

- **Wheel**: opaque light ground disc (r 7600). Phases clockwise from top: Discover · Design · Develop · Deploy · Deepen · Drop. Gates G1–G6 as markers on the phase boundaries (r 6000). Idea path ring at r 4300 with one artefact card per sector (Business Intent Spec → … → Retirement Spec), each card sized for its own stop.
- **People band** (r 6000–7600 and just outside): four hats around the team, Decision Guarantor at gates, delegation scale as an arc spanning Develop → Deploy, roles panel outside east rim.
- **Layers — "3D swap"**: the pile is a cross-section wall hanging under the south rim (vertical plane, `rotate-x 90`, z −600 to −8000). 13 slabs top to bottom, each: layer name, domain chip, what it hosts, 6 activation dots (one per phase). Camera swaps from top-down to horizontal (`rotate-x` on the viewpoint) and looks at the wall; the wheel becomes a thin line above. Theme dark during the swap (underground).
- **Nexus** (centre, r ≤ 2400): red-gradient disc, 4 quadrants Knowledge · Intent · Contracts · Operations, circular flow K → I → C → O → K, feedback arrows from Develop (test), Deploy (run), Deepen (discovery) into registers.
- **Inheritance unfold**: BU plane (z +1800) and Org plane (z +3600) above the centre, each with its own 4 quadrants; descending arrows; camera tilts (`rotate-x` ≈ 55) from south-west to see the column. Collapsed outside these viewpoints.
- **Horizon panels**: one opaque "Now → Next" panel per region, outside its edge (wheel: north-east, people: east, layers: beside the wall, Nexus: inside the disc's north rim or beside the column).
- **Opening** in open space west of the map; title viewpoint far west with the map visible small on the horizon; camera pans east onto the map at v05.

## Itinerary (36 viewpoints, ~40 min)

**Opening — open space west**
1. Title · 2. Punchline (dark) · 3. Acceleration whiplash · 4. Value gap · 5. Pan east: the constraint moved, landed on tech leads

**Pillar 1 — The wheel (surface, top-down)**
6. Landmark over the wheel (blue band)
7. Whole wheel: six phases, one loop
8–13. **Follow the Idea, one stop per phase**: artefact card + its exit gate. Stop 8 Discover ● feed · stop 10 Develop: gate explained (machine verifies, named human decides, traced; Release ≠ Activation) ● measure
14. Horizon: Now → Next A · B · C

**Pillar 2 — People (rim band)**
15. Landmark (sunset band, east rim)
16. Lines blur: same team, new hats
17. Tech-lead bottleneck (≈ 0.7 FTE, Zenika estimate)
18. Delegation arc along the rim ● govern
19. Roles: 4 hats + 4 shared roles
20. Horizon: D · E · F

**Pillar 3 — Layers (3D swap to the cross-section, dark)**
21. Swap: camera turns to face the wall under the south rim (violet band)
22. 13 layers, 5 domains, activation per phase
23. Foundation slabs (L3, L8, L9, L10, L11): instruct · forbid · block · prove ● harness ● secure
24. L11 badge ● identity
25. L3 + L7: the bill changes shape ● tokens
26. L7: pay for outcomes
27. Horizon: G · H · I · J

**Pillar 4 — Nexus (back to top-down, centre)**
28. Landmark (red), camera swaps back up and lands on the centre
29. Quadrants + flow K → I → C → O ● feed
30. Feedback loops from the wheel (test, run, discovery)
31. Inheritance unfold: tilt, Org and BU planes rise above Team ● govern
32. Horizon: K · L

**Close**
33. Proving it (beside Deepen / G5) ● measure
34. Overview: whole map top-down, 7 answer pins (authored large)
35. Three decisions + « and on Monday » (open space east)
36. Links

Compass keys (feed 8 · 29, govern 18 · 31, harness/secure 23, identity 24, tokens 25 · 26, measure 10 · 33).

## Build plan
```
aixsdlc-presentation/
  index.html          # HUD + impress root; map elements + viewpoint steps
  css/tokens.css      # brand tokens (guidelines §1) as :root vars, depth themes
  css/map.css         # surface / underground / core, wheel, strata, conduits, ghost layer
  css/annotations.css # pill, card, chip, numbered circle, row card as map labels
  css/hud.css         # logo, kicker, compass, source bar, counter
  js/impress.js       # vendored impress.js 2.x (API via Context7 first)
  js/deck.js          # init, depth theme + compass + HUD source on impress:stepenter, reduced-motion
  fonts/nunito/*.woff2
  assets/             # Z monogram, pictogram texture (pymupdf extraction, -I, scratchpad)
  content/outline.md  # itinerary + speaker notes
```
- Assets (user drops in `assets/source/`, SVG preferred):
  - Needed: Z monogram, Zenika wordmark, pictogram texture → fallback: pymupdf extraction from template PDFs / plain gradient.
  - Useful references: PDLC wheel, 13-layer stack, Nexus diagram (cnexus.fr), Zenika icon library → fallback: redraw from text; no generated icons (text-only).
  - Optional: V3 Storyset illustrations, demo recording (if cleared).
  - Not needed: Nunito (Google Fonts, self-hosted), client/vendor logos, photos.
- Map geometry first: place wheel, rim, strata, core as positioned elements/SVG in one coordinate system; then author viewpoints (`data-x/y/z/rotate-x/y/z/scale`) against it. Prototype the camera path with placeholders before writing copy.
- Map objects that are not viewpoints: non-step elements inside impress canvas (always rendered, visible from any viewpoint).
- Offline: all vendored, relative paths, works on `file://`. Web: claude.ai Artifact (multi-file `files` map).
- Before build: public sources for Now → Next signals A–L; drop any without one.

## Implementation sequence
Repo: git initialised on `main`, no commits; project skills in `.claude/skills` → `.agents/skills` (frontend-design, frontend-ui-engineering, browser-testing-with-devtools, git-workflow-and-versioning, code-review-and-quality, pdf, planning-and-task-breakdown, idea-refine). Use them at matching phases.

0. **Repo setup** — `.gitignore` (OS files, scratch, `assets/source/*.pdf`, never commit source documents); `CLAUDE.md` (vocabulary, brand rules, map conventions, confidentiality rules); `docs/brand-guidelines.md` (copy of Zenika guidelines); `docs/itinerary.md` (this outline). Initial commit on `main`, then branch `feat/map-skeleton`.
1. **Walking skeleton** — vendored impress.js + Nunito, tokens, HUD (logo, kicker, compass, source bar, counter), depth themes, map geometry with placeholder shapes (wheel, rim, strata, core, ghost layers), all 31 viewpoints with placeholder labels. Goal: camera path validated end-to-end in browser.
2. **Map visuals** — SVG wheel + gates + Idea path, strata 5 domains / 13 layers, Nexus core + conduits, ghost overlays; brand assets (provided or extracted).
3. **Copy** — annotations per viewpoint from itinerary, sources in `data-source`, speaker notes; public sources for Now → Next A–L.
4. **Polish** — substep fades, reduced-motion, performance, prose pass, publish Artifact.

## Verification
- chrome-devtools MCP: walk all 31 viewpoints at 1920×1080 and 1366×768, screenshot each; check text legible (≥ 24px effective), Nunito loaded, no console errors, HUD source/counter/compass update, depth theme switches, reduced-motion, offline `file://`, frame rate acceptable during dives (performance trace).
- Brand checks adapted from guidelines §9: one red word per annotation title, one pill max per viewpoint, sources in HUD, no red on dark.
- `prose-style-guardian-en` pass on all copy before publishing.
