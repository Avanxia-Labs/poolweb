// scripts/optimize-assets.js
// Unified asset optimization: images, SVGs, and videos under public/

const fs = require('fs');
const path = require('path');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const { optimize } = require('svgo');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');

// Point ffmpeg
ffmpeg.setFfmpegPath(ffmpegPath);

const publicDir = path.join(__dirname, '../public');

// 1. Optimize JPG/PNG
async function optimizeImages() {
  console.log('🔄 Optimizing JPG/PNG...');
  await imagemin([
    `${publicDir}/**/*.{jpg,jpeg,png}`
  ], {
    destination: publicDir,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.7, 0.9] })
    ]
  });
  console.log('✅ Images optimized');
}

// 2. Optimize SVGs
async function optimizeSVGs() {
  console.log('🔄 Optimizing SVGs...');
  await imagemin([
    `${publicDir}/**/*.svg`
  ], {
    destination: publicDir,
    plugins: [
      imageminSvgo({
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupAttrs', active: true },
          { name: 'convertStyleToAttrs', active: true },
          { name: 'removeComments', active: true },
          { name: 'removeMetadata', active: true }
        ]
      })
    ]
  });
  console.log('✅ SVGs optimized');
}

// 3. Optimize videos (overwrites originals)
function optimizeVideos() {
  console.log('🔄 Optimizing videos...');
  const exts = ['.mp4', '.mov', '.mkv', '.webm'];
  const files = [];

  function collect(dir) {
    fs.readdirSync(dir).forEach(file => {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) return collect(full);
      if (exts.includes(path.extname(file).toLowerCase())) files.push(full);
    });
  }

  collect(publicDir);

  return Promise.all(files.map(input => new Promise(resolve => {
    console.log(` - ${path.relative(publicDir, input)}`);
    ffmpeg(input)
      .videoCodec('libx264')
      .outputOptions(['-crf 28','-preset fast','-movflags +faststart','-c:a aac','-b:a 96k'])
      .on('end', () => { console.log(`✅ Video optimized: ${input}`); resolve(); })
      .on('error', err => { console.error(`❌ Error optimizing ${input}:`, err.message); resolve(); })
      .save(input);
  })));
}

// Run all
(async () => {
  try {
    await optimizeImages();
    await optimizeSVGs();
    await optimizeVideos();
    console.log('🎉 All assets optimized successfully');
  } catch (e) {
    console.error('Optimization pipeline failed:', e);
    process.exit(1);
  }
})();
