'use strict';

/**
 * @module 		tasks/clean
 * @sourcefile 	file:tasks:clean
*/





// подключение nodejs модулей
// ==========================
	import del from 'del';
	import path from 'path';

// подключение внутренних модулей
// ==============================
	import _helpers from './_helpers.js';





/**
 * Модуль очистки (удаления) указанной директории или файлов.
 * Для экспорта модуля в задачу используеться метод {@link module:gulpfile~lazyRequireTask|lazyRequireTask}.
 * В параметрах задачи ( `src` ) необходимо указать путь к директории или файлам которые нужно удалить.
 * - При успешном выполнении вы получите лог уведомление в терминале (если не выключен флаг `log`). Если указанный источник не будет обнаружен - вы получите сообщение `[URL] - not exist`
 * - При ошибке удаления - в терминале будет уведомление, с описанием ошибки. Такой результат будет считаться критическим поэтому node процесс будет остановлен.
 *
 *
 *
 * @sourcecode	code:tasks:clean -c
 *
 * @requires   	{@link https://www.npmjs.com/package/del}
 * @requires   	{@link https://www.npmjs.com/package/path}
 * @requires   	module:tasks/_helpers
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи, *задаеться автоматически*
 * @param		{boolean}		options.isDevelop - флаг dev версии сборки, *задаеться автоматически*
 * @param		{boolean}		options.isProduction - флаг production версии сборки, *задаеться автоматически*
 * @param		{string|Array}	options.src - путь к директории или файлам которые нужно удалить
 * @param		{boolean}		[options.log=true] - флаг вывода лог уведомления при успешном действии
 *
 * @return 		{Promise}
*/
module.exports = function(options) {

	// возврашаем функцию для задачи
	return function(cb) {

		// возвращаем Promise
		return del(options.src)
			// после выполнения
			.then(
				paths => {
					// если log не отключен
					if (options.log !== false) {
						// если источник не найден заменяем текст
						if (paths && paths.length === 0) {
							paths = `${options.src} - not exist`;
						}
						// выводим уведомление
						_helpers.logMsg(paths, 'del');
					}
				},

				error => {
					// выводим ошибку (критическую)
					_helpers.logError(error, true);
				}
			);
	};
};
