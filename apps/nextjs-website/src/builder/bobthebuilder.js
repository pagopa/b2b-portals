const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Logging function
function log(message) {
  console.log(`[Build Script] ${message}`);
}

try {
  // Step 1: Run TypeScript compiler for routejsonbuilder.ts
  log('Running TypeScript compiler for routejsonbuilder.ts...');
  const tsResultRouteJsonBuilder = spawnSync('../../../../node_modules/.bin/tsc', ['routejsonbuilder.ts']);
  if (tsResultRouteJsonBuilder.error) {
    throw tsResultRouteJsonBuilder.error;
  }

  // Step 2: Run TypeScript compiler for routebuilder.ts
  log('Running TypeScript compiler for routebuilder.ts...');
  const tsResultRouteBuilder = spawnSync('../../../../node_modules/.bin/tsc', ['routebuilder.ts']);
  if (tsResultRouteBuilder.error) {
    throw tsResultRouteBuilder.error;
  }

  // Step 3: Run TypeScript compiler for sitemapbuilder.ts
  log('Running TypeScript compiler for sitemapbuilder.ts...');
  const tsResultSitemapBuilder = spawnSync('../../../../node_modules/.bin/tsc', ['sitemapbuilder.ts']);
  if (tsResultSitemapBuilder.error) {
    throw tsResultSitemapBuilder.error;
  }

  // Step 4: Run TypeScript compiler for robotsbuilder.ts
  log('Running TypeScript compiler for robotsbuilder.ts...');
  const tsResultRobotsBuilder = spawnSync('../../../../node_modules/.bin/tsc', ['robotsbuilder.ts']);
  if (tsResultRobotsBuilder.error) {
    throw tsResultRobotsBuilder.error;
  }

  // Step 5: Execute route builder
  log('Running route builder...');
  require('./routebuilder.js');
  log('Route builder completed.');

  // Step 6: Execute sitemap builder
  log('Running sitemap builder...');
  require('./sitemapbuilder.js');
  log('Sitemap builder completed.');

  // Step 7: Execute robots builder
  log('Running robots builder...');
  require('./robotsbuilder.js');
  log('Robots builder completed.');

  // Step 8: Perform additional tasks

  // 8.1: Remove routeexample.json from the ./temporanydatas folder
  const routeexamplePath = path.join(__dirname, 'temporanydatas', 'routeexample.json');
  if (fs.existsSync(routeexamplePath)) {
    log('Removing routeexample.json...');
    fs.unlinkSync(routeexamplePath);
    log('routeexample.json removed.');
  } else {
    log('routeexample.json not found. Skipping removal.');
  }

  // 8.2: Remove routejsonbuilder.js
  log('Removing routejsonbuilder.js...');
  fs.unlinkSync('./routejsonbuilder.js');
  log('routejsonbuilder.js removed.');

  // 8.3: Remove routebuilder.js
  log('Removing routebuilder.js...');
  fs.unlinkSync('./routebuilder.js');
  log('routebuilder.js removed.');

  // 8.4: Remove sitemapbuilder.js
  log('Removing sitemapbuilder.js...');
  fs.unlinkSync('./sitemapbuilder.js');
  log('sitemapbuilder.js removed.');

  // 8.5: Remove robotsbuilder.js
  log('Removing robotsbuilder.js...');
  fs.unlinkSync('./robotsbuilder.js');
  log('robotsbuilder.js removed.');

  log('Build script completed successfully.');
} catch (error) {
  // Handle errors
  console.error('[Build Script] Error:', error);
  process.exit(1); // Exit with a non-zero status code to indicate failure
}
