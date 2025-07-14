import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00DC82",
        background: "#010101",
        "background-light": "#1a1a1a",
        foreground: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
