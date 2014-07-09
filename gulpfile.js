var gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jsSrcDir = './src/',
    distPath = './dist/';

gulp.task('stylesheets', function () {
    gulp.src([
        './css/machine.css',
        './src/vendor/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(concat('machine.css'))
    .pipe(minifyCSS({removeEmpty: true, keepSpecialComments: 0}))
    .pipe(gulp.dest(distPath))
});

gulp.task('scripts', function () {
    gulp.src([
        jsSrcDir + 'vendor/jquery/dist/jquery.min.js',
        jsSrcDir + 'vendor/underscore/underscore.js',
        jsSrcDir + 'vendor/backbone/backbone.js',
        jsSrcDir + 'lib/ns.js',
        jsSrcDir + 'app/views/blocks/CommandsTable.js',
        jsSrcDir + 'app/views/blocks/MemoryPanel.js',
        jsSrcDir + 'app/views/blocks/PositionPanel.js',
        jsSrcDir + 'app/models/Command.js',
        jsSrcDir + 'app/models/Commands.js',
        jsSrcDir + 'app/services/Commands.js',
        jsSrcDir + 'app/views/index/AboutModal.js',
        jsSrcDir + 'app/views/index/Index.js',
        jsSrcDir + 'app/views/Layout.js',
        jsSrcDir + 'app/App.js'
    ])
    .pipe(concat('machine.js'))
    .pipe(gulp.dest(distPath))
    .pipe(rename('machine.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distPath))
});

gulp.task('default', ['stylesheets', 'scripts']);