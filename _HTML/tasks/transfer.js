'use strict';

/**
 * @module 		tasks/transfer
 * @sourcefile 	file:tasks:transfer
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import multipipe from 'multipipe';
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';





/**
 * Модуль трансфера. Используеться для переброса файлов без обработки.
 *
 * @moduleLocal
 * @sourcecode	code:tasks:transfer
 *
 * @tutorial 	compile-transfer
 *
 * @requires   	{@link https://github.com/gulpjs/gulp/tree/4.0|gulpjs/gulp#4.0}
 * @requires   	{@link https://www.npmjs.com/package/gulp-load-plugins}
 * @requires   	{@link https://www.npmjs.com/package/gulp-if}
 * @requires   	{@link https://www.npmjs.com/package/gulp-newer}
 * @requires   	{@link https://www.npmjs.com/package/gulp-notify}
 * @requires   	{@link https://www.npmjs.com/package/gulp-imagemin}
 * @requires   	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи, *задаеться автоматически*
 * @param		{boolean}		options.isDevelop - флаг dev версии сборки, *задаеться автоматически*
 * @param		{boolean}		options.isProduction - флаг production версии сборки, *задаеться автоматически*
 * @param		{Object}		options.package - данные из `package.json`, *задаеться автоматически*
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{boolean} 		[options.imagemin] - флаг миницикации изображений
 * @param		{string|boolean} [options.filter='combine'] - метод фильтровки файлов
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

		// vars
		// ========

			// список переброшенных файлов
			let receivedFilesList = [];

			let isImageMin = options.imagemin === true;

			// использовать newer метод ?
			let isNewer = false;

			// использовать since метод ?
			let isSince = false;

			switch(options.filter) {
				case false:
					break;
				case 'since':
					isSince = true;
					break;
				case 'newer':
					isNewer = true;
					break;
				default:
					if (options._isCombinedMethod) {
						isSince = true;
						isNewer = false;
					} else {
						isSince = false;
						isNewer = true;
						options._isCombinedMethod = true;
					}
			};





		// task
		// ========

			return gulp.src(options.src, {
					buffer: isImageMin,
					since: isSince ? gulp.lastRun(options.taskName) : 0
				})
				.pipe($.if(
					isNewer,
					$.newer(options.dest).on('error', $.notify.onError(
						_modulesParams.gulpNotifyOnError(`transfer - ${options.taskName}`))
					)
				))
				.pipe($.if(
					isImageMin,
					$.imagemin([
						$.imagemin.gifsicle(),
						$.imagemin.jpegtran(),
						$.imagemin.optipng(),
						$.imagemin.svgo()
					], {
						verbose: true
					})
					.on('error', $.notify.onError(
						_modulesParams.gulpNotifyOnError(`imagemin - ${options.taskName}`))
					)
				))
				.pipe(gulp.dest(options.dest))
				.on('data', (file) => {
					receivedFilesList.push(file.relative);
				})
				.pipe($.if(
					options.notify,
					$.notify(_modulesParams.gulpNotify(options, receivedFilesList, 'transfered'))
				));
	};
};
