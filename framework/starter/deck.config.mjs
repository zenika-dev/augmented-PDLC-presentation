// The starter deck's config: one page, the HUD with its questions, one portal-free set, the four QA viewports.
export default {
  scene: "src/scene.js",
  entry: "src/main.js",
  bundle: "dist/deck.js",
  pages: [{ name: "starter", src: "index.html", out: "dist/starter.html", lang: "en" }],
  editions: "editions",
  hud: { crumb: true, progress: true, questions: true, source: true, version: true, theme: true, fullscreen: true },
  leaders: { enter: "draw" },
  sets: { portals: [], pairs: [] },
  copy: { banned: [], figures: "\\d+(?:[.,]\\d+)?\\s?(?:%|×)" },
  docs: { attributes: "docs/attributes.md", ignore: [] },
  qa: {
    viewports: [
      { w: 1920, h: 1080 },
      { w: 1440, h: 900 },
      { w: 1366, h: 768 },
      { w: 844, h: 390, phone: true },
    ],
    hud: ["hud-nav", "hud-logo", "hud-footer", "hud-theme", "hud-fullscreen", "hud-step"],
    diffThreshold: 24,
  },
};
