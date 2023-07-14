/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                yellow: {
                    100: "#FFF9EB",
                    900: "#FFC93E",
                },
                deepBlue: "#111D5E",
                blue: "#2563EB",
                gray: "#617187",
                lightGray: "#CDCDCD",
                white: "#F9FAFB",
            },
            colors: {
                yellow: {
                    100: "#FFF9EB",
                    900: "#FFC93E",
                },
                deepBlue: "#111D5E",
                blue: "#2563EB",
                gray: "#617187",
                lightGray: "#CDCDCD",
                offWhite: "#F9FAFB",
            },
        },
    },
    plugins: [],
};
