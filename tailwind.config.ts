import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F6",
        "cream-2": "#F2F0EA",
        ink: "#141414",
        "ink-soft": "#2a2a2a",
        muted: "#6b6b6b",
        line: "#e4e2da",
        accent: "#E8590C",
        "accent-soft": "#F97D3C",
        "accent-deep": "#C2410C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.22em",
        wider3: "0.32em",
      },
      maxWidth: {
        site: "1280px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
