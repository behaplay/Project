/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'moon': ['Montserrat',],
      'opens': ['Open Sans',],
      'popin': ['Poppins',],
    },
    container: {
      center: true,
    },
    extend: {
      colors : {
        siniy: '#2A3855',
        aran: '#FDD428',
        siri: '#6a6a6a',
      },
    },
  },
  plugins: [],
}

