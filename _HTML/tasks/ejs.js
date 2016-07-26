'use strict';

/**
 * @module 		tasks/clean
 * @sourcefile 	file:tasks:clean
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import multipipe from 'multipipe';
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _modulesParams from './_modules-params.js';



module.exports = function(options) {

	// возврашаем функцию для задачи
	return function(cb) {

		// vars
		// ========

			// список скомпилированных файлов
			let receivedFilesList = [];

			// флаг фильтровки
			let isFilter = options.filter !== false;

			let ejsLocals = options.locals || {};
			ejsLocals._isPoduction = options.isProduction;
			ejsLocals._isDevelop = options.isDevelop;





		// streams
		// ========

			// составление multipipe компиляции
			let streamEjs = multipipe(
				$.ejsLocals(ejsLocals),
				$.if(
					options.beautify,
					$.htmlBeautify(_modulesParams.gulpHtmlBeautify(options.beautifyConfig))
				)
			).on('error', $.notify.onError(
				_modulesParams.gulpNotifyOnError(`compile - ${options.taskName}`))
			);





		// task
		// ========
			return gulp.src(options.src)
				// компиляция
				.pipe(streamEjs)
				// фильтровка изменений в стриме
				.pipe($.if(
					isFilter,
					$.changed(
						options.dest,
						{
							hasChanged: $.changed.compareSha1Digest
						}
					)
				))
				.pipe(gulp.dest(options.dest))
				.on('data', (file) => {
					receivedFilesList.push(file.relative);
				})
				.pipe($.if(
					options.notify,
					$.notify(_modulesParams.gulpNotify(options, receivedFilesList, 'compiled'))
				));
	};
};
