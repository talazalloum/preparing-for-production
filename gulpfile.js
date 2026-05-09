import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("build", shell.task("npx parcel starter/index.html"));

gulp.task("test", shell.task("npx mocha test/shuffle.js"));

gulp.task("cypress", shell.task("npx cypress run"));

gulp.task("default", gulp.series("build"));