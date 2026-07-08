import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        bone: "#F7F5F2",
        slate: "#8E8E93",
        red: "#E63946",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        fab: "0 8px 30px rgba(230,57,70,.45)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floatPulse: {
          "0%,100%": { boxShadow: "0 8px 30px rgba(230,57,70,.45)" },
          "50%": { boxShadow: "0 8px 44px rgba(230,57,70,.78)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        dotPulse: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.75)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        floatPulse: "floatPulse 2.4s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        dotPulse: "dotPulse 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
