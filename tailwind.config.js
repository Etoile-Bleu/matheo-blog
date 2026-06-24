const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            a: {
              color: theme('colors.stone.800'),
              textDecorationColor: theme('colors.orange.500'),
              textUnderlineOffset: '2px',
              '&:hover': { color: theme('colors.orange.600') },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: theme('colors.stone.100'),
              borderRadius: theme('borderRadius.DEFAULT'),
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              fontWeight: '400',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.stone.100'),
              textDecorationColor: theme('colors.orange.400'),
              '&:hover': { color: theme('colors.orange.400') },
            },
            code: {
              backgroundColor: theme('colors.stone.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
