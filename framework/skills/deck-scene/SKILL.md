---
name: deck-scene
description: "Stage 2 of a deck: models the approved boards' parts procedurally in three.js with the framework's kit, tags them, hangs their leader names and fills the scene contract (src/scene.js). Use when building or changing the deck's 3D parts, sets, shots or scene state."
---

# Stage 2: scene modelling

Takes the approved boards (`docs/boards.json`, the canvas), `docs/model.md`, the subject illustrations. Hands on `src/scene.js` and its modules, then a render round on the canvas.

Read first: `framework/docs/contract.md` (the scene API), `framework/starter/src/scene.js` (the smallest complete scene), `framework/docs/principles.md` (the look). For three.js itself, the `threejs-geometry` and `threejs-fundamentals` skills.

## How parts are made

- **Procedural, from kit primitives.** `framework/scene/kit.js`: `box`, `cyl`, `plate` (rounded slab, optional border), `bolts`, `pipe`, `roundRect`, `arcShape`, `screen`, `buttons`, `toggle`, `at(obj, x, y, z)` to place, `bake(group, { keep })` to bake a still room or part in place into a few draw calls (named nodes stay as anchors; leader names hung on a mesh move to its baked mesh; `keep` lists what still moves), `merge(group, { byTags })` for a baked copy; both give `find(tag)`, the baked part carrying a tag. For drawn parts: `BACK` (the cutaway's back half), `section` (the cut face), `crease` (a thin bar that draws as a line), `ring`, `joinGeometries`, `seeded` (a repeatable random). `clipY(mesh, lo, hi)` cuts a mesh at a height: a liquid is built once full and cut at its level. `framework/scene/math.js`: `polar`, `extrude(shape, depth, chamfer)`. `framework/scene/widgets.js`: `dial` (with a sub-dial), `sector`, `engrave` (letters on a curved face), `dimension` and `dashedArrow` (technical-drawing annotations); a leader with class `lead-callout` gets a hatched callout circle. A part seen inside another (ice in a glass) is a cutaway: everything is opaque. `framework/scene/furniture.js` for rooms. The illustrations are references for proportion, piece count and angle: nothing is traced, loaded or embedded.
- **Fine detail that draws.** The renderer draws a line where normals or depth break. A thin flat bar lying on a face the camera sees head-on breaks neither and shows as dots: turn such bars 45° along their length (a slanted face) or raise them, and they draw as continuous lines. Detail thinner than a pixel at the stop's distance draws dashed: thicken it or leave it out.
- **Every mesh through `parts.mesh(geometry, colour, tags)`** (the kit does it). Colour `WHITE` for parts, `INK` for small dark details. Tags are what stops talk about: `data-focus`, `data-energize`, `data-pulse` match them, and `scene.roles` maps them to a line-art role (`energy` for what carries energy, `soft`, `accent`, `ink`). Tag each part with its own name plus its family (`core`, `band`, `band:measure`); a sub-part that a stop may single out gets its own tag.
- **Names on leader lines.** `labels.leader(id, groups, className, note, noteGroup)` parented to the part, at the point the line should touch; groups are what `data-labels` switches on. The id is a key of the scene's `names` list (`src/lists.js`), which spells the text as `docs/model.md` does: no on-screen word in the code. The id is also the key `data-lead-at` pins. Every name exists when the scene is built.
- **One scene, one root.** `create(threeScene, { buildSets })` builds everything under one `THREE.Group`; a place the camera visits apart from the main scene is a set (`defineSet`, `framework/scene/sets.js`), built only if a stop visits it.
- **State, not animation.** `defaults()` is the scene's state (plain numbers), `stopState(data)` reads a stop's `data-*` into it, `set(state)` applies it and returns the layout anchors and shots read; give `layout(state)` too when the layout can be read without applying (the deck then calls `set` once per frame, not three times per step). `set` runs every frame of a move: it moves, turns, scales, clips and shows, and never builds a geometry. Blending between stops is the framework's job. Ambient motion (a spin, a running part) goes in `motion`, and respects reduced motion.
- **Shots** are named `orbit(az, elev, dist, target, roll)` from `framework/scene/shots.js`, one per board's `shot`; `aside(az, k, y)` offsets the target so the card has room.
- **The schema** (`schema.attributes(L)`, `shotNames`, `anchor`) declares every `data-*` the scene reads, so the build's lint checks the stops and `npm run docs` writes `docs/attributes.md`.

## Splitting the work

Each part or set with its own module (`src/engine/<part>.js`) can go to a `scene-modeller` agent, several in parallel: give each the part's entry in `docs/model.md`, its board(s) from `docs/boards.json`, its subject illustration path, the tags and label groups the stop map needs, and the file it owns. You keep `src/scene.js` (assembly, state, shots, schema, roles) and merge their reports: tags, groups and anchor points.

## Checks, in order

1. `npm run build`: the bundle builds; the stop lint knows every attribute.
2. `npm run qa -- audit --vp 1920x1080`: no unknown tag or label group (the VOCABULARY check), nothing off screen.
3. `npm run qa scene`: every mesh tagged and drawn in line art, every stop within the draw-call and triangle budgets (`deck.config.mjs` `qa.scene`), no geometry leaked across two walks, and the warnings read: an unbaked crowd of meshes (bake it), a slow move, frames dropped at twice the pixel density (the GPU's share). Bake as you build: a room or a part with more than 40 meshes ends in `bake`, and so does a group of many copies (thirteen cartridges of 37 meshes each draw 481 calls unbaked, 90 baked). A draw-call finding names the groups drawing the most meshes. Detail is welcome (the reference drawings are dense: scales with their eyes, fibres, ornate labels, bubbles, reflection strips), as small real geometry baked by tags, within the budget. Spend triangles where the shots look: about one segment per 8 to 10 pixels at the closest shot that shows a part, and nothing modelled where no shot sees it (under another part, behind the camera's side).
4. `npm run qa -- shots --vp 1920x1080,844x390p --dpr 2` and look at the contact sheets (`qa/out/<page>/<viewport>/sheet.html`) against the boards: on the phone the card is taller (the text floor), and the drawing must keep clear of it.
5. A render round on the canvas (`deck-boards`, Render rounds); the owner approves it.

## Exit

`npm run build` passes, the audit finds no unknown tag or label group, and the owner approved the rendered boards (`docs/progress.md`).
