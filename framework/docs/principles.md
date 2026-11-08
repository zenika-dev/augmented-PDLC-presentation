# Design principles

The design contract every deck built on this framework keeps. Each rule comes from a review round on the first deck (the augmented PDLC keynote) and its client edition; the reason follows each rule. A change that breaks one of them needs the deck owner's explicit go.

## One model, never slides

- **The deck is one scene the audience watches being assembled and run.** Each stop is a camera shot plus the scene's state; a beat changes focus, labels or the HUD without moving the camera. Slide-like frames and "dives" into a cramped centre were rejected: they did not serve the talk.
- **Build backwards from one outcome sentence.** Write the sentence first ("after 25 minutes, anyone in the room can sketch the engine on a napkin and say which part they miss"). Every stop earns its place by adding one stroke to that napkin. The closing stop recaps the whole drawing.
- **The scene's model is the source of truth.** A model doc (`docs/model.md`) names the parts, the vocabulary and the reasons. The code's lists follow it, the outline follows them. Change the model first.

## Readability

- **Everything opaque.** No region fading into another, no translucent ghosts. A part out of focus fades its lines but stays solid: paper hides what is behind it.
- **One slot per annotation.** A card, a label or a leader name sits in its own empty area next to what it explains and never overlaps another (`npm run qa audit` checks it at four screen sizes).
- **Nothing between the camera and its target.** Frame each shot so no part crosses the view of the subject.
- **3D only where it carries meaning.** A part appears when its stop needs it; an exploded view opens on the stop that explains the parts.
- **Pull the camera back rather than circle a cramped centre.** Wide shots for structure, close shots only for one part and its names.

## Look

- **Clean line art on a pastel backdrop** (the anime.js engine): white parts with a soft gradient, thin even outlines, a 3/4 camera with a slight roll, fluid moves between shots. Rejected: flat or satin 3D, pencil hatching and wobble, grey flat tones.
- **Red means energy, nothing else.** The energy colour marks what carries energy: the running element, the core, the pulse, the parts a role lens lights, and their names. A second highlight uses the soft or accent role. A client theme may repaint energy (`--art-energy-*`); it keeps the single meaning.
- **No human figures.** People appear through a role lens: one beat per role, the parts the role owns lit in the energy colour, a leader name carrying the role's purpose. Pawns, characters and drag handles were unreadable.
- **Design on the canvas first.** A new part or a new stop goes on the Claude Design board before any code (`process.md`, stage 1). Later board rounds use renders from the deck's own modules, so the canvas and the page stay in sync.

## Labels

- **Leader names, like the parts list of an exploded view:** a dot on the part, a thin diagonal, the name on a horizontal tail. One light box (white at about 0.74) holds kicker, name and note together; never two backgrounds.
- **The layout is automatic.** Names dodge each other, the card, the HUD and plain labels. Pin a name (`data-lead-at`) only where the deck owner asks for a spot.
- **A name lights with its part.** When a beat energizes a part, its leader name turns to the energy colour with it.
- **Recap names feel engraved** into the part, not printed on top (`widgets.engrave`).
- **Leader names draw above the HUD's veil**, never under it.

## HUD

- **Simple and derived from the page.** The breadcrumb shows section › part; the bar has one segment per run of consecutive stops in page order (an edition may revisit a section); the questions read as plain text in two states, current (dark, bold) and muted. No dots, no third state.
- **Every block is a module** the config switches on or off (`deck.config.mjs` `hud`, an edition's `"hud"`). A deck without questions turns them off; it does not hide them in CSS.
- **The footer carries the source** of every figure on the step, the copyright line, a hand-raised version number and the `n / N` counter between previous and next arrows.

## Copy

- **Every card explains itself** to a reader who gets the deck by mail: a description or a list on every card, no "as I said".
- **Titles in title case** (English) or sentence case (French), **one red word** (`<em>`) per title.
- **Prose style:** active voice, no hedging, no AI tics, no em dash as a separator (prose-style-guardian EN and FR). French sets a narrow no-break space (`&#8239;`) before `: ; ? !`.
- **Figures only from named sources**, each in the step's source line; estimates labelled as such.
- **One vocabulary.** The model doc fixes the names; a variant never appears on screen (`deck.config.mjs` `copy.banned`).

## Motion

- **Motion lives in the camera, the scene's ambient motion and the energy pulse.**
- **Respect `prefers-reduced-motion`**, followed live: no camera moves, no spin, no pulse.
- **The frame loop runs only while something moves** (`wake()`); a deck at rest draws nothing.

## Reach

- **One file to mail.** The build inlines styles, script, fonts and images into one HTML file that opens from `file://` with no network.
- **A reading version without scripts** (mail previewers, Quick Look): the cards as a scrolling page, on the deck's light theme. Printing gives it too, and so does a phone held upright, with a line at the top: "Rotate for the full immersive experience".
- **Phones in landscape** scale the deck as one picture down to a text floor (`--fl-phone`): card text stays at 11px or more and no text under 9px; the HUD keeps clear of the notch, tap either half or swipe to move. The drawing keeps clear of the taller card: check every stop on the phone's contact sheet.
- **Contrast is measured against what is behind the text**, the drawing included: 4.5:1 (3:1 for large text) in every theme. A text never steps back by opacity, only by a colour that keeps the ratio; an engraved name or a footer over the drawing gets a halo or a plate. A state never shows by colour alone.
- **16:10 screens keep the 16:9 width of view.**
