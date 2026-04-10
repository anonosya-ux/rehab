import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://lechenie-narkomanii-alkogolizma.ru';

// Define static routes
const staticRoutes = [
  '',
  '/narkomaniya',
  '/alkogolizm',
  '/reabilitaciya',
  '/o-centre',
  '/blog',
  '/kontakty',
  '/dlya-rodstvennikov',
  '/privacy',
  '/agreement'
];

// Read dynamic routes
// GEO Pages
import { geoCities } from '../src/data/geo.js';
const geoRoutes = Object.keys(geoCities).map(city => `/geo/${city}`);

// Blog Pages
import { blogPosts } from '../src/data/blog.js';
const blogRoutes = Object.keys(blogPosts).map(slug => `/blog/${slug}`);

const allRoutes = [...staticRoutes, ...geoRoutes, ...blogRoutes];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : route.startsWith('/blog') ? '0.7' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

// Write to public directory
const destPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(destPath, sitemap);

console.log(`✅ Sitemap successfully generated with ${allRoutes.length} URLs.`);
