const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");
const glob = require("glob");

module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const hostname = pluginOptions.hostname;
  const pagesDir = pluginOptions.pagesDir || "pages";
  const pageExtensions = pluginOptions.pageExtensions || ["jsx", "js"];

  if (!hostname) {
    throw new Error(
      "Please configure a hostname in the sitemap plugin options"
    );
  }

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { dev, isServer } = options;

      if (!dev && isServer) {
        // Get filenames of all pages matching the provided extensions
        // Exclude files that start with an underscore (eg _app)
        const files = glob.sync(
          `${pagesDir}/**/[^_]*.+(${pageExtensions.join("|")})`
        );
        const pages = files.map(file => {
          const withoutPagesDir = file.replace(`${pagesDir}/`, "");
          const withoutFileExtension = withoutPagesDir.split(".")[0];
          return withoutFileExtension.replace("/index", "");
        });

        // Creates a sitemap object given the input configuration with URLs
        const sitemap = new SitemapStream({ hostname });

        const writeStream = createWriteStream(".next/static/sitemap.xml");
        sitemap.pipe(writeStream);

        pages.map(page => {
          if (page === "index") {
            // Homepage
            sitemap.write({ url: "/", priority: 1 });
          } else {
            sitemap.write({ url: page, priority: 0.8 });
          }
        });

        sitemap.end();
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};
