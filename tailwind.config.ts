import type { Config } from "tailwindcss";

export default {
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        highlight: "var(--highlight)",
        "soft-blue": "var(--soft-blue)",
        "soft-green": "var(--soft-green)",
        "soft-yellow": "var(--soft-yellow)",
        "soft-pink": "var(--soft-pink)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-quicksand)", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
