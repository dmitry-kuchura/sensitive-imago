'use strict';

/**
 * @module 		tasks/svgsprite
 * @sourcefile 	file:tasks:svgsprite
*/





// подключение nodejs модулей
// ==========================
	import gulp from 'gulp';
	import multipipe from 'multipipe';
	import through2 from 'through2';
	const throughObj = through2.obj;
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




		// streams
		// ========





		// task
		// ========

			return gulp.src(options.src)
				.pipe($.jsonConcat('svgsprite' + '.json', function (data) {
					var stringData = '{';
					var enter = '\n\t';
					var enterDouble = enter + '\t';
					var enterTriple = enterDouble + '\t';
					for (var key in data) {
						var namerId = '"' + key + '": {';
						var params = data[key];
						stringData += enter + namerId;
						for (var param in params) {
							var values = params[param];
							stringData += enterDouble + '"' + param + '": ';
							if (param == 'viewBox') {
								stringData += '"' + values + '",';
							} else {
								var paramString = '[' + enterTriple + '%sss%' + enterDouble + '],';
								var arr = [];
								for (var i = 0; i < values.length; i++) {
									var val = JSON.stringify(values[i]);
									arr.push(val);
								}
								stringData += paramString.replace(/%sss%/g, arr.join(',' + enterTriple))
							}
						}
						stringData = stringData.slice(0, -1);
						stringData += enter + '},';
					}
					stringData = stringData.slice(0, -1);
					stringData += '\n}';
					return new Buffer(stringData);
				}))
				.pipe($.if(isFilter,
					$.changed(
						options.dest,
						{hasChanged: $.changed.compareSha1Digest}
					)
				))
				.on('error', $.notify.onError(
					_modulesParams.gulpNotifyOnError(`${options.taskName}`))
				)
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
