const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: "#F40B4B"
      }
    },
  },
  plugins: [],
});