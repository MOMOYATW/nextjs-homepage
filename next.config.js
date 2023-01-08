const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "" : "",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
