## Документация по основным разделам

- [Project docs](../html/index.html)
- *Gulp docs*
- [JSDoc](../jsdoc/index.html)
- [SASSDoc](../sassdoc/index.html)

-----

# Gulp docs

Раздел документации по js файлам, которые участвуют в сборке проекта.

> используется стандарт es6

-----

## Управление и настройка проекта

читай {@tutorial start}

-----

## Gulp модули

все рабочие модули, которые используются в проекте сборки, находятся в директрии `./tasks`.
Задачи, описаные в основном gulp файле, вызывают эти модули при помощи метода {@link module:gulpfile~lazyRequireTask|lazyRequireTask}. Это позволяет облегчить запуск gulp'a и, самое основное, использовать *логику* одного и того же модуля для разных задач с различными условиями и параметрами.

-----

## Gulp задачи

читай раздел {@tutorial all-tasks}, в котором описаны все доступные задачи для работы

-----

## Используемые nodejs модули

Каждый модуль можно найти на сайте [npmjs.com](https://www.npmjs.com/).
Исключение [gulp#4.0](https://github.com/gulpjs/gulp/tree/4.0)

```json
"devDependencies": {
	"babel-preset-es2015": "^6.9.0",
	"babel-register": "^6.9.0",
	"browser-sync": "^2.13.0",
	"del": "^2.2.1",
	"file-save": "^0.2.0",
	"graceful-fs": "^4.1.4",
	"gulp": "github:gulpjs/gulp#4.0",
	"gulp-autoprefixer": "^3.1.0",
	"gulp-if": "^2.0.1",
	"gulp-jsdoc3": "^0.3.0",
	"gulp-load-plugins": "^1.2.4",
	"gulp-markdown": "^1.2.0",
	"gulp-newer": "^1.2.0",
	"gulp-notify": "^2.2.0",
	"gulp-rename": "^1.2.2",
	"gulp-sass": "^2.3.2",
	"gulp-sourcemaps": "^1.6.0",
	"gulp-uglify": "^1.5.4",
	"lodash": "^4.13.1",
	"minimatch": "^3.0.2",
	"sassdoc": "^2.1.20",
	"stream-combiner2": "^1.1.1",
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

читай {@link http://usejsdoc.org/about-tutorials.html}

