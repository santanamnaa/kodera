/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12192c',
          light: '#1e2a4a',
          dark: '#0a0f1a',
        },
        secondary: {
          DEFAULT: '#0cc1c0',
          light: '#0fdad9',
          dark: '#0aa8a7',
        },
        neutral: {
          DEFAULT: '#7b7b7e',
          light: '#9c9c9f',
          dark: '#5a5a5c',
        },
        success: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(18, 25, 44, 0.8), rgba(18, 25, 44, 0.8)), url('/src/assets/images/hero-bg.jpg')",
        'cta-pattern': "linear-gradient(rgba(18, 25, 44, 0.9), rgba(18, 25, 44, 0.9)), url('/src/assets/images/cta-bg.jpg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};