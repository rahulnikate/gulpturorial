var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');

gulp.task('sass', function () {
    return gulp.src('app/scss/*.*')
            .pipe(sass())
            .pipe(browserSync.reload({
                stream : true
            }))
            .pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('jshint-stylish', function () {
    return gulp.src('app/scripts/index.js')
                .pipe(jshint())
                .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('watch', ['jshint-stylish','sass'], function () {
    gulp.watch('app/scss/*.*', ['sass']);
    gulp.watch('app/scripts/index.js', ['jshint-stylish']);
});