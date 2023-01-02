/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
        '10xl' : '12rem',
      },
      backgroundImage : {
        'landing' : "radial-gradient(ellipse at bottom, #022227 0%, #000000 100%);"
      },
      backgroundSize : {
        'logoSize' : "auto 200%",
      },
      height : {
        '93vh' : '93vh'
      },
    },
  },
  plugins: [],
};