var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var watch = require('gulp-watch');

gulp.task('js', function (cb) {
  pump([
        gulp.src('source/*/*.js'),
        uglify(),
        gulp.dest('compressed')
    ],
    cb
  );
});

gulp.task('watch', function () {
    // Endless stream mode
    gulp.watch('source/*/*.js', ['js']);
});
