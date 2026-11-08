// The programme rollout's config: its pages, the files the build writes, and what the checks walk. It runs on the
// keynote's engine and sets (src/scene.js); its own lists are a patch on the keynote's (src/lists.js).
// Its single files go to the repository's dist/, the folder to host.
export default {
  // The scene module (defineScene) and the bundle's entry, which boots it
  scene: "src/scene.js",
  entry: "src/main.js",
  bundle: "dist/deck.js",
  pages: [
    { name: "en", src: "index.html", out: "../../dist/aixpdlc-programme-rollout.html", lang: "en" },
    { name: "fr", src: "index.fr.html", out: "../../dist/aixpdlc-programme-rollout.fr.html", lang: "fr", parity: "index.html" },
  ],
  // A translation may also cite its sources in its own language
  parityIgnore: ["data-crumb", "data-source"],
  // HUD modules, all shown unless turned off here or in a page's "hud" block (the seven AI capabilities have their own stop, 17)
  hud: { crumb: true, progress: true, questions: false, source: true, version: true, theme: true, fullscreen: true },
  // Sets: portals fly the camera from one set into another through a shot on each side;
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
  docs: { attributes: "docs/attributes.md", ignore: [] },
  qa: {
    viewports: [
      { w: 1920, h: 1080 },
      { w: 1440, h: 900 },
      { w: 1366, h: 768 },
      { w: 844, h: 390, phone: true },
    ],
    // The HUD items a card, a label or a leader must keep clear of
    hud: ["hud-nav", "hud-logo", "hud-footer", "hud-theme", "hud-fullscreen", "hud-step"],
    // Per-channel difference (0–255) a pixel may move by before a refactor's diff counts it
    diffThreshold: 24,
  },
};
