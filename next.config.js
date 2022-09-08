/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  reactStrictMode: false,
  assetPrefix: "",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
