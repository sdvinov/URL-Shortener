const gulp = require('gulp');
const replace = require('gulp-replace');
const argv = require('yargs').argv;
const pkg = require('./package.json');
const util = require('utility-tool-sd');
const git = require('gulp-git');
const gitignore = require('gulp-gitignore');

// git add -A
gulp.task('add', () => {
  return gulp.src('./*')
    .pipe(gitignore())
    .pipe(git.add());
});

// git commit -m ""
gulp.task('commit', () => {
  return gulp.src('./*')
    .pipe(gitignore())
    .pipe(git.commit((argv.commitMessage).split('_').join(' ')));
});

// git push
gulp.task('push', () => {
  git.push('origin', argv.branch || 'master', (err) => {
    if (err) throw err;
  });
});

// Bump the version
gulp.task('bumper', () => {
  const newVersion = util.bump(pkg.version, argv.bumpType);
  gulp.src(['./package.json'])
    .pipe(replace(`"version": "${pkg.version}"`, `"version": "${newVersion}"`))
    .pipe(gulp.dest('./'));
});

// Tagging
gulp.task('tag', () => {
  const tagVersion = pkg.version;
  git.tag('v' + tagVersion, argv.versionMessage || 'Auto tag', (err) => {
    if (err) throw err;
  });
});

gulp.task('default', ['bumper', 'add', 'commit', 'tag', 'push']);
