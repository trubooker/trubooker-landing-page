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
        destination: "https://api.trubooker.com/qewordly",
      },
    ];
  },
};

export default nextConfig;