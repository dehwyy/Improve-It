/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ff0059',
        'custom-yellow': '#ffcb00',
        'custom-green': '#00cf68',
      },
      screens: {
        vsm: { max: '470px' },
        usm: { max: '380px' },
        uusm: { max: '310px' },
      },
    },
    screens: {
      lg: { max: '1023px' },
      premd: { max: '800px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  plugins: [],
}
