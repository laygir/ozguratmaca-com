const {
  colors, //
  spacing,
  borderWidth,
  lineHeight,
} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html', //
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
      minWidth: {
        ...spacing,
        xxxs: '12rem',
        xxs: '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
      },
      lineHeight: {
        ...lineHeight,
        ...spacing,
      },
      minHeight: {
        ...spacing,
        xxxs: '12rem',
        xxs: '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
      },
      fontFamily: {
        body: 'ZwoLightPlainAlt20ml',
        'body-bold': 'ZwoBoldPlainAlt20ml',
        serif: 'Playfair Display',
      },
      colors: {
        ...colors,
        primary: '#ffbb00',
        'gray-100': '#f4f4f4',
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
