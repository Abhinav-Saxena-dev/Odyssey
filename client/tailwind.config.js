/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'nanum' : ['Nanum Myeongjo', 'serif'],
        'naugtigal' : ['The Nautigal', "cursive"],
        'moon' : ['Moon Dance', "cursive"],
        'shadows' : ['Shadows Into Light', 'cursive'],
      },
      fontSize : {
        '10xl' : '12rem',
      },
      backgroundImage : {
        'landing' : "radial-gradient(ellipse at bottom, #022227 0%, #000000 100%);",
      },
      backgroundSize : {
        'logoSize' : "auto 200%",
      },
      height : {
        '93vh' : '93vh',
        '110vh' : '110vh'
      },
      backgroundColor : {
        '1018' : '#101820FF',
        'F2AA' : '#F2AA4CFF',
        '0C00' : '#0C0032',
        '1900' : '#190061',
        '2400' : '#240090',
        '3500' : '#3500D3',
        '2828' : '#282828',
        '1F1B' : '#1F1B2C',
        'vio' : 'rgb(154, 134, 253)',
      },
      colors : {
        'sessionText' : '#D76C00',
        '1018' : '#101820FF',
        'F2AA' : '#F2AA4CFF',
        '0C00' : '#0C0032',
        '1900' : '#190061',
        '2400' : '#240090',
        '3500' : '#3500D3',
        '2828' : '#282828',
        '1F1B' : '#1F1B2C',
        'vio' : 'rgb(154, 134, 253)',
      }
    },
  },
  plugins: [],
};