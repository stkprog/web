/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        // Breakpoints, taken from Bootstrap:
        // https://getbootstrap.com/docs/5.0/layout/breakpoints/
        screens: {
            xs: "400px",
            sm:  "576px",
            md:  "768px",
            lg:  "992px",
            xl:  "1200px",
            xxl: "1400px",
        },
        extend: {
            // Color classes
            //https://tailcolor.com/ for color palettes
            colors: {
                stkTeal: {
                    "50": "#ebf2f4",
                    "100": "#d7e4e9",
                    "200": "#afc9d3",
                    "300": "#87afbe",
                    "400": "#5f94a8",
                    "500": "#377992",
                    "600": "#2c6175",
                    "700": "#214958",
                    "800": "#16303a",
                    "900": "#0b181d"
                },
                stkGray: {
                    "50": "#fafcfc",
                    "100": "#f4f8f9",
                    "200": "#e9f1f4",
                    "300": "#deeaee",
                    "400": "#d3e3e9",
                    "500": "#c8dce3",
                    "600": "#a0b0b6",
                    "700": "#788488",
                    "800": "#50585b",
                    "900": "#282c2d"
                },
                stkPurple: {
                    "50": "#ebeaef",
                    "100": "#d7d5de",
                    "200": "#aeabbd",
                    "300": "#86829d",
                    "400": "#5d587c",
                    "500": "#352e5b",
                    "600": "#2a2549",
                    "700": "#201c37",
                    "800": "#151224",
                    "900": "#0b0912"
                },
                stkBlue: {
                    "50": "#f5f9ff",
                    "100": "#ebf2ff",
                    "200": "#d7e5ff",
                    "300": "#c2d8ff",
                    "400": "#aecbff",
                    "500": "#9abeff",
                    "600": "#7b98cc",
                    "700": "#5c7299",
                    "800": "#3e4c66",
                    "900": "#1f2633"
                },
            },
            // Custom font family classes, using preset fonts from Tailwind's font-sans font family as fallback
            fontFamily: {
                titles: ["XoloniumRegular", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
                bigtext: ["AssailandSemiBold", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
                // small: []
            },
            backgroundImage: {
                "clouds": "url('@/assets/img/clouds-bg.png')",
                "footer": "url('@/assets/img/footer-bg.png')",
            }
        },
    },
    plugins: [
        
    ],
}