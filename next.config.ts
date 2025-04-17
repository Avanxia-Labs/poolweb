import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Esto asegura que el SVG se maneje correctamente en el cliente
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  transpilePackages: ['react-phone-input-2'],
};

export default nextConfig;
