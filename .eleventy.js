const eleventyHelmetPlugin = require('eleventy-plugin-helmet');
const eleventySchemaPlugin = require('@quasibit/eleventy-plugin-schema');
const eleventySitemapPlugin = require('@quasibit/eleventy-plugin-sitemap');
const syntaxHighlight = require('@pborenstein/eleventy-md-syntax-highlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginPWA = require("eleventy-plugin-pwa");

const {
  colophon,
  dateIsOlderThanOneYear,
  humanReadableDate,
  humanReadableNumber,
  path,
  readingTime,
  relPath,
  wordCount,
} = require('./_11ty/filters');

const { imageShortcode } = require("./_11ty/shortcodes");

module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/favicons/');
  config.addPassthroughCopy('./src/images/*.gif');
  config.addPassthroughCopy('./src/images/*.webm');
  config.addPassthroughCopy('./src/images/*.mov');
  config.addPassthroughCopy('./src/fonts/');
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/manifest.json');
  config.addPassthroughCopy('./src/robots.txt');
  config.addPassthroughCopy('./src/humans.txt');
  config.addPassthroughCopy('./src/hackers.txt');

  // Add nunjuck filters
  config.addNunjucksFilter("colophon", colophon);
  config.addNunjucksFilter("humanReadableNumber", humanReadableNumber);
  config.addNunjucksFilter("humanReadableDate", humanReadableDate);
  config.addNunjucksFilter('relPath', relPath);
  config.addNunjucksFilter('path', path);
  config.addNunjucksFilter('stringify', (x) => JSON.stringify(x, null, 2));
  config.addNunjucksFilter("dateIsOlderThanOneYear", (date) => dateIsOlderThanOneYear(date));
  config.addNunjucksFilter("wordCount", wordCount);
  config.addNunjucksFilter("readingTime", readingTime);

  // Add Nunjucks shortcodes
  config.addNunjucksAsyncShortcode("image", imageShortcode);

  const generateCardHero = async (data) => {
    if (!data || !data.hero) return null;
    const img = data.hero.image || { src: null };
    const title = data.hero.title || data.title
    const cardHero = {
      image: img.src ? await imageShortcode(img.src, img.alt) : null,
      title
    }
    return cardHero;
  }

  ['article'].forEach((tag) => {
    config.addCollection(tag, async function (collectionsAPI) {
      const all = collectionsAPI.getAll();
      const articles = all.filter(x => x.data.tags && x.data.tags.indexOf(tag) > -1)
      await articles.map(async y => {
        y.data.cardHero = await generateCardHero(y.data);
        return y
      })
      const sorted = articles.sort((a, b) => a.date - b.date)
      return sorted;
    });
  });

  // Register plugins
  config.addPlugin(eleventyHelmetPlugin);
  config.addPlugin(eleventySchemaPlugin);
  config.addPlugin(eleventySitemapPlugin, { sitemap: { hostname: "http://thomasrigby.com/" } });
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);
  if (process.env.NETLIFY) config.addPlugin(pluginPWA);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
