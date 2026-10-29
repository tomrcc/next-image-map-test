import type { NextConfig } from "next";

const staticExport = process.env.CLOUDCANNON_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(staticExport && { output: "export", images: { unoptimized: true } }),
};

export default nextConfig;
