/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        DancingScript: ['Dancing Script', 'cursivo'],
        Hind: ['Hind', 'sans-serif'],
        Lora: ['Lora', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif']
      },
      colors: {
        'whiteBG': '#e0e0e0',
        'purpleWidow': '#9955ff'
      },
      boxShadow: {
        'lightTL': 'inset 10px 10px 20px #cbced1, inset -10px -10px 20px #ffffff',
        'shadowTL': '10px 10px 20px #cbced1, -10px -10px 20px #ffffff',
        'buttonShadow': '5px 5px 10px #b1b1b1, -5px -5px 10px 1px #ffffff',


        //dark outside button
        'darkTL': 'inset 3px 3px 3px #555555, inset -3px -3px 3px #1b1b1b',
        // dark sadow inset buena 
        'darkShadow': 'inset 3px 3px 5px #1b1b1b, inset -3px -3px 5px #555555',
        //shadow dark socialBox
        'shadowSocial': 'inset 3px 3px 3px #e5e7eb, inset -3px -3px 3px #4b5563',
        'darkOutline': '-12px - 12px 12px 10px #ffffff, 12px 12px 12px 0 #ffffff'
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

