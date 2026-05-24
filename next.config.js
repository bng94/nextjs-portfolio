/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/nextjs-portfolio",
  assetPrefix: "/nextjs-portfolio",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
