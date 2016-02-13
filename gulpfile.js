var gulp          = require('gulp'),

// Preview browser
    browserSync     = require('browser-sync'),
// Build helpers
    jade            = require('gulp-jade'),
    rename          = require('gulp-rename');








// Web Server
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: './www',
            index: 'index.html'
        },
        files: ["www/**/*"],
        port: 8080,
        open: true,
        notify: false,
        ghostMode: false
    });
});
gulp.task('server-exports', function() {
    browserSync({
        server: {
            baseDir: './exports',
            index: 'index.html'
        },
        files: ["www/**/*"],
        port: 8080,
        open: true,
        notify: false,
        ghostMode: false
    });
});