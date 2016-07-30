'use strict';

/**
 * @module 		tasks/jsdoc-theme/plugins/defineTags
 * @sourcefile	file:tasks:jsdoc-theme:plugins:defineTags
 * @author		Олег Дутченко <dutchenko.o.wezom@gmail.com>
 */





// константы
// ==========================
	const fs = require('fs');
	const path = require('path');





// внутренние методы
// ==========================

	/**
	 * Метод для исправления объявления html тегов и делимитеров шаблонизатора
	 *
	 *
	 *
	 * @sourcecode 	code:tasks:jsdoc-theme:plugins:defineTags:_rip
	 *
	 * @param		{string}		str - строка для замены
	 *
	 * @return		{string}		исправленная строка
	*/
		function _rip(str) {
			str = str.replace(/</g,'&lt;');
			str = str.replace(/%s/g,'%%ss');
			return str;
		}




	/**
	 * Метод для исправления и экранирования символов в коде
	 *
	 *
	 *
	 * @sourcecode 	code:tasks:jsdoc-theme:plugins:defineTags:_escape
	 *
	 * @param		{string}	code - исходный js код
	 *
	 * @return		{string}	исправленный код
	*/
		function _escape(code) {
			code = code.replace(/'.*'/g, _rip);
			code = code.replace(/".*"/g, _rip);
			code = code.replace(/\n?([^\'\"]*)?\/.+\//g, _rip);
			return code;
		}



	/**
	 * Метод нормализации отображения исходного кода
	 *
	 *
	 *
	 * @sourcecode code:tasks:jsdoc-theme:plugins:defineTags:_normalizeCode
	 *
	 * @param		{string}		str - исходный js код
	 *
	 * @return		{string}		исправленный код
	*/
		function _normalizeCode(str) {
			let lines = str.split('\n');
			let _flag = true;
			let _begin;
			for (let i = lines.length - 1; i >= 0; i--) {
				let line = lines[i];
				if (_flag && /\S/.test(line)) {
					_flag = false;
					lines[i] = line.replace(/^(\s|\t)+/, (part) => {
						_begin = part;
						return '';
					})
				} else {
					lines[i] = line.replace(_begin, '');
				}
			}
			return _escape(lines.join('\n'));
		}



	/**
	 * Метод нормализации отображения сопутствующего комментария перед исходным кодом
	 *
	 *
	 *
	 * @sourcecode 	code:tasks:jsdoc-theme:plugins:defineTags:_normalizeComment
	 *
	 * @param		{string}		str - исходный js комментарий
	 *
	 * @return		{string}		исправленный комментарий
	*/
		function _normalizeComment(str) {
			let lines = str.split('\n');
			let regex = /^(\t|\s)+\*/;
			lines.forEach((line, i) => {
				if (regex.test(line)) {
					lines[i] = line.replace(regex, (part) => {
						return ' *';
					})
				}
			});
			return lines.join('\n');
		}





/**
 * Экспортируемый обработчик
 *
 *
 *
 * @sourcecode	code:tasks:jsdoc-theme:plugins:defineTags
 * @tutorial	docs-workflow-jsdoc
 *
 * @param		{Object}		dictionary - справочник доклетов
 */
	exports.defineTags = function(dictionary) {
		// определение локольного модуля
		dictionary.defineTag('moduleLocal', {
			mustNotHaveValue: true,
			onTagged: function(doclet, tag) {
				doclet.moduleLocal = true;
			}
		});

		// определение модуля без es6 импорта
		dictionary.defineTag('moduleNoES6Import', {
			mustNotHaveValue: true,
			onTagged: function(doclet, tag) {
				doclet.moduleNoES6Import = true;
			}
		});

		dictionary.defineTag('newscope', {
			onTagged: function(doclet, tag) {
				doclet.newScope = true;
				if (!!tag.value) {
					doclet.newScopeValue = tag.value;
				}
			}
		});

		// прунудительное определение и вывод номера строки на кторой начинаеться документируемый код
		dictionary.defineTag('lineno', {
			onTagged: function(doclet, tag) {
				let num;
				if (tag.hasOwnProperty('value')) {
					num = tag.value;
				} else {
					num = doclet.meta.lineno;
				}
				doclet.lineNo = num;
			}
		});

		// запоминание полного контента документируемого файла
		dictionary.defineTag('sourcefile', {
			mustHaveValue: true,
			onTagged: function(doclet, tag) {
				let filePath = path.join(doclet.meta.path, doclet.meta.filename);
				let fileSource = fs.readFileSync(filePath).toString();
				doclet.sourcefile = {
					name: tag.value,
					source: fileSource
				}
			}
		});

		// запоминание блока контента документируемого js кода
		dictionary.defineTag('sourcecode', {
			onTagged: function(doclet, tag) {
				let filePath = path.join(doclet.meta.path, doclet.meta.filename);
				let fileSource = fs.readFileSync(filePath).toString();
				let range = doclet.meta.range;
				let codeSource = fileSource.slice(range[0], range[1]);
				if (tag.hasOwnProperty('value')) {
					let name = tag.value.replace(/\s\-c$/, '');
					let endIndex = fileSource.indexOf(`// endcode ${name}`);
					if (endIndex > range[1]) {
						codeSource = fileSource.slice(range[1], endIndex);
					}
				}
				if (typeof codeSource == 'string') {
					if (!/^(\s)*\/\*\*/.test(codeSource)) {
						codeSource = _normalizeCode(codeSource);
						doclet.sourcecode = {};
						let lineno = doclet.meta.lineno;
						if (tag.hasOwnProperty('value')) {
							if (/(\s|\t)*\-c/.test(tag.value) && !!doclet.comment) {
								let comments = _normalizeComment(doclet.comment);
								let lines = comments.match(/\n/g);
								if (lines !== null) {
									lineno -= (lines.length + 1);
								}
								codeSource = `${comments}\n${codeSource}`;
							}
							let name = tag.value.replace(/(\s|\t)*\-c/, '');
							name = name.replace(/(\s|\t)/g, '');
							if (name.length) {
								doclet.sourcecode.name = name;
							}
						}
						doclet.sourcecode.lineno = lineno;
						doclet.sourcecode.source = codeSource;
					}
				}
			}
		});
	};
