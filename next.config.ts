import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/DIGI-PRODUCTS-',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
