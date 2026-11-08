# Zenika decks

Zenika's line-art decks, each a package under `decks/`, all built on the deck framework in `framework/`: one three.js scene per deck, a camera shot and a state per step, cards that explain themselves, a single self-contained HTML file per page.

- `decks/augmented-pdlc/`: the augmented PDLC, the executive keynote (EN/FR). Its rules: `decks/augmented-pdlc/CLAUDE.md`.
- `decks/programme-rollout/`: rolling out the augmented PDLC as a programme (EN/FR), on the keynote's engine and sets. Its rules: `decks/programme-rollout/CLAUDE.md`.
- `framework/`: the shared core, CSS, build, checks (`framework/qa/`), docs (`framework/docs/`), stage skills and agents. Change it only for a need every deck has, and say so.
- `brand/zenika/`: the brand's shared assets (Nunito, inlined by `brand/zenika/fonts.css`; the monogram; `brand/zenika/brand-guidelines.md`).
- `dist/`: the files to host or mail, one per deck and language, written by each deck's build. Their names are the public links: never rename them.
- `editions/<name>/` (gitignored, never committed or pushed): private client editions; each runs on a deck's bundle (today all on `decks/augmented-pdlc/`).

## Working

- A newcomer starts with `/welcome` (`framework/skills/welcome/SKILL.md`); a SessionStart hook (`.claude/settings.json`, `framework/hooks/welcome.sh`) tells Claude about it on a fresh clone.

- npm workspaces: `npm install` once at the root. `npm run build` builds every deck; `npm run <script> -w decks/<name>` runs one deck's script (`build`, `dev`, `gate`, `qa`, `check:copy`, `docs`…), or run it inside the deck's folder.
- A deck's version is its `package.json` `version`; raise it at each delivery.
- `npm run dev -w decks/<name>` watches the deck and serves the repository's root, so the page's `../../framework/` links resolve; it prints the page URLs.

## Checking changes

- `npm run gate` runs every deck's gate (`framework/docs/gates.md`); `npm run check:private` checks the whole repository for client material.
- The checks run in a headless Chrome of their own (`framework/qa/chrome.mjs`): never the window the user watches, never `Page.bringToFront`. For a manual look in Chrome (DevTools MCP), use a background tab of your own, never leave a viewport emulation on, close the tab when done.
- Refactors meant to be invisible: `npm run qa -w decks/<name> -- shots --out <dir>` before, `npm run qa -w decks/<name> -- diff --base <dir>` after (threshold 24).

## Repository

- Public: github.com/zenika-dev/augmented-PDLC-presentation. Work on `main` and push only `main`.
- `feat/three-engine` and `feat/map-skeleton` are a local archive whose history holds material that must stay private: never push them, never `git push --all` or `--mirror`.
- Before every push, run `npm run check:private` (nothing tracked under `editions/`, no term from `editions/*/private-terms.txt` in the tree or the unpushed commits) and grep the commit for client names, references to internal or client documents, pricing and personal emails. Footer stays `© ZENIKA 2026 · All Rights Reserved` (FR: `© ZENIKA 2026 · Tous droits réservés`); no licence file.
- The Anthropic `pdf` and `pptx` agent skills stay local (gitignored); the other skills in `.agents/` are MIT or Apache.
