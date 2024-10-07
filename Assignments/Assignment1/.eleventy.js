module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("src/assets");
 
    eleventyConfig.on("eleventy.before", () => {
       const fs = require('fs');
       const path = 'dist';
       if (fs.existsSync(path)) {
          fs.rmSync(path, { recursive: true, force: true });
       }
    });
 
    return {
       dir: {
          input: "src",
          output: "dist",
          includes: "_includes",
          layouts: "_includes/layouts"
       }
    };
 };
 