const Image = require('@11ty/eleventy-img');
const { stripWhitespace } = require('./utils');

async function imageShortcode(src, alt, rss = false) {
  // console.log('📸  ', src);
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on: ${src}`);
  }

  const source = src[0] === '/' ? `./src${src}` : src;

  const options = {
    widths: [300, 600, 900, 1200, 1500],
    formats: ['webp', 'jpeg'],
    outputDir: './dist/images/',
    urlPath: '/images/',
  };

  const metadata = await Image(source, options);

  const images = {};
  options.formats.forEach((format) => { images[format] = []; });

  await Object.keys(metadata).forEach((key) => {
    metadata[key].forEach((item) => {
      const image = {
        width: item.width,
        height: item.height,
        filename: `${rss ? 'https://thomasrigby.com/' : '/'}images/${item.filename}`,
        mime: item.sourceType,
      };
      images[key].push(image);
    });
  });

  const getSrcset = (arr) => arr.sort((a, b) => a.width < b.width).map((image) => (`${image.filename} ${image.width}w`)).join();
  const getSizes = (arr) => arr.sort((a, b) => a.width < b.width).map((image) => (`(max-width: ${image.width}px) ${image.width}px`)).join();

  const fallback = images.jpeg.sort((a, b) => a.width < b.width)[0];

  const picture = rss ? `<img src="${fallback.filename}" alt="${alt}" />` : `<img
  srcset="${getSrcset(images.webp)},${getSrcset(images.jpeg)}"
  sizes="${getSizes(images.webp)}"
  src="${fallback.filename}"
  loading="lazy"
  decoding="async"
  alt="${alt}"
  width="${images.jpeg[images.jpeg.length - 1].width}"
  height="${images.jpeg[images.jpeg.length - 1].height}"
  style="aspect-ratio: ${fallback.width}/${fallback.height}"
  />`;

  // console.log('🌆  ', picture);
  return stripWhitespace(picture);
}

module.exports = { imageShortcode }
