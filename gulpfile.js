var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify');

// start the server for testing
gulp.task('webserver', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('js', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
     .pipe(rename({
        suffix: ".min",
        extname: ".js"
    }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

// watch task
gulp.task('watch', ['js'], function() {
    var jsWatcher = gulp.watch(['./src/**'], ['js']);
        jsWatcher.on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', building js...');
        });
});


gulp.task('default', ['webserver', 'watch']);