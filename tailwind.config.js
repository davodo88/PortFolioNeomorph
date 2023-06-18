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
        DancingScript: ['Dancing Script', 'cursivo']
      },
      colors: {
        'whiteBG': '#e0e0e0',
        'purpleWidow': '#9955ff'
      },
      boxShadow: {
        'lightTL': 'inset 10px 10px 20px #cbced1, inset -10px -10px 20px #ffffff',
        'shadowTL': '10px 10px 20px #cbced1, -10px -10px 20px #ffffff',
        'buttonShadow': '5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff',
        'imageShadow': '1px 1px 10px #9955ff, -1px -1px 10px #9955ff',
        'darkShadow': '1px 1px 10px 1px #9910ff, -1px -1px 10px 1px #9910ff'
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

