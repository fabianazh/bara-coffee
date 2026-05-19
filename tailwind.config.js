/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#ECE3D0',
          light:   '#F4ECDA',
          soft:    '#FAF4E5',
          deep:    '#E2D6BD',
        },
        bara: {
          DEFAULT: '#1B3A8B',
          deep:    '#142E70',
          soft:    '#2B52A8',
          ink:     '#0E2256',
        },
        tan: {
          DEFAULT: '#B89972',
          deep:    '#8B6F47',
          light:   '#D4B894',
        },
        ink: '#162042',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        body:    ['"Quicksand"', 'system-ui', 'sans-serif'],
        hand:    ['"Caveat"', 'cursive'],
      },
      letterSpacing: {
        mega: '-0.04em',
      },
      keyframes: {
        marqueeScroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        softPulse: {
          '0%, 100%': { boxShadow: '0 8px 0 0 rgba(20,46,112,0.0), 0 0 0 0 rgba(27,58,139,0.45)' },
          '50%':      { boxShadow: '0 8px 0 0 rgba(20,46,112,0.0), 0 0 0 18px rgba(27,58,139,0)' },
        },
      },
      animation: {
        marquee:   'marqueeScroll 38s linear infinite',
        softPulse: 'softPulse 2.6s ease-out infinite',
      },
    },
  },
  plugins: [],
}
