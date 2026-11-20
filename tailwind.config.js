/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#f0f7ff',
            100: '#e0effe',
            200: '#b9dffe',
            500: '#2563eb',
            600: '#1d4ed8',
            700: '#1e40af',
            800: '#1e3a8a',
            900: '#0f2744',
            950: '#0a192f',
          },
          saffron: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
          },
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': '0 12px 30px -10px rgba(15, 39, 68, 0.12)',
        'glow-saffron': '0 4px 20px -2px rgba(245, 158, 11, 0.3)',
        'glow-blue': '0 4px 25px -2px rgba(37, 99, 235, 0.25)',
        'glow-emerald': '0 4px 20px -2px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
