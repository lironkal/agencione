import type { Config } from "tailwindcss";

const config: Config = {
    content: [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
        ],
    theme: {
          extend: {
                  colors: {
                            white: "#FFFFFF",
                            "off-white": "#F0F4FF",
                            electric: "#0066FF",
                            "electric-bright": "#00AAFF",
                            "electric-glow": "#3385FF",
                            "electric-deep": "#0044CC",
                            ink: "#0A0A1A",
                            "ink-soft": "#1A1A3A",
                            muted: "#6677AA",
                            line: "#D0DCFF",
                            accent: "#0066FF",
                            "accent-soft": "#3385FF",
                            "accent-deep": "#0044CC",
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
                  keyframes: {
                            "fade-up": {
                                        "0%": { opacity: "0", transform: "translateY(30px)" },
                                        "100%": { opacity: "1", transform: "translateY(0)" },
                            },
                            "fade-in": {
                                        "0%": { opacity: "0" },
                                        "100%": { opacity: "1" },
                            },
                            "slide-in-left": {
                                        "0%": { opacity: "0", transform: "translateX(-40px)" },
                                        "100%": { opacity: "1", transform: "translateX(0)" },
                            },
                            "glow-pulse": {
                                        "0%, 100%": { boxShadow: "0 0 20px rgba(0,102,255,0.4)" },
                                        "50%": { boxShadow: "0 0 40px rgba(0,170,255,0.8)" },
                            },
                            "float": {
                                        "0%, 100%": { transform: "translateY(0px)" },
                                        "50%": { transform: "translateY(-12px)" },
                            },
                  },
                  animation: {
                            "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
                            "fade-in": "fade-in 0.6s ease both",
                            "slide-in-left": "slide-in-left 0.7s cubic-bezier(0.16,1,0.3,1) both",
                            "glow-pulse": "glow-pulse 2s ease-in-out infinite",
                            "float": "float 4s ease-in-out infinite",
                  },
          },
    },
    plugins: [],
};
export default config;
