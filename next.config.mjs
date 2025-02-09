/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Edge Runtime for API routes
  experimental: {
    runtime: 'edge',
  },
};

export default nextConfig;
