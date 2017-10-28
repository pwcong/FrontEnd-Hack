const postcss = require("gulp-postcss");
const gulp = require("gulp");
const cssnext = require("postcss-cssnext");
const cleanCSS = require("gulp-clean-css");

gulp.task("default", function () {

    return gulp.src("./css/alimap.css")
        .pipe(postcss([
            cssnext()
        ]))
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(gulp.dest("./dist"));

});