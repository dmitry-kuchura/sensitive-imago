'use strict';

/**
 * ***gulpfile.babel.js*** - Основной файл описания системы сборки для менеджера задач - *Gulp 4*.
 * Ниже представленны все данные и задачи для работы.
 *
 * @namespace 	gulp
 * @sourcefile 	file:gulpfile
*/





/**
 * Подключение nodejs модулей
 *
 * @name       	_node_modules
 * @sourcecode 	gulp:modules
 * @memberof 	gulp
 * @newscope
 */
	// подключение nodejs модулей
	import fs from 'fs';
	import path from 'path';
	import gulp from 'gulp';
	import pkg from './package.json';
	import config from './config.json';
	import autowatch from 'gulp-autowatch';
	import browserSyncModule from 'browser-sync';
	const browserSync = browserSyncModule.create();
	import yargs from 'yargs';
	const argv = yargs.argv;

	// подключение внутренних модулей
	import _helpers from './tasks/_helpers.js';

// endcode gulp:modules





/**
 * Основная конфигурация проекта сборки
 *
 * @name       	_constants
 * @sourcecode 	gulp:constants
 * @memberof 	gulp
 * @newscope
 */
	// директория проекта
	const projectFolder = config.localFolder;
 	// имя проекта
	const projectName = 'sensitive-imago';

	// объект авто-вотчей
	const watchSources = {};

	// включение линтинга -l --lint
	const isLinting = !!argv.l || !!argv.lint;
	// версия production сборки -p --prod
	const isProduction = !!argv.p || !!argv.prod;
	// версия dev сборки
	const isDevelop = !isProduction;
	// включение нотифаеров -s --nonotify
	const isNotify = !(!!argv.s || !!argv.nonotify);
	// глобальный метод фильтровки
	const globalFilterMethod = config.globalFilterMethod;
	// проект адаптивный
	const isProjectResponsive = config.isProjectResponsive;
	// проект студии wezom
	const isProjectWezom = config.isProjectWezom;

	// использовать browser-sync
	const isBsUse = config.browserSync.use;
	// авто открытие ссылки полсе инита browser-sync -o --open
	const isBsOpenOnInit = (!!argv.o || !!argv.open) ? 'external' : false;
	// отключение авторелоада browser-sync при изменениях -n --noreload
	const isBsAutoReload = !(!!argv.n || !!argv.noreload);
	// конфигурация browser-sync
	const bsConfig = {
		proxy: `http://${projectName}.loc/`,
		open: isBsOpenOnInit,
		port: 4000
	};
	// Инициализация browser-sync
	const BrowserSync = (cb) => {
		if (isBsUse) {
			let open = isBsOpenOnInit;
			let port = config.browserSync.port;
			if (config.browserSync.static) {
				browserSync.init({
					server: {
						baseDir: 'dist/'
					},
					open: open,
					port: port
				});
			} else {
				browserSync.init({
					proxy: `http://${projectFolder}${config.browserSync.deepPath}`,
					open: open,
					port: port
				});
			}
		} else {
			cb();
		}
	};
// endcode gulp:constants





// создание `tmp` директории, если не существует
// =============================================
	try {
		fs.accessSync('./tmp');
	} catch(e) {
		fs.mkdirSync('./tmp');
	}




/**
 * Получение директорий для конката внутренних файлов
 *
 * @param      {string|Array}	dirs - путь к директориям
 * @return     {Path}
 */
	let getFolders = (dirs) => {
		return fs.readdirSync(dirs)
			.filter((file) => {
				return fs.statSync(path.join(dirs, file)).isDirectory();
			});
	};





/**
 * Метод "ленивой" загрузки и подключения задач из внутрених модулей.
 * Кроме передаваемых значений из каждой задачи, метод добавляет автоматически параметры:
 * - `taskOptions.taskName` - имя задчи
 * - `taskOptions.isProduction` - флаг продакшн версии
 * - `taskOptions.isDevelop` - флаг dev версии
 * - `taskOptions.package` - объект данных из package.json
 * - `taskOptions.browserSyncReload` - флаг авторелоада `browser-sync`
 *
 * Также если в параметрах задачи указать свойство `watch` - автоматически добавит в глобальный объект `watchSources` ключ (имя задачи) - и значение указанное в свойстве. Для использования модулем `gulp-autowatch` в задаче `gulp watch`
 *
 *
 *
 * @sourcecode 	file:gulpfile:lazyRequireTask
 * @memberof 	gulp
 * @inner
 *
 * @param		{String}		taskName - имя задачи
 * @param		{String}		taskFile - путь к файлу, без учета родительской директории задач - `./tasks/`
 * @param		{Object}		[taskOptions={}] - передавемые параметры
 *
 * @return 		{*}
 *
*/
	let lazyRequireTask = (taskName, taskFile, taskOptions={}) => {
		taskOptions.taskName = taskName;
		taskOptions.isProduction = isProduction;
		taskOptions.isDevelop = isDevelop;
		taskOptions.package = pkg;
		taskOptions.browserSyncReload = (isBsUse && isBsAutoReload);
		taskOptions.browserSync = browserSync;
		if (taskOptions.concat) {
			taskOptions.getFolders = getFolders;
		}
		if (taskOptions.watch) {
			watchSources[taskName] = taskOptions.watch;
		}
		gulp.task(taskName, function(cb) {
			let task = require(taskFile).call(this, taskOptions);
			return task(cb);
		});
	};





