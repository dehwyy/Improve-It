/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx",
    "./pages/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#77c3ec",
        "custom-light-blue": "#89cff0",
        "custom-pale-blue": "#9dd9f3",
        "custom-ultra-pale-blue": "#b8e2f2",
      }
    },
  },
  plugins: [],
}
