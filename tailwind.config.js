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
        'Montserrat': ['Montserrat Alternates', 'italic'],
        'Lora': ['Lora', 'serif'],
        'Hind': ['Hind Madurai', 'sans-serif']
      },
      colors: {
        'whiteBG': '#e0e0e0',
        'purpleWidow': '#9955ff'
      },
      boxShadow: {


        'shadowTL': '10px 10px 20px #cbced1, -10px -10px 20px #ffffff',
        'buttonShadow': '5px 5px 10px #b1b1b1, -5px -5px 10px 1px #ffffff',


        //light inset form
        'lightinset': 'inset 4px 4px 6px #6e6e6e, inset -4px -4px 6px #ffffff',
        //light button
        'lightTL': 'inset 3px 3px 4px #f3f4f6, inset -3px -3px 4px #9ca3af',
        //dark outside button
        'darkTL': 'inset 3px 3px 3px #555555, inset -3px -3px 3px #1b1b1b',
        // dark sadow inset buena 
        'darkShadow': 'inset 3px 3px 5px #1b1b1b, inset -3px -3px 5px #555555',
        //shadow dark socialBox
        'shadowSocial': 'inset 3px 3px 3px #e5e7eb, inset -3px -3px 3px #4b5563',
        //dark shadow card
        'darkCard': '6px 6px 11px #000000,-6px -6px 11px #374151',


        'darkOutline': '-12px - 12px 12px 10px #ffffff, 12px 12px 12px 0 #ffffff'
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

