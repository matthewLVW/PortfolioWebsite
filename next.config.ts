import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const config: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  devIndicators: false,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default config;
