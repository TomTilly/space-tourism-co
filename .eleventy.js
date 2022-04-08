const assetHashFilter = require('./src/filters/asset-hash');

module.exports = (config) => {
  config.addPassthroughCopy('./src/images');

  // Use .eleventyignore instead of .gitignore
  config.setUseGitIgnore(false);

  // Filters
  config.addFilter('asset_hash', assetHashFilter);

  return {
    markdownTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
