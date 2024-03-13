/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "grey-light": "rgb(170, 177, 188)",
        background: "rgb(245, 246, 247)",
        "font-main": "rgb(16, 28, 51)",
        "font-hover": "rgb(110, 109, 122)",
        "qs-green": "rgb(0, 189, 47)",
        primary: "rgb(38, 86, 246)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
