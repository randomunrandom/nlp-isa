const {src, dest, parallel} = require('gulp');
let cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function css() {
  return src(['css/*.css', '!css/clean-*.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ prefix: 'clean-' }))
    .pipe(dest('css'))
}

function js() {
  return src(['js/*.js', '!js/*.min.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('js'));
}
//
exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
