/** @type {import('tailwindcss').Config} */
const { theme } = require('./src/styles/theme')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { fadeIn: 'fadeIn 0.4s ease-in-out' },
      keyframes: { fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } },
      colors: theme.colors,
      boxShadow: theme.shadows,
      borderRadius: { DEFAULT: theme.radius },
    },
  },
  plugins: [],
}