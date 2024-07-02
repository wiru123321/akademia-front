/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "src/app/loader.ts",
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
            },
        ],
    },
};

module.exports = nextConfig;
