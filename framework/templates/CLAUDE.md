# {{title}}

A line-art deck on the deck framework (`framework/`): one three.js scene, a camera shot and a state per step, cards that explain themselves, a single self-contained HTML file to mail.

## Start here

- New to the deck or the framework: `/welcome` checks the setup, explains the concepts and routes to the task.

- The deck is built from `inputs/outline.md` and the illustrations in `inputs/illustrations/` (format: `framework/docs/inputs.md`). When they are in place, the `/deck` skill runs the process stage by stage (`framework/docs/process.md`) and stops at every sign-off.
- Where the deck stands: `docs/progress.md` (stage, sign-offs, canvas link, open questions).
- The model of the deck (its parts, names, vocabulary, sources): `docs/model.md`, written at intake; it is the source of truth for every name and figure.

## Rules

- `framework/docs/principles.md`: the design rules every deck keeps (one model, never slides; clean line art; red means energy; self-explanatory cards; phones; the mailable file).
- Board-first: no part, shot or colour is coded before its board is approved on the Claude Design canvas.
- Nothing invented: facts, figures and names come from the outline, the model doc or the owner; a gap is an open question.
- `framework/` is shared code: change it only for a need every deck has, and say so.
- Commit only when the owner asks. Client material (logos, documents, names) never goes into the repository: `editions/` and `sources/` are ignored.

## Stack

- `index.html` holds the stops and beats; `src/scene.js` the scene (`defineScene`, `framework/docs/contract.md`); `src/lists.js` the HUD's acts and questions; `deck.config.mjs` the pages, HUD modules, copy rules and QA viewports.
- `css/fonts.css` (Nunito, inlined by the build), `css/deck.css` (the deck's own styles and theme tokens) on top of `framework/css/`.
- `npm run build` bundles `dist/deck.js` and the single file(s) in `dist/`; `npm run dev` watches and serves.

## Checking changes

- `npm run gate` is the definition of done (`framework/docs/gates.md`): build, copy, privacy, docs, and the browser audit of every stop and beat at four viewports.
- Browser checks run in the QA harness's own headless Chrome (`npm run qa`), never in the user's browser window.
