---
name: deck-boards
description: "Stage 1 of a deck, and every board round after it: composes one board per stop on a Claude Design canvas from the outline and the reference illustrations, takes the owner's comments round by round, and later swaps the boards for renders from the deck's own modules. Use for any work on the deck's boards or canvas."
---

# Stage 1: boards on the Claude Design canvas

No part, shot or colour goes into code before the owner approves the boards. The canvas is a Design artifact: an index (`project/canvas.json`) and one artboard file (`project/<name>.dc.html`) per board. `npm run boards` writes those files; you decide what goes on each board and publish them with the Artifact tool.

Takes: `docs/model.md`, `docs/stop-map.md`, `.deck/outline.json`, `inputs/illustrations/`. Hands on: approved boards, the canvas link and round in `docs/progress.md`, the board plan `docs/boards.json` (the stop author's input in stage 3).

## The board plan (`docs/boards.json`)

The decisions a board shows, one entry per stop id:

```json
{
  "canvas": "https://claude.ai/artifact/…",
  "round": 1,
  "theme": "blueprint",
  "energy": "#f2b632",
  "stops": {
    "s01": {
      "arrive": "pushes in along the bench", "move": "slow",
      "shot": "wide, three-quarter from above",
      "subjects": ["subject-core.png"],
      "leaders": [{ "name": "Core", "on": "subject-core.png", "at": [0.5, 0.4], "to": [60, -46] }, "Base plate"],
      "red": "Parts", "side": "left", "note": ""
    }
  }
}
```

- `arrive`: how the camera gets to this stop from the one before, in words ("pulls back along the bench", "cut to the bench"); `move`: its pace when it is not the default 1.6 s move, `slow`, `fast` or `cut` (the stop's `data-move` in stage 3).
- `shot`: the camera in words (distance, angle, what is centred). The principles hold: pull back rather than circle, nothing between the camera and its target.
- `subjects`: the subject illustrations (file names in `inputs/illustrations/`) that stand in for the scene until it exists. Never a style reference.
- `leaders`: the leader names on screen, spelled as the model doc spells them. A name alone is listed under the scene; `{ "name", "on": <subject>, "at": [x, y], "to": [dx, dy] }` draws it as the deck will, a dot at `at` (fractions of that illustration), a line to the elbow `to` px away (default: outward and up), the name on its tail. A name that would run under the card turns to the other side. Open the board to check that each dot sits on its part.
- `red`: the one word of the title in the energy colour.
- `side`: where the card sits (`left` or `right`), opposite the subject.
- `note`: what the owner should look at on this board (a cut, a new part, a choice to make).
- `theme` (whole plan): the deck's look on the boards, `light` (the paper backdrop) or `blueprint` (white on blue with a grid); `energy`: the colour of the red word, when the deck's energy colour is not red.

## Round 1: a new canvas

1. Write `docs/boards.json` for every stop from the stop map, the outline's italic lines and the illustrations.
2. Find the Design type: Artifact `quickstart` with intent `design`. It names the type and the design system to use (the owner's or the organisation's default). Create the canvas once: publish with the type's `type_url`, `title` "<Deck title> boards", `auto_open: "after_first_write"`. Note its url in `docs/boards.json` and `docs/progress.md`. Never create a second canvas for the same deck.
3. Upload each subject illustration a board names: Artifact publish with the canvas `url`, `asset: true` and `file_paths` (up to 25 per call). Record each returned url: `npm run boards -- asset inputs/illustrations/<file> /_blob/<id>`.
4. Write the files: `npm run boards -- draft --ds <design system url> --ds-name "<its title>"`. It prints the design-system `files` entry to add to the first publish and lists any illustration not uploaded yet.
5. Publish, with `root` = `.deck/boards/canvas`:
   - first call: `file_path` = `project/canvas.json`, `files` = `project/Main.dc.html` plus the design-system entry the command printed;
   - then the stop boards, a few per call (`file_path` one of them, `files` the others).
6. Give the owner the link and one line on what to look at. Do not open, render or screenshot the canvas to check it unless the owner asks.

## Review rounds

1. Read the owner's comments (ArtifactComments, `read`, on the canvas url) and their words in the conversation.
2. Before writing anything, read the canvas index back (Artifact `read`, `path` `project/canvas.json`, saved into `.deck/boards/canvas/project/`): the owner may have moved boards or added notes, and `npm run boards` keeps what it does not own. An artboard the owner edited by hand: read it, fold the change into `docs/boards.json`, and say so.
3. Change `docs/boards.json` as asked, raise `round`, run `npm run boards -- draft` again.
4. Publish only the boards that changed; send `project/canvas.json` only when boards were added, removed or moved. A board no longer written is removed with `"project/<name>": null`.
5. Answer each comment in one line: what changed, or why not.

Approved: record the round and date in `docs/progress.md`, then stop for stage 2.

## Render rounds (from stage 2 on)

Once parts exist in code, each board shows the deck's own render so the canvas and the page never disagree.

1. `npm run build`, then `npm run qa -- shots --page <page> --vp 1920x1080 --out qa/boards`.
2. Upload the shots (`file_paths`, 25 per call) and record each: `npm run boards -- asset qa/boards/<page>/1920x1080/<n.b>.png /_blob/<id>`.
3. `npm run boards -- renders --shots qa/boards/<page>/1920x1080`, root `.deck/boards/canvas`: one board per stop and beat, the stop's board keeping its name. Publish the index and the boards; remove the ones it lists as no longer written.

## Exit

Every stop has an approved board; the look matches `framework/docs/principles.md` (line art, the energy colour, no human figures, one red word per title).
