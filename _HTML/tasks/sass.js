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
 * @sourcecode	code:tasks:sass:cssLintReporter
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
		console.log(chalk.magenta('\n\tCSS LINT\n============================================================'));
		console.log(chalk.red(`\n ${problems} problems in ${file.relative} (warnings: ${types.warning}, errors: ${types.error})\n------------------------------------------------------------`));
		console.log(chalk.yellow(`${messages.join('\n')}\n`));
	};





/**
 * Модуль компиляции `scss` файлов.
 *
 * ### Основные параметры
 * Модуль имеет метод фильтровки, основанный на модуле `gulp-changed`. В отличие от `gulp-newer` - он умеет делать проверку изменений в стриме. Воспринимаемые значения - `true/false`.
 *
 * Модуль предоставляет полное управление компиляцией, минификацией и записью sourcemaps - смотри соответствующие свойтва в таблице параметров
 *
 * ### Оболочка задачи
 *
 * *Пример*
 * ```javascript
 * lazyRequireTask('sass:dynamics', `${tasks}/sass`, {
 * 	src: _sassDynamics, // path
 * 	dest: _sassDest, // path
 * 	maps: isSourcemaps, // boolean
 * 	min: isMinify, // boolean
 * 	watch: [  // path
 * 		_sassData,
 * 		_sassDynamics
 * 	],
 * 	notify: true,  // boolean
 * 	sasslint: isLinting,  // boolean
 * 	csslint: isLinting  // boolean
 * });
 * ```
 *
 * ### Lint
 * Также модуль умеет проводить линтинг в процессе задачи, как входяших `sass`, так и итоговых `css` файлов - смотри соответствующие свойтва в таблице параметров.
 * Для линтинга используюься параметры по умолчанию (смотри ссылки в описании свойств). Если нужно переопределить или добавить некоторые правила - используйте параметры для конфигурации каждого из линтингов.
 * *Пример:*
 * ```javascript
 * ...
 * csslint: true,
 * csslinrConfig: {
 * 	'box-sizing': 0, // игнорировать
 * 	'ids': 1, // предупреждать
 * 	'empty-rules': 2 // ошибка
 * }
 * ```
 * *__Важно__ - пользовательские конфиги - не заменяют, те что по умолчанию, а расширяют*
 * > Проводить линтинг файлов - обязательно.
 * > Когда? - решать вам:
 * > - в ручную - поэтапно (рекоммендуется)
 * > - постоянно (увеличит время компиляции)
 * > - перед сдачей (не рекоммендуется)
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
 * @requires   	{@link https://www.npmjs.com/package/gulp-sass-lint}
 * @requires   	{@link https://www.npmjs.com/package/gulp-csslint}
 * @requires   	{@link https://www.npmjs.com/package/gulp-changed}
 * @requires   	{@link https://www.npmjs.com/package/gulp-combine-mq}
 * @requires   	{@link https://www.npmjs.com/package/gulp-rename}
 * @requires   	{@link https://www.npmjs.com/package/gulp-notify}
 * @requires 	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи, задаеться автоматически
 * @param		{boolean}		options.isProduction - флаг production версии сборки, задаеться автоматически
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{boolean}		options.changeExt - сменить расширение файла
 * @param		{boolean}		options.filter - флаг исрользования фильтровки файлов
 * @param		{Array}			[options.watch] - набор путей, для вотчинга
 * @param		{Object}		[options.sassConfig] - пользовательские параметры компиляции sass файлов. параметры по умолчанию - {@link module:tasks/_modules-params~modulesParams#gulpSassConfig|modulesParams#gulpSassConfig}
 * @param		{Object}		[options.autoprefixerConfig] - пользовательские параметры для `gulp-autoprefixer`. параметры по умолчанию - {@link module:tasks/_modules-params~modulesParams#gulpAutoprefixerConfig|modulesParams#gulpAutoprefixerConfig}
 * @param		{boolean}		options.maps - флаг записи sourcemaps
 * @param		{boolean}		options.min - флаг минификации
 * @param		{Object}		[options.minConfig] - пользовательские параметры минификации для `gulp-cssnano`. параметры по умолчанию - {@link module:tasks/_modules-params~modulesParams#gulpCssnanoConfig|modulesParams#gulpCssnanoConfig}
 * @param		{boolean}		options.sasslint - флаг линтинга sass файлов
 * @param		{Object}		[options.sasslintConfig] - пользовательские параметры линтинга. параметры по умолчанию - {@link module:tasks/_modules-params~modulesParams#gulpSassLintConfig|modulesParams#gulpSassLintConfig}
 * @param		{boolean}		options.csslint - флаг линтинга скомпилированных файлов
 * @param		{Object}		[options.csslintConfig] - пользовательские параметры линтинга. параметры по умолчанию - {@link module:tasks/_modules-params~modulesParams#gulpCssLintConfig|modulesParams#gulpCssLintConfig}
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





		// streams
		// ========

			// составление multipipe компиляции
			let streamSass = multipipe(
				$.sass(_modulesParams.gulpSassConfig(options.sassConfig)),
				$.autoprefixer(_modulesParams.gulpAutoprefixerConfig(options.autoprefixerConfig)),
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
					$.cssnano(_modulesParams.gulpCssnanoConfig(options.minConfig))
				)
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`compile - ${options.taskName}`))
			);



			// составление multipipe для линтинга sass
			let streamSassLint = multipipe(
				$.sassLint(_modulesParams.gulpSassLintConfig(options.sasslintConfig)),
				$.if(
					(file) => {
						if (file.sassLint[0].warningCount > 0) {
							console.log(chalk.magenta('\n\tSASS LINT\n============================================================'));
						}
						return false;
					},
					throughObj((file, enc, callback) => {
						return callback(null, file);
					})
				),
				$.sassLint.format(),
				$.sassLint.failOnError()
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`SASSLint - ${options.taskName}`))
			)



			// составление multipipe для линтинга css
			let streamCssLint = multipipe(
				$.if(
					/\.css$/,
					multipipe(
						$.csslint(_modulesParams.gulpCssLintConfig(options.csslintConfig)),
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
				// если sasslint вкл.
				.pipe($.if(
					options.sasslint,
					streamSassLint
				))
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
				// если sourcemaps вкл. - пишем карты
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
				));
	};
};
