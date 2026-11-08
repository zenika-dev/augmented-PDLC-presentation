# {{title}}

A deck on the deck framework (`framework/`).

## Make the deck

1. Put the outline in `inputs/outline.md` and the illustrations in `inputs/illustrations/` (`framework/docs/inputs.md`).
2. Start Claude Code here and run `/deck`: it follows `framework/docs/process.md`, stage by stage, and stops for your sign-off at each one.

## Commands

```sh
npm install
npm run dev            # watch and serve on :8080
npm run build          # dist/deck.js and the single file(s) in dist/
npm run outline        # parse and check inputs/outline.md (-- --json writes .deck/outline.json)
npm run boards         # write the boards for the Claude Design canvas (draft | renders | asset)
npm run stops:draft    # draft the page's stops and src/lists.js from the outline
npm run gate           # every check below, in order
npm run check:copy     # one red word per title, title case, no dash separators, sourced figures
npm run check:private  # nothing from a client edition in the tree or the unpushed commits
npm run check:docs     # generated references current, paths in the docs real
npm run docs           # rewrite the generated attribute references
npm run qa audit       # every stop and beat at four viewports, in a headless Chrome of its own
npm run qa scene       # three.js structure, draw calls and triangles per stop, frame times, leaks
npm run new-deck       # scaffold another deck repository from this one's framework
```

`framework/docs/gates.md` says what each check holds.