// Компиляция разметки
// ===========================================

	/**
	 * Объект параметров, который передаеться в `pipe` модуля `gulp-ejs-locals`, при компиляции основных файлов разметки и `hidden` файлов.
	 *
	 * @name       	_ejsLocals
	 * @sourcecode 	gulp:ejslocals
	 * @memberof 	gulp
	 * @newscope
	 */
		let _ejsLocals = {
			_projectName: projectName,
			_projectResponsive: isProjectResponsive,
			_projectWezom: isProjectWezom
		};
	// endcode gulp:ejslocals


	/**
	 * Задача компиляции основных файлов разметки.
	 * ```git
	 * gulp ejs:markup
	 * ```
	 *
	 * @name 		ejs:markup
	 * @sourcecode 	gulp:ejs:markup
	 * @tutorial 	compile-ejs
	 * @see 		{@link module:tasks/ejs}
	 * @see			[Project docs / Туториалы / Исходные файлы сборки](../html/tutorial-folder.html)
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('ejs:markup', './tasks/ejs', {
			src: './src/markup/views/*.ejs',
			dest: './dist',
			watch: [
				'./src/markup/addons/**/*.ejs',
				'./src/markup/layouts/**/*.ejs',
				'./src/markup/views/**/*.ejs',
				'./src/markup/config.ejs'
			],
			beautify: isProduction,
			locals: _ejsLocals,
			notify: isNotify
		});
	// endcode gulp:ejs:markup


	/**
	 * Задача компиляции `hidden` файлов и переименование в `.php`.
	 * ```git
	 * gulp ejs:hidden
	 * ```
	 *
	 * @name 		ejs:hidden
	 * @sourcecode 	gulp:ejs:hidden:php
	 * @tutorial 	compile-ejs
	 * @see 		{@link module:tasks/ejs}
	 * @see			[Project docs / Туториалы / Исходные файлы сборки / директория hidden](../html/tutorial-folder-hidden.html)
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('ejs:hidden', './tasks/ejs', {
			src: './src/markup/hidden/*.ejs',
			dest: './dist/hidden',
			watch: [
				'./src/markup/hidden/*.ejs'
			],
			beautify: isProduction,
			changeExt: '.php',
			locals: _ejsLocals,
			notify: isNotify
		});
	// endcode gulp:ejs:hidden:php


	/**
	 * Трансфер дополнительных, статических, файлов.
	 * ```git
	 * gulp ejs:hidden:static
	 * ```
	 *
	 * @name 		ejs:hidden:static
	 * @sourcecode 	gulp:ejs:hidden:static
	 * @tutorial 	compile-transfer
	 * @see 		{@link module:tasks/transfer}
	 * @see			[Project docs / Туториалы / Исходные файлы сборки / директория hidden](../html/tutorial-folder-hidden.html)
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('ejs:hidden:static', './tasks/transfer', {
			src: './src/markup/hidden/**/*.!(ejs)',
			dest: './dist/hidden',
			watch: [
				'./src/markup/hidden/**/*.!(ejs)'
			],
			filter: globalFilterMethod,
			notify: isNotify
		});
	// endcode gulp:ejs:hidden:static


	/**
	 * Очистка всех скомпилорованных `.html` файлов и директории `hidden`
	 * ```git
	 * gulp ejs:clean
	 * ```
	 *
	 * @name 		ejs:clean
	 * @sourcecode 	gulp:ejs:clean
	 * @see 		{@link module:tasks/clean}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('ejs:clean', './tasks/clean', {
			src: [
				'./dist/*.html',
				'./dist/hidden'
			]
		});
	// endcode gulp:ejs:clean


	/**
	 * Комплексная задача для компиляции `ejs`
	 * ```git
	 * gulp ejs
	 * ```
	 *
	 * @name 		ejs
	 * @sourcecode 	gulp:ejs:series
	 * @tutorial 	compile-ejs
	 * @see			[Project docs / Туториалы / Исходные файлы сборки](../html/tutorial-folder.html)
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('ejs',
			gulp.series(
				'ejs:markup',
				'ejs:hidden',
				'ejs:hidden:static'
			)
		);
	// endcode gulp:ejs:series


	/**
	 * Комплексная задача пересборки `ejs`.
	 * Сначала очищаем итоговые файлы и компилируем заново.
	 * ```git
	 * gulp ejs:rebuild
	 * ```
	 *
	 * @name 		ejs:rebuild
	 * @sourcecode 	gulp:ejs:rebuild
	 * @tutorial 	compile-ejs
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('ejs:rebuild',
			gulp.series(
				'ejs:clean',
				'ejs'
			)
		);
	// endcode gulp:ejs:rebuild





// Компиляция скриптов
// ===========================================

	/**
	 * Задача компиляции основных, `*.js` файлов разроботки.
	 * Как правило используется для файлов разроботки или сторонних библиотек которые, нужно склеить вместе или внести правки.
	 * Все сторонние файлы должны лежaть в директории `vendor`.
	 * ```git
	 * gulp js:dynamics
	 * ```
	 *
	 * @name 		js:dynamics
	 * @sourcecode 	gulp:js:dynamics
	 * @tutorial 	compile-js
	 * @see 		{@link module:tasks/js}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('js:dynamics', './tasks/js', {
			src: './src/js/dynamics/*.js',
			dest: './dist/js',
			watch: [
				'./src/js/dynamics/*.js'
			],
			maps: isDevelop,
			min: isProduction,
			filter: false,
			eslint: isLinting,
			notify: isNotify,
		});
	// endcode gulp:js:dynamics


	/**
	 * Задача компиляции, ***внешних***, `*.js` файлов c конкатом по директориям.
	 * Как правило используется для сторонних библиотек которые нужно склеить вместе.
	 * ```git
	 * gulp js:vendor
	 * ```
	 *
	 * @name 		js:vendor
	 * @sourcecode 	gulp:js:vendor
	 * @tutorial 	compile-js
	 * @see 		{@link module:tasks/js}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('js:vendor', './tasks/js', {
			src: './src/js/dynamics/vendor/',
			dest: './dist/js/vendor',
			watch: [
				'./src/js/dynamics/vendor/**/*.js'
			],
			concat: true,
			maps: isDevelop,
			min: isProduction,
			filter: false,
			eslint: false,
			notify: isNotify,
		});
	// endcode gulp:js:vendor


	/**
	 * Задача компиляции инлайновых (critical) скриптов.
	 * Эти файлы компилируются не в `dist` директорию, а в папку сборки `ejs` файлов, со сменной расширенния c __*.js__ на __*.ejs__.
	 * ```git
	 * gulp js:criticals
	 * ```
	 *
	 * @name 		js:criticals
	 * @sourcecode 	gulp:js:criticals
	 * @tutorial 	compile-js
	 * @see 		{@link module:tasks/js}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('js:criticals', './tasks/js', {
			src: './src/js/criticals/**/*.js',
			dest: './src/markup/views/criticals/js',
			watch: [
				'./src/js/criticals/**/*.js'
			],
			maps: false,
			min: true,
			changeExt: '.ejs',
			eslint: isLinting,
			notify: isNotify,
		});
	// endcode gulp:js:criticals


	/**
	 * Трансфер дополнительных, статических, файлов.
	 * ```git
	 * gulp js:statics
	 * ```
	 *
	 * @name 		js:statics
	 * @sourcecode 	gulp:js:statics
	 * @tutorial 	compile-transfer
	 * @see 		{@link module:tasks/transfer}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('js:statics', './tasks/transfer', {
			src: './src/js/statics/**/*.*',
			dest: './dist/js',
			filter: globalFilterMethod,
			watch: [
				'./src/js/statics/**/*.*'
			],
			notify: isNotify
		});
	// endcode gulp:js:statics


	/**
	 * Сканирование файлов на именна классов (стили) или js обращение к свойствам `Modernizr`.
	 * ```git
	 * gulp modernizr:scan
	 * ```
	 *
	 * @name 		modernizr:scan
	 * @sourcecode 	gulp:modernizr:scan
	 * @tutorial 	compile-js
	 * @see			[JSDoc / Туториалы / Работа с Modernizr.js](../js/tutorial-workwith-modernizr.html#scan)
	 * @see 		{@link module:tasks/js}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('modernizr:scan', './tasks/js', {
			src: [
				'./dist/js/*.js',
				'./dist/css/*.css',
				'./src/markup/views/criticals/css/*.ejs',
				'./src/markup/views/criticals/js/*.ej'
			],
			dest: './dist/js/vendor',
			maps: false,
			min: isProduction,
			modernizr: true,
			modernizrConfig: {
				options: [
					'setClasses', 'prefixes'
				],
				tests: [],
				excludeTests: [
					'checked'
				]
			},
			filter: false,
			notify: isNotify
		});
	// endcode gulp:modernizr:scan


	/**
	 * Добавление пользовательских тестов в модуль `modernizr`.
	 * ```git
	 * gulp modernizr:addtests
	 * ```
	 *
	 * @name 		modernizr:addtests
	 * @sourcecode 	gulp:modernizr:addtests
	 * @tutorial 	compile-transfer
	 * @see			[JSDoc / Туториалы / Работа с Modernizr.js](../js/tutorial-workwith-modernizr.html#addtests)
	 * @see 		{@link module:tasks/transfer}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('modernizr:addtests', './tasks/transfer', {
			src: './src/js/addons/modernizr-tests/**/*.js',
			dest: './node_modules/modernizr/feature-detects',
			watch: [
				'./src/js/addons/modernizr-tests/**/*.js'
			],
			imagemin: false,
			filter: globalFilterMethod,
			notify: isNotify
		});
	// endcode gulp:modernizr:addtests


	/**
	 * Очистка директорий скриптов, внешних и инлайновых.
	 * ```git
	 * gulp js:clean
	 * ```
	 *
	 * @name 		js:clean
	 * @sourcecode 	gulp:js:clean
	 * @see 		{@link module:tasks/clean}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('js:clean', './tasks/clean', {
			src: [
				'./dist',
				'./src/markup/views/criticals/js'
			]
		});
	// endcode gulp:js:clean


	/**
	 * Комплексная задача трансфера дополнительных файлов и компилция `.js` файлов (внешних и инлайновых).
	 * ```git
	 * gulp js
	 * ```
	 *
	 * @name 		js
	 * @sourcecode 	gulp:js:series
	 * @tutorial 	compile-js
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('js',
			gulp.series(
				'js:dynamics',
				'js:vendor',
				'js:criticals',
				'js:statics'
			)
		);
	// endcode gulp:js:series


	/**
	 * Комплексная задача пересборки скриптов.
	 * Сначала очищаем итоговые файлы и компилируем заново.
	 * ```git
	 * gulp js:rebuild
	 * ```
	 *
	 * @name 		js:rebuild
	 * @sourcecode 	gulp:js:rebuild
	 * @tutorial 	compile-js
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('js:rebuild',
			gulp.series(
				'js:clean',
				'js',
				'modernizr:scan'
			)
		);
	// endcode gulp:js:rebuild





// Компиляция стилей
// ===========================================

	/**
	 * Задача компиляции основных, ***внешних***, `*.css` файлов из `*.scss`.
	 * Как правило используется для файлов разроботки или сторонних библиотек которые, нужно склеить вместе или внести правки.
	 * Все сторонние файлы должны лежaть в директории `vendor`.
	 * ```git
	 * gulp sass:dynamics
	 * ```
	 *
	 * @name 		sass:dynamics
	 * @sourcecode 	gulp:sass:dynamics
	 * @tutorial 	compile-sass
	 * @see 		{@link module:tasks/sass}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('sass:dynamics', './tasks/sass', {
			src: './src/sass/dynamics/**/*.scss',
			dest: './dist/css',
			maps: isDevelop,
			min: isProduction,
			watch: [
				'./src/sass/config.scss',
				'./src/sass/addons/**/*.scss',
				'./src/sass/dynamics/**/*.scss'
			],
			notify: isNotify,
			sasslint: isLinting,
			csslint: isLinting
		});
	// endcode gulp:sass:dynamics


	/**
	 * Задача компиляции инлайновых (critical) стилей.
	 * Эти файлы компилируются не в `dist` директорию, а в папку сборки `ejs` файлов, со сменной расширенния c __*.css__ на __*.ejs__.
	 * ```git
	 * gulp sass:criticals
	 * ```
	 *
	 * @name 		sass:criticals
	 * @sourcecode 	gulp:sass:criticals
	 * @tutorial 	compile-sass
	 * @see 		{@link module:tasks/sass}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('sass:criticals', './tasks/sass', {
			src: './src/sass/criticals/**/*.scss',
			dest: './src/markup/views/criticals/css',
			maps: false,
			min: true,
			changeExt: '.ejs',
			watch: [
				'./src/sass/config.scss',
				'./src/sass/addons/**/*.scss',
				'./src/sass/criticals/**/*.scss'
			],
			notify: isNotify,
			sasslint: isLinting,
			csslint: isLinting
		});
	// endcode gulp:sass:criticals


	/**
	 * Трансфер дополнительных, статических, файлов.
	 * ```git
	 * gulp sass:statics
	 * ```
	 *
	 * @name 		sass:statics
	 * @sourcecode 	gulp:sass:statics
	 * @tutorial 	compile-transfer
	 * @see 		{@link module:tasks/transfer}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('sass:statics', './tasks/transfer', {
			src: './src/sass/statics/**/*.*',
			dest: './dist/css',
			watch: [
				'./src/sass/statics/**/*.*'
			],
			imagemin: isProduction,
			filter: globalFilterMethod,
			notify: isNotify
		});
	// endcode gulp:sass:statics


	/**
	 * Очистка директорий стилей, внешних и инлайновых.
	 * ```git
	 * gulp sass:clean
	 * ```
	 *
	 * @name 		sass:clean
	 * @sourcecode 	gulp:sass:clean
	 * @see 		{@link module:tasks/clean}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('sass:clean', './tasks/clean', {
			src: [
				'./dist/css',
				'./src/markup/views/criticals/css'
			]
		});
	// endcode gulp:sass:clean


	/**
	 * Комплексная задача трансфера дополнительных файлов и компилция `.sass` файлов (внешних и инлайновых).
	 * ```git
	 * gulp sass
	 * ```
	 *
	 * @name 		sass
	 * @sourcecode 	gulp:sass:series
	 * @tutorial 	compile-sass
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('sass',
			gulp.series(
				'sass:dynamics',
				'sass:criticals',
				'sass:statics'
			)
		);
	// endcode gulp:sass:series


	/**
	 * Комплексная задача пересборки стилей.
	 * Сначала очищаем итоговые файлы и компилируем заново.
	 * ```git
	 * gulp sass:rebuild
	 * ```
	 *
	 * @name 		sass:rebuild
	 * @sourcecode 	gulp:sass:rebuild
	 * @tutorial 	compile-sass
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('sass:rebuild',
			gulp.series(
				'sass:clean',
				'sass',
				'modernizr:scan'
			)
		);
	// endcode gulp:sass:rebuild





// Трансферы
// ===========================================

	// images
	// ============
		/**
		 * Трансфер контентовых изображений. Оптимизациия изображений - при `production` сборке
		 * ```git
		 * gulp images
		 * ```
		 *
		 * @name 		images
		 * @sourcecode 	gulp:images:series
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('images', './tasks/transfer', {
				src: './src/images/**/*.*',
				dest: './dist/images',
				filter: globalFilterMethod,
				imagemin: isProduction,
				watch: [
					'./src/images/**/*.*'
				],
				notify: isNotify
			});
		// endcode gulp:images:series


		/**
		 * Очистка директории контентовых изображений.
		 * ```git
		 * gulp images:clean
		 * ```
		 *
		 * @name 		images:clean
		 * @sourcecode 	gulp:images:clean
		 * @see 		{@link module:tasks/clean}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('images:clean', './tasks/clean', {
				src: './dist/images'
			});
		// endcode gulp:images:clean


		/**
		 * Комплексная задача пересборки контентовых изображений.
		 * Сначала очищаем итоговые файлы и собераем заново.
		 * ```git
		 * gulp images:rebuild
		 * ```
		 *
		 * @name 		images:rebuild
		 * @sourcecode 	gulp:images:rebuild
		 * @tutorial 	compile-transfer
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('images:rebuild',
				gulp.series(
					'images:clean',
					'images'
				)
			);
		// endcode gulp:images:rebuild



	// favicons
	// ============

		/**
		 * Трансфер всех фавиконок и дополнительных файлов
		 * ```git
		 * gulp favicons
		 * ```
		 *
		 * @name 		favicons
		 * @sourcecode 	gulp:favicons:series
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('favicons', './tasks/transfer', {
				src: './src/favicons/**/*.*',
				dest: './dist',
				watch: [
					'./src/favicons/**/*.*'
				],
				imagemin: false,
				filter: globalFilterMethod,
				notify: isNotify
			});
		// endcode gulp:favicons:series


		/**
		 * Очистка всех фавиконок и дополнительных файлов
		 * ```git
		 * gulp favicons:clean
		 * ```
		 *
		 * @name 		favicons:clean
		 * @sourcecode 	gulp:favicons:clean
		 * @see 		{@link module:tasks/clean}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('favicons:clean', './tasks/clean', {
				src: [
					'./dist/favicons',
					'./dist/favicon.ico',
					'./dist/manifest.json',
					'./dist/browserconfig.xml'
				]
			});
		// endcode gulp:favicons:clean


		/**
		 * Комплексная задача пересборки всех фавиконок и дополнительных файлов.
		 * Сначала очищаем итоговые файлы и собераем заново.
		 * ```git
		 * gulp favicons:rebuild
		 * ```
		 *
		 * @name 		favicons:rebuild
		 * @sourcecode 	gulp:favicons:rebuild
		 * @tutorial 	compile-transfer
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('favicons:rebuild',
				gulp.series(
					'favicons:clean',
					'favicons'
				)
			);
		// endcode gulp:favicons:rebuild





// Загрузка файлов по ftp
// ===========================================

	/**
	 * Загрузка файлов на инкубатор
	 * ```git
	 * gulp upload
	 * ```
	 *
	 * @name 		upload
	 * @sourcecode 	gulp:upload:inkubator
	 * @see 		{@link module:tasks/upload}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('upload', './tasks/upload', {
			src: './dist/**/*.*',
			notify: isNotify,
			connect: {
				host: '91.206.30.13',
				user: 'inkubator',
				pass: '9H9w4Z4a',
				parallel: 10,
				remotePath: `www/inkubator.ks.ua/html/${projectName}/`
			}
		});
	// endcode gulp:upload:inkubator





