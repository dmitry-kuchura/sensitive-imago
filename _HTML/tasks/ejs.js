'use strict';

/**
 * @module 		tasks/ejs
 * @sourcefile 	file:tasks:ejs
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import path from 'path';
	import fs from 'fs';
	import multipipe from 'multipipe';
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';





/**
 * Модуль компиляции `ejs` файлов.
 *
 * @todo 		Написать подробные туториалы по работе и составлению разметки
 * @todo 		Написать внутренней роутер, для удобства подлючения файлов, с авто определением относительных путей
 *
 * @moduleLocal
 * @sourcecode	code:tasks:ejs
 *
 * @tutorial 	compile-ejs
 *
 * @see			{@link http://ejs.co/}
 * @see			{@link https://github.com/RandomEtc/ejs-locals/}
 *
 * @requires   	{@link https://github.com/gulpjs/gulp/tree/4.0|gulpjs/gulp#4.0}
 * @requires   	{@link https://www.npmjs.com/package/multipipe}
 * @requires   	{@link https://www.npmjs.com/package/gulp-load-plugins}
 * @requires   	{@link https://www.npmjs.com/package/gulp-if}
 * @requires   	{@link https://www.npmjs.com/package/gulp-ejs-locals}
 * @requires   	{@link https://www.npmjs.com/package/gulp-html-beautify}
 * @requires   	{@link https://www.npmjs.com/package/gulp-changed}
 * @requires   	{@link https://www.npmjs.com/package/gulp-rename}
 * @requires   	{@link https://www.npmjs.com/package/gulp-notify}
 * @requires 	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи, *задаеться автоматически*
 * @param		{boolean}		options.isDevelop - флаг dev версии сборки, *задаеться автоматически*
 * @param		{boolean}		options.isProduction - флаг production версии сборки, *задаеться автоматически*
 * @param		{Object}		options.package - данные из `package.json`, *задаеться автоматически*
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{string}		[options.changeExt] - сменить расширение файла, при указании, должно содержать точку вначале
 * @param		{Object}		options.locals - обект глобальных данных, которые будут доступны внутри всех `*.ejs` файлов
 * @param		{string}		options.locals._projectName - Имя проекта
 * @param		{boolean}		options.locals._projectResponsive - флаг адаптавности
 * @param		{boolean}		options.locals._projectWezom - проект студии Wezom
 * @param		{boolean}		options.beautify - флаг форматирования скомпелированного `html` кода
 * @param		{Object}		[options.beautifyConfig] - пользовательские параметры для `gulp-html-beautify`. параметры по умолчанию - {@link module:tasks/_modules-params~modulesParams#gulpHtmlBeautify|modulesParams#gulpHtmlBeautify}
 * @param		{Array}			[options.watch] - набор путей, для вотчинга
 * @param		{boolean}		[options.filter=true] - флаг исрользования фильтровки файлов
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

			// список скомпилированных файлов
			let receivedFilesList = [];

			// флаг фильтровки
			let isFilter = options.filter !== false;

			let ejsLocals = options.locals || {};
			ejsLocals._getActiveFile = (filepath) => {
				let _filename = filepath.split('\\').pop().split('.');
				_filename.pop();
				return _filename.join('.');
			}





		// streams
		// ========

			// составление multipipe компиляции
			let streamEjs = multipipe(
				$.ejsLocals(ejsLocals),
				$.if(
					options.beautify,
					$.htmlBeautify(_modulesParams.gulpHtmlBeautify(options.beautifyConfig))
				)
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`compile - ${options.taskName}`))
			);





		// task
		// ========
			return gulp.src(options.src)
				// компиляция
				.pipe(streamEjs)
				// если нужно сменить расширенние файла
				.pipe($.if(
					!!options.changeExt,
					$.rename((path) => {
						path.extname = options.changeExt;
					})
				))
				// фильтровка изменений в стриме
				.pipe($.if(
					isFilter,
					$.changed(
						options.dest,
						{
							hasChanged: $.changed.compareSha1Digest
						}
					)
				))
				.pipe(gulp.dest(options.dest))
				.on('data', (file) => {
					receivedFilesList.push(file.relative);
				})
				.pipe($.if(
					options.notify,
					$.notify(_modulesParams.gulpNotify(options, receivedFilesList, 'compiled'))
				))
				.pipe($.if(
					options.browserSyncReload,
					options.browserSync.stream({
						once: true
					})
				));
	};
};
