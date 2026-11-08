# Zenika decks

Zenika's interactive line-art decks: one three.js scene per deck, a camera shot and a state per step, cards that explain themselves. Each deck builds into one self-contained HTML file per language that opens offline, on a computer or a phone.

| Deck | English | French |
|---|---|---|
| The augmented PDLC, an executive keynote | `dist/the-augmented-pdlc.html` | `dist/the-augmented-pdlc.fr.html` |
| Rolling out the programme: the augmented PDLC as a transformation programme | `dist/aixpdlc-programme-rollout.html` | `dist/aixpdlc-programme-rollout.fr.html` |

## Start here

Clone the repository, open Claude Code at its root and type `/welcome`: it checks the setup, explains the concepts in five minutes, lists the decks and takes you to what you want to do (`framework/skills/welcome/SKILL.md`).

## View the decks

Online: https://zenika-dev.github.io/augmented-PDLC-presentation/ (GitHub Pages, published from `dist/` on each push to `main`). Locally: open `dist/index.html`, or a deck's file directly; the download icon in front of each link saves the self-contained file. Arrow keys, space, a swipe or a tap on either half of the screen move through the steps. The URL keeps the step: `#6` is step 6, `#6.2` its second beat.

## Build it

Node 22 or later. `npm install` once, then:

- `npm run build`: every deck's bundle and single files (into `dist/`), then `npm run site`
- `npm run site`: `dist/index.html`, the hosting folder's front page, one entry per deck and a link per language
- `npm run gate`: every deck's quality gate (`framework/docs/gates.md`)
- `npm run check:private`: nothing from a private edition in the repository or the unpushed commits
- `npm run check:copy`: every deck's copy rules
- `npm run check:docs`: the framework's references and these docs, then every deck's
- `npm run new-deck`: a new deck from the framework's starter: `npm run new-deck -- decks/<name> --title "…"` makes a package of this repository, `-- ../<name>` a repository of its own

One deck: `npm run <script> -w decks/<name>`, or run it in the deck's folder (`decks/augmented-pdlc/README.md`).

## Layout

- `decks/<name>/`: one package per deck (its pages, scene in its `src`, styles, docs, version in `package.json`)
- `framework/`: the shared deck framework (`framework/docs/process.md` to start)
- `brand/zenika/`: the brand's fonts, monogram and guidelines
- `dist/`: the files to host or mail

© ZENIKA 2026 · All Rights Reserved
