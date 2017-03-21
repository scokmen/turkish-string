'use strict';

/**
 * Imports
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');

/**
 * Configs
 */
var specFiles = './spec/**/*.[sS]pec.js';
var sourceFile = './src/turkish-string.js';
var destinationFile = 'turkish-string.min.js';

//Run js-hint for source file.
gulp.task('js:hint', function () {
    gulp.src(sourceFile)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
});

//Run test specs.
gulp.task('js:test', function () {
    gulp.src(specFiles)
        .pipe(jasmine());
});

//Build production source.
gulp.task('js:build', function () {
    return gulp.src(sourceFile)
        .pipe(uglify())
        .pipe(rename(destinationFile))
        .pipe(gulp.dest('dist'));
});
