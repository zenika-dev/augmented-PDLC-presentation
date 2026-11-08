---
name: deck
description: "Builds or continues a line-art deck on the framework from inputs/ (an outline.md and a few illustrations), stage by stage, stopping at every owner sign-off. Use when the user asks to build, start, continue or resume a deck, or says the inputs are ready."
argument-hint: "[stage number to jump to]"
---

# Build a deck, stage by stage

The process is `framework/docs/process.md`; the rules every deck keeps are `framework/docs/principles.md`; the inputs' format is `framework/docs/inputs.md`; what the code must provide is `framework/docs/contract.md`; the checks are `framework/docs/gates.md`. Read process.md and principles.md before the first stage of a session.

## Where the deck stands

`docs/progress.md` records the stage, each sign-off with its date, the canvas link and the open questions. Read it first. No file (a deck not made with `npm run new-deck`): copy `framework/templates/progress.md` and start at stage 0. `$ARGUMENTS` names a stage: jump there only if every earlier stage is signed off, else say which sign-off is missing.

## The stages

| Stage | Skill | Agents it may hand work to | Ends with |
|---|---|---|---|
| 0 Intake | `deck-intake` | | owner signs the outcome sentence, parts list, stop map |
| 1 Boards | `deck-boards` | | owner approves the boards on the canvas |
| 2 Scene | `deck-scene` | `scene-modeller` (one per part or set, in parallel) | owner approves the rendered boards |
| 3 Stops | `deck-stops` | `stop-author` (one per act) | build and `qa audit` clean |
| 4 Copy | `deck-copy` | `copywriter` (one per language) | owner approves the copy |
| 5 Theme | `deck-theme` | | page matches the boards |
| 6–7 Gate, delivery | `deck-gate` | `qa-auditor` | gate passes; owner has the file |

Run one stage at a time: invoke its skill, do its work, update `docs/progress.md`, then stop and ask for the sign-off the stage ends with. Never start the next stage on your own approval. A sign-off is the owner's words in this conversation or a comment on the canvas, recorded in `docs/progress.md` with the date.

## Rules that hold in every stage

- **Nothing invented.** Facts, figures, names and rules come from the outline, the model doc or the owner. A gap becomes an open question in `docs/progress.md` (`⟦? …⟧` in the outline), never a guess.
- **Board-first.** No part, shot or colour is coded before its board is approved (stage 1).
- **One model.** Every stop is a camera shot and a state of the same scene; no slides, no flat diagrams laid over it.
- **The gates are the definition of done.** `npm run build`, `npm run check:copy`, `npm run qa audit` and finally `npm run gate`; read the report, fix, run again.
- **Browser checks run in the QA harness's own headless Chrome** (`npm run qa`), never in the user's browser window.
- **Commit only when the owner asks.** Client material stays out of the repository (`inputs.md`).
