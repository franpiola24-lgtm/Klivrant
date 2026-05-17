/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0F",
          muted: "#5F5F69",
          subtle: "#6B6B73",
        },
        canvas: {
          DEFAULT: "#FCFCFD",
          alt: "#FAFAFB",
          line: "#F0F0F4",
          border: "#E8E8EC",
        },
        brand: {
          50: "#FAF7FF",
          100: "#F5F1FF",
          200: "#E8DEFF",
          300: "#D9CFFF",
          400: "#A78BFA",
          500: "#7C68F0",
          600: "#5F4FD9",
          700: "#3D2EAA",
        },
        night: {
          surface: "#111118",
          border: "#2A2A35",
          muted: "#9898A6",
        },
        success: "#1D9E75",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
};
