import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        colors: {
            light: '#77C6C4',
            dark: '#045569',
            normal: '#43606E',
            sand: '#FBFAF5',
            white: '#FFFFFF',
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '6rem',
                '2xl': '8rem',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)'],
                serif: ['var(--font-serif)'],
            },
        },
        // plugins: [require('tailwindcss-animate')],
    },
};
export default config;
