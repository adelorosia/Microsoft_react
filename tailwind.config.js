/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
    },
    
    extend: {
      colors:{
        'PRIMARY':'#262626',
        'WHITE':'#fff',
        'BLUE':'#0067b7',
        'BLACK':'#000',
        'BGLINKS':'#f2f2f2',
        'GRAYDARK':'#616161',
        'GRAYLIGHT':'#555'
      }
    },
  },
  plugins: [],
}
