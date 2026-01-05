import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const GALLERY_DIR = join(__dirname, '../src/lib/assets/gallery');
const OPTIMIZED_DIR = join(GALLERY_DIR, 'optimized');

if (!existsSync(OPTIMIZED_DIR)) {
  mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

try {
  execSync('which convert', { stdio: 'ignore' });
} catch (error) {
  console.error('ImageMagick (convert) is not installed. Please install it:');
  console.error('   Ubuntu/Debian: sudo apt-get install imagemagick');
  console.error('   macOS: brew install imagemagick');
  process.exit(1);
}

function optimizeImage(inputPath, outputPath) {
  const ext = extname(inputPath).toLowerCase();
  const filename = basename(inputPath, ext);
  
  console.log(`Optimizing: ${filename}${ext}`);
  
  try {
    if (ext === '.webp') {
      execSync(`cwebp -q 85 "${inputPath}" -o "${outputPath}"`, { stdio: 'pipe' });
    } else {
      const webpPath = join(OPTIMIZED_DIR, `${filename}.webp`);
      execSync(`convert "${inputPath}" -resize 1920x1080\\> -quality 85 -strip "${webpPath}"`, { stdio: 'pipe' });
      console.log(`   Converted to WebP: ${basename(webpPath)}`);
      
      const jpegPath = join(OPTIMIZED_DIR, `${filename}-optimized.jpg`);
      execSync(`convert "${inputPath}" -resize 1920x1080\\> -quality 85 -strip "${jpegPath}"`, { stdio: 'pipe' });
      console.log(`   Created JPEG fallback: ${basename(jpegPath)}`);
    }
  } catch (error) {
    console.error(`   Optimization failed: ${error.message}`);
  }
}

function getImageFiles(dir) {
  const files = readdirSync(dir);
  return files.filter(file => {
    const ext = extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext) && !file.includes('-optimized');
  });
}

async function main() {
  console.log('Starting image optimization...\n');
  
  const imageFiles = getImageFiles(GALLERY_DIR);
  
  if (imageFiles.length === 0) {
    console.log('No images found for optimization');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize:\n`);
  
  let optimizedCount = 0;
  
  for (const file of imageFiles) {
    const inputPath = join(GALLERY_DIR, file);
    const stats = statSync(inputPath);
    
    console.log(`${file} (${(stats.size / 1024).toFixed(1)} KB)`);
    
    optimizeImage(inputPath, join(OPTIMIZED_DIR, file));
    optimizedCount++;
    
    console.log();
  }
  
  console.log(`Done! Optimized ${optimizedCount} images.`);
  console.log(`Optimized images are saved in: ${OPTIMIZED_DIR}`);
  console.log('\nUsage tips:');
  console.log('   1. Update your code to use images from the optimized/ directory');
  console.log('   2. Prefer .webp format for modern browsers');
  console.log('   3. Use the <picture> element to provide multiple formats');
}

main().catch(console.error);
