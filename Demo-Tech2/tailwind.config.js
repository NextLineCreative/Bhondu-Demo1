/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ivory / off-white surface family
        ivory: {
          50:  '#FBF6EA',
          100: '#F5EEDD',
          200: '#EEE4CC',
          300: '#E4D6B4',
        },
        // Rustic clay / terracotta accents
        clay: {
          300: '#D2A985',
          400: '#B47A55',
          500: '#8B5A3C',
          600: '#6B4530',
          700: '#5A3A28',
        },
        // Deep forest green (primary brand accent)
        forest: {
          400: '#4E5F49',
          500: '#3A4B36',
          600: '#2A3A26',
          700: '#1F2B1D',
          800: '#152014',
          900: '#0D1509',
        },
        // Rust / burnt-orange (secondary accent, buttons)
        rust: {
          400: '#B86844',
          500: '#A05437',
          600: '#8A4529',
        },
        // Ink text tokens
        ink: {
          700: '#2E1F13',
          800: '#1F1509',
          900: '#140D04',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        hand: ['"Caveat"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.32em',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float':  {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .8s ease-out both',
        'float':   'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
