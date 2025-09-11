/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D9E0',
          light: '#33E1E6',
          dark: '#00ADB3',
        },
        neutral: {
          DEFAULT: '#7A7A7A',
          light: '#999999',
          dark: '#5C5C5C',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};