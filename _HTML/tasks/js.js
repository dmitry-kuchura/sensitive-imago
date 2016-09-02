'use strict';

/**
 * @module 		tasks/js
 * @sourcefile 	file:tasks:js
*/





// подключение nodejs модулей
// ==========================
	import fs from 'fs';
	import path from 'path';
	import gulp from 'gulp';
	import multipipe from 'multipipe';
	import through2 from 'through2';
	const throughObj = through2.obj;
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';





/**
 * Модуль компиляции `js` файлов.
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:ejs
 *
 * @tutorial 	compile-js
 *
 * @requires   	{@link https://github.com/gulpjs/gulp/tree/4.0|gulpjs/gulp#4.0}
 * @requires   	{@link https://www.npmjs.com/package/multipipe}
 * @requires   	{@link https://www.npmjs.com/package/gulp-load-plugins}
 * @requires   	{@link https://www.npmjs.com/package/gulp-if}
 * @requires   	{@link https://www.npmjs.com/package/gulp-changed}
 * @requires   	{@link https://www.npmjs.com/package/gulp-notify}
 * @requires   	{@link https://www.npmjs.com/package/gulp-concat}
 * @requires   	{@link https://www.npmjs.com/package/gulp-include}
 * @requires   	{@link https://www.npmjs.com/package/gulp-wrap}
 * @requires 	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи, *задаеться автоматически*
 * @param		{boolean}		options.isDevelop - флаг dev версии сборки, *задаеться автоматически*
 * @param		{boolean}		options.isProduction - флаг production версии сборки, *задаеться автоматически*
 * @param		{Object}		options.package - данные из `package.json`, *задаеться автоматически*
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{boolean}		[options.concat] - конкат файлов
 * @param		{string}		[options.changeExt] - сменить расширение файла, при указании, должно содержать точку вначале
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

			// флаг фильтровки
			let isFilter = options.filter !== false;
			// флаг конката
			let isConcat = options.concat == true;





		// streams
		// ========


			// составление multipipe компиляции modernizr.js
			let streamModernizr = multipipe(
				$.modernizr(options.modernizrConfig || {}),
				throughObj((file, enc, callback) => {
					if (file.extname === undefined) {
						return callback(null, file);
					}
					return callback();
				})
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`modernizr - ${options.taskName}`))
			);



			// составление multipipe для линтинга css
			let streamEsLint = multipipe(
				$.if((file) => {
						return (file.extname === '.js' && file.relative.split('\\')[0] !== 'vendor');
					},
					multipipe(
						$.eslint(_modulesParams.gulpEsLintConfig(options.eslintConfig)),
						$.eslint.format(),
						$.eslint.failAfterError(),
						// если есть ошибки - fail
						$.if((file) => {
								return !!file.eslint.errorCount;
							},
							multipipe(
								throughObj((file, enc, callback) => {
									return callback();
								})
							)
						),
						// если есть предупреждения - notify
						$.if((file) => {
								return !!file.eslint.warningCount;
							},
							$.notify({
								title: `ESLint WARN`,
								message: `<%= file.relative %>`
							})
						)
					)
				)
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`ESLint - ${options.taskName}`))
			);





		// task
		// ========

			if (isConcat) {
				var folders = options.getFolders(options.src);
				folders.map(function (folder) {
					let files = [];
					let source = path.join(options.src, folder, '*.js');
					gulp.src(source)
						.pipe(multipipe(
								$.if(
									options.maps,
									$.sourcemaps.init()
								),
								$.include(),
								$.wrap('\n/* <%= file.relative %>\n ================================== */\n<%= contents %>\n'),
								$.concat(`${folder}/${folder}.js`),
								$.if(
									options.min,
									$.uglify(_modulesParams.gulpUglifyConfig(options.minConfig))
								),
								$.if(
									options.maps,
									$.sourcemaps.write('/')
								)
							).on('error', $.notify.onError(
								_modulesParams.gulpNotifyOnError(`Stream - ${options.taskName}`))
							)
						)
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
							files.push(file.relative);
						})
						.pipe($.if(
							options.notify,
							$.notify(_modulesParams.gulpNotify(options, files, 'compiled'))
						))
						.pipe($.if(
							options.browserSyncReload,
							options.browserSync.stream()
						));
				});
				cb();


			} else {


				// список скомпилированных файлов
				let receivedFilesList = [];
				return gulp.src(options.src)
					.pipe(multipipe(
							$.if(
								options.modernizr,
								streamModernizr
							),
							$.if(
								options.maps,
								$.sourcemaps.init()
							),
							$.if(
								options.min,
								$.uglify(_modulesParams.gulpUglifyConfig(options.minConfig))
							),
							$.if(
								options.eslint,
								streamEsLint
							),
							$.if(
								options.maps,
								$.sourcemaps.write('/')
							),
							$.if((/\.js$/ && !!options.changeExt),
								$.rename((path) => {
									path.extname = options.changeExt;
								})
							),
							$.if(isFilter,
								$.changed(
									options.dest,
									{hasChanged: $.changed.compareSha1Digest}
								)
							)
						).on('error', $.notify.onError(
							_modulesParams.gulpNotifyOnError(`Stream - ${options.taskName}`))
						)
					)
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
						options.browserSync.stream()
					));
			}
	};
};
