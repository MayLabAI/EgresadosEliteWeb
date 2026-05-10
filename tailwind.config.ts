import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#8B1414",
        "brand-red-dark": "#6B0F0F",
        "brand-white": "#FFFFFF",
        "brand-cream": "#F5F0E4",
        "brand-dark": "#0F0F0F",
        "brand-olive": "#3B4A35",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
        inter: ["var(--font-inter)", "sans-serif"],
        "alfa-slab": ["var(--font-alfa-slab)", "serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        varsity: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
