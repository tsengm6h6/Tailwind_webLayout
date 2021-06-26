const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.rose,
      yellow: colors.yellow,
    },
    borderRadius:{
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '3xl' : '30px'
    },
    minWidth: {
      '0': '0',
      '16': '4rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        amber: {
          light: '#AC8A46',
          DEFAULT: '#916019',
          dark: '#916000',
        },
        gray: {
          light: '#E0E0E0',
          DEFAULT: '#8D8D8D',
          dark: '#495057',
          darkest: '#373A3C'
        },
        loginGray: {
          light: '#CED4DA',
          DEFAULT: '#818A91',
          dark: '#212529',
        },
        secondGray: {
          light: '#A5A5A5',
          DEFAULT: '#848484',
          dark: '#707070',
        }
      },
      spacing: { // for background 的高度設定
        '88':'22rem',
        '120': '30rem',
        '138': '34.5rem',
        '150': '37.5rem',
        '216': '54rem'
      },
      maxWidth: {
        '5xxl': '69.375rem', // 1110px
      },
      container: {
        center: true // 預設 container 與 maxWidth 來做寬度限定
      },
      flex: {
        'half': '1 1 50%', // flex basic 只有 0% 和 auto，其他要自訂
      },
      backgroundImage: theme => ({
        'hero': "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/index1.jpg')",
        'subscribe': "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/perfume-week6/index10.jpg')"
      })
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
