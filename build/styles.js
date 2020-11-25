(function () {
  ('use strict');

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });


  gulp.task('styles', function () {
    return gulp
      .src('.tmp/index.scss')
      .pipe($.jswork.pkgHeader())
      .pipe(gulp.dest('dist'))
      .pipe($.sass())
      .pipe(gulp.dest('dist'));;
  });
})();
