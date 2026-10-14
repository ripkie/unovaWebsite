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
  async redirects() {
    return ["/products/humidifier-dehumidifier-2in1", "/products/gas-leak-prevention"].map(source => ({ source, destination: "/products", permanent: true }));
  },
  // Retired smart-home product URLs lead to the new CC catalog.
};

export default nextConfig;
