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
        background: "var(--background)",
        foreground: "var(--foreground)",
        actionButton: "var(--action-button)",
        cardBackground: "var(--card-background)",
        optionsDropdown: "var(--options-dropdown)",
        mainCardText: "var(--main-card-text)",
        altCardText: "var(--alt-card-text)",
        websiteSection: "var(--website-section)",
        accentRed: "var(--accent-red)",
        accentGreen: "var(--accent-green)",
      },
    },
  },
  plugins: [],
};

export default config;
