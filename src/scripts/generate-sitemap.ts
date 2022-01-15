import SitemapGenerator from 'sitemap-generator'

// create generator
const generator = SitemapGenerator('http://localhost:3000', {
  stripQuerystring: false,
  filepath: './static/sitemap.xml',
});

// register event listeners
generator.on('done', () => {
  console.log('DONE')
});

// start the crawler
generator.start();