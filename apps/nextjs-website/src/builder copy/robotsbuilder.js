"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path"); // Import the path module
var disallowedRoutes = ['/admin', '/private']; // Add routes to disallow
var robotsTxt = "User-agent: *\nDisallow: ".concat(disallowedRoutes.join('\nDisallow: '));
// Specify the full path to the directory where you want to save the robots.txt file
var outputPath = path.join(__dirname, '../app', 'robots.txt');
fs.writeFileSync(outputPath, robotsTxt);
