//导入模块
const gulp = require('gulp'),
      htmlmin = require('gulp-htmlmin'),
      sass = require('gulp-sass'),
      cssnano = require('gulp-cssnano'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      imagemin = require('gulp-imagemin'),
      babel = require('gulp-babel');
//发布任务
//子页
function fnHTML(){
    return gulp.src('./src/pages/*.html')
           .pipe(htmlmin())
           .pipe(gulp.dest('./dist/pages'));
}
//首页
function fnCopyIndex(){
    return gulp.src('./src/index.html')
           .pipe(gulp.dest('./dist'));
}
//图片
function fnImage(){
    return gulp.src('./src/img/*')
           .pipe(imagemin())
           .pipe(gulp.dest('./dist/img'));
}
//js
function fnJs(){
    return gulp.src('./src/js/*.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
           .pipe(uglify())
           .pipe(rename({suffix : '.min'}))
           .pipe(gulp.dest('./dist/js'));
}
//sass
function fnCss(){
    return gulp.src('./src/sass/*.scss')
           .pipe(sass({outputStyle : 'expanded'}))
        //    .pipe(cssnano())
           .pipe(rename({suffix : '.min'}))
           .pipe(gulp.dest('./dist/css'));
}
//lib
function fnLib(){
    return gulp.src('./src/lib/*.js')
           .pipe(gulp.dest('./dist/js'));
}
//监听
function fnWatch(){
    gulp.watch('./src/pages/*.html',fnHTML);
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/img/*',fnImage);
    gulp.watch('./src/js/*.js',fnJs);
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/lib/*.js',fnLib);
}
//导出模块
exports.pages = fnHTML;
exports.copy = fnCopyIndex;
exports.img = fnImage;
exports.js = fnJs;
exports.css = fnCss;
exports.lib = fnLib;
exports.default = fnWatch;
