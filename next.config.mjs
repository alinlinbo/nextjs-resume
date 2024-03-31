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
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.tsx/,
            use: "./loaders/vh-replace-loader.js"
        })
        return config
    },
};

export default nextConfig;
