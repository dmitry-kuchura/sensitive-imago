'use strict';

/**
 * @module 		tasks/transfer
 * @sourcefile 	file:tasks:transfer
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';





/**
 * Модуль трансфера. Используеться для переброса файлов без обработки.
 *
 * ### Оболочка задачи
 *
 * *Пример*
 * ```javascript
 * lazyRequireTask('sass:statics', `${tasks}/transfer`, {
 * 	src: _sassStatics,
 * 	dest: _sassDest,
 * 	filter: `combine`,
 * 	watch: [
 * 		_sassStatics
 * 	],
 * 	notify: true
 * });
 * ```
 *
 * ### Настройка задачи
 * Одним из основных параметров управления - являеться фильтровка файлов - `filter` :
 * - `false` - отключения фильтровки
 * - `'since'` - фильтр на уровне получения источников, который будет воспринимать только изминенные файлы после последнего выполнения текущей задачи. Задача будет полезна при использовании *watch'ей*, при одиночном вызове - никакого эфекта не будет, также следует помнить что при первом выполнении задача бужет перекидывать все файлы, так как предыдущего вызова еще не было. Но данный метод быстрее чем **newer** ~40-60%.
 * - `'newer'` - фильтр который получает все источники и сравнивает с итоговыми файлами (по дате) - перебрасывает только новые. При подобной фильтровке даже при первом запуске будут отфльтрованны только новые файлы. Также, в случае если удалить итоговые файлы и выполнить задачу, данный метод перебросит и новые файлы на место удаленных, метод **since** этого не сделает, так как он не смотрит на итоговые файлы. Но **newer** работает дольше почти на половину.
 * - `'combine'` - фильтр который объеденяет методы *newer* и *since*. При первом запуске будет выполнена проверка новых файлов в сравнении с итоговыми на основе *newer*, далее при последующих вызовах фильтровка будет на основе метода *since*. **Этот метод используется по умолчанию**
 *
 * > *На заметку*
 * > Чем больше входящих файлов - тем дольше идет фильтровка!
 *
 * Пример сравнения переброса одного и того же файла при вотче и ***количестве входящих файлов - 36 шт.:***
 *
 * since | newer | false (переброс всех файлов)
 * --- | --- | ---
 * ~ 121-154 ms | ~ 246-268 ms | ~286-360 ms
 *
 * Пример сравнения переброса одного и того же файла при вотче и ***количестве входящих файлов - 336 шт.:***
 *
 * since | newer | false (переброс всех файлов)
 * --- | --- | ---
 * ~ 240-544 ms | ~ 849 ms - 1.2 s | ~ 1.5-1.86 s
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:transfer
 *
 * @requires   	{@link https://github.com/gulpjs/gulp/tree/4.0|gulpjs/gulp#4.0}
 * @requires   	{@link https://www.npmjs.com/package/gulp-load-plugins}
 * @requires   	{@link https://www.npmjs.com/package/gulp-if}
 * @requires   	{@link https://www.npmjs.com/package/gulp-newer}
 * @requires   	{@link https://www.npmjs.com/package/gulp-notify}
 * @requires   	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи
 * @param		{string}		options.isProduction - имя вызывающей задачи
 * @param		{string}		options.dest - путь к итоговой директории
 * @param		{string}		options.src - путь к исходной директории
 * @param		{string|boolean} [options.filter='combine'] - метод фильтровки файлов
 * @param		{boolean}		[options.notify=false] - выводить уведомление по окончанию трансфера
 * @param		{string}		[options.notifyOn='last'] - метод уведомления, параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 * @param		{number}		[options.notifyTime=2000] - время показа уведомления, параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 * @param		{boolean}		[options.notifyIsShort=false] - выводить краткое уведомдение - только количество файлов, параметр воздействует только при опции `notifyOn:'last'`. Параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 *
 * @return		{Function}
*/
module.exports = function(options) {

	// возврашаем функцию для задачи
	return function(cb) {

		// список переброшенных файлов
		let receivedFilesList = [];

		// использовать newer метод ?
		let isNewer = false;

		// использовать since метод ?
		let isSince = false;

		switch(options.filter) {
			case false:
				break;
			case 'since':
				isSince = true;
				break;
			case 'newer':
				isNewer = true;
				break;
			default:
				if (options._isCombinedMethod) {
					isSince = true;
					isNewer = false;
				} else {
					isSince = false;
					isNewer = true;
					options._isCombinedMethod = true;
				}
		};


		// возвращаем
		return gulp.src(options.src, {
				buffer: false,
				since: isSince ? gulp.lastRun(options.taskName) : 0
			})
			.pipe($.if(
				isNewer,
				$.newer(options.dest)
			))
			.pipe(gulp.dest(options.dest))
			.on('data', (file) => {
				receivedFilesList.push(file.relative);
			})
			.pipe($.if(
				options.notify,
				$.notify(_modulesParams.gulpNotify(options, receivedFilesList, 'transfered'))
			));
	};
};
