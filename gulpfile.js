var gulp = require('gulp'),
jshint = require('gulp-jshint'),
jasmine = require('gulp-jasmine');

gulp.task('lint', function(){
    return gulp.src(['**/*.js', '!node_modules/**/*'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jasmine', function(){
    return gulp.src('spec/*[Ss]pec.js')
    .pipe(jasmine());
})

gulp.task('watch', function(){
    gulp.watch(['**/*.js', '!node_modules/**/*'], ['lint', 'jasmine']);
});
