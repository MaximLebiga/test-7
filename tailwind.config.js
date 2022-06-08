const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      black: {
        ...colors.black,
        1: 'rgba(0, 0, 0, 0.8)'
      },
    }
  },
  plugins: []
}
