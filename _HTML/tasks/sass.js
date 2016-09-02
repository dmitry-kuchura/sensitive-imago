'use strict';

/**
 * @module tasks/sass
 * @sourcefile file:tasks:sass
*/





// подключение nodejs модулей
// ==========================
	import path from 'path';
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
 * @requires   	{@link https://www.npmjs.com/package/gulp-sass-lint}
 * @requires   	{@link https://www.npmjs.com/package/gulp-csslint}
 * @requires   	{@link https://www.npmjs.com/package/gulp-changed}
 * @requires   	{@link https://www.npmjs.com/package/gulp-combine-mq}
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
				$.if(
					(file) => {
						return (file.extname === '.scss' && file.relative.split('\\')[0] !== 'vendor');
					},
					multipipe(
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
					)
				)
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`SASSLint - ${options.taskName}`))
			);



			// составление multipipe для линтинга css
			let streamCssLint = multipipe(
				$.if(
					(file) => {
						return (file.extname === '.css' && file.relative.split('\\')[0] !== 'vendor');
					},
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
			if (isConcat) {
				var folders = options.getFolders(options.src);
				folders.map(function (folder) {
					let files = [];
					console.log(folder);
					let source = path.join(options.src, folder, '*.scss');
					gulp.src(source)
						.pipe(multipipe(
								$.if(
									options.maps,
									$.sourcemaps.init()
								),
								streamSass,
								$.wrap('\n/* <%= file.relative %>\n ================================== */\n<%= contents %>\n'),
								$.concat(`${folder}.css`),
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
							options.browserSync.stream({
								match: "**/*.css"
							})
						));
				});
				cb();



			} else {


				let receivedFilesList = [];
				return gulp.src(options.src)
					.pipe($.if(
						options.sasslint,
						streamSassLint
					))
					.pipe($.if(
						options.maps,
						$.sourcemaps.init()
					))
					.pipe(streamSass)
					.pipe($.if(
						options.csslint,
						streamCssLint
					))
					.pipe($.if(
						options.maps,
						$.sourcemaps.write('/')
					))
					.pipe($.if(
						(/\.css$/ && !!options.changeExt),
						$.rename((path) => {
							path.extname = options.changeExt;
						})
					))
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
							match: "**/*.css"
						})
					));
			}
	};
};
