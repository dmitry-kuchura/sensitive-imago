'use strict';

/**
 * Основной файл описания системы сборки для менеджера задач - *Gulp 4*
 *
 *
 *
 * @module 		gulpfile
 * @sourcefile 	file:gulpfile
*/









// подключение nodejs модулей
// ==========================
	import fs from 'fs';
	import gulp from 'gulp';
	import pkg from './package.json';
	import autowatch from 'gulp-autowatch';
	import browserSyncModule from 'browser-sync';
	const browserSync = browserSyncModule.create();
	import yargs from 'yargs';
	const argv = yargs.argv;

// подключение внутренних модулей
// ==============================
	import _helpers from './tasks/_helpers.js';









// константы
// ==========================
	// проект
	const projectName = `wtpl`;

	// основные директории
	const dist = `./dist`;
	const docs = `./docs`;
	const tuts = `./tutorials`;
	const tasks = `./tasks`;
	const tmp = `./tmp`;
	const src = `./src`;

	// флаги
	const isLinting = !!argv.l || !!argv.lint;
	const isBsOpenOnInit = (!!argv.o || !!argv.open) ? 'external' : false;
	const isBsAutoReload = !(!!argv.n || !!argv.noreload);
	const isProduction = !!argv.p || !!argv.prod;
	const isDevelop = !isProduction;

	// объект авто-вотчей
	const watchSources = {};

	// browser-sync
	const bsUse = true;
	const bsConfig = {
		proxy: `http://${projectName}/_HTML/${dist.slice(2)}`,
		open: isBsOpenOnInit,
		port: 4000
	};

	// Описание инициализации `browser-sync`.
	const BrowserSync = (cb) => {
		if (bsUse) {
			browserSync.init(bsConfig);
		} else {
			cb();
		}
	}









// создание `tmp` директории, если не существует
// =============================================
	try {
		fs.accessSync(tmp);
	} catch(e) {
		fs.mkdirSync(tmp);
	}









