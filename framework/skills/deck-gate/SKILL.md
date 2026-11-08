---
name: deck-gate
description: "Stages 6 and 7 of a deck: runs the full quality gate, reads its report and fixes what fails, walks the deck with motion on, then raises the version and builds the single files to deliver. Use before any delivery, after any refactor meant to be invisible, or when asked whether the deck is ready."
---

# Stages 6–7: gate and delivery

The checks are described in `framework/docs/gates.md`; read it for what each one holds and how to read its report.

## Gate

1. `npm run gate`. It runs, in order, and stops at the first failure: `build` (bundle, stop lint, parity, single files), `check:copy`, `check:private`, `check:docs`, `qa audit` (every stop and beat at the four viewports, every page), `qa scene` (the three.js structure, draw calls and triangles per stop, frame times and dropped frames through the moves at twice the pixel density, leaked geometries), `qa host` (each single file in a sandboxed srcdoc frame under a strict policy, as SharePoint and Teams show it), `qa a11y` (contrast against the pixels behind each text in every theme, axe-core's rules, the reading version and print, a phone held upright).
2. On a failure, read the step's output; for `qa`, `qa/out/report.json` lists each finding with its page, viewport, step and the elements involved. Open the shot of a finding (`qa/out/<page>/<viewport>/<n.b>.png`) before fixing it.
3. Fix in the right place: a stop's attributes for a layout finding on one step; the scene for an unknown tag; the copy for check:copy; `npm run docs` when check:docs says a generated reference is stale. Never loosen a check to make it pass; a check that is wrong is the owner's call.
4. For a change meant to be invisible (a refactor), take a baseline before it (`npm run qa -- shots --out qa/baseline`) and gate with `npm run gate -- --base qa/baseline`: any pixel diff above the threshold is a finding.
5. A long report can go to the `qa-auditor` agent: it runs the gate, reads the report and the shots, and returns the findings grouped by cause with the fix it proposes for each. You apply the fixes.

Then by hand:

- `npm run qa walk`: every step with motion on, console empty.
- Look at the contact sheets (`qa/out/<page>/<viewport>/sheet.html`) at 1920×1080 and on the phone viewport (`--dpr 2`: the phone's real density).
- What `qa a11y` cannot judge (`framework/docs/gates.md`, By hand): toggle names, states shown by colour alone, a card's reading order.
- The final prose pass (`deck-copy` rules) on anything changed since the copy sign-off.

## Delivery

1. Raise the version in each page's footer (`.hud-version`).
2. `npm run gate` once more.
3. The files to send are the single files in `dist/` (`deck.config.mjs` `pages[].out`): self-contained, offline, no external request (the audit checks it).
4. Republish the deck's preview Artifacts if it has any, from those single files.
5. Record the version and date in `docs/progress.md`. Commit only when the owner asks.

## Exit

The gate passes; the owner has the file.
