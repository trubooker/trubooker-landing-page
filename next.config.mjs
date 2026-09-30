/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog.trubooker.com",
      }
    ];
  },
};

export default nextConfig;