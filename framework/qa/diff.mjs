// Pixel diff of two shot folders, decoded and compared inside Chrome (no image library): a pixel counts when
// one channel moves by more than the threshold. Each pair that differs leaves a <name>.diff.png beside the
// new shot, the changed pixels in red over a faded copy.
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { launchChrome } from "./chrome.mjs";
import { openPage } from "./driver.mjs";

function pngs(dir) {
  const found = [];
  const walk = (d) => {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      if (statSync(p).isDirectory()) walk(p);
      else if (f.endsWith(".png") && !f.endsWith(".diff.png")) found.push(relative(dir, p));
    }
  };
  if (existsSync(dir)) walk(dir);
  return found.sort();
}

const COMPARE = `async (a, b, threshold) => {
  const load = async (s) => createImageBitmap(await (await fetch("data:image/png;base64," + s)).blob());
  const [ia, ib] = await Promise.all([load(a), load(b)]);
  if (ia.width !== ib.width || ia.height !== ib.height) return { size: [ia.width, ia.height, ib.width, ib.height] };
  const w = ia.width, h = ia.height;
  const read = (img) => { const c = new OffscreenCanvas(w, h); const x = c.getContext("2d"); x.drawImage(img, 0, 0); return x.getImageData(0, 0, w, h); };
  const da = read(ia), db = read(ib);
  const out = new ImageData(w, h);
  let count = 0, x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let i = 0; i < da.data.length; i += 4) {
    const d = Math.max(Math.abs(da.data[i] - db.data[i]), Math.abs(da.data[i + 1] - db.data[i + 1]), Math.abs(da.data[i + 2] - db.data[i + 2]), Math.abs(da.data[i + 3] - db.data[i + 3]));
    if (d > threshold) {
      count++;
      const p = i / 4, x = p % w, y = (p - x) / w;
      if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y;
      out.data[i] = 230; out.data[i + 1] = 20; out.data[i + 2] = 40; out.data[i + 3] = 255;
    } else {
      const g = 255 - (255 - (db.data[i] + db.data[i + 1] + db.data[i + 2]) / 3) * 0.25;
      out.data[i] = out.data[i + 1] = out.data[i + 2] = g; out.data[i + 3] = 255;
    }
  }
  if (!count) return { count };
  const c = new OffscreenCanvas(w, h);
  c.getContext("2d").putImageData(out, 0, 0);
  const blob = await c.convertToBlob({ type: "image/png" });
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let bin = ""; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return { count, box: [x0, y0, x1, y1], png: btoa(bin) };
}`;

// Returns [{ name, reason }] for every shot missing on one side or differing. scope: the page/viewport folders
// this run shot (others in the base are not compared)
export async function comparePngs(baseDir, newDir, { threshold = 24, gl, scope = null } = {}) {
  const inScope = (n) => !scope || scope.some((d) => n.startsWith(d + "/"));
  const a = pngs(baseDir).filter(inScope);
  const b = new Set(pngs(newDir).filter(inScope));
  const found = [];
  for (const n of b) if (!a.includes(n)) found.push({ name: n, reason: "not in the base" });
  const pairs = a.filter((n) => {
    if (b.has(n)) return true;
    found.push({ name: n, reason: "missing from the new shots" });
    return false;
  });
  if (!pairs.length) return found;
  const chrome = await launchChrome({ gl });
  const page = await openPage(chrome, { w: 400, h: 300, reduced: true });
  try {
    for (const n of pairs) {
      const ra = readFileSync(join(baseDir, n)).toString("base64");
      const rb = readFileSync(join(newDir, n)).toString("base64");
      const r = await page.ev(`(${COMPARE})(${JSON.stringify(ra)}, ${JSON.stringify(rb)}, ${threshold})`);
      if (r.size) found.push({ name: n, reason: `size ${r.size[0]}×${r.size[1]} → ${r.size[2]}×${r.size[3]}` });
      else if (r.count) {
        writeFileSync(join(newDir, n.replace(/\.png$/, ".diff.png")), Buffer.from(r.png, "base64"));
        found.push({ name: n, reason: `${r.count} px changed in [${r.box.join(", ")}]` });
      }
    }
  } finally {
    await page.close();
    chrome.close();
  }
  return found.sort((x, y) => x.name.localeCompare(y.name));
}
