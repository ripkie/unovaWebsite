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
    return [{ source: "/products/humidifier-dehumidifier-2in1", destination: "/products", permanent: true }];
  },
  // Humidifier remains in the catalog; no unverified detail data is introduced.
};

export default nextConfig;
