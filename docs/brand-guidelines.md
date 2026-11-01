# Zenika slide design guidelines (V3 brand)

Derived from Zenika's V3 slide template and the Zenika Design System. Reusable for any internal or client-facing Zenika deck.

Canvas: 1920×1080 (16:9). Language of the deck: French. Voice: collective ("nous", "notre"), factual, no emoji, no exclamation marks.

---

## 1. Brand tokens

| Token | Value | Use |
|---|---|---|
| Red | `#ee2238` | Key word, pills, numbers, links, section accent |
| Raspberry | `#bf1d67` | Second stop of the signature gradient |
| Signature gradient | `linear-gradient(135deg, #ee2238 0%, #bf1d67 100%)` | Dots, number circles, hero and divider backgrounds, highlight banners. Always 135°, two stops, never radial |
| Dark | `#1e1e1e` | Text, punchline slides, dark cards. Never pure `#000` |
| Grey | `#747775` | Footer text, labels, secondary text |
| Light grey | `#efefef` | Card borders, "coming soon" cards |
| Rule grey | `#d9d9d9` | Divider lines |
| White | `#ffffff` | Content slide background, text on dark/red |
| Accent on dark | `#ff6b7a` | Kicker, labels and highlighted words on `#1e1e1e` (red on dark fails contrast) |
| Footer grey on dark | `#b7b7b7` | Footer and source text on dark slides |
| Fallback base | `#d81f4d` | `background` colour under any gradient section |
| Deck backdrop | `linear-gradient(90deg, #fff6f5 6%, #e3e8fc 100%)` | Paper under the 3D engine, taken from the Zenika slide template. Pastel and horizontal: the one exception to the 135° rule |

### Section divider palettes (V3 variants)

Use one palette per divider, never two palettes on the same slide, and never mix with the red gradient inside a slide.

| Section | Gradient |
|---|---|
| Red (default, first section, hero, conclusion) | `linear-gradient(135deg, #ee2238 0%, #bf1d67 100%)` |
| Blue | `linear-gradient(135deg, #3f86ee 0%, #5a6fe0 100%)` |
| Sunset | `linear-gradient(135deg, #e8664f 0%, #f0a02c 100%)` |
| Violet | `linear-gradient(135deg, #8a63e8 0%, #5f78e0 100%)` |
| Mint (available, unused) | cyan → green, V3 page 30 |

### Chip palette (tinted background, dark text of the same hue)

| Meaning | Background | Text |
|---|---|---|
| Red / knowledge | `#fde3e7` | `#a5122a` |
| Orange / cost, product | `#fdebd0` | `#7a4700` |
| Blue / tooling, dev | `#dce9fb` | `#1a4a8a` |
| Violet / security | `#e8e1fb` | `#4527a0` |
| Green / measurement | `#d8f3e6` | `#0b6540` |
| Grey / watch, neutral | `#ececec` | `#444444` |

Rule: one colour = one meaning across the whole deck. Chips never carry meaning by colour alone: the label says it.

---

## 2. Typography

- Family: **Nunito** everywhere (Google Fonts, weights 300/400/600/700/800). Fallback `Arial, sans-serif`. Open Sans only for micro-copy in the original PowerPoint template; in this deck, Nunito only.
- Scale (px), reuse it, do not invent sizes:

| Role | Size | Weight |
|---|---|---|
| Hero title (intro) | 144 | 800 |
| Giant number (hook) | 260–300 | 800 |
| Divider number | 160 | 800 |
| Divider title / punchline | 88 | 800 |
| Closing title | 96 | 800 |
| Content slide title (h2) | 60 (52 if the title wraps) | 800 |
| Subtitle under the title | 32 | 700 |
| Card title (h3) | 32–36 | 800 |
| Body in cards and rows | 26–28 | 400, bold 700 for the "answer" column |
| Kicker, chips, labels, footer | 24 | 600–800 |

- Minimum text size: **24px**. Nothing smaller, footer included.
- Kicker and column labels: uppercase, `letter-spacing:1–3px`. Everything else: sentence case. Titles are never uppercase.
- Line heights: titles 1.1, subtitles 1.25, body 1.3–1.35.
- Typographic punctuation in text: `’` for apostrophes in running text, `« »` for French quotes with a non-breaking space. The existing deck uses straight apostrophes in several places; prefer `’` in new work.

---

## 3. Slide anatomy

### 3.1 Content slide (white)

```
padding: 96px 128px 160px   (usable area 1664 × 824)
top-left     kicker: red gradient dot (24px) + "01 · Observer" (24px, 600, uppercase)
below        h2 claim title (60px, 800) with ONE red word
below        subtitle (32px, 700)
top-right    Z logo, 64×64, at top:40px right:128px
body         cards / rows / grid
bottom       footer row pinned at bottom:64px: left source or copyright, right page number
```

