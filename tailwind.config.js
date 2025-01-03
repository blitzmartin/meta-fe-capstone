/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lemonGreen: '#495E57',
        lemonYellow: '#F4CE14',
        lemonGreenLight: '#A4C8B1',
        lemonYellowLight: '#fcfce8',
        lemonHighlight: '#FEF9D4',
      },
      fontFamily: {
        header: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
};
