"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require('path');
// Read your JSON data
var jsonData = require('./temporanydatas/routeexample.json');
// Get the directory where routebuilder.ts is located
var currentDir = __dirname;
// Specify the base directory where you want to create the route files
var baseDir = path.join(currentDir, '../app');
// Function to create routes recursively
function createRoute(routeData, parentDir) {
    if (routeData.route !== '/') { // Skip routes with route: "/"
        // Remove special characters like hyphens from routeData.route
        var sanitizedRoute = routeData.route.replace(/[^a-zA-Z0-9-]/g, '');
        // Capitalize the first letter and the first letter after a hyphen for the function name
        var routeName = sanitizedRoute.split('-').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join('');
        var routeDir_1 = path.join(parentDir, sanitizedRoute);
        var routePath = path.join(routeDir_1, 'page.tsx');
        // Create the directory if it doesn't exist
        if (!fs.existsSync(routeDir_1)) {
            fs.mkdirSync(routeDir_1, { recursive: true });
        }
        var routeContent = "'use client'\nimport React from 'react';\nimport { ComponentData, renderComponent } from '@/declared-components/declared-components';\nimport pageData from '../../temporanydatas/pageData.json';\n\nfunction ".concat(routeName, "() {\n  const pageContent = pageData.data.find((item) => item.attributes.slug === '").concat(sanitizedRoute, "') || { attributes: { Sezioni: [] } };\n  const content = pageContent.attributes.Sezioni || [];\n  \n  return (\n    <div>\n      {content.map((componentData, index) => {\n        const renderedComponent = renderComponent(componentData as unknown as ComponentData, index);\n        return renderedComponent;\n      })}\n    </div>\n  );\n}\n\nexport default ").concat(routeName, ";");
        // Write the route file
        fs.writeFileSync(routePath, routeContent);
        // Handle sub-routes
        if (routeData.subroutes && routeData.subroutes.length > 0) {
            routeData.subroutes.forEach(function (subroute) {
                createRoute(subroute, routeDir_1);
            });
        }
    }
}
// Loop through jsonData and create routes
jsonData.forEach(function (routeData) {
    createRoute(routeData, baseDir);
});
// Function to delete subdirectories if they are not in the JSON data
function deleteSubdirectories(parentDir, routeData) {
    var existingSubdirs = fs.readdirSync(parentDir);
    existingSubdirs.forEach(function (dir) {
        var _a;
        var dirPath = path.join(parentDir, dir);
        if (dir !== 'node_modules') {
            var shouldDelete = !((_a = routeData.subroutes) === null || _a === void 0 ? void 0 : _a.some(function (subroute) { return subroute.route === dir; }));
            if (fs.lstatSync(dirPath).isDirectory() && shouldDelete) {
                deleteDirectoryRecursive(dirPath);
                console.log("Deleted directory: ".concat(dirPath));
            }
        }
    });
}
// Call the function to delete subdirectories for each route, excluding the root
jsonData.slice(1).forEach(function (routeData) {
    var routeDir = path.join(baseDir, routeData.route);
    deleteSubdirectories(routeDir, routeData);
});
// Function to delete directories and their contents recursively
function deleteDirectoryRecursive(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach(function (file) {
            var curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteDirectoryRecursive(curPath); // Recursive call for subdirectories
            }
            else {
                fs.unlinkSync(curPath); // Delete files in the directory
            }
        });
        fs.rmdirSync(directoryPath); // Delete the directory itself
    }
}
// Function to delete directories that are not in the JSON data
function deleteDirectoriesNotInJsonData() {
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
        deleteDirectoryRecursive(dirPath); // Delete directory and its contents
        console.log("Deleted directory: ".concat(dirPath));
    });
}
// Call the function to delete directories that are not in the JSON data
deleteDirectoriesNotInJsonData();
