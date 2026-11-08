---
name: deck-copy
description: "Stage 4 of a deck: rewrites every card so it explains itself to a reader who gets the deck by mail, proposes title and wording changes for the owner's go, and translates the page into the deck's other languages. Use for any wording, title or translation work on the deck's cards, crumbs or HUD lists."
---

# Stage 4: copy

Takes the cards' first draft (the outline's text, placed by stage 3). Hands on approved copy in every page, `npm run check:copy` and the parity check clean.

## The rules

- **The deck gets mailed.** Every card explains itself to a reader who was not in the room: what the step shows, why it matters, in plain sentences. Active voice, no hedging, no filler, no em dash used as a separator. Use the `prose-style-guardian-en` skill for English and `prose-style-guardian` for French when they are installed; their rules are the contract.
- **Names are the model's.** Part names, phase names, roles and every term in `docs/model.md` keep its one spelling; banned variants (`deck.config.mjs` `copy.banned`) never appear. In a translation, the names the model doc marks as fixed stay as written.
- **Titles**: one red word (`<em>`), title case in English, sentence case in French (`deck.config.mjs` may set otherwise per page or edition).
- **Figures** only from the outline's Sources line, each stop with a figure naming it in `data-source`. A deck's own estimate is labelled as such. No other number.
- **French typography**: a narrow no-break space (`&#8239;`) before `: ; ? !`, French quotation marks with the same space inside.
- **The owner decides.** Never apply a wording change on your own. Propose it.

## Steps

1. Read every card, crumb, list item (`src/lists.js`) and the HUD questions in the source page.
2. Write a table per stop, now → proposed, one-line reason each:

   | Stop | Now | Proposed | Why |
   |---|---|---|---|

   Group what is only typography (dashes, spaces, case) in one line per stop rather than one row per change.
3. Stop for the owner's go; apply exactly what they approve.
4. Translate: each other language's page (`index.<lang>.html`, listed in `deck.config.mjs` `pages` with `parity`) keeps every stop, beat and attribute of the source page; only the prose and `data-crumb` change. A language's list patches (sections, questions) go where the scene reads them (`pageLists(lang)`). For a long deck, one `copywriter` agent per language, given the approved source page and these rules; it returns the translated page and its own now → proposed table for anything it could not render faithfully.
5. `npm run build` (parity) and `npm run check:copy`, fix, run again.

## Exit

The owner approved the copy; `npm run check:copy` and the build's parity check pass.
