const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'portfolio', 'browser');
const indexPath = path.join(distDir, 'index.html');

const SITE_URL = 'https://www.ayoubyouhad.com';

const PAGES = [
  {
    route: 'projects',
    title: 'All Projects — Ayoub Youhad',
    description: '93+ projects spanning AWS cloud infrastructure, backend systems, generative AI, and data engineering, built by Ayoub Youhad.'
  }
];

const html = fs.readFileSync(indexPath, 'utf8');

for (const page of PAGES) {
  const url = `${SITE_URL}/${page.route}`;
  let pageHtml = html
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${page.description}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${page.title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${page.description}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${page.title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${page.description}">`);

  const outDir = path.join(distDir, page.route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml, 'utf8');
  console.log(`Generated ${page.route}/index.html`);
}
