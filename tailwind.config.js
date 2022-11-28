/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    colors: {
      limegreen: '#7dce94',
      whiteish: '#f9f8fd',
      customGreen: {
        200: '#9DC88D',
        400: '#4D774E',
        600: '#164A41',
      },
      customGrey: {
        100: '#f6f5f3',
        200: '#daded4',
        300: '#79827b',
        400: '#3c403d',
        500: '#3d3d3f',
      },
    },
  },
  plugins: [],
}
