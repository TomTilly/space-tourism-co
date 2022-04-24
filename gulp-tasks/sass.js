// Credit to Andy Bell and his Eleventy from Scratch course (https://learneleventyfromscratch.com/)

const { dest, src } = require('gulp');
const sassProcessor = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssNano = require('cssnano');
const gulpif = require('gulp-if');

// In production, we'll minify the CSS
const isProduction = process.env.NODE_ENV === 'production';

// An array of outputs that should be sent over to includes
const criticalStyles = ['critical.scss'];

const calculateOutputDir = ({ history }) => {
  // By default, we want a CSS file in our dist directory, so the
  // HTML can grab it with a <link />
  let response = './dist/css';

  // Get everything after the last slash
  const sourceFileName = /[^(/|\\)]*$/.exec(history[0])[0];

  // If this is critical CSS, we want it to go
  // to the _includes directory, so we can include it
  // directly in a <style> element
  if (criticalStyles.includes(sourceFileName)) {
    response = './src/_includes/css';
  }

  return response;
};

const sass = () =>
  src('./src/scss/**/*.scss')
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(gulpif(isProduction, postcss([autoprefixer, cssNano])))
    .pipe(dest(calculateOutputDir, { sourceMaps: !isProduction }));

module.exports = sass;
