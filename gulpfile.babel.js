'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del';

const DIR = {
  SRC: 'src',
  DEST: 'dist'
}

const SRC = {
  JS: DIR.SRC + '/js/*.js',
  CSS: DIR.SRC + '/css/*.css',
  HTML: DIR.SRC + "/*.html",
  IMAGES: DIR.SRC + '/images/*'
};

const DEST = {
  JS: DIR.DEST + '/js',
  CSS: DIR.DEST + '/css',
  HTML: DIR.DEST + '/',
  IMAGES: DIR.DEST + '/images'
};

gulp.task('default', ['clean', 'js', 'css', 'html', 'images', 'watch'], () => {
  gutil.log('Gulp is running');
});

gulp.task('js', () => {
  return gulp.src(SRC.JS)
          .pipe(uglify())
          .pipe(gulp.dest(DEST.JS));
});

gulp.task('css', () => {
  return gulp.src(SRC.CSS)
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest(DEST.CSS));
});

gulp.task('html', () => {
  return gulp.src(SRC.HTML)
          .pipe(htmlmin({collapseWhitespace: true}))
          .pipe(gulp.dest(DEST.HTML));
});

gulp.task('images', () => {
  return gulp.src(SRC.IMAGES)
          .pipe(imagemin([
            imagemin.jpegtran({
              progressive: true
            })
          ]))
          .pipe(gulp.dest(DEST.IMAGES));
});

gulp.task('clean', () => {
  return del.sync([DIR.DEST]);
});

// watches
gulp.task('watch', () => {
  let watcher = {
    js: gulp.watch(SRC.JS, ['js']),
    css: gulp.watch(SRC.CSS, ['css']),
    html: gulp.watch(SRC.HTML, ['html']),
    images: gulp.watch(SRC.IMAGES, ['images'])
  };

  let notify = (e) => {
    gutil.log('File', gutil.colors.yellow(e.path), 'was', gutil.colors.magenta(e.type));
  };

  for(let key in watcher) {
    watcher[key].on('change', notify);
  }
})