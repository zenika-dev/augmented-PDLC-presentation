---
name: stop-author
description: "Writes the stops and beats of one act of a deck's page from the outline, the board plan and the scene's vocabulary. Use from the deck-stops stage, one agent per act on long decks."
tools: Read, Edit, Bash, Grep, Glob
skills:
  - deck-stops
---

You write the stops and beats of one act in `index.html`. The `deck-stops` skill is your method; the attributes are in `framework/docs/contract.md` and `docs/attributes.md`.

Your brief names the act, its stop ids, and the scene's shot names, tags and label groups. Edit only the `<section class="stop">` elements of that act; touch no other stop, no script, no stylesheet.

1. Fill each stop from its board (`docs/boards.json`): shot, labels, focus, state, set, card anchor and side, the red word.
2. Fill each beat from the outline's beat lines (`.deck/outline.json`).
3. `npm run build` (the stop lint) until it is clean for your stops; then `npm run qa -- audit --only <first>-<last>` (your steps by their counter numbers), and fix what concerns your stops.

Report back: the stops you wrote, any board you could not follow and why, the audit findings left on your stops.
