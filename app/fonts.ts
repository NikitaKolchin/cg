import localFont from 'next/font/local';

const gigaSans = localFont({
    variable: '--font-sans',
    src: [
        {
            path: '../fonts/GigaSans-Regular.woff2',
            weight: '400',
            style: 'regular',
        },
        {
            path: '../fonts/GigaSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/GigaSans-SemiBold.woff2',
            weight: '600',
            style: 'semibold',
        },
    ],
});

const lightHouse = localFont({
    variable: '--font-serif',
    src: [
        {
            path: '../fonts/Lighthaus.woff2',
            weight: '400',
            style: 'regular',
        },
    ],
});

export { gigaSans, lightHouse };
