const typography = require("@tailwindcss/typography");

module.exports = {
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue}",
    "./app.vue",
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: "#241E1F",
      },
      red: {
        DEFAULT: "#EB2227",
      },
      white: {
        DEFAULT: "#ffffff",
      },
    },
    fontFamily: {
      sans: ["'Exo 2'", "sans-serif"],
    },
  },
  plugins: [typography],
};
