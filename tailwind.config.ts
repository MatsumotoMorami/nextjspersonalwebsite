import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'kawaii': ['AaYuanWeiTuSi-2']
            },
            width: {
                '1/8': '12.5%',
                '7/8': '87.5%'
            }
        },
    },
    plugins: [],
};
export default config;
