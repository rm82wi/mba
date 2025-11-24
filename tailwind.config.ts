import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#003B73",
          yellow: "#F6C800",
          gray: "#1F2933"
        }
      }
    }
  },
  plugins: [],
};

export default config;
