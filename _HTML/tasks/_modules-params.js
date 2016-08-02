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
 * @requires	{@link https://www.npmjs.com/package/deep-extend}
 * @requires	module:tasks/_helpers
*/






// подключение nodejs модулей
// ==========================
	import deepExtend from 'deep-extend';
	import gulpLoadPlugins from 'gulp-load-plugins';
	const $ = gulpLoadPlugins();

// подключение внутренних модулей
// ==============================
	import _helpers from './_helpers.js';





/**
 * Набор параметров для конфигурации nodejs модулей
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
	 * Настройка параметров для модуля `gulp-notify` для метода `onError`.
	 *
	 * @sourcecode
	 * @param		{string}		taskName - имя задачи
	 * @return		{object}		Объект конфигурцаии.
	 */
	gulpNotifyOnError(taskName) {
		return {
			title: `Error ${taskName}`,
			message: '<%= error.message %>'
		};
	}





	/**
	 * Составление скриптов библиотек - ***метод в работе***.
	 *
	 * @sourcecode
	 * @param 		{Object}	[jsLibs=[]] - библиотеки
	 * @return		{Steam}		Набор pipe'ов.
	 */
	gulpJsGetLibs(jsLibs=[]) {
		let libs = [];
		jsLibs.forEach((jsLib) => {
			let branch = `gulpJsLib${jsLib.name}`;
			if (!!this[branch]) {
				libs.push(this[`gulpJsLibModernizr`](jsLib.options));
			}
		});
		return libs;
	}





	/**
	 * Настройка параметров для модуля `gulp-eslint`.
	 * - {@link https://github.com/adametry/gulp-eslint}
	 * - список правил {@link http://eslint.org/docs/rules/}
	 *
	 * @sourcecode 	_modulesParams:gulpEsLintConfig
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpEsLintConfig(customConfig={}) {
		let baseConfig = {
			rules: {
				// warning
				'no-debugger': 2,
				'no-empty': 2,
				'no-empty-pattern': 2,
				'no-eval': 2,
				'no-native-reassign': 2,
				'no-alert': 2,
				'use-isnan': 2,

				// warning
				'no-case-declarations': 1,
				'camelcase': 1,
				'valid-jsdoc': 1,
				'valid-typeof': 1,
				'no-console': [
					1, {
						allow: ["warn", "error"]
					}
				],

				// disabled
				'strict': 0
			},
			globals: [
				'jQuery',
				'$'
			],
			envs: [
				'browser'
			]
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Настройка параметров для модуля `gulp-sass-lint`.
	 * - офф документация {@link https://github.com/sasstools/sass-lint/tree/develop/docs}
	 *
	 * @sourcecode 	_modulesParams:gulpSassLintConfig
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpSassLintConfig(customConfig={}) {
		let baseConfig = {
			rules: {
				// warning
				'clean-import-paths': 1,
				'no-ids': 1,
				'indentation': [
					1, {
						size: 'tab'
					}
				],
				'class-name-format': [
					1, {
						'allow-leading-underscore': true,
						'convention': 'camelcase'
					}
				],
				'mixin-name-format': [
					1, {
						'allow-leading-underscore': true,
						'convention': 'camelcase'
					}
				],

				// disabled
				'leading-zero': 0,
				'empty-line-between-blocks': 0,
				'force-element-nesting': 0,
				'property-sort-order': 0
			}
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Настройка параметров для модуля `gulp-csslint`.
	 * - офф документация {@link https://github.com/CSSLint/csslint/wiki/Rules}
	 *
	 * @sourcecode 	_modulesParams:gulpCssLintConfig
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpCssLintConfig(customConfig={}) {
		let baseConfig = {

			// errors
			'empty-rules': 2,

			// warning
			'ids': 1,

			// disabled
			'box-sizing': 0,
			'universal-selector': 0,
			'unqualified-attributes': 0,
			'compatible-vendor-prefixes': 0
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Настройка параметров для модуля `gulp-autoprefixer`.
	 * - офф документация по параметрам {@link https://github.com/postcss/autoprefixer#options}
	 *
	 * @sourcecode
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpAutoprefixerConfig(customConfig={}) {
		let baseConfig = {
			browsers: [
				'ie >= 11',
				'ie_mob >= 10',
				'ff >= 25',
				'chrome >= 30',
				'safari >= 7',
				'opera >= 23',
				'ios >= 7',
				'android >= 4.4',
				'bb >= 10'
			],
			cascade: false
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Настройка параметров для модуля `gulp-autoprefixer`.
	 * - офф документация по параметрам {@link http://cssnano.co/optimisations/}
	 *
	 * @sourcecode
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpCssnanoConfig(customConfig={}) {
		let baseConfig = {
			zindex: false,
			autoprefixer: false,
			discardUnused: false
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Настройка параметров для модуля `gulp-uglify`.
	 * - офф документация по параметрам {@link http://cssnano.co/optimisations/}
	 *
	 * @sourcecode
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpUglifyConfig(customConfig={}) {
		let baseConfig = {
			mangle: false
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Настройка параметров для модуля `gulp-autoprefixer`.
	 *
	 * @sourcecode
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpSassConfig(customConfig={}) {
		let baseConfig = {
			outputStyle: 'expanded'
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Настройка параметров для модуля `gulp-html-beautify`.
	 *
	 * @sourcecode
	 * @param 		{Object}	[customConfig={}] - пользовательские параметры
	 * @return		{Array}		Список конфигурцаии.
	 */
	gulpHtmlBeautify(customConfig={}) {
		let baseConfig = {
		    indent_char: '\t',
		    indent_size: 1,
		    indent_level: 0,
		    eol: "\n",
		    indent_with_tabs: false,
		    preserve_newlines: true,
		    max_preserve_newlines: 1,
		    jslint_happy: false,
		    space_after_anon_function: false,
		    brace_style: "collapse",
		    keep_array_indentation: false,
		    keep_function_indentation: false,
		    space_before_conditional: true,
		    break_chained_methods: false,
		    eval_code: false,
		    unescape_strings: false,
		    wrap_line_length: 0,
		    wrap_attributes: "auto",
		    wrap_attributes_indent_size: 4,
		    end_with_newline: true,
		    unformatted: ['pre', 'code', 'script', 'style']
		};
		if (customConfig) {
			return deepExtend(baseConfig, customConfig);
		}
		return baseConfig;
	}





	/**
	 * Расширение системной конфигурация модуля `gulp-jsdoc` на основе пользовательских параметров.
	 *
	 * @sourcecode 	_modulesParams:jsdoc3Config
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
