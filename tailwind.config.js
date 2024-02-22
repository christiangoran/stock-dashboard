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
    },
  },
  plugins: [],
};
