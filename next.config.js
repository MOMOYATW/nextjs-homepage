const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/nextjs-homepage/" : "",
  images: {
    unoptimized: true,
  },
};
