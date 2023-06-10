/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FFC8DD',
        lightblue: '#A0522D',
        lightgreen: '#D1F2C2',
        lightpurple: '#E0BBE4',
        lightGray: '#F5F5F5',
        lightBrown:"#D2B48C",
        brand:"#e53854",
        brandLight:"#e53854",
        orange:"#f99f42"
      }
    },
  },
  plugins: [],
}

