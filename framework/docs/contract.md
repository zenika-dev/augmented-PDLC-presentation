# Contract: what a deck provides

The framework (`framework/`) runs any deck that provides five things: a page, a scene, a config, a theme and its lists. `framework/starter/` is the smallest deck that does; the PDLC deck (`src/`, `index.html`) is the full one.

```
deck.config.mjs        pages, outputs, HUD modules, sets' portals, copy rules, QA viewports
index.html             the stops and beats, the HUD markup, the stylesheets, the bundle
src/main.js            boot(scene, config): one call
src/scene.js           defineScene({...}): the parts, the state, the shots, the anchors, the lists
src/lists.js           the HUD's acts and questions (drafted from the outline), the names on the drawing
css/                   the deck's fonts (fonts.css) and its own components and theme (deck.css), on top of framework/css/
docs/attributes.md     the scene's attributes, generated (npm run docs)
docs/model.md          the model: parts, names, vocabulary, sources (stage 0)
docs/progress.md       where the deck stands in the process, the sign-offs, the canvas link
docs/boards.json       the board plan: each stop's shot, subjects, leader names, red word (stage 1)
inputs/                the outline and the illustrations (inputs.md)
editions/<name>/       client editions, never committed
```

## The page

- `<html lang>`: the language the core's words (`framework/core/ui-strings.js`) and the deck's patches follow.
- The head script that sets `html.js` and `html.phone` before the first paint (copy it from `index.html`).
- The stylesheets, in this order: the deck's fonts, `framework/css/tokens.css`, `framework/css/components.css`, the deck's own components, `framework/css/hud.css`, a theme (`framework/css/dark.css`), `framework/css/fallback.css`. The cascade layers are `tokens, components, themes, deck, fallback`: the deck's own theme goes in `deck`; an edition's theme sits outside them and wins.
- The backdrops, one per theme the page may show: `<div class="backdrop backdrop-light">`, `backdrop-dark`, `backdrop-core`, `backdrop-blueprint`; then `<div id="stage">`, `<div id="cards">`.
- `<div id="stops">` with one `<section class="stop" data-…>` per step, each holding one `.card` and optional `<div class="beat" data-…>` substeps. A beat shows the stop's attributes plus its own, never an earlier beat's: what beat 2 sets and beat 3 leaves out reverts to the stop's value on beat 3 (the stop lint warns; write the attribute on the beat, empty or with the stop's value, when the revert is meant). Card items take `data-beat="n"` (lit on beat n) or `data-from="n"` (shown from beat n on). A card that asks the HUD's questions in full holds `<ul data-list="questions"></ul>`: the build writes them in.
- The HUD markup (`.hud`: `.hud-theme`, `.hud-fullscreen`, `nav.hud-nav` with `.hud-crumb`, `ol.hud-acts`, `ul.hud-checklist`; `.hud-logo` with its image; `.hud-footer` with `.hud-source`, `.hud-version`, `.hud-counter`). The core removes the modules the config turns off. Leave `.hud-version` empty: the build writes the deck's `package.json` `version` there (`v0.2` for 0.2.0, `v0.2.1` for 0.2.1), and `check:docs` fails on a hand-written one; an edition's page may write its own.
- The reading version's footer, the line asking to turn a phone held upright (`.rotate`), then `<script src="dist/deck.js">`.

## The scene (`defineScene`, `framework/scene/scene.js`)

