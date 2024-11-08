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
        screens: {
            xs: '320px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '2048px',
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
            colors: {
                light: '#D0CFCB',
                dark: '#313131',
                normal: '#5785A4',
                white: '#FFFFFF',
                clear: '#F1F1F1',
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
                bounce: 'bounce 2s ease-in-out 1',
                fadeIn: 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '10%': { transform: 'translateY(-15px)' },
                    '40%': { transform: 'translateY(10px)' },
                    '60%': { transform: 'translateY(-7px)' },
                    '90%': { transform: 'translateY(5px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
};
export default config;
