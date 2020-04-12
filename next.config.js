const rehypePrism = require("@mapbox/rehype-prism");
const nextMDX = require("@next/mdx");
const bundleAnalyzer = require("@next/bundle-analyzer");
const sitemap = require("./plugins/next-sitemap");

const pageExtensions = ["jsx", "js", "ts", "tsx", "mdx"];

const withMDX = nextMDX({
  extension: /[/\\](pages|posts|components[/\\])(.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});

const withSitemap = sitemap({
  hostname: "https://stoked.dev",
  pageExtensions
});

const nextConfig = {
  target: "experimental-serverless-trace", // Not required for Now, but used by GitHub Actions
  pageExtensions,
  experimental: {
    modern: true,
    rewrites() {
      return [
        {
          source: "/feed.xml",
          destination: "/_next/static/feed.xml"
        },
        {
          source: "/sitemap.xml",
          destination: "/_next/static/sitemap.xml"
        }
      ];
    }
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      // we're in build mode so enable shared caching for the GitHub API
      process.env.USE_CACHE = "true";

      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = { ...(await originalEntry()) };

        // These scripts can import components from the app and use ES modules
        entries["./scripts/build-rss.js"] = "./scripts/build-rss.js";

        return entries;
      };
    }

    return config;
  }
};

module.exports = withMDX(withBundleAnalyzer(withSitemap(nextConfig)));
