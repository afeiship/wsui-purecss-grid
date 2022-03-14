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
        'src/grids/_grids-core.scss',
        'src/grids/_grids-units.scss',
        'src/grids/_grids-responsive.scss',
      ])
      .pipe($.replace('pure-', '#{$wsui-purecss-grid-prefix}'))
      .pipe($.concat('index.scss'))
      .pipe(gulp.dest('.tmp'));
  });
})();
