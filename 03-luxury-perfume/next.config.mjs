const themeSlug = "portfolio-luxury-perfume";
const wordpressAssetPrefix =
  process.env.WORDPRESS_THEME === "true" ? `/wp-content/themes/${themeSlug}/static` : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: wordpressAssetPrefix,
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
