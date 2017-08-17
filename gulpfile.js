var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat = require('gulp-concat');
//JS 压缩与合并
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
// 启动本地服务器   注意
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir:'src'
		}
	});
	gulp.watch("src/**/*.scss", ['sass']);
	gulp.watch('src/jsSource/*.js',['jshint'])

	gulp.watch("src/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
	return gulp.src("src/sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("src/css"))
		.pipe(reload({stream: true}));
});

// JS 语法检查以及压缩, 合并
gulp.task('jshint',function(){
	return gulp.src('src/jsSource/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default' ,{ verbose: true }))
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('src/js'))
		.pipe(reload({stream:true}))
})


gulp.task('default', ['serve','jshint']);