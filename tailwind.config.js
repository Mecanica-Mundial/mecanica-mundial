/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'blue-500': '#05B0F0',
      },
    fontFamily: {
      out: ["Outfit", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        whiteMundial: "#f6f6f6",
        blackMundial: "#2d2d2d",
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
        'scroll': '20s slide infinite linear'
      },
      colors: {

        'primary': '#05b0f0',
        'whiteMundial': '#f6f6f6',
        'blackMundial': '#2d2d2d'
      }
    },
  },
  plugins: [],
};
