# Launch the AI Native Factory

How to roll out an AI-for-PDLC transformation programme: three phases as rocket stages, four pillars, the cockpit for measure, the contract dial for delegation, the classroom and mission control. It runs on the augmented PDLC keynote's engine and sets (`../augmented-pdlc`).

## View it

Open `dist/aixpdlc-programme-rollout.html` (English) or `dist/aixpdlc-programme-rollout.fr.html` (French), at the repository's root, in Chrome or Safari, on a computer or a phone. The file is self-contained and works offline.

## Build it

In this folder, or from the root with `-w decks/programme-rollout`:

```sh
npm run dev            # watch and serve (the URL it prints)
npm run build          # dist/deck.js here, the single files in the repository's dist/
npm run gate           # every check below, in order
npm run check:copy     # one red word per title, title case, no dash separators, sourced figures
npm run check:private  # nothing from a client edition in the repository or the unpushed commits
npm run check:docs     # generated references current, paths in the docs real
npm run docs           # rewrite the generated attribute reference
npm run qa audit       # every stop and beat at four viewports, in a headless Chrome of its own
npm run qa host        # each single file as SharePoint and Teams previews show it (sandboxed frame, strict policy)
```

`framework/docs/gates.md` says what each check holds and how to read its report. The version is `package.json`'s.

© ZENIKA 2026 · All Rights Reserved
