'use strict';

/**
 * @module tasks/sass
 * @sourcefile file:tasks:sass
*/





// подключение nodejs модулей
// ==========================
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
 * Модуль компиляции `scss` файлов.
 *
 * Модуль имеет метод фильтровки, основанный на модуле `gulp-changed`. В отличие от `gulp-newer` - он умеет делать проверку изменений в стриме.
 * Параметр фильтровки, в отличие от методов фильтровки модуля {@link module:tasks/transfer|transfer}, воспринимает только булевские значения - выключить или включить.
 * По умолчанию фильтровка включена - `let isFilter = options.filter !== false;`
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:sass
 *
 * @requires   	{@link https://github.com/gulpjs/gulp/tree/4.0|gulpjs/gulp#4.0}
 * @requires   	{@link https://www.npmjs.com/package/multipipe}
 * @requires   	{@link https://www.npmjs.com/package/through2}
 * @requires   	{@link https://www.npmjs.com/package/gulp-load-plugins}
 * @requires   	{@link https://www.npmjs.com/package/gulp-if}
 * @requires   	{@link https://www.npmjs.com/package/gulp-sass}
 * @requires   	{@link https://www.npmjs.com/package/gulp-autoprefixer}
 * @requires   	{@link https://www.npmjs.com/package/gulp-sourcemaps}
 * @requires   	{@link https://www.npmjs.com/package/gulp-cssnano}
 * @requires   	{@link https://www.npmjs.com/package/gulp-csslint}
 * @requires   	{@link https://www.npmjs.com/package/gulp-changed}
 * @requires   	{@link https://www.npmjs.com/package/gulp-combine-mq}
 * @requires   	{@link https://www.npmjs.com/package/gulp-notify}
 *
 * @tutorial 	compile-sass
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи
 * @param		{string}		options.isProduction - имя вызывающей задачи
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{boolean}		options.csslint - флаг линтинга скомпилированных файлов
 * @param		{Array}			[options.browsers] - параметры для плагина `gulp-autoprefixer`
 * @param		{boolean}		[options.filter=true] - фильтровка изменений в стриме
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

		// флаг фильтровки
		let isFilter = options.filter !== false;

		// параметры модуля `gulp-autoprefixer`
		let browsers = options.browsers || _modulesParams.gulpAutoprefixerBrowsers();

		// составление multipipe
		let streamSass = multipipe(
			$.sass({
				outputStyle: 'expanded'
			}),
			$.autoprefixer({
				browsers: browsers,
				cascade: false
			}),
			// если production версия - складываем mq
			$.if(
				options.isProduction,
				$.combineMq({
					beautify: false
				})
			),
			// если min вкл.
			$.if(
				options.min,
				$.cssnano({
					zindex: false,
					autoprefixer: false,
					discardUnused: false
				})
			)
		);

		streamSass.on('error', $.notify.onError(
			_modulesParams.gulpNotifyOnError(`compile - ${options.taskName}`))
		);

		// составление multipipe
		let streamCssLint = multipipe(
			$.csslint(),
			$.csslint.reporter(),
			$.csslint.reporter('fail'),
			throughObj((file, enc, callback) => {
				if (file.csslint.errorCount > 0) {
					return callback();
				}
				callback(null, file);
			})
		);

		streamCssLint.on('error', $.notify.onError(
			_modulesParams.gulpNotifyOnError(`csslint - ${options.taskName}`))
		);

		// возвращаем
		return gulp.src(options.src)
			// если sourcemaps вкл. - начинаем запись
			.pipe($.if(
				options.maps,
				$.sourcemaps.init()
			))
			.pipe(streamSass)
			// если sourcemaps вкл. - пишем карты
			.pipe($.if(
				options.maps,
				$.sourcemaps.write('/')
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
			// если csslint вкл.
			.pipe($.if(
				options.csslint,
				streamCssLint
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
