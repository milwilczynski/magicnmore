/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextIntl(nextConfig);
