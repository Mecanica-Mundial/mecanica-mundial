/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'md-10': { 'min': '1450px' },
      'md-11': { 'min': '1550px' },
      'md-12': { 'min': '1650px' },
      'md-13': { 'min': '1750px' },
      'md-14': { 'min': '1850px' },
      'md-15': { 'min': '1950px' },
      'l-10': { 'max': '1299px' },
      'l-11': { 'max': '1185px' },
      'l-12': { 'max': '935px' },
      'l-13': { 'max': '820px' },
      'sm-10': { 'max': '700px' },
      'sm': { 'min': '640px' },
      'sm-11': { 'max': '555px' },
      'sm-12': { 'max': '485px' },
      'sm-13': { 'max': '385px' },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      "blue-500": "#05B0F0",
    },
    fontFamily: {
      'out': ['Outfit', 'sans-serif'],
      'wall': 'Wallpoet, sans-serif'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-100%))",
          },
        },
      },
      animation: {
        scroll: "20s slide infinite linear",
      },
      colors: {
        'primary': '#05b0f0',
        'whiteMundial': '#f6f6f6',
        'blackMundial': '#2d2d2d'
      },
      boxShadow: {
        'button': [
          '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
          '8px 16px 20px 0px rgba(0, 0, 0, 0.50) inset',
          '0px 0px 32px 0px rgba(246,246,246,0.4)'
        ]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
