var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-live-server");

gulp.task("serve", function () {
    // Start basic server
    server.static("app").start();
});

gulp.task("sass", function () {
    return gulp.src("scss/**/*.scss")
        .pipe(sass()).on("error", sass.logError)
        .pipe(gulp.dest("app/css/"));
});