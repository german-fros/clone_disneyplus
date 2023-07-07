const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')

function compilaSass() {
    return gulp.src('src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/styles'))
}

function comprimeImg() {
    return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}

exports.default = function() {
    gulp.watch('src/styles/**/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}

exports.img = comprimeImg