require('./routebuilder.js');
require ('./sitemapbuilder.js');
require ('./robotsbuilder.js');

// Logging function
function log(message) {
  console.log(`[Build Script] ${message}`);
}

try {
  // Execute route builder
  log('Running route builder...');
  require('./routebuilder.js');
  log('Route builder completed.');

  // Execute sitemap builder
  log('Running sitemap builder...');
  require('./sitemapbuilder.js');
  log('Sitemap builder completed.');

  // Execute robots builder
  log('Running robots builder...');
  require('./robotsbuilder.js');
  log('Robots builder completed.');

  // Additional logic can be added here if needed

  log('Build script completed successfully.');
} catch (error) {
  // Handle errors
  console.error('[Build Script] Error:', error);
  process.exit(1); // Exit with a non-zero status code to indicate failure
}
