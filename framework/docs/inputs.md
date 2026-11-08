# Inputs: the outline and the illustrations

What a new deck starts from. Put both in `inputs/` at the repository root, check the outline with `npm run outline`, then run `/deck` in Claude Code (it follows `process.md`). `framework/starter/inputs/` is a small example of both.

```
inputs/
  outline.md
  illustrations/
    subject-<part>.png      one subject per file
    style-<name>.png        a look to match, marked as style
```

## The outline (`inputs/outline.md`)

```markdown
# <Deck title>: <subtitle>

> After <n> minutes, <who> can <what they can do or draw>.

Audience: <who sits in the room>. Length: <minutes>. Languages: en (+ fr).
Sources: <the only sources figures may come from, with their year>.
Questions (optional): the questions the HUD lights as the talk answers them.
- <id>: <short name> | <the question in full>

## Act 1: <section name>

**s01: <stop title>**
*<What the room sees: the shot, the parts on screen, what moves.>*
<What the speaker says, two to five sentences.> · answers: <question id> · source: <source>
*Beat 2: <what changes on the second beat>.*

**s02: …**
```

- **The outcome sentence comes first.** The whole deck is built backwards from it (`principles.md`).
- **One stop per bold heading** (`**sNN: Title**`), grouped in acts; an act becomes a section in the HUD's breadcrumb and bar.
- **Italics say what the room sees**, plain text what the speaker says. A beat is an italic line starting `Beat n:`.
- **Tags at the end of a line:** `· answers: <ids>` (the questions this stop speaks to), `· source: <source>` (every figure needs one), `· signals: <ids>` (an optional link to a part of the model), `(draft)` (resting on content not confirmed yet).
- **Voiceover conventions** when the outline carries the full script: `▸ clic · #6.2` marks a beat, `> On screen:` what the room sees, `⟦? …⟧` an open question for the owner (collected at the end, never invented), the timing in each heading.

## The illustrations (`inputs/illustrations/`)

- **Line art, clean outlines.** PNG, JPG or SVG; AI-generated references are fine.
- **One subject per file**, named `subject-<part>.<ext>`: what the part looks like, its proportions, how many pieces it has, the angle that reads best.
- **Style references are marked as such**, named `style-<name>.<ext>`: the line weight, the level of detail, the backdrop, the palette to match. The agent matches the look, not the subject.
- **The illustrations are references, not geometry.** The agent models each part procedurally (kit primitives, `process.md` stage 2) and shows it on the canvas boards first (stage 1). Nothing from an illustration is traced or embedded in the scene.
- **Client material stays private.** A client's drawings, logos or documents go in an edition folder (`editions/<name>/`, never committed) or in `sources/`, never in `inputs/` of the public repository.
