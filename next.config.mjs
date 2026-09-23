/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sample case studies that were live on the old site and have since been removed.
  async redirects() {
    return [
      { source: "/work/greenleaf-landscaping", destination: "/work", permanent: true },
      { source: "/work/apex-electrical", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
