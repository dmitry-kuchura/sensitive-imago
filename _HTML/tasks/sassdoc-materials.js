'use strict';

/**
 * @module		tasks/sassdoc-materials
 * @sourcefile	file:tasks:sassdoc-materials
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import Vinyl from 'vinyl';
	import through2 from 'through2';
	const throughObj = through2.obj;
	import jsdoc3 from 'gulp-jsdoc3';


// подключение внутренних модулей
// ==============================
	import _helpers from './_helpers.js';
	import _modulesParams from './_modules-params.js';


// подключение системной конфигурации jsdoc
// ========================================
	import jsdocConfig from './jsdoc-theme/jsdoc.conf.json';





/**
 * Компиляция главной страницы и туториалов для документации `scss` файлов
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:sassdoc-materials
 *
 * @tutorial	docs-sass
 *
 * @see			module:tasks/jsdoc
 * @see			./tasks/jsdoc-theme/jsdoc.conf.json
 *
 * @requires	{@link https://github.com/gulpjs/gulp/tree/4.0|gulp#4}
 * @requires	{@link https://www.npmjs.com/package/gulp-jsdoc3}
 * @requires	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.systemName - тайтл документации
 * @param		{string}		options.dest - путь к директории итоговой документации
 * @param		{string}		options.tutorials - путь к директории туториалов для раздела документации
 * @param		{string}		options.blank - путь к файлу пустышке, необходим для подхвата
 * @param		{string}		options.index - вступительный, файл для документации, который должен быть создан по разметке markdown
 *
 * @return		{Function}
*/
module.exports = function(options) {


	// возвращаем задачу
	return function(cb) {

		// расширяем системный конфиг jsdoc на основе пользовательских параметров
		_modulesParams.jsdoc3Config(options, jsdocConfig);

		// составляем источник для jsdoc
		let src = [
			options.index,
			options.blank
		];

		// указываем флаг sassdoc
		jsdocConfig.sassdoc = true;

		// генерация документации
		gulp.src(src, {read: false})
			.pipe(jsdoc3(jsdocConfig, cb));
	};
};
