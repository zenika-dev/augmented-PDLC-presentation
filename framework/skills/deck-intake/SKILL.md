---
name: deck-intake
description: "Stage 0 of a deck: reads inputs/outline.md and inputs/illustrations/, writes the model doc, the stop map and the deck's vocabulary and sources, and opens docs/progress.md. Use when a deck starts from new inputs or the outline changes."
---

# Stage 0: intake

Takes `inputs/outline.md` and `inputs/illustrations/` (format: `framework/docs/inputs.md`). Hands on the model doc, the stop map and the copy rules for the owner to sign.

## Steps

1. **Check the outline.** `npm run outline -- --json` parses it into `.deck/outline.json` and lists its errors and warnings. Errors (no outcome sentence, an unknown question id, a figure with no source, a source not on the Sources line) go back to the owner as questions; do not fix the outline's content yourself. Format slips (a missing italic line, beats out of order) you may propose to fix.
2. **Read every illustration** (open each image). For each, write down: subject or style (by its name, `subject-*` / `style-*`), what it fixes (proportions, piece count, the angle that reads best, the line weight, the backdrop), and what it leaves open. An unnamed file: ask which it is.
3. **Write the model doc**, `docs/model.md`:
   - the outcome sentence at the top (the napkin);
   - the parts: name, what each one means, which illustration fixes its look, how it is built from simpler shapes (a cylinder with three bands, a plate with bolts…);
   - the vocabulary: the one spelling of each name, and the variants that must not appear;
   - the sources figures may come from, as the outline's Sources line gives them.
4. **Write the stop map**, `docs/stop-map.md`: one row per outline stop with its act, title, the stroke it adds to the napkin (what the audience can now draw that they could not before), the parts on screen, the set if the stop leaves the main scene. Flag a stop that adds no stroke; propose cutting or merging it, do not cut it.
5. **Write the copy rules** into `deck.config.mjs` `copy`: banned variants (`{ pattern, why }`, only ones the model doc names) and the figure pattern. Title case for English titles unless the owner says otherwise.
6. **Update `docs/progress.md`** (a new deck has it from the scaffold; else copy `framework/templates/progress.md`): stage 0 "waiting for sign-off", the open questions.
7. **Ask for the sign-off**: show the outcome sentence, the parts list and the stop map (with the flagged stops) in a short message, plus the open questions. Stop there.

## Exit

Every outline stop maps to a stroke or is cut by the owner; every figure has a source on the allowed list; the owner signed the outcome sentence, the parts list and the stop map (recorded in `docs/progress.md` with the date).
