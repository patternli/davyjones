require('dotenv').config();

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/img");
  }