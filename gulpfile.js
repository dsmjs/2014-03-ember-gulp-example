var gulp = require('gulp');
var concat = require('gulp-concat');
var handlebars = require('gulp-ember-handlebars');
var karma = require('gulp-karma')

var templates = ['js/templates/*.handlebars']

var files = [
    "js/vendor/jquery/dist/jquery.min.js",
    "js/vendor/handlebars/handlebars.js",
    "js/vendor/ember/ember.js",
    "js/app.js",
    "js/vendor/jquery-mockjax/jquery.mockjax.js",
    "js/dist/tmpl.min.js"
]

var testFiles = [
    "js/tests/integration_test_helper.js",
    "js/tests/integration_tests.js",
    "js/tests/unit_tests.js"
]

var allFiles = files.concat(testFiles)

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

gulp.task('test', function(){
    gulp.src(allFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});

gulp.task('default', ['templates', 'concat'])
