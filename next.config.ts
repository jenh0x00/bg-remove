import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allow localtunnel subdomains for development
  allowedDevOrigins: ['loca.lt', 'loca.ly'],
};

export default nextConfig;
