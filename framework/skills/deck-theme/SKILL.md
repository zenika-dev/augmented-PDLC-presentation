---
name: deck-theme
description: "Stage 5 of a deck: sets the brand through the role tokens and the line-art colours, the fonts and the deck's own component styles, in light and dark, without touching the framework's CSS. Use for colours, fonts, the dark theme, a client edition's theme, or the deck's own label and card styles."
---

# Stage 5: theme and brand

Takes the approved boards and the brand (the design system the canvas used, or the owner's brand rules). Hands on a page that matches the boards in every theme it offers.

## Where things go

- **Role tokens**, never component selectors: `--ink`, `--panel-*`, `--lead-*`, `--hud-veil`, `--bar-*`, `--tile-*`, `--energy`, `--focus`, `--halo` and the rest listed in `framework/css/tokens.css`, in the deck's own stylesheet inside `@layer deck`: the light theme on `body:not([data-theme="dark"])` (the reading version and the printed page carry no theme on the body and must show it), the dark one on `body[data-theme="dark"]`. `framework/css/dark.css` is a complete dark theme written that way: read it before writing one. A dark theme sets `--fg-muted` (the HUD's muted text) and `--halo` (the glow behind the footer, in its backdrop's colour).
- **Line-art colours** on `:root`: `--art-<key>` for the paper palette, `--art-dark-<key>` for the blueprint one; keys `lo`, `hi`, `line`, `energy-lo`, `energy-hi`, `energy-line`, `soft-*`, `accent-*`, plus `--art-stipple`, `--art-dim-ink`, `--art-dim-alpha` (`framework/docs/contract.md`, The theme). Without them the deck keeps the framework's look.
- **Fonts** are vendored and inlined by the build: a `css/fonts.css` of `@font-face` rules linked first in the page. No font from a CDN: the mailed file works offline.
- **The deck's own components** (label classes for its parts, special cards) go in its stylesheet (`css/deck.css`, linked after `framework/css/components.css`) inside `@layer components`. Never edit `framework/css/`.
- **Client editions** set the same tokens in their own `theme.css` (`docs/editions.md` in the PDLC repository describes the edition block) and never reach the public repository.

## The rules

- **Red means energy.** The energy colour is for the parts and names a beat energizes, and the one red word per title. Nothing decorative is red.
- **Never red text on dark.** On a dark theme, small red text uses the theme's accent-on-dark token; `npm run check:copy` checks the dark blocks.
- **Contrast against what is behind the text**: 4.5:1 for small text, 3:1 for large (24px, or 18.66px bold), measured by `npm run qa a11y` on the real pixels, the drawing included. The title's energy word on a light theme often needs a darker shade than the line art's energy (the pineapple deck: gold `#f2b632` for parts, `#b57400` for the title word, `#946000` for small text). A title shrinks on a phone: check its word at the smallest phone size as small text.
- **Never dim text with opacity**: a tile a beat does not light steps back to the `--tile-dim-*` colours; a version or a note is discreet by its size and weight. Text over the drawing (the footer, engraved names) takes the `--halo` glow, or a plate on a phone.
- **Focus**: `--focus` draws the keyboard ring on the HUD buttons, 3:1 against the backdrop in each theme.
- **Opaque, flat**: no blur veils on labels, no gradients on cards; the HUD block keeps its light veil.

## Checks

1. `npm run build`, `npm run check:copy`.
2. `npm run qa -- audit --theme dark` when the deck offers a dark theme, and the light audit.
3. `npm run qa a11y`: contrast in every theme, axe-core's rules, the reading version, print and a phone held upright.
4. `npm run qa -- shots --vp 1920x1080,844x390p --dpr 2` in each theme; compare with the boards (a render round if the boards predate the theme).

## Exit

`npm run check:copy` and `npm run qa a11y` pass; the page matches the boards in each theme.