/**
 * Метод "ленивой" загрузки и подключения задач из внутрених модулей.
 *
 *
 *
 * @sourcecode 	file:gulpfile:lazyRequireTask
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
		taskOptions.browserSyncReload = (bsUse && isBsAutoReload);
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

	// внутренние переменные
	// =====================
		let _ejsDest = `${dist}`;
		let _ejsDestHidden = `${dist}/hidden`;
		let _ejsAll = `${src}/markup/**/*.ejs`;
		let _ejsViews = `${src}/markup/views/*.ejs`;
		let _ejsHidden = `${src}/markup/hidden/*.ejs`;
		let _ejsCtiticalsCss = `${src}/markup/views/criticals/css`;
		let _ejsCtiticalsJs = `${src}/markup/views/criticals/js`;
		let _ejsLocals = {
			_projectName: projectName,
			_projectResponsive: true,
			_projectWezom: true
		}

	// ejs:markup
	// ==========
		lazyRequireTask('ejs:markup', `${tasks}/ejs`, {
			src: _ejsViews,
			dest: _ejsDest,
			watch: _ejsAll,
			beautify: isProduction,
			locals: _ejsLocals,
			notify: true
		});

	// ejs:hidden
	// ==========
		lazyRequireTask('ejs:hidden', `${tasks}/ejs`, {
			src: _ejsHidden,
			dest: _ejsDestHidden,
			watch: _ejsAll,
			beautify: isProduction,
			beautify: isProduction,
			changeExt: '.php',
			locals: _ejsLocals,
			notify: true
		});

	// sass:clean
	// ==========
		lazyRequireTask('ejs:clean', `${tasks}/clean`, {
			src: `${_ejsDest}/*.html`
		});

	// sass:clean
	// ==========
		lazyRequireTask('ejs:clean:hidden', `${tasks}/clean`, {
			src: _ejsDestHidden
		});

	// ejs
	// ===
		gulp.task('ejs',
			gulp.series(
				'ejs:markup',
				'ejs:hidden'
			)
		);

	// ejs:rebuild
	// ===========
		gulp.task('ejs:rebuild',
			gulp.series(
				'ejs:clean',
				'ejs:clean:hidden',
				'ejs'
			)
		);









// Компиляция стилей
// ===========================================

	// внутренние переменные
	// =====================
		let _sassDest = `${dist}/css`;
		let _sassConfig = `${src}/sass/config.scss`;
		let _sassData = `${src}/sass/data/**/*.scss`;
		let _sassDynamics = `${src}/sass/dynamics/**/*.scss`;
		let _sassCriticals = `${src}/sass/criticals/**/*.scss`;
		let _sassStatics = `${src}/sass/statics/**/*.*`;

	// sass:dynamics
	// =============
		lazyRequireTask('sass:dynamics', `${tasks}/sass`, {
			src: _sassDynamics,
			dest: _sassDest,
			maps: isDevelop,
			min: isProduction,
			watch: [
				_sassConfig,
				_sassData,
				_sassDynamics
			],
			notify: true,
			sasslint: isLinting,
			csslint: isLinting
		});

	// sass:criticals
	// ==============
		lazyRequireTask('sass:criticals', `${tasks}/sass`, {
			src: _sassCriticals,
			dest: _ejsCtiticalsCss,
			maps: false,
			min: true,
			changeExt: '.ejs',
			watch: [
				_sassConfig,
				_sassData,
				_sassCriticals
			],
			notify: true,
			sasslint: isLinting,
			csslint: isLinting
		});

	// sass:statics
	// ============
		lazyRequireTask('sass:statics', `${tasks}/transfer`, {
			src: _sassStatics,
			dest: _sassDest,
			filter: `newer`,
			imagemin: isProduction,
			watch: [
				_sassStatics
			],
			notify: true
		});

	// sass:clean
	// ==========
		lazyRequireTask('sass:clean', `${tasks}/clean`, {
			src: _sassDest
		});

	// sass:clean:criticals
	// ====================
		lazyRequireTask('sass:clean:criticals', `${tasks}/clean`, {
			src: _ejsCtiticalsCss
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
				'sass'
			)
		);









// Компиляция скриптов
// ===========================================

	// внутренние переменные
	// =====================
		let _jsDest = `${dist}/js`;
		let _jsData = `${src}/js/data/**/*.js`;
		let _jsDynamics = `${src}/js/dynamics/**/*.js`;
		let _jsCriticals = `${src}/js/criticals/**/*.js`;
		let _jsStatics = `${src}/js/statics/**/*.*`;

	// js:dynamics
	// =============
		lazyRequireTask('js:dynamics', `${tasks}/js`, {
			src: _jsDynamics,
			dest: _jsDest,
			maps: isDevelop,
			min: isProduction,
			watch: [
				_jsData,
				_jsDynamics
			],
			notify: true,
		});

	// js:dynamics
	// =============
		lazyRequireTask('js:criticals', `${tasks}/js`, {
			src: _jsCriticals,
			dest: _ejsCtiticalsJs,
			maps: false,
			min: false,
			changeExt: '.ejs',
			watch: [
				_jsData,
				_jsCriticals
			],
			notify: true,
		});

	// js:statics
	// ==========
		lazyRequireTask('js:statics', `${tasks}/transfer`, {
			src: _jsStatics,
			dest: _jsDest,
			filter: `newer`,
			watch: [
				_jsStatics
			],
			notify: true
		});

	// js:clean
	// ========
		lazyRequireTask('js:clean', `${tasks}/clean`, {
			src: _jsDest
		});

	// js:clean:criticals
	// ==================
		lazyRequireTask('js:clean:criticals', `${tasks}/clean`, {
			src: _ejsCtiticalsJs
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
				'js'
			)
		);










// Трансферы
// ===========================================

	// images
	// ============

		let _imagesSrc = `${src}/images/**/*.*`;
		let _imagesDest = `${dist}/images`;

		// transfer
		lazyRequireTask('images', `${tasks}/transfer`, {
			src: _imagesSrc,
			dest: _imagesDest,
			filter: `newer`,
			imagemin: isProduction,
			watch: [
				_imagesSrc
			],
			notify: true
		});

		// clean
		lazyRequireTask('images:clean', `${tasks}/clean`, {
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

		let _faviconsSrc = `${src}/favicons/**/*.*`;

		// transfer
		lazyRequireTask('favicons', `${tasks}/transfer`, {
			src: _faviconsSrc,
			dest: _ejsDest,
			filter: `newer`,
			imagemin: false,
			watch: [
				_faviconsSrc
			],
			notify: true
		});

		// clean
		lazyRequireTask('favicons:clean', `${tasks}/clean`, {
			src: [
				`${_ejsDest}/favicons`,
				`${_ejsDest}/favicon.ico`,
				`${_ejsDest}/manifest.json`,
				`${_ejsDest}/browserconfig.xml`
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
		lazyRequireTask('upload', `${tasks}/upload`, {
			src: `${dist}/**/*.*`,
			notify: true,
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
		lazyRequireTask('docs:sass:doc', `${tasks}/sassdoc`, {
			theme: `${tasks}/sassdoc-theme`,
			dest: `${docs}/sass`,
			groups: {
				'undefined': `Без группы`
			},
			src: [
				_sassData,
				_sassDynamics,
				_sassCriticals
			]
		});

		// компиляция главной страницы и туториалов для документации scss файлов
		lazyRequireTask('docs:sass:materials', `${tasks}/sassdoc-materials`, {
			systemName: `SASSDoc`,
			tutorials: `${tuts}/sass`,
			dest: `${docs}/sass`,
			blank: `${tasks}/sassdoc-theme/blank.js`,
			index: `${tuts}/sass-index.md`
		});

		// трансфер статических файлов
		lazyRequireTask('docs:sass:assets', `${tasks}/transfer`, {
			src: `${tuts}/sass/assets/**/*.*`,
			dest: `${docs}/sass/assets`,
			filter: 'newer',
			notify: true,
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
		lazyRequireTask('docs:clean:gulp', `${tasks}/clean`, {
			src: `${docs}/gulp`
		});

		// генерация документации gulp сборки
		lazyRequireTask('docs:jsdoc:gulp', `${tasks}/jsdoc`, {
			systemName: `Gulp docs`,
			tutorials: `${tuts}/gulp`,
			dest: `${docs}/gulp`,
			src: [
				`${tuts}/gulp-index.md`,
				`${tasks}/*.js`,
				`${tasks}/jsdoc-theme/plugins/*.js`,
				`./gulpfile.babel.js`
			]
		});

		// трансфер статических файлов
		lazyRequireTask('docs:jsdoc:gulp:assets', `${tasks}/transfer`, {
			src: `${tuts}/gulp/assets/**/*.*`,
			dest: `${docs}/gulp/assets`,
			filter: 'newer',
			notify: true,
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
		lazyRequireTask('docs:clean:js', `${tasks}/clean`, {
			src: `${docs}/js`
		});

		// генерация документации скриптов верстки
		lazyRequireTask('docs:jsdoc:js', `${tasks}/jsdoc`, {
			systemName: `JSDoc`,
			tutorials: `${tuts}/js`,
			dest: `${docs}/js`,
			src: [
				`${tuts}/js-index.md`,
				`${src}/js/**/*.js`,
				`!${src}/js/**/{vendor}/**/*.js`
			]
		});

		// трансфер статических файлов
		lazyRequireTask('docs:jsdoc:js:assets', `${tasks}/transfer`, {
			src: `${tuts}/js/assets/**/*.*`,
			dest: `${docs}/js/assets`,
			filter: 'newer',
			notify: true,
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
		lazyRequireTask('docs:clean:html', `${tasks}/clean`, {
			src: `${docs}/html`
		});

		// очистка темповской директории документации с html страниц
		lazyRequireTask('docs:clean:htmlTmp', `${tasks}/clean`, {
			src: `${tmp}/htmldoc`
		});

		// генерация документации с html страниц
		lazyRequireTask('docs:html:doc', `${tasks}/htmldoc`, {
			systemName: `Project docs`,
			tutorials: `${tuts}/html`,
			tmpFiles: `${tmp}/htmldoc`,
			tmpMD: `${tmp}/htmldoc/__todo-list.md`,
			dest: `${docs}/html`,
			src: [
				`${tuts}/html-index.md`,
				`${dist}/*.html`
			]
		});

		// трансфер статических файлов
		lazyRequireTask('docs:html:assets', `${tasks}/transfer`, {
			src: `${tuts}/html/assets/**/*.*`,
			dest: `${docs}/html/assets`,
			filter: 'newer',
			notify: true,
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
		lazyRequireTask('docs:clean', `${tasks}/clean`, {
			src: `${docs}`
		});

		// трансфер статических файлов для оформления документаций
		lazyRequireTask('docs:assets', `${tasks}/transfer`, {
			src: `${tasks}/_docs-assets/**/*.*`,
			dest: `${docs}/_assets`,
			filter: 'newer',
			notify: true,
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
		lazyRequireTask('clean', `${tasks}/clean`, {
			src: `${dist}`
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
				'rebuild',
				'docs'
			)
		);
