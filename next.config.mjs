const { hostname } = new URL(process.env.NEXT_PUBLIC_API_URL);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [hostname], // 👈 derived from API URL
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
