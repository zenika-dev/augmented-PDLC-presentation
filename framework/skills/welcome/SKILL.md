---
name: welcome
description: "A newcomer's first command in a repository of decks on the framework: checks the setup, explains the concepts in five minutes, lists the decks, then routes to what they want to do (tour a deck, change one, start a new one, work on the framework, private editions). Run /welcome after cloning."
disable-model-invocation: true
---

# Welcome

Someone just cloned this repository and typed `/welcome`. Orient them in a few short messages, from what the repository says today: read the files named here rather than reciting them, so nothing goes stale. Plain words, no jargon before it is explained; stop after each part if they have a question.

## 1. The setup

Check, and say only what is missing and the one command that fixes it:

- Node 22 or later (`node --version`).
- The dependencies: `node_modules/` at the repository's root (else `npm install` there, once).
- A Chrome or Chromium for the checks: `framework/qa/chrome.mjs` lists the places it looks.
- The decks build: `npm run build` at the root (it builds every deck, then `dist/index.html`). Report a failure as it is.

## 2. The concepts, in five minutes

Read `framework/docs/principles.md` and `framework/docs/contract.md`, then explain, with one example taken from a deck in `decks/`:

- **One scene, never slides.** Each deck is one three.js scene in clean line art; the audience watches it being assembled.
- **Stops and beats.** A stop (`<section class="stop">` in the deck's `index.html`) is a camera shot plus the scene's state; a beat (`<div class="beat">`) changes what is lit or named without moving the camera. The URL is the step: `#6`, `#6.2`.
- **Cards and the HUD.** Each stop has a card that explains itself to a reader who gets the deck by mail; the HUD shows where you are (section, part, progress, source, version).
- **Sets and portals** (when a deck has them): places of their own the camera cuts or flies to.
- **The single file.** The build inlines everything into one HTML file per language (in the root's `dist/`), which opens offline, on a phone too, and in SharePoint or Teams.
- **The gates.** `npm run gate` is the definition of done (`framework/docs/gates.md`): build, copy rules, privacy, docs, and browser checks of every step at four screen sizes, contrast included.

## 3. The decks

In a repository of decks, list each deck in `decks/`; in a deck's own repository (a `deck.config.mjs` at the root), that deck alone, and the `-w decks/<name>` below drops. For each, from its `package.json` (name, version, description) and its `deck.config.mjs` pages, with how to see it: open the file in `dist/` it builds, or `npm run dev -w decks/<name>` and the URL it prints. Mention `dist/index.html`, the front page of the hosting folder.

## 4. What do you want to do?

Ask, then follow the matching route:

- **Tour a deck.** Open its single file; read its `CLAUDE.md` (rules, vocabulary), `docs/model.md` (what the scene shows) and `docs/stop-map.md` (each step).
- **Change a deck.** Its `CLAUDE.md` first. Edit its `index.html` (and every translation: the build fails when they drift), `src/`, `css/deck.css`; then `npm run gate -w decks/<name>`. Raise the version in its `package.json` at each delivery.
- **Start a new deck.** `npm run new-deck -- decks/<name> --title "…"`, put the outline and the illustrations in its `inputs/` (`framework/docs/inputs.md`), then `/deck`: it runs the board-first process stage by stage (`framework/docs/process.md`) and stops at every sign-off.
- **Work on the framework.** `framework/` serves every deck: change it only for a need every deck has, and run every deck's gate (`npm run gate` at the root). Invisible refactors are proven by a pixel diff (`npm run qa -w decks/<name> -- shots --out <dir>`, then `-- diff --base <dir>`).
- **A private edition** (a deck retold for one client): it lives in `editions/<name>/`, never committed; read `decks/augmented-pdlc/docs/editions.md` and run `npm run check:private` before any push.

## 5. The working rules

Say them once, briefly:

- Commit only when the owner asks; never push a branch other than the one agreed.
- Client material (names, logos, documents) never enters the repository: `editions/` and `sources/` are ignored, and `npm run check:private` checks the tree and the unpushed commits.
- Browser checks run in the checks' own headless Chrome (`npm run qa`), never in the window the owner watches.
- Nothing invented: names, figures and facts come from a deck's model doc, its outline or the owner.
