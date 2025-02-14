/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure it scans your JSX/TSX files
  ],
  theme: {
    extend: {
      colors:{
        
      'primary-color': '#02191D',
      'border-color': '#197686',
      'hover-color': '#2C545B',
      'selected-color': '#12464E',
      'imagebg-color':'#02191D',
      'ticketbg-color': '#71A7AF'
      

      },
      fontFamily:{
        RoadRage: ['Road Rage','serif'],
        Roboto: ['Roboto','serif']
      },
    },
  },
  plugins: [],
};
