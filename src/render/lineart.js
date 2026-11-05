// Clean line art, after the anime.js engine: white parts shaded by a soft gradient, thin outlines,
// red for the Idea and the Team core, soft red for the outer Nexus tubes.
// One scene pass writes a small G-buffer to two targets at once (light, role, focus, depth; view normals),
// then a full-screen pass draws the fills and the lines.
import * as THREE from "three";

export const ROLE = { part: 0, red: 1, ink: 2, soft: 3, accent: 4 };

// Energy pulse: a red wave front running out from the engine's axis (radius in world units), shared by
// every material. Only charged parts let it through.
const PULSE = { value: -10 };
// Height range the wave may light (world y): a slice of the column instead of its whole height
const PULSE_BAND = { value: new THREE.Vector2(-1e3, 1e3) };

// Where the wave front is (radius; below 0 = no wave)
export function setPulse(radius) {
  PULSE.value = radius;
}

// The height range the wave may light, [lo, hi] in world y
export function setPulseBand(lo, hi) {
  PULSE_BAND.value.set(lo, hi);
}
// Light direction in view space, shared by every material and set once per frame
const LIGHT_DIR = { value: new THREE.Vector3(0, 1, 0) };

export function lineMaterial(role) {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: {
      lightDir: LIGHT_DIR,
      role: { value: role },
      dim: { value: 0 },
      charge: { value: 0 },
      lag: { value: 0 },
      pulse: PULSE,
      pulseBand: PULSE_BAND,
    },
    vertexShader: `
      varying vec3 vN; varying vec3 vW;
      void main() {
        vN = normalize(normalMatrix * normal);
        vW = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 lightDir; uniform float role; uniform float dim; uniform float charge; uniform float pulse;
      uniform float lag; uniform vec2 pulseBand;
      layout(location = 0) out highp vec4 gLit;
      layout(location = 1) out highp vec4 gNormal;
      varying vec3 vN; varying vec3 vW;
      void main() {
        vec3 n = normalize(vN);
        if (!gl_FrontFacing) n = -n;
        // lag delays the wave on a part, so context reads as flowing from one part to the next
        float d = length(vW.xz) + lag - pulse;
        float wave = charge * step(-0.28, d) * step(d, 0.06) * step(pulseBand.x, vW.y) * step(vW.y, pulseBand.y);
        gLit = vec4(max(dot(n, lightDir), 0.0), (wave > 0.5 ? 1.0 : role) / 4.0, dim * (1.0 - wave), 1.0);
        gNormal = vec4(n * 0.5 + 0.5, 1.0);
      }`,
  });
}

