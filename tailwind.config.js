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
    plugins: [require("@headlessui/tailwindcss")],
};
