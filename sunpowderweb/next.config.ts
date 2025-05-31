import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sunpowder_website',
  assetPrefix: '/sunpowder_website',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
