// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,css}",
      "./components/**/*.{js,ts,jsx,tsx,css}",
      "./styles/**/*.{css}", 
      "./**/*.{html,js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          'filosofia': ['Filosofia', 'serif'],
          'century-gothic': ['Century Gothic', 'sans-serif'],
          'century-gothic-bold': ['Century Gothic Bold', 'sans-serif'],
        },
        colors: {
          primary: 'rgb(var(--color-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
          dark: 'rgb(var(--color-dark) / <alpha-value>)',
          bg: 'rgb(var(--color-bg) / <alpha-value>)',
          coral: 'rgb(var(--color-coral) / <alpha-value>)',
          mint: 'rgb(var(--color-mint) / <alpha-value>)',
          blush: 'rgb(var(--color-blush) / <alpha-value>)',
          lightmint: 'rgb(var(--color-lightmint) / <alpha-value>)',
        },
      },
    },
    plugins: [],
  }
  