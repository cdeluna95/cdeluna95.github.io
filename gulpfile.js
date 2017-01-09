/**
 * Initialize plugin configurations
 */
const gulp = require("gulp"),
      sass = require("gulp-sass"),
      prefix = require("gulp-autoprefixer"),
      concat = require("gulp-concat"),
      cssmin = require("gulp-clean-css"),
      jsmin = require("gulp-uglify"),
      imagemin = require("gulp-imagemin"),
      cache = require("gulp-cache");
      
/**
 * Compiles, concatenates, autoprefixes, and minifies SASS to CSS
 */
gulp.task("sass", function() {
  return gulp
    .src("./assets/css/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix({
      browsers: ["last 2 versions", "> 1%", "ie 8", "ie 9", "ie 10", "ie 11", "firefox >= 4", "opera 12.1", "safari 7", "safari 8", "ios 6", "android 4"],
      cascade: false
    }))
    .pipe(concat("app.min.css"))
    .pipe(cssmin({
      compatibility: "ie8"
    }))
    .pipe(gulp.dest("./assets/css"))
});

/**
 * Concatenates and minifies JS
 */
gulp.task("js", function() {
  return gulp
    .src("./assets/js/app.js")
    .pipe(concat("app.min.js"))
    .pipe(jsmin())
    .pipe(gulp.dest("./assets/js"))
});

/**
 * Compresses and optimizes image file size
 */ 
gulp.task("images", function(){
  return gulp
    .src("./assets/img/**/*.+(png|jpg|gif|svg)")
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest("./assets/img"))
});

/**
 * Runs task
 */
gulp.task("run", ["sass", "js", "images"]);

/**
 * Runs and watches task
 */
gulp.task("watch", ["sass", "js", "images"], function() {
  gulp.watch("./assets/css/**/*.scss", ["sass"]);
  gulp.watch("./assets/js/app.js", ["js"]);
  gulp.watch("./assets/img/**/*.+(png|jpg|gif|svg)", ["images"]);
});
