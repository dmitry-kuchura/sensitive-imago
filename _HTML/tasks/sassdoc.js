'use strict';

/**
 * @module		tasks/sassdoc
 * @sourcefile	file:tasks:sassdoc
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import sassdoc from 'sassdoc';





/**
 * Документация `scss` файлов, на основе комментариев
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:sassdoc
 *
 * @tutorial	docs-sass
 *
 * @requires	{@link https://github.com/gulpjs/gulp/tree/4.0|gulp#4}
 * @requires	{@link https://www.npmjs.com/package/sassdoc}
 *
 * @param		{Object}	options - передаваемые параметры
 * @param		{string}	options.systemName - тайтл документации
 * @param		{string}	options.dest - путь к директории итоговой документации
 * @param		{string|Array}	options.src - путь к документируемым файлам
 *
 * @return		{Function}
*/
module.exports = function(options) {
	return function(cb) {
		let stream = sassdoc({
			dest: options.dest,
			verbose: true,
			theme: options.theme,
			display: {
				access: ['public', 'private'],
				alias: true,
				watermark: true
			},
			groups: options.groups
		});

		gulp.src(options.src)
			.pipe(stream);

		return stream.promise.then(function () {
			console.log('End of documentation process');
		});
	};
};
