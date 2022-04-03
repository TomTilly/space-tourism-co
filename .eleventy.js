module.exports = (config) => {
  config.addPassthroughCopy('./src/images');

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
