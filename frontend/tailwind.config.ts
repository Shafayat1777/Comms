import { error } from "console";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#092635",
        // foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#5C8374", // The default shade
          light: "#9EC8B9", // Lighter shade
          dark: "#1B4242", // Darker shade
        },
        secondary: {
          DEFAULT: "#D97706",
          light: "#FBBF24",
          dark: "#92400E",
        },
        error: "#EF4444",
      },
    },
  },
  plugins: [],
} satisfies Config;
