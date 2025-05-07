const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

const svgDir = path.join(__dirname, 'public/svgs'); // cambia si tus SVGs están en otro lado

function optimizeSvgFiles(folderPath) {
  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    const fullPath = path.join(folderPath, file);

    if (fs.statSync(fullPath).isFile() && file.endsWith('.svg')) {
      const original = fs.readFileSync(fullPath, 'utf8');
      const optimized = optimize(original, {
        path: fullPath,
        multipass: true,
        plugins: [
          'removeDimensions',
          'removeDoctype',
          'removeComments',
          'removeMetadata',
          'removeTitle',
          'removeDesc',
          'cleanupAttrs',
          'convertStyleToAttrs',
          'removeRasterImages'
        ]
      });

      fs.writeFileSync(fullPath, optimized.data);
      console.log(`✅ Optimized: ${file}`);
    }
  });
}

if (fs.existsSync(svgDir)) {
  optimizeSvgFiles(svgDir);
} else {
  console.log(`❌ Directory not found: ${svgDir}`);
}
