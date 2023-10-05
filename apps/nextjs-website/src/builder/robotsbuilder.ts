import * as fs from 'fs';
import * as path from 'path'; // Import the path module

const disallowedRoutes = ['/admin', '/private']; // Add routes to disallow

const robotsTxt = `User-agent: *
Disallow: ${disallowedRoutes.join('\nDisallow: ')}`;

// Specify the full path to the directory where you want to save the robots.txt file
const outputPath = path.join(__dirname, '../app', 'robots.txt');

fs.writeFileSync(outputPath, robotsTxt);
