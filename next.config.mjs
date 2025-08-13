/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["https://l8x7l3-4000.csb.app"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
