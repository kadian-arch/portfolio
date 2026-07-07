// Generates public/og.png (1200x630) — a personal, project-agnostic social card.
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og.png");

// Fonts fall back to system sans/mono during rasterization, which is fine here.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#081428"/>
      <stop offset="1" stop-color="#0b1c3d"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0 H0 V48" fill="none" stroke="#1a2c4e" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="0.8" cy="0.2" r="0.6">
      <stop offset="0" stop-color="#37dbf0" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#37dbf0" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- corner reticle brackets -->
  <g stroke="#37dbf0" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M60 96 V60 H96"/>
    <path d="M1104 60 H1140 V96"/>
    <path d="M60 534 V570 H96"/>
    <path d="M1104 570 H1140 V534"/>
  </g>

  <!-- shield mark -->
  <g transform="translate(84,150)">
    <path d="M28 0 L56 10 V37 C56 55 45 66 28 72 C11 66 0 55 0 37 V10 Z"
          fill="none" stroke="#37dbf0" stroke-width="4" stroke-linejoin="round"/>
    <path d="M18 26 H30 C38 26 42 31 42 37 C42 43 38 48 30 48 H18 Z"
          fill="none" stroke="#37dbf0" stroke-width="4" stroke-linejoin="round"/>
  </g>

  <!-- monospace callsign -->
  <text x="176" y="196" font-family="monospace" font-size="22" letter-spacing="2" fill="#6f83a8">
    <tspan fill="#37dbf0">&gt; </tspan>status: operational  |  role: network_defense  |  loc: buea_cm
  </text>

  <!-- name -->
  <text x="84" y="330" font-family="Arial, sans-serif" font-size="92" font-weight="800" fill="#eaf1fb">Kum Donalsien Akwo</text>

  <!-- role -->
  <text x="84" y="398" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="#37dbf0">Cybersecurity &amp; Network Engineer</text>

  <!-- pitch -->
  <text x="84" y="460" font-family="Arial, sans-serif" font-size="27" fill="#a3b5d4">I design and defend networks, from enterprise</text>
  <text x="84" y="497" font-family="Arial, sans-serif" font-size="27" fill="#a3b5d4">infrastructure to AI-driven intrusion detection.</text>

  <!-- url -->
  <text x="84" y="576" font-family="monospace" font-size="22" letter-spacing="1" fill="#6f83a8">github.com/kadian-arch</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
