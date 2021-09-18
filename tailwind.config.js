module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      wide: '.1em',
    },
    screens: {
      sm: '490px',
      md: '768px',
      lg: '1080px',
    },

    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    extend: {
      colors: {
        primary: '#F9BF45',
        primaryLight: '#FAD689',
        primaryDark: '#C28F06',
        secondary01: '#FAFAFA',
        secondary02: '#E0E0E0',
        secondary03: '#757575',
        secondary04: '#212121',
      },
      fontFamily: {
        notoSerif: ['Noto Serif TC', 'sans-serif'],
        notoSans: ['Noto Sans TC', 'San Francisco'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
