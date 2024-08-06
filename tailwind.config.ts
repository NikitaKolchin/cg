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
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '6rem',
                '2xl': '8rem',
            },
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)'],
                serif: ['var(--font-serif)'],
            },
            colors: {
                light: '#77C6C4',
                dark: '#045569',
                normal: '#43606E',
                sand: '#FBFAF5',
                white: '#FFFFFF',
                primary: {
                    100: '#E6F6FE',
                    200: '#C0EAFC',
                    300: '#9ADDFB',
                    400: '#4FC3F7',
                    500: '#03A9F4',
                    600: '#0398DC',
                    700: '#026592',
                    800: '#014C6E',
                    900: '#013349',
                },
                gray: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c',
                },
            },
            lineHeight: {
                hero: '4.5rem',
            },
            animation: {
                bounce: 'bounce 1s ease-in-out 2',
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(-270px)' },
                },
            },
        },
    },
};
export default config;
