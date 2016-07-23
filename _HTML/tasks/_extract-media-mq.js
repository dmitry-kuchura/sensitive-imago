'use strict';

/**
 * > Модуль в отложен ящик до лучших времен.
 * @module 		tasks/_extract-media-mq
 * @sourcefile 	file:tasks:_extract-media-mq
*/





// подключение nodejs модулей
// ==========================
	import rework from 'rework';
	import splitMedia from 'rework-split-media';
	import moveMedia from 'rework-move-media';
	import stringify from 'css-stringify';
	import cleanUpString from 'clean-up-string';
	import through2 from 'through2';
	const throughObj = through2.obj;
	import path from 'path';
	const dirname = path.dirname;
	const pathjoin = path.join;





/**
 * Модуль екстракта указанных медиа-запросов из оригинального css файла в отдельные файлы.
 * Пример конфига
 * ```javascript
 * extractMqFrom: {
 * 	'style.css': {
 * 		print: 'print',
 * 		sm: 'only screen and (min-width: 481px)',
 * 		md: 'only screen and (min-width: 769px)',
 * 		lg: 'only screen and (min-width: 1025px)',
 * 		xl: 'only screen and (min-width: 1281px)'
 * 	}
 * }
 * ```
 * Пример pipe
 * ```javascript
 * .pipe($.if(
 * 	(options.isProduction && !!options.extractMqFrom),
 * 	extractMq(options.extractMqFrom)
 * ))
 * ```
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:_extract-media-mq
 *
 * @tutorial 	compile-sass
 *
 * @requires   	{@link https://www.npmjs.com/package/rework}
 * @requires   	{@link https://www.npmjs.com/package/rework-split-media}
 * @requires   	{@link https://www.npmjs.com/package/rework-move-media}
 * @requires   	{@link https://www.npmjs.com/package/css-stringify}
 * @requires   	{@link https://www.npmjs.com/package/clean-up-string}
 * @requires   	{@link https://www.npmjs.com/package/through2}
 * @requires   	{@link https://www.npmjs.com/package/path}
 *
 * @param		{Object}		extractMqFrom - список файлов из которых нужно делать экстракт
 * @param		{Object}		extractMqFrom[].fileRelativeKey - набор медиа-запросов для экстракта из файла
 * @param		{string}		extractMqFrom[].fileRelativeKey.extractMqName - значения медиа-запроса
 *
 * @return 		{Stream}
*/
module.exports = function(extractMqFrom) {
	return throughObj(function(file, enc, callback) {
		let stream = this;
		let fileKey = file.relative;
		if (extractMqFrom.hasOwnProperty(fileKey)) {
			let fileName = file.stem;
			let extractData = extractMqFrom[fileKey];
			let cssContent = file.contents.toString();
			let reworkData = rework(cssContent).use(moveMedia());
			let stylesheets = splitMedia(reworkData);
			let stylesheetKeys = Object.keys(stylesheets);
			let filteredMq = [];
			let originalCSS = [];
			stylesheetKeys.forEach(function(key) {
				let notExtracted = true;
				for (let mqKey in extractData) {
					if (key === extractData[mqKey]) {
						let contents = stringify(stylesheets[key]);
						filteredMq.push([mqKey, contents]);
						notExtracted = false;
						break;
					}
				}
				if (notExtracted) {
					let contents = stringify(stylesheets[key]);
					if (key.length) {
						originalCSS.push(`@media ${key} {\n${contents}\n}`);
					} else {
						originalCSS.push(contents);
					}
				}
			});

			filteredMq.forEach(function(key) {
				let newFile = file.clone({
					contents: false
				});
				let name = cleanUpString(`${fileName}-${key[0]}`);
				let filepath = pathjoin(dirname(file.path), `${name}.css`);
				newFile.contents = new Buffer(key[1]);
				newFile.path = filepath;
				stream.push(newFile);
			});

			file.contents = new Buffer(originalCSS.join('\n'));

			callback(null, file);
		} else {
			callback(null, file);
		}
	});
};
