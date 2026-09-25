/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        ivory: {
          DEFAULT: '#F7EEDF',
          50:  '#FFF8EC',      // light cream
          100: '#F7EEDF',      // main ivory
          200: '#E7CDB0',      // sand
          300: '#D8A27D',      // clay beige
        },
        cream: '#FFF8EC',
        sand:  '#E7CDB0',

        // Clay / terracotta family
        clay: {
          300: '#D8A27D',      // clay beige
          400: '#C9825F',      // clay
          500: '#B96F4D',
          600: '#A95738',      // TERRACOTTA (brand accent)
          700: '#8B5036',      // warm brown
          800: '#78351F',      // deep terracotta
        },
        terracotta: {
          DEFAULT: '#A95738',
          500: '#A95738',
          600: '#8B4529',
          700: '#78351F',
        },

        // Text / ink
        ink: {
          700: '#24150E',
          800: '#24150E',
          900: '#12080A',
          muted: '#72584A',
        },

        // Border
        border: '#D8C1A9',

        // Deep dark section
        forest: {
          400: '#4E5F49',
          500: '#657052',      // botanical green
          600: '#3A4B36',
          700: '#2A3A26',
          800: '#1F2B1D',
          900: '#152014',
        },
        botanical: '#657052',

        // Rust alias (existing pages still reference this)
        rust: {
          400: '#B96F4D',
          500: '#A95738',
          600: '#78351F',
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        serif:   ['"Bodoni Moda"', 'Georgia', 'serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans:    ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
        hand:    ['Caveat', 'cursive'],
      },
      letterSpacing: {
        'widest-2': '0.28em',
        'widest-3': '0.35em',
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
