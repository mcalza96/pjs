import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "primary": "#9947eb",
                "background-light": "#fefaff",
                "background-dark": "#191121",
                "pastel-pink": "#ffdef2",
                "pastel-yellow": "#fff4cc",
                "pastel-lavender": "#e8e1ff",
            },
            fontFamily: {
                "display": ["var(--font-spline-sans)", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "1.5rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
};
export default config;
