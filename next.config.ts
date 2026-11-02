import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify par image optimization ke maslon se bachne ke liye
  images: {
    unoptimized: true,
  },
};

export default nextConfig;