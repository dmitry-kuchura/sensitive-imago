'use strict';

/**
 * ***gulpfile.babel.js*** - Основной файл описания системы сборкидля менеджера задач - *Gulp 4*.
 * Ниже представленны все данные и задачи для работы.
 *
 *
 * @namespace 	gulp
 * @sourcefile 	file:gulpfile
*/





/**
 * Подключение nodejs модулей
 *
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
 *
 * @name       	_constants
 * @sourcecode 	gulp:constants
 * @memberof 	gulp
 * @newscope
 */
	// имя проекта
	const projectName = pkg.name;
	// директория проекта
	const projectFolder = config.localFolder;

	// объект авто-вотчей
	const watchSources = {};

	// включение линтинга -l --lint
	const isLinting = !!argv.l || !!argv.lint;
	// версия production сборки -p --prod
	const isProduction = !!argv.p || !!argv.prod;
	// версия dev сборки
	const isDevelop = !isProduction;

	// проект адаптивный
	const isProjectResponsive = config.isProjectResponsive;
	// проект студии wezom
	const isProjectWezom = config.isProjectWezom;

	// минифицировать файлы при продакшн версии сборки
	const isMinify = isProduction && config.minifyJsCssOnProduction;
	// конкат js папок при продакшн версии сборки
	const isConcatJs = isProduction && config.cancatJsFoldersOnProduction;
	// конкат css папок при продакшн версии сборки
	const isConcatCss = isProduction && config.cancatCssFoldersOnProduction;
	// оптимизировать изображения при продакшн версии сборки
	const isSourcemaps = isDevelop && config.sourcemapsJsCssOnDevelop;
	// включение нотифаеров -n --notify
	const isNotify = config.notifyAfterTaskDone || (!!argv.n || !!argv.notify);

	// глобальный метод фильтровки при трансфере файлов
	const transferFilterMethod = config.transferFilterMethod;
	// оптимизировать изображения при продакшн версии сборки
	const isOptimize = isProduction && config.optimizeImagesOnProduction;

	// использовать browser-sync
	const isBsUse = config.browserSync.use;
	// авто открытие ссылки полсе инита browser-sync -o --open
	const isBsOpenOnInit = (!!argv.o || !!argv.open) ? 'external' : false;
	// отключение авторелоада browser-sync при изменениях -r --noreload
	const isBsAutoReload = !(!!argv.r || !!argv.noreload);
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
		let allFolders = fs.readdirSync(dirs)
			.filter((file) => {
				return fs.statSync(path.join(dirs, file)).isDirectory();
			});
		let folders = [];
		allFolders.forEach((entry) => {
			if (!/^_/.test(entry)) {
				folders.push(entry);
			}
		});
		return folders;
	};





