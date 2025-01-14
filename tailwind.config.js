/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        'miblue': {
          600: '#429FD3',
          700: '#1976ba',
          900: '#264478'
        },
        'gold': '#C89B02'
      },
      width:{
        '1340': '1340px'
      },
      fontFamily:{
        'libre': '"Libre Baskerville", serif',
        'lato': '"Lato", serif'
      }
    },
  },
  plugins: [],
}

