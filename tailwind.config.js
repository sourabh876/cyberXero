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
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1', // Vibrant electric indigo
            600: '#4f46e5', // Deep vibrant royal indigo
            700: '#4338ca',
            800: '#3730a3',
            900: '#1e1b4b', // Velvet midnight
            950: '#0f172a', // Obsidian slate
          },
          saffron: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316', // Radiant vibrant orange / sunset amber
            600: '#ea580c',
            700: '#c2410c',
          },
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981', // Crisp vibrant mint / emerald
            600: '#059669',
            700: '#047857',
          },
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
          },
          cyan: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(99, 102, 241, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 35px -5px rgba(99, 102, 241, 0.16), 0 8px 16px -4px rgba(99, 102, 241, 0.08)',
        'glow-blue': '0 8px 28px -4px rgba(99, 102, 241, 0.4)',
        'glow-saffron': '0 8px 28px -4px rgba(249, 115, 22, 0.4)',
        'glow-emerald': '0 8px 28px -4px rgba(16, 185, 129, 0.4)',
        'glow-purple': '0 8px 28px -4px rgba(168, 85, 247, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}
