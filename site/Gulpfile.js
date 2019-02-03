const {src, dest, parallel} = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function css() {
//   return src('client/templates/*.less')
//     .pipe(minifyCSS())
//     .pipe(dest('build/css'))
}

function js() {
  return src('js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('js'));
}
//
exports.js = js;
// exports.css = css;
exports.default = parallel(css, js);
