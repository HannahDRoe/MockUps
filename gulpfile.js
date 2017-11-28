// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    
        browserSync.init({
            server: {
                baseDir: "./",
                index: "./Landing-Page.html"
            }
        });
    
        gulp.watch("css/sass/*.scss", ['sass']);
        gulp.watch("*.html").on('change', browserSync.reload);
    });


gulp.task('sass', function() {
    gulp.src('css/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/stylesheets/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);