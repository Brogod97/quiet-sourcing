/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "qs-black": "101C33",
        "grey-light": "rgb(170, 177, 188)",
        "ps-background": "rgb(245, 246, 247)",
        "font-main": "rgb(16, 28, 51)",
        "font-hover": "rgb(110, 109, 122)",
        "qs-green": "#00C853",
        "qs-primary": "rgb(38, 86, 246)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
