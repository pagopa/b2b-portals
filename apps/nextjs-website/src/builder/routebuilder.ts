import * as fs from 'fs';
const path = require('path');

interface RouteData {
  route: string;
  subroutes?: { route: string }[];
}

// Read your JSON data
const jsonData: RouteData[] = require('./temporanydatas/routeexample.json');

// Get the directory where routebuilder.ts is located
const currentDir = __dirname;

// Specify the base directory where you want to create the route files
const baseDir = path.join(currentDir, '../app');

// Function to create routes recursively
function createRoute(routeData: RouteData, parentDir: string) {
  if (routeData.route !== '/') { // Skip routes with route: "/"
    // Remove special characters like hyphens from routeData.route
    const sanitizedRoute = routeData.route.replace(/[^a-zA-Z0-9-]/g, '');

    // Capitalize the first letter and the first letter after a hyphen for the function name
    const routeName = sanitizedRoute.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    const routeDir = path.join(parentDir, sanitizedRoute);
    const routePath = path.join(routeDir, 'page.tsx');

    // Create the directory if it doesn't exist
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

const routeContent = `'use client'
import React from 'react';
import { ComponentData, renderComponent } from '@/declared-components/declared-components';
import pageData from '../../temporanydatas/pageData.json';

function ${routeName}() {
  const pageContent = pageData.data.find((item) => item.attributes.slug === '${sanitizedRoute}') || { attributes: { Sezioni: [] } };
  const content = pageContent.attributes.Sezioni || [];
  
  return (
    <div>
      {content.map((componentData, index) => {
        const renderedComponent = renderComponent(componentData as unknown as ComponentData, index);
        return renderedComponent;
      })}
    </div>
  );
}

export default ${routeName};`;      

    // Write the route file
    fs.writeFileSync(routePath, routeContent);

    // Handle sub-routes
    if (routeData.subroutes && routeData.subroutes.length > 0) {
      routeData.subroutes.forEach((subroute: RouteData) => {
        createRoute(subroute, routeDir);
      });
    }
  }
}

// Loop through jsonData and create routes
jsonData.forEach((routeData) => {
  createRoute(routeData, baseDir);
});

// Function to delete subdirectories if they are not in the JSON data
function deleteSubdirectories(parentDir: string, routeData: RouteData) {
  const existingSubdirs = fs.readdirSync(parentDir);

  existingSubdirs.forEach((dir) => {
    const dirPath = path.join(parentDir, dir);
    if (dir !== 'node_modules') {
      const shouldDelete = !routeData.subroutes?.some((subroute) => subroute.route === dir);
      if (fs.lstatSync(dirPath).isDirectory() && shouldDelete) {
        deleteDirectoryRecursive(dirPath);
        console.log(`Deleted directory: ${dirPath}`);
      }
    }
  });
}

// Call the function to delete subdirectories for each route, excluding the root
jsonData.slice(1).forEach((routeData) => { // Start from index 1 to skip the root route
  const routeDir = path.join(baseDir, routeData.route);
  deleteSubdirectories(routeDir, routeData);
});

// Function to delete directories and their contents recursively
function deleteDirectoryRecursive(directoryPath: string) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirectoryRecursive(curPath); // Recursive call for subdirectories
      } else {
        fs.unlinkSync(curPath); // Delete files in the directory
      }
    });
    fs.rmdirSync(directoryPath); // Delete the directory itself
  }
}

// Function to delete directories that are not in the JSON data
function deleteDirectoriesNotInJsonData() {
  const allDirs = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  // Extract routes from routeexample.json
  const routes = jsonData.map((route) => route.route);

  // Find directories that need to be deleted
  const dirsToDelete = allDirs.filter((dir) => !routes.includes(dir));

  // Delete directories that are not in the routeexample.json
  dirsToDelete.forEach((dir) => {
    const dirPath = path.join(baseDir, dir);
    deleteDirectoryRecursive(dirPath); // Delete directory and its contents
    console.log(`Deleted directory: ${dirPath}`);
  });
}

// Call the function to delete directories that are not in the JSON data
deleteDirectoriesNotInJsonData();