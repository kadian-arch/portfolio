/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base:   "#081428",   // dark blue page background (darker, still clearly blue)
        panel:  "#0f1d3a",   // card background
        edge:   "#243a61",   // subtle borders
        ink:    "#eaf1fb",   // primary text
        muted:  "#a3b5d4",   // secondary text
        faint:  "#6f83a8",   // tertiary text
        accent: "#37dbf0",   // cyan primary accent
        accent2:"#4f8cf7",   // blue secondary accent
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1150px" },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        gridpan: {
          "0%":   { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        gridpan: "gridpan 20s linear infinite",
      },
    },
  },
  plugins: [],
};
