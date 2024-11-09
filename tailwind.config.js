const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: {
          dark:'#b886f7',
          light:'#11cba4'
        },
        secondary: {
          dark:'#333333',
          light:'#F8F8F8'
        },
        info:{
          dark:'#4D4D4D',
          light:'#FFFFFF'
        }

        // // Example custom color shades // index css koi// main.css banai disi ektu age// stupid hoi jacchen?. sorry
        
        // customGreen: {
        //   light: '#a7f3d0',
        //   DEFAULT: '#10b981',
        //   dark: '#065f46',
        // },

        // customBlue: {
        //   light: '#bfdbfe',
        //   DEFAULT: '#3b82f6',
        //   dark: '#1e3a8a',
        // },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}

