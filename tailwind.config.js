/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00FFCE',
          secondary: '#8E6BFE',
          tertiary: '#4B516A',
          texto: '#2E2E3A',
          fondo: '#F0F0F0'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

