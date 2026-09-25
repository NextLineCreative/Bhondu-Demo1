/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#F7EFDF',
          100: '#F0E5CE',
          200: '#E8DAC4',
        },
        sand: {
          100: '#EAD8B8',
          200: '#D9C098',
        },
        clay: {
          400: '#B47A55',
          500: '#8B5A3C',
          600: '#6B4530',
          700: '#5A3A28',
        },
        rust: {
          500: '#A05437',
          600: '#8A4529',
        },
        ink: {
          700: '#3E2A1F',
          800: '#2E1F15',
        },
        moss: {
          700: '#2F3A2E',
          800: '#232B22',
          900: '#1A2019',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        hand: ['"Caveat"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.32em',
      },
    },
  },
  plugins: [],
}
