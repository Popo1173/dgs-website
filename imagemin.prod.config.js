const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/img/**/*.{jpg,png,gif,svg,ico}'], {
  plugins: [
    imageminMozjpeg({quality: 80}),
    imageminPngquant({quality: [0.6, 0.8]}),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => output.replace('src/img/', './dist/img/'),
}).then(() => {
  console.log('Images optimized');
});
