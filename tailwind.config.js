/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#15191e",
        "onyx": "#393e46",
        "aqua": "#00f4ff",
        "snow": "#fffafb",
        "ras": "#d81e5b",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        cutive: ['var(--font-cutive)'],
      }
    },
  },
  plugins: [],
}

