# Gates

`npm run gate` runs every check in order and stops at the first that fails. Each check also runs on its own. All of them read `deck.config.mjs`.

| Step | Command | Fails when |
|---|---|---|
| 1 | `npm run build` | a translated page drifts from its original (stops, beats and every element with `data-beat` or `data-from`; only prose, `alt`/`title`/`aria-label` and the attributes `parityIgnore` lists, `data-crumb` by default, may differ); a stop or beat attribute names nothing or carries a bad number, or is a `data-*` neither the core nor the scene reads (a typo: the stop lint); a local file is left un-inlined in a single file |
| 2 | `npm run check:copy` | a card title has no red word or more than one (`<em>`); an English title is not in title case, a French one starts in lower case; a dash separates two clauses (` — `); French lacks the narrow no-break space before `: ; ? !`; a banned variant appears (`copy.banned`); a figure (`copy.figures`) sits on a stop with no `data-source`; a dark theme sets a red text role; a name on the drawing (the scene's `names` list, as the page's language and edition patch it) holds a banned variant or a dash separator |
| 3 | `npm run check:private` | a file under `editions/` is tracked; a term from an edition's `private-terms.txt` is in the tracked tree or the unpushed commits; the bundle is a dev build |
| 4 | `npm run check:docs` | a generated attribute reference is stale (`npm run docs` rewrites it); a doc names a path that does not exist; an npm script is missing from the README or this page |
| 5 | `npm run qa audit` | at any viewport in `qa.viewports`, on any stop or beat: a card, label or leader box overlaps another or the HUD, or leaves the screen (letters engraved in 3D excepted); text in a card, the HUD, a label or a leader under the floor (`qa.minText`, 11 px by default; `qa.minTextPhone` on a phone, 9 px; 0 turns one off); the font did not load; the console logs an error or warning; a request leaves the file; a stop names a label group, a tag or a leader key (`data-lead-at`) the built scene does not have |
| 6 | `npm run qa scene` | the three.js structure breaks the contract or costs too much: a mesh has no tags, or is not drawn through `parts.mesh` (line art); a stop or beat renders more draw calls or triangles than `qa.scene` allows (default 400 and 4,000,000, every pass of the line-art renderer counted; the finding names the groups drawing the most meshes, where baking pays); a second walk through the deck leaves more geometries than the first (something rebuilt and not disposed) |
| 7 | `npm run qa host` | a single file does not run as SharePoint and Teams previews show it: in a sandboxed `about:srcdoc` frame (scripts on, no same origin, no full screen) under a strict policy (inline scripts and styles, `data:` images and fonts, nothing else). Any console error or blocked resource (an unguarded `localStorage`, an external image), a deck that does not start, or key presses that do not reach its next step fail it |
| 8 | `npm run qa a11y` | in every theme the viewer can pick (both, when the page has the switch), at the first viewport and the first phone: a text whose colour, opacity folded in, gives less than 4.5:1 (3:1 for large text) against the pixels really behind it, the drawing included (a text turned along an arc is read inside its own turned box), on 10% of them or more; an axe-core WCAG 2.2 A/AA rule fails (contrast is ours: axe cannot see the drawing); the reading version (scripts off) or the printed page (light theme, white paper) has a text under the same ratios; the reading version's colours differ from the light theme's; a phone held upright does not show the reading version with its line asking to turn the phone. A deck that has not adopted it sets `qa.a11y: false` (`--force` still runs it); `qa.editions` sets the floors and `a11y` for the private editions' pages only, which may keep the layout they were delivered with |
| 9 | `npm run gate -- --base <dir>` | a pixel moves by more than `qa.diffThreshold` against the baseline shots (refactors only) |

Warnings do not fail the gate: an attribute on a beat that only a stop reads, a beat leaving out what the beat before set (it reverts to the stop's value: repeat it, or write the revert), `data-answers` on a page whose HUD questions are off, a parent holding more than 40 meshes not baked (`bake(group, { keep })` or `merge(group, { byTags: true })`; many small unbaked groups, each under 40, show instead in a draw-call finding), a move whose frames take more than `qa.scene.frameMs` (default 20 ms) of main-thread time at the 95th percentile, or a move that drops more than 1 frame in 10 (3 at least) at `qa.scene.dpr` (2 by default), frames more than `qa.scene.gapMs` (25 ms) apart: GPU time shows there (headless timings vary with the machine's load).

## The browser checks (`npm run qa`)

`framework/qa/qa.mjs` drives a headless Chrome of its own: its own profile in a temp folder and its own port, so it never touches the Chrome you watch or the DevTools MCP profile. It never calls `Page.bringToFront`, which took the window focus on macOS; one page per browser and focus emulation keep it painting. At the start and the end of a run it reads the app in front, and warns if Chrome took the focus.

| Mode | Does |
|---|---|
| `npm run qa audit` | the audit above, on every built page (the config's pages and every edition's single file) |
| `npm run qa -- shots --out <dir>` | a PNG of every stop and beat (reduced motion, the pulse held), and a contact sheet per page and viewport (`<dir>/<page>/<viewport>/sheet.html`) |
| `npm run qa -- diff --base <dir>` | shots into `qa/out`, then a pixel diff against `<dir>`; each differing shot leaves a `.diff.png` beside it |
| `npm run qa walk` | `next()` through the whole deck with motion on: the console across camera moves, portals and turntables |
| `npm run qa scene` | once per page, at the first viewport and twice its pixel density: the scene's structure (meshes, materials, geometries, triangles), draw calls and triangles rendered at every stop and beat against the budgets, the main-thread time and the time between frames on screen of every move with motion on, the geometries left after a second walk; the numbers go in `report.json` (`scene`) and a one-line summary per page |
| `npm run qa a11y` | the accessibility check above; `--force` on a deck that set `qa.a11y: false` |

Options: `--page en,fr,<edition>`, `--vp 1920x1080,844x390p` (`p`: a phone in landscape), `--only 3,5.2` (steps), `--theme light|dark`, `--jobs 3`, `--gl metal|swiftshader` (SwiftShader times out past about a thousand draw calls), `--dpr 2` (shots at a phone's pixel density; the default 1 keeps shots comparable; `qa scene` runs at `qa.scene.dpr`), `--out <dir>`. Shots and reports go to `qa/out/` (`report.json`), which git ignores.

The deck exposes what the checks need on `window.deck`: `go(i, instant, beat)`, `next`, `previous`, `stops`, `holdPulse(r)` (freeze the energy wave: deterministic frames), `drawn()` (frames drawn: the loop at rest), `drawCalls()`, `vocabulary()` (the label groups, tags and leader keys the built scene holds), `inspect()` (the scene's structure, one frame's cost and the groups drawing the most meshes), `frameStats(on)` (the main-thread time of each frame drawn while on).

## By hand

- The prose-style-guardian pass (EN, FR) on the final copy.
- What `qa a11y` cannot judge: a toggle's name says its "on" state ("Dark theme", not "Light or dark theme"); a state shown by colour alone also changes weight or shape; the reading order of a card.
- A look at the contact sheets and at the walk.
- Republish the preview Artifacts, when the deck has any.
