import * as fs from 'fs';
import * as path from 'path';

interface RouteData {
  route: string;
  subroutes?: RouteData[];
}

interface ItemAttributes {
  title: string;
  visible: boolean;
  children?: {
    data: ItemAttributes[];
  };
}

interface ApiData {
  data: {
    attributes: ItemAttributes;
  }[];
}

function extractRouteStructure(attributes: ItemAttributes, parentRoute: string = ''): RouteData {
  const { title, children } = attributes;
  const routeObj: RouteData = { route: parentRoute + title };

  if (children && children.data && children.data.length > 0) {
    routeObj.subroutes = children.data.map((child) => extractRouteStructure(child, parentRoute + title + '/'));
  }

  return routeObj;
}

// Specify the correct path to your JSON file
const apiDataPath = path.join(__dirname, 'temporanydatas', 'datastructure-copy.json');

// Read the API JSON data
const apiData: ApiData = require(apiDataPath);

// Add console.log to trace the data
console.log('API Data:', JSON.stringify(apiData, null, 2));

// Extract route structure from the API data
const routeStructure: RouteData[] = apiData.data.map((item) => extractRouteStructure(item.attributes));

// Add console.log to trace the routeStructure
console.log('Route Structure:', JSON.stringify(routeStructure, null, 2));

// Write the resulting route structure to routeexample.json
const routeexamplePath: string = path.join(__dirname, 'temporanydatas', 'routeexample.json');
fs.writeFileSync(routeexamplePath, JSON.stringify(routeStructure, null, 2));

console.log('Route structure has been populated and written to routeexample.json.');