/**
 * Метод "ленивой" загрузки и подключения задач из внутрених модулей.
 * Кроме передаваемых значений из каждой задачи,
 * метод добавляет автоматически параметры:
 * - `taskOptions.taskName` - имя задчи
 * - `taskOptions.isProduction` - флаг продакшн версии
 * - `taskOptions.isDevelop` - флаг dev версии
 * - `taskOptions.package` - объект данных из package.json
 * - `taskOptions.browserSyncReload` - флаг авторелоада `browser-sync`
 *
 * Также если в параметрах задачи указать свойство `watch`
 * - автоматически добавит в глобальный объект `watchSources` ключ (имя задачи) - и значение указанное в свойстве.
 * Для использования модулем `gulp-autowatch` в задаче `gulp watch`
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
	 * Объект параметров, который передаеться в `pipe` модуля `gulp-ejs-locals`,
	 * при компиляции основных файлов разметки и `hidden` файлов.
	 *
	 * @name       	_ejsLocals
	 * @sourcecode 	gulp:ejslocals
	 * @memberof 	gulp
	 * @newscope
	 */
		let _ejsLocals = {
			PKG: pkg,
			IS_RESPONSIVE: isProjectResponsive,
			IS_WEZOM: isProjectWezom,
			IS_PRODUCTION: isProduction,
			IS_DEVELOP: isDevelop,
			IS_CONCAT_JS: isConcatJs,
			IS_CONCAT_CSS: isConcatCss
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
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('ejs:markup', './tasks/ejs', {
			src: './src/markup/views/*.ejs',
			dest: './dist',
			watch: [
				'./src/markup/helpers/*.ejs',
				'./src/markup/layouts/*.ejs',
				'./src/markup/views/*.ejs',
				'./src/markup/widgets/*.ejs',
				'./src/markup/_config.ejs'
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
				'ejs:hidden'
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
	 * Задача составления основных `*.js` файлов.
	 * ```git
	 * gulp js:files
	 * ```
	 *
	 * @name 		js:files
	 * @sourcecode 	gulp:js:files
	 * @tutorial 	compile-js
	 * @see 		{@link module:tasks/js}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		// lazyRequireTask('js:files', './tasks/js', {
		// 	src: './src/js/*.js',
		// 	dest: './dist/js',
		// 	watch: [
		// 		'./src/js/*.js',
		// 		'./src/js/_partials/**/*.js'
		// 	],
		// 	maps: isSourcemaps,
		// 	min: isMinify,
		// 	eslint: isLinting,
		// 	notify: isNotify,
		// });
	// endcode gulp:js:files

	/**
	 * Задача составления `*.js` файлов из директорий.
	 * ```git
	 * gulp js:folders
	 * ```
	 *
	 * @name 		js:folders
	 * @sourcecode 	gulp:js:folders
	 * @tutorial 	compile-js
	 * @see 		{@link module:tasks/js}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		// lazyRequireTask('js:folders', './tasks/js', {
		// 	src: './src/js/!(_*)**/*.js',
		// 	dest: './dist/js',
		// 	watch: [
		// 		'./src/js/!(_*)**/**/*.js'
		// 	],
		// 	maps: isSourcemaps,
		// 	min: isMinify,
		// 	eslint: false,
		// 	notify: isNotify,
		// });
	// endcode gulp:js:folders


	/**
	 * Задача конката `*.js` файлов в директориях.
	 * ```git
	 * gulp js:concat
	 * ```
	 *
	 * @name 		js:concat
	 * @sourcecode 	gulp:js:concat
	 * @tutorial 	compile-js
	 * @see 		{@link module:tasks/js}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		// lazyRequireTask('js:concat', './tasks/js', {
		// 	src: './src/js/',
		// 	dest: './dist/js',
		// 	watch: [
		// 		'./src/js/!(_*)**/**/*.js'
		// 	],
		// 	concat: true,
		// 	maps: isSourcemaps,
		// 	min: isMinify,
		// 	eslint: false,
		// 	notify: isNotify,
		// });
	// endcode gulp:js:concat

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
		// lazyRequireTask('js:criticals', './tasks/js', {
		// 	src: './src/js/_criticals/*.js',
		// 	dest: './src/markup/partials/criticals-js',
		// 	watch: [
		// 		'./src/js/_criticals/*.js'
		// 	],
		// 	min: true,
		// 	changeExt: '.ejs',
		// 	eslint: isLinting,
		// 	notify: isNotify,
		// });
	// endcode gulp:js:criticals


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
				'./dist/js/init.js',
				'./dist/css/style.css',
				'./src/markup/_partials/criticals-css/*.ejs',
				'./src/markup/_partials/criticals-js/*.ejs'
			],
			dest: './dist/js/',
			maps: false,
			min: isMinify,
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
			src: './tasks/modernizr-tests/**/*.js',
			dest: './node_modules/modernizr/feature-detects',
			filter: transferFilterMethod,
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
		// lazyRequireTask('js:clean', './tasks/clean', {
		// 	src: [
		// 		'./dist/js'
		// 	]
		// });
	// endcode gulp:js:clean


	/**
	 * Комплексная задача компиляции `.js` файлов (внешних и инлайновых).
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
	 	let _jsSeries = [
			'js:files',
			'js:criticals'
	 	];
	 	if (isConcatJs) {
	 		_jsSeries.unshift('js:concat');
	 	} else {
	 		_jsSeries.unshift('js:folders');
	 	}
		// gulp.task('js', gulp.series(..._jsSeries));
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
		// gulp.task('js:rebuild',
		// 	gulp.series(
		// 		'js:clean',
		// 		'js',
		// 		'modernizr:scan'
		// 	)
		// );
	// endcode gulp:js:rebuild





// Компиляция стилей
// ===========================================

	/**
	 * Задача компиляции основных `*.css` файлов из `*.scss`.
	 * ```git
	 * gulp sass:files
	 * ```
	 *
	 * @name 		sass:files
	 * @sourcecode 	gulp:sass:files
	 * @tutorial 	compile-sass
	 * @see 		{@link module:tasks/sass}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('sass:files', './tasks/sass', {
			src: './src/sass/*.scss',
			dest: '../Media/css/',
			watch: [
				'./src/sass/*.scss',
				'./src/sass/_mixins/**/*.scss',
				'./src/sass/_partials/**/*.scss'
			],
			maps: isSourcemaps,
			min: isMinify,
			notify: isNotify,
			sasslint: isLinting,
			csslint: isLinting
		});
	// endcode gulp:sass:files

	/**
	 * Задача Задача составления `*.css` файлов из директорий.
	 * ```git
	 * gulp sass:folders
	 * ```
	 *
	 * @name 		sass:folders
	 * @sourcecode 	gulp:sass:folders
	 * @tutorial 	compile-sass
	 * @see 		{@link module:tasks/sass}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('sass:folders', './tasks/sass', {
			src: './src/sass/!(_*)**/*.scss',
			dest: './dist/css',
			watch: [
				'./src/sass/!(_*)**/**/*.scss'
			],
			maps: isSourcemaps,
			min: isMinify,
			notify: isNotify,
			sasslint: false,
			csslint: false
		});
	// endcode gulp:sass:folders

	/**
	 * Задача конката `*.css` файлов в директориях.
	 * ```git
	 * gulp sass:concat
	 * ```
	 *
	 * @name 		sass:concat
	 * @sourcecode 	gulp:sass:concat
	 * @tutorial 	compile-sass
	 * @see 		{@link module:tasks/sass}
	 * @memberof 	gulp
	 * @newscope 	gulp
	 */
		lazyRequireTask('sass:concat', './tasks/sass', {
			src: './src/sass/',
			dest: './dist/css',
			watch: [
				'./src/sass/!(_*)**/**/*.scss'
			],
			concat: true,
			maps: isSourcemaps,
			min: isMinify,
			notify: isNotify,
			sasslint: false,
			csslint: false
		});
	// endcode gulp:sass:concat


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
			src: './src/sass/_criticals/*.scss',
			dest: './src/markup/partials/criticals-css',
			watch: [
				'./src/sass/_criticals/*.scss'
			],
			changeExt: '.ejs',
			maps: false,
			min: true,
			notify: isNotify,
			sasslint: isLinting,
			csslint: isLinting
		});
	// endcode gulp:sass:criticals


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
				'./dist/css'
			]
		});
	// endcode gulp:sass:clean


	/**
	 * Комплексная задача компилция `.sass` файлов (внешних и инлайновых).
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
	 	let _cssSeries = [
			'sass:files',
			'sass:criticals'
	 	];
	 	if (isConcatCss) {
	 		_cssSeries.unshift('sass:concat');
	 	} else {
	 		_cssSeries.unshift('sass:folders');
	 	}
		gulp.task('sass', gulp.series(..._cssSeries));
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
				'sass'
				//'modernizr:scan'
			)
		);
	// endcode gulp:sass:rebuild





// Statics
// ===========================================

		/**
		 * Трансфер статических файлов
		 * ```git
		 * gulp statics
		 * ```
		 *
		 * @name 		statics
		 * @sourcecode 	gulp:statics:series
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('statics', './tasks/transfer', {
				src: './src/statics/**/*.*',
				dest: './dist',
				filter: transferFilterMethod,
				imagemin: isOptimize,
				watch: [
					'./src/statics/**/*.*'
				],
				notify: isNotify
			});
		// endcode gulp:statics:series

		/**
		 * Трансфер Favicons системных
		 * ```git
		 * gulp favicons:files
		 * ```
		 *
		 * @name 		favicons:files
		 * @sourcecode 	gulp:favicons:files
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('favicons:files', './tasks/transfer', {
				src: './src/favicons/*.{ico,xml,json}',
				dest: './dist',
				filter: transferFilterMethod,
				watch: [
					'./src/favicons/*.{ico,xml,json}'
				],
				notify: isNotify
			});
		// endcode gulp:favicons:files

		/**
		 * Трансфер Favicons изображений
		 * ```git
		 * gulp favicons:icons
		 * ```
		 *
		 * @name 		favicons:icons
		 * @sourcecode 	gulp:favicons:icons
		 * @tutorial 	compile-transfer
		 * @see 		{@link module:tasks/transfer}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('favicons:icons', './tasks/transfer', {
				src: './src/favicons/*.{png,svg}',
				dest: './dist/favicons',
				filter: transferFilterMethod,
				watch: [
					'./src/favicons/*.{png,svg}'
				],
				notify: isNotify
			});
		// endcode gulp:favicons:icons


		/**
		 * Комплексная переброски трансфера favicons.
		 * ```git
		 * gulp favicons
		 * ```
		 *
		 * @name 		favicons
		 * @sourcecode 	gulp:favicons:series
		 * @tutorial 	compile-favicons
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			gulp.task('favicons',
				gulp.series(
					'favicons:icons',
					'favicons:files'
				)
			);
		// endcode gulp:sass:series





// SvgSprite
// ===========================================

		/**
		 * Трансфер статических файлов
		 * ```git
		 * gulp svg:jsons
		 * ```
		 *
		 * @name 		svg:jsons
		 * @sourcecode 	gulp:svg:jsons
		 * @see 		{@link module:tasks/svgsprite}
		 * @memberof 	gulp
		 * @newscope 	gulp
		 */
			lazyRequireTask('svg:jsons', './tasks/svgsprite', {
				src: './src/svgsprite/jsons/*.json',
				dest: './dist/hidden',
				watch: [
					'./src/svgsprite/jsons/*.json'
				],
				notify: isNotify
			});
		// endcode gulp:svg:jsons





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
					'./src/sass/*.scss',
					'./src/sass/_**/*.scss',
					'!./src/sass/_libs/*.scss'
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
				filter: 'newer',
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
					'./tasks/modernizr-tests/*.js',
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
				filter: 'newer',
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
					'./src/js/*.js',
					'./src/js/_**/*.js',
					'!./src/js/_libs/*.js'
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
				filter: 'newer',
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
				filter: 'newer',
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
				filter: 'newer',
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
				'./src/markup/partials/criticals-js',
				'./src/markup/partials/criticals-css'
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
				// 'js',
				'statics',
				// 'modernizr:scan',
				'favicons',
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
