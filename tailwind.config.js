/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      blenderPro: ["Blender Pro", "sans-serif"],
    },
    extend: {
      fontFamily: {
        // sans: ['"Blender Pro"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        navBar: "1405px",
        navBarSmall: "1000px",
      },
      colors: {
        primary: "#49F4D0",
        darkBg: "#1B1B1B",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
