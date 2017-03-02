var gulp     = require("gulp"),
	stylus   = require("gulp-stylus");

gulp.task("css", function(){
	return gulp.src('stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});
gulp.task('default', ['css']);