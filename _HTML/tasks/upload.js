'use strict';

/**
 * @module 		tasks/upload
 * @sourcefile 	file:tasks:upload
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import vinylFtp from 'vinyl-ftp';
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';





/**
 * Модуль который експортирует задачу загрузки файлов на фтп.
 * По умолчанию это фтп хост инкубатора, параметры подключения к хосту указываються в конфигурации задачи `connect`.
 *
 *
 *
 * @moduleLocal
 * @sourcecode	code:tasks:upload -c
 *
 * @requires   	{@link https://github.com/gulpjs/gulp/tree/4.0|gulpjs/gulp#4.0}
 * @requires   	{@link https://www.npmjs.com/package/vinyl-ftp}
 * @requires   	{@link https://www.npmjs.com/package/gulp-load-plugins}
 * @requires	{@link https://www.npmjs.com/package/gulp-if}
 * @requires	{@link https://www.npmjs.com/package/gulp-notify}
 * @requires   	module:tasks/_modules-params
 *
 * @param		{Object}		options - передаваемые параметры
 * @param		{string}		options.taskName - имя вызывающей задачи, *задаеться автоматически*
 * @param		{boolean}		options.isDevelop - флаг dev версии сборки, *задаеться автоматически*
 * @param		{boolean}		options.isProduction - флаг production версии сборки, *задаеться автоматически*
 * @param		{string}		options.src - путь к исходным файлам
 * @param		{Object}		options.connect - параметры для соединения с хостом
 * @param		{string}		options.connect.host - хост
 * @param		{string}		options.connect.user - пользователь
 * @param		{string}		options.connect.pass - пароль
 * @param		{string}		options.connect.remotePath - путь к директории на хосте в которую будут залиты файлы
 * @param		{number}		[options.connect.parallel=3] - количество паралельных трансферов
 * @param		{boolean}		[options.notify=false] - выводить уведомление по окончанию загрузки
 * @param		{string}		[options.notifyOn='last'] - метод уведомления, параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 * @param		{number}		[options.notifyTime=2000] - время показа уведомления, параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 * @param		{boolean}		[options.notifyIsShort=false] - выводить краткое уведомдение - только количество файлов, параметр воздействует только при опции `notifyOn:'last'`. Параметр передается дальше методу {@link module:tasks/_modules-params~modulesParams#gulpNotify|modulesParams#gulpNotify}
 *
 * @return		{Function}
*/
module.exports = function(options) {

	// возврашаем функцию для задачи
	return function(cb) {

		// vars
		// ========

			// список загруженных файлов
			let receivedFilesList = [];

			// создаем подключение
			let ftpConnect = vinylFtp.create(options.connect);
			let remotePath = ftpConnect.config.remotePath;





		// task
		// ========

			return gulp.src(options.src, {buffer: false})
				.pipe(ftpConnect.newer(remotePath))
				.pipe(ftpConnect.dest(remotePath))
				.on('data', (file) => {
					receivedFilesList.push(file.relative);
				})
				.pipe($.if(
					options.notify,
					$.notify(_modulesParams.gulpNotify(options, receivedFilesList, 'uploaded'))
				));

	};
};
