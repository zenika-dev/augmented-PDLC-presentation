# Launch the AI Native Factory: rolling out the programme

`index.html` (EN) and `index.fr.html` (FR), 21 stops, about 90 minutes with its workshops, for the executives who sponsor the programme and the leaders who run it: how to roll out an AI-for-PDLC transformation programme (three phases as rocket stages, four pillars, the cockpit for measure, the contract dial, the classroom and mission control). It is a public deck: no client, team, tool-stack or survey data, ever. Its outcome: the room knows what the programme asks of it and can decide whether to launch the pilot quarter (`inputs/outline.md`).

- It runs on the keynote's engine and sets (`../augmented-pdlc/src/scene.js`); the keynote's rules hold here too (`../augmented-pdlc/CLAUDE.md`: vocabulary, content rules, the French deck). A change to the engine is checked on both decks.
- Its lists are a patch on the keynote's, per language, in `src/lists.js` (sections, DORA 2025's seven AI capabilities as concerns, shapes, `zones`, `leads`; the keys of an edition's block, `../augmented-pdlc/docs/editions.md`); the build checks the EN/FR pair the same way as the keynote's (only text, `data-crumb` and `data-source` differ).
- It opens dark (`data-theme-default="dark"`) on the Dusk blend gradient (`#4a2238 → #1f2650`); `css/deck.css` holds its card components and its theme (`@layer deck`), so the keynote keeps its own look.
- The contract dial shows the four delegation levels (`zones`); step 12.6 is the next level, human on the loop.
- Step 19 shows Flight Deck, a fictional programme site drawn in the deck's own look: sources in `assets/flight-deck/` (see its README), screenshots `assets/flight-deck-onboarding.jpg` and `-dashboard.jpg`. Never base it on a client's real tool.
- Figures on its cards follow the content rules: sources in the HUD, Zenika estimates labelled, example scores labelled illustrative.
- The HUD's questions are off (`deck.config.mjs` `hud`): the seven AI capabilities have their own stop (17).
- The version is `package.json`'s; raise it at each delivery.
- Republish the phone preview Artifacts: EN (claude.ai/artifact/ReZ2UDUCkDo6615UHn46fR) from the repository's `dist/aixpdlc-programme-rollout.html`, FR (claude.ai/artifact/WLXsJtEfAQa4deAgcU6PJN) from `dist/aixpdlc-programme-rollout.fr.html`.
