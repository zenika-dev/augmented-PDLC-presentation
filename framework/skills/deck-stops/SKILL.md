---
name: deck-stops
description: "Stage 3 of a deck: writes the page's stops and beats (index.html) from the outline, the board plan and the scene: shots, focus, labels, energy, card anchors, the red word. Use when adding, removing or changing stops or beats."
---

# Stage 3: stops and beats

Takes `.deck/outline.json`, `docs/boards.json`, the scene (its shots, tags, label groups, attributes in `docs/attributes.md`). Hands on `index.html` with every stop and beat, clean under the lint and the audit.

Reference: the core's attributes in `framework/docs/contract.md` (generated), the scene's in `docs/attributes.md` (generated). A stop is a camera shot plus the scene's state; a beat changes focus, labels, the energy lens or the HUD without moving the camera (it may change `data-shot` only when the board says so).

## Steps

1. **Draft.** `npm run stops:draft` writes the page's `<title>` from the outline and one `<section class="stop">` per outline stop (section, crumb, questions, source, one empty `.beat` then one per outline beat, the card with the outline's text, what the room sees as a comment) and the HUD lists in `src/lists.js`. On a page that already has stops it refuses; `-- --force` replaces them (only right after the starter's three).
2. **Fill each stop from its board** (`docs/boards.json`):
   - `data-shot`: the board's shot, by the name `src/scene.js` gives it; `data-move` from the board's `move` (`slow`, `fast`, `cut`) when it has one;
   - `data-labels`: the groups holding the board's leader names; `data-focus` / `data-context`: the parts in view, the rest fades;
   - the scene's own attributes for the state the board shows (`docs/attributes.md`);
   - `data-set` when the board is in another place;
   - the card: `data-anchor` (`screen`, or a point the scene names) and `data-side` (the board's `side`);
   - the title's red word: wrap the board's `red` in `<em>`, exactly one per title.
3. **Fill each beat** from the outline's beat line. A beat sees the stop plus its own attributes only, never the beat before: repeat on every later beat what should stay (`data-labels`, a state key), and write a revert explicitly (`data-energize=""`, or the stop's `data-shot`), else the lint warns. what changes (`data-energize` to light a part and its name, `data-focus`, `data-labels`, `data-pulse`) and the card item it reveals (`data-beat="n"` lights an item on beat n, `data-from="n"` shows it from beat n on). Remove the `<!-- beat … -->` and `<!-- sees … -->` comments once a stop is filled.
4. **Translations**: every other page (`index.<lang>.html`) gets the same stops, beats and attributes; only the prose and `data-crumb` differ (the build's parity check). Copy the structure now; the copy stage translates.
5. **Long decks**: hand one act per `stop-author` agent (its stops, their boards, the scene's shot names, tags and groups), then review their stops together for continuity: a camera that pulls back between acts rather than circling, labels that do not repeat what the card says.

## Checks, in order

1. `npm run build` (the stop lint: attributes, values, shot names, anchors, beats).
2. `npm run check:copy` (one red word per title, title case, sourced figures).
3. `npm run qa audit` at the four viewports: no overlap, nothing off screen, no unknown tag or label group, console empty. Fix the stop (a `data-lead-side`, a `data-side`, a shot) rather than the layout code.
4. A render round on the canvas when stops changed what the boards show.

## Exit

`npm run build` passes and `npm run qa audit` is clean at the four viewports.
