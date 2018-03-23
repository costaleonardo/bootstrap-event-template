const gulp = require('gulp'),
      rename = require('gulp-rename'),
      gulpSass = require('gulp-sass'),
      cleanCss = require('gulp-clean-css'),
      minifyJs = require('gulp-js-minify');

gulp.task('compile-sass', () => {
  return gulp.src('./sass/style.scss')
             .pipe(gulpSass({errLogToConsole: true}))
             .pipe(gulp.dest('./css'));
});

gulp.task('watch-sass', () => {
  gulp.watch('./sass/**/*.scss', ['compile-sass']);
});
