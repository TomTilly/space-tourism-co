const { parallel, watch } = require('gulp');

// Tasks
const sass = require('./gulp-tasks/sass');
const fonts = require('./gulp-tasks/fonts.js');

const watcher = () => {
  watch('./src/scss/**/*.scss', { ignoreInitial: true }, sass);
};

exports.default = parallel(fonts, sass);

exports.watch = watcher;
