import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: "var(--color-brand-blue)",
                    navy: "var(--color-brand-navy)",
                },
            }
        },
    },
    plugins: [],
};

export default config;