/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "src/app/loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akademiarozwoju.usermd.net",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  experimental: { serverActions: true },
};

module.exports = nextConfig;
