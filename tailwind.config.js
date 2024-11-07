/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#00506c',
      },
      container:{
        center:true,
        padding:{
          default:"16px",
          sm:"48px",
        }
      }
    },
  },
  plugins: [],
}