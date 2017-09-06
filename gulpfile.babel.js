import gulp from "gulp"
import plumber from "gulp-plumber"
import babel from "gulp-babel"
import cache from "gulp-cached"
import eslint from "gulp-eslint"
import nodemon from "gulp-nodemon"
import path_node from "path"
import sourcemaps from 'gulp-sourcemaps'
import less from 'gulp-less'
import gutil from 'gulp-util' 
import cssmin from 'gulp-cssmin';
import rename from'gulp-rename';

/*------------- BACKEND -------------*/

const BACKEND_SOURCE = "src/backend/**/*.js";
const DEST_DIR_BACKEND = "dist/src/backend";
const MAIN_SERVER = path_node.join(DEST_DIR_BACKEND, "server.js");

gulp.task("babelify-backend", function(){
    gulp.src(BACKEND_SOURCE)
    // Use plumber to handle errors without terminating the pipe-chain
    .pipe(plumber())
    // Use gulp-cache to avoid re-transpiling files with no changes
    .pipe(cache("babelify-cache"))
    .pipe(babel({
        presets: ["es2015"],
        plugins: ["transform-class-properties"]
    }))
    .pipe(gulp.dest(DEST_DIR_BACKEND));
});

// TODO add linting to project
/*gulp.task("lint", function(){
    gulp.src(SOURCES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});*/

gulp.task("watch-server", function(){
    gulp.watch(BACKEND_SOURCE, ["babelify-backend"]);
});

gulp.task("nodemon-server", function(){
    nodemon({
        script: MAIN_SERVER,
        args:process.argv.splice(3, process.argv.length)
    });
});

/*------------- FRONTEND -------------*/

const path = {
  HTML: 'public/index.html',
  ALL: ['src/frontend/**/*.js', 'src/frontend/styles/**/*/*.less'],
  MINIFIED_OUT: 'build.min.js',
  CSS: ['styles/frontnend/styles/**/*/*.less'],
  DEST_SRC: 'dist/src/frontend',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

gulp.task("less", function() {
  var paths=path_node.join(__dirname, 'src/frontend/styles')
  return gulp.src(paths+'/All.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [paths]
    }).on('error', gutil.log))
    .pipe(cssmin().on('error', function(err) {
      console.log(err);
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public'));
});

gulp.task("watch-styles", function(){
    gulp.watch("src/frontend/styles/**/*.less", ["less"]);
});


gulp.task("backend", ["babelify-backend", "watch-server", "nodemon-server"]);
gulp.task("frontend", ["watch-frontend"]);
gulp.task("default", ["backend", "watch-styles"])
