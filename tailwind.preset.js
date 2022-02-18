const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      serif: 'BC Steiner LSB',
      sans: 'Neue Montreal'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: '#FF0000',
      lightgray: '#DBD7D0',
      darkgray: '#403737',
      lightbeige: '#FDFDF5'
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      lineHeight: {
        12: '3.25rem'
      },
      fontSize: {
        title: '4.15rem',
        h1: '11.9rem',
        'h1-md': '10rem'
      }
    }
  }
}
