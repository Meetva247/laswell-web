const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('d:/xairobotics/src/components', function (filePath) {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/border-white\/(5|10|20|30)/g, 'border-brand-border');
        newContent = newContent.replace(/text-white\/([0-9]+)/g, 'text-brand-text/$1');
        newContent = newContent.replace(/bg-white\/([0-9]+)/g, 'bg-brand-text/$1');

        // Ensure index.css is loaded or text-brand-text opacity is supported
        // Tailwind supports color opacity if variables are defined as rgb: `rgb(var(--color-brand-text) / <alpha-value>)`
        // We defined them as `#ffffff`, so `text-brand-text/50` might not work unless we change index.css

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent);
            console.log('Updated: ' + filePath);
        }
    }
});
