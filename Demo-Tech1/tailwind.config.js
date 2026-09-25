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
          50: '#FBF5EA',
          100: '#F5EDE0',
          200: '#EFE4D3',
          300: '#E7D8C1',
        },
        wine: {
          400: '#8B2E2E',
          500: '#6B1F1F',
          600: '#5C1A1A',
          700: '#4A1414',
          800: '#3A0F0F',
        },
        gold: {
          400: '#C9A15D',
          500: '#B08A48',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.35em',
      },
    },
  },
  plugins: [],
}
