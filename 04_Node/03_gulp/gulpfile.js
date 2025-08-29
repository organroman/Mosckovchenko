import gulp from "gulp";
import imagemin from "gulp-imagemin";
import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import clean from "gulp-clean";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import bsc from "browser-sync";

const { src, dest, watch, series, parallel } = gulp;
const sass = gulpSass(dartSass);
const browserSync = bsc.create();

const htmlTaskHandler = () => {
  return src("./src/*.html").pipe(dest("./dist"));
};

const cssTaskHandler = () => {
  return src("./src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoPrefixer())
    .pipe(csso())
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
};

const imagesTaskHandler = () => {
  return src("./src/images/**/*.*")
    .pipe(imagemin())
    .pipe(dest("./dist/images"))
    .pipe(browserSync.stream());
};

const fontsTaskHandler = () => {
  return src("./src/fonts/**/*.*").pipe(dest("./dist/fonts"));
};

const cleanDistTaskHandler = () => {
  return src("./dist", { read: false, allowEmpty: true }).pipe(
    clean({ force: true })
  );
};

const browserSyncTaskHandler = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  watch("./src/*.html").on(
    "change",
    series(htmlTaskHandler, browserSync.reload)
  );

  watch("./src/scss/**/*.scss").on(
    "change",
    series(cssTaskHandler, browserSync.reload)
  );

  watch("./src/images/**/*").on(
    "all",
    series(imagesTaskHandler, browserSync.reload)
  );
};

export const build = series(
  cleanDistTaskHandler,
  parallel(htmlTaskHandler, cssTaskHandler, imagesTaskHandler, fontsTaskHandler)
);

export const dev = series(build, browserSyncTaskHandler);
