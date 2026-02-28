import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0B3C5D",
        brandGreen: "#1E7F4F",
        brandOrange: "#F4A300",
        softGray: "#F5F7FA"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 60, 93, 0.12)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
