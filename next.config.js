const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
