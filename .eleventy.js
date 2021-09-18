const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy({
    'src/main.css': 'assets/main.css',
    'src/images': 'assets/img',
    'src/scripts/animations.js': 'assets/animations.js', 
  });

  eleventyConfig.addFilter('trending', function(blog) {
    return blog.filter(article => {
      return article.data.trending === true;
    })
  });

  return {
    dir: {
      input: 'views',
      output: 'docs'
    }
  }
}