import gulp from 'gulp';
import less from 'gulp-less';
import cssmin from 'gulp-cssmin';
import rename from'gulp-rename';

  gulp.task('less', function () {

  return gulp.src('./src/All.less')
    .pipe(less().on('error', function (err) {
      console.log(err);
    }))
    .pipe(cssmin().on('error', function(err) {
      console.log(err);
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public'));

});

  gulp.task('default', ['less']);