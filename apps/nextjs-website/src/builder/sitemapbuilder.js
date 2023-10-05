"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var jsonFilePath = path.join(__dirname, '../temporanydatas/routeexample.json'); // Specify the path to your JSON file
var routes = [];
// Function to generate the sitemap
function generateSitemap() {
    // Recursive function to collect sitemap entries for routes and their subroutes
    function collectSitemapEntries(route, parentPath) {
        if (parentPath === void 0) { parentPath = ''; }
        var entries = [];
        var routeURL = "http://localhost:3000/".concat(parentPath).concat(route.route);
        entries.push({
            loc: routeURL,
            lastmod: new Date().toISOString(),
        });
        if (route.subroutes && route.subroutes.length > 0) {
            for (var _i = 0, _a = route.subroutes; _i < _a.length; _i++) {
                var subroute = _a[_i];
                entries.push.apply(entries, collectSitemapEntries(subroute, "".concat(parentPath).concat(route.route, "/")));
            }
        }
        return entries;
    }
    var allSitemapEntries = [];
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var route = routes_1[_i];
        allSitemapEntries.push.apply(allSitemapEntries, collectSitemapEntries(route));
    }
    var sitemapXML = "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n    ".concat(allSitemapEntries
        .map(function (entry) { return "\n      <url>\n        <loc>".concat(entry.loc, "</loc>\n        <lastmod>").concat(entry.lastmod, "</lastmod>\n      </url>\n    "); })
        .join(''), "\n  </urlset>");
    var outputPath = path.join(__dirname, '../app', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemapXML);
}
// Read the JSON file initially
try {
    routes = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
    // Generate the sitemap
    generateSitemap();
}
catch (error) {
    console.error('Error reading JSON file:', error);
}
