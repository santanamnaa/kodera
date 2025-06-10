/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12192C',
          light: '#1e2a4a',
          dark: '#0a0f1a',
        },
        secondary: {
          DEFAULT: '#08C2C1',
          light: '#0fdad9',
          dark: '#06a9a8',
        },
        neutral: {
          DEFAULT: '#7E7E7E',
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
        hijau: {
          DEFAULT: '#0efefe',
          light: '#5ff6f5',
          dark: '#0ab3b1',
        },
        abu: {
          DEFAULT: '#7f7f81',
          light: '#b9b9bd',
          dark: '#3d3d3d',
        },
        birutua: {
          DEFAULT: '#12192c',
          light: '#001549',
          dark: '#080c16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(18, 25, 44, 0.85), rgba(18, 25, 44, 0.85)), url('/images/01-good.webp')",
        'cta-pattern': "linear-gradient(rgba(18, 25, 44, 0.9), rgba(18, 25, 44, 0.9)), url('/images/01-good.webp')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
};