| Field | Required | What it is |
|---|---|---|
| `name` | yes | the scene's name |
| `create(threeScene, { buildSets })` | yes | builds the parts under one root and returns the engine (below). Call `buildSets(root)` once the parts exist, when the page visits sets |
| `defaults()` | yes | the state: a plain object of numbers (nested objects allowed), blended between stops |
| `stopState(data)` | yes | a stop's target state from its `data-*` attributes |
| `shots`, `defaultShot` | yes | named camera shots (`orbit(az, elev, dist, target, roll)` from `framework/scene/shots.js`) and the one a stop without `data-shot` gets |
| `lists()` | yes | `{ sections, questions, mention, names }`: what the HUD shows and the names on the drawing (`[{ id, text }]`), after the language and edition patches |
| `pageLists(lang, edition)` | for the build | the same lists for one page, in Node, plus any list the scene's lint names (copies: each page patches its own) |
| `camera({ sets })` | no | `{ fov, near, far }`; default 22°, 0.1, 300 |
| `roles` | no | tag → line-art role (`energy`, `soft`, `accent`, `ink`, `part`), first match wins, `"x:*"` matches a prefix |
| `shotKinds` | no | `{ kind: (id, layout) → shot }` for shots that take an id (`band:measure`) |
| `enter(stop, from, to, { forward })` | no | adjusts the target as a stop is entered (the PDLC's Idea only runs clockwise) |
| `beatState(to, shown, stop)` | no | the part of the state a beat changes, or null |
| `holdOnBeat` | no | state keys that keep their current value when a beat changes the state |
| `anchor(name, layout)` | no | the world point a card hangs from (`data-anchor`) |
| `pulseBand(id, layout)` | no | `[lo, hi]`: the height the energy wave may light (`data-pulse-band`) |
| `motion(engine)` | no | ambient motion: `{ tick(dt, stop, reduced) → still moving, adjust(state), after(state, now), reset() }` |
| `sets` | no | `{ defs: [defineSet(…)], shots, attach, leads(), defaultSet }` (below) |
| `schema` | no | the scene's attributes for the lint and the reference: `attributes(L)`, `shotKinds(L)`, `shotNames()`, `anchor(L)` |
| `debug` | no | fields added to `window.deck` |

**The engine** `create` returns: `root` (a `THREE.Group`), `state` (the current one), `set(state) → layout` (applies a state; the layout feeds anchors and shot kinds), optionally `layout(state) → layout` (the same layout without applying anything: the deck then stops calling `set` twice per step to read it), `focus(tags, t, context) → still fading`, `align(camera)`, `relayout()` (after the web font loads), `energize(tags)`, `charge(tags, lags)`, `labels(groups)`, `sets`. `framework/scene/parts.js` gives focus, energize and charge for any root (`focusTargets`, `applyFocus`, `energize`, `charge`), `framework/scene/labels.js` gives `showLabels`.

**Parts** are meshes from `parts.mesh(geometry, colour, tags)` (the kit builds on it). Tags drive focus (`data-focus`), the role lens (`data-energize`), the pulse (`data-pulse`) and the line-art role. **Names** are `labels.label(id, groups, className)` (plain) or `labels.leader(id, groups, className, note, noteGroup)` (a leader line; className `lead-callout` puts a hatched callout circle before the name), parented to the part they name; `data-labels` switches groups on. The id is a key of the `names` list, which spells the text (a language or an edition patches it, `check:copy` reads it); a leader keeps its id as the key `data-lead-at` pins. Every leader exists when the scene is built. **Baking** (`framework/scene/kit.js`): `merge(group, { byTags })` and `bake(group, { keep })` carry the names hung on a mesh to its baked mesh, and give `find(tag)`: the baked part carrying a tag. **A level that moves** (a liquid) is built once full and cut with `clipY(mesh, lo, hi)`: a state never builds geometry. **Annotations** come from `framework/scene/widgets.js`: `dimension(a, b, { offset })` (a dimension line with arrowheads and extension ticks, baked into one mesh) and `dashedArrow(points)` (a dashed path with a head; `userData.draw(t)` draws its first t, so a state key can run it).

## Sets (`defineSet`, `framework/scene/sets.js`)

A set is a place a stop visits (`data-set`): `{ name, build() → { group, parts, update(pose, lists), finish() }, pose: { key: { default, scale, list } }, points: { key: [parent, point, groups] } }`. Only the sets a page visits are built; a stop without `data-set` shows none (or `sets.defaultSet`, when the scene names one). A beat's `data-<key>` attributes set the pose; `data-parts` shows the set's parts. Leader names on a set come from the deck's `leads` (`{ key: name | [name, note] }`): no name, no leader. Portals and turntables are in `deck.config.mjs` `sets` (an edition may override them in its `"sets"`). While a pose or a turntable moves, `body[data-set-moving]` is set; `deck:set-landed` fires on `document` when it stops.

## The config (`deck.config.mjs`)

| Key | What it is |
|---|---|
| `scene`, `entry`, `bundle` | the scene module, the bundle's entry and output |
| `pages` | `[{ name, src, out, lang, parity }]`: each page, its single file, its language, and the page it translates (the parity check) |
| `editions` | the folder of client editions (gitignored) |
| `hud` | the HUD modules: `crumb`, `progress`, `questions`, `source`, `version`, `theme`, `fullscreen`; `false` turns one off |
| `leaders` | `{ enter: "draw" }`: leader names draw on (the dot, the line out to its elbow, then the name, one after another, once the camera has mostly arrived) instead of fading in; reduced motion shows them at once |
| `sets` | `{ portals: [{ sets, shots }], pairs: [{ sets, pivot }] }` |
| `themes` | extra page themes and their palette blend (0 paper, 1 blueprint); `light`, `dark`, `blueprint` are built in |
| `copy` | `{ banned: [{ pattern, why }], figures, smallWords }` for `check:copy` |
| `docs` | `{ attributes, ignore }`: where the scene's attribute reference goes, docs the path check skips |
| `qa` | `{ viewports, hud, minText, minTextPhone, editions, diffThreshold, scene: { drawCalls, triangles, frameMs, gapMs, dpr }, a11y: { viewports } \| false }` for the browser checks (`editions`: `{ minText, minTextPhone, a11y }` for the private editions' pages only, which may keep the layout they were delivered with; `scene`: the budgets of `qa scene`; `a11y: false`: a deck that has not adopted `qa a11y`) |
| `parityIgnore` | attributes a translation may change (default `data-crumb`) |

An edition's `#edition` block overrides `hud`, `leaders`, `sets` and the copy's title style (`"copy": { "titles": "sentence" }`), and patches the scene's lists (the PDLC repository's `docs/editions.md` lists its keys).

## The theme

Role tokens (`framework/css/tokens.css` lists them: `--ink`, `--panel-*`, `--lead-*`, `--hud-veil`, `--bar-*`, `--tile-*`…) and the line-art colours on `:root`: `--art-<key>` for paper, `--art-dark-<key>` for blueprint, keys `lo`, `hi`, `line`, `energy-lo`, `energy-hi`, `energy-line`, `soft-*`, `accent-*` (the old `--art-red-*` names still work), plus `--art-stipple`, `--art-dim-ink`, `--art-dim-alpha`.

- A deck writes its theme in `@layer deck`: the light one on `body:not([data-theme="dark"])`, so the reading version (no scripts: no theme on the body) and the printed page show it; the dark one on `body[data-theme="dark"]`, which sets `--fg-muted` too (the HUD's muted text).
- The energy colour outside the scene: `--energy` and `--grad-energy` (the bar, the crumb's dot, the lit tile's number).
- `--focus`: the keyboard focus ring (3:1 at least against the backdrop). `--halo`: the glow behind HUD text and engraved names, in the backdrop's colour.
- Tiles: `--tile-*` on the body; the tiles a beat does not light step back to `--tile-dim-bg`, `--tile-dim-border`, `--tile-dim-fg` (never opacity: their text keeps 4.5:1).
- `--fl-phone` (`:root`, 0.8px by default): the text floor's unit on a phone, so no text drops under the size a phone reads; 0px scales the phone as one picture.
- `.off-phone` on an element of a card: hidden in the deck on a phone, where the card cannot grow, and kept in the reading version and on wider screens. For text the scene already tells there (the names on the drawing), never for what the card alone says.

## The core's attributes

Generated from `framework/build/lint-stops.mjs` by `npm run docs`. The scene's own are in `docs/attributes.md`. "Beat": whether a beat may set it.

<!-- generated: attributes -->
| Attribute | Beat | Meaning |
|---|---|---|
| `data-shot` | yes | the camera shot: a name the scene (or a set) defines, or kind:id |
| `data-move` | yes | cut \| slow \| fast: how the camera gets here (default: a 1.6 s move; slow 2.6 s, fast 0.9 s, cut jumps) |
| `data-anchor` |  | where the card hangs: a point the scene names, or screen (fixed on screen) |
| `data-side` |  | left \| right \| center: the card's side of its anchor |
| `data-dock` |  | bottom: a screen card sits at the bottom instead of mid-height |
| `data-section` |  | section id: the breadcrumb's section and the bar segment it fills |
| `data-crumb` | yes | the part on screen, after the section in the breadcrumb |
| `data-answers` | yes | question ids this step speaks to (HUD questions module) |
| `data-source` |  | the source line in the footer: every figure on the card names its source here |
| `data-hud` | yes | bare (no top-left block) \| crumb (no questions) |
| `data-theme` |  | a page theme for this stop (blueprint: dark backdrop, white lines) |
| `data-set` |  | the set this stop visits (a cut, a portal or a turntable from the last one) |
| `data-labels` | yes | label groups on show |
| `data-focus` | yes | tags of the parts in focus; the rest fades |
| `data-context` | yes | tags of the parts that fade only a bit |
| `data-energize` | yes | tags of the parts drawn in the energy colour (role lens), their names too |
| `data-pulse` | yes | tags of the parts the energy wave runs through |
| `data-pulse-lag` | yes | tag=units,…: the wave reaches those parts later |
| `data-lead-side` | yes | left \| right: the side of every leader name |
| `data-lead-column` | yes | 0–1: with a side, the names stacked in one column at that screen x |
| `data-lead-drop` | yes | 0–1: free names try an elbow at that screen height first |
| `data-lead-at` | yes | key=x/y,…: that name's elbow at those fractions of the screen |
| `data-lead-at-phone` | yes | the same on phones |
| `data-beat` |  | on a card item: lit on beat n |
| `data-from` |  | on a card item: shown from beat n on |

HUD modules (`hud` in deck.config.mjs, an edition's `"hud"`): `crumb`, `progress`, `questions`, `source`, `version`, `theme`, `fullscreen`. Each shows unless set to `false`.
<!-- /generated -->

The URL is the counter: `#<n>` for step n, `#<n>.<b>` for its beat b (from 2).
