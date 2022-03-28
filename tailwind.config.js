const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilmer: ["gilmer", ...defaultTheme.fontFamily.sans],
        sans: ["gilmer", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};