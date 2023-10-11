const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Logging function
function log(message) {
  console.log(`[Build Script] ${message}`);
}

try {
  // Step 1: Execute routejsonbuilder
  log('Running routejsonbuilder...');
  require('./routejsonbuilder.js');
  log('Routejsonbuilder completed.');

  // Step 2: Execute route builder
  log('Running route builder...');
  require('./routebuilder.js');
  log('Route builder completed.');

  // Step 3: Execute sitemap builder
  log('Running sitemap builder...');
  require('./sitemapbuilder.js');
  log('Sitemap builder completed.');

  // Step 4: Execute robots builder
  log('Running robots builder...');
  require('./robotsbuilder.js');
  log('Robots builder completed.');

  // Step 5: Perform additional tasks

  // 5.1: Remove routeexample.json from the ./temporanydatas folder
  const routeexamplePath = path.join(__dirname, 'temporanydatas', 'routeexample.json');
  if (fs.existsSync(routeexamplePath)) {
    log('Removing routeexample.json...');
    fs.unlinkSync(routeexamplePath);
    log('routeexample.json removed.');
  } else {
    log('routeexample.json not found. Skipping removal.');
  }

  // Build script completed successfully.
  log('Build script completed successfully.');
} catch (error) {
  // Handle errors
  console.error('[Build Script] Error:', error);
  process.exit(1); // Exit with a non-zero status code to indicate failure
}
