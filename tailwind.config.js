/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75', 
        '200': '2',    
        '250': '2.5',  
        '300': '3',    
      },
      colors: {
        deepBlue: '#012b5f',       // Azul Escuro
        skyBlue: '#5991d7',        // Azul Claro
        pureWhite: '#ffffff',      // Branco Puro
        goldenBeige: '#bf9c5a',    // Bege Dourado
      },
    },
  },
  plugins: [],
}
