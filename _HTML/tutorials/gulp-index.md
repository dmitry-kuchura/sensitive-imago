## Документация по основным разделам

- [Project docs](../html/index.html)
- *Gulp docs*
- [JSDoc](../js/index.html)
- [SASSDoc](../sass/index.html)

-----

# Gulp docs

Раздел документации по js файлам, которые участвуют в сборке проекта.

> используется стандарт es6

-----

## Gulp задачи

читай раздел {@tutorial all-tasks}, в котором описаны все доступные задачи для работы

-----

## Структура проекта

читай соответствующий раздел - {@tutorial all-folders}

-----

## Gulp модули

все рабочие модули, которые используются в проекте сборки, находятся в директрии `./tasks`.
Задачи, описаные в основном gulp файле, вызывают эти модули при помощи метода {@link module:gulpfile~lazyRequireTask|lazyRequireTask}. Это позволяет облегчить запуск gulp'a и, самое основное, использовать *логику* одного и того же модуля для разных задач с различными условиями и параметрами.

-----

## Используемые nodejs модули

Каждый модуль можно найти на сайте [npmjs.com](https://www.npmjs.com/).
Исключение [gulp#4.0](https://github.com/gulpjs/gulp/tree/4.0)

```json
"devDependencies": {
	"babel-preset-es2015": "^6.9.0",
	"babel-register": "^6.9.0",
	"browser-sync": "^2.13.0",
	"deep-extend": "^0.4.1",
	"del": "^2.2.1",
	"file-save": "^0.2.0",
	"graceful-fs": "^4.1.5",
	"gulp": "github:gulpjs/gulp#4.0",
	"gulp-autoprefixer": "^3.1.0",
	"gulp-autowatch": "^1.0.2",
	"gulp-changed": "^1.3.0",
	"gulp-combine-mq": "^0.4.0",
	"gulp-csslint": "^0.3.1",
	"gulp-cssnano": "^2.1.2",
	"gulp-ejs-locals": "0.0.1",
	"gulp-html-beautify": "^1.0.1",
	"gulp-if": "^2.0.1",
	"gulp-imagemin": "^3.0.2",
	"gulp-include": "^2.3.0",
	"gulp-jsdoc3": "^0.3.0",
	"gulp-json-concat": "0.0.5",
	"gulp-load-plugins": "^1.2.4",
	"gulp-markdown": "^1.2.0",
	"gulp-newer": "^1.2.0",
	"gulp-notify": "^2.2.0",
	"gulp-rename": "^1.2.2",
	"gulp-sass": "^2.3.2",
	"gulp-sass-lint": "^1.2.0",
	"gulp-sourcemaps": "^1.6.0",
	"gulp-uglify": "^1.5.4",
	"gulp-util": "^3.0.7",
	"lodash": "^4.14.0",
	"minimatch": "^3.0.2",
	"multipipe": "^0.3.1",
	"sassdoc": "^2.1.20",
	"vinyl-ftp": "^0.5.0",
	"yargs": "^4.7.1"
}
```


-----

## Как писать документацию?

читай туториалы:
- {@tutorial docs-gulp}
- {@tutorial docs-js}
- {@tutorial docs-sass}
- {@tutorial docs-htmldoc}


-----

## Как писать туториалы?

читай {@link http://usejsdoc.org/about-tutorials.html} и {@tutorial _tutorial-example}

