# Flight Deck

The fictional programme site shown on step 19 of the rollout deck (`aixpdlc-programme-rollout.html`): two static screens drawn in the deck's own look. Example organisation, illustrative data.

- `launch-pad.html` → `../flight-deck-onboarding.jpg` (step 19.1, onboarding)
- `instrument-panel.html` → `../flight-deck-dashboard.jpg` (step 19.2, outputs and outcomes)
- `app.css`: shared styles (Dusk blend backdrop, glass panels, Nunito from `brand/zenika/fonts.css`)
- `illu-moon.jpg`, `illu-cockpit.jpg`: renders of the deck itself (steps 21 and 7, dark theme, HUD, cards and labels hidden)

To re-render after a change: open each page in Chrome at a 1600×1000 viewport, device scale 1, and save a JPEG screenshot (quality 85) over the matching file in `assets/`, then `npm run build`. The deck inlines the JPEGs, not these pages.
