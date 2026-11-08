// The HUD buttons' icons: Material Symbols Light (Google, Apache 2.0), inline so no image request is
// needed (hosts like SharePoint run the page under a strict CSP)

const svg = (cls, d) =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="${d}"/></svg>`;

export const ICONS = {
  fullscreen: "M4 20v-4.423h1V19h3.423v1zm11.596 0v-1h3.423v-3.423h1V20zM4 8.423V4h4.423v1H5v3.423zm15.02 0V5h-3.424V4h4.423v4.423z",
  fullscreenExit: "M7.423 20v-3.423H4v-1h4.423V20zm8.173 0v-4.423h4.423v1h-3.423V20zM4 8.423v-1h3.423V4h1v4.423zm11.596 0V4h1v3.423h3.423v1z",
  light: "M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875m-4.96.71Q8 13.672 8 12t1.165-2.835Q10.329 8 12 8t2.836 1.165T16 12t-1.164 2.836T12 16t-2.835-1.164M5 12.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179zM12 12",
  download: "m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z",
  previous: "M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z",
  next: "m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z",
  dark: "M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75",
};

// A one-icon button
export function fillIcon(button, name) {
  button.innerHTML = svg("icon", ICONS[name]);
}

// A two-state button: the "off" icon shows while aria-pressed is false, the "on" icon while it is true
export function fillIcons(button, off, on) {
  button.innerHTML = svg("icon-off", ICONS[off]) + svg("icon-on", ICONS[on]);
}
