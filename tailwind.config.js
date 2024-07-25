/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        serif: ["Georgia"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("@headlessui/tailwindcss"),
    require("tailwindcss-intersect"),
  ],
};
