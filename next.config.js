/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "drive.google.com",
        },
      ],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;