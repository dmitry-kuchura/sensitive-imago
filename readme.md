# Вписать Имя проекта

- проект:
	- (вставить ссылку на проект worksection)
	- (вставить ссылку на задачу worksection)
- макеты:
	- (вставить ссылку макеты прототипов)
	- (вставить ссылку макеты дазайна)
- дополнительные материалы и источники:
	- (вставить ссылки)

------------

### Макет верстки

- рабочая ветка `имя ветки`
- макет верстки находиться в директории `./_HTML` __*Важно* - данную директорию НЕ удалять с репозитория__
	- итоговая верстка `./_HTML/dist`
	- исходники сборки `./_HTML/src`
	- сопутствующая документация `./_HTML/docs`
		- документация по проекту `./_HTML/docs/html`
		- документация по сборке проекта `./_HTML/docs/gulp`
		- документация по скриптам `./_HTML/docs/jsdoc`
		- документация по стилям `./_HTML/docs/sassdoc`


#### TODO list ⇒ PHP

- вставить список `._HTML/tmp/htmldoc/__todo-list.md`

------------

### Верстка проекта

#### Импорт проекта

При создании нового репозитория для вашего проекта - используйте `Import repository`.
Параметры импорта:

*Old repository*

- *Source* - Git
- *Url* - `https://bitbucket.org/wezom/wtpl`
	- Включите флаг авторизации (*Requires authorization*) и укажите свои данные

*New repository*

- *Owner* - wezom
- *Repository name* - Новое имя вашего репозитория
- *Access level* - This is a private repository
	- Включите флаг авторизации и укажите свои данные
- *Advanced settings* - здесь на свое усмотрение
	- рекоммендуется указать язык проекта и включить трекер ошибок

#### Установка проекта и основная настройка

1. После успешного импорта - клонируем репозиторий
1. Устанавливаем все модули - `npm i --save-dev`
1. Указать основные свойства в файле `readme.md` - смотри параметры выше:
	- имя проекта
	- ссылки на ве исходники и задачи проекта
	- основные ветки репозитория и основную иерархию директорий
1. Настроить `package.json`
	- имя проекта `name`
	- описание проекта `description`
	- git урл `repository -> url`
	- домашняя страница репозитория `homepage`
1. Настроить `gulpfile.babel.js`, смотри блок с комментом:
```javascript
// константы
// ==========================
	// проект
	const projectName = `wtpl`;
	...
```

#### Старт сборки

После настроек - для старта работы нужно запустить задачу `gulp start`,
которая сделает базовое построение итогового проекта верстки и составить основную документацию.

После, рекоммендованно, ***ознакомиться с документацией проекта*** и начинать привычную работу ))).

### Сдача проекта перед тестированием и программированием

1. Провести окончательный линтинг всех файлов
1. Провести сборку в продакшн версии - `gulp rebuild --prod`
1. Составить окончательные доки и туториалы по всем разделам - `gulp docs`
1. Скопировать **todo list** из `._HTML/tmp/htmldoc/__todo-list.md` в этот файл `readme.md`
1. Очистить файл `.gitignore` от *временных игноров*
1. Запушить изменения
1. Если вы работали на отдельной ветке - слить последнюю версию верстки в `master`
