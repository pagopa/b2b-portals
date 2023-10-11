"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function extractRouteStructure(itemAttributes, parentRoute) {
    if (parentRoute === void 0) { parentRoute = ''; }
    var _a = itemAttributes.attributes, title = _a.title, children = _a.children; // Update this line
    console.log('Processing attributes:', itemAttributes.attributes);
    var routeObj = { route: parentRoute + title }; // Update this line
    console.log('Generated route:', routeObj.route);
    if (children && children.data && children.data.length > 0) {
        routeObj.subroutes = children.data.map(function (child) { return extractRouteStructure(child, routeObj.route + '/'); });
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
