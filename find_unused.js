const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');
const assetsDir = path.join(rootDir, 'assets/images');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allSrcFiles = getAllFiles(srcDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));
const srcContents = allSrcFiles.map(f => fs.readFileSync(f, 'utf8'));

function isUsed(fileName, extension) {
    const baseName = fileName.replace(extension, '');
    const regex = new RegExp(baseName, 'i');
    return srcContents.some(content => regex.test(content));
}

console.log('--- Unused Icons (src/Icons) ---');
const icons = fs.readdirSync(path.join(srcDir, 'Icons'));
const unusedIcons = [];
icons.forEach(icon => {
    if (!isUsed(icon, path.extname(icon))) {
        console.log(icon);
        unusedIcons.push(path.join(srcDir, 'Icons', icon));
    }
});

console.log('\n--- Unused Images (assets/images) ---');
const images = fs.readdirSync(assetsDir);
const unusedImages = [];
images.forEach(image => {
    if (!isUsed(image, path.extname(image))) {
        console.log(image);
        unusedImages.push(path.join(assetsDir, image));
    }
});

console.log('\n--- Unused Screens (src/screens) ---');
const screens = getAllFiles(path.join(srcDir, 'screens')).filter(f => f.endsWith('.jsx'));
const unusedScreens = [];

// Special check for screens: are they imported in Navigations?
const navDir = path.join(srcDir, 'Navigations');
const navFiles = fs.readdirSync(navDir).map(f => fs.readFileSync(path.join(navDir, f), 'utf8')).join('\n');

screens.forEach(screenPath => {
    const screenName = path.basename(screenPath, '.jsx');
    if (!navFiles.includes(screenName)) {
        console.log(path.relative(srcDir, screenPath));
        unusedScreens.push(screenPath);
    }
});

// Uncomment below to actually delete them if you are sure
/*
unusedIcons.forEach(f => fs.unlinkSync(f));
unusedImages.forEach(f => fs.unlinkSync(f));
unusedScreens.forEach(f => fs.unlinkSync(f));
*/
