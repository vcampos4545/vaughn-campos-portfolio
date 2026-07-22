import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    // Placeholder imagery is served locally under /public/images.
    // Swap in a real remote pattern here if project media is hosted elsewhere.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
