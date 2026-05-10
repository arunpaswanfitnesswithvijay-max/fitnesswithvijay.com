import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0D0D0D",
        "bg-alt": "#141414",
        card: "#1A1A1A",
        accent: "#F59E0B",
        "accent-dark": "#D97706",
        muted: "#777777",
        surface: "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
