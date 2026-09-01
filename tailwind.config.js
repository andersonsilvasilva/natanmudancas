/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5811C',
          dark: '#D9690D',
        },
        dark: {
          DEFAULT: '#54585B',
          deep: '#292D30',
        },
        background: '#F7F7F7',
        muted: '#6B7280',
        text: '#333333',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        'road-dash': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-46px)' },
        },
        'truck-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'diagonal-rise': {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '40px -40px' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'road-dash': 'road-dash 1s linear infinite',
        'truck-bob': 'truck-bob 2.4s ease-in-out infinite',
        'diagonal-rise': 'diagonal-rise 3.5s linear infinite',
      },
    },
  },
  plugins: [],
}
