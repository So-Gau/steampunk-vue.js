/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brown: '#1F1213'
    },
    extend: {
      width: {
        '170': "170px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
