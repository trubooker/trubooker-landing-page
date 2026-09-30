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
      },{ "source": "/blog/:path*", "destination": "https://blog.trubooker.com/:path*" }
    ];
  },
};

export default nextConfig;