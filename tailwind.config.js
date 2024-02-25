/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        none: "none",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))", //Tailwind default is 6 rows and we need up to 8 in this project
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
