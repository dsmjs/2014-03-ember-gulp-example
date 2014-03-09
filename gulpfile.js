var gulp = require('gulp');
var concat = require('gulp-concat');

var files = [
    "js/vendor/jquery/dist/jquery.min.js",
    "js/vendor/handlebars/handlebars.js",
    "js/vendor/ember/ember.js",
    "js/app.js",
    "js/vendor/jquery-mockjax/jquery.mockjax.js"
]

gulp.task('default', function(){
    return gulp.src(files)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('js/dist'));
});
