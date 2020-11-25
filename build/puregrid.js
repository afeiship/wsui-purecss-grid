(function () {
  ('use strict');

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  gulp.task('puregrid', function () {
    return gulp
      .src([
        'src/index.scss',
        './node_modules/purecss/build/grid*.css',
        '!./node_modules/purecss/build/*min.css',
      ])
      .pipe($.replace('pure-', '#{$wsui-purecss-grid-prefix}'))
      .pipe($.concat('index.scss'))
      .pipe(gulp.dest('.tmp'));
  });
})();