// Задачи документации
// ===========================================

	// SASS
	// ====
		/**
		 * Генерация документации scss файлов
		 * ```git
		 * gulp docs:sass:doc
		 * ```
		 *
		 * @name 		docs:sass:doc
		 * @sourcecode 	gulp:docs:sass:doc
		 * @tutorial 	docs-sass
		 * @see 		{@link module:tasks/sassdoc}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:sass:doc', './tasks/sassdoc', {
				theme: './tasks/sassdoc-theme',
				dest: './docs/sass',
				groups: {
					'undefined': 'Без группы'
				},
				src: [
					'./src/sass/config.scss',
					'./src/sass/addons/functions/**/*.scss',
					'./src/sass/addons/mixins/**/*.scss',
					'./src/sass/addons/partials/**/*.scss',
					'./src/sass/dynamics/**/*.scss',
					'./src/sass/criticals/**/*.scss'
				]
			});
		// endcode gulp:docs:sass:doc


		/**
		 * Компиляция главной страницы и туториалов для документации scss файлов
		 * ```git
		 * gulp docs:sass:materials
		 * ```
		 *
		 * @name 		docs:sass:materials
		 * @sourcecode 	gulp:docs:sass:materials
		 * @see 		{@link module:tasks/sassdoc-materials}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:sass:materials', './tasks/sassdoc-materials', {
				systemName: 'SASSDoc',
				tutorials: './tutorials/sass',
				dest: './docs/sass',
				blank: './tasks/sassdoc-theme/blank.js',
				index: './tutorials/sass-index.md'
			});
		// endcode gulp:docs:sass:materials


		/**
		 * Трансфер дополнительных файлов.
		 * ```git
		 * gulp docs:sass:assets
		 * ```
		 *
		 * @name 		docs:sass:assets
		 * @sourcecode 	gulp:docs:sass:assets
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:sass:assets', './tasks/transfer', {
				src: './tutorials/sass/assets/**/*.*',
				dest: './docs/sass/assets',
				filter: globalFilterMethod,
				notify: isNotify,
				notifyIsShort: true
			});
		// endcode gulp:docs:sass:assets


		/**
		 * Комплексная задача создания документации `*.scss` файлов
		 * ```git
		 * gulp docs:sass
		 * ```
		 *
		 * @name 		docs:sass
		 * @sourcecode 	gulp:docs:sass:series
		 * @tutorial 	docs-sass
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('docs:sass',
				gulp.series(
					'docs:sass:doc',
					'docs:sass:materials',
					'docs:sass:assets'
				)
			);
		// endcode gulp:docs:sass:series


	// GULP
	// ====
		/**
		 * Очистка директории документации gulp сборки
		 * ```git
		 * gulp docs:clean:gulp
		 * ```
		 *
		 * @name 		docs:clean:gulp
		 * @sourcecode 	gulp:docs:clean:gulp
		 * @see 		{@link module:tasks/clean}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:clean:gulp', './tasks/clean', {
				src: './docs/gulp'
			});
		// endcode gulp:docs:clean:gulp


		/**
		 * Генерация документации gulp сборки
		 * ```git
		 * gulp docs:jsdoc:gulp
		 * ```
		 *
		 * @name 		docs:jsdoc:gulp
		 * @sourcecode 	gulp:docs:jsdoc:gulp
		 * @tutorial 	docs-gulp
		 * @see 		{@link module:tasks/jsdoc}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:jsdoc:gulp', './tasks/jsdoc', {
				systemName: 'Gulp docs',
				tutorials: './tutorials/gulp',
				dest: './docs/gulp',
				src: [
					'./tutorials/gulp-index.md',
					'./tasks/*.js',
					'./tasks/jsdoc-theme/plugins/*.js',
					'./gulpfile.babel.js'
				]
			});
		// endcode gulp:docs:jsdoc:gulp


		/**
		 * Трансфер дополнительных файлов.
		 * ```git
		 * gulp docs:jsdoc:gulp:assets
		 * ```
		 *
		 * @name 		docs:jsdoc:gulp:assets
		 * @sourcecode 	gulp:docs:gulp:assets
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:jsdoc:gulp:assets', './tasks/transfer', {
				src: './tutorials/gulp/assets/**/*.*',
				dest: './docs/gulp/assets',
				filter: globalFilterMethod,
				notify: isNotify,
				notifyIsShort: true
			});
		// endcode gulp:docs:gulp:assets


		/**
		 * Комплексная задача создания документации gulp сборки
		 * ```git
		 * gulp docs:gulp
		 * ```
		 *
		 * @name 		docs:gulp
		 * @sourcecode 	gulp:docs:gulp:series
		 * @tutorial 	docs-gulp
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('docs:gulp',
				gulp.series(
					'docs:clean:gulp',
					'docs:jsdoc:gulp',
					'docs:jsdoc:gulp:assets'
				)
			);
		// endcode gulp:docs:gulp:series


	// JS client
	// =========
		/**
		 * Очистка директории документации скриптов верстки
		 * ```git
		 * gulp docs:clean:js
		 * ```
		 *
		 * @name 		docs:clean:js
		 * @sourcecode 	gulp:docs:clean:js
		 * @see 		{@link module:tasks/clean}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:clean:js', './tasks/clean', {
				src: './docs/js'
			});
		// endcode gulp:docs:clean:js


		/**
		 * Генерация документации скриптов верстки
		 * ```git
		 * gulp docs:jsdoc:js
		 * ```
		 *
		 * @name 		docs:jsdoc:js
		 * @sourcecode 	gulp:docs:jsdoc:js
		 * @tutorial 	docs-js
		 * @see 		{@link module:tasks/jsdoc}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:jsdoc:js', './tasks/jsdoc', {
				systemName: 'JSDoc',
				tutorials: './tutorials/js',
				dest: './docs/js',
				src: [
					'./tutorials/js-index.md',
					'./src/js/addons/modernizr-tests/**/*.js',
					'./src/js/dynamics/*.js',
					'./src/js/criticals/**/*.js'
				]
			});
		// endcode gulp:docs:jsdoc:js


		/**
		 * Трансфер дополнительных файлов.
		 * ```git
		 * gulp docs:jsdoc:js:assets
		 * ```
		 *
		 * @name 		docs:jsdoc:js:assets
		 * @sourcecode 	gulp:docs:js:assets
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:jsdoc:js:assets', './tasks/transfer', {
				src: './tutorials/js/assets/**/*.*',
				dest: './docs/js/assets',
				filter: globalFilterMethod,
				notify: isNotify,
				notifyIsShort: true
			});
		// endcode gulp:docs:js:assets


		/**
		 * Комплексная задача создания документации скриптов верстки
		 * ```git
		 * gulp docs:js
		 * ```
		 *
		 * @name 		docs:js
		 * @sourcecode 	gulp:docs:js:series
		 * @tutorial 	docs-js
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('docs:js',
				gulp.series(
					'docs:clean:js',
					'docs:jsdoc:js',
					'docs:jsdoc:js:assets'
				)
			);
		// endcode gulp:docs:js:series


	// HTML todo
	// =========
		/**
		 * Очистка директории документации с html страниц
		 * ```git
		 * gulp docs:clean:html
		 * ```
		 *
		 * @name 		docs:clean:html
		 * @sourcecode 	gulp:docs:clean:html
		 * @see 		{@link module:tasks/clean}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:clean:html', './tasks/clean', {
				src: [
					'./docs/html',
					'./tmp/htmldoc'
				]
			});
		// endcode gulp:docs:clean:html


		/**
		 * Генерация документации с html страниц
		 * ```git
		 * gulp docs:html:doc
		 * ```
		 *
		 * @name 		docs:html:doc
		 * @sourcecode 	gulp:docs:html:doc
		 * @tutorial 	docs-htmldoc
		 * @see 		{@link module:tasks/htmldoc}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:html:doc', './tasks/htmldoc', {
				systemName: 'Project docs',
				tutorials: `./tutorials/html`,
				tmpFiles: './tmp/htmldoc',
				tmpMD: './tmp/htmldoc/__todo-list.md',
				dest: `./docs/html`,
				src: [
					`./tutorials/html-index.md`,
					`./dist/*.html`
				]
			});
		// endcode gulp:docs:html:doc


		/**
		 * Трансфер дополнительных файлов.
		 * ```git
		 * gulp docs:html:assets
		 * ```
		 *
		 * @name 		docs:html:assets
		 * @sourcecode 	gulp:docs:html:assets
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:html:assets', './tasks/transfer', {
				src: './tutorials/html/assets/**/*.*',
				dest: './docs/html/assets',
				filter: globalFilterMethod,
				notify: isNotify,
				notifyIsShort: true
			});
		// endcode gulp:docs:html:assets


		/**
		 * Комплексная задача создания документации с html страниц
		 * ```git
		 * gulp docs:html
		 * ```
		 *
		 * @name 		docs:html
		 * @sourcecode 	gulp:docs:html:series
		 * @tutorial 	docs-htmldoc
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('docs:html',
				gulp.series(
					'docs:clean:html',
					'docs:html:doc',
					'docs:html:assets'
				)
			);
		// endcode gulp:docs:html:series


	// ALL
	// ===

		/**
		 * Очистка очистка корневой директории
		 * ```git
		 * gulp docs:clean
		 * ```
		 *
		 * @name 		docs:clean
		 * @sourcecode 	gulp:docs:clean:all
		 * @see 		{@link module:tasks/clean}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:clean', './tasks/clean', {
				src: './docs'
			});
		// endcode gulp:docs:clean:all


		/**
		 * Трансфер статических файлов для оформления документаций
		 * ```git
		 * gulp docs:assets
		 * ```
		 *
		 * @name 		docs:assets
		 * @sourcecode 	gulp:docs:assets
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('docs:assets', './tasks/transfer', {
				src: './tasks/_docs-assets/**/*.*',
				dest: './docs/_assets',
				filter: globalFilterMethod,
				notify: isNotify,
				notifyIsShort: true
			});
		// endcode gulp:docs:assets


		/**
		 * Генерация документаций по всем разделам
		 * ```git
		 * gulp docs
		 * ```
		 *
		 * @name 		docs
		 * @sourcecode 	gulp:docs:all
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('docs', gulp.series(
				'docs:clean:html',
				'docs:clean',
				'docs:assets',
				'docs:jsdoc:gulp',
				'docs:jsdoc:gulp:assets',
				'docs:jsdoc:js',
				'docs:jsdoc:js:assets',
				'docs:html:doc',
				'docs:html:assets',
				'docs:sass'
			));
		// endcode gulp:docs:all





// Задачи сборки
// ===========================================

	/**
	 * Очистка директрии `./dist` и инлайновых **js/css** файлов
	 * ```git
	 * gulp clean
	 * ```
	 *
	 * @name 		clean
	 * @sourcecode 	gulp:clean:all
	 * @see 		{@link module:tasks/clean}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('clean', './tasks/clean', {
			src: [
				'./dist',
				'./src/markup/views/criticals/js',
				'./src/markup/views/criticals/css'
			]
		});
	// endcode gulp:clean:all


	/**
	 * Полная пересборка итогового макета верстки, с удалением предыдущей версии.
	 * ```git
	 * gulp rebuild
	 * ```
	 *
	 * @name 		rebuild
	 * @sourcecode 	gulp:rebuild:all
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('rebuild',
			gulp.series(
				'clean',
				'sass',
				'js',
				'images',
				'favicons',
				'modernizr:scan',
				'ejs'
			)
		);
	// endcode gulp:rebuild:all


	/**
	 * Задача вотчинга
	 * ```git
	 * gulp watch
	 * ```
	 *
	 * @name 		watch
	 * @sourcecode 	gulp:watch:all
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('watch', () => {
			_helpers.logMsg('Start watching');
			autowatch(gulp, watchSources);
		});
	// endcode gulp:watch:all


	/**
	 * gulp задача по умолчанию.
	 * запускает вотч и `browser-sync`, если включен.
	 * ```git
	 * gulp default
	 * ```
	 *
	 * @name 		default
	 * @sourcecode 	gulp:default:all
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('default',
			gulp.parallel('watch', BrowserSync)
		);
	// endcode gulp:default:all


	/**
	 * gulp задача пересборки итоговой верстки и продолжение инкрементальной сборки.
	 * ```git
	 * gulp build
	 * ```
	 *
	 * @name 		build
	 * @sourcecode 	gulp:build:all
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('build',
			gulp.series(
				'rebuild',
				'default'
			)
		);
	// endcode gulp:build:all


	/**
	 * Стартовая задача, использутся для первоого запуска
	 * ```git
	 * gulp start
	 * ```
	 *
	 * @name 		start
	 * @sourcecode 	gulp:start:all
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		gulp.task('start',
			gulp.series(
				'modernizr:addtests',
				'rebuild',
				'docs'
			)
		);
	// endcode gulp:start:all
