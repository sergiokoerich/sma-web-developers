/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      custom: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        'gradient-blue': 'linear-gradient(105.21deg, #003F9E -26.39%, #53D7FD 129.5%)',
      },
    },
  },
  variants: {},
  plugins: [],
};

