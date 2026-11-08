// The presentation's config: its pages, the files the build writes, and what the checks walk.
// Its single files go to the repository's dist/, the folder to host. Client editions (the repository's
// editions/<name>/index.html, gitignored) run on this deck's bundle: the build and the checks find them there;
// their own settings live in the page's #edition block (docs/editions.md).
export default {
  // The scene module (defineScene) and the bundle's entry, which boots it
  scene: "src/scene.js",
  entry: "src/main.js",
  bundle: "dist/deck.js",
  pages: [
    { name: "en", src: "index.html", out: "../../dist/the-augmented-pdlc.html", lang: "en" },
    { name: "fr", src: "index.fr.html", out: "../../dist/the-augmented-pdlc.fr.html", lang: "fr", parity: "index.html" },
  ],
  editions: "../../editions",
  // HUD modules, all shown unless turned off here or in an edition's "hud" block
  hud: { crumb: true, progress: true, questions: true, source: true, version: true, theme: true, fullscreen: true },
  // Sets (client editions): portals fly the camera from one set into another through a shot on each side;
  // pairs put two rooms back to back on a turntable pivoting at world z = pivot
  sets: {
    portals: [{ sets: ["rocket", "cockpit"], shots: ["nose-window", "cockpit-hatch"] }],
    pairs: [{ sets: ["classroom", "mission"], pivot: -10.8 }],
  },
  // Copy rules for check:copy (framework/build/check-copy.mjs), beyond the core's (one red word per title,
  // no dash as a separator, title case in English, sentence case and narrow spaces in French)
  copy: {
    banned: [
      { pattern: "\\bG(?:0|[7-9])\\b", why: "phase gates run G1 to G6, no other G numbering" },
      { pattern: "\\b(?:Purpose|Process) register", why: "the Nexus registers are Knowledge, Intent, Contracts, Operations" },
    ],
    // A figure: a percentage or a multiple. Its stop must name the source (data-source)
    figures: "\\d+(?:[.,]\\d+)?\\s?(?:%|×)",
  },
  // The scene's generated attribute reference; docs the path check skips (the superseded impress.js plan)
  docs: { attributes: "docs/attributes.md", ignore: ["docs/itinerary.md", "docs/outline-36-stops.md"] },
  qa: {
    viewports: [
      { w: 1920, h: 1080 },
      { w: 1440, h: 900 },
      { w: 1366, h: 768 },
      { w: 844, h: 390, phone: true },
    ],
    // The HUD items a card, a label or a leader must keep clear of
    hud: ["hud-nav", "hud-logo", "hud-footer", "hud-theme", "hud-fullscreen", "hud-step"],
    // The private editions keep the layout they were delivered with: their phones scale as one picture (their
    // theme sets --fl-phone: 0px) and their own components predate the floors, so the text floors and qa a11y do
    // not apply to them. Overlaps, the console and requests still do. The public pages above run every check
    editions: { minText: 0, minTextPhone: 0, a11y: false },
    // Per-channel difference (0–255) a pixel may move by before a refactor's diff counts it
    diffThreshold: 24,
  },
};
