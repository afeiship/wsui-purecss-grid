'use strict';

const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-dart-sass'); // 使用 gulp-dart-sass
const fs = require('fs');
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
});


//clean
gulp.task('clean', function() {
  return $.del(['dist', '.tmp']);
});

gulp.task('puregrid', function() {
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

gulp.task('styles', function() {
  return gulp
    .src('.tmp/index.scss')
    .pipe($.jswork.pkgHeader())
    .pipe(sass({ silenceDeprecations: ['legacy-js-api'] }))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', gulp.series(['clean', 'puregrid', 'styles']));
