"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
// Helper function to sanitize and transform strings
function sanitizeString(input) {
    // Replace special characters with their corresponding letters
    var sanitized = input
        .replace(/[^a-zA-Z0-9 -/]/g, '') // Remove special characters except "-", "/", and " "
        .replace(/[èé]/g, 'e') // Replace è and é with e
        .replace(/[à]/g, 'a') // Replace à with a
        .replace(/[ò]/g, 'o') // Replace ò with o
        .replace(/[ì]/g, 'i') // Replace ì with i
        .replace(/[ù]/g, 'u'); // Replace ù with u
    return sanitized;
}
function extractRouteStructure(attributes) {
    var _a = attributes.attributes, title = _a.title, children = _a.children, url = _a.url;
    var sanitizedUrl = sanitizeString(url); // Sanitize the "url" property
    var routeWithoutSlashes = sanitizedUrl.replace(/\//g, ''); // Remove '/' symbols
    console.log('Processing attributes:', attributes);
    var routeObj;
    if (title.toLowerCase() === 'home') {
        routeObj = { route: '/' };
    }
    else {
        routeObj = { route: routeWithoutSlashes }; // Use the sanitized route
    }
    console.log('Generated route:', routeObj.route);
    if (children && children.data && children.data.length > 0) {
        routeObj.subroutes = children.data.map(function (child) { return extractRouteStructure(child); });
    }
    return routeObj;
}
// Specify the correct path to your JSON file
var apiDataPath = path.join(__dirname, 'temporanydatas', 'datastructure-copy.json');
// Read the API JSON data
var apiData = require(apiDataPath);
// Add console.log to trace the data
console.log('API Data:', JSON.stringify(apiData, null, 2));
if (apiData.data && apiData.data[0] && apiData.data[0].attributes.items && apiData.data[0].attributes.items.data) {
    // Extract route structure from the API data
    var routeStructure = apiData.data[0].attributes.items.data.map(function (item) { return extractRouteStructure(item); });
    // Add console.log to trace the routeStructure
    console.log('Route Structure:', JSON.stringify(routeStructure, null, 2));
    // Write the resulting route structure to routeexample.json
    var routeexamplePath = path.join(__dirname, 'temporanydatas', 'routeexample.json');
    fs.writeFileSync(routeexamplePath, JSON.stringify(routeStructure, null, 2));
    console.log('Route structure has been populated and written to routeexample.json.');
}
else {
    console.error('API Data is missing or empty.');
}
