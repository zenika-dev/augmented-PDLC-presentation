# Client editions

A client edition is the deck retold for one client: its own stops, words, theme and logo, on our engine. It lives in `editions/<name>/`, which git ignores: it is never committed or pushed, and client names never enter `src/`, `css/` or `docs/`.

## What an edition holds

- `index.html`: the stops, like `index.html` at the root, plus the edition block below. It sits in the repository's `editions/<name>/` and runs on this deck: it links the framework's CSS from `../../framework/css/` and this deck's from `../../decks/augmented-pdlc/css/deck.css` (in the order of `framework/docs/contract.md`), then its own `fonts.css` and `theme.css`, and loads this deck's bundle, `../../decks/augmented-pdlc/dist/deck.js`. The keynote's build builds it (`deck.config.mjs` `editions`).
- `<meta name="single-file" content="<file>.html">`: `npm run build` writes the mailed file to `editions/<name>/dist/<file>.html`.
- `theme.css`: the client's palette and the role tokens (below).
- The footer's version: `<span class="hud-meta"><span class="hud-version" aria-hidden="true">v0.1</span><span class="hud-counter"></span></span>`, set by hand and raised at each delivery (the public decks take theirs from their `package.json`; a page that writes its own keeps it).
- `private-terms.txt`: one word per line that must never reach the public repo; `npm run check:private` looks for them.

## The edition block

`<script type="application/json" id="edition">` in the page. `applyEdition` in `src/lists.js` reads it before the engine is built (through `framework/data/lists.js`). A list given as an array replaces ours; given as an object keyed by id, it patches ours item by item. A patch that does not fit (a `bandOrder` missing a band) is reported in the console and skipped; the deck runs on.

| Key | Form | Effect |
|---|---|---|
| `mention` | string | The footer's copyright line |
| `sections` | array of `{ id, name }`, or `{ id: { name } }` | The breadcrumb's sections; `data-section` names them |
| `concerns` | array of `{ id, name, question }`, or patch by id | The HUD questions; `data-answers` names them |
| `shapes` | array of `{ name, label, angle, drop? }`, or patch by name | The Idea's shapes; `data-idea` names them |
| `phases`, `registers`, `roles`, `gates` | `{ id: { … } }` | Patches ours (names, checks, purposes) |
| `bands`, `layers` | `{ id: { … } }` | Patches the domains and layers, L11 (the spine) included |
| `bandOrder` | array of every band id | Restacks the bands, top first |
| `leads` | `{ key: name }` or `{ key: [name, note] }` | Names the parts on the sets (`POINTS` in `src/engine/sets.js`); a part without a name gets no leader |
| `zones` | array of `{ id, from, to, soft? }`, or patch by id | The contract dial's zones over the score, 0–100 (`ZONES` in `src/lists.js`; default: the four delegation levels). `soft` fills a zone; the last one is hatched once a limit keeps the needle out of it. Leaders name them by id in `leads` |
| `hud` | `{ module: false }` | Turns HUD modules off: `crumb`, `progress`, `questions`, `source`, `version`, `theme`, `fullscreen`. With `questions` off, the checklist and any `data-list="questions"` leave the page and `data-answers` only warns |
| `sets` | `{ portals, pairs }` | Replaces the config's portals or turntables (`deck.config.mjs` `sets`) |
| `copy` | `{ "titles": "sentence" \| "title" \| "off" }` | The title style `npm run check:copy` holds the edition to, when the client's wording sets its own |

The build checks each stop's attributes against these lists (`framework/build/lint-stops.mjs`, with the engine's rules in `src/schema.js`): a shot, anchor, section, question, shape or set that names nothing fails the build. `npm run qa audit` checks the label groups and tags against the built scene. The French deck uses the same patch (`src/lists.fr.js`).

## Theme

The components read role tokens (`framework/css/tokens.css`, on `body`): `--ink`, `--ink-strong`, `--ink-muted`, `--emph` (the red word in titles), `--emph-small` (small red text, from `--red-text`), `--panel-*`, `--label-*`, `--lead-*`, `--hud-veil`, `--crumb`, `--bar-track`, `--bar-fill`, `--question-now`. Optional ones fall back to a role: `--card-fg`, `--ink-lit`, `--kicker`, `--sub`, `--card-num`, `--lead-energy-note`. An edition sets them on `body` for both themes and on `body[data-theme="dark"]` for its dark theme, rather than restyling components. Our stylesheets sit in cascade layers (tokens, components, themes, fallback); the edition's `theme.css` stays outside them, so its rules win without heavier selectors. Phone rules use `html.phone`, which the page head sets. `framework/css/dark.css` is the public decks' dark theme, written the same way.

The engine's line art reads `--art-*` (light) and `--art-dark-*` (dark) on `:root` (`framework/render/lineart.js`). The energy colour's keys are `--art-energy-lo`, `--art-energy-hi`, `--art-energy-line`; the older `--art-red-*` names still work. A body with `data-theme-default="dark"` opens dark; a `.hud-theme` button lets the viewer switch.

## Sets

A page whose stops carry `data-set` builds the sets it visits, and only those (`src/engine/sets.js` declares them with `defineSet`; the mechanism is `framework/scene/sets.js`): the rocket around the engine, the cockpit, the classroom, mission control and the contract dial. `docs/attributes.md` lists their attributes. Changing set is a cut, unless a portal or a turntable joins the two sets (`deck.config.mjs` `sets`, or the edition's `"sets"`). While a pose or a turntable moves, `body[data-set-moving]` is set and `deck:set-landed` fires on `document` when it stops: a card can wait on it instead of a fixed delay.

Generic engine work for an edition happens on a feature branch, never on `main` directly.
