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
        active: "var(--gray-300)",
        link: "var(--blue-600)",
        border: "var(--gray-500)",
        "blurred-bg": "var(--dark-indigo-transparent)",
        "dropdown-active-bg": "var(--black-900)",
        "dropdown-bg": "var(--gray-600)",
        "nav-bg-mobile": "var(--black)",
        "article-bg": "var(--coal-transparent)",
      },
      backgroundImage: {
        main: "var(--gradient-dark-purple)",
        accent: "var(--gradient-blue-to-purple)",
        banner: "var(--gradient-dark-purple-to-black)",
      },
      maxWidth: {
        "max-page": "1920px",
        "max-content": "1056px",
        "max-content-xxl": "1284px",
      },
      screens: {
        sm: "320px",
        md: "672px",
        lg: "1284px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
