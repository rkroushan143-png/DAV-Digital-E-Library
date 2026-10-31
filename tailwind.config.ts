import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#143B70",
        royal: "#2563EB",
        gold: "#E9B949",
        mist: "#F3F6FA"
      },
      boxShadow: { soft: "0 16px 50px rgba(20,59,112,.12)" }
    }
  },
  plugins: []
} satisfies Config;
