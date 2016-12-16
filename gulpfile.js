const gulp = require('gulp');
const replace = require('gulp-replace');
const argv = require('yargs').argv;
const pkg = require('./package.json');
const util = require('utility-tool-sd');
const git = require('gulp-git');
const gitignore = require('gulp-gitignore');

gulp.task('add', () => {
  return gulp.src('./*')
    .pipe(gitignore())
    .pipe(git.add());
});

gulp.task('commit', () => {
  return gulp.src('./*')
    .pipe(gitignore())
    .pipe(git.commit(argv.commitMessage));
});
// 1
gulp.task('push', () => {
  console.log('HW');
});

gulp.task('tag', () => {
  console.log('HW');
});

gulp.task('bump', ['add', 'commit', 'tag', 'push'], () => {
  console.log('HW');
});

gulp.task('bumper', () => {
  const newVersion = util.bump(pkg.version, argv.bumpType);
  gulp.src(['./package.json'])
    .pipe(replace(`"version": "${pkg.version}"`, `"version": "${newVersion}"`))
    .pipe(gulp.dest('./'));
});
