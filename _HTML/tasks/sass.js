'use strict';

/**
 * @module tasks/sass
 * @sourcefile file:tasks:sass
*/

// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';

/**
 * descr
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:sass -c
 *
 * @requires   	{@link https://github.com/gulpjs/gulp/tree/4.0|gulpjs/gulp#4.0}
 * @requires   	{@link https://www.npmjs.com/package/gulp-load-plugins}
 * @requires   	{@link https://www.npmjs.com/package/gulp-if}
 * @requires   	{@link https://www.npmjs.com/package/gulp-sass}
 * @requires   	{@link https://www.npmjs.com/package/gulp-autoprefixer}
 * @requires   	{@link https://www.npmjs.com/package/gulp-sourcemaps}
 * @requires   	{@link https://www.npmjs.com/package/gulp-cssnano}
 * @requires   	{@link https://www.npmjs.com/package/gulp-notify}
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи
 * @param		{string}		options.isProduction - имя вызывающей задачи
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{Array}			[options.browsers=] - параметры для плагина `gulp-autoprefixer`
 * @param		{boolean}		[options.notify=false] - выводить уведомление по окончанию трансфера
 * @param		{string}		[options.notifyOn='last'] - метод уведомления, параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 * @param		{number}		[options.notifyTime=2000] - время показа уведомления, параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 * @param		{boolean}		[options.notifyIsShort=false] - выводить краткое уведомдение - только количество файлов, параметр воздействует только при опции `notifyOn:'last'`. Параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 *
 * @return		{Function}
*/
module.exports = function(options) {

	// возврашаем функцию для задачи
	return function(cb) {

		// список скомпилированных файлов
		let receivedFilesList = [];

		//
		let browsers = options.browsers || [
			'ie >= 11',
			'ie_mob >= 10',
			'ff >= 25',
			'chrome >= 30',
			'safari >= 7',
			'opera >= 23',
			'ios >= 7',
			'android >= 4.4',
			'bb >= 10'
		]

		// возвращаем
		return gulp.src(options.src)
			// если sourcemaps вкл. - начинаем запись
			.pipe($.if(
				options.maps,
				$.sourcemaps.init()
			))
			.pipe($.sass({
					outputStyle: 'expanded'
				}).on('error', $.sass.logError)
			)
			.pipe($.autoprefixer({
				browsers: browsers,
				cascade: false
			}))
			// если min вкл.
			.pipe($.if(
				options.min,
				$.cssnano({
					zindex: false,
        			autoprefixer: false
				})
			))
			// если sourcemaps вкл. - пишем карты
			.pipe($.if(
				options.maps,
				$.sourcemaps.write('/')
			))
			.pipe(gulp.dest(options.dest))
			.on('data', (file) => {
				receivedFilesList.push(file.relative);
			})
			.pipe($.if(
				options.notify,
				$.notify(_modulesParams.gulpNotify(options, receivedFilesList, 'compiled'))
			));
	};
};
