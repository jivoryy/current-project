const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

const files = {
    scssWatchFolder: 'app/scss/**/*.scss',
    jsWatchFolder: 'app/js/**/*.js',
    scssPath: 'app/scss/style.scss',
//    jsPath: 'app/js/script.js',
    cssPubPath: 'public/assets/css',
    jsPubPath: 'public/assets/js'
};

function scssTask(){
    return src(files.scssPath, {sourcemaps: true})
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest(files.cssPubPath, {sourcemaps: '.'}));
}

function jsTask(){
    return src(files.jsWatchFolder, {sourcemaps: true})
        .pipe(terser())
        .pipe(dest(files.jsPubPath, {sourcemaps:'.'}));
}

function browsersnycServe(cb){
    browsersync.init({
        server: {
            baseDir: "public/"
        },
        notify: false
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

function watchTask(){
    watch('public/*.html', browsersyncReload);
    watch([files.scssWatchFolder, files.jsWatchFolder], series(scssTask, jsTask, browsersyncReload));
}

exports.default = series(
    scssTask,
    jsTask,
    browsersnycServe,
    watchTask
)