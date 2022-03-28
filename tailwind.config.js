const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      neutral: {
        50: "var(--color-neutral-50",
        100: "var(--color-neutral-100)",
        200: "var(--color-neutral-200)",
        300: "var(--color-neutral-300)",
        400: "var(--color-neutral-400)",
        500: "var(--color-neutral-500)",
        600: "var(--color-neutral-600)",
        700: "var(--color-neutral-700)",
        800: "var(--color-neutral-800)",
        900: "var(--color-neutral-900)",
      },

      primary: {
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },

      warning: {
        500: "var(--color-warning-500)",
        900: "var(--color-warning-900)",
      },
      success: {
        500: "var(--color-success-500)",
        800: "var(--color-success-800)",
        900: "var(--color-success-900)",
      },
      danger: {
        100: "var(--color-danger-100)",
        400: "var(--color-danger-400)",
        800: "var(--color-danger-800)",
      },

      white: "var(--color-white)",
      black: "var(--color-black)",
    },

    extend: {
      fontFamily: {
        gilmer: ["gilmer", ...defaultTheme.fontFamily.sans],
        sans: ["gilmer", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
