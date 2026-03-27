import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#20316d",
          dark: "#192655",
          light: "#2d4080",
        },
        blue: {
          brand: "#1959ff",
          light: "#2874fc",
          sky: "#326bff",
        },
        gray: {
          light: "#f8f8f8",
          mid: "#6f6f6f",
          dark: "#3e3e3e",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(32,49,109,0.85) 0%, rgba(32,49,109,0.7) 60%, rgba(32,49,109,0.9) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