const COMPOSITE = `
  uniform sampler2D tLit; uniform sampler2D tNorm; uniform sampler2D tDepth;
  uniform vec2 res; uniform float px; uniform float near; uniform float far;
  uniform vec3 lo; uniform vec3 hi; uniform vec3 line; uniform vec3 redLo; uniform vec3 redHi; uniform vec3 redLine;
  uniform vec3 softLo; uniform vec3 softHi; uniform vec3 softLine; uniform float stipple;
  uniform vec3 accentLo; uniform vec3 accentHi; uniform vec3 accentLine;
  uniform float dimInk; uniform float dimAlpha;
  varying vec2 vUv;

  float viewZ(vec2 uv) {
    float z = texture2D(tDepth, uv).x * 2.0 - 1.0;
    return 2.0 * near * far / (far + near - z * (far - near));
  }

  void main() {
    vec4 L = texture2D(tLit, vUv);
    vec3 n0 = texture2D(tNorm, vUv).xyz * 2.0 - 1.0;
    float d0 = viewZ(vUv);

    // Two line weights: silhouettes and depth jumps drawn wide, creases and chamfers drawn fine
    float sil = 0.0, crease = 0.0;
    float eDim = L.b;
    for (int i = 0; i < 8; i++) {
      float a = float(i) * 0.785398;
      vec2 dir = vec2(cos(a), sin(a));
      vec2 o1 = dir * 1.5 * px / res;
      vec4 l1 = texture2D(tLit, vUv + o1);
      float k = abs(l1.a - L.a);
      if (l1.a > 0.5 && L.a > 0.5) k = max(k, smoothstep(0.012, 0.03, abs(viewZ(vUv + o1) - d0) / d0));
      if (k > sil) { sil = k; eDim = l1.a > 0.5 && L.a > 0.5 ? min(L.b, l1.b) : (L.a > 0.5 ? L.b : l1.b); }
      vec2 o2 = dir * 0.8 * px / res;
      vec4 l2 = texture2D(tLit, vUv + o2);
      if (l2.a > 0.5 && L.a > 0.5) {
        vec3 n = texture2D(tNorm, vUv + o2).xyz * 2.0 - 1.0;
        crease = max(crease, smoothstep(0.12, 0.3, 1.0 - dot(n, n0)));
        crease = max(crease, step(0.05, abs(l2.g - L.g)));
      }
    }
    float e = max(sil, crease * 0.7);

    float role = floor(L.g * 4.0 + 0.5);
    bool accent = role > 3.5;
    bool soft = role > 2.5 && !accent;
    bool red = (role > 0.5 && role < 1.5) || soft || accent;
    vec3 ink = accent ? accentLine : soft ? softLine : red ? redLine : line;
    ink = mix(ink, mix(line, hi, dimInk), eDim);
    vec4 c = vec4(0.0);
    if (L.a > 0.5) {
      float t = smoothstep(0.05, 0.95, L.r);
      vec3 fill = accent ? mix(accentLo, accentHi, t) : soft ? mix(softLo, softHi, t) : red ? mix(redLo, redHi, t) : mix(lo, hi, t);
      bool inkRole = role > 1.5 && role < 2.5;
      if (inkRole) fill = mix(line, lo, 0.25);
      fill = mix(fill, mix(lo, hi, t), L.b * (red ? 1.0 : 0.0));
      // Dot shading (engraving look, off unless an edition asks): a staggered dot screen in the line colour,
      // dots growing as the face turns from the light
      if (stipple > 0.0 && !inkRole) {
        vec2 g = gl_FragCoord.xy / (2.6 * px);
        g.x += 0.5 * mod(floor(g.y), 2.0);
        float shade = clamp((0.62 - t) / 0.62, 0.0, 1.0);
        float r = 0.42 * sqrt(shade);
        float dt = 1.0 - smoothstep(r - 0.08, r + 0.08, length(fract(g) - 0.5));
        fill = mix(fill, ink, dt * 0.45 * stipple * (1.0 - L.b));
      }
      c = vec4(fill, 1.0);
    }
    float a = clamp(e, 0.0, 1.0) * (1.0 - dimAlpha * eDim);
    c.rgb = mix(c.rgb, ink, a);
    c.a = max(c.a, a);
    gl_FragColor = vec4(c.rgb * c.a, c.a); // premultiplied
  }`;

// Paper: white parts, grey lines. Blueprint: dark parts, white lines (the closing stop). Red stays energy.
// Accent: a second highlight an edition may colour (--art-accent-*); by default it looks like soft.
const PAPER = { lo: "#ecebef", hi: "#ffffff", line: "#6f6a72", redLo: "#e81c35", redHi: "#ff7c8a", redLine: "#9e1028", softLo: "#fbd9de", softHi: "#fff6f7", softLine: "#f08494", accentLo: "#fbd9de", accentHi: "#fff6f7", accentLine: "#f08494" };
const BLUEPRINT = { lo: "#1e1e1e", hi: "#2a2a2a", line: "#f4f4f4", redLo: "#c81a30", redHi: "#ff6b7a", redLine: "#ff8a96", softLo: "#3a2028", softHi: "#4a2a34", softLine: "#ff8fa0", accentLo: "#3a2028", accentHi: "#4a2a34", accentLine: "#ff8fa0" };

// An edition repaints the engine from CSS: --art-<key> on :root for paper, --art-dark-<key> for blueprint
// (keys in kebab case: --art-red-lo). Unset keys keep the colours above.
function palette(base, prefix) {
  const css = getComputedStyle(document.documentElement);
  const value = (k) => css.getPropertyValue(`--${prefix}-${k.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`).trim();
  return Object.fromEntries(Object.keys(base).map((k) => [k, value(k) || base[k]]));
}

