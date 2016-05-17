
var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    autoprefixer = require('gulp-autoprefixer');



gulp.task('css_1.0.0', function (){
    gulp.src('1.0.0/less/base.less')
        .pipe(less())
        .pipe(gulp.dest('1.0.0/css'));
});

gulp.task('css_1.1.0', function (){
    gulp.src('1.1.0/less/base.less')
        .pipe(less())
        .pipe(gulp.dest('1.1.0/css'));
});

gulp.task('default',['css_1.0.0'], function() {
    //css
    gulp.watch('1.0.0/less/base.less', ['css_1.0.0']);
});

gulp.task('default',['css_1.1.0'], function() {
    //css
    gulp.watch('1.1.0/less/base.less', ['css_1.1.0']);
});
