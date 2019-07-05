var gulp = require('gulp');
var less = require('gulp-less');
var rev = require('gulp-rev-append');
var del = require("del");

// gulp.task("rev", function() {
//     gulp.src([
//             './**/*.less',
//             '!./node_modules/**/*.less',
//         ])
//         .pipe(less())
//         .pipe(rev())
//         .pipe(gulp.dest('build/style'));
// })

gulp.task("clean", function() {
        gulp.src('./build/index/index.html')
    })
    /* gulp.task("rev", function() {
        gulp.src('./index/index.html')
            .pipe(rev())
            .pipe(gulp.dest('build/index'));
    }) */
gulp.task('default', ['clean']);