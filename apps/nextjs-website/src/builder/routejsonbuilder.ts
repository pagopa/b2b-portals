import * as fs from 'fs';
import * as path from 'path';

interface RouteData {
  route: string;
  subroutes?: RouteData[];
}

interface ItemAttributes {
  attributes: {
    title: string;
    visibile: boolean;
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

function extractRouteStructure(itemAttributes: ItemAttributes, parentRoute: string = ''): RouteData {
  const { title, children } = itemAttributes.attributes; // Update this line

  console.log('Processing attributes:', itemAttributes.attributes);

  const routeObj: RouteData = { route: parentRoute + title }; // Update this line

  console.log('Generated route:', routeObj.route);

  if (children && children.data && children.data.length > 0) {
    routeObj.subroutes = children.data.map((child) => extractRouteStructure(child, routeObj.route + '/'));
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
