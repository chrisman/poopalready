var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var minify = require('gulp-uglify'); 

var reload = require('gulp-livereload');
var sync = require('browser-sync').create();

gulp.task('controllers', () => {
  return gulp.src('src/js/controllers/**/*.js')
    .pipe(concat('controllers.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('services', () => {
  return gulp.src('src/js/services/**/*.js')
    .pipe(concat('services.js'))
    .pipe(minify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(sync.stream());
});

gulp.task('html', () => {
  return gulp.src([
    'src/jade/**/*.jade',
    'src/jade/partials/**/*.jade',
    'src/jade/templates/**/*.jade',
    '!src/jade/includes/*'
  ])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('watcher', () => { 
  sync.init({
    server: './app/',
    open: true
  }, function callback(){
    gulp.watch('app/index.html', sync.reload)
  })
  gulp.watch('src/js/controllers/**/*.js', ['controllers']);
  gulp.watch('src/js/services/**/*.js', ['services']);
  gulp.watch('src/jade/**/*.jade', ['html']);
  gulp.watch('src/sass/**/*.sass', ['sass']);
  reload.listen()

  gulp.watch(['app/*']).on('change', reload.changed)
});

gulp.task('default', ['html', 'controllers', 'services', 'sass', 'watcher']);
