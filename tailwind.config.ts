import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#243158",
        accent: "#f26a21",
        mist: "#eef3ff",
        slate: "#4a536f"
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Avenir Next"', '"Trebuchet MS"', "sans-serif"],
        sans: ['"Source Sans 3"', '"Avenir Next"', '"Segoe UI"', "sans-serif"]
      },
      boxShadow: {
        panel: "0 28px 80px rgba(65, 83, 138, 0.16)"
      },
      backgroundImage: {
        "page-gradient":
          "radial-gradient(circle at top, rgba(132, 152, 222, 0.28), transparent 38%), linear-gradient(180deg, #dbe5ff 0%, #f7f8fd 35%, #eef3ff 100%)"
      }
    }
  },
  plugins: []
};

export default config;
