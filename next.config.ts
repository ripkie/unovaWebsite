import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Suppress Node.js 22 experimental localStorage conflicts
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
