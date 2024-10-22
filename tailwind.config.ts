import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--white)",
        secondary: "var(--blue-500)",
        tertiary: "var(--gray-400)",
        supportive: "var(--gray-200)",
        "blurred-bg": "var(--dark-indigo-transparent)",
      },
      backgroundImage: {
        main: "var(--gradient-dark-purple)",
        accent: "var(--gradient-blue-to-purple)",
      },
      maxWidth: {
        "max-page": "1920px",
        "max-content": "1285px",
      },
      screens: {
        sm: "320px",
        md: "672px",
        // lg: "1056px",
        // xl: "1312px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