- Header block: `gap:6px` between kicker, title and subtitle. Body starts ~28–36px below.
- Content must end above y = 920. The footer row sits at y ≈ 986.
- Footer left: `© ZENIKA 2026 · <event, date>` or `© ZENIKA 2026 · Source : …`. Footer right: page number, plain `#1e1e1e`, weight 700, no colour accent.
- One idea per slide. Too much text: split the slide, never shrink below 24px.

### 3.2 Title grammar

- A short claim, sentence case, one coloured word or group (the red span), no colon drama:
  - "Quatre sujets qui **agitent** le marché"
  - "Des missions d'un **nouveau type**"
  - "Apprendre ensemble, puis **prendre la parole**"
- Subtitle states the object or the scope, one line.
- Do not repeat the same grammar trick twice in a row (no chain of "It is not X, it is Y").

### 3.3 Section divider

- Full-bleed gradient (see palettes) + white pictogram texture at `opacity:0.18` over it.
- Left-aligned, vertically centred: number (160px) → title (88px) → subtitle (36px, 600), all white, `gap:24px`, `padding:128px`.
- Page number bottom-left (`left:64px; bottom:64px`, 24px, 700), as in V3 (page number on the left on dividers).
- No logo, no footer.

### 3.4 Intro / agenda (hero)

- Red gradient + texture. Big title (144px) with one word in `#1e1e1e` ("Focus **AI** chez Zenika"), subtitle 44px.
- Agenda as five columns pinned at the bottom: number (40px), name (36px), one-line description (26px), each under a 3px white rule.
- No footer, no page number.

### 3.5 Punchline slide (dark)

- Background `#1e1e1e`, text white, accent `#ff6b7a`, same padding as content slides, content vertically centred.
- **Red pill behind the key words** (see 4.1). Examples: "70 000" at 260px, "porte d'entrée" at 88px.
- Kicker in `#ff6b7a`, logo top-right, footer in `#b7b7b7`, page number white.

### 3.6 Conclusion slide

- Same treatment as the hero: red gradient + texture, white cards with a soft shadow, page number bottom-left.
- Headline 96px, three action cards (red h3 44px + 32px body), then a row of links separated by a 2px white rule.
- Closing with people cards (V3 page 33) is optional and was dropped for this deck: the speakers host the session.

---

## 4. Components

All styles inline. Snippets are valid for the Slides artifact format (section 6).

### 4.1 Red pill (key word emphasis)

An inline span cannot carry a background in the Slides format, so the pill is a block in a flex row (it then hugs its text):

```html
<div style="display:flex"><h2 style="font-size:88px;font-weight:800;line-height:1.1;background:#ee2238;color:#ffffff;padding:8px 40px;border-radius:40px">porte d'entrée</h2></div>
```

- Radius = about half the box height (24px for 24px chips, 40–48px for big text).
- Use sparingly: at most one pill per slide, on the idea to remember.

### 4.2 Card

```html
<div style="background:#ffffff;border:1px solid #efefef;border-radius:16px;box-shadow:0 4px 16px rgba(0,0,0,0.10);padding:28px">…</div>
```

- Radius 16px, hairline `#efefef`, soft shadow. No coloured left borders, no heavy elevation, no gradient card backgrounds (gradient only for highlight banners).
- Grids: 2, 3 or 4 equal columns, `gap:20–24px`. Rows: `gap:16px`.
- Dark card (`#1e1e1e`, radius 16px, padding 36–40px) for a key stat or an audience box.
- Grey card (`#efefef`, radius 16px, no shadow) for "to come" or inactive items.
- Do not set a fixed height on cards; let the text size them.

### 4.3 Chip

```html
<div style="display:flex"><p style="font-size:24px;font-weight:800;line-height:1.2;background:#dce9fb;color:#1a4a8a;padding:6px 20px;border-radius:24px">Harnais &amp; outillage</p></div>
```

- Sits at the top of a card or in the first column of a row.
- Colours from the chip palette, one meaning per colour.

### 4.4 Numbered circle

```html
<div style="flex:none;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg, #ee2238 0%, #bf1d67 100%);display:flex;align-items:center;justify-content:center"><p style="font-size:28px;font-weight:800;color:#ffffff;line-height:1">1</p></div>
```

- 48px (font 26) when next to a card title, 56px (font 28) stand-alone. Use for levels, steps, modules.

### 4.5 Row card (replaces tables)

Flex row inside a card: fixed-width first column (360–420px, `flex:none`) with the chip or the name in red 34px bold, a `flex:1` description (26–28px), optional fixed-width third column in bold. Column labels above the rows in 24px uppercase grey with the same widths. Prefer this to `<table>`: it takes chips, circles and shadows.

