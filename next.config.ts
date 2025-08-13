import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL("http://51.77.94.241/**"), new URL("https://icon2.cleanpng.com/**")],
  },
};

export default nextConfig;
