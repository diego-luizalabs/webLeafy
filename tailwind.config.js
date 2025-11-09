/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cor-folha-clara': 'rgb(76, 166, 64)',
        'cor-destaque': 'rgb(242, 179, 77)',
        'verde-claro-card': 'rgb(217, 242, 204)',
        'green-900': '#14532d',
      }
    },
  },
  plugins: [],
}