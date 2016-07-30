'use strict';

/**
 * Основной файл описания системы сборки для менеджера задач - *Gulp 4*
 *
 * @namespace 	gulp
 * @sourcefile 	file:gulpfile
*/






/**
 * Подключение nodejs модулей
 *
 * @name       	node_modules
 * @sourcecode 	gulp:modules
 * @memberof 	gulp
 * @newscope
 */
	// подключение nodejs модулей
	import fs from 'fs';
	import gulp from 'gulp';
	import pkg from './package.json';
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
 * @name       	constants
 * @sourcecode 	gulp:constants
 * @memberof 	gulp
 * @newscope
 */
 	// имя проекта
	const projectName = `wtpl`;

	// объект авто-вотчей
	const watchSources = {};

	// включение линтинга -l --lint
	const isLinting = !!argv.l || !!argv.lint;
	// версия production сборки -p --prod
	const isProduction = !!argv.p || !!argv.prod;
	// версия dev сборки
	const isDevelop = !isProduction;
	// включение нотифаеров
	const isNotify = true;
	// проект адаптивный
	const isProjectResponsive = true;
	// проект студии wezom
	const isProjectWezom = true;

	// использовать browser-sync
	const isBsUse = true;
	// авто открытие ссылки полсе инита browser-sync -o --open
	const isBsOpenOnInit = (!!argv.o || !!argv.open) ? 'external' : false;
	// отключение авторелоада browser-sync при изменениях -n --noreload
	const isBsAutoReload = !(!!argv.n || !!argv.noreload);
	// конфигурация browser-sync
	const bsConfig = {
		proxy: `http://${projectName}/_HTML/dist/`,
		open: isBsOpenOnInit,
		port: 4000
	};
// endcode gulp:constants









/**
 * Инициализация browser-sync
 *
 * @sourcecode 	file:gulpfile:BrowserSync
 * @memberof 	gulp
 * @param 		{Callbck} 	cb
	 * @inner
 */
	const BrowserSync = (cb) => {
		if (isBsUse) {
			browserSync.init(bsConfig);
		} else {
			cb();
		}
	}









// создание `tmp` директории, если не существует
// =============================================
	try {
		fs.accessSync('./tmp');
	} catch(e) {
		fs.mkdirSync('./tmp');
	}









/**
 * Метод "ленивой" загрузки и подключения задач из внутрених модулей.
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
 * @param		{Function}		[onBefore] - функция которая должна выполниться перед задачей
 *
*/
	function lazyRequireTask(taskName, taskFile, taskOptions={}, onBefore) {
		taskOptions.taskName = taskName;
		taskOptions.isProduction = isProduction;
		taskOptions.isDevelop = isDevelop;
		taskOptions.package = pkg;
		taskOptions.browserSyncReload = (isBsUse && isBsAutoReload);
		taskOptions.browserSync = browserSync;
		if (taskOptions.watch) {
			watchSources[taskName] = taskOptions.watch;
		}
		gulp.task(taskName, function(cb) {
			let task = require(taskFile).call(this, taskOptions);
			return task(cb);
		});
	}









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
		}
	// endcode gulp:ejslocals



	/**
	 * Задача компиляции основных файлов разметки.
	 * ```git
	 * gulp ejs:markup
	 * ```
	 *
	 * @name 		ejs:markup
	 * @sourcecode 	gulp:ejs:markup
	 * @see 		{@link module:tasks/ejs}
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
	 * @sourcecode 	gulp:ejs:hidden
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
	// endcode gulp:ejs:hidden



	/**
	 * Очистка всех скомпилорованных `.html` файлов и доректории `hidden`
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
	 * Комплексная задача пересоборки `ejs`.
	 * Сначала очищаем итоговые файлы и компилируем заново.
	 * ```git
	 * gulp ejs:rebuild
	 * ```
	 *
	 * @name 		ejs:rebuild
	 * @sourcecode 	gulp:ejs:rebuild
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

	// внутренние переменные
	// =====================
		let _jsDest = `./dist/js`;
		let _jsDestVendor = `${_jsDest}/vendor`;
		let _jsAddons = `./src/js/addons`;
		let _jsDynamics = `./src/js/dynamics/**/*.js`;
		let _jsCriticals = `./src/js/criticals/**/*.js`;
		let _jsStatics = `./src/js/statics/**/*.*`;
		let _jsAddonsWatch = [
			`${_jsAddons}/libs/*.js`
		];
		let _jsDocs = [
			`${_jsAddons}/libs/*.js`,
			`${_jsAddons}/libs/modernizr-tests/**/*.js`
		];
		let _jsModernizr = [
			'./dist/js/*.js',
			'./dist/css/*.css',
			'./src/markup/views/criticals/css/*.ejs',
			'./src/markup/views/criticals/js/*.ej'
		];

	// js:dynamics
	// ===========
		lazyRequireTask('js:dynamics', './tasks/js', {
			src: _jsDynamics,
			dest: _jsDest,
			maps: isDevelop,
			min: isProduction,
			include: true,
			watch: [
				_jsDynamics
			].concat(_jsAddonsWatch),
			notify: isNotify,
		});

	// js:criticals
	// ============
		lazyRequireTask('js:criticals', './tasks/js', {
			src: _jsCriticals,
			dest: './src/markup/views/criticals/js',
			maps: false,
			min: true,
			include: true,
			changeExt: '.ejs',
			watch: [
				_jsCriticals
			].concat(_jsAddonsWatch),
			notify: isNotify,
		});

	// js:statics
	// ==========
		lazyRequireTask('js:statics', './tasks/transfer', {
			src: _jsStatics,
			dest: _jsDest,
			filter: 'newer',
			watch: [
				_jsStatics
			],
			notify: isNotify
		});

	// modernizr
	// =========
		lazyRequireTask('modernizr', './tasks/js', {
			src: _jsModernizr,
			dest: _jsDestVendor,
			maps: false,
			min: isProduction,
			modernizr: true,
			modernizrConfig: {
				excludeTests: [
					'checked'
				]
			},
			filter: false,
			notify: isNotify
		});

	// modernizr:add
	// ==========
		lazyRequireTask('modernizr:add', './tasks/transfer', {
			src: `${_jsAddons}/libs/modernizr-tests/**/*.js`,
			dest: `./node_modules/modernizr/feature-detects`,
			filter: 'newer',
			notify: isNotify
		});

	// js:clean
	// ========
		lazyRequireTask('js:clean', './tasks/clean', {
			src: _jsDest
		});

	// js:clean:criticals
	// ==================
		lazyRequireTask('js:clean:criticals', './tasks/clean', {
			src: './src/markup/views/criticals/js'
		});

	// js
	// ==
		gulp.task('js',
			gulp.series(
				'js:dynamics',
				'js:criticals',
				'js:statics'
			)
		);

	// js:rebuild
	// ==========
		gulp.task('js:rebuild',
			gulp.series(
				'js:clean',
				'js:clean:criticals',
				'js',
				'modernizr'
			)
		);









// Компиляция стилей
// ===========================================

	// внутренние переменные
	// =====================
		let _sassDest = `./dist/css`;
		let _sassConfig = `./src/sass/config.scss`;
		let _sassAddons = `./src/sass/addons/**/*.scss`;
		let _sassDynamics = `./src/sass/dynamics/**/*.scss`;
		let _sassCriticals = `./src/sass/criticals/**/*.scss`;
		let _sassStatics = `./src/sass/statics/**/*.*`;

	// sass:dynamics
	// =============
		lazyRequireTask('sass:dynamics', './tasks/sass', {
			src: _sassDynamics,
			dest: _sassDest,
			maps: isDevelop,
			min: isProduction,
			watch: [
				_sassConfig,
				_sassAddons,
				_sassDynamics
			],
			notify: isNotify,
			sasslint: isLinting,
			csslint: isLinting
		});

	// sass:criticals
	// ==============
		lazyRequireTask('sass:criticals', './tasks/sass', {
			src: _sassCriticals,
			dest: './src/markup/views/criticals/css',
			maps: false,
			min: true,
			changeExt: '.ejs',
			watch: [
				_sassConfig,
				_sassAddons,
				_sassCriticals
			],
			notify: isNotify,
			sasslint: isLinting,
			csslint: isLinting
		});

	// sass:statics
	// ============
		lazyRequireTask('sass:statics', './tasks/transfer', {
			src: _sassStatics,
			dest: _sassDest,
			filter: 'newer',
			imagemin: isProduction,
			watch: [
				_sassStatics
			],
			notify: isNotify
		});

	// sass:clean
	// ==========
		lazyRequireTask('sass:clean', './tasks/clean', {
			src: _sassDest
		});

	// sass:clean:criticals
	// ====================
		lazyRequireTask('sass:clean:criticals', './tasks/clean', {
			src: './src/markup/views/criticals/css'
		});

	// sass
	// ====
		gulp.task('sass',
			gulp.series(
				'sass:dynamics',
				'sass:criticals',
				'sass:statics'
			)
		);

	// sass:rebuild
	// ============
		gulp.task('sass:rebuild',
			gulp.series(
				'sass:clean',
				'sass:clean:criticals',
				'sass',
				'modernizr'
			)
		);










// Трансферы
// ===========================================

	// images
	// ============

		let _imagesSrc = `./src/images/**/*.*`;
		let _imagesDest = `./dist/images`;

		// transfer
		lazyRequireTask('images', './tasks/transfer', {
			src: _imagesSrc,
			dest: _imagesDest,
			filter: 'newer',
			imagemin: isProduction,
			watch: [
				_imagesSrc
			],
			notify: isNotify
		});

		// clean
		lazyRequireTask('images:clean', './tasks/clean', {
			src: _imagesDest
		});

		// rebuild
		gulp.task('images:rebuild',
			gulp.series(
				'images:clean',
				'images'
			)
		);



	// favicons
	// ============

		let _faviconsSrc = `./src/favicons/**/*.*`;

		// transfer
		lazyRequireTask('favicons', './tasks/transfer', {
			src: _faviconsSrc,
			dest: './dist',
			filter: 'newer',
			imagemin: false,
			watch: [
				_faviconsSrc
			],
			notify: isNotify
		});

		// clean
		lazyRequireTask('favicons:clean', './tasks/clean', {
			src: [
				'./dist/favicons',
				'./dist/favicon.ico',
				'./dist/manifest.json',
				'./dist/browserconfig.xml'
			]
		});

		// rebuild
		gulp.task('favicons:rebuild',
			gulp.series(
				'favicons:clean',
				'favicons'
			)
		);










// Загрузка файлов по ftp
// ===========================================

	// inkubator
	// =========
		lazyRequireTask('upload', './tasks/upload', {
			src: `./dist/**/*.*`,
			notify: isNotify,
			connect: {
				host: `91.206.30.13`,
				user: `inkubator`,
				pass: `9H9w4Z4a`,
				parallel: 10,
				remotePath: `www/inkubator.ks.ua/html/${projectName}/`
			}
		});










// Задачи документации
// ===========================================

	// SASS
	// ====
		// генерация документации scss файлов
		lazyRequireTask('docs:sass:doc', './tasks/sassdoc', {
			theme: `./tasks/sassdoc-theme`,
			dest: `./docs/sass`,
			groups: {
				'undefined': `Без группы`
			},
			src: [
				_sassAddons,
				_sassDynamics,
				_sassCriticals
			]
		});

		// компиляция главной страницы и туториалов для документации scss файлов
		lazyRequireTask('docs:sass:materials', './tasks/sassdoc-materials', {
			systemName: `SASSDoc`,
			tutorials: `./tutorials/sass`,
			dest: `./docs/sass`,
			blank: `./tasks/sassdoc-theme/blank.js`,
			index: `./tutorials/sass-index.md`
		});

		// трансфер статических файлов
		lazyRequireTask('docs:sass:assets', './tasks/transfer', {
			src: `./tutorials/sass/assets/**/*.*`,
			dest: `./docs/sass/assets`,
			filter: 'newer',
			notify: isNotify,
			notifyIsShort: true
		});

		// комплексная задача создания документации scss файлов
		gulp.task('docs:sass',
			gulp.series(
				'docs:sass:doc',
				'docs:sass:materials',
				'docs:sass:assets'
			)
		);



	// GULP
	// ====
		// очистка директории документации gulp сборки
		lazyRequireTask('docs:clean:gulp', './tasks/clean', {
			src: `./docs/gulp`
		});

		// генерация документации gulp сборки
		lazyRequireTask('docs:jsdoc:gulp', './tasks/jsdoc', {
			systemName: `Gulp docs`,
			tutorials: `./tutorials/gulp`,
			dest: `./docs/gulp`,
			src: [
				`./tutorials/gulp-index.md`,
				`./tasks/*.js`,
				`./tasks/modernizr-tests/**/*.js`,
				`./tasks/jsdoc-theme/plugins/*.js`,
				`./gulpfile.babel.js`
			]
		});

		// трансфер статических файлов
		lazyRequireTask('docs:jsdoc:gulp:assets', './tasks/transfer', {
			src: `./tutorials/gulp/assets/**/*.*`,
			dest: `./docs/gulp/assets`,
			filter: 'newer',
			notify: isNotify,
			notifyIsShort: true
		});

		// комплексная задача создания документации gulp сборки
		gulp.task('docs:gulp',
			gulp.series(
				'docs:clean:gulp',
				'docs:jsdoc:gulp',
				'docs:jsdoc:gulp:assets'
			)
		);



	// JS client
	// =========
		// очистка директории документации скриптов верстки
		lazyRequireTask('docs:clean:js', './tasks/clean', {
			src: `./docs/js`
		});

		// генерация документации скриптов верстки
		lazyRequireTask('docs:jsdoc:js', './tasks/jsdoc', {
			systemName: `JSDoc`,
			tutorials: `./tutorials/js`,
			dest: `./docs/js`,
			src: [
				`./tutorials/js-index.md`
			].concat(_jsDocs)
		});

		// трансфер статических файлов
		lazyRequireTask('docs:jsdoc:js:assets', './tasks/transfer', {
			src: `./tutorials/js/assets/**/*.*`,
			dest: `./docs/js/assets`,
			filter: 'newer',
			notify: isNotify,
			notifyIsShort: true
		});

		// комплексная задача создания документации скриптов верстки
		gulp.task('docs:js',
			gulp.series(
				'docs:clean:js',
				'docs:jsdoc:js',
				'docs:jsdoc:js:assets'
			)
		);



	// HTML todo
	// =========
		// очистка директории документации с html страниц
		lazyRequireTask('docs:clean:html', './tasks/clean', {
			src: `./docs/html`
		});

		// очистка темповской директории документации с html страниц
		lazyRequireTask('docs:clean:htmlTmp', './tasks/clean', {
			src: './tmp/htmldoc'
		});

		// генерация документации с html страниц
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

		// трансфер статических файлов
		lazyRequireTask('docs:html:assets', './tasks/transfer', {
			src: `./tutorials/html/assets/**/*.*`,
			dest: `./docs/html/assets`,
			filter: 'newer',
			notify: isNotify,
			notifyIsShort: true
		});

		// комплексная задача создания документации с html страниц
		gulp.task('docs:html',
			gulp.series(
				'docs:clean:html',
				'docs:clean:htmlTmp',
				'docs:html:doc',
				'docs:html:assets'
			)
		);



	// ALL
	// ===
		// очистка очистка корневой директории
		lazyRequireTask('docs:clean', './tasks/clean', {
			src: `./docs`
		});

		// трансфер статических файлов для оформления документаций
		lazyRequireTask('docs:assets', './tasks/transfer', {
			src: `./tasks/_docs-assets/**/*.*`,
			dest: `./docs/_assets`,
			filter: 'newer',
			notify: isNotify,
			notifyIsShort: true
		});

		// генерация документаций по всем разделам
		gulp.task('docs', gulp.series(
			'docs:clean',
			'docs:clean:htmlTmp',
			'docs:assets',
			'docs:jsdoc:gulp',
			'docs:jsdoc:gulp:assets',
			'docs:jsdoc:js',
			'docs:jsdoc:js:assets',
			'docs:html:doc',
			'docs:html:assets',
			'docs:sass'
		));










// Задачи сборки
// ===========================================

	// demo файлы
		lazyRequireTask('clean', './tasks/clean', {
			src: `./dist`
		});

	// rebuild
	// =======
		gulp.task('rebuild',
			gulp.series(
				'clean',
				'sass:clean:criticals',
				'js:clean:criticals',
				'sass',
				'js',
				'images',
				'favicons',
				'modernizr',
				'ejs'
			)
		);

	// watch
	// =====
		/*console.log(watchSources);*/
		gulp.task('watch', () => {
			_helpers.logMsg('Start watching');
			autowatch(gulp, watchSources);
		});

	// default
	// =======
		gulp.task('default',
			gulp.parallel('watch', BrowserSync)
		);

	// build
	// =====
		gulp.task('build',
			gulp.series(
				'rebuild',
				'default'
			)
		);

	// start
	// =====
		gulp.task('start',
			gulp.series(
				'modernizr:add',
				'rebuild',
				'docs'
			)
		);
