# Process: from an outline to a delivered deck

The path a new deck follows, from the inputs to the mailed file. Each stage lists what it takes, what it hands on, who signs it off and what must hold before the next stage starts. The deck owner signs every review; the agent builds and checks.

Inputs: `inputs/outline.md` and the illustrations in `inputs/illustrations/` (formats in `inputs.md`). Rules: `principles.md`. The contract the code fills: `contract.md`. The checks: `gates.md`.

In Claude Code, the `/deck` skill runs this process: it reads `docs/progress.md`, invokes the stage's skill, and stops at each sign-off (Tools, skills and agents, below).

## 0. Intake

- **Takes:** the outline and the illustrations.
- **Does:**
  - Check the outline: `npm run outline -- --json` parses it into `.deck/outline.json` (the stop map's raw form) and lists what is missing.
  - Write the outcome sentence (the napkin) at the top of the model doc.
  - Write the model doc, `docs/model.md`: the parts, their names, what each one means, the vocabulary and its banned variants, the sources the figures may come from.
  - Map each outline stop to the stroke it adds to the napkin. Flag stops that add none.
  - Read each illustration as a subject reference or a style reference (`inputs.md`). Note what each one fixes: proportions, part count, an angle, a look.
- **Hands on:** the model doc, the stop map (`docs/stop-map.md`), the vocabulary and sources in `deck.config.mjs` (`copy`), `docs/progress.md`.
- **Sign-off:** the deck owner approves the outcome sentence, the parts list and the stop map.
- **Exit:** every outline stop maps to a stroke or is cut; every figure in the outline has a source on the allowed list.

## 1. Boards on the Claude Design canvas

No visual asset goes into code before the boards are approved.

- **Takes:** the model doc, the stop map, the illustrations.
- **Does:**
  - Create a Design artifact (the canvas) for the deck.
  - Round 1 composes one board per stop from the outline and the reference illustrations: the camera shot, the parts on screen, the labels and leader names, the card with its title and text, the HUD. The decisions go in the board plan, `docs/boards.json`; `npm run boards -- draft` writes the canvas's files from it and the outline.
  - Review rounds follow: the owner comments on the canvas, the agent answers with the next round (R1, R2…), each board keeping its number.
  - Once parts exist in code (stage 2), boards switch to renders from the deck's own modules (`npm run boards -- renders`), so the canvas and the page show the same thing.
- **Hands on:** the approved boards and the board plan; the canvas link and round in `docs/progress.md`.
- **Sign-off:** the deck owner approves the boards.
- **Exit:** every stop has an approved board; the look matches `principles.md` (line art, energy colour, no figures).

## 2. Scene modelling

- **Takes:** the approved boards, the model doc.
- **Does:**
  - Model each part procedurally with the kit (`framework/scene/kit.js`: box, cylinder, plate, pipe, bolts, screen, `merge`, `bake`), the widgets (`framework/scene/widgets.js`) and `framework/scene/math.js` (`polar`, `extrude`).
  - Tag every mesh (`parts.mesh(geometry, colour, tags)`): tags drive focus, the role lens, the pulse and the line-art role (`scene.roles`).
  - Hang a leader name on each part a stop names (`labels.leader`), in a label group.
  - Fill the scene contract (`contract.md`): the state a stop sets, the shots, the card anchors, the lists.
  - Render boards from the modules and update the canvas.
- **Hands on:** `src/scene.js` and its modules.
- **Sign-off:** the deck owner approves the rendered boards.
- **Exit:** `npm run build` passes; `npm run qa audit` finds no unknown tag or label group.

## 3. Stops and beats

- **Takes:** the scene, the stop map, the boards.
- **Does:** `npm run stops:draft` writes one `<section class="stop">` per outline stop and a `<div class="beat">` per substep in the page, the cards holding the outline's text as a first draft, and the HUD's lists in `src/lists.js`. Then each stop gets its shot, focus, labels, state and red word from its board, with the attributes in `contract.md` and `docs/attributes.md`.
- **Hands on:** `index.html`.
- **Exit:** `npm run build` passes (the stop lint); `npm run qa audit` is clean at the four viewports.

## 4. Copy

- **Takes:** the cards' first draft.
- **Does:**
  - Rewrite every card so it explains itself to a reader who gets the deck by mail (prose-style-guardian EN).
  - Propose title and wording changes as a now → proposed table with one-line reasons; apply only on the owner's go.
  - Translate (`index.<lang>.html`): the same stops, beats and attributes; only the prose and `data-crumb` change (prose-style-guardian FR for French). Names from the model stay as the model writes them.
- **Sign-off:** the deck owner approves the copy.
- **Exit:** `npm run check:copy` passes; the build's parity check passes.

## 5. Theme and brand

- **Does:** set the brand through the role tokens (`framework/css/tokens.css` on `body` and `body[data-theme="dark"]`) and the line-art colours (`--art-*`, `--art-dark-*`); the deck's own components go in its stylesheet (`css/deck.css`).
- **Exit:** `npm run check:copy` passes (no red text on dark); the boards and the page match.

## 6. Gates

- **Does:** `npm run gate`. For a change meant to be invisible (a refactor), take a baseline first (`npm run qa -- shots --out qa/baseline`) and run `npm run gate -- --base qa/baseline`.
- **Then, by hand:** the prose-style-guardian pass on the final copy; a walk through the deck with motion on (`npm run qa walk`) and a look at the contact sheets (`qa/out/<page>/<viewport>/sheet.html`).
- **Exit:** the gate passes.

## 7. Delivery

- **Does:** raise the version in the footer (`.hud-version`); build; mail `dist/<deck>.html`; republish the preview Artifacts if the deck has any.
- **Exit:** the owner has the file.

## Tools, skills and agents

The skills live in `framework/skills/`, the agents in `framework/agents/`; a deck links both into `.claude/` so Claude Code finds them.

| Stage | Command | Skill | Agent (worker, in parallel where it says) |
|---|---|---|---|
| all | | `deck`: reads `docs/progress.md`, runs the next stage, stops at its sign-off | |
| 0 Intake | `npm run outline` | `deck-intake` | |
| 1 Boards | `npm run boards` (`draft`, `renders`, `asset`) | `deck-boards` | |
| 2 Scene | `npm run qa -- shots` | `deck-scene` | `scene-modeller`: one part or set each |
| 3 Stops | `npm run stops:draft` | `deck-stops` | `stop-author`: one act each |
| 4 Copy | `npm run check:copy` | `deck-copy` | `copywriter`: one language each |
| 5 Theme | `npm run qa -- audit --theme dark` | `deck-theme` | |
| 6–7 Gate, delivery | `npm run gate` | `deck-gate` | `qa-auditor`: reads the report, proposes fixes, edits nothing |

The boards are the main session's work: the canvas is published with the Artifact tool and the owner reviews it there.

## A new deck

`npm run new-deck -- <dir> --title "Deck title"`. Inside a repository of decks (`decks/<name>`, the repository's `package.json` listing workspaces), it writes a package of that repository: the starter deck with its paths pointing into `../../framework/` and the brand's fonts, its single files written to the root's `dist/`, the docs and `inputs/` below; it installs and builds, without git. Anywhere else it writes a repository of its own: `framework/`, the starter deck at its root with its paths pointing into `framework/`, `css/fonts.css` and `css/deck.css`, the skills and agents linked into `.claude/`, the three.js skills, a `CLAUDE.md` that points at this process, `docs/progress.md` and `docs/model.md` to fill, an empty `inputs/`. It installs, builds and makes one commit; it pushes nothing. The new repository passes its gate as it is.
