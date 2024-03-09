/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      rotate: {
        '20': "20deg",
        "17": "17deg"
      }
    },
  },
  plugins: [],
};
