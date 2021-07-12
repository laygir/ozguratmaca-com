const { colors, borderWidth } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        ...borderWidth,
       32: '32px',
      },
      fontFamily: {
        body: 'ZwoLightPlainAlt20ml',
        'body-bold': 'ZwoBoldPlainAlt20ml',
        serif: 'Playfair Display',
      },
      colors: {
        ...colors,
        primary: '#ffbb00',
        // 'primary-hover': '#ef3d3f',
      },
      letterSpacing: {
        widest: '.2em',
      },
    },
  },
  variants: {
    extend: {
       scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
