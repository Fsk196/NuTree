/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/category/*.html", "./dist/*.js"],
  theme: {
    extend: {
      rotate: {
        20: "20deg",
        17: "17deg",
      },
    },
  },
  plugins: [],
};
