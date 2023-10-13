import * as fs from 'fs';
import * as path from 'path';

// Helper function to sanitize and transform strings
function sanitizeString(input: string): string {
  // Replace special characters with their corresponding letters
  const sanitized = input
    .replace(/[^a-zA-Z0-9 -/]/g, '') // Remove special characters except "-", "/", and " "
    .replace(/[èé]/g, 'e') // Replace è and é with e
    .replace(/[à]/g, 'a') // Replace à with a
    .replace(/[ò]/g, 'o') // Replace ò with o
    .replace(/[ì]/g, 'i') // Replace ì with i
    .replace(/[ù]/g, 'u'); // Replace ù with u

  return sanitized;
}

interface RouteData {
  route: string;
  subroutes?: RouteData[];
}

interface ItemAttributes {
  attributes: {
    title: string;
    visibile: boolean;
    url: string;
    children?: {
      data: ItemAttributes[];
    };
  };
}

interface ApiData {
  data: {
    attributes: {
      items: {
        data: ItemAttributes[];
      };
    };
  }[];
}

function extractRouteStructure(attributes: ItemAttributes): RouteData {
  const { title, children, url } = attributes.attributes;
  const sanitizedUrl = sanitizeString(url); // Sanitize the "url" property
  const routeWithoutSlashes = sanitizedUrl.replace(/\//g, ''); // Remove '/' symbols

  console.log('Processing attributes:', attributes);

  let routeObj: RouteData;

  if (title.toLowerCase() === 'home') {
    routeObj = { route: '/' };
  } else {
    routeObj = { route: routeWithoutSlashes }; // Use the sanitized route
  }

  console.log('Generated route:', routeObj.route);

  if (children && children.data && children.data.length > 0) {
    routeObj.subroutes = children.data.map((child) => extractRouteStructure(child));
  }

  return routeObj;
}


// Specify the correct path to your JSON file
const apiDataPath = path.join(__dirname, 'temporanydatas', 'datastructure-copy.json');

// Read the API JSON data
const apiData: ApiData = require(apiDataPath);

// Add console.log to trace the data
console.log('API Data:', JSON.stringify(apiData, null, 2));

if (apiData.data && apiData.data[0] && apiData.data[0].attributes.items && apiData.data[0].attributes.items.data) {
  // Extract route structure from the API data
  const routeStructure: RouteData[] = apiData.data[0].attributes.items.data.map((item) => extractRouteStructure(item));

  // Add console.log to trace the routeStructure
  console.log('Route Structure:', JSON.stringify(routeStructure, null, 2));

  // Write the resulting route structure to routeexample.json
  const routeexamplePath: string = path.join(__dirname, 'temporanydatas', 'routeexample.json');
  fs.writeFileSync(routeexamplePath, JSON.stringify(routeStructure, null, 2));

  console.log('Route structure has been populated and written to routeexample.json.');
} else {
  console.error('API Data is missing or empty.');
}
