'use strict';

/**
 * @module tasks/sass
 * @sourcefile file:tasks:sass
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import chalk from 'chalk';
	import multipipe from 'multipipe';
	import through2 from 'through2';
	const throughObj = through2.obj;
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';






/**
 * Пользовательский reporter для `gulp-csslint`.
 * Выводит лог уведомления в консоль терминала при обнуружении проблем - ошибок или предупреждений.
 * При ошибке - вывод push уведоления и пропуск задачи (файлы не будет скомпиоированны)
 * Если предупреждение -  вывод push уведоления, но файлы будут скомпилированны.
 *
 * @param      {File}		file - проверенный файл
 */
	let cssLintReporter = (file) => {
		let problems = file.csslint.errorCount;
		let messages = [];
		let types = {
			warning: 0,
			error: 0
		};

		// результаты
		file.csslint.results.forEach(function(result) {
			let err = result.error;
			types[err.type]++;
			messages.push(` ${err.line}:${err.col}\t${err.rule.id}`);
			//messages.push(`\t${err.message}`);
			messages.push(`\t${err.rule.desc}`);
			messages.push(`\t${err.evidence}`);
		});

		// помечаем файл, как с ошибками или предупреждениями
		file.cssLintWarns = types.warning > 0;
		if (types.error > 0) {
			file.cssLintFail = true;
			file.cssLintWarns = false;
		}

		// если есть проблемы выводим лог в консоль терминала
		console.log(chalk.red(`\n ${problems} problems in ${file.relative} (warnings: ${types.warning}, errors: ${types.error})\n------------------------------------------------------------`));
		console.log(chalk.yellow(`${messages.join('\n')}\n`));
	};





/**
 * Модуль компиляции `scss` файлов.
 *
 * @moduleLocal
 * @sourcecode	code:tasks:sass
 *
 * @tutorial 	compile-sass
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
 * @requires 	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи
 * @param		{string}		options.isProduction - имя вызывающей задачи
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{boolean}		options.csslint - флаг линтинга скомпилированных файлов
 * @param		{boolean}		options.csslintConfig - пользовательские параметры
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

		// vars
		// ========

			// список скомпилированных файлов
			let receivedFilesList = [];

			// флаг фильтровки
			let isFilter = options.filter !== false;

			// параметры модуля `gulp-sass`
			let sassConfig = _modulesParams.gulpSassConfig(options.sassConfig);

			// параметры модуля `gulp-autoprefixer`
			let autoprefixerConfig = _modulesParams.gulpAutoprefixerConfig(options.autoprefixerConfig);

			// параметры модуля `gulp-sass-lint`
			if (options.min) {
				var minConfig = _modulesParams.gulpCssnanoConfig(options.minConfig);
			}

			// параметры модуля `gulp-sass-lint`
			if (options.sasslint) {
				var sasslintConfig = _modulesParams.gulpSassLintConfig(options.sasslintConfig);
			}

			// параметры модуля `gulp-csslint`
			if (options.csslint) {
				var csslintConfig = _modulesParams.gulpCssLintConfig(options.csslintConfig);
			}





		// streams
		// ========

			// составление multipipe компиляции
			let streamSass = multipipe(
				$.sass(sassConfig),
				$.autoprefixer(autoprefixerConfig),
				// если production версия - складываем mq
				$.if(
					options.isProduction,
					$.combineMq({
						beautify: !options.min
					})
				),
				// если min вкл.
				$.if(
					options.min,
					$.cssnano(minConfig)
				)
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`compile - ${options.taskName}`))
			);

			// составление multipipe для линтинга css
			let streamCssLint = multipipe(
				$.if(
					/\.css$/,
					multipipe(
						$.csslint(csslintConfig),
						$.csslint.reporter(cssLintReporter),
						// если есть ошибки - fail
						$.if(
							(file) => {
								return !!file.cssLintFail;
							},
							multipipe(
								$.csslint.reporter('fail'),
								throughObj((file, enc, callback) => {
									return callback();
								})
							)
						),
						// если есть предупреждения - notify
						$.if(
							(file) => {
								return !!file.cssLintWarns;
							},
							$.notify({
								title: `CSSLint WARN`,
								message: `<%= file.relative %>`
							})
						)
					)
				)
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`CSSLint - ${options.taskName}`))
			);





		// task
		// ========
			return gulp.src(options.src)
				// если sourcemaps вкл. - начинаем запись
				.pipe($.if(
					options.maps,
					$.sourcemaps.init()
				))
				// компиляция
				.pipe(streamSass)
				// если csslint вкл.
				.pipe($.if(
					options.csslint,
					streamCssLint
				))
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
