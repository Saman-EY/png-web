import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("http://51.77.94.241/**"), new URL("https://icon2.cleanpng.com/**"), new URL("https://packagemahdi.ir/**")],
  },
};

export default withNextIntl(nextConfig);
