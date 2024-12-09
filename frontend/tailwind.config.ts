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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1D4ED8", // The default shade
          light: "#60A5FA", // Lighter shade
          dark: "#1E40AF", // Darker shade
        },
        secondary: {
          DEFAULT: "#D97706",
          light: "#FBBF24",
          dark: "#92400E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
