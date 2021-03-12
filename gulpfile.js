const { src, dest, task, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

function browsersync() {
  browserSync.init({
    server: 'src/',
    notify: false,
  });
}

function buildSass() {
  return src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
        }),
        cssnano(),
      ])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function html() {
  return src('src/**/*.html')
    .pipe(dest('dist/'))
    .pipe(browserSync.stream())
}

function serve() {
  watch('src/scss/**/*.scss', buildSass);
  watch('src/**/*.html', html);
}

function copy() {
  return src(['src/img/**/*.*', 'src/css/**/*.css'], {
    base: 'src/',
  }).pipe(dest('dist'));
}
  
function cleanDist() {
  return del('dist/**/*', { forse: true });
}

exports.serve = serve;
exports.buildSass = buildSass;

exports.build = series(cleanDist, buildSass, html, copy);
exports.default = series(buildSass, parallel(browsersync, serve));