const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.slate,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
