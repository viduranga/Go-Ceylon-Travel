import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = 'https://goceylontravel.com';
const routes = [
  '',
  '/tours',
  '/destinations',
  '/about',
  '/contact'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${hostname}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

const robots = `User-agent: *
Allow: /
Disallow: /admin

Sitemap: ${hostname}/sitemap.xml`;

const targetDir = process.argv[2] || path.join(__dirname, '..', 'public');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(targetDir, 'robots.txt'), robots);

console.log(`Sitemap and robots.txt generated in ${targetDir}`);
