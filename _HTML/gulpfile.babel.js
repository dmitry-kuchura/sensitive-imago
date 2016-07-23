'use strict';

/**
 * Основной файл описания системы сборки для менеджера задач - *Gulp 4*
 *
 *
 *
 * @module 		gulpfile
 * @version 	0.7.5
 * @author 		Олег Дутченко <dutchenko.o.wezom@gmail.com>
 * @sourcefile 	file:gulpfile
*/





// подключение nodejs модулей
// ==========================
	import fs from 'fs';
	import gulp from 'gulp';
	import autowatch from 'gulp-autowatch';
	import yargs from 'yargs';


// константы
// ==========================
	// проект
	const projectName = `xtpl`;

	// основные директории
	const dist = `./dist`;
	const docs = `./docs`;
	const tuts = `./tutorials`;
	const tasks = `./tasks`;
	const tmp = `./tmp`;
	const src = `./src`;

	// флаги
	const isProduction = !!(yargs.argv.prod);
	const isSourcemaps = !isProduction;
	const isMinify = isProduction;

	// объект авто-вотчей
	const watchSources = {};


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
		if (taskOptions.watch) {
			watchSources[taskName] = taskOptions.watch;
		}
		gulp.task(taskName, function(cb) {
			let task = require(taskFile).call(this, taskOptions);
			return task(cb);
		});
	}










// Компиляция стилей
// ===========================================

	// внутренние переменные
	// =====================
		let _sassDest = `${dist}/css`;
		let _sassData = `${src}/sass/_data/**/*.scss`;
		let _sassDynamics = `${src}/sass/dynamics/**/*.scss`;
		let _sassCriticals = `${src}/sass/criticals/**/*.scss`;
		let _sassStatics = `${src}/sass/statics/**/*.*`;

	// sass:dynamics
	// ============
		lazyRequireTask('sass:dynamics', `${tasks}/sass`, {
			src: _sassDynamics,
			dest: _sassDest,
			maps: isSourcemaps,
			min: isMinify,
			csslint: true,
			cssLintConfig: {
				'ids': 1
			},
			watch: [
				_sassData,
				_sassDynamics
			],
			notify: true
		});

	// sass:criticals
	// ============
		lazyRequireTask('sass:criticals', `${tasks}/sass`, {
			src: _sassCriticals,
			dest: _sassDest,
			maps: false,
			min: true,
			watch: [
				_sassData,
				_sassCriticals
			],
			notify: true
		});

	// sass:statics
	// ============
		lazyRequireTask('sass:statics', `${tasks}/transfer`, {
			src: _sassStatics,
			dest: _sassDest,
			filter: `combine`,
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

	// sass
	// ====
		gulp.task('sass',
			gulp.series(
				'sass:dynamics'//,
				//'sass:criticals',
				//'sass:statics'
			)
		);

	// sass:build
	// ==========
		gulp.task('sass:build',
			gulp.series(
				'sass:clean',
				'sass'
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
			dest: `${docs}/sassdoc`,
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
			dest: `${docs}/sassdoc`,
			blank: `${tasks}/sassdoc-theme/blank.js`,
			index: `${tuts}/sass-index.md`
		});

		// комплексная задача создания документации scss файлов
		gulp.task('docs:sass',
			gulp.series(
				'docs:sass:doc',
				'docs:sass:materials'
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

		// комплексная задача создания документации gulp сборки
		gulp.task('docs:gulp',
			gulp.series(
				'docs:clean:gulp',
				'docs:jsdoc:gulp'
			)
		);



	// JS client
	// =========
		// очистка директории документации скриптов верстки
		lazyRequireTask('docs:clean:js', `${tasks}/clean`, {
			src: `${docs}/jsdoc`
		});

		// генерация документации скриптов верстки
		lazyRequireTask('docs:jsdoc:js', `${tasks}/jsdoc`, {
			systemName: `JSDoc`,
			tutorials: `${tuts}/js`,
			dest: `${docs}/jsdoc`,
			src: [
				`${tuts}/js-index.md`,
				`${src}/js/**/*.js`,
				`!${src}/js/**/{vendor}/**/*.js`
			]
		});

		// комплексная задача создания документации скриптов верстки
		gulp.task('docs:js',
			gulp.series(
				'docs:clean:js',
				'docs:jsdoc:js'
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

		// комплексная задача создания документации с html страниц
		gulp.task('docs:html',
			gulp.series(
				'docs:clean:html',
				'docs:clean:htmlTmp',
				'docs:html:doc'
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
			'docs:jsdoc:js',
			'docs:html:doc',
			'docs:sass'
		));










// Задачи сборки
// ===========================================

	// demo файлы
		lazyRequireTask('demo:clean', `${tasks}/clean`, {
			src: `${dist}`
		});

		lazyRequireTask('demo:files', `${tasks}/transfer`, {
			src: `${tasks}/_docs-assets/demo/**/*.*`,
			dest: `${dist}`,
			filter: false,
			notify: true
		});

	// rebuild
	// =======
		gulp.task('rebuild',
			gulp.series(
				(cb) => {
					console.log('\n\tdemo build task\n');
					cb();
				},
				'demo:clean',
				'demo:files'
			)
		);

	// watch
	// =====
		/*console.log(watchSources);*/
		gulp.task('watch', () => {
			autowatch(gulp, watchSources);
		});

	// default
	// =======
		gulp.task('default',
			gulp.series(
				(cb) => {
					console.log('\n\tdemo default task\n');
					cb();
				}
			)
		);

	// build
	// =======
		gulp.task('build',
			gulp.series(
				'rebuild',
				'default'
			)
		);

	// start
	// =======
		gulp.task('start',
			gulp.series(
				'rebuild',
				'docs'
			)
		);
