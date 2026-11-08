# The Augmented PDLC

Zenika's point of view on AI across the Product Delivery Life Cycle, as an interactive keynote for executive committees. One three.js engine is assembled and run step by step: the delivery wheel, the Context Nexus, thirteen platform layers, the roles that own them and the measures that prove progress.

## View it

Open `dist/the-augmented-pdlc.html` (English) or `dist/the-augmented-pdlc.fr.html` (French) in Chrome or Safari, on a computer or a phone. The file is self-contained and works offline.

Arrow keys, space, a swipe or a tap on either half of the screen move through the steps. The URL keeps the step: `#6` is step 6, `#6.2` its second beat.

## Build it

```sh
npm install
npm run dev            # watch and serve on :8080
npm run build          # dist/deck.js and the single files dist/the-augmented-pdlc.html and .fr.html
npm run gate           # every check below, in order
npm run check:copy     # one red word per title, title case, no dash separators, sourced figures
npm run check:private  # nothing from a client edition in the tree or the unpushed commits
npm run check:docs     # generated references current, paths in the docs real
npm run docs           # rewrite the generated attribute references
npm run qa audit       # every stop and beat at four viewports, in a headless Chrome of its own
npm run qa scene       # three.js structure, draw calls and triangles per stop, frame times, leaks
npm run qa host        # each single file as SharePoint and Teams previews show it (sandboxed frame, strict policy)
```

For a new deck (`framework/docs/process.md`):

```sh
npm run new-deck -- decks/my-deck --title "My Deck"   # from the root: a deck package of this repository
npm run new-deck -- ../my-deck --title "My Deck"      # from the root: a repository of its own
npm run outline        # parse and check inputs/outline.md
npm run boards         # board files for the Claude Design canvas (draft | renders | asset)
npm run stops:draft    # the page's stops and the HUD lists, drafted from the outline
```

`framework/docs/gates.md` says what each check holds and how to read its report.

Edit `index.html`, `index.fr.html` (same stops, French text) and `src/`; `docs/model.md` describes the engine, `docs/attributes.md` its stop attributes, `inputs/outline.md` and `docs/stop-map.md` the steps as built, `docs/progress.md` where the deck stands.

## The framework

The deck runs on `framework/`: a content-agnostic core (the deck controller, the line-art renderer, leader names, cards, the HUD, sets and portals, the single-file build, the gates). The PDLC engine is its first scene (`src/scene.js`).

- `framework/docs/principles.md`: the design rules every deck keeps.
- `framework/docs/process.md`: from an outline and a few illustrations to a delivered deck, board-first.
- `framework/docs/inputs.md`: the outline and illustration formats.
- `framework/docs/contract.md`: what a deck provides (page, scene, config, theme) and the core's attributes.
- `framework/docs/gates.md`: the quality gates.
- `framework/skills/` and `framework/agents/`: the Claude Code skills for each stage (`/deck` runs them in order) and the agents they hand work to, linked into `.claude/`.
- `framework/starter/`: the smallest deck on the framework, and the template `npm run new-deck` copies.

© ZENIKA 2026 · All Rights Reserved
