import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./node_modules/@tailwindcss/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["var(--font-jetbrainsMono)", "monospace"],
    },
    extend: {
      colors: {
        primary: "#1C1C22",
        accent: {
          DEFAULT: "#3ABFF8",
          hover: "#0EA5E9",
        },
      },
    },
  },
  plugins: [],
};

export default config;
