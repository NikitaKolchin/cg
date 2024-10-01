/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: {
            allowedOrigins: ['ya-therapy.ru', '127.0.0.1:3000'],
            // ^ You might have to use this property depending on your exact version.
        },
    },
};

export default nextConfig;
