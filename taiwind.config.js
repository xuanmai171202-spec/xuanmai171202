/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F06292',
        secondary: '#4FC3F7',
        accent: '#FFF176',
        neutral: '#37474F',
      }
    },
  },
  plugins: [],
}