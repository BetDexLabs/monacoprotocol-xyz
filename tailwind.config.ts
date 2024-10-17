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
        typography: {
          primary: "var(--white)",
          secondary: "var(--blue-500)",
          tertiary: "var(--gray-400)",
          "heading-dark": "var(--gradient-blue-to-purple)",
          "heading-light": "var(--gradient-light-blue-to-purple)",
          "heading-neutral": "var(--gradient-white-to-gray)",
        },
        background: {
          main: "var(--gradient-dark-purple)",
          accent: "var(--gradient-blue-to-purple)"
        },
      },
      fontSize: {
        h1: ['125px', { lineHeight: '125px', fontWeight: '600', letterSpacing: '-0.05em' }],
        h2: ['48px', { lineHeight: '56px', fontWeight: '600', letterSpacing: '-0.05em' }],
        h3: ['30px', { lineHeight: '36px', fontWeight: '600', letterSpacing: '0' }],
        body: ['24px', { lineHeight: '34px', fontWeight: '400', letterSpacing: '-0.02em' }]
      },
      screens: {
        sm: '320px',
        md: '672px',
        xl: '1920px'
      },
    },
  },
  plugins: [],
};
export default config;
