'use strict';

/**
 * @module		tasks/jsdoc
 * @sourcefile	file:tasks:jsdoc
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import jsdoc3 from 'gulp-jsdoc3';

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';

// подключение системной конфигурации jsdoc
// ========================================
	import jsdocConfig from './jsdoc-theme/jsdoc.conf.json';





/**
 * Документация `js` файлов, на основе комментариев `jsdoc`
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:jsdoc -c
 *
 * @tutorial	docs-js
 * @tutorial	docs-gulp
 * @tutorial	jsdoc
 *
 * @see			./tasks/jsdoc-theme/jsdoc.conf.json
 *
 * @requires	{@link https://github.com/gulpjs/gulp/tree/4.0|gulp#4}
 * @requires	{@link https://www.npmjs.com/package/gulp-jsdoc3}
 * @requires	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.systemName - тайтл документации
 * @param		{string}		options.tutorials - путь к директории туториалов для раздела документации
 * @param		{string}		options.dest - путь к директории итоговой документации
 * @param		{string|Array}	options.src - путь к документируемым файлам
 *
 * @return		{Function}
*/
module.exports = function(options) {

	// возвращаем задачу
	return function(cb) {

		// расширяем системный конфиг jsdoc на основе пользовательских параметров
		_modulesParams.jsdoc3Config(options, jsdocConfig);

		// генерация документации
		gulp.src(options.src, {read: false})
			.pipe(jsdoc3(jsdocConfig, cb));
	};
};
