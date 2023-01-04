/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                "sm": "2rem",
                "lg": "4rem",
                "xl": "5rem",
                "2xl": "6rem",
            },
        },
        extend: {},
    },
    plugins: [],
}