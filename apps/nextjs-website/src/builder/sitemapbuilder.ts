import * as fs from 'fs';
import * as path from 'path';

interface Route {
  route: string;
  subroutes?: Route[];
}

interface SitemapEntry {
  loc: string;
  lastmod: string;
}

const jsonFilePath = path.join(__dirname, './temporanydatas/routeexample.json'); // Specify the path to your JSON file
let routes: Route[] = [];

// Function to generate the sitemap
function generateSitemap() {
  // Recursive function to collect sitemap entries for routes and their subroutes
  function collectSitemapEntries(route: Route, parentPath = ''): SitemapEntry[] {
    const entries: SitemapEntry[] = [];

    if (route.route === '/') {
      // Special handling for the root ("/") to avoid double slashes
      var routeURL = 'http://localhost:3000';
    } else {
      var routeURL = `http://localhost:3000/${parentPath}${route.route}`;
    }

    entries.push({
      loc: routeURL,
      lastmod: new Date().toISOString(),
    });

    if (route.subroutes && route.subroutes.length > 0) {
      for (const subroute of route.subroutes) {
        entries.push(...collectSitemapEntries(subroute, `${parentPath}${route.route}/`));
      }
    }

    return entries;
  }

  const allSitemapEntries: SitemapEntry[] = [];

  for (const route of routes) {
    allSitemapEntries.push(...collectSitemapEntries(route));
  }

  const sitemapXML: string = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allSitemapEntries
      .map(
        (entry: SitemapEntry) => `
      <url>
        <loc>${entry.loc}</loc>
        <lastmod>${entry.lastmod}</lastmod>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  const outputPath = path.join(__dirname, '../app', 'sitemap.xml');

  fs.writeFileSync(outputPath, sitemapXML);
}

// Read the JSON file initially
try {
  routes = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

  // Generate the sitemap
  generateSitemap();
} catch (error) {
  console.error('Error reading JSON file:', error);
}
