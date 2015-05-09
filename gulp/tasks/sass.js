var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var gutil = require('gulp-util');

function querySass() {
  var globPath = 'public/css/**/*.scss';
  var destPath = 'public/css/dist';

    return watch(globPath, function() {
      gutil.log(gutil.colors.magenta('sass'),destPath);
      gulp.src('public/css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest(destPath))
    });
}

module.exports = querySass;
