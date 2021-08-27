var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var browserify = require("gulp-browserify");

var rutas = {
    publicHTML: 'public/html',
    publicAssets: 'public/assets',
    rutaCSS: 'assets/css/*.css',
    rutaHTML: './html/*.html'
};

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("html", async function () {
    gulp.src(rutas.rutaHTML)
        .pipe(gulp.dest(rutas.publicHTML))
});

gulp.task("assets", async function () {
    gulp.src("index.html")
        .pipe(gulp.dest("public"))
});

gulp.task('prepararCSS', async function () {
    gulp.src(rutas.rutaCSS)
        .pipe(gulp.dest(rutas.publicAssets))
});

gulp.task('serve', function() {
  
    browserSync.init({
        server: {
          baseDir: "./public"
        }
      })
  
  });

function watch () {
    prepararCSS()
    assets()
}

// gulp.task('watch'['prepararCSS'], function () {
//     browserSync.reaload();
//     done();
// });

exports.default = watch;