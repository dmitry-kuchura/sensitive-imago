'use strict';

/**
 * <div class="moduleName"><small>require</small><br><b>const</b> _helpers = require("./tasks/_helpers");<br><small>es6 import</small><br><b>import</b> _helpers <b>from</b> "./tasks/_helpers";</div>
 * Модуль который експортирует объект с параметрами для конфигурации nodejs модулей
 *
 * ### Связанные материалы
 * - {@link module:tasks/_modules-params}
 * - {@link https://nodejs.org/docs/latest/api/fs.html}
 * - {@link https://nodejs.org/docs/latest/api/path.html}
 *
 *
 *
 * @module		tasks/_helpers
 * @sourcefile	file:tasks:_helpers
 *
 * @requires	{@link https://www.npmjs.com/package/fs}
 * @requires	{@link https://www.npmjs.com/package/path}
 * @requires	{@link https://www.npmjs.com/package/chalk}
 * @requires	{@link https://www.npmjs.com/package/file-save}
*/





// константы
// ==========================
	const _indent = '\t';
	const _symbols = {
		done: chalk.white.bgGreen(' DONE '),
		info: chalk.white.bgBlue(' INFO '),
		error: chalk.white.bgRed('  ERR '),
		del: chalk.white.bgRed('  DEL '),
		warn: chalk.black.bgYellow(' WARN ')
	};

// подключение nodejs модулей
// ==========================
	import fs from 'fs';
	import path from 'path';
	import chalk from 'chalk';
	import fileSave from 'file-save';
	import deepExtend from 'deep-extend';





/**
 * Набор параметров для конфигурации nodejs модулей
 *
 *
 *
 * @class
*/
class Helpers {



	/**
	 * Создание нового свойства, если не было определенно ранее
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{Object}		sampleObject
	 * @param		{string}		propertyKey
	 * @param		{*}				dataType
	*/
		setNewPropToObject(sampleObject, propertyKey, dataType) {
			if (!sampleObject.hasOwnProperty(propertyKey)) {
				sampleObject[propertyKey] = dataType;
			}
		}





	/**
	 * Получение файла
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{string}		filePath - путь к файлу
	 * @param		{Function}		resolve
	 * @param		{Function}		reject
	*/
		getFile(filePath, resolve, reject) {
			try {
				fs.accessSync(filePath);
				return resolve(fs.readFileSync(filePath), filePath);
			} catch(err) {
				return reject(err, filePath);
			}
		}





	/**
	 * Получает статистику(свойства) файла
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{string}		filePath
	 *
	 * @return		{Object}
	*/
		getFileStats(filePath) {
			return fs.statSync(filePath);
		}





	/**
	 * Получает дату или время последней модификации файла
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @see			{@link module:tasks/_helpers~Helpers#getFileStats|Helpers#getFileStats}
	 *
	 * @param		{string}		filePath
	 * @param		{boolean}		isGetTime - перевод дату в число(мс)
	 *
	 * @return		{string|number}
	*/
		getFileStat_mtime(filePath, isGetTime) {
			let mtime = this.getFileStats(filePath).mtime;
			if (isGetTime) return mtime.getTime();
			return mtime;
		}





	/**
	 * Запись файла
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{string}		filePath - путь к файлу
	 * @param		{string}		fileContent - собержание файла
	*/
		writeFile(filePath, fileContent) {
			fileSave(filePath)
				.write(fileContent, 'utf-8', () => {
					this.logMsg(`writed file ${path.resolve(filePath)}`, 'done');
				})
				.error(function() {
					this.logError(`on write file ${path.resolve(filePath)}`)
				});
		}





	/**
	 * Составление лог уведомления
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{string|Array}	message - контент уведомления
	 * @param		{sring}			[status] - ключ статуса, по которому будет выбран символ из {@link module:tasks/_helpers~_symbols|_symbols} для уведомления
	 *
	 * @return		{sring}
	*/
		consoleMessage(message, status) {
			status = status in _symbols ? `${_symbols[status]}${_indent}` : `${_indent}`;
			switch(typeof message) {
				case 'string':
					break;
				case 'object':
					if (message !== null && message.length) {
						message = `${message.join(`\n${_indent}`)}`;
						break;
					}
				default:
					message = `without message`;
			}
			return `${status}${message}`;
		}





	/**
	 * Вывод уведомления в консоль терминала
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @see			{@link module:tasks/_helpers~Helpers#consoleMessage|Helpers#consoleMessage}
	 *
	 * @param		{string}		message - уведомление
	 * @param		{string}		[messageStatus='info'] - уведомление
	*/
		logMsg(message, messageStatus='info') {
			let chalkColor = 'blue';
			switch(messageStatus) {
				case 'done':
					chalkColor = 'green';
					break;
				case 'warn':
					chalkColor = 'yellow';
					break;
				case 'del':
					chalkColor = 'red';
					break;
				default:
					messageStatus = 'info';
			}
			message = this.consoleMessage(message, messageStatus);
			console.log(chalk[chalkColor](message));
		}





	/**
	 * Вывод уведомления в консоль терминала при ошибке.
	 * Если ошибка критическая - процесс будет остановлен
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @see			{@link module:tasks/_helpers~Helpers#consoleMessage|Helpers#consoleMessage}
	 *
	 * @param		{string}		message - уведомление
	 * @param		{boolean}		[isCritical=] - флаг критической ошибки
	*/
		logError(message, isCritical) {
			message = this.consoleMessage(message, 'error');
			console.log(chalk.red(message));
			if (isCritical) {
				console.log(chalk.red(`${_indent}Exit !!!`));
				process.exit(0);
			}
		}
}





module.exports = new Helpers();
