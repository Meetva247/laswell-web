const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        let importPath = match[1];
        if (importPath.startsWith('.')) {
            // It's a relative import
            let absoluteImportPath = path.resolve(path.dirname(filePath), importPath);
            
            // Resolve extension
            let finalPathToCheck = absoluteImportPath;
            if (!path.extname(absoluteImportPath)) {
                if (fs.existsSync(absoluteImportPath + '.jsx')) {
                    finalPathToCheck += '.jsx';
                } else if (fs.existsSync(absoluteImportPath + '.js')) {
                    finalPathToCheck += '.js';
                } else {
                    // It might be a directory import (e.g. ./components -> ./components/index.js) but we don't have those.
                    if (fs.existsSync(absoluteImportPath) && fs.statSync(absoluteImportPath).isDirectory()) {
                        continue; // Skip directory imports for this simple check
                    }
                }
            }

            if (!fs.existsSync(finalPathToCheck)) {
                 // console.log(`Missing file: ${importPath} in ${filePath}`);
                 continue;
            }

            // Check exact casing part by part
            let currentPath = filePath;
            let partsToVerify = path.relative(path.dirname(filePath), finalPathToCheck).split(path.sep);
            
            let currentDir = path.dirname(filePath);
            for (let part of partsToVerify) {
                if (part === '..') {
                    currentDir = path.dirname(currentDir);
                    continue;
                }
                if (part === '.') {
                    continue;
                }

                let dirFiles = fs.readdirSync(currentDir);
                let realName = dirFiles.find(f => f.toLowerCase() === part.toLowerCase());
                
                if (realName && realName !== part) {
                     console.log(`Case mismatch! Imported as "${part}", but actual item is "${realName}" inside ${currentDir}`);
                     console.log(`Found in file: ${filePath}`);
                     console.log(`Import statement: ${importPath}\n`);
                }
                currentDir = path.join(currentDir, realName || part);
            }
        }
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            checkFile(fullPath);
        }
    }
}

console.log("Starting check...");
traverse(path.join(__dirname, 'src'));
console.log("Check complete.");
