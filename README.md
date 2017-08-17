1.使用方法
	npm install
	gulp default  或者 gulp

2.文档功能
	在本地启动一个服务器(browser-sync)，当SCSS,HTML,JS发生改变时 会重新刷新页面。
	browserSync.init({
    		server: {
    			baseDir:'src'
    		}
    	});
    src文件目录下必须有一个index.html文件
	语法检查(jshint)---只做了JS语法检查，例如方法重名，缺少标点符号;scss页面本身也可以做，但是这次没有做。
	SCSS转化为CS，刷新页面。

3.还需改进
	像一些其他的重要的GULP插件，可以考虑加进去
	gulp-util,gulp-load-plugins,gulp-inject,run-sequence