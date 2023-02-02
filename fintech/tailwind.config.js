/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: 'tw-',
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
    },
    plugins: [],
}