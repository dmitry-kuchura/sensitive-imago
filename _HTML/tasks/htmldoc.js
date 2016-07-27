'use strict';

/**
 * @module		tasks/htmldoc
 * @sourcefile	file:tasks:htmldoc
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


// праватные значения и методы
// ===========================

	// Регулярное выражение для поиска комментариев с тегом `@htmldoc`
	let regexComment = /\<\!--(\s|\t)*\@htmldoc(\s|\t|\n|\r)*([^(\<\!--)]\S|\s|\-\S|\<(\/)?\w+|;|&|\'|\'>|\"|\}|\{)*--\>/gi;

	// Регулярное выражение для поиска начала коментария с тегом `@htmldoc`
	let regexTodoStart = /^\<\!--(\s|\t)*\@htmldoc(\s|\t)*/gi;

	// Регулярное выражение для поиска концовки `html` коментария
	let regexTodoEnd = /(\r|\n|\s|\t)*--\>$/gi;

	// Регулярное выражение для поиска блоков с тегом `@todo`
	let regexTodo = /\@todo(\s|\t)+(.)+/gi;

	// Заготовка начала `jsdoc` комментария
	let jsCommentStart = '/**';

	// Заготовка тега `@htmldoc`
	let jsCommentHtmlDocs = '@htmldoc';

	// Заготовка концовки `jsdoc` комментария
	let jsCommentEnd = '*/';

	// Замена точек на нижний пробел
	let removeDots = (str) => { return str.replace(/\./g, '_'); };

	// Заготовка jsdoc тега `@namespace`
	let jsCommentNS = (ns) => { return `@namespace ${removeDots(ns)}`; };

	// Заготовка jsdoc тега `@memberof`
	let jsCommentMember = (ns) => { return `@memberof ${removeDots(ns)}`; };

	// Заготовка jsdoc тега `@lineno`
	let jsCommentLine = (num) => { return `@lineno ${num}`; };

	// Заготовка создания функции "пустышки" для корректной связки комментария и метода при документации `jsdoc`
	let jsCommentPoint = (num) => { return `function Point_${num}() {};\n`; };





/**
 * Документация `html` файлов, на основе комментариев и `gulp-jsdoc3`
 *
 *
 *
 * @todo 		Составить больше примеров использования модуля и  вариаций документации кода
 *
 * @moduleLocal
 * @sourcecode	code:tasks:htmldoc
 *
 * @tutorial	docs-htmldoc
 *
 * @see			module:tasks/jsdoc
 * @see			./tasks/jsdoc-theme/jsdoc.conf.json
 *
 * @requires	{@link https://github.com/gulpjs/gulp/tree/4.0|gulp#4}
 * @requires	{@link https://www.npmjs.com/package/gulp-jsdoc3}
 * @requires	{@link https://www.npmjs.com/package/through2}
 * @requires	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи, *задаеться автоматически*
 * @param		{boolean}		options.isDevelop - флаг dev версии сборки, *задаеться автоматически*
 * @param		{boolean}		options.isProduction - флаг production версии сборки, *задаеться автоматически*
 * @param		{Object}		options.package - данные из `package.json`, *задаеться автоматически*
 * @param		{string}		options.systemName - тайтл документации
 * @param		{string}		options.tutorials - путь к директории туториалов для раздела документации
 * @param		{string}		options.tmpFiles - директория для темповских файлов
 * @param		{string}		options.tmpMD - темповские файл где будут вписанны все `@todo` записи, со всех найденных страниц
 * @param		{string}		options.dest - путь к директории итоговой документации
 * @param		{string|Array}	options.src - путь к документируемым файлам
 *
 * @return		{Function}
*/
module.exports = function(options) {
	return function(cb) {

		// составление конфигурации для jsdoc модуля
		_modulesParams.jsdoc3Config(options, jsdocConfig);

		// указываем флаг htmldoc
		jsdocConfig.htmldoc = true;

		// объект для сбора найденых `@todo` пунктов
		let mdTokens = {};

		gulp.src(options.src)

			// парсим каждый файл
			.pipe(throughObj((file, enc, callback) => {

				// если markdown файл (индексовый)
				if (file.extname == '.md') {
					let mdFile = new Vinyl({
						path: `${options.tmpFiles}/${file.relative}`,
						contents: file.contents
					});
					callback(null, mdFile);

				// если html файл
				} else if (file.extname == '.html') {
					let markup = file.contents.toString();
					let tokens = [];
					let filename;
					let starts = []
					let startIndex = 0;
					let tmpMarkup = markup;

					function replacer(str, p1, p2, offset, s) {
						var num = tmpMarkup.indexOf(str);
						starts.push(num);
						var _r = '';
						for (var i = 0; i < str.length; i++) {
							_r += ' ';
						}
						var start = tmpMarkup.slice(0, num);
						var end = tmpMarkup.slice(num + str.length);
						tmpMarkup = start + _r + end;
					}

					// ищем комментарии с тегом `@htmldoc`
					tmpMarkup.replace(regexComment, replacer);
					markup.replace(regexComment, (comment, p1, p2, offset, s) => {

						// получаем номер строки
						let num = starts[startIndex++];
						let lines = markup.slice(0, num).split('\n');
						let lineno = lines.length;

						// отсекаем лишние куски комментария
						let task = comment.replace(regexTodoStart, '');
						task = task.replace(regexTodoEnd, '').split('\n');
						let length = task.length;

						// формируем текст комментария
						if (length > 1) {
							let last = task[length - 1];
							let indent;
							last.replace(/^(\s|\t)*/, (space) => {
								indent = space;
							});
							task.forEach((entry, i) => {
								task[i] = entry.replace(indent, '');
							});
						}
						task = task.join('\n');

						// имя файла
						filename = file.relative;

						// состовляем блок для `jsdoc` комментария
						tokens.push({
							filename,
							comment,
							task,
							lineno
						});

						// составляем блок для `markdown` страницы со списком `todo` пунктов
						let mdTask = [];
						task.replace(regexTodo, (todoTask) => {
							mdTask.push(`- ${todoTask.slice(6)}`);
						});
						if (mdTask.length) {
							_helpers.setNewPropToObject(mdTokens, filename, []);
							mdTokens[filename].push({
								lineno: `**todo** -> *lineno* \` ${lineno} \`\n`,
								task: mdTask.join('\n')
							});
						}
					});

					// если найдены и составлены блоки
					if (tokens.length) {

						// начало js файла
						let pageContent = [
							jsCommentStart,
							jsCommentHtmlDocs,
							jsCommentNS(filename),
							jsCommentEnd
						];

						// наполняем js файл составлеными `jsdoc` комментами
						tokens.forEach((entry, i) => {
							let jsCommentList = [
								jsCommentStart,
								entry.task,
								jsCommentMember(filename),
								jsCommentLine(entry.lineno),
								jsCommentEnd,
								jsCommentPoint(i+1)
							];
							pageContent.push(jsCommentList.join('\n'));
						});

						// создаем js файл
						filename = filename.split('.');
						filename.pop();
						let jsFile = new Vinyl({
							path: `${options.tmpFiles}/${filename.join('.')}.js`,
							contents: new Buffer(pageContent.join('\n'))
						});
						callback(null, jsFile);
					} else {
						callback();
					}
				} else {
					callback();
				}


			}, (callback) => {

				// после прохода всех файлов создадим темповский md файл
				if (Object.keys(mdTokens).length) {
					let mdFileConent = [`\n-----\n\n### TODO List\n`]
					for (let page in mdTokens) {
						mdFileConent.push(`#### ${page}\n`);
						for (var i = 0; i < mdTokens[page].length; i++) {
							let pageContent = mdTokens[page][i];
							mdFileConent.push(`${pageContent.lineno}`);
							mdFileConent.push(`${pageContent.task}\n`);
						}
					}
					mdFileConent.push('-----\n');
					_helpers.writeFile(`${options.tmpMD}`, mdFileConent.join('\n'));
				}
				callback();
			}))

			// сохраняем все полученные файлы
			.pipe(gulp.dest('./'))

			// отправляем модулю `gulp-jsdoc`
			.pipe(jsdoc3(jsdocConfig, cb));
	};
};
