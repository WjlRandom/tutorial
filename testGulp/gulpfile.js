var gulp = require("gulp");


gulp.task(
    'default',
    gulp.series(['aaa', 'bbb'], function(callback) {
        // 将你的默认的任务代码放在这
        console.log("hahhhhhhhhh");
        callback();
    })
);
gulp.task('aaa', function() {
    console.log("aaa");
});
gulp.task('bbb', function() {
    console.log("bbb");
});