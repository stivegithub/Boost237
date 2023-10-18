/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*", "./src/components/*", "./src/helper/*", "src/pages/*"],
  theme: {
    extend: {
      transitionDelay: {
        250: "250ms",
        500: "500ms",
      },
    },
  },
  plugins: [],
};
