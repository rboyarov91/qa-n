import gulp from "gulp"
import plumber from "gulp-plumber"
import babel from "gulp-babel"
import cache from "gulp-cached"
import eslint from "gulp-eslint"
import nodemon from "gulp-nodemon"
import path from "path"

const SOURCES = ["src/backend/**/*.js"];
const DEST_DIR = "dist/src/backend";
const MAIN = path.join(DEST_DIR, "server.js");

gulp.task("babelify", function(){
    gulp.src(SOURCES)
    // Use plumber to handle errors without terminating the pipe-chain
    .pipe(plumber())
    // Use gulp-cache to avoid re-transpiling files with no changes
    .pipe(cache("babelify-cache"))
    .pipe(babel({
        presets: ["es2015"],
        plugins: ["transform-class-properties"]
    }))
    .pipe(gulp.dest(DEST_DIR));
});

// TODO add linting to project
/*gulp.task("lint", function(){
    gulp.src(SOURCES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});*/

gulp.task("watch", function(){
    gulp.watch(SOURCES, ["babelify"]);
});

gulp.task("nodemon", function(){
    nodemon({
        script: MAIN,
        args:process.argv.splice(3, process.argv.length)
    });
});

gulp.task("dev", ["babelify", "watch", "nodemon"]);
