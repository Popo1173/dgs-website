const imagemin = require('imagemin-keep-folder');

imagemin(['src/img/**/*.{jpg,png,gif,svg,ico}'], {
  replaceOutputDir: (output) => output.replace('src/img/', './dist/img/'),
});
