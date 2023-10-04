"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require('path');
// Read your JSON data
var jsonData = require('./routeexample.json');
// Get the directory where routebuilder.ts is located
var currentDir = __dirname;
// Specify the base directory where you want to create the route files
var baseDir = path.join(currentDir, '../app');
// Function to create routes recursively
function createRoute(routeData, parentDir) {
    // Remove special characters like hyphens from routeData.route
    var sanitizedRoute = routeData.route.replace(/[^a-zA-Z0-9-]/g, '');
    // Capitalize the first letter and the first letter after a hyphen for the function name
    var routeName = sanitizedRoute.replace(/(?:^|-)(\w)/g, function (group1) { return group1.toUpperCase(); });
    var routeDir = path.join(parentDir, sanitizedRoute);
    var routePath = path.join(routeDir, 'page.tsx');
    // Create the directory if it doesn't exist
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }
    var routeContent = "'use client'\nimport React from 'react';\nimport { ComponentData, renderComponent } from '@/declared-components/declared-components';\nimport pageData from '../../temporanydatas/datastructure.json';\n\nfunction ".concat(routeName, "() {\n  return (\n    <div>\n      {pageData.map((componentData, index) => renderComponent(componentData as ComponentData, index))}\n    </div>\n  );\n}\n\nexport default ").concat(routeName, ";");
    // Write the route file
    fs.writeFileSync(routePath, routeContent);
    // Handle sub-routes
    if (routeData.subroutes && routeData.subroutes.length > 0) {
        routeData.subroutes.forEach(function (subroute) {
            createRoute(subroute, routeDir);
        });
    }
}
// Loop through jsonData and create routes
jsonData.forEach(function (routeData) {
    createRoute(routeData, baseDir);
});
// Get a list of all directories in the baseDir
var allDirs = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(function (dir) { return dir.isDirectory(); })
    .map(function (dir) { return dir.name; });
// Extract routes from routeexample.json
var routes = jsonData.map(function (route) { return route.route; });
// Find directories that need to be deleted
var dirsToDelete = allDirs.filter(function (dir) { return !routes.includes(dir); });
// Delete directories that are not in the routeexample.json
dirsToDelete.forEach(function (dir) {
    var dirPath = path.join(baseDir, dir);
    fs.rmdirSync(dirPath, { recursive: true });
    console.log("Deleted directory: ".concat(dirPath));
});
