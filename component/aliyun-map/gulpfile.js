const postcss = require("gulp-postcss");
const gulp = require("gulp");
const cssnext = require("postcss-cssnext");

gulp.task("default", function () {

    return gulp.src("./css/alimap.css")
        .pipe(postcss([
            cssnext()
        ]))
        .pipe(gulp.dest("./dist"));

});