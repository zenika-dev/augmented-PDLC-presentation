// A headless Chrome of our own for the checks: its own profile and port, never the viewer's Chrome or the
// DevTools MCP profile. It never calls Page.bringToFront (on macOS that took the window focus); a single page
// per browser, focus emulation and the no-backgrounding switches keep it painting instead.
import { spawn, execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir, platform } from "node:os";
import { join } from "node:path";

const CANDIDATES = [
  process.env.CHROME_PATH,
  // No app bundle: never activates a window
  "chrome-headless-shell",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];

function findChrome() {
  for (const c of CANDIDATES) {
    if (!c) continue;
    if (c.includes("/")) {
      if (existsSync(c)) return c;
    } else {
      try {
        return execFileSync("which", [c], { encoding: "utf8" }).trim();
      } catch {}
    }
  }
  throw new Error("No Chrome found: set CHROME_PATH");
}

// The app in front on macOS (null elsewhere): read before and after a run, so a check that steals focus shows
export function frontmost() {
  if (platform() !== "darwin") return null;
  try {
    return execFileSync("osascript", ["-e", 'tell application "System Events" to name of first process whose frontmost is true'], { encoding: "utf8", timeout: 3000 }).trim();
  } catch {
    return null;
  }
}

// gl: "metal" (GPU, default on macOS: SwiftShader times out past about a thousand draw calls) or "swiftshader"
// framesInProcess: sandboxed frames stay in the page's process (still sandboxed: opaque origin, the same policy), so
// the page's own target reaches them (qa host)
export async function launchChrome({ port = 9340 + Math.floor(Math.random() * 400), gl = platform() === "darwin" ? "metal" : "swiftshader", framesInProcess = false } = {}) {
  const profile = mkdtempSync(join(tmpdir(), "deck-qa-chrome-"));
  const args = [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    "--allow-file-access-from-files",
    "--no-first-run",
    "--no-default-browser-check",
    `--disable-features=DialMediaRouteProvider,Translate${framesInProcess ? ",IsolateSandboxedIframes" : ""}`,
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-renderer-backgrounding",
    "--hide-scrollbars",
    "--mute-audio",
    "--force-color-profile=srgb",
    "--font-render-hinting=none",
    ...(gl === "metal" ? ["--use-angle=metal"] : ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"]),
    "about:blank",
  ];
  const proc = spawn(findChrome(), args, { stdio: "ignore", detached: false });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 100; i++) {
    try {
      await (await fetch(`${base}/json/version`)).json();
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
      if (i === 99) throw new Error(`Chrome did not answer on ${port}`);
    }
  }
  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    proc.kill("SIGTERM");
    try {
      rmSync(profile, { recursive: true, force: true });
    } catch {}
  };
  process.once("exit", close);
  return { port, base, close };
}
