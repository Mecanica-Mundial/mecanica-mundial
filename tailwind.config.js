/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'out': ['Outfit', 'sans-serif'],
      'wall': 'Wallpoet, sans-serif'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
  plugins: [],
}
