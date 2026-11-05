# Client editions

A client edition is the deck retold for one client: its own stops, words, theme and logo, on our engine. It lives in `editions/<name>/`, which git ignores: it is never committed or pushed, and client names never enter `src/`, `css/` or `docs/`.

## What an edition holds

- `index.html`: the stops, like `index.html` at the root, plus the edition block below. It links our CSS from `../../css/`, then its own `fonts.css` and `theme.css`, and loads `../../dist/deck.js`.
- `<meta name="single-file" content="<file>.html">`: `npm run build` writes the mailed file to `editions/<name>/dist/<file>.html`.
- `theme.css`: the client's palette and the role tokens (below).
- `private-terms.txt`: one word per line that must never reach the public repo; `npm run check:private` looks for them.

## The edition block

`<script type="application/json" id="edition">` in the page. `applyEdition` in `src/data.js` reads it before the engine is built. A list given as an array replaces ours; given as an object keyed by id, it patches ours item by item.

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

The build checks each stop's attributes against these lists (`scripts/lint-stops.mjs`): a shot, anchor, section, question, shape or set that names nothing fails the build. The French deck uses the same patch (`src/data.fr.js`).

## Theme

The components read role tokens (`css/tokens.css`, on `body`): `--ink`, `--ink-strong`, `--ink-muted`, `--emph` (the red word in titles), `--emph-small` (small red text, from `--red-text`), `--panel-*`, `--label-*`, `--lead-*`, `--hud-veil`, `--crumb`, `--bar-track`, `--bar-fill`, `--question-now`. Optional ones fall back to a role: `--card-fg`, `--ink-lit`, `--kicker`, `--sub`, `--card-num`. An edition sets them on `body` for both themes and on `body[data-theme="dark"]` for its dark theme, rather than restyling components. Our stylesheets sit in cascade layers (tokens, components, themes, fallback); the edition's `theme.css` stays outside them, so its rules win without heavier selectors. Phone rules use `html.phone`, which the page head sets. `css/dark.css` is the public decks' dark theme, written the same way.

The engine's line art reads `--art-*` (light) and `--art-dark-*` (dark) on `:root` (`src/render/lineart.js`). A body with `data-theme-default="dark"` opens dark; a `.hud-theme` button lets the viewer switch.

## Sets

A page whose stops carry `data-set` builds the sets (`src/engine/sets.js`): the rocket around the engine, the cockpit, the classroom, mission control and the contract dial. The header comment of `index.html` lists their attributes. Changing set is a cut, unless a portal (`PORTALS`) or a turntable (`PAIRS`) joins the two sets.

Generic engine work for an edition happens on a feature branch, never on `main` directly.
