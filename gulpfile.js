'use strict';

/**
 * Imports
 */
var gulp = require('gulp');
var karma = require('karma');
var open = require('gulp-open');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

/**
 * Configs
 */
var specFiles = './spec/**/*.[sS]pec.js';
var sourceFile = './src/turkish-string.js';
var destinationFile = 'turkish-string.min.js';

/**
 * @name js:hint
 * @description Run js-hint for source file.
 */
gulp.task('js:hint', function () {
    gulp.src(sourceFile)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
});

/**
 * @name js:test
 * @description Run unit tests.
 */
gulp.task('js:test', function () {
    gulp.src(specFiles)
        .pipe(jasmine());
});

/**
 * @name js:build
 * @description Build js file.
 */
gulp.task('js:build', function () {
    return gulp.src(sourceFile)
        .pipe(uglify())
        .pipe(rename(destinationFile))
        .pipe(gulp.dest('dist'));
});
