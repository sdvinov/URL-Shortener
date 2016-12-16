const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('default', () => {
  console.log('HW');
});

gulp.task('add', () => {
  console.log('HW');
});

gulp.task('commit', () => {
  console.log('HW');
});

gulp.task('push', () => {
  console.log('HW');
});

gulp.task('tag', () => {
  console.log('HW');
});

gulp.task('bump', ['add', 'commit', 'tag', 'push'], () => {
  console.log('HW');
});

gulp.task('bumpMajor', () => {
  const pkg = require('./package.json');
  const util = require('utility-tool-sd');
  const newVersion = util.bump(pkg.version, 'major');
  gulp.src(['./package.json'])
    .pipe(replace("version": pkg.version, "version": newVersion))
    .pipe(gulp.dest('./'));
  pkg.version = newVersion;
});
