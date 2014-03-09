var gulp = require('gulp');
var concat = require('gulp-concat');
var handlebars = require('gulp-ember-handlebars');

var templates = ['js/templates/*.handlebars']

var files = [
    "js/vendor/jquery/dist/jquery.min.js",
    "js/vendor/handlebars/handlebars.js",
    "js/vendor/ember/ember.js",
    "js/app.js",
    "js/vendor/jquery-mockjax/jquery.mockjax.js",
    "js/dist/tmpl.min.js"
]

gulp.task('concat', function(){
    gulp.src(files)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('js/dist'));
});

gulp.task('templates', function(){
    gulp.src(templates)
        .pipe(handlebars({output: 'browser'}))
        .pipe(concat('tmpl.min.js'))
        .pipe(gulp.dest('js/dist'));
});

gulp.task('default', ['templates', 'concat'])
