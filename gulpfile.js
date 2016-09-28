var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-live-server");

gulp.task("serve", function () {
    // Start basic server
    server.static("app").start();

    // Notify and reset on changes
    gulp.watch(["app/**/*.css", "app/**/*.html"], function (file) {
        server.notify.apply(server, [file]);
    });
});