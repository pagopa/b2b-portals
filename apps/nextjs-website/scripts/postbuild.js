const fs = require('fs');
const path = require('path');

const distDir = 'out'; // Next.js output directory
const previewPage = path.join(distDir, 'preview.html');
const previewTxt = path.join(distDir, 'preview.txt');

try {
  if (fs.existsSync(previewPage)) {
    fs.unlinkSync(previewPage);
    console.log('Removed preview.html');
  }
} catch (error) {
  // If removing preview.html fails, let the build finish successfully with a warning
  console.log('Could not remove preview.html, due to error: ', error);
}

try {
  if (fs.existsSync(previewTxt)) {
    fs.unlinkSync(previewTxt);
    console.log('Removed preview.txt');
  }
} catch (error) {
  // If removing preview.txt fails, let the build finish successfully with a warning
  console.log('Could not remove preview.txt, due to error: ', error);
}
