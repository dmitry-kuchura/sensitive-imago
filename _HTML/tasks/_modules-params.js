'use strict';

/**
 * <div class="moduleName"><small>require</small><br><b>const</b> _modulesParams = require("./tasks/_modules-params");<br><small>es6 import</small><br><b>import</b> _modulesParams <b>from</b> "./tasks/_modules-params";</div>
 * Модуль который експортирует объект с параметрами для конфигурации nodejs модулей
 *
 *
 *
 * @module		tasks/_modules-params
 * @sourcefile	file:tasks:_modulesParams
 *
 * @requires	module:tasks/_helpers
*/





// подключение внутренних модулей
// ==============================
	import _helpers from './_helpers.js';





/**
 * Набор параметров для конфигурации nodejs модулей
 *
 *
 *
 * @class
*/
class modulesParams {

	/**
	 * Параметры для модуля `gulp-notify`.
	 * Метод вернет конфигурацию на основе параметра `notifyOn`:
	 * - `'each'` - вернет параметры из {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotifyEach}
	 * - `'last'` - вернет параметры из {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotifyLast}
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{object}		options - передаваемые параметры
	 * @param		{string}		[options.notifyOn='last'] - метод уведомления
	 * @param		{number}		[options.notifyTime=2000] - время показа уведомления (ms)
	 * @param		{boolean}		[options.notifyIsShort=false] - выводить краткое уведомдение - только количество файлов, параметр воздействует только при опции `notifyOn:'last'`
	 * @param		{Array}			[receivedFilesList=[]] - список отработанных файлов
	 * @param		{string}		[happened] - название действия с файлами
	 *
	 * @return		{object}		Объект конфигурцаии в зависимости от опции `notifyOn`
	 */
	gulpNotify(options, receivedFilesList, happened) {
		if (options.notifyOn == 'each') {
			return this.gulpNotifyEach(options, happened);
		}
		return this.gulpNotifyLast(options, receivedFilesList, happened);
	}





	/**
	 * Настройка параметров для модуля `gulp-notify`.
	 * Вывод уведомления после обработки каждого файла.
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{object}		options - передаваемые параметры
	 * @param		{string}		[options.notifyOn='last'] - метод уведомления
	 * @param		{number}		[options.notifyTime=2000] - время показа уведомления (ms)
	 * @param		{boolean}		[options.notifyIsShort=false] - выводить краткое уведомдение - только количество файлов
	 * @param		{string}		[happened=''] - название действия с файлами
	 *
	 * @return		{object}		Объект конфигурцаии.
	 */
	gulpNotifyEach(options, happened='') {
		return {
			time: options.notifyTime || 2000,
			title: options.taskName,
			message: () => {
				return `<%= file.relative %> ${happened}`;
			}
		};
	}





	/**
	 * Настройка параметров для модуля `gulp-notify`.
	 * Вывод уведомления будет в конце вызавыющей задачи, после обработки всех файлов.
	 *
	 *
	 *
	 * @sourcecode
	 *
	 * @param		{object}		options - передаваемые параметры
	 * @param		{string}		[options.notifyOn='last'] - метод уведомления
	 * @param		{number}		[options.notifyTime=2000] - время показа уведомления (ms)
	 * @param		{boolean}		[options.notifyIsShort=false] - выводить краткое уведомдение - только количество файлов
	 * @param		{Array}			[receivedFilesList=[]] - список отработанных файлов
	 * @param		{string}		[happened='done'] - название действия с файлами
	 *
	 * @return		{object}		Объект конфигурцаии.
	 */
	gulpNotifyLast(options, receivedFilesList=[], happened='done') {
		return {
			onLast: true,
			time: options.notifyTime || 2000,
			title: () => {
				return `${options.taskName} (${receivedFilesList.length})`;
			},
			message: () => {
				if (options.notifyIsShort) {
					return happened;
				}
				return `\n\t${receivedFilesList.join('\n\t')}`;
			}
		};
	}





	/**
	 * Расширение систмной конфигурация модуля `gulp-jsdoc` на основе пользовательских параметров.
	 *
	 *
	 *
	 * @sourcecode 	code:tasks:_modulesParams:jsdoc3Config
	 *
	 * @see			{@link module:tasks/jsdoc}
	 * @see			{@link module:tasks/htmldoc}
	 *
	 * @param		{Object}		options - Параметры задачи, из которой идет вызов данного метода
	 * @param		{string}		options.taskName - имя задачи
	 * @param		{string[]}		options.destination - директория для генирации документации
	 * @param		{string[]}		options.tutorials - путь к сопутствующим туториалам
	 * @param		{string}		options.templates.systemName - Имя раздела жокументации
	 * @param		{Object}		configObject - Параметры системной конфигурации модуля `gulp-jsdoc`
	*/
	jsdoc3Config(options, configObject) {
		configObject.opts = configObject.opts || {};
		configObject.opts.destination = options.dest;
		configObject.opts.tutorials = options.tutorials;
		configObject.templates.systemName = options.systemName || 'jsDoc Documentation';
	}
}





module.exports = new modulesParams();
