/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: 'tw-',
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', 'sans-serif'],
            serif: [
                'Playfair Display',
                'Cambria',
                'Times New Roman',
                'serif',
            ],
        },
        extend: {
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "extra-spin-slow": "spin 20s linear infinite",
            },
        },
    },
    plugins: [],
}
