# Deck starter

The smallest deck on the framework: a toy scene (a base plate, a core that lifts out of it, a test bench to visit as a set), three stops, one beat, the HUD with two questions. It fills every required field of the contract (`../docs/contract.md`) and passes the gate. `inputs/` holds the outline and the illustration it was made from, `docs/boards.json` its board plan: a small example of each stage's input.

## Start a new deck from it

From the repository that holds the framework: `npm run new-deck -- <dir> --title "Deck title"`. Inside that repository (`decks/<name>`) it writes a package of it; elsewhere it writes a repository of its own with this deck at its root, its paths pointing into `framework/`, and the stage skills and agents for Claude Code (`../docs/process.md`, A new deck). Then put the outline and the illustrations in its `inputs/` and run `/deck`.

## Run it here

```sh
npm run build          # dist/starter.html
npm run dev            # watch and serve
npm run gate           # every check, in order (../docs/gates.md)
npm run check:copy
npm run check:private
npm run check:docs
npm run docs           # rewrite docs/attributes.md
npm run qa audit
npm run outline        # parse inputs/outline.md
npm run stops:draft    # draft stops from it (-- --force replaces the three here)
npm run boards         # write board files for the canvas (draft | renders | asset)
npm run new-deck       # scaffold a new deck repository
```
