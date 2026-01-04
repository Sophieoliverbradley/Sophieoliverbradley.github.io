const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../..");

/**
 * Recursively remove a directory
 */
function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        removeDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

/**
 * Remove a file or directory
 */
function removeItem(itemPath) {
  if (fs.existsSync(itemPath)) {
    const stat = fs.lstatSync(itemPath);
    if (stat.isDirectory()) {
      removeDir(itemPath);
    } else {
      fs.unlinkSync(itemPath);
    }
  }
}

/**
 * Recursively move a file or directory
 */
function moveItem(srcPath, destPath) {
  if (!fs.existsSync(srcPath)) {
    return;
  }

  const stat = fs.lstatSync(srcPath);

  if (stat.isDirectory()) {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Move all items in the directory
    fs.readdirSync(srcPath).forEach((item) => {
      moveItem(path.join(srcPath, item), path.join(destPath, item));
    });

    // Remove the source directory after moving its contents
    fs.rmdirSync(srcPath);
  } else {
    // Ensure parent directory exists
    const destParent = path.dirname(destPath);
    if (!fs.existsSync(destParent)) {
      fs.mkdirSync(destParent, { recursive: true });
    }

    // Remove destination if it exists
    if (fs.existsSync(destPath)) {
      if (fs.lstatSync(destPath).isDirectory()) {
        removeDir(destPath);
      } else {
        fs.unlinkSync(destPath);
      }
    }

    // Move the file
    fs.renameSync(srcPath, destPath);
  }
}

console.log("Cleaning files and folders based on .cursorignore patterns...");

// Read all items in the root directory
const items = fs.readdirSync(rootDir);

items.forEach((item) => {
  const itemPath = path.join(rootDir, item);
  const stat = fs.lstatSync(itemPath);

  // Skip source folder and .cursorignore file (these are in the negation patterns)
  if (item === "source" || item === ".cursorignore") {
    return;
  }

  // Remove files with extensions (*.* pattern)
  if (stat.isFile() && path.extname(item) !== "") {
    console.log(`Removing file: ${item}`);
    fs.unlinkSync(itemPath);
    return;
  }

  // Remove specific folders/files: 404, icons, page-data, static
  if (
    item === "404" ||
    item === "icons" ||
    item === "page-data" ||
    item === "static"
  ) {
    console.log(
      `Removing ${stat.isDirectory() ? "directory" : "file"}: ${item}`
    );
    removeItem(itemPath);
    return;
  }
});

console.log("Cleanup complete!");

// Move contents of source/public to root directory
const publicDir = path.join(rootDir, "source", "public");

if (fs.existsSync(publicDir)) {
  console.log("Moving contents of source/public to root directory...");
  const publicItems = fs.readdirSync(publicDir);

  if (publicItems.length === 0) {
    console.log("source/public is empty, nothing to move.");
  } else {
    publicItems.forEach((item) => {
      const srcPath = path.join(publicDir, item);
      const destPath = path.join(rootDir, item);
      console.log(`Moving: ${item}`);
      moveItem(srcPath, destPath);
    });
    console.log("Move complete!");
  }
} else {
  console.log("source/public directory does not exist, skipping move.");
}

// Remove _gatsby and ~partytown folders from root directory
console.log("Removing _gatsby and ~partytown folders...");
const foldersToRemove = ["_gatsby", "~partytown"];

foldersToRemove.forEach((folderName) => {
  const folderPath = path.join(rootDir, folderName);
  if (fs.existsSync(folderPath)) {
    console.log(`Removing folder: ${folderName}`);
    removeDir(folderPath);
  }
});

console.log("Build script complete!");