### 4.6 Highlight banner

Gradient background, white text 28–30px bold, radius 16px, padding 22–28px × 32–36px. One per slide, at the bottom, for the call to action or the link.

### 4.7 Timeline strip

Gradient label box + equal columns, each with a 3px red top rule, a 40px red "Jour N" and a 26px description.

### 4.8 Image blocks (screenshots, diagrams)

`object-fit:contain`, white background, 1px `#efefef` border, radius 16px. Always a descriptive `alt`. Credit the source in the footer ("Source : Zenika, aixsdlc.zenika.com, 2026").

### 4.9 Links

Plain `<a>`; on a dark or gradient background set `color:#ffffff` and keep the underline. Show the short form of the URL (no `https://`).

---

## 5. Assets and brand marks

- **Z monogram** (colour, gradient circle): top-right on every content and punchline slide, 64×64. Never recoloured, never stretched.
- **Wordmark / full logo**: cover and closing only (not used in this deck, whose cover was removed).
- **Pictogram texture**: white glyph pattern, always at `opacity:0.18` over a gradient. Never recoloured. On white it is invisible: use the grey pattern only on a cover.
- **Illustrations**: V3 uses flat grey Storyset illustrations (rocket, phases). If none is available, leave them out; do not generate substitutes.
- **Client logos**: official files only, shown at small size. If only a low-resolution file exists, write the name as text.
- **Architecture logos**: use the V3 library (React, Angular, Spring, Kafka, Kubernetes, AWS, Azure…) on white cards.
- **Copyright**: `© ZENIKA 2026 · …`. V3 prints it rotated on the right edge; this deck prints it in the footer row at 24px.

---

## 6. Constraints of the Slides artifact format (if you build the same look in the artifact tool)

- Each slide is one `<section id>`, 1920×1080, with inline styles only: no classes, `<style>`, `margin`, `z-index`, `em` or `var()`.
- Layout through `display:flex` or `grid`; `position:absolute` only for backdrops, logo, footer, page numbers. Backdrops come first in the section.
- Spans accept colour only: pills and chips are `<p>` or `<h2>` blocks inside a `display:flex` div.
- Images: uploaded assets (`/_blob/<id>`), never data URIs or remote URLs. Max 200 elements per slide.
- A gradient section also needs a solid `background` fallback (`#d81f4d`).
- Fonts: declare Nunito in `deck.json` `faces` with the Google Fonts link.
- One `<section>` per file, section id equal to the file name.

---

## 7. Content rules (French prose)

- Short, concrete sentences. Active voice when the actor is known. No noun chains, few anglicisms, no AI clichés.
- No bold inside running text. Emphasis comes from the red word, the chip or the pill.
- No invented statistics. Every figure carries its source in the footer, or is dropped.
- Infinitive verbs for missions and actions ("Déployer…", "Auditer…", "Accompagner…").
- Dates: avoid unless confirmed.
- Names of people on slides: only when the source is public or validated by the person.

---

## 8. Do / Don't

Do
- White background for content, dark for punchlines, gradient for dividers, hero and conclusion.
- Round everything that is a container (16px), keep rules and numbers sharp.
- Keep headers at the same place on every slide so they never jump.
- Fill about 70% of the usable height; leave air at the bottom.

Don't
- Two gradients, or two divider palettes, on the same slide.
- Red text on `#1e1e1e` (use `#ff6b7a`).
- Text under 24px, uppercase titles, emoji, drop caps, bold paragraphs.
- Coloured card borders, left accent bars, heavy shadows, glass effects, animations beyond a fade.
- Photos as backgrounds, or recoloured logos and pictograms.
- Tables when row cards work.

---

## 9. Pre-delivery checklist

1. Every slide has kicker, claim title with one red word, subtitle, Z logo, footer, page number (dividers: number bottom-left).
2. All text ≥ 24px and fits above y = 920.
3. Colours come from the tables above; each chip colour keeps its single meaning.
4. One pill at most per slide, on the key idea.
5. Sources in the footer for every figure and every screenshot.
6. Links readable on their background and spelled without protocol.
7. Page numbers continuous; sections consistent with the agenda.
8. Rendered in the real viewer (Nunito loaded, pill backgrounds visible), not only in a local preview.

---

## 10. Source references

- Zenika Template V3 (Google Slides, 33 pages): cover, sommaire, five divider palettes, "NOTRE PROPOSITION" content layouts, phases, focus, architecture library, closing.
- 2026 FR Template – Corporate Slides (Google Slides): pastel backgrounds, black punchline slides with red pill, chips, stat cards, client logo wall.
- Zenika Design System (artifact): tokens, Nunito, signature gradient, `assets-svg` gabarits.
