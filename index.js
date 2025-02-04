import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
// ...
(async () => {
  try {
    // Optimize all PNG/JPG files in "images" folder
    const files = await imagemin(['images/*.{jpg,jpeg,png}'], {
      destination: 'build/images',
      plugins: [
        imageminMozjpeg({ quality: 75 }), // JPEG compression
        imageminPngquant({ quality: [0.6, 0.8] }) // PNG compression
      ]
    });
    
    console.log('Images optimized:', files);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
})();