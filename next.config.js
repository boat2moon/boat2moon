/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  /** 裸域 → www 301 重定向，统一入口避免 SEO 重复内容 */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "boat2moon.com" }],
        destination: "https://www.boat2moon.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