// stipple: dot shading strength, 0–1 (or --art-stipple on :root; --art-dark-stipple for blueprint, which
// defaults to the paper value)
export function createLineArt(renderer, { stipple } = {}) {
  // render() clears each target itself, once
  renderer.autoClear = false;
  const P = palette(PAPER, "art");
  const B = palette(BLUEPRINT, "art-dark");
  const root = getComputedStyle(document.documentElement);
  const css = parseFloat(root.getPropertyValue("--art-stipple"));
  const dots = stipple ?? (Number.isFinite(css) ? css : 0);
  const cssDark = parseFloat(root.getPropertyValue("--art-dark-stipple"));
  const dotsDark = Number.isFinite(cssDark) ? cssDark : dots;
  // How far a faded part's lines step back: towards the fill colour, and in opacity (--art-dim-ink, --art-dim-alpha)
  const num = (name, fallback) => {
    const n = parseFloat(root.getPropertyValue(name));
    return Number.isFinite(n) ? n : fallback;
  };
  // textures[0]: light, role, focus, coverage; textures[1]: view normals (n × 0.5 + 0.5). Eight bits a channel
  // hold all of it, and every GPU can draw into them (half floats need an extension some phones lack)
  const gbuf = new THREE.WebGLRenderTarget(1, 1, { type: THREE.UnsignedByteType, count: 2 });
  gbuf.depthTexture = new THREE.DepthTexture(1, 1, THREE.FloatType);
  const lightWorld = new THREE.Vector3(-0.5, 0.8, 0.45).normalize();
  // The composite writes straight to the canvas, so colours stay in sRGB
  const col = (c) => ({ value: new THREE.Color(c).convertLinearToSRGB() });

  const uniforms = {
    tLit: { value: gbuf.textures[0] }, tNorm: { value: gbuf.textures[1] }, tDepth: { value: gbuf.depthTexture },
    res: { value: new THREE.Vector2(1, 1) }, px: { value: 1 }, near: { value: 0.1 }, far: { value: 100 },
    lo: col(P.lo), hi: col(P.hi), line: col(P.line), redLo: col(P.redLo), redHi: col(P.redHi), redLine: col(P.redLine),
    softLo: col(P.softLo), softHi: col(P.softHi), softLine: col(P.softLine),
    accentLo: col(P.accentLo), accentHi: col(P.accentHi), accentLine: col(P.accentLine),
    stipple: { value: dots },
    dimInk: { value: num("--art-dim-ink", 0.6) },
    dimAlpha: { value: num("--art-dim-alpha", 0.5) },
  };
  // Colours of both palettes, ready to blend (setTheme)
  const paper = {};
  const blueprint = {};
  Object.keys(P).forEach((k) => {
    paper[k] = uniforms[k].value.clone();
    blueprint[k] = col(B[k]).value;
  });

  // 0 = paper, 1 = blueprint
  function setTheme(t) {
    Object.keys(paper).forEach((k) => uniforms[k].value.copy(paper[k]).lerp(blueprint[k], t));
    uniforms.stipple.value = dots + (dotsDark - dots) * t;
  }

  const post = new THREE.Scene();
  post.add(
    new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",
        fragmentShader: COMPOSITE,
        blending: THREE.NoBlending,
        depthTest: false,
        depthWrite: false,
      }),
    ),
  );
  const postCam = new THREE.Camera();

  // Call after renderer.setSize: the G-buffer matches the canvas pixel for pixel (three floors w × dpr)
  const drawing = new THREE.Vector2();
  function setSize() {
    const dpr = renderer.getPixelRatio();
    const { x: W, y: H } = renderer.getDrawingBufferSize(drawing);
    gbuf.setSize(W, H);
    uniforms.res.value.set(W, H);
    uniforms.px.value = dpr;
  }

  function render(scene, camera) {
    camera.updateMatrixWorld();
    LIGHT_DIR.value.copy(lightWorld).transformDirection(camera.matrixWorldInverse);
    uniforms.near.value = camera.near;
    uniforms.far.value = camera.far;

    renderer.setClearColor(0x000000, 0);
    renderer.setRenderTarget(gbuf);
    renderer.clear();
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(post, postCam);
  }

  return { render, setSize, setTheme };
}
