/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        forceSwcTransforms: false
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/about',
                permanent: true
            }
        ]
    },
};

export default nextConfig;
