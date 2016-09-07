-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 07 2016 г., 17:06
-- Версия сервера: 5.5.48-log
-- Версия PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sensitive`
--

-- --------------------------------------------------------

--
-- Структура таблицы `access`
--

CREATE TABLE IF NOT EXISTS `access` (
  `id` int(10) NOT NULL,
  `role_id` int(10) NOT NULL,
  `controller` varchar(64) DEFAULT NULL,
  `view` tinyint(1) NOT NULL DEFAULT '0',
  `edit` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `blacklist`
--

CREATE TABLE IF NOT EXISTS `blacklist` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `date` int(10) DEFAULT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `comment` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `brands`
--

CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int(10) DEFAULT '0',
  `alias` varchar(255) NOT NULL,
  `views` int(10) NOT NULL DEFAULT '0',
  `image` varchar(255) DEFAULT NULL,
  `main_page` tinyint(1) unsigned DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `brands`
--

INSERT INTO `brands` (`id`, `created_at`, `updated_at`, `status`, `sort`, `alias`, `views`, `image`, `main_page`) VALUES
(34, 1448214113, 1452039944, 1, 1, 'aeropostale', 0, '558354ed168e1d21f99133a903910a1d.png', 1),
(35, 1448214434, 1452039944, 1, 6, 'colin-stuart', 0, '53e91d019c7b86872f8d4bb2a227536c.jpeg', 1),
(36, 1448214481, 1452039944, 1, 2, 'victorias-secret', 0, '9743e1d722d8c2488304faad210ca4c6.png', 1),
(37, 1448214498, 1452039944, 1, 3, 'hm', 0, 'c29053bf6deffa57d0a2c2ac3846c487.png', 1),
(38, 1448214528, 1452039944, 1, 4, 'pink-victorias-secret', 0, '9a381919c26fb8726223b88e0ba3255e.png', 1),
(39, 1448214547, 1452039944, 1, 5, 'guess', 0, 'ebefc837b894c545fd8b8a40595ebbb7.png', 1),
(40, 1448214623, 1452039944, 1, 7, 'aloha-bikini', 0, 'c262198ddc91d63386e43d7d890b377d.png', 1),
(41, 1448214640, 1452039944, 1, 8, 'relleciga', 0, '6e5709dff77cb43f2eb9aae69f78ada5.jpg', 1),
(43, 1451288198, 1452587407, 1, 0, 'vsx', 0, '966ceccd70f4e4a02801c24c85e53b59.png', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `brands_i18n`
--

CREATE TABLE IF NOT EXISTS `brands_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text` text,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `keywords` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `brands_i18n`
--

INSERT INTO `brands_i18n` (`id`, `name`, `text`, `h1`, `title`, `description`, `keywords`, `row_id`, `language`) VALUES
(34, 'Aeropostale', '', '', '', '', '', 34, 'ru'),
(35, 'Aeropostale', '', '', '', '', '', 34, 'en'),
(37, 'Colin Stuart', '<p>текст для наполнения&nbsp;текст для наполнения&nbsp;текст для наполнения&nbsp;текст для наполнения&nbsp;текст для наполнения</p>', '', '', '', '', 35, 'ru'),
(38, 'Colin Stuart', '', '', '', '', '', 35, 'en'),
(40, 'Victoria’s Secret', '', '', 'Victoria’s Secret', '', '', 36, 'ru'),
(41, 'Victoria’s Secret', '', '', '', '', '', 36, 'en'),
(43, 'H&M', '', '', '', '', '', 37, 'ru'),
(44, 'H&M', '', '', '', '', '', 37, 'en'),
(46, 'PINK - Victoria''s Secret', '', '', '', '', '', 38, 'ru'),
(47, 'PINK - Victoria''s Secret', '', '', '', '', '', 38, 'en'),
(49, 'Guess', '', '', '', '', '', 39, 'ru'),
(50, 'Guess', '', '', '', '', '', 39, 'en'),
(52, 'Aloha Bikini', '', '', '', '', '', 40, 'ru'),
(53, 'Aloha Bikini', '', '', '', '', '', 40, 'en'),
(55, 'Relleciga', '', '', '', '', '', 41, 'ru'),
(56, 'Relleciga', '', '', '', '', '', 41, 'en'),
(61, 'VSX', '', '', '', '', '', 43, 'ru'),
(62, 'VSX', '', '', '', '', '', 43, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `carts`
--

CREATE TABLE IF NOT EXISTS `carts` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35339 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `carts`
--

INSERT INTO `carts` (`id`, `created_at`, `updated_at`, `hash`) VALUES
(2336, 1449951242, NULL, 'c8e5432505841a37f2257d25e8acaca4d167c1cd'),
(2339, 1450080983, NULL, '238f6530c34fa069bb7705c2ca3fed8d59e1796e'),
(2341, 1450086292, NULL, '9f3d94ab53b976c6f28c5d162fd446bb2b558efb'),
(2342, 1450092375, NULL, '98ffdec30fa25d3028442c061004ba9e8dd9bb7e'),
(2356, 1450172538, NULL, '18e1c46f42ec333942462326b25de507620ef6b1'),
(2357, 1450178155, NULL, 'e6fea9bffa937e29369fe2b7525a261aae7c1b2c'),
(2362, 1450181177, NULL, 'f9844d265bdfe268faa82a9f7742609175d5b0a2'),
(2364, 1450181483, NULL, 'acabf4577d18d8d5c4147d33c0713bf938673baa'),
(2367, 1450182206, NULL, '2015374016cfe745cd7319d7b15c07f5ce1e96f3'),
(2368, 1450182496, NULL, '5a54f8207d49ee5acfd6df6f15f2f234e5e6d888'),
(35278, 1450204163, NULL, '4ddab854131dbc7835c9469fca033acb44924c62'),
(35288, 1450257637, NULL, '26a6d90cc4348dc99f4b6173a28e4c6f113455c1'),
(35289, 1450350359, NULL, 'dda81143e97791cf42ed32ba140e90e97a1ecceb'),
(35294, 1450367933, NULL, '2ca94fd59b8caff97ac37415611b08cb2d5c74b3'),
(35295, 1450417922, NULL, '892fefb4daf8605b456cff7e15285c3012ad7850'),
(35303, 1450680286, NULL, 'da47c4360e92bf5cfe316a7d5178778fa64a70f7'),
(35304, 1450693192, NULL, '6d5fbb3ed828ee16e3a8cdcb03882f267ef67ed2'),
(35306, 1450787051, NULL, 'd88723ea8584a2a5f75de42158e18ae0cd39c822'),
(35313, 1451485400, NULL, '7ae1e58cff690849346b37d57ecf2510436f677b'),
(35318, 1451898433, NULL, 'd30cc4e22d34a44a4d29cfd87e1479d27474f102'),
(35328, 1452245913, NULL, 'df76e81107db8d315347eb31aefb4f287da1813f'),
(35336, 1452521980, NULL, '70a655ba5e211361b1bf1da81afd162f79d2ecd5'),
(35338, 1470721138, NULL, '4dc2d4dbc5b0856faca28d83c248142b2a71796b');

-- --------------------------------------------------------

--
-- Структура таблицы `carts_items`
--

CREATE TABLE IF NOT EXISTS `carts_items` (
  `id` int(10) NOT NULL,
  `cart_id` int(10) NOT NULL,
  `catalog_id` int(10) NOT NULL,
  `count` int(6) DEFAULT NULL,
  `size_alias` varchar(255) DEFAULT NULL,
  `color_alias` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog`
--

CREATE TABLE IF NOT EXISTS `catalog` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int(10) NOT NULL DEFAULT '0',
  `alias` varchar(255) DEFAULT NULL,
  `parent_id` int(10) DEFAULT '0',
  `best_price` tinyint(1) NOT NULL DEFAULT '0',
  `sale` tinyint(1) NOT NULL DEFAULT '0',
  `top` tinyint(1) NOT NULL DEFAULT '0',
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `price` double(12,2) NOT NULL DEFAULT '0.00',
  `price_old` double(12,2) NOT NULL DEFAULT '0.00',
  `artikul` varchar(128) DEFAULT NULL,
  `views` int(10) NOT NULL DEFAULT '0',
  `brand_alias` varchar(255) DEFAULT NULL,
  `image` varchar(128) DEFAULT NULL,
  `video` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_colors`
--

CREATE TABLE IF NOT EXISTS `catalog_colors` (
  `id` int(10) unsigned NOT NULL,
  `color_alias` varchar(255) DEFAULT NULL,
  `catalog_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_i18n`
--

CREATE TABLE IF NOT EXISTS `catalog_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `keywords` text,
  `description` text,
  `text` text,
  `consists` varchar(255) DEFAULT NULL,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_images`
--

CREATE TABLE IF NOT EXISTS `catalog_images` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `sort` int(10) NOT NULL DEFAULT '0',
  `catalog_id` int(10) NOT NULL DEFAULT '0',
  `main` tinyint(1) NOT NULL DEFAULT '0',
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_related`
--

CREATE TABLE IF NOT EXISTS `catalog_related` (
  `id` int(10) NOT NULL,
  `who_id` int(10) NOT NULL,
  `with_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_returns`
--

CREATE TABLE IF NOT EXISTS `catalog_returns` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '0',
  `ip` varchar(255) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `catalog_id` int(10) DEFAULT NULL,
  `color_alias` varchar(255) DEFAULT NULL,
  `size_alias` varchar(255) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog_returns`
--

INSERT INTO `catalog_returns` (`id`, `created_at`, `updated_at`, `status`, `ip`, `user_id`, `email`, `catalog_id`, `color_alias`, `size_alias`, `language`) VALUES
(1, 1449600376, NULL, 1, '127.0.0.1', NULL, 'asdasdasd@szf.jhk', NULL, 'black-white-snowflakes', 's', 'en'),
(2, 1449600502, NULL, 1, '127.0.0.1', NULL, 'asd@sdf.fgh', NULL, 'black-white-snowflakes', 's', 'bg'),
(3, 1450104938, NULL, 1, '178.136.229.251', NULL, 'artemonenko.a.wezom@gmail.com', NULL, 'black-white-snowflakes', 'l', 'ru');

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_sizes`
--

CREATE TABLE IF NOT EXISTS `catalog_sizes` (
  `id` int(10) unsigned NOT NULL,
  `size_alias` varchar(255) DEFAULT NULL,
  `catalog_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_tree`
--

CREATE TABLE IF NOT EXISTS `catalog_tree` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int(10) NOT NULL DEFAULT '0',
  `alias` varchar(255) NOT NULL,
  `parent_id` int(10) NOT NULL DEFAULT '0',
  `image` varchar(64) DEFAULT NULL,
  `views` int(10) NOT NULL DEFAULT '0',
  `menu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog_tree`
--

INSERT INTO `catalog_tree` (`id`, `created_at`, `updated_at`, `status`, `sort`, `alias`, `parent_id`, `image`, `views`, `menu`) VALUES
(37, 1448219981, 1452588273, 1, 0, 'swimwear', 0, '8543ae8c2819cef5192ce081b771828b.jpg', 1385, '45e69e37786574c97128555a41fbe614.jpg'),
(38, 1448739968, 1452524091, 1, 1, 'bele', 0, '124a3bcae280c685c74e1b1cf332f4ab.jpg', 55, 'f1364efc35fd2593a39d6786fafff4f3.jpg'),
(39, 1448739982, 1452528910, 1, 3, 'odezhda', 0, '7a4386308b40243f55f5aea5f7cfc08b.jpg', 19, NULL),
(40, 1448739993, 1452262318, 1, 2, 'obuv', 0, 'dba667463a0aab1204ade0df33423d87.jpg', 20, NULL),
(41, 1448740003, 1452178344, 1, 4, 'kosmetika', 0, '70a985ada498852b8f6d879a395f6800.jpg', 12, NULL),
(42, 1448740015, 1452178344, 1, 5, 'aksessuary', 0, 'e426246047278482fe5b28f9c2863abd.jpg', 15, NULL),
(43, 1450095683, 1452242447, 1, 0, 'sport', 38, 'e429cc0a5422222885601527a8dc8366.jpg', 23, NULL),
(44, 1450095774, 1452242449, 1, 0, 'level2', 43, '0b32162619cb27eec9850d7bb8631283.jpg', 16, 'ed495fbfac41f48dcdf2ebb574b710d6.jpg'),
(45, 1450095868, 1452524093, 1, 1, 'level3', 38, '63e2cf3960e150046a74100ad9eaeb8a.jpg', 19, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `catalog_tree_i18n`
--

CREATE TABLE IF NOT EXISTS `catalog_tree_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `keywords` text,
  `description` text,
  `text` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `catalog_tree_i18n`
--

INSERT INTO `catalog_tree_i18n` (`id`, `name`, `h1`, `title`, `keywords`, `description`, `text`, `row_id`, `language`) VALUES
(37, 'Купальники', '', '', '', '', '<p style="margin-bottom: 25px; color: black; font-size: 24px; font-weight: bold; text-transform: uppercase;">Заголовок сео текста</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum excepturi veniam modi laborum sunt autem similique dicta quasi saepe voluptatibus ducimus, iusto, illum maxime labore, nesciunt obcaecati blanditiis neque nemo nulla reprehenderit error est ullam qui explicabo? Rerum quibusdam quasi quam temporibus numquam accusantium earum alias, iste veritatis optio.</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum excepturi veniam modi laborum sunt autem similique dicta quasi saepe voluptatibus ducimus, iusto, illum maxime labore, nesciunt obcaecati blanditiis neque nemo nulla reprehenderit error est ullam qui explicabo? Rerum quibusdam quasi quam temporibus numquam accusantium earum alias, iste veritatis optio.</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eum excepturi veniam modi laborum sunt autem similique dicta quasi saepe voluptatibus ducimus, iusto, illum maxime labore, nesciunt obcaecati blanditiis neque nemo nulla reprehenderit error est ullam qui explicabo? Rerum quibusdam quasi quam temporibus numquam accusantium earum alias, iste veritatis optio.</p>', 37, 'ru'),
(38, 'Swimwear', '', '', '', '', '', 37, 'en'),
(40, 'Белье', '', '', '', '', '', 38, 'ru'),
(41, ' Lingerie', '', '', '', '', '', 38, 'en'),
(43, 'Одежда', '', '', '', '', '', 39, 'ru'),
(44, 'Одежда', '', '', '', '', '', 39, 'en'),
(46, 'Обувь', '', '', '', '', '', 40, 'ru'),
(47, 'Обувь-1', '', '', '', '', '', 40, 'en'),
(49, 'Косметика', '', '', '', '', '', 41, 'ru'),
(50, 'Косметика', '', '', '', '', '', 41, 'en'),
(52, 'Аксессуары', '', '', '', '', '', 42, 'ru'),
(53, 'Аксессуары-en', '', '', '', '', '', 42, 'en'),
(55, 'спортивные', '', '', '', '', '<p>ntcn ntcnc ctads asd asd</p>', 43, 'ru'),
(56, 'sport', '', '', '', '', '', 43, 'en'),
(58, 'уровень2', '', '', '', '', '', 44, 'ru'),
(59, 'level2', '', '', '', '', '', 44, 'en'),
(61, 'уровень3', '', '', '', '', '', 45, 'ru'),
(62, 'level3', '', '', '', '', '', 45, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `alias` varchar(255) DEFAULT NULL,
  `date` int(10) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `views` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `created_at`, `updated_at`, `status`, `alias`, `date`, `image`, `views`) VALUES
(1, 1470904205, 1470945135, 1, NULL, NULL, NULL, 0),
(2, 1470904243, 1470904245, 1, NULL, NULL, NULL, 0),
(3, 1470904264, NULL, 1, NULL, NULL, NULL, 0),
(4, 1470904278, NULL, 1, NULL, NULL, NULL, 0),
(6, 1470991670, NULL, 1, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `category_i18n`
--

CREATE TABLE IF NOT EXISTS `category_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text` text,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `keywords` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `category_i18n`
--

INSERT INTO `category_i18n` (`id`, `name`, `text`, `h1`, `title`, `description`, `keywords`, `row_id`, `language`) VALUES
(1, 'Креативный дизайн', NULL, NULL, NULL, NULL, NULL, 1, 'ru'),
(2, 'Creative Design', NULL, NULL, NULL, NULL, NULL, 1, 'en'),
(3, 'Стратегия & Консалтинг', NULL, NULL, NULL, NULL, NULL, 2, 'ru'),
(4, 'Strategy & Consulting', NULL, NULL, NULL, NULL, NULL, 2, 'en'),
(5, 'Веб-разработка', NULL, NULL, NULL, NULL, NULL, 3, 'ru'),
(6, 'Web Development', NULL, NULL, NULL, NULL, NULL, 3, 'en'),
(7, 'Онлайн маркетинг', NULL, NULL, NULL, NULL, NULL, 4, 'ru'),
(8, 'Online Marketing', NULL, NULL, NULL, NULL, NULL, 4, 'en'),
(9, 'Категория', NULL, NULL, NULL, NULL, NULL, 5, 'ru'),
(10, 'Category', NULL, NULL, NULL, NULL, NULL, 5, 'en'),
(11, 'тест', NULL, NULL, NULL, NULL, NULL, 6, 'ru'),
(12, 'test', NULL, NULL, NULL, NULL, NULL, 6, 'en'),
(13, '555555555555555', NULL, NULL, NULL, NULL, NULL, 7, 'ru'),
(14, '5555555555', NULL, NULL, NULL, NULL, NULL, 7, 'en'),
(15, 'йцукен', NULL, NULL, NULL, NULL, NULL, 8, 'ru'),
(16, 'qwerty', NULL, NULL, NULL, NULL, NULL, 8, 'en'),
(17, 'qwerty', NULL, NULL, NULL, NULL, NULL, 9, 'ru'),
(18, 'qwertry', NULL, NULL, NULL, NULL, NULL, 9, 'en'),
(19, '789', NULL, NULL, NULL, NULL, NULL, 10, 'ru'),
(20, '78989', NULL, NULL, NULL, NULL, NULL, 10, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `certificates`
--

CREATE TABLE IF NOT EXISTS `certificates` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '0',
  `sort` int(10) unsigned DEFAULT '0',
  `price` double(12,2) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `image` varchar(128) DEFAULT NULL,
  `views` int(10) unsigned DEFAULT '0',
  `amount` double(12,2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `certificates`
--

INSERT INTO `certificates` (`id`, `created_at`, `updated_at`, `status`, `sort`, `price`, `alias`, `image`, `views`, `amount`) VALUES
(1, 1448215906, 1452587952, 1, 0, 250.00, 'gift-card-250', '7949c9b331ed1e8715c9e851448c739d.jpg', 69, 250.00),
(2, 1450178610, 1452528958, 1, 0, 500.00, 'dfsfdsfds-500', '5509b28b7f8a9b999db2178902b3a2ca.jpg', 24, 500.00);

-- --------------------------------------------------------

--
-- Структура таблицы `certificates_i18n`
--

CREATE TABLE IF NOT EXISTS `certificates_i18n` (
  `id` int(10) unsigned NOT NULL,
  `row_id` int(10) unsigned DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text` text,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `keywords` text
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `certificates_i18n`
--

INSERT INTO `certificates_i18n` (`id`, `row_id`, `language`, `name`, `text`, `h1`, `title`, `description`, `keywords`) VALUES
(1, 1, 'ru', 'Подарочная карта 250$', '', '', '', '', ''),
(2, 1, 'en', 'Gift card 250$', '', '', '', '', ''),
(4, 2, 'ru', 'dfsfdsfds 500$', '<p>sdfsdf sdf 500$</p>', '', '', '', ''),
(5, 2, 'en', 'dfsfdsfds 500$', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `colors`
--

CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  `sort` int(10) unsigned DEFAULT '0',
  `image` varchar(255) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `colors`
--

INSERT INTO `colors` (`id`, `created_at`, `updated_at`, `sort`, `image`, `alias`) VALUES
(1, 1448217684, 1448217748, 0, 'cd0191f4cbe05c33f1996b3f10583e1f.jpg', 'black-white-snowflakes'),
(2, 1448217744, 1448217855, 1, '76aa2f4491fa0642f535828297e82a7c.jpg', 'red-fair-isle'),
(3, 1450161724, NULL, 0, 'a848593ed7efbf6db190036d0808a350.jpg', 'tetris');

-- --------------------------------------------------------

--
-- Структура таблицы `colors_i18n`
--

CREATE TABLE IF NOT EXISTS `colors_i18n` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `row_id` int(10) unsigned DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `colors_i18n`
--

INSERT INTO `colors_i18n` (`id`, `name`, `row_id`, `language`) VALUES
(1, 'Черно-белые снежинки', 1, 'ru'),
(2, 'black / white snowflakes', 1, 'en'),
(4, 'Красно-белые полосы', 2, 'ru'),
(5, 'red fair isle', 2, 'en'),
(7, 'тетрис', 3, 'ru'),
(8, 'tetris', 3, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `config`
--

CREATE TABLE IF NOT EXISTS `config` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `zna` text,
  `updated_at` int(10) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `valid` tinyint(1) NOT NULL DEFAULT '1',
  `type` varchar(32) DEFAULT NULL,
  `values` text COMMENT 'Возможные значения в json массиве ключ => значение. Для селекта и радио',
  `group` varchar(128) DEFAULT NULL COMMENT 'Группа настроек'
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `config`
--

INSERT INTO `config` (`id`, `name`, `zna`, `updated_at`, `status`, `sort`, `key`, `valid`, `type`, `values`, `group`) VALUES
(1, 'E-Mail администратора сайта (отправитель по умолчанию)', 'wezom.studio@yandex.ru', 1434885560, 1, 1, 'admin_email', 1, 'input', NULL, 'mail'),
(9, 'Количество строк в админ-панели', '30', 1434885560, 1, 9, 'limit_backend', 1, 'input', NULL, 'basic'),
(19, 'Использовать СМТП', '0', 1434885560, 1, 3, 'smtp', 1, 'radio', '[{"key":"Да","value":1},{"key":"Нет","value":0}]', 'mail'),
(20, 'SMTP server', 'smtp.yandex.ru', 1434885560, 1, 4, 'host', 0, 'input', NULL, 'mail'),
(22, 'Логин', 'wezom.studio@yandex.ru', 1434885560, 1, 5, 'username', 0, 'input', NULL, 'mail'),
(23, 'Пароль', 'IOPiop22!', 1434885560, 1, 6, 'password', 0, 'password', NULL, 'mail'),
(24, 'Тип подключения', 'ssl', 1434885560, 1, 7, 'secure', 0, 'select', '[{"key":"TLS","value":"tls"},{"key":"SSL","value":"ssl"}]', 'mail'),
(25, 'Порт. Например 465 или 587. (587 по умолчанию)', '465', 1434885560, 1, 8, 'port', 0, 'input', NULL, 'mail'),
(26, 'Имя латинницей (отображается в заголовке письма)', 'Info', 1434885560, 1, 2, 'name', 1, 'input', NULL, 'mail'),
(27, 'Запаролить сайт', '1', 1434885560, 1, 0, 'auth', 1, 'radio', '[{"key":"Да","value":"1"},{"key":"Нет","value":"0"}]', 'security'),
(28, 'Логин', '1', 1434885560, 1, 2, 'username', 0, 'input', NULL, 'security'),
(29, 'Пароль', '1', 1434885560, 1, 3, 'password', 0, 'password', NULL, 'security'),
(30, 'Сократить CSS u JavaScript', '0', 1434885561, 0, 1, 'minify', 1, 'radio', '[{"key":"Да","value":"1"},{"key":"Нет","value":"0"}]', 'speed'),
(31, 'Сократить HTML', '0', 1434885561, 0, 2, 'compress', 1, 'radio', '[{"key":"Да","value":"1"},{"key":"Нет","value":"0"}]', 'speed'),
(32, 'Кеширование размера изображений', '0', 1434885561, 0, 3, 'cache_images', 1, 'select', '[{"key":"Выключить","value":"0"},{"key":"12 часов","value":"0.5"},{"key":"День","value":"1"},{"key":"3 дня","value":"3"},{"key":"Неделя","value":"7"},{"key":"2 недели","value":"14"},{"key":"Месяц","value":"30"},{"key":"Год","value":"365"}]', 'speed'),
(33, 'Facebook', 'https://www.facebook.com/', 1434885561, 1, 1, 'facebook', 0, 'input', NULL, 'socials'),
(34, 'Twitter.com', 'https://twitter.com/', 1434885561, 1, 2, 'twitter', 0, 'input', NULL, 'socials'),
(35, 'Youtube.com', 'https://www.youtube.com/', 1434885561, 1, 3, 'youtube', 0, 'input', NULL, 'socials'),
(36, 'Google Plus', 'https://plus.google.com/', 1434885561, 1, 4, 'google', 0, 'input', NULL, 'socials'),
(51, 'Копирайт сайта (RU)', '© 2016 Альфа-Мед Украина', NULL, 1, -1, 'copy-ru', 0, 'input', NULL, 'basic'),
(77, 'Текст на главной (RU)', '<p>Медицинское оборудование предназначено для неинвазивного комплексного биорезонансного обследования и лечения организма, а также для подбора лечения лекарственными препаратами</p>', 1434885560, 1, -1, 'description_ru', 1, 'tiny', NULL, 'index'),
(78, 'Текст на главной (SP)', '<p>Equipo m&eacute;dico est&aacute; dise&ntilde;ado para biorezonante no invasiva examen y el tratamiento del cuerpo integral, as&iacute; como para la selecci&oacute;n de medicamentos para el tratamiento</p>', 1434885560, 1, 1, 'description_sp', 1, 'tiny', NULL, 'index'),
(79, 'Текст на главной (FR)', '<p>L''&eacute;quipement m&eacute;dical est con&ccedil;u pour bior&eacute;sonnante non invasive d''examen et de traitement du corps global, ainsi que pour la s&eacute;lection de m&eacute;dicaments pour le traitement</p>', 1434885560, 1, 1, 'description_fr', 1, 'tiny', NULL, 'index'),
(80, 'Текст на главной (DE)', '<p>Medizinische Ger&auml;te ist f&uuml;r die nichtinvasive Bioresonanz umfassende Untersuchung und Behandlung des K&ouml;rpers entwickelt, sowie f&uuml;r die Auswahl der Behandlung Drogen</p>', 1434885560, 1, 1, 'description_de', 1, 'tiny', NULL, 'index'),
(81, 'Текст на главной (EN)', '<p>Medical equipment is designed for non-invasive bioresonance comprehensive examination and treatment of the body, as well as for the selection of treatment drugs</p>', 1434885560, 1, 1, 'description_en', 1, 'tiny', NULL, 'index'),
(82, 'Заголовок на главной (RU)', 'АПК Сенситив Имаго (HSC Sensitiv Imago)', 1434885560, 1, -3, 'title_ru', 1, 'input', NULL, 'index'),
(83, 'Заголовок на главной (EN)', 'APK Sensitive Imago (HSC Sensitiv Imago)', 1434885560, 1, -2, 'title_en', 1, 'input', NULL, 'index'),
(84, 'Заголовок на главной (SP)', 'APK Sensitive Imago (HSC Sensitiv Imago)', 1434885560, 1, -2, 'title_sp', 1, 'input', NULL, 'index'),
(85, 'Заголовок на главной (FR)', 'APK Sensitive Imago (HSC Sensitiv Imago)', 1434885560, 1, -2, 'title_fr', 1, 'input', NULL, 'index'),
(86, 'Заголовок на главной (DE)', 'APK Sensitive Imago (HSC Sensitiv Imago)', 1434885560, 1, -2, 'title_de', 1, 'input', NULL, 'index'),
(87, 'Верхний текст (DE)', '<p>Unsere Firma "Alfa-Med Ukraine"<br />Es ist die neueste Generation von medizinischen Ger&auml;ten</p>', 1434885560, 1, -1, 'top_de', 1, 'tiny', NULL, 'index'),
(88, 'Количество новостей на страницу', '4', 1434885560, 1, 9, 'limit_news', 1, 'input', NULL, 'basic'),
(89, 'Количество сотрудников на страницу', '4', 1434885560, 1, 9, 'limit_team', 1, 'input', NULL, 'basic'),
(90, 'Копирайт сайта (EN)', '© 2016 Alfa-Med Ukraine', NULL, 1, 0, 'copy-en', 0, 'input', NULL, 'basic'),
(91, 'Копирайт сайта (DE)', '© 2016 Alfa-Med Ukraine', NULL, 1, 0, 'copy-de', 0, 'input', NULL, 'basic'),
(92, 'Копирайт сайта (FR)', '© 2016 Alfa-Med Ukraine', NULL, 1, 0, 'copy-fr', 0, 'input', NULL, 'basic'),
(93, 'Копирайт сайта (SP)', '© 2016 Alfa-Med Ukraine', NULL, 1, 0, 'copy-sp', 0, 'input', NULL, 'basic'),
(94, 'Верхний текст (EN)', '<p>Our Company "Alfa-Med Ukraine"<br />It is the latest generation of medical equipment</p>', 1434885560, 1, -1, 'top_en', 1, 'tiny', NULL, 'index'),
(95, 'Верхний текст (SP)', '<p>Nuestra Empresa "Alfa-Med Ucrania"<br />Es la &uacute;ltima generaci&oacute;n de equipos m&eacute;dicos</p>', 1434885560, 1, -1, 'top_sp', 1, 'tiny', NULL, 'index'),
(96, 'Верхний текст (FR)', '<p>Notre soci&eacute;t&eacute; "Alfa-Med Ukraine"<br />Il est la derni&egrave;re g&eacute;n&eacute;ration de mat&eacute;riel m&eacute;dical</p>', 1434885560, 1, -1, 'top_fr', 1, 'tiny', NULL, 'index'),
(97, 'Верхний текст (RU)', '<p>Наша компания "Альфа-Мед Украина"<br /> представляет медицинское оборудование последнего поколения</p>', 1434885560, 1, -1, 'top_ru', 1, 'tiny', NULL, 'index');

-- --------------------------------------------------------

--
-- Структура таблицы `config_groups`
--

CREATE TABLE IF NOT EXISTS `config_groups` (
  `id` int(4) NOT NULL,
  `name` varchar(128) NOT NULL,
  `alias` varchar(128) NOT NULL,
  `side` varchar(16) NOT NULL DEFAULT 'left' COMMENT 'left, right',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `sort` int(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `config_groups`
--

INSERT INTO `config_groups` (`id`, `name`, `alias`, `side`, `status`, `sort`) VALUES
(1, 'Почта', 'mail', 'right', 1, 1),
(2, 'Базовые', 'basic', 'left', 1, 1),
(3, 'Статика', 'static', 'left', 1, 2),
(4, 'Соц. сети', 'socials', 'left', 1, 3),
(5, 'Безопасность', 'security', 'right', 1, 2),
(6, 'Быстродействие', 'speed', 'right', 1, 3),
(9, 'Главная', 'index', 'left', 1, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `config_types`
--

CREATE TABLE IF NOT EXISTS `config_types` (
  `id` int(4) NOT NULL,
  `name` varchar(128) NOT NULL,
  `alias` varchar(32) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `config_types`
--

INSERT INTO `config_types` (`id`, `name`, `alias`) VALUES
(1, 'Однострочное текстовое поле', 'input'),
(2, 'Текстовое поле', 'textarea'),
(3, 'Выбор значения из списка', 'select'),
(4, 'Пароль', 'password'),
(5, 'Радиокнопка', 'radio'),
(6, 'Текстовое поле с редактором', 'tiny'),
(7, 'Ссылка на контент и контрол', 'page'),
(8, 'Ссылка на группу товаров', 'groups');

-- --------------------------------------------------------

--
-- Структура таблицы `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `theme` text,
  `ip` varchar(16) DEFAULT NULL,
  `phone` varchar(150) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `contacts`
--

INSERT INTO `contacts` (`id`, `created_at`, `updated_at`, `status`, `name`, `email`, `theme`, `ip`, `phone`) VALUES
(1, 1471331835, NULL, 1, 'Имя', 'Mail@mail.ru', 'тест', '178.136.229.251', '+38(011)111-11-11'),
(2, 1471333736, 1471333943, 1, 'Тест', 'test@tt.tt', 'Тест', '178.136.229.251', '+38(213)217-38-28'),
(3, 1471336833, 1471336901, 1, 'Samsung', 'fffff@ffff.ff', 'Design', '178.136.229.251', '+38(095)773-19-61'),
(4, 1471337458, NULL, 1, 'Ipad', 'ipad@test.ipad', 'iPad', '178.136.229.251', '+38(095)773-19-61');

-- --------------------------------------------------------

--
-- Структура таблицы `contacts_emails`
--

CREATE TABLE IF NOT EXISTS `contacts_emails` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '0',
  `group` enum('0','1','2') DEFAULT '1',
  `name` varchar(128) DEFAULT NULL,
  `sort` int(10) unsigned DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `contacts_emails`
--

INSERT INTO `contacts_emails` (`id`, `created_at`, `updated_at`, `status`, `group`, `name`, `sort`) VALUES
(2, 1448206151, 1448206179, 0, '1', 'hd-moda@yandex.ru', 2),
(3, 1448206157, 1448206179, 1, '1', 'hd-moda@yandex.ru', 1),
(4, 1448206162, 1448206179, 1, '2', 'hd-moda@yandex.ru', 3),
(5, 1448206173, 1448206179, 1, '2', 'hdmoda2015@gmail.com', 4),
(6, 1448742702, NULL, 1, '0', 'hd-moda@yandex.ru', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `contacts_phones`
--

CREATE TABLE IF NOT EXISTS `contacts_phones` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '0',
  `group` enum('0','1','2') DEFAULT '1',
  `name` varchar(128) DEFAULT NULL,
  `sort` int(10) unsigned DEFAULT '0',
  `lang` varchar(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `contacts_phones`
--

INSERT INTO `contacts_phones` (`id`, `created_at`, `updated_at`, `status`, `group`, `name`, `sort`, `lang`) VALUES
(9, 1470769265, 1471352982, 1, '1', '(044) 287-87-11', 2, NULL),
(10, 1470769275, 1471334135, 1, '1', '(097) 287-87-11', 3, NULL),
(11, 1470769286, 1471334135, 1, '1', '(050) 287-87-11', 4, ''),
(12, 1470769464, 1471353980, 1, '0', '(044) 555-55-55', 1, 'ru'),
(15, 1471245176, 1471353229, 1, '0', '(044) 777-77-77', 0, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `content`
--

CREATE TABLE IF NOT EXISTS `content` (
  `id` int(10) NOT NULL,
  `alias` varchar(250) CHARACTER SET cp1251 DEFAULT NULL,
  `status` int(1) DEFAULT '1',
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `sort` int(11) DEFAULT '0',
  `parent_id` int(10) NOT NULL DEFAULT '0',
  `views` int(10) NOT NULL DEFAULT '0',
  `image_first` varchar(250) DEFAULT NULL,
  `image_second` varchar(250) DEFAULT NULL,
  `image_third` varchar(250) DEFAULT NULL,
  `image_four` varchar(250) DEFAULT NULL,
  `slider_first` varchar(150) DEFAULT NULL,
  `slider_second` varchar(150) DEFAULT NULL,
  `slider_third` varchar(150) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `content`
--

INSERT INTO `content` (`id`, `alias`, `status`, `created_at`, `updated_at`, `sort`, `parent_id`, `views`, `image_first`, `image_second`, `image_third`, `image_four`, `slider_first`, `slider_second`, `slider_third`) VALUES
(7, '', 0, 1470748118, 1471335766, 0, 0, 0, '44054a1ca161d3f4f62fe6ae1cd26ba5.jpg', '2eb8e31efd818abcac8b6cfcbdbbc7a7.jpg', 'c9d407036bccad07c2a6cb2344225a56.jpg', NULL, '5aeb8c24a0ff39e38cc94df4956bc966.jpg', 'fe3ceb295d2fb8c0633bb535274d0548.jpg', 'c6816c599ca2feaa024fac169d512d7d.jpg'),
(8, '5057', 1, 1470892598, 1471335896, 0, 0, 0, '0adca82feca8cfdfb1d06e1770f8b196.jpg', 'a9ef7e82404c101fdb593c572f1b9206.jpg', '542e71f293941ee4f63a3f3040aa0984.jpg', '128f274b1c960d868431eb8187d4fe8d.jpg', NULL, NULL, NULL),
(9, NULL, 0, 1471328063, 1471329607, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `content_i18n`
--

CREATE TABLE IF NOT EXISTS `content_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) CHARACTER SET cp1251 DEFAULT NULL,
  `title` varchar(255) CHARACTER SET cp1251 DEFAULT NULL,
  `description` text CHARACTER SET cp1251,
  `keywords` text CHARACTER SET cp1251,
  `text` text CHARACTER SET cp1251,
  `h1` varchar(250) CHARACTER SET cp1251 DEFAULT NULL,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `title_big` varchar(250) DEFAULT NULL,
  `slogan` varchar(250) DEFAULT NULL,
  `about_title` varchar(250) DEFAULT NULL,
  `now_title` varchar(250) DEFAULT NULL,
  `now_list` text,
  `beuseful_title` varchar(250) DEFAULT NULL,
  `beuseful_text` text,
  `beuseful_link` varchar(250) DEFAULT NULL,
  `beuseful_slider` text,
  `mission_title` varchar(250) DEFAULT NULL,
  `mission_text` text,
  `service_name_first` varchar(150) DEFAULT NULL,
  `service_name_second` varchar(150) DEFAULT NULL,
  `service_name_third` varchar(150) DEFAULT NULL,
  `service_name_four` varchar(150) DEFAULT NULL,
  `service_text_first` text,
  `service_text_second` text,
  `service_text_third` text,
  `service_text_four` text,
  `title_virtual` varchar(150) DEFAULT NULL,
  `text_virtual` text,
  `algoritm_title` varchar(150) DEFAULT NULL,
  `algoritm_first` varchar(150) DEFAULT NULL,
  `algoritm_second` varchar(150) DEFAULT NULL,
  `algoritm_third` varchar(150) DEFAULT NULL,
  `algoritm_four` varchar(150) DEFAULT NULL,
  `algoritm_five` varchar(150) DEFAULT NULL,
  `beuseful_text1` varchar(250) DEFAULT NULL,
  `beuseful_text2` varchar(250) DEFAULT NULL,
  `beuseful_text3` varchar(250) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `content_i18n`
--

INSERT INTO `content_i18n` (`id`, `name`, `title`, `description`, `keywords`, `text`, `h1`, `row_id`, `language`, `title_big`, `slogan`, `about_title`, `now_title`, `now_list`, `beuseful_title`, `beuseful_text`, `beuseful_link`, `beuseful_slider`, `mission_title`, `mission_text`, `service_name_first`, `service_name_second`, `service_name_third`, `service_name_four`, `service_text_first`, `service_text_second`, `service_text_third`, `service_text_four`, `title_virtual`, `text_virtual`, `algoritm_title`, `algoritm_first`, `algoritm_second`, `algoritm_third`, `algoritm_four`, `algoritm_five`, `beuseful_text1`, `beuseful_text2`, `beuseful_text3`) VALUES
(16, 'О компании ', NULL, NULL, NULL, '<p>Все началось с необходимости. Мы работали в компании, которая должна была стать лидером своего рынка в течении 2-х лет, в период сложных экономических и политических условий. Перед нами стояла задача обеспечения активных продаж в жатые сроки с довольно небольшим бюджетом на это и довольно ограниченным количеством специалистов. И как мы убедились, в таких условиях решающим моментом выступает внутренние истинное стремление человека к чему-то.</p>\r\n<p>Мы задали себе вопрос &laquo;Что делать?&raquo;. За которым последовали следующие &laquo;Что мы знаем о ситуации?&raquo;, &laquo;Как ее понять максимально быстро и четко?&raquo;, &laquo;Что нам в этом может помочь?&raquo;. По мере того, как мы находили ответы на одни вопросы и задавали новые, у нас рождались идеи как с наибольшей эффективностью можно решать поставленные задачи.</p>\r\n<p>Обороты компании росли. Она стала лидером своего рынка. Объемы работ становились все больше и больше. Специалистам, которые в одном лице выступали как генераторы идей, исполнители и аналитики не хватало 24 часов в сутках для реализации появляющихся идей. Мы начали искать людей, которые могли бы помочь нам в их реализации.</p>\r\n<p>Главным критерием являлось желание и стремление человека работать, создавать определенные вещи в соответствии с нашим отношением к работе и миру в целом. С ростом количества специалистов появлялись все новые и новые идеи. Не все подходили для нашей компании, но для других компаний в других ситуациях они бы были очень полезны и результативны. Так и появилась идея о создании the digital marketing and advertising company.</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', NULL, 7, 'ru', 'Цифровой маркетинг <br/> и рекламная компания.', 'Компания, объединяющая в себе творческих личностей, которым нравится заниматься своим делом. Мы убеждены, что созидательная сила движения заключается в понимании ситуации и соответствующем желании.', 'История компании', 'Сейчас Beatus это:', '<ul class="now_list">\r\n<li>мыслители</li>\r\n<li>визуализаторы</li>\r\n<li>исследователи</li>\r\n<li>слушатели</li>\r\n<li>производители</li>\r\n<li>исполнители</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<p style="padding-left: 30px;">находящиеся в постоянном движении вперед.</p>', 'Чем мы можем быть полезны?', 'Beatus меняет на 180 градусов сложные, вялотекущие ситуации своих клиентов уверенно, быстро и эффективно, делая клиентов счастливыми. ', 'Подробнее о наших услугах', '(если не знаете с чего начать)', 'В чем мы видим свою миссию?', '<p>Выступая связующим звеном между бизнесом, обществом и индивидуумом, мы способствуем пониманию друг друга и реализации каждого используя новейшие современные технологии и креативные подходы.</p>\r\n<p>Ведь именно взаимопонимание делает нашу жизнь легкой, приятной и гармоничной.</p>\r\n<p>&nbsp;</p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Меняем спад на рост', 'Подтолкнем вялотекущий тренд к активному росту', 'Вдохновим и побудим к действию'),
(17, 'About company ', NULL, NULL, NULL, '<p>It all started with the need. We have worked for a company that was to become the leader in its market for 2 years, during the period of difficult economic and political conditions. Our task was to ensure active sales in short&nbsp;timeline with a fairly small budget for this and quite a limited number of specialists. And as we have seen, in such circumstances, the decisive factor in favor domestic real human desire for something.</p>\r\n<p>We asked ourselves the question, "What should I do?". Followed by the following "What do we know about the situation?", "How to understand it quickly and clearly?", "What we can help with?". As soon as we find the answers to some questions and asking new, we have born the idea of ??how you can most effectively solve tasks.</p>\r\n<p>The company''s turnover grew. She became the leader of its market. The volume of work is becoming more and more. Professionals who in one person acted as generators of ideas, artists and analysts do not have enough hours in the day 24 for the implementation of emerging ideas. We began to look for people who could help us in implementing them.</p>\r\n<p>The main criterion was the desire and the desire of man to work, to create certain things in accordance with our attitude towards work and the world in general. With the growing number of specialists appear more and more new ideas. Not all are suitable for our company, but for other companies in other circumstances they would have been very useful and effective. So the idea to the creation of the digital marketing and advertising company.</p>', NULL, 7, 'en', 'Digital marketing <br/> and advertising company', 'The company combines creative people who like to do their work. We are convinced that the creative power of the movement is to understand the situation and the corresponding desire. ', 'history of the company', 'Now, Beatus this:', '<ul class="now_list">\r\n<li>thinkers</li>\r\n<li>visualizers</li>\r\n<li>researchers</li>\r\n<li>audience</li>\r\n<li>producers</li>\r\n<li>artists</li>\r\n</ul>\r\n<p>Are in constant movement forward.</p>', 'How can we be helpful?', 'Beatus changes 180 degrees complicated, sluggish situation of their customers confidently, quickly and efficiently, making customers happy.', 'Learn more about our services', '(If you do not know where to start)', 'What we see our mission?', '<p>Acting as a link between business, society and the individual we contribute to the understanding of each other and each implementation using the latest modern technology and creative approaches.</p>\r\n<p>After all, understanding makes our life easier, more pleasant and harmonious.</p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Change the decline in growth', 'Push the sluggish trend of active growth', 'Inspire and motivate to action'),
(18, 'Наши услуги', NULL, NULL, NULL, '<p>Нам нравится делиться с Вами нашими идеями и видеть, как они помогают воплощению в жизнь ваших задач. Мы не ждем каких-либо условий. Мы обладаем созидательной силой, находясь в постоянном творческом процессе используя новейшие технологии.</p>', NULL, 8, 'ru', 'Наши компетенции', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Стратегия & Консалтинг', 'Креативный дизайн', 'Веб-разработка', 'Интернет-маркетинг', '<p><strong>1. Информированность и креативность &ndash; залог успешного движения вперед, которому мы с радостью способствуем.</strong></p>\r\n<p>Именно поэтому мы представляем комплексные услуги и уделяем должное внимание оценке эффективности каждого этапа деятельности, рекламной компании. Мы показываем какой именно рекламный ход дал наилучший результат, т.е. привел продажу, и наоборот.</p>\r\n<p>Отслеживая всю эту цепочку, используя новейшие технологии, расширяются возможности оценки эффективности работы менеджеров и других коррелирующих процессов. Все удачные рекламные кампании и клиенты, которые появились в результате рекламы, записываются в систему в таком виде, что появляется возможность загрузить ее в Оптимизатор конверсий google adwords. Это позволяет привести еще больше целевой аудитории на сайт или в отдел продаж.</p>', '<p><strong>2. Информированность и креативность &ndash; залог успешного движения вперед, которому мы с радостью способствуем.</strong></p>\r\n<p>Именно поэтому, мы представляем комплексные услуги и уделяем должное внимание оценке эффективности каждого этапа деятельности, рекламной компании. Мы показываем какой именно рекламный ход дал наилучший результат, т.е. привел продажу, и наоборот.</p>\r\n<p>Отслеживая всю эту цепочку, используя новейшие технологии, расширяются возможности оценки эффективности работы менеджеров и других коррелирующих процессов. Все удачные рекламные кампании и клиенты, которые появились в результате рекламы, записываются в систему в таком виде, что появляется возможность загрузить ее в Оптимизатор конверсий google adwords. Это позволяет привести еще больше целевой аудитории на сайт или в отдел продаж.</p>', '<p><strong>3. Информированность и креативность &ndash; залог успешного движения вперед, которому мы с радостью способствуем.</strong></p>\r\n<p>Именно поэтому, мы представляем комплексные услуги и уделяем должное внимание оценке эффективности каждого этапа деятельности, рекламной компании. Мы показываем какой именно рекламный ход дал наилучший результат, т.е. привел продажу, и наоборот.</p>\r\n<p>Отслеживая всю эту цепочку, используя новейшие технологии, расширяются возможности оценки эффективности работы менеджеров и других коррелирующих процессов. Все удачные рекламные кампании и клиенты, которые появились в результате рекламы, записываются в систему в таком виде, что появляется возможность загрузить ее в Оптимизатор конверсий google adwords. Это позволяет привести еще больше целевой аудитории на сайт или в отдел продаж.</p>', '<p><strong>4. Информированность и креативность &ndash; залог успешного движения вперед, которому мы с радостью способствуем.</strong></p>\r\n<p>Именно поэтому, мы представляем комплексные услуги и уделяем должное внимание оценке эффективности каждого этапа деятельности, рекламной компании. Мы показываем какой именно рекламный ход дал наилучший результат, т.е. привел продажу, и наоборот.</p>\r\n<p>Отслеживая всю эту цепочку, используя новейшие технологии, расширяются возможности оценки эффективности работы менеджеров и других коррелирующих процессов. Все удачные рекламные кампании и клиенты, которые появились в результате рекламы, записываются в систему в таком виде, что появляется возможность загрузить ее в Оптимизатор конверсий google adwords. Это позволяет привести еще больше целевой аудитории на сайт или в отдел продаж.</p>', 'Виртуализация в сфере строительства', '<p>При помощи новейших технологий мы даем полное ощущение присутствия в местах, которые находятся далеко или просто пока не существуют. Наша цель дать полное ощущение контакта человека и обьекта. Начиная от виртуализации помещений, в которых Вы легко сможете изменять интерьер, заканчивая дополнительной реальностью, когда на участке&nbsp;участка под застройку Вы сможете наблюдать уже готовый дом со всей его инфраструктурой.</p>\r\n<p>Вы будете&nbsp;свободно перемещаться по окружающей территории&nbsp;и Сами изучить ее. Это позволяет получить ответы на все интересующие вопросы, возникающие при принятии решения. И все это можно узнать и прочувствовать, не выходя из дома или офиса.</p>', 'Алгоритм нашей работы', '<span>Мы слушатели:</span> Вы рассказываете о том, чего хотите или не хотите', '<span>Мы исследователи:</span> изучаем рынок и компанию', '<span>Мы креативные мыслители:</span> находим не стандартные лучшие решения', '<span>Мы визуализаторы:</span> создаем пространство, перемещаем во времени', '<span>Мы производители и исполнители:</span> воплощаем разработанную концепцию, сопровождаем ее поддержку', '', '', ''),
(19, 'Services', NULL, NULL, NULL, '<p>We like to share with you our ideas and see how they help translate into reality your needs. We do not expect any conditions. We have a creative force in constant creative process using the latest technology.</p>', NULL, 8, 'en', 'Our competence', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Strategy & Consulting', 'Creative Design', 'Web Development', 'Online Marketing', '<p><strong>awareness and creativity - the key to successful progress, which we are pleased to contribute</strong></p>\r\n<p>For this reason, we present a comprehensive service and attention to evaluating the effectiveness of each stage of the activity, the advertising company. We show what kind of publicity stunt gave the best results, ie, led sale, and vice versa.</p>\r\n<p>By tracking this whole chain, using the latest technology, expanding possibilities for evaluating the performance of managers and other correlated processes. Also, all the successful advertising campaigns and clients, which appeared as a result of advertising, are recorded in the system in such a way that it is possible to download it in the Conversion Optimizer google adwords. This allows you to bring more targeted audience to your website or sales.</p>', '<p><strong>2awareness and creativity - the key to successful progress, which we are pleased to contribute</strong></p>\r\n<p>For this reason, we present a comprehensive service and attention to evaluating the effectiveness of each stage of the activity, the advertising company. We show what kind of publicity stunt gave the best results, ie, led sale, and vice versa.</p>\r\n<p>By tracking this whole chain, using the latest technology, expanding possibilities for evaluating the performance of managers and other correlated processes. Also, all the successful advertising campaigns and clients, which appeared as a result of advertising, are recorded in the system in such a way that it is possible to download it in the Conversion Optimizer google adwords. This allows you to bring more targeted audience to your website or sales.</p>', '<p><strong>3awareness and creativity - the key to successful progress, which we are pleased to contribute</strong></p>\r\n<p>For this reason, we present a comprehensive service and attention to evaluating the effectiveness of each stage of the activity, the advertising company. We show what kind of publicity stunt gave the best results, ie, led sale, and vice versa.</p>\r\n<p>By tracking this whole chain, using the latest technology, expanding possibilities for evaluating the performance of managers and other correlated processes. Also, all the successful advertising campaigns and clients, which appeared as a result of advertising, are recorded in the system in such a way that it is possible to download it in the Conversion Optimizer google adwords. This allows you to bring more targeted audience to your website or sales.</p>', '<p><strong>4awareness and creativity - the key to successful progress, which we are pleased to contribute</strong></p>\r\n<p>For this reason, we present a comprehensive service and attention to evaluating the effectiveness of each stage of the activity, the advertising company. We show what kind of publicity stunt gave the best results, ie, led sale, and vice versa.</p>\r\n<p>By tracking this whole chain, using the latest technology, expanding possibilities for evaluating the performance of managers and other correlated processes. Also, all the successful advertising campaigns and clients, which appeared as a result of advertising, are recorded in the system in such a way that it is possible to download it in the Conversion Optimizer google adwords. This allows you to bring more targeted audience to your website or sales.</p>', 'Virtualization in the construction industry', '<p>We give a full sense of presence in places that are far away or simply do not exist using the latest technologies. Our goal is to give a complete feeling of being in the right places. Starting from the virtualization space, where you can easily change the interior, finishing with more reality, when in place building plot you will be able to watch the finished house with all its infrastructure.</p>\r\n<p>Also, you will be able to move freely around the surrounding area and explore it for yourself. This allows you to get answers to all the questions that arise when making a decision. And all this you can learn and feel the comfort of home or office.</p>', 'The algorithm of our work', '<span>We listeners</span> you talk about what you want or do not want', '<span>We are researchers</span> are studying the market and company', '<span>We are creative thinkers</span> to find creative solutions best', '<span>We are visualizers</span> are creating space, moving in time', '<span>We are the producers and performers</span> embody the concept developed, accompanied by its support', '', '', ''),
(20, 'Тест', NULL, NULL, NULL, '<p>QWERTY</p>', NULL, 9, 'ru', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'TEst', NULL, NULL, NULL, '<p>QWERTY</p>', NULL, 9, 'en', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `control`
--

CREATE TABLE IF NOT EXISTS `control` (
  `id` int(10) NOT NULL,
  `alias` varchar(32) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `other` text,
  `sort` int(10) unsigned NOT NULL DEFAULT '0',
  `sitemap` tinyint(1) unsigned DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `control`
--

INSERT INTO `control` (`id`, `alias`, `status`, `other`, `sort`, `sitemap`) VALUES
(1, 'index', 1, NULL, 1, 1),
(2, 'news', 1, NULL, 2, 1),
(3, 'contacts', 1, '{"longitude":"","latitude":"","text":""}', 3, 1),
(4, 'team', 1, NULL, 4, 1),
(5, 'reviews', 1, NULL, 5, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `control_i18n`
--

CREATE TABLE IF NOT EXISTS `control_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `keywords` text,
  `description` text,
  `text` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `control_i18n`
--

INSERT INTO `control_i18n` (`id`, `name`, `h1`, `title`, `keywords`, `description`, `text`, `row_id`, `language`) VALUES
(1, 'Sensitive - Imago - Главная страница', 'Sensitive - Imago - Главная страница h1', 'Sensitive - Imago - Главная страница title', 'Sensitive - Imago - Главная страница keywords', 'Sensitive - Imago - Главная страница description', '<div id="conteiner">\r\n<div class="site_size2">\r\n<article class="content">\r\n<h1>Женская брендовая одежда</h1>\r\n<p>Для настоящей женщины всегда важен ее внешний вид. Сложно переоценить роль красивой одежды в формировании собственного неповторимого стиля и ярких ежедневных образов. Каждая женщина по-своему подчеркивает природное обаяния, шарм, индивидуальность, но есть один маленький секрет, который объединяет миллионы модниц со всего мира - Victoria''s Secret. Одежда, купальники, белье от этой легендарной марки &ndash; воплощение истинной женственности, элегантности, изысканной сексуальности. Бренды Victoria''s Secret и H&amp;M завоевали такую популярность благодаря отменному качеству и неповторимому проработанному дизайну каждой модели.</p>\r\n<p>Интернет-магазин H&amp;D не отстает от мировых тенденций fashion-индустрии и предлагает своим клиенткам купить женскую брендовую одежду актуального фасона и кроя. Новинки из последних коллекций H&amp;M и Victoria''s Secret обязательно удивят своим разнообразием и покорят красотой. Майки, туники, белье, повседневная, праздничная, спортивная одежда Deluxe качества позволят почувствовать себя привлекательной, отразят естественную красоту и подчеркнут все достоинства фигуры. Еще одним преимуществом, располагающим купить женскую брендовую одежду является её эксклюзивность, в одежде от Victoria''s Secret и H&amp;M сложно остаться незамеченной.</p>\r\n<h2>Почему стоит покупать именно брендовые вещи?</h2>\r\n<p>В первую очередь, конечно же, из-за высочайшего качества. Приобретая одежду от известных производителей, можно быть уверенной, что носить её можно будет до тех пор, пока она просто не надоест или её не вытеснят более актуальные новинки сезона. Клиентки, уже успевшие купить женскую брендовую одежду в онлайн магазине H&amp;D, также отмечают её комфорт. Кроме того, бренд &ndash; это:</p>\r\n<ul>\r\n<li>Изюминка. Каждая коллекция от торговой марки &ndash; это нечто абсолютно новое, непохожее на остальные предложения, яркое и актуальное;</li>\r\n<li>Неповторимость. Если вы желаете купить женскую брендовую одежду, то можете быть уверенны &ndash; вряд ли в своем городе вы встретите кого-то еще в подобной вещи;</li>\r\n<li>Приятные, натуральные высококлассные ткани. Использование уникальных материалов увеличивает срок носки изделий;</li>\r\n<li>Актуальность. Выбирая бренд, невозможно прогадать с модными тенденциями и оказаться одетой в вещи &laquo;вчерашнего дня&raquo;;</li>\r\n<li>Безупречность кроя, специфический дизайн, отражающий модную позицию бренда в текущем сезоне.</li>\r\n</ul>\r\n<p>В ассортименте нашего каталога представлены только оригинальные вещи. Поставки происходят непосредственно из США, что делает вещи еще более привлекательными. Если Вы желаете купить женскую брендовую одежду, которая не представлена в каталоге, мы доставим вам товар с официального сайта бренда в максимально быстрые сроки.</p>\r\n<p>Почувствуйте преимущества онлайн шопинга: удобные каталоги качественно заменяют модные шоу-румы, в интернет магазине можно проводить сколь угодно много времени, оплачивать покупки можно не выходя из дома, доставка происходит быстро.</p>\r\n<p>Одежда Victoria''s Secret и H&amp;M &ndash; роскошь, доступная Вам в интернет-магазине H&amp;D.</p>\r\n</article>\r\n</div>\r\n</div>', 1, 'ru'),
(17, 'Sensitive - Imago - Main page', 'Sensitive - Imago - Main page h1', 'Sensitive - Imago - Main page title', 'Sensitive - Imago - Main page keywords', 'Sensitive - Imago - Main page description', '<p><strong>Использовать все виды списков</strong></p>\r\n<ul>\r\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n<li>Etiam id leo at eros tempor aliquet nec vitae mi.</li>\r\n<li>Sed vel leo quis est dictum egestas.</li>\r\n<li>Morbi ac orci at ex pharetra finibus vitae in sem.</li>\r\n<li>Sed et odio ac velit euismod varius vitae in ligula.</li>\r\n</ul>\r\n<ol>\r\n<li>Curabitur vehicula arcu elementum ultrices convallis.</li>\r\n<li>Curabitur at massa ultrices, sollicitudin ipsum eu, tincidunt sem.</li>\r\n<li>Praesent iaculis nibh quis lectus egestas porta.</li>\r\n<li>Sed condimentum felis tristique elit ultrices, vel pulvinar nisl mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<ul>\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul style="list-style-type: circle;">\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul style="list-style-type: square;">\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ul>\r\n<p><strong>Выравнивание</strong> <strong>по</strong> <strong>левому</strong> <strong>краю</strong></p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus lorem. Vivamus sed metus aliquet, tempor turpis sit amet, volutpat risus. Fusce magna neque, pellentesque vitae purus vel, pellentesque maximus ante. Vivamus diam lectus, lobortis nec ipsum quis, laoreet semper odio. Nam consectetur nisi turpis, ut pulvinar justo aliquam vitae. Fusce egestas eros sodales, aliquam erat sed, vulputate massa. Mauris eu dolor vitae dui tempus semper. Cras elementum, nibh vel scelerisque dignissim, metus orci malesuada tellus, maximus eleifend urna libero quis ipsum. Ut ex lectus, scelerisque sed cursus nec, ullamcorper ut elit.</p>\r\n<p><strong>Выравнивание по левому правому краю</strong></p>\r\n<p style="text-align: right;">Cras imperdiet dolor eu vestibulum congue. Proin suscipit fermentum ex, quis tempor est cursus non. Nullam suscipit augue dui. Ut molestie interdum tortor maximus commodo. Vestibulum non est volutpat, molestie mauris in, feugiat est. Donec consequat ligula sed egestas pretium. Nam ac mauris rhoncus, lobortis dui non, molestie leo. Quisque pretium sed metus sed tristique. Fusce a nibh eu justo pharetra blandit. Nullam id risus erat. Aenean malesuada quam ut est auctor, vitae ullamcorper velit congue. In in placerat tellus. Duis sit amet dui id purus porta ornare non ac erat. Aenean dapibus arcu elit, tempor gravida arcu blandit eu.</p>\r\n<p><strong>Выравнивание</strong> <strong>по</strong> <strong>центру</strong></p>\r\n<p style="text-align: center;">Sed tempor, ante vitae faucibus feugiat, felis magna pretium nisl, ac pellentesque mi mi id augue. Aliquam a mauris lobortis, congue odio ac, dictum quam. Suspendisse tempus orci ut molestie cursus. Etiam consectetur vehicula ipsum, et sodales nisl. Vestibulum id aliquam libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut leo in neque pharetra iaculis.</p>\r\n<p><strong>Выравнивание</strong> <strong>по</strong> <strong>ширине</strong></p>\r\n<p style="text-align: justify;">Donec quis fermentum risus. Aliquam efficitur aliquam urna, vitae ornare purus feugiat non. Nam laoreet, velit at porta aliquam, dolor sem pretium nulla, vel sagittis sapien ante eget sapien. Sed est elit, lacinia et urna vel, venenatis vestibulum tortor. Duis ac tincidunt dolor. Pellentesque lacinia hendrerit urna sit amet lobortis. Suspendisse potenti. Vivamus eu sapien sollicitudin, elementum turpis efficitur, feugiat sapien. Nulla congue rutrum nisl. Quisque pretium facilisis ligula eu tincidunt. Donec posuere lorem eu est mattis commodo. Suspendisse pretium nibh nec convallis vehicula. Cras ac suscipit mi, vitae laoreet mauris. Aliquam erat volutpat. Quisque scelerisque nunc ut congue scelerisque.</p>\r\n<p><strong>Добавить ссылку &ndash; одна открывается в текущем окне, одна в соседнем </strong></p>\r\n<p><a href="http://uk.lipsum.com/">Proin justo nisl, faucibus</a> nec dignissim a, tincidunt at lorem. Vivamus ligula arcu, faucibus a ex et, viverra molestie velit. Donec ut justo arcu. Integer a lorem ut massa mattis vestibulum. Fusce in lacus eget dolor finibus vestibulum. Vestibulum lobortis placerat felis non feugiat. Sed eu risus non nisi iaculis elementum. <a href="https://google.com/">Etiam eu eros eget</a> ante cursus laoreet in ut nisi. Phasellus porta, est vitae accumsan dictum, erat nibh bibendum tellus, id suscipit elit mauris nec felis. Nunc in sodales erat, in scelerisque sapien. Aenean rutrum ligula leo, nec fringilla mi consectetur a. Quisque molestie nulla sit amet nibh dictum maximus.</p>\r\n<p><a href="http://beatus.wezom.ks.ua/">http://beatus.wezom.ks.ua/</a></p>\r\n<p><a title="123" href="http://beatus.wezom.ks.ua/">http://beatus.wezom.ks.ua/</a></p>\r\n<p><a href="http://beatus.wezom.ks.ua/">123</a></p>\r\n<p><a title="123" href="http://beatus.wezom.ks.ua/">123</a></p>\r\n<p>&nbsp;</p>\r\n<p><a href="http://beatus.wezom.ks.ua/" target="_blank">http://beatus.wezom.ks.ua/</a></p>\r\n<p><a title="123" href="http://beatus.wezom.ks.ua/" target="_blank">http://beatus.wezom.ks.ua/</a></p>\r\n<p><a href="http://beatus.wezom.ks.ua/" target="_blank">123</a></p>\r\n<p><a title="123" href="http://beatus.wezom.ks.ua/" target="_blank">123</a></p>\r\n<p><strong>Изменить форматирование &ndash; размер, цвет, фон, формат, начертание шрифта (все возможные варианты редактора)</strong></p>\r\n<p><strong>Nunc ac massa sit amet erat dignissim tristique. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lorem justo, vestibulum quis posuere blandit, </strong>volutpat <em>vitae tellus. Sed blandit tortor vitae libero porttitor, eu vehicula odio dapibus. Quisque rhoncus facilisis vulputate. Etiam mi sem, placerat ut erat non, accumsan dignissim magna. Nullam tempor eleifend erat eu placerat. Nulla suscipit nunc sed</em> tortor sodales sodales. Suspendisse porta placerat tellus, eget luctus arcu blandit at. Suspendisse imperdiet, sapien ac hendrerit laoreet, mauris tortor porttitor augue, pellentesque mattis nisi nulla eu urna. Donec dictum sed velit id tristique. Vivamus sit amet eleifend ex. Quisque ullamcorper rhoncus congue.</p>\r\n<p>Duis imperdiet neque velit, vel tempor dui volutpat sit amet. Sed laoreet quam vitae sem vulputate vulputate sed et metus. Phasellus nec eros rhoncus, semper tortor nec, rutrum justo. Donec in lectus ullamcorper, aliquam nibh vitae, commodo augue. Duis eget lorem ac purus venenatis eleifend. Phasellus finibus magna at ante volutpat, vel porttitor ante gravida. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\r\n<table width="717">\r\n<tbody>\r\n<tr>\r\n<td width="33">\r\n<p>№</p>\r\n</td>\r\n<td width="110">\r\n<p>1</p>\r\n</td>\r\n<td width="58">\r\n<p>2</p>\r\n</td>\r\n<td width="60">\r\n<p>3</p>\r\n</td>\r\n<td width="80">\r\n<p>4</p>\r\n</td>\r\n<td width="86">\r\n<p>5</p>\r\n</td>\r\n<td width="67">\r\n<p>6</p>\r\n</td>\r\n<td width="80">\r\n<p>7</p>\r\n</td>\r\n<td width="72">\r\n<p>8</p>\r\n</td>\r\n<td width="72">\r\n<p>9</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td width="33">\r\n<p>1</p>\r\n</td>\r\n<td width="110">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td width="58">\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td width="60">\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td width="80">\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td width="86">\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td width="67">\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td width="80">\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n<p>&nbsp;</p>\r\n</td>\r\n<td width="72">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td width="72">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td width="33">\r\n<p>2.</p>\r\n</td>\r\n<td width="110">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td width="58">\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td width="60">\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td width="80">\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td width="86">\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td width="67">\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td width="80">\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n<p>&nbsp;</p>\r\n</td>\r\n<td width="72">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td width="72">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td width="33">\r\n<p>3.</p>\r\n</td>\r\n<td width="110">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td width="58">\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td width="60">\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td width="80">\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td width="86">\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td width="67">\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td width="80">\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n<p>&nbsp;</p>\r\n</td>\r\n<td width="72">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td width="72">\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>', 1, 'en'),
(18, 'Sensitive - Imago - Hauptseite', 'Sensitive - Imago - Hauptseite - h1', 'Sensitive - Imago - Hauptseite - title', 'Sensitive - Imago - Hauptseite - keywords', 'Sensitive - Imago - Hauptseite - description', NULL, 1, 'de'),
(19, 'Sensitive - Imago - Casa', 'Sensitive - Imago - Casa - h1', 'Sensitive - Imago - Casa - title', 'Sensitive - Imago - Casa - keywords', 'Sensitive - Imago - Casa - description', NULL, 1, 'sp'),
(20, 'Sensitive - Imago - Maison', 'Sensitive - Imago - Maison h1', 'Sensitive - Imago - Maison title', 'Sensitive - Imago - Maison keywords', 'Sensitive - Imago - Maison description', NULL, 1, 'fr'),
(21, 'Новости', 'Новости - h1', 'Новости - title', 'Новости - keywords', 'Новости - description', '<div id="conteiner">\r\n<div class="site_size2">\r\n<article class="content">\r\n<h1>Женская брендовая одежда</h1>\r\n<p>Для настоящей женщины всегда важен ее внешний вид. Сложно переоценить роль красивой одежды в формировании собственного неповторимого стиля и ярких ежедневных образов. Каждая женщина по-своему подчеркивает природное обаяния, шарм, индивидуальность, но есть один маленький секрет, который объединяет миллионы модниц со всего мира - Victoria''s Secret. Одежда, купальники, белье от этой легендарной марки &ndash; воплощение истинной женственности, элегантности, изысканной сексуальности. Бренды Victoria''s Secret и H&amp;M завоевали такую популярность благодаря отменному качеству и неповторимому проработанному дизайну каждой модели.</p>\r\n<p>Интернет-магазин H&amp;D не отстает от мировых тенденций fashion-индустрии и предлагает своим клиенткам купить женскую брендовую одежду актуального фасона и кроя. Новинки из последних коллекций H&amp;M и Victoria''s Secret обязательно удивят своим разнообразием и покорят красотой. Майки, туники, белье, повседневная, праздничная, спортивная одежда Deluxe качества позволят почувствовать себя привлекательной, отразят естественную красоту и подчеркнут все достоинства фигуры. Еще одним преимуществом, располагающим купить женскую брендовую одежду является её эксклюзивность, в одежде от Victoria''s Secret и H&amp;M сложно остаться незамеченной.</p>\r\n<h2>Почему стоит покупать именно брендовые вещи?</h2>\r\n<p>В первую очередь, конечно же, из-за высочайшего качества. Приобретая одежду от известных производителей, можно быть уверенной, что носить её можно будет до тех пор, пока она просто не надоест или её не вытеснят более актуальные новинки сезона. Клиентки, уже успевшие купить женскую брендовую одежду в онлайн магазине H&amp;D, также отмечают её комфорт. Кроме того, бренд &ndash; это:</p>\r\n<ul>\r\n<li>Изюминка. Каждая коллекция от торговой марки &ndash; это нечто абсолютно новое, непохожее на остальные предложения, яркое и актуальное;</li>\r\n<li>Неповторимость. Если вы желаете купить женскую брендовую одежду, то можете быть уверенны &ndash; вряд ли в своем городе вы встретите кого-то еще в подобной вещи;</li>\r\n<li>Приятные, натуральные высококлассные ткани. Использование уникальных материалов увеличивает срок носки изделий;</li>\r\n<li>Актуальность. Выбирая бренд, невозможно прогадать с модными тенденциями и оказаться одетой в вещи &laquo;вчерашнего дня&raquo;;</li>\r\n<li>Безупречность кроя, специфический дизайн, отражающий модную позицию бренда в текущем сезоне.</li>\r\n</ul>\r\n<p>В ассортименте нашего каталога представлены только оригинальные вещи. Поставки происходят непосредственно из США, что делает вещи еще более привлекательными. Если Вы желаете купить женскую брендовую одежду, которая не представлена в каталоге, мы доставим вам товар с официального сайта бренда в максимально быстрые сроки.</p>\r\n<p>Почувствуйте преимущества онлайн шопинга: удобные каталоги качественно заменяют модные шоу-румы, в интернет магазине можно проводить сколь угодно много времени, оплачивать покупки можно не выходя из дома, доставка происходит быстро.</p>\r\n<p>Одежда Victoria''s Secret и H&amp;M &ndash; роскошь, доступная Вам в интернет-магазине H&amp;D.</p>\r\n</article>\r\n</div>\r\n</div>', 2, 'ru'),
(22, 'News', 'News - h1', 'News - title', 'News - keywords', 'News - description', NULL, 2, 'en'),
(23, 'Nachrichten', 'Nachrichten - h1', 'Nachrichten - title', 'Nachrichten - keywords', 'Nachrichten - description', NULL, 2, 'de'),
(24, 'Noticias', 'Noticias - h1', 'Noticias - title', 'Noticias - keywords', 'Noticias - description', NULL, 2, 'sp'),
(25, 'Nouvelles', 'Nouvelles - h1', 'Nouvelles - title', 'Nouvelles - keywords', 'Nouvelles - description', NULL, 2, 'fr'),
(26, 'Контакты', 'Контакты - h1', 'Контакты - title', 'Контакты - keywords', 'Контакты - description', NULL, 3, 'ru'),
(27, 'Сontacts', 'Сontacts - h1', 'Сontacts - title', 'Сontacts - keywords', 'Сontacts - keywords', NULL, 3, 'en'),
(28, 'Kontakte', 'Kontakte - h1', 'Kontakte - title', 'Kontakte - keywords', 'Kontakte - description', NULL, 3, 'de'),
(29, 'Сontactos', 'Сontactos - h1', 'Сontactos - title', 'Сontactos - keywords', 'Сontactos - description', NULL, 3, 'sp'),
(30, 'Сontacts', 'Сontacts - h1', 'Сontacts - title', 'Сontacts - keywords', 'Сontacts - keywords', NULL, 3, 'fr'),
(31, 'Наша команда', 'Наша команда - h1', 'Наша команда - title', 'Наша команда - keywords', 'Наша команда - keywords', NULL, 4, 'ru'),
(32, 'Our team', 'Our team - h1', 'Our team - title', 'Our team - keywords', 'Our team - description', NULL, 4, 'en'),
(33, 'Unser Team', 'Unser Team - h1', 'Unser Team - title', 'Unser Team - keywords', 'Unser Team - description', NULL, 4, 'de'),
(34, 'Nuestro equipo', 'Nuestro equipo - h1', 'Nuestro equipo - title', 'Nuestro equipo - keywords', 'Nuestro equipo - description', NULL, 4, 'sp'),
(35, 'Notre équipe', 'Notre équipe - h1', 'Notre équipe - title', 'Notre équipe - keywords', 'Notre équipe - description', NULL, 4, 'fr'),
(36, 'Отзывы', 'Отзывы - h1', 'Отзывы - title', 'Отзывы - keywords', 'Отзывы - description', NULL, 5, 'ru');

-- --------------------------------------------------------

--
-- Структура таблицы `country_ems`
--

CREATE TABLE IF NOT EXISTS `country_ems` (
  `id` int(11) NOT NULL,
  `cod` varchar(2) NOT NULL,
  `zona_ems` int(2) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `sort` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=235 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `country_ems`
--

INSERT INTO `country_ems` (`id`, `cod`, `zona_ems`, `created_at`, `updated_at`, `status`, `sort`) VALUES
(1, 'AU', 5, 1450887626, 1451309281, 1, 206),
(2, 'AT', 2, 1450887626, 1451309279, 1, 103),
(3, 'AZ', 1, 1450887626, 1451309279, 1, 59),
(4, 'AX', 0, 1450887626, 1451309278, 1, 48),
(5, 'AL', 2, 1450887626, 1451309279, 1, 102),
(6, 'DZ', 4, 1450887626, 1451309280, 1, 145),
(7, 'AI', 5, 1450887626, 1451309281, 1, 205),
(8, 'AO', 5, 1450887626, 1451309281, 1, 204),
(9, 'AD', 2, 1450887626, 1451309279, 1, 101),
(10, 'AQ', 0, 1450887626, 1451309278, 1, 47),
(11, 'AG', 6, 1450887626, 1451309282, 1, 233),
(12, 'AR', 5, 1450887626, 1451309281, 1, 203),
(13, 'AM', 1, 1450887626, 1451309279, 1, 58),
(14, 'AW', 5, 1450887626, 1451309281, 1, 202),
(15, 'AF', 0, 1450887626, 1451309278, 1, 46),
(16, 'BS', 5, 1450887626, 1451309281, 1, 201),
(17, 'BD', 4, 1450887626, 1451309280, 1, 144),
(18, 'BB', 5, 1450887626, 1451309281, 1, 200),
(19, 'BH', 5, 1450887626, 1451309281, 1, 199),
(20, 'BY', 1, 1450887626, 1451309279, 1, 57),
(21, 'BZ', 6, 1450887626, 1451309282, 1, 232),
(22, 'BE', 2, 1450887626, 1451309279, 1, 100),
(23, 'BJ', 5, 1450887626, 1451309281, 1, 198),
(24, 'BM', 5, 1450887626, 1451309281, 1, 197),
(25, 'BG', 2, 1450887626, 1452515179, 1, 99),
(26, 'BO', 5, 1450887626, 1451309281, 1, 196),
(27, 'BA', 2, 1450887626, 1451309279, 1, 98),
(28, 'BW', 5, 1450887626, 1451309281, 1, 195),
(29, 'BR', 5, 1450887626, 1451309281, 1, 194),
(30, 'VG', 6, 1450887626, 1451309282, 1, 231),
(31, 'BN', 5, 1450887626, 1451309281, 1, 193),
(32, 'BF', 5, 1450887626, 1451309281, 1, 192),
(33, 'BI', 0, 1450887626, 1451309278, 1, 45),
(34, 'BT', 5, 1450887626, 1451309281, 1, 191),
(35, 'VU', 6, 1450887626, 1451309282, 1, 230),
(36, 'VA', 2, 1450887626, 1451309279, 1, 97),
(37, 'GB', 2, 1450887626, 1451309279, 1, 96),
(38, 'HU', 2, 1450887626, 1451309279, 1, 95),
(39, 'VE', 5, 1450887626, 1451309281, 1, 190),
(40, 'VI', 6, 1450887626, 1451309282, 1, 229),
(41, 'AC', 0, 1450887626, 1451309278, 1, 44),
(42, 'VN', 4, 1450887626, 1451309280, 1, 143),
(43, 'GA', 5, 1450887626, 1451309281, 1, 189),
(44, 'HT', 0, 1450887626, 1451309278, 1, 43),
(45, 'GY', 0, 1450887626, 1451309278, 1, 42),
(46, 'GM', 5, 1450887626, 1451309281, 1, 188),
(47, 'GH', 4, 1450887626, 1451309280, 1, 142),
(48, 'GP', 2, 1450887626, 1451309279, 1, 94),
(49, 'GT', 6, 1450887626, 1451309281, 1, 228),
(50, 'GN', 5, 1450887626, 1451309281, 1, 187),
(51, 'GW', 0, 1450887626, 1451309278, 1, 41),
(52, 'DE', 2, 1450887626, 1451309279, 1, 93),
(53, 'GI', 5, 1450887626, 1451309281, 1, 186),
(54, 'HN', 6, 1450887626, 1451309281, 1, 227),
(55, 'HK', 4, 1450887627, 1451309280, 1, 141),
(56, 'GD', 6, 1450887627, 1451309281, 1, 226),
(57, 'GL', 2, 1450887627, 1451309279, 1, 92),
(58, 'GR', 2, 1450887627, 1451309279, 1, 91),
(59, 'GE', 1, 1450887627, 1451309278, 1, 56),
(60, 'GU', 0, 1450887627, 1451309278, 1, 40),
(61, 'DK', 2, 1450887627, 1451309279, 1, 90),
(62, 'DJ', 4, 1450887627, 1451309280, 1, 140),
(63, 'DM', 6, 1450887627, 1451309281, 1, 225),
(64, 'DO', 6, 1450887627, 1451309281, 1, 224),
(65, 'EG', 4, 1450887627, 1451309280, 1, 139),
(66, 'ZM', 5, 1450887627, 1451309281, 1, 185),
(67, 'ZW', 5, 1450887627, 1451309281, 1, 184),
(68, 'IL', 3, 1450887627, 1451309279, 1, 117),
(69, 'IN', 4, 1450887627, 1451309280, 1, 138),
(70, 'ID', 4, 1450887627, 1451309280, 1, 137),
(71, 'JO', 4, 1450887627, 1451309280, 1, 136),
(72, 'IQ', 0, 1450887627, 1451309278, 1, 39),
(73, 'IR', 4, 1450887627, 1451309280, 1, 135),
(74, 'IE', 3, 1450887627, 1451309279, 1, 116),
(75, 'IS', 3, 1450887627, 1451309279, 1, 115),
(76, 'ES', 2, 1450887627, 1451309279, 1, 89),
(77, 'IT', 2, 1450887627, 1451309279, 1, 88),
(78, 'YE', 4, 1450887627, 1451309280, 1, 134),
(79, 'CV', 0, 1450887627, 1451309278, 1, 38),
(80, 'KZ', 1, 1450887627, 1452515218, 1, 55),
(81, 'KY', 5, 1450887627, 1451309281, 1, 183),
(82, 'KH', 4, 1450887627, 1451309280, 1, 133),
(83, 'CM', 4, 1450887627, 1451309280, 1, 132),
(84, 'CA', 3, 1450887627, 1451309279, 1, 114),
(85, 'QA', 5, 1450887627, 1451309281, 1, 182),
(86, 'KE', 5, 1450887627, 1451309281, 1, 181),
(87, 'CY', 3, 1450887627, 1451309279, 1, 113),
(88, 'KG', 1, 1450887627, 1451309278, 1, 54),
(89, 'KI', 0, 1450887627, 1451309278, 1, 37),
(90, 'CN', 3, 1450887627, 1451309279, 1, 112),
(91, 'KP', 0, 1450887627, 1451309278, 1, 36),
(92, 'CC', 0, 1450887627, 1451309278, 1, 35),
(93, 'CO', 5, 1450887627, 1451309281, 1, 180),
(94, 'KM', 0, 1450887627, 1451309278, 1, 34),
(95, 'CD', 5, 1450887627, 1451309281, 1, 179),
(96, 'CG', 5, 1450887627, 1451309281, 1, 178),
(97, 'KR', 3, 1450887627, 1451309279, 1, 111),
(98, 'CR', 5, 1450887627, 1451309281, 1, 177),
(99, 'CI', 5, 1450887627, 1451309281, 1, 176),
(100, 'CU', 5, 1450887627, 1451309281, 1, 175),
(101, 'KW', 4, 1450887627, 1451309280, 1, 131),
(102, 'CK', 0, 1450887627, 1451309278, 1, 33),
(103, 'LA', 5, 1450887627, 1451309281, 1, 174),
(104, 'LV', 2, 1450887627, 1451309279, 1, 87),
(105, 'LS', 5, 1450887627, 1451309281, 1, 173),
(106, 'LR', 0, 1450887627, 1451309278, 1, 32),
(107, 'LB', 6, 1450887627, 1451309281, 1, 223),
(108, 'LY', 0, 1450887627, 1451309278, 1, 31),
(109, 'LT', 2, 1450887627, 1451309279, 1, 86),
(110, 'LI', 2, 1450887627, 1451309279, 1, 85),
(111, 'LU', 2, 1450887627, 1451309279, 1, 84),
(112, 'MU', 6, 1450887627, 1451309281, 1, 222),
(113, 'MR', 4, 1450887627, 1451309280, 1, 130),
(114, 'MG', 6, 1450887627, 1451309281, 1, 221),
(115, 'YT', 2, 1450887627, 1451309279, 1, 83),
(116, 'MO', 5, 1450887627, 1451309281, 1, 172),
(117, 'MK', 2, 1450887627, 1451309279, 1, 82),
(118, 'MW', 5, 1450887627, 1451309281, 1, 171),
(119, 'MY', 3, 1450887627, 1451309279, 1, 110),
(120, 'ML', 5, 1450887627, 1451309281, 1, 170),
(121, 'MV', 5, 1450887627, 1451309281, 1, 169),
(122, 'MT', 3, 1450887627, 1451309279, 1, 109),
(123, 'MA', 4, 1450887627, 1451309280, 1, 129),
(124, 'MQ', 2, 1450887627, 1451309279, 1, 81),
(125, 'MH', 0, 1450887627, 1451309278, 1, 30),
(126, 'MX', 5, 1450887627, 1451309281, 1, 168),
(127, 'FM', 0, 1450887627, 1451309278, 1, 29),
(128, 'MZ', 6, 1450887627, 1451309281, 1, 220),
(129, 'MD', 1, 1450887627, 1451309278, 1, 53),
(130, 'MC', 2, 1450887627, 1451309279, 1, 80),
(131, 'MN', 3, 1450887627, 1451309279, 1, 108),
(132, 'MS', 0, 1450887627, 1451309278, 1, 28),
(133, 'MM', 5, 1450887627, 1451309281, 1, 167),
(134, 'NA', 6, 1450887627, 1451309281, 1, 219),
(135, 'NP', 0, 1450887627, 1451309278, 1, 27),
(136, 'NE', 5, 1450887627, 1451309281, 1, 166),
(137, 'NG', 5, 1450887627, 1451309281, 1, 165),
(138, 'NL', 2, 1450887627, 1451309279, 1, 79),
(139, 'NI', 6, 1450887628, 1451309281, 1, 218),
(140, 'NU', 0, 1450887628, 1451309278, 1, 26),
(141, 'NZ', 5, 1450887628, 1451309281, 1, 164),
(142, 'NC', 6, 1450887628, 1451309281, 1, 217),
(143, 'NO', 2, 1450887628, 1451309279, 1, 78),
(144, 'NF', 5, 1450887628, 1451309281, 1, 163),
(145, 'AE', 4, 1450887628, 1451309280, 1, 128),
(146, 'OM', 4, 1450887628, 1451309280, 1, 127),
(147, 'PK', 4, 1450887628, 1451309280, 1, 126),
(148, 'PW', 0, 1450887628, 1451309278, 1, 25),
(149, 'PS', 0, 1450887628, 1451309278, 1, 24),
(150, 'PA', 5, 1450887628, 1451309281, 1, 162),
(151, 'PG', 5, 1450887628, 1451309281, 1, 161),
(152, 'PY', 5, 1450887628, 1451309281, 1, 160),
(153, 'PE', 5, 1450887628, 1451309281, 1, 159),
(154, 'PN', 0, 1450887628, 1451309278, 1, 23),
(155, 'PL', 2, 1450887628, 1451309279, 1, 77),
(156, 'PT', 2, 1450887628, 1451309279, 1, 76),
(157, 'PR', 0, 1450887628, 1451309278, 1, 22),
(158, 'RE', 2, 1450887628, 1451309279, 1, 75),
(159, 'CX', 0, 1450887628, 1451309278, 1, 21),
(160, 'RU', 0, 1450887628, 1452515238, 1, 20),
(161, 'RW', 0, 1450887628, 1451309278, 1, 19),
(162, 'RO', 2, 1450887628, 1451309279, 1, 74),
(163, 'SV', 5, 1450887628, 1451309281, 1, 158),
(164, 'WS', 0, 1450887628, 1451309278, 1, 18),
(165, 'AS', 0, 1450887628, 1451309278, 1, 17),
(166, 'SM', 2, 1450887628, 1451309279, 1, 73),
(167, 'ST', 6, 1450887628, 1451309281, 1, 216),
(168, 'SA', 4, 1450887628, 1451309280, 1, 125),
(169, 'SZ', 5, 1450887628, 1451309281, 1, 157),
(170, 'SH', 0, 1450887628, 1451309278, 1, 16),
(171, 'MP', 0, 1450887628, 1451309278, 1, 15),
(172, 'SC', 5, 1450887628, 1451309281, 1, 156),
(173, 'BL', 0, 1450887628, 1451309278, 1, 14),
(174, 'MF', 0, 1450887628, 1451309278, 1, 13),
(175, 'PM', 2, 1450887628, 1451309279, 1, 72),
(176, 'SN', 4, 1450887628, 1451309280, 1, 124),
(177, 'VC', 6, 1450887628, 1451309281, 1, 215),
(178, 'KN', 6, 1450887628, 1451309281, 1, 214),
(179, 'LC', 5, 1450887628, 1451309281, 1, 155),
(180, 'RS', 2, 1450887628, 1451309279, 1, 71),
(181, 'SG', 3, 1450887628, 1451309279, 1, 107),
(182, 'SY', 3, 1450887628, 1451309279, 1, 106),
(183, 'SK', 2, 1450887628, 1451309279, 1, 70),
(184, 'SI', 2, 1450887628, 1451309279, 1, 69),
(185, 'SB', 6, 1450887628, 1451309281, 1, 213),
(186, 'SO', 0, 1450887628, 1451309278, 1, 12),
(187, 'SD', 4, 1450887628, 1451309279, 1, 123),
(188, 'SR', 6, 1450887628, 1451309281, 1, 212),
(189, 'US', 3, 1450887628, 1451309279, 1, 105),
(190, 'SL', 0, 1450887628, 1451309278, 1, 11),
(191, 'TJ', 1, 1450887628, 1451309278, 1, 52),
(192, 'TH', 4, 1450887628, 1451309279, 1, 122),
(193, 'TW', 4, 1450887628, 1451309279, 1, 121),
(194, 'TZ', 5, 1450887628, 1451309281, 1, 154),
(195, 'TC', 6, 1450887628, 1451309281, 1, 211),
(196, 'TG', 5, 1450887628, 1451309281, 1, 153),
(197, 'TK', 0, 1450887628, 1451309278, 1, 10),
(198, 'TO', 0, 1450887628, 1451309278, 1, 9),
(199, 'TT', 6, 1450887628, 1451309281, 1, 210),
(200, 'TV', 0, 1450887628, 1451309278, 1, 8),
(201, 'TN', 4, 1450887628, 1451309279, 1, 120),
(202, 'TM', 1, 1450887628, 1451309278, 1, 51),
(203, 'TR', 2, 1450887628, 1451309279, 1, 68),
(204, 'UG', 5, 1450887628, 1451309280, 1, 152),
(205, 'UZ', 1, 1450887628, 1451309278, 1, 50),
(206, 'UA', 1, 1450887628, 1452515198, 1, 49),
(207, 'WF', 0, 1450887628, 1451309278, 1, 7),
(208, 'UY', 6, 1450887628, 1451309281, 1, 209),
(209, 'FO', 2, 1450887628, 1451309279, 1, 67),
(210, 'FJ', 6, 1450887628, 1451309281, 1, 208),
(211, 'PH', 5, 1450887628, 1451309280, 1, 151),
(212, 'FI', 2, 1450887628, 1451309279, 1, 66),
(213, 'FK', 0, 1450887628, 1451309278, 1, 6),
(214, 'FR', 2, 1450887628, 1451309279, 1, 65),
(215, 'PF', 0, 1450887628, 1451309278, 1, 5),
(216, 'HM', 0, 1450887628, 1451309278, 1, 4),
(217, 'HR', 2, 1450887628, 1451309279, 1, 64),
(218, 'CF', 5, 1450887628, 1451309280, 1, 150),
(219, 'TD', 5, 1450887628, 1451309280, 1, 149),
(220, 'ME', 0, 1450887628, 1451309278, 1, 3),
(221, 'CZ', 2, 1450887628, 1451309279, 1, 63),
(222, 'CL', 5, 1450887628, 1451309280, 1, 148),
(223, 'CH', 2, 1450887628, 1451309279, 1, 62),
(224, 'SE', 2, 1450887628, 1451309279, 1, 61),
(225, 'LK', 4, 1450887628, 1451309279, 1, 119),
(226, 'EC', 5, 1450887629, 1451309280, 1, 147),
(227, 'GQ', 0, 1450887629, 1451309278, 1, 2),
(228, 'ER', 0, 1450887629, 1451309278, 1, 1),
(229, 'EE', 2, 1450887629, 1451309279, 1, 60),
(230, 'ET', 4, 1450887629, 1451309279, 1, 118),
(231, 'ZA', 5, 1450887629, 1451309280, 1, 146),
(232, 'GS', 0, 1450887629, 1451309278, 1, 0),
(233, 'JM', 6, 1450887629, 1451309281, 1, 207),
(234, 'JP', 3, 1450887629, 1451458140, 1, 104);

-- --------------------------------------------------------

--
-- Структура таблицы `country_ems_i18n`
--

CREATE TABLE IF NOT EXISTS `country_ems_i18n` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `row_id` int(11) NOT NULL,
  `language` varchar(2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `country_ems_i18n`
--

INSERT INTO `country_ems_i18n` (`id`, `name`, `row_id`, `language`) VALUES
(1, 'Австралия', 1, 'ru'),
(2, 'Австрия', 2, 'ru'),
(3, 'Азербайджан', 3, 'ru'),
(4, 'Аландские острова', 4, 'ru'),
(5, 'Албания', 5, 'ru'),
(6, 'Алжир', 6, 'ru'),
(7, 'Ангилья', 7, 'ru'),
(8, 'Ангола', 8, 'ru'),
(9, 'Андорра', 9, 'ru'),
(10, 'Антарктика', 10, 'ru'),
(11, 'Антигуа и Барбуда', 11, 'ru'),
(12, 'Аргентина', 12, 'ru'),
(13, 'Армения', 13, 'ru'),
(14, 'Аруба', 14, 'ru'),
(15, 'Афганистан', 15, 'ru'),
(16, 'Багамы', 16, 'ru'),
(17, 'Бангладеш', 17, 'ru'),
(18, 'Барбадос', 18, 'ru'),
(19, 'Бахрейн', 19, 'ru'),
(20, 'Беларусь', 20, 'ru'),
(21, 'Белиз', 21, 'ru'),
(22, 'Бельгия', 22, 'ru'),
(23, 'Бенин', 23, 'ru'),
(24, 'Бермудские острова', 24, 'ru'),
(25, 'Болгария', 25, 'ru'),
(26, 'Боливия', 26, 'ru'),
(27, 'Босния и Герцеговина', 27, 'ru'),
(28, 'Ботсвана', 28, 'ru'),
(29, 'Бразилия', 29, 'ru'),
(30, 'Британские Виргинские острова', 30, 'ru'),
(31, 'Бруней', 31, 'ru'),
(32, 'Буркина Фасо', 32, 'ru'),
(33, 'Бурунди', 33, 'ru'),
(34, 'Бутан', 34, 'ru'),
(35, 'Вануату', 35, 'ru'),
(36, 'Ватикан', 36, 'ru'),
(37, 'Великобритания', 37, 'ru'),
(38, 'Венгрия', 38, 'ru'),
(39, 'Венесуэла', 39, 'ru'),
(40, 'Виргинские острова', 40, 'ru'),
(41, 'Вознесения остров', 41, 'ru'),
(42, 'Вьетнам', 42, 'ru'),
(43, 'Габон', 43, 'ru'),
(44, 'Гаити', 44, 'ru'),
(45, 'Гайяна', 45, 'ru'),
(46, 'Гамбия', 46, 'ru'),
(47, 'Гана', 47, 'ru'),
(48, 'Гваделупа', 48, 'ru'),
(49, 'Гватемала', 49, 'ru'),
(50, 'Гвинея', 50, 'ru'),
(51, 'Гвинея-Бисау', 51, 'ru'),
(52, 'Германия', 52, 'ru'),
(53, 'Гибралтар', 53, 'ru'),
(54, 'Гондурас', 54, 'ru'),
(55, 'Гонконг', 55, 'ru'),
(56, 'Гренада', 56, 'ru'),
(57, 'Гренландия', 57, 'ru'),
(58, 'Греция', 58, 'ru'),
(59, 'Грузия', 59, 'ru'),
(60, 'Гуам', 60, 'ru'),
(61, 'Дания', 61, 'ru'),
(62, 'Джибути', 62, 'ru'),
(63, 'Доминика', 63, 'ru'),
(64, 'Доминиканская республика', 64, 'ru'),
(65, 'Египет', 65, 'ru'),
(66, 'Замбия', 66, 'ru'),
(67, 'Зимбабве', 67, 'ru'),
(68, 'Израиль', 68, 'ru'),
(69, 'Индия', 69, 'ru'),
(70, 'Индонезия', 70, 'ru'),
(71, 'Иордания', 71, 'ru'),
(72, 'Ирак', 72, 'ru'),
(73, 'Иран', 73, 'ru'),
(74, 'Ирландия', 74, 'ru'),
(75, 'Исландия', 75, 'ru'),
(76, 'Испания', 76, 'ru'),
(77, 'Италия', 77, 'ru'),
(78, 'Йемен', 78, 'ru'),
(79, 'Кабо-Верде', 79, 'ru'),
(80, 'Казахстан', 80, 'ru'),
(81, 'Каймановы острова', 81, 'ru'),
(82, 'Камбоджа', 82, 'ru'),
(83, 'Камерун', 83, 'ru'),
(84, 'Канада', 84, 'ru'),
(85, 'Катар', 85, 'ru'),
(86, 'Кения', 86, 'ru'),
(87, 'Кипр', 87, 'ru'),
(88, 'Киргизия', 88, 'ru'),
(89, 'Кирибати', 89, 'ru'),
(90, 'Китай', 90, 'ru'),
(91, 'КНДР', 91, 'ru'),
(92, 'Кокосовые острова', 92, 'ru'),
(93, 'Колумбия', 93, 'ru'),
(94, 'Коморы', 94, 'ru'),
(95, 'Конго (ДР)', 95, 'ru'),
(96, 'Конго (Республика)', 96, 'ru'),
(97, 'Корея Южная', 97, 'ru'),
(98, 'Коста-Рика', 98, 'ru'),
(99, 'Кот Д''Ивуар', 99, 'ru'),
(100, 'Куба', 100, 'ru'),
(101, 'Кувейт', 101, 'ru'),
(102, 'Кука острова', 102, 'ru'),
(103, 'Лаос', 103, 'ru'),
(104, 'Латвия', 104, 'ru'),
(105, 'Лесото', 105, 'ru'),
(106, 'Либерия', 106, 'ru'),
(107, 'Ливан', 107, 'ru'),
(108, 'Ливия', 108, 'ru'),
(109, 'Литва', 109, 'ru'),
(110, 'Лихтенштейн', 110, 'ru'),
(111, 'Люксембург', 111, 'ru'),
(112, 'Маврикий', 112, 'ru'),
(113, 'Мавритания', 113, 'ru'),
(114, 'Мадагаскар', 114, 'ru'),
(115, 'Майотта остров', 115, 'ru'),
(116, 'Макао', 116, 'ru'),
(117, 'Македония', 117, 'ru'),
(118, 'Малави', 118, 'ru'),
(119, 'Малайзия', 119, 'ru'),
(120, 'Мали', 120, 'ru'),
(121, 'Мальдивские острова', 121, 'ru'),
(122, 'Мальта', 122, 'ru'),
(123, 'Марокко', 123, 'ru'),
(124, 'Мартиника', 124, 'ru'),
(125, 'Маршалловы острова', 125, 'ru'),
(126, 'Мексика', 126, 'ru'),
(127, 'Микронезия', 127, 'ru'),
(128, 'Мозамбик', 128, 'ru'),
(129, 'Молдавия', 129, 'ru'),
(130, 'Монако', 130, 'ru'),
(131, 'Монголия', 131, 'ru'),
(132, 'Монтсеррат', 132, 'ru'),
(133, 'Мьянма', 133, 'ru'),
(134, 'Намибия', 134, 'ru'),
(135, 'Непал', 135, 'ru'),
(136, 'Нигер', 136, 'ru'),
(137, 'Нигерия', 137, 'ru'),
(138, 'Нидерланды', 138, 'ru'),
(139, 'Никарагуа', 139, 'ru'),
(140, 'Ниуэ, остров', 140, 'ru'),
(141, 'Новая Зеландия', 141, 'ru'),
(142, 'Новая Каледония', 142, 'ru'),
(143, 'Норвегия', 143, 'ru'),
(144, 'Норфолк, остров', 144, 'ru'),
(145, 'ОАЕ', 145, 'ru'),
(146, 'Оман', 146, 'ru'),
(147, 'Пакистан', 147, 'ru'),
(148, 'Палау', 148, 'ru'),
(149, 'Палестина', 149, 'ru'),
(150, 'Панама', 150, 'ru'),
(151, 'Папуа - Новая Гвинея', 151, 'ru'),
(152, 'Парагвай', 152, 'ru'),
(153, 'Перу', 153, 'ru'),
(154, 'Питкэрн, остров', 154, 'ru'),
(155, 'Польша', 155, 'ru'),
(156, 'Португалия', 156, 'ru'),
(157, 'Пуэрто-Рико', 157, 'ru'),
(158, 'Реюньон', 158, 'ru'),
(159, 'Рождества остров', 159, 'ru'),
(160, 'Россия', 160, 'ru'),
(161, 'Руанда', 161, 'ru'),
(162, 'Румыния', 162, 'ru'),
(163, 'Сальвадор', 163, 'ru'),
(164, 'Самоа', 164, 'ru'),
(165, 'Самоа Американское', 165, 'ru'),
(166, 'Сан Марино', 166, 'ru'),
(167, 'Сан Томе и Принсипе', 167, 'ru'),
(168, 'Саудовская Аравия', 168, 'ru'),
(169, 'Свазиленд', 169, 'ru'),
(170, 'Святой Елены остров', 170, 'ru'),
(171, 'Северные Марианские острова', 171, 'ru'),
(172, 'Сейшелы', 172, 'ru'),
(173, 'Сен-Бартелеми', 173, 'ru'),
(174, 'Сен-Мартен', 174, 'ru'),
(175, 'Сен-Пьер и Микелон', 175, 'ru'),
(176, 'Сенегал', 176, 'ru'),
(177, 'Сент-Винсент и Гренадины', 177, 'ru'),
(178, 'Сент-Китс и Невис', 178, 'ru'),
(179, 'Сент-Люсия', 179, 'ru'),
(180, 'Сербия', 180, 'ru'),
(181, 'Сингапур', 181, 'ru'),
(182, 'Сирия', 182, 'ru'),
(183, 'Словакия', 183, 'ru'),
(184, 'Словения', 184, 'ru'),
(185, 'Соломоновы Острова', 185, 'ru'),
(186, 'Сомали', 186, 'ru'),
(187, 'Судан', 187, 'ru'),
(188, 'Суринам', 188, 'ru'),
(189, 'США', 189, 'ru'),
(190, 'Сьерра-Леоне', 190, 'ru'),
(191, 'Таджикистан', 191, 'ru'),
(192, 'Таиланд', 192, 'ru'),
(193, 'Тайвань', 193, 'ru'),
(194, 'Танзания', 194, 'ru'),
(195, 'Теркс и Кайкос', 195, 'ru'),
(196, 'Того', 196, 'ru'),
(197, 'Токелау острова', 197, 'ru'),
(198, 'Тонга острова', 198, 'ru'),
(199, 'Тринидад и Тобаго', 199, 'ru'),
(200, 'Тувалу', 200, 'ru'),
(201, 'Тунис', 201, 'ru'),
(202, 'Туркменистан', 202, 'ru'),
(203, 'Турция', 203, 'ru'),
(204, 'Уганда', 204, 'ru'),
(205, 'Узбекистан', 205, 'ru'),
(206, 'Украина', 206, 'ru'),
(207, 'Уоллис и Футуна острова', 207, 'ru'),
(208, 'Уругвай', 208, 'ru'),
(209, 'Фарерские острова', 209, 'ru'),
(210, 'Фиджи', 210, 'ru'),
(211, 'Филиппины', 211, 'ru'),
(212, 'Финляндия', 212, 'ru'),
(213, 'Фолклендские острова', 213, 'ru'),
(214, 'Франция', 214, 'ru'),
(215, 'Французская Полинезия', 215, 'ru'),
(216, 'Херд и Макдональд острова', 216, 'ru'),
(217, 'Хорватия', 217, 'ru'),
(218, 'Центральноафриканская республика', 218, 'ru'),
(219, 'Чад', 219, 'ru'),
(220, 'Черногория', 220, 'ru'),
(221, 'Чешская Республика', 221, 'ru'),
(222, 'Чили', 222, 'ru'),
(223, 'Швейцария', 223, 'ru'),
(224, 'Швеция', 224, 'ru'),
(225, 'Шри Ланка', 225, 'ru'),
(226, 'Эквадор', 226, 'ru'),
(227, 'Экваториальная Гвинея', 227, 'ru'),
(228, 'Эритрея', 228, 'ru'),
(229, 'Эстония', 229, 'ru'),
(230, 'Эфиопия', 230, 'ru'),
(231, 'ЮАР', 231, 'ru'),
(232, 'Южная Георгия и Ю.Сандвичевы о-ва', 232, 'ru'),
(233, 'Ямайка', 233, 'ru'),
(234, 'Япония', 234, 'ru'),
(236, 'Australia', 1, 'en'),
(237, 'Австралия', 1, 'bg'),
(238, 'Austria', 2, 'en'),
(239, 'Австрия', 2, 'bg'),
(240, 'Japan', 234, 'en'),
(241, 'Japan', 234, 'bg'),
(242, 'Bulgaria', 25, 'en'),
(243, 'България', 25, 'bg'),
(244, 'Ukraine', 206, 'en'),
(245, 'Украйна', 206, 'bg'),
(246, 'Kazakhstan', 80, 'en'),
(247, 'Казахстан', 80, 'bg'),
(248, 'Russia', 160, 'en'),
(249, 'Русия', 160, 'bg');

-- --------------------------------------------------------

--
-- Структура таблицы `coupons`
--

CREATE TABLE IF NOT EXISTS `coupons` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `amount` double(12,2) DEFAULT NULL COMMENT 'Процент скидки от 0% до 100%',
  `start_amount` int(10) DEFAULT '0',
  `date_from` int(10) DEFAULT NULL,
  `date_to` int(10) DEFAULT NULL,
  `max_uses` int(10) DEFAULT NULL,
  `uses` int(10) DEFAULT '0',
  `user_id` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `coupons`
--

INSERT INTO `coupons` (`id`, `created_at`, `updated_at`, `status`, `name`, `code`, `amount`, `start_amount`, `date_from`, `date_to`, `max_uses`, `uses`, `user_id`) VALUES
(8, 1449916149, 1449951156, 1, 'test 2', 'ZEVPKYJSVZEC', 50.00, 100, 1449871200, 1450562400, 1, 1, 23),
(9, 1450252788, 1450253088, 1, 'подарочный тестовый сертификат', 'R49UVAWRNYUR', 50.00, 0, 1450216800, 1450216800, 2, 1, 32),
(10, 1452245493, 1452245912, 1, 'тест13', 'HH9LL2M3UKSW', 50.00, 0, 1452204000, 1452204000, 1, 1, 32);

-- --------------------------------------------------------

--
-- Структура таблицы `coupons_groups`
--

CREATE TABLE IF NOT EXISTS `coupons_groups` (
  `id` int(10) NOT NULL,
  `coupon_id` int(10) DEFAULT NULL,
  `group_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `cron`
--

CREATE TABLE IF NOT EXISTS `cron` (
  `id` int(10) NOT NULL,
  `email` varchar(64) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `text` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `i18n`
--

CREATE TABLE IF NOT EXISTS `i18n` (
  `id` int(2) NOT NULL,
  `alias` varchar(2) NOT NULL,
  `name` varchar(32) NOT NULL,
  `short_name` varchar(16) NOT NULL,
  `locale` varchar(8) NOT NULL,
  `default` tinyint(1) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `i18n`
--

INSERT INTO `i18n` (`id`, `alias`, `name`, `short_name`, `locale`, `default`) VALUES
(1, 'ru', 'Русский', 'РУС', 'ru-ru', 1),
(2, 'en', 'English', 'ENG', 'en-us', 0),
(3, 'de', 'Deutsch', 'DEU', 'de-de', 0),
(4, 'sp', 'Español', 'ESP', 'sp-sp', 0),
(5, 'fr', 'Francais', 'FRA', 'fr-fr', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `log`
--

CREATE TABLE IF NOT EXISTS `log` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `log`
--

INSERT INTO `log` (`id`, `created_at`, `updated_at`, `name`, `link`, `ip`, `deleted`, `type`, `status`) VALUES
(1, 1471330867, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/46', '178.136.229.251', 0, 6, 0),
(2, 1471331562, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/47', '178.136.229.251', 0, 6, 0),
(3, 1471331593, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/48', '178.136.229.251', 0, 6, 0),
(4, 1471331762, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/49', '178.136.229.251', 0, 6, 0),
(5, 1471331836, NULL, 'Сообщение из контактной формы', '/wezom/contacts/edit/1', '178.136.229.251', 0, 2, 0),
(6, 1471331966, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/50', '178.136.229.251', 0, 6, 0),
(7, 1471333032, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/51', '178.136.229.251', 0, 6, 0),
(8, 1471333056, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/52', '178.136.229.251', 0, 6, 0),
(9, 1471333736, NULL, 'Сообщение из контактной формы', '/wezom/contacts/edit/2', '178.136.229.251', 0, 2, 0),
(10, 1471336013, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/53', '178.136.229.251', 0, 6, 0),
(11, 1471336835, NULL, 'Сообщение из контактной формы', '/wezom/contacts/edit/3', '178.136.229.251', 0, 2, 0),
(12, 1471337458, NULL, 'Сообщение из контактной формы', '/wezom/contacts/edit/4', '178.136.229.251', 0, 2, 0),
(13, 1471337571, NULL, 'Заказ подробного отчета', '/wezom/feedback/edit/54', '178.136.229.251', 0, 6, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `mail_templates`
--

CREATE TABLE IF NOT EXISTS `mail_templates` (
  `id` int(10) NOT NULL,
  `name` varchar(64) NOT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `sort` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `mail_templates`
--

INSERT INTO `mail_templates` (`id`, `name`, `updated_at`, `status`, `sort`) VALUES
(1, 'Контактная форма (Администратору)', 1470918887, 1, 0),
(36, 'Контактная форма (Пользователю)', 1470942932, 1, 0),
(37, 'Заказ подробного отчета (Администратору)', 1470943455, 1, 0),
(38, 'Заказ подробного отчета (Пользователю)', 1470943790, 1, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `mail_templates_i18n`
--

CREATE TABLE IF NOT EXISTS `mail_templates_i18n` (
  `id` int(10) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `mail_templates_i18n`
--

INSERT INTO `mail_templates_i18n` (`id`, `subject`, `text`, `row_id`, `language`) VALUES
(1, 'Новое сообщение из контактной формы - сайт {{site}}', '<p>Вам пришло новое письмо из контактной формы с сайта {{site}}!</p>\r\n<p>Имя отправителя: {{name}} ( {{ip}} ).</p>\r\n<p>E-Mail отправителя: {{email}}.</p>\r\n<p>Телефон отправителя: {{phone}}.</p>\r\n<p>IP отправителя: {{ip}}.</p>\r\n<p>Тема обращения: {{theme}}.</p>\r\n<p>&nbsp;</p>\r\n<p>Письмо сгенерировано автоматически. Пожалуйста не отвечайте на него!</p>', 1, 'ru'),
(27, 'Новое сообщение из контактной формы - сайт {{site}}', '<p>You have received a new message from a contact form from the website {{site}}!</p>\r\n<p>Sender Name: {{name}} ({{ip}}).</p>\r\n<p>E-Mail Sender: {{email}}.</p>\r\n<p>Sender Phone: {{phone}}.</p>\r\n<p>IP Sender: {{ip}}.</p>\r\n<p>Subject Treatment: {{theme}}.</p>\r\n<p>&nbsp;</p>\r\n<p>Letter generated automatically. Please do not reply to it!</p>', 1, 'en'),
(58, 'Сообщение контактной формы', '<p>Добрый день {{name}} , Вы оставили сообщение через форму обратной свзяи на сайте {{site}} .</p>\r\n<p>&nbsp;</p>\r\n<p>Наш менеджер свяжется с Вами в ближайшее время, спасибо!</p>', 36, 'ru'),
(59, 'Message contact form', '<p>Hello {{name}}, you leave a message through the feedback form on the site svzya {{site}}.</p>\r\n<p>&nbsp;</p>\r\n<p>Our manager will contact you shortly, thank you!</p>', 36, 'en'),
(60, 'Новый подробный отчет', '<p>Поступил новый заказ подробного отчета с сайта {{site}}!</p>\r\n<p>Имя отправителя: {{name}} ( {{ip}} ).</p>\r\n<p>E-Mail отправителя: {{email}}.</p>\r\n<p>Телефон отправителя: {{phone}}.</p>\r\n<p>Наименование проекта: {{project}}.</p>\r\n<p>&nbsp;</p>\r\n<p>Письмо сгенерировано автоматически. Пожалуйста не отвечайте на него!</p>', 37, 'ru'),
(61, 'New detailed report', '<p>Entered a new order a detailed report from the site {{site}}!</p>\r\n<p>Sender Name: {{name}} ({{ip}}).</p>\r\n<p>E-Mail Sender: {{email}}.</p>\r\n<p>Sender Phone: {{phone}}.</p>\r\n<p>Project name: {{project}}.</p>\r\n<p>&nbsp;</p>\r\n<p>Letter generated automatically. Please do not reply to it!</p>', 37, 'en'),
(62, 'Заказ подробного отчета', '<p>Уважаемый,&nbsp;{{name}}. Мыполучили заказ подробного отчета по проекту: {{project}} на сайте {{site}}.</p>\r\n<p>Ответим Вам в ближайшее время, Спасибо!</p>\r\n<p>&nbsp;</p>\r\n<p>Письмо сгенерировано автоматически. Пожалуйста не отвечайте на него!</p>', 38, 'ru'),
(63, 'Order a detailed report', '<p>Dear, {{name}}. Mypoluchili order a detailed project report: {{project}} online {{site}}.</p>\r\n<p>We will answer to you soon, Thank you!</p>\r\n<p>&nbsp;</p>\r\n<p>Letter generated automatically. Please do not reply to it!</p>', 38, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(10) NOT NULL,
  `id_parent` int(11) DEFAULT '0',
  `name` varchar(255) CHARACTER SET cp1251 DEFAULT NULL,
  `link` varchar(255) CHARACTER SET cp1251 DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `status` int(1) DEFAULT '1',
  `updated_at` int(10) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `count` varchar(32) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `menu`
--

INSERT INTO `menu` (`id`, `id_parent`, `name`, `link`, `sort`, `status`, `updated_at`, `icon`, `count`) VALUES
(1, 0, 'Панель управления', 'index/index', 0, 1, NULL, 'fa-dashboard', NULL),
(4, 0, 'Настройки сайта', NULL, 98, 1, NULL, 'fa-cogs', NULL),
(5, 0, 'Системные страницы', 'control/index', 1, 1, NULL, 'fa-folder-open-o', NULL),
(8, 2, 'Метрика и счетчики', 'seo_scripts/index', 1, 1, NULL, NULL, NULL),
(10, 2, 'Добавить метрику или счетчик', 'seo_scripts/add', 2, 1, NULL, NULL, NULL),
(12, 2, 'Теги для конкретных ссылок', 'seo_links/index', 0, 1, NULL, NULL, NULL),
(13, 2, 'Добавить теги для ссылки', 'seo_links/add', 0, 1, NULL, NULL, NULL),
(14, 0, 'Шаблоны писем', 'mailTemplates/index', 97, 1, NULL, 'fa-file-image-o', NULL),
(15, 0, 'Меню', 'menu/index', 4, 1, NULL, 'fa-list-ul', NULL),
(19, 156, 'Список новостей', 'news/index', 4, 1, NULL, NULL, NULL),
(20, 156, 'Добавить новость', 'news/add', 5, 1, NULL, NULL, NULL),
(25, 64, 'Список слайдов', 'slider/index', 1, 1, NULL, NULL, NULL),
(26, 64, 'Добавть слайд', 'slider/add', 2, 1, NULL, NULL, NULL),
(35, 0, 'Обратная связь', 'contacts/index', 12, 1, NULL, 'fa-envelope-o', 'contacts'),
(54, 0, 'Лента событий', 'log/index', 13, 1, NULL, 'fa-tasks', NULL),
(65, 3, 'Список пользователей', 'users/index', 1, 1, NULL, NULL, 'users'),
(66, 3, 'Список администраторов', 'admins/index', 3, 1, NULL, NULL, 'admins'),
(67, 3, 'Добавить администратора', 'admins/add', 4, 1, NULL, NULL, NULL),
(68, 3, 'Список ролей', 'roles/index', 5, 1, NULL, NULL, NULL),
(69, 3, 'Добавить роль', 'roles/add', 6, 1, NULL, NULL, NULL),
(70, 3, 'Добавить пользователя', 'users/add', 2, 1, NULL, NULL, NULL),
(71, 2, 'Перенаправления', 'seo_redirects/index', 6, 1, NULL, NULL, NULL),
(72, 2, 'Добавить перенаправление', 'seo_redirects/add', 6, 1, NULL, NULL, NULL),
(109, 108, 'Посетители сайта', 'visitors/index', 1, 1, NULL, '', NULL),
(110, 108, 'Переходы по сайту', 'hits/index', 2, 1, NULL, '', NULL),
(111, 108, 'Рефереры', 'referers/index', 3, 1, NULL, '', NULL),
(112, 108, 'Статистика по пользователям', 'statistic/users', 4, 1, NULL, NULL, NULL),
(113, 108, 'Статистика по товарам', 'statistic/items', 5, 1, NULL, NULL, NULL),
(122, 121, 'Заблокированные адреса', 'blacklist/index', 1, 1, NULL, NULL, NULL),
(123, 121, 'Заблокировать адрес', 'blacklist/add', 2, 1, NULL, NULL, NULL),
(125, 124, 'Список отзывов', 'reviews/index', 1, 1, NULL, NULL, NULL),
(126, 124, 'Добавить отзыв', 'reviews/add', 2, 1, NULL, NULL, NULL),
(127, 4, 'Основные', 'config/edit', 1, 1, NULL, NULL, NULL),
(128, 4, 'Номера телефонов', 'phones/index', 2, 1, NULL, NULL, NULL),
(132, 0, 'Переводы', 'translates/general', 99, 1, NULL, 'fa-language', NULL),
(142, 38, 'Теги', 'tags/index', 9, 1, NULL, NULL, NULL),
(143, 38, 'Добавить тег', 'tags/add', 10, 1, NULL, NULL, NULL),
(156, 0, 'Новости', NULL, 1, 1, NULL, 'fa-comments-o', NULL),
(165, 0, 'Наша команда', NULL, 2, 1, NULL, 'fa-group', NULL),
(166, 165, 'Список', 'team/index', 4, 1, NULL, NULL, NULL),
(167, 165, 'Добавить', 'team/add', 9, 1, NULL, NULL, NULL),
(168, 0, 'Отзывы пациентов', NULL, 3, 1, NULL, 'fa-quote-right', NULL),
(169, 168, 'Список отзывов', 'reviews/index', 1, 1, NULL, NULL, NULL),
(170, 168, 'Добавить отзыв', 'reviews/add', 2, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `alias` varchar(255) DEFAULT NULL,
  `date` int(10) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `views` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `created_at`, `updated_at`, `status`, `alias`, `date`, `image`, `views`) VALUES
(28, 1470812541, NULL, 1, '1058', 1470776400, '7af57b9c70c425583d95b06c0a08f498.jpg', 0),
(29, 1470812656, 1473169837, 1, '4815', 1470776400, 'f638c7182173836727fba0e550047285.jpg', 4),
(30, 1470812853, NULL, 1, '9439', 1470603600, '413797e737fe8176e506118bc694a1a5.jpg', 0),
(31, 1470826479, 1470826514, 1, '8549', 1470776400, '30df492da2ad96518c502069204d574b.jpg', 0),
(32, 1470830022, 1473166114, 1, 'kamp-nou', 1470776400, 'c4b6acba160575e5205ff41474436492.jpg', 9),
(33, 1470830192, 1473227185, 1, 'slavutich-arena', 1469998800, '9b3f285064515811a57e7db75f66df49.jpg', 2),
(48, 1473153590, 1473227173, 1, 'stadion-metallist', 1473109200, '1c5f4b8b44bf60923879271cb1226721.jpg', 10);

-- --------------------------------------------------------

--
-- Структура таблицы `news_i18n`
--

CREATE TABLE IF NOT EXISTS `news_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text` text,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `keywords` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `news_i18n`
--

INSERT INTO `news_i18n` (`id`, `name`, `text`, `h1`, `title`, `description`, `keywords`, `row_id`, `language`) VALUES
(35, 'Ваш шедевр готов!', '<p class="text-justify">Повседневная практика показывает, что сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших направлений развития. Товарищи! постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации модели развития.</p>\r\n<p class="text-justify">Товарищи! сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития. Не следует, однако забывать, что сложившаяся структура организации требуют от нас анализа модели развития. Равным образом реализация намеченных плановых заданий способствует подготовки и реализации направлений прогрессивного развития.</p>\r\n<p class="text-justify">Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Не следует, однако забывать, что консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требуют от нас анализа существенных финансовых и административных условий. Повседневная практика показывает, что сложившаяся структура организации требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.</p>', NULL, NULL, NULL, NULL, 28, 'ru'),
(36, 'Your masterpiece is ready!', '<p>Daily experience shows that the current structure of the organization is an interesting experiment testing the future direction of development. Comrades! continuous quantitative growth and scope of our activity entails the process of implementing and modernizing development model.</p>\r\n<p>Comrades! developed organizational structure allows you to perform important tasks for the development of the future direction of development. It should not be forgotten that the current organization structure require us to analyze the development of the model. Similarly, implementation of the planned routine tasks contributes to the preparation and implementation of the directions of progressive development.</p>\r\n<p>Ideological considerations of a higher order, as well as the further development of various forms of activity provides a wide range of (specialist) participated in the formation of areas of progressive development. It should not be forgotten that a consultation with a broad asset allows you to perform important tasks for the development of personnel training system, and meets urgent needs. Ideological considerations of a higher order, as well as constant quantitative growth and the scope of our activities require us to analyze the substantial financial and administrative conditions. Daily experience shows that the current organization structure require us to analyze personnel training system, and meets urgent needs. It should not be forgotten that a consultation with a broad asset entails the process of implementing and upgrading areas of progressive development.</p>', NULL, NULL, NULL, NULL, 28, 'en'),
(37, 'Очередной шедевр готов!', '<p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции способствует подготовки и реализации существенных финансовых и административных условий. Равным образом сложившаяся структура организации требуют от нас анализа новых предложений.</p>\r\n<p>Задача организации, в особенности же дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом новая модель организационной деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Равным образом укрепление и развитие структуры способствует подготовки и реализации новых предложений. Не следует, однако забывать, что сложившаяся структура организации в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Задача организации, в особенности же сложившаяся структура организации требуют определения и уточнения соответствующий условий активизации.</p>\r\n<p>Задача организации, в особенности же постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки модели развития. Разнообразный и богатый опыт новая модель организационной деятельности требуют от нас анализа новых предложений. С другой стороны начало повседневной работы по формированию позиции способствует подготовки и реализации модели развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения соответствующий условий активизации.</p>', NULL, NULL, NULL, NULL, 29, 'ru'),
(38, 'Another masterpiece is ready!', '<p>A varied and rich experience in the beginning of the day to day work on the formation position contributes to the preparation and implementation of substantial financial and administrative conditions. Similarly, established the organization structure require us to analyze new proposals.</p>\r\n<p>The task of organizing, in particular the further development of various forms of activity provides a wide range of (specialist) participated in the formation of personnel training system, and meets urgent needs. Thus, a new model of organizational activities require us to analyze the positions taken by participants in relation to the assigned tasks. Similarly, strengthening and development of the structure contributes to the preparation and implementation of the new proposals. It should not be forgotten that the current structure of the organization to a large extent determines the creation of personnel training system, and meets urgent needs. The significance of these problems are so obvious that the scope and location of staff training plays an important role in the formation of participatory systems. The significance of these problems are so obvious that the constant quantitative growth and scope of our activity contributes to the preparation and implementation of personnel training system, and meets urgent needs.</p>\r\n<p>A varied and rich experience of the new model of organizational activity plays an important role in shaping the direction of progressive development. Ideological considerations of a higher order, as well as a new model of organizational activity provides a wide range of (specialist) part in shaping the future direction of development. The task of organizing, especially the prevailing structure of the organization require the determination and specification of the appropriate activation conditions.</p>\r\n<p>The task of organizing, especially the constant quantitative growth and scope of our activity is the development of an interesting experiment model verification. A varied and rich experience of the new model of organizational activities require us to analyze new proposals. On the other hand the beginning of the day to day work on the formation position contributes to the preparation and implementation of the development model. Comrades! continuous information and propaganda support of our activities require the definition and specification of the appropriate activation conditions.</p>', NULL, NULL, NULL, NULL, 29, 'en'),
(39, 'Еще один шедевр готов!', '<p>Идейные соображения высшего порядка, а также сложившаяся структура организации способствует подготовки и реализации форм развития. Таким образом консультация с широким активом способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации модели развития. Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации новых предложений. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Не следует, однако забывать, что сложившаяся структура организации требуют от нас анализа форм развития.</p><p>Повседневная практика показывает, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.</p><p>Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет выполнять важные задания по разработке дальнейших направлений развития. Таким образом начало повседневной работы по формированию позиции требуют определения и уточнения форм развития. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Таким образом сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом рамки и место обучения кадров требуют определения и уточнения новых предложений. Не следует, однако забывать, что новая модель организационной деятельности позволяет оценить значение модели развития.</p>', NULL, NULL, NULL, NULL, 30, 'ru'),
(40, 'Another masterpiece is ready!', '<p>Ideological considerations of a higher order, as well as the prevailing structure of the organization contributes to the preparation and implementation of the forms of development. So consultation with a broad asset contributes to the preparation and implementation of personnel training system, and meets urgent needs. Everyday experience shows that permanent information and propaganda support of our activity contributes to the preparation and implementation of the development model. The significance of these problems are so obvious, that consultation with a broad asset contributes to the preparation and implementation of the new proposals. Ideological considerations of a higher order, as well as constant quantitative growth and scope of our activity plays an important role in the formation of the new proposals. It should not be forgotten that the current organization structure require us to analyze the development of forms.</p><p>Daily experience shows that the beginning of the day to day work on the formation position provides a wide range of (specialist) part in shaping the future direction of development. The task of organizing, especially the constant information and propaganda support of our activities is an interesting experiment personnel training system test corresponds to pressing needs.</p>\r\n<p>The significance of these problems are so obvious that the scope and location of staff training enables important tasks for the development of the future direction of development. Thus the beginning of the day to day work on the formation positions require determination and refinement of forms of development. A varied and rich experience of constant information and propaganda support of our business provides a wide range of (specialist) participated in the formation of substantial financial and administrative conditions. Thus the prevailing structure of the organization plays an important role in the formation of substantial financial and administrative conditions. Similarly, the frame and the frame of training place require the determination and specification of the new proposals. It should not be forgotten that the new model of organizational activity allows us to estimate the value of the model.</p>', NULL, NULL, NULL, NULL, 30, 'en'),
(41, 'Снова шедевр готов', '<p>Таким образом новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что начало повседневной работы по формированию позиции играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития.</p>\r\n<p>Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа существенных финансовых и административных условий. Равным образом дальнейшее развитие различных форм деятельности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что новая модель организационной деятельности требуют определения и уточнения существенных финансовых и административных условий.</p>\r\n<p>Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа направлений прогрессивного развития. Повседневная практика показывает, что консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий.</p>', NULL, NULL, NULL, NULL, 31, 'ru'),
(42, 'Again masterpiece is ready', '<p>Thus, a new model of organizational activity allows for important tasks for the development of substantial financial and administrative conditions. It should not be forgotten that the beginning of the day to day work on the formation position plays an important role in the formation of the new proposals. Comrades! a new model of organizational activity allows for important tasks for the development of the future direction of development.</p>\r\n<p>The task of organizing, especially the constant information and propaganda support of our business provides a wide range of (specialist) participated in the formation of personnel training system, and meets urgent needs. The task of organizing, especially the prevailing structure of the organization allows for important tasks for the development of the future direction of development. Similarly, the further development of various forms of activities require us to analyze the substantial financial and administrative conditions. Similarly, the further development of various forms of activity plays an important role in shaping the positions taken by participants in relation to the assigned tasks. It should not be forgotten that the new model of organizational performance requires the definition and specification of the substantial financial and administrative conditions.</p>\r\n<p>The significance of these problems are so obvious that the strengthening and development of the structure require us to analyze trends progressive development. Everyday experience shows that consultation with a broad asset allows you to perform important tasks for the development of substantial financial and administrative conditions.</p>', NULL, NULL, NULL, NULL, 31, 'en'),
(43, 'Камп Ноу', '<p class="text-justify">Значимость этих проблем настолько очевидна, что консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития. Не следует, однако забывать, что новая модель организационной деятельности представляет собой интересный эксперимент проверки систем массового участия. С другой стороны постоянный количественный рост и сфера нашей активности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом сложившаяся структура организации требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p class="text-justify">Таким образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение дальнейших направлений развития. Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития.</p>', NULL, NULL, NULL, NULL, 32, 'ru'),
(44, 'Camp Nou', '<p>The significance of these problems are so obvious, that consultation with a broad asset is an interesting experiment testing the future direction of development. It should not be forgotten that the new model of organizational performance is an interesting experiment testing participatory systems. On the other hand the constant quantitative growth and scope of our activity allows us to estimate the value of personnel training system, and meets urgent needs. Thus the prevailing organizational structure require us to analyze personnel training system, and meets urgent needs.</p>\r\n<p>Thus the beginning of the day to day work on the formation position largely determines the creation of the positions taken by participants in relation to the assigned tasks. The significance of these problems are so obvious that the strengthening and development of the structure allows you to perform important tasks for the development of personnel training system, and meets urgent needs. Daily experience shows that the further development of various forms of activity allows us to estimate the value of the future direction of development. Thus the beginning of the day to day work on the formation position plays an important role in shaping the development of the model.</p>', NULL, NULL, NULL, NULL, 32, 'en'),
(45, 'Славутич Арена', '<p class="text-justify">Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки новых предложений. Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>\r\n<p class="text-justify">Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших направлений развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации форм развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании модели развития.</p>', NULL, NULL, NULL, NULL, 33, 'ru'),
(46, 'Slavutich Arena', '<p>Thus the constant information and propaganda support of our activity entails the process of implementation and upgrading of the future direction of development. Ideological considerations of a higher order, as well as constant quantitative growth and scope of our activity is an interesting experiment to test new proposals. Daily experience shows that the strengthening and development of the framework provides a wide range of (specialist) participated in the formation of the new proposals.</p>\r\n<p>Daily experience shows that the strengthening and development of the framework provides a wide range of (specialist) participated in the formation of the new proposals. The task of organizing, especially the prevailing structure of the organization is an interesting experiment testing the future direction of development. Ideological considerations of a higher order, as well as the scope and location of training staff provides a wide range of (specialist) participated in the formation of the development model. Ideological considerations of a higher order, as well as the implementation of the planned routine tasks entails the process of implementation and modernization of forms. It should not be forgotten that the beginning of the daily work on the formation of the position allows you to perform important tasks for the development of new proposals. The task of organizing, in particular the implementation of the intended plan assignments plays an important role in shaping the development of the model.</p>', NULL, NULL, NULL, NULL, 33, 'en'),
(75, 'Another masterpiece is ready!', '<p>A varied and rich experience in the beginning of the day to day work on the formation position contributes to the preparation and implementation of substantial financial and administrative conditions. Similarly, established the organization structure require us to analyze new proposals.</p>\r\n<p>The task of organizing, in particular the further development of various forms of activity provides a wide range of (specialist) participated in the formation of personnel training system, and meets urgent needs. Thus, a new model of organizational activities require us to analyze the positions taken by participants in relation to the assigned tasks. Similarly, strengthening and development of the structure contributes to the preparation and implementation of the new proposals. It should not be forgotten that the current structure of the organization to a large extent determines the creation of personnel training system, and meets urgent needs. The significance of these problems are so obvious that the scope and location of staff training plays an important role in the formation of participatory systems. The significance of these problems are so obvious that the constant quantitative growth and scope of our activity contributes to the preparation and implementation of personnel training system, and meets urgent needs.</p>\r\n<p>A varied and rich experience of the new model of organizational activity plays an important role in shaping the direction of progressive development. Ideological considerations of a higher order, as well as a new model of organizational activity provides a wide range of (specialist) part in shaping the future direction of development. The task of organizing, especially the prevailing structure of the organization require the determination and specification of the appropriate activation conditions.</p>\r\n<p>The task of organizing, especially the constant quantitative growth and scope of our activity is the development of an interesting experiment model verification. A varied and rich experience of the new model of organizational activities require us to analyze new proposals. On the other hand the beginning of the day to day work on the formation position contributes to the preparation and implementation of the development model. Comrades! continuous information and propaganda support of our activities require the definition and specification of the appropriate activation conditions.</p>', NULL, NULL, NULL, NULL, 29, 'de'),
(76, 'Another masterpiece is ready!', '<p>A varied and rich experience in the beginning of the day to day work on the formation position contributes to the preparation and implementation of substantial financial and administrative conditions. Similarly, established the organization structure require us to analyze new proposals.</p>\r\n<p>The task of organizing, in particular the further development of various forms of activity provides a wide range of (specialist) participated in the formation of personnel training system, and meets urgent needs. Thus, a new model of organizational activities require us to analyze the positions taken by participants in relation to the assigned tasks. Similarly, strengthening and development of the structure contributes to the preparation and implementation of the new proposals. It should not be forgotten that the current structure of the organization to a large extent determines the creation of personnel training system, and meets urgent needs. The significance of these problems are so obvious that the scope and location of staff training plays an important role in the formation of participatory systems. The significance of these problems are so obvious that the constant quantitative growth and scope of our activity contributes to the preparation and implementation of personnel training system, and meets urgent needs.</p>\r\n<p>A varied and rich experience of the new model of organizational activity plays an important role in shaping the direction of progressive development. Ideological considerations of a higher order, as well as a new model of organizational activity provides a wide range of (specialist) part in shaping the future direction of development. The task of organizing, especially the prevailing structure of the organization require the determination and specification of the appropriate activation conditions.</p>\r\n<p>The task of organizing, especially the constant quantitative growth and scope of our activity is the development of an interesting experiment model verification. A varied and rich experience of the new model of organizational activities require us to analyze new proposals. On the other hand the beginning of the day to day work on the formation position contributes to the preparation and implementation of the development model. Comrades! continuous information and propaganda support of our activities require the definition and specification of the appropriate activation conditions.</p>', NULL, NULL, NULL, NULL, 29, 'sp'),
(77, 'Another masterpiece is ready!', '<p>A varied and rich experience in the beginning of the day to day work on the formation position contributes to the preparation and implementation of substantial financial and administrative conditions. Similarly, established the organization structure require us to analyze new proposals.</p>\r\n<p>The task of organizing, in particular the further development of various forms of activity provides a wide range of (specialist) participated in the formation of personnel training system, and meets urgent needs. Thus, a new model of organizational activities require us to analyze the positions taken by participants in relation to the assigned tasks. Similarly, strengthening and development of the structure contributes to the preparation and implementation of the new proposals. It should not be forgotten that the current structure of the organization to a large extent determines the creation of personnel training system, and meets urgent needs. The significance of these problems are so obvious that the scope and location of staff training plays an important role in the formation of participatory systems. The significance of these problems are so obvious that the constant quantitative growth and scope of our activity contributes to the preparation and implementation of personnel training system, and meets urgent needs.</p>\r\n<p>A varied and rich experience of the new model of organizational activity plays an important role in shaping the direction of progressive development. Ideological considerations of a higher order, as well as a new model of organizational activity provides a wide range of (specialist) part in shaping the future direction of development. The task of organizing, especially the prevailing structure of the organization require the determination and specification of the appropriate activation conditions.</p>\r\n<p>The task of organizing, especially the constant quantitative growth and scope of our activity is the development of an interesting experiment model verification. A varied and rich experience of the new model of organizational activities require us to analyze new proposals. On the other hand the beginning of the day to day work on the formation position contributes to the preparation and implementation of the development model. Comrades! continuous information and propaganda support of our activities require the definition and specification of the appropriate activation conditions.</p>', NULL, NULL, NULL, NULL, 29, 'fr'),
(78, 'стадион Металлист', '<p class="para"><span class="function">strtr()</span>&nbsp;может вызываться с двумя аргументами. В этом случае&nbsp;<code class="parameter">from</code>&nbsp;должен быть массивом (<span class="type"><a class="type array" href="http://php.net/manual/ru/language.types.array.php">array</a></span>), в форме&nbsp;<em>array(''from'' =&gt; ''to'', ...)</em>. Функция возвратит строку, в которой все ключи массива будут заменены их элементами.&nbsp;<span class="function">strtr()</span>&nbsp;в первую очередь заменяет более длинные ключи, причем одна и та же строка поиска используется только один раз.</p>\r\n<p class="para">В этом случае, ключи и значения могут иметь любую длину, за исключением того, что ключи не должны быть пустыми. Кроме того, длина возвращаемого значения может отличаться от&nbsp;<code class="parameter">str</code>. Однако, стоит учесть тот факт, что эта функция максимально эффективна в том случае, если все ключи имеют одинаковый размер.</p>', NULL, NULL, NULL, NULL, 48, 'ru'),
(79, 'Metallist Stadium', '<p>Don''t support recursive expansion unless you need it and know it will be safe.&nbsp; When you do support it, do so explicitly by repeating strtr calls until no more expansions are occurring or a sane iteration limit is reached, so that the results never implicitly depend on order of your replacement keys.&nbsp; Also make certain that any user input will expanded in an isolated step after any sensitive data is already expanded into the output and no longer available as input.<br /><br />Note: using some character(s) around your keys to designate them also reduces the possibility of unintended mangling of output, whether maliciously triggered or otherwise.&nbsp; Thus the use of a colon prefix in these examples, which you can easily enforce when accepting replacement input to your templating/translation system.</p>', NULL, NULL, NULL, NULL, 48, 'en'),
(80, 'Metallist Stadium', '<p>Don''t support recursive expansion unless you need it and know it will be safe.&nbsp; When you do support it, do so explicitly by repeating strtr calls until no more expansions are occurring or a sane iteration limit is reached, so that the results never implicitly depend on order of your replacement keys.&nbsp; Also make certain that any user input will expanded in an isolated step after any sensitive data is already expanded into the output and no longer available as input.<br /><br />Note: using some character(s) around your keys to designate them also reduces the possibility of unintended mangling of output, whether maliciously triggered or otherwise.&nbsp; Thus the use of a colon prefix in these examples, which you can easily enforce when accepting replacement input to your templating/translation system.</p>', NULL, NULL, NULL, NULL, 48, 'de'),
(81, 'Metallist Stadium', '<p>Don''t support recursive expansion unless you need it and know it will be safe.&nbsp; When you do support it, do so explicitly by repeating strtr calls until no more expansions are occurring or a sane iteration limit is reached, so that the results never implicitly depend on order of your replacement keys.&nbsp; Also make certain that any user input will expanded in an isolated step after any sensitive data is already expanded into the output and no longer available as input.<br /><br />Note: using some character(s) around your keys to designate them also reduces the possibility of unintended mangling of output, whether maliciously triggered or otherwise.&nbsp; Thus the use of a colon prefix in these examples, which you can easily enforce when accepting replacement input to your templating/translation system.</p>', NULL, NULL, NULL, NULL, 48, 'sp'),
(82, 'Metallist Stadium', '<p>Don''t support recursive expansion unless you need it and know it will be safe.&nbsp; When you do support it, do so explicitly by repeating strtr calls until no more expansions are occurring or a sane iteration limit is reached, so that the results never implicitly depend on order of your replacement keys.&nbsp; Also make certain that any user input will expanded in an isolated step after any sensitive data is already expanded into the output and no longer available as input.<br /><br />Note: using some character(s) around your keys to designate them also reduces the possibility of unintended mangling of output, whether maliciously triggered or otherwise.&nbsp; Thus the use of a colon prefix in these examples, which you can easily enforce when accepting replacement input to your templating/translation system.</p>', NULL, NULL, NULL, NULL, 48, 'fr'),
(83, 'Camp Nou', '', NULL, NULL, NULL, NULL, 32, 'de'),
(84, 'Camp Nou', '', NULL, NULL, NULL, NULL, 32, 'sp'),
(85, 'Camp Nou', '', NULL, NULL, NULL, NULL, 32, 'fr'),
(86, 'Slavutich Arena', '', NULL, NULL, NULL, NULL, 33, 'de'),
(87, 'Slavutich Arena', '', NULL, NULL, NULL, NULL, 33, 'sp'),
(88, 'Slavutich Arena', '', NULL, NULL, NULL, NULL, 33, 'fr');

-- --------------------------------------------------------

--
-- Структура таблицы `news_items`
--

CREATE TABLE IF NOT EXISTS `news_items` (
  `id` int(10) unsigned NOT NULL,
  `news_id` int(10) DEFAULT NULL,
  `catalog_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `payment` int(2) DEFAULT NULL,
  `delivery` int(2) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `user_id` int(10) DEFAULT '0',
  `ip` varchar(16) DEFAULT NULL,
  `last_name` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `done` int(10) DEFAULT NULL COMMENT 'Дата когда заказ был выполнен',
  `changed` tinyint(1) DEFAULT '0',
  `city` varchar(200) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `currency` varchar(16) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `admin_comment` text,
  `discount` double(12,2) DEFAULT NULL,
  `country` varchar(64) DEFAULT NULL,
  `region` varchar(128) DEFAULT NULL,
  `deliveryPrice` double(12,2) DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `orders_certificates`
--

CREATE TABLE IF NOT EXISTS `orders_certificates` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `payment` int(2) DEFAULT NULL,
  `delivery` int(2) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `user_id` int(10) DEFAULT '0',
  `ip` varchar(16) DEFAULT NULL,
  `last_name` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `done` int(10) DEFAULT NULL COMMENT 'Дата когда заказ был выполнен',
  `changed` tinyint(1) DEFAULT '0',
  `city` varchar(200) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `currency` varchar(16) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `certificate_id` int(10) unsigned DEFAULT NULL,
  `price` double(12,2) DEFAULT NULL,
  `amount` double(12,2) DEFAULT NULL,
  `code` varchar(64) DEFAULT NULL,
  `uses` int(10) DEFAULT '0',
  `region` varchar(128) DEFAULT NULL,
  `country` varchar(64) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders_certificates`
--

INSERT INTO `orders_certificates` (`id`, `created_at`, `updated_at`, `status`, `payment`, `delivery`, `name`, `phone`, `user_id`, `ip`, `last_name`, `email`, `done`, `changed`, `city`, `comment`, `currency`, `language`, `certificate_id`, `price`, `amount`, `code`, `uses`, `region`, `country`) VALUES
(4, 1449912833, 1450008848, 0, 2, 3, 'Виталий', '+380992740348', 23, '127.0.0.1', 'Демяненко', 'demyanenko.v.wezom@gmail.com', NULL, 0, 'Херсон', '200 лет Херсона 8, кв. 146', '$', 'ru', 1, 250.00, 250.00, 'HT24EN7MFKLPUP6M', 1, 'Херсонская', 'Украина'),
(5, 1450245864, NULL, 0, 1, 1, 'Виталий', '+380992740348', 23, '178.136.229.251', 'Демяненко', 'demyanenko.v.wezom@gmail.com', NULL, 0, 'Херсон', '200 лет Херсона 8, кв. 146', '₴', 'ru', 2, 12474.00, 500.00, 'EXNVY2EXTS9H55RM', 0, 'SDF', 'Украина'),
(6, 1450254049, NULL, 0, 1, 1, 'Тест Имя', '+380957406957', 32, '178.136.229.251', 'Тест Фамилия', 'artemonenko.a.wezom@gmail.com', NULL, 0, 'авыыавыаавы', '354ваываыв ыва', '₴', 'ru', 1, 6300.00, 250.00, '56DRFTZ2NSZDD5WH', 0, 'хываывкв', 'Украина'),
(7, 1450254267, NULL, 0, 2, 3, 'Тест Имя', '+380957406957', 32, '178.136.229.251', 'Тест Фамилия', 'artemonenko.a.wezom@gmail.com', NULL, 0, 'xcvxcv', 'xcvxvxc', '₴', 'ru', 1, 6300.00, 250.00, '6V3P47KE59WZNTT4', 0, 'xcxgcsxv', 'Украина'),
(8, 1451485616, NULL, 0, 1, 1, 'qw', '5465454444', NULL, '178.136.229.251', 'er', 'trrrt@asd.sd', NULL, 0, 'sdf', 'sd', 'грн', 'ru', 1, 6300.00, 250.00, '999KWDZNJPNZ2DFE', 0, 'sdfsdfsdfsdf', 'Украина'),
(9, 1452067990, NULL, 0, 1, 1, 'Тест Имя', '0957406957', 32, '93.79.187.205', 'Тест Фамилия', 'artemonenko.a.wezom@gmail.com', NULL, 0, 'ааааа', 'вп', 'грн', 'ru', 1, 6300.00, 250.00, 'MESMKL5AMVRRUDWL', 0, 'апвававав', 'Украина'),
(10, 1452244380, NULL, 0, 1, 1, 'Тест Имя', '0957406957', 32, '178.136.229.251', 'Тест Фамилия', 'artemonenko.a.wezom@gmail.com', NULL, 0, 'еуыв', 'ва', 'грн', 'ru', 1, 6300.00, 250.00, 'RFHLXXDN77VEP2LX', 0, 'Херсонская', 'Украина'),
(11, 1452583898, 1452584835, 0, 1, 1, 'Виталий', '+380992740348', 23, '178.136.229.251', 'Демяненко', 'demyanenko.v.wezom@gmail.com', NULL, 0, 'Херсон', '200 лет Херсона 8, кв. 146', '$', 'ru', 1, 247.50, 250.00, 'HJSW-CDSAD-SD234', 0, 'asdsad', 'Украина');

-- --------------------------------------------------------

--
-- Структура таблицы `orders_items`
--

CREATE TABLE IF NOT EXISTS `orders_items` (
  `id` int(10) NOT NULL,
  `order_id` int(10) NOT NULL,
  `catalog_id` int(10) DEFAULT NULL,
  `size_alias` varchar(255) DEFAULT '0',
  `price` double(12,2) NOT NULL DEFAULT '0.00',
  `count` int(5) NOT NULL DEFAULT '1',
  `color_alias` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `orders_only`
--

CREATE TABLE IF NOT EXISTS `orders_only` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '0',
  `name` varchar(64) DEFAULT NULL,
  `last_name` varchar(64) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `comment` text
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders_only`
--

INSERT INTO `orders_only` (`id`, `created_at`, `updated_at`, `status`, `name`, `last_name`, `email`, `phone`, `address`, `user_id`, `ip`, `language`, `comment`) VALUES
(1, 1449768266, 1449864740, 3, 'fddfg', 'Виталий', 'dfg@dsd.sdf', '+380992740348', 'dfgdf gdfgdfgdf', NULL, '127.0.0.1', 'ru', 'Тестовый заказ. Можно пропустить'),
(2, 1450173170, NULL, 0, 'твыыва', 'длывааолдр', 'artemonenko.a.wezom@gmail.com', '+380957406954', 'даывада довстваы 23', 28, '178.136.229.251', 'ru', NULL),
(3, 1450253282, NULL, 0, 'теесст', 'тестетст', 'artemonenko.a.wezom@gmail.com', '+380957406957', 'Украина, Херсонская область, г. Каховка, ул. 40 лет Победы, 25а/4', 32, '178.136.229.251', 'ru', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `orders_only_items`
--

CREATE TABLE IF NOT EXISTS `orders_only_items` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(128) DEFAULT NULL,
  `artikul` varchar(128) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `count` int(10) unsigned DEFAULT NULL,
  `price` double(12,2) DEFAULT NULL,
  `size` varchar(64) DEFAULT NULL,
  `color` varchar(64) DEFAULT NULL,
  `order_id` int(10) unsigned DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders_only_items`
--

INSERT INTO `orders_only_items` (`id`, `name`, `artikul`, `link`, `count`, `price`, `size`, `color`, `order_id`) VALUES
(1, 'g dfg dfgdfgd', '', '', 3, 435.00, 'sdfsd sd', 'dsfsdf', 1),
(2, '4345345', '345345', '345345345', 5, 4.00, 'fdg', 'dfg', 1),
(3, 'джинсы', '23442', 'http://www.ebay.com/itm/Levis-501-Jeans-Button-Fly-Mens-Denim-Stonewashed-W30-W32-W34-W36-W38-/261052509164', 1, 37.99, '48', 'синий', 2),
(4, 'товар с виктория сикрет', 'какой-то артикул', 'https://www.victoriassecret.com/sleepwear/flannel-pjs/the-dreamer-henley-pajama?cm_sp=&amp;amp;ProductID=261227&amp;amp;CatalogueType=OLS', 2, 39.50, 'какой-то размер', 'какой-то цвет', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `orders_simple`
--

CREATE TABLE IF NOT EXISTS `orders_simple` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '0',
  `ip` varchar(255) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `catalog_id` int(10) DEFAULT NULL,
  `color_alias` varchar(255) DEFAULT NULL,
  `size_alias` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders_simple`
--

INSERT INTO `orders_simple` (`id`, `created_at`, `updated_at`, `status`, `ip`, `user_id`, `phone`, `catalog_id`, `color_alias`, `size_alias`) VALUES
(1, 1449599068, NULL, 0, '127.0.0.1', NULL, '+380992740348', NULL, 'red-fair-isle', 'l'),
(2, 1449599677, NULL, 0, '127.0.0.1', NULL, '+380992740348', NULL, 'red-fair-isle', 'm'),
(3, 1449599723, NULL, 0, '127.0.0.1', NULL, '+380992740348', NULL, 'red-fair-isle', 'l'),
(4, 1450084583, NULL, 0, '178.136.229.251', NULL, '+380661844565', NULL, 'black-white-snowflakes', 'l'),
(5, 1450103866, NULL, 0, '178.136.229.251', NULL, '+380661864246', NULL, 'black-white-snowflakes', 'l'),
(6, 1450446134, NULL, 0, '178.136.229.251', NULL, '+09574069570', NULL, 'black-white-snowflakes', 'xl');

-- --------------------------------------------------------

--
-- Структура таблицы `prog`
--

CREATE TABLE IF NOT EXISTS `prog` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `amount` double(12,2) DEFAULT NULL,
  `percent` double(7,4) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `prog`
--

INSERT INTO `prog` (`id`, `created_at`, `updated_at`, `amount`, `percent`) VALUES
(43, 1449950515, NULL, 0.00, 0.0000),
(44, 1449950515, NULL, 250.00, 1.0000),
(45, 1449950515, NULL, 2000.00, 2.0000),
(46, 1449950515, NULL, 5000.00, 5.0000),
(47, 1449950515, NULL, 10000.00, 10.0000);

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `category_id` int(10) DEFAULT NULL,
  `date` int(10) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `views` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`id`, `created_at`, `updated_at`, `status`, `category_id`, `date`, `image`, `views`) VALUES
(1, 1470834964, 1470945148, 1, 4, 0, '3a44b0b3c2eb85ed5840a01c597209df.jpg', 0),
(2, 1470946284, 1471269381, 1, 1, 0, '7f710b29dd91c58d8a4540daadea25b2.jpg', 0),
(3, 1470946367, NULL, 1, 3, NULL, 'cf7f4262d2d573645f1234faaa242d31.jpg', 0),
(4, 1470946476, NULL, 1, 2, NULL, '5ced5f299acbed0cf6381a46a99cdfb6.jpg', 0),
(5, 1470946626, 1470987676, 1, 2, 0, '21f6c6c636b3f3e9fbff092fe164fce3.png', 0),
(16, 1471330566, 1471332574, 1, 4, 0, 'cee4df95508da0140f6a0d3d8a2ea9d5.jpg', 0),
(17, 1471332298, 1471332477, 1, 3, 0, NULL, 0),
(18, 1471332603, NULL, 1, 2, NULL, NULL, 0),
(19, 1471332720, 1473065958, 1, 1, 0, 'c21f989490adfec6af5eaa528cb66938.jpg', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `projects_i18n`
--

CREATE TABLE IF NOT EXISTS `projects_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text` text,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `keywords` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projects_i18n`
--

INSERT INTO `projects_i18n` (`id`, `name`, `text`, `h1`, `title`, `description`, `keywords`, `row_id`, `language`) VALUES
(1, 'Название проекта №1', '<p class="text-justify">Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет оценить значение существенных финансовых и административных условий. С другой стороны консультация с широким активом требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития.</p>\r\n<p class="text-justify">Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют определения и уточнения систем массового участия. Товарищи! сложившаяся структура организации в значительной степени обуславливает создание систем массового участия. С другой стороны дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития. Равным образом новая модель организационной деятельности способствует подготовки и реализации направлений прогрессивного развития.</p>', NULL, NULL, NULL, NULL, 1, 'ru'),
(2, 'Project title №1', '<p>It should not be forgotten that the constant quantitative growth and scope of our activity allows us to estimate the value of the substantial financial and administrative conditions. On the other hand a consultation with a broad asset requires us to analyze personnel training system, and meets urgent needs. The significance of these problems are so obvious that the new model of organizational performance is an interesting experiment testing the future direction of development.</p>\r\n<p>Ideological considerations of a higher order, as well as the beginning of the day to day work on the formation positions require determination and refinement of participatory systems. Comrades! developed organizational structure largely determines the establishment of participatory systems. On the other hand the further development of various forms of activities contributes to the preparation and implementation of the forms of development. Likewise, a new model of organizational activity contributes to the preparation and implementation of the directions of progressive development.</p>', NULL, NULL, NULL, NULL, 1, 'en'),
(3, 'Идейные соображения высшего порядка', '<p>Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Значимость этих проблем настолько очевидна, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации новых предложений. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также консультация с широким активом требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. С другой стороны консультация с широким активом требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития. Таким образом новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.</p>\r\n<p>&nbsp;</p>', NULL, NULL, NULL, NULL, 2, 'ru'),
(4, 'Ideological considerations of a higher order', '<p>The significance of these problems are so obvious that continuous information and propaganda support of our activities is an interesting experiment checking the appropriate activation conditions. The significance of these problems are so obvious that the current structure of the organization entails the process of implementation and upgrading of new proposals. On the other hand the further development of different forms of activity plays an important role in the formation of shapes. Ideological considerations of a higher order, as well as consultation with a broad asset requires the definition and specification of the positions taken by participants in relation to the assigned tasks. On the other hand a consultation with a broad asset requires us to analyze personnel training system, and meets urgent needs.</p>\r\n<p>Ideological considerations of a higher order, as well as permanent information and propaganda support of our activities is an interesting experiment testing the future direction of development. Thus, a new model of organizational activity provides a wide range of (specialist) participated in the formation of the positions taken by participants in relation to the assigned tasks.</p>', NULL, NULL, NULL, NULL, 2, 'en'),
(5, 'Значимость этих проблем настолько очевидна', '<p>Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Значимость этих проблем настолько очевидна, что сложившаяся структура организации влечет за собой процесс внедрения и модернизации новых предложений. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также консультация с широким активом требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. С другой стороны консультация с широким активом требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития. Таким образом новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.</p>', NULL, NULL, NULL, NULL, 3, 'ru'),
(6, ' The significance of these problems are so obvious ', '<p>The significance of these problems are so obvious that continuous information and propaganda support of our activities is an interesting experiment checking the appropriate activation conditions. The significance of these problems are so obvious that the current structure of the organization entails the process of implementation and upgrading of new proposals. On the other hand the further development of different forms of activity plays an important role in the formation of shapes. Ideological considerations of a higher order, as well as consultation with a broad asset requires the definition and specification of the positions taken by participants in relation to the assigned tasks. On the other hand a consultation with a broad asset requires us to analyze personnel training system, and meets urgent needs.</p>\r\n<p>Ideological considerations of a higher order, as well as permanent information and propaganda support of our activities is an interesting experiment testing the future direction of development. Thus, a new model of organizational activity provides a wide range of (specialist) participated in the formation of the positions taken by participants in relation to the assigned tasks.</p>', NULL, NULL, NULL, NULL, 3, 'en'),
(7, 'Задача организации, в особенности же дальнейшее развитие', '<p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Таким образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Задача организации, в особенности же дальнейшее развитие различных форм деятельности способствует подготовки и реализации соответствующий условий активизации. Разнообразный и богатый опыт консультация с широким активом представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития.</p>', NULL, NULL, NULL, NULL, 4, 'ru'),
(8, 'The task of organizing, in particular the further development', '<p>A varied and rich experience in the beginning of the day to day work on the formation position largely determines the creation of areas of progressive development. Similarly, established the organization structure provides a wide range of (specialist) participated in the formation of personnel training system, and meets urgent needs. Comrades! Consultation with a wide range of asset provides a broad (specialist) participated in the formation of the corresponding activation conditions. Thus, the further development of various forms of activity is an interesting experiment test areas of progressive development. Thus the constant information and propaganda support of our business allows us to estimate the value of the model. Everyday experience shows that permanent quantitative growth and scope of our activity contributes to the preparation and implementation of personnel training system, and meets urgent needs.</p>\r\n<p>The task of organizing, in particular the further development of various forms of activities contributes to the preparation and implementation of the appropriate activation conditions. A varied and rich experience in consulting with a broad asset is an interesting experiment testing personnel training system, and meets urgent needs. Daily experience shows that the further development of various forms of activity allows us to estimate the value of personnel training system, and meets urgent needs. Thus the beginning of the day to day work on the formation position plays an important role in shaping the development of the model.</p>', NULL, NULL, NULL, NULL, 4, 'en'),
(9, 'Повседневная практика показывает', '<p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Таким образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Задача организации, в особенности же дальнейшее развитие различных форм деятельности способствует подготовки и реализации соответствующий условий активизации. Разнообразный и богатый опыт консультация с широким активом представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития.</p>', NULL, NULL, NULL, NULL, 5, 'ru'),
(10, 'Daily experience shows that the further', '<p>A varied and rich experience in the beginning of the day to day work on the formation position largely determines the creation of areas of progressive development. Similarly, established the organization structure provides a wide range of (specialist) participated in the formation of personnel training system, and meets urgent needs. Comrades! Consultation with a wide range of asset provides a broad (specialist) participated in the formation of the corresponding activation conditions. Thus, the further development of various forms of activity is an interesting experiment test areas of progressive development. Thus the constant information and propaganda support of our business allows us to estimate the value of the model. Everyday experience shows that permanent quantitative growth and scope of our activity contributes to the preparation and implementation of personnel training system, and meets urgent needs.</p>\r\n<p>The task of organizing, in particular the further development of various forms of activities contributes to the preparation and implementation of the appropriate activation conditions. A varied and rich experience in consulting with a broad asset is an interesting experiment testing personnel training system, and meets urgent needs. Daily experience shows that the further development of various forms of activity allows us to estimate the value of personnel training system, and meets urgent needs. Thus the beginning of the day to day work on the formation position plays an important role in shaping the development of the model.</p>', NULL, NULL, NULL, NULL, 5, 'en'),
(11, 'Тестовый проект111.', '<p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Таким образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Задача организации, в особенности же дальнейшее развитие различных форм деятельности способствует подготовки и реализации соответствующий условий активизации. Разнообразный и богатый опыт консультация с широким активом представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития.</p>\r\n<p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Таким образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Задача организации, в особенности же дальнейшее развитие различных форм деятельности способствует подготовки и реализации соответствующий условий активизации. Разнообразный и богатый опыт консультация с широким активом представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития.</p>\r\n<p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание направлений прогрессивного развития. Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Таким образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.</p>\r\n<p>Задача организации, в особенности же дальнейшее развитие различных форм деятельности способствует подготовки и реализации соответствующий условий активизации. Разнообразный и богатый опыт консультация с широким активом представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития.</p>', NULL, NULL, NULL, NULL, 6, 'ru'),
(12, 'Test project111.', '', NULL, NULL, NULL, NULL, 6, 'en'),
(13, 'Тестовый проект222', '<p><strong>Использовать все виды списков</strong></p>\r\n<ul>\r\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n<li>Etiam id leo at eros tempor aliquet nec vitae mi.</li>\r\n<li>Sed vel leo quis est dictum egestas.</li>\r\n<li>Morbi ac orci at ex pharetra finibus vitae in sem.</li>\r\n<li>Sed et odio ac velit euismod varius vitae in ligula.&nbsp;</li>\r\n</ul>\r\n<ul style="list-style-type: circle;">\r\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n<li>Etiam id leo at eros tempor aliquet nec vitae mi.</li>\r\n<li>Sed vel leo quis est dictum egestas.</li>\r\n<li>Morbi ac orci at ex pharetra finibus vitae in sem.</li>\r\n<li>Sed et odio ac velit euismod varius vitae in ligula.&nbsp;</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul style="list-style-type: square;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ol>\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: lower-alpha;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>&nbsp;Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: lower-greek;">\r\n<li>&nbsp;Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>&nbsp;Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>&nbsp;Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>&nbsp;Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>&nbsp;Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>&nbsp;Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: lower-roman;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>.Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>.Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: upper-alpha;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: upper-roman;">\r\n<li>.Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus lorem. Vivamus sed metus aliquet, tempor turpis sit amet, volutpat risus. Fusce magna neque, pellentesque vitae purus vel, pellentesque maximus ante. Vivamus diam lectus, lobortis nec ipsum quis, laoreet semper odio. Nam consectetur nisi turpis, ut pulvinar justo aliquam vitae. Fusce egestas eros sodales, aliquam erat sed, vulputate massa. Mauris eu dolor vitae dui tempus semper. Cras elementum, nibh vel scelerisque dignissim, metus orci malesuada tellus, maximus eleifend urna libero quis ipsum. Ut ex lectus, scelerisque sed cursus nec, ullamcorper ut elit.</p>\r\n<p style="text-align: right;"><strong>Выравнивание</strong>&nbsp;<strong>по</strong>&nbsp;<strong>правому</strong>&nbsp;<strong>краю</strong></p>\r\n<p style="text-align: right;">Cras imperdiet dolor eu vestibulum congue. Proin suscipit fermentum ex, quis tempor est cursus non. Nullam suscipit augue dui. Ut molestie interdum tortor maximus commodo. Vestibulum non est volutpat, molestie mauris in, feugiat est. Donec consequat ligula sed egestas pretium. Nam ac mauris rhoncus, lobortis dui non, molestie leo. Quisque pretium sed metus sed tristique. Fusce a nibh eu justo pharetra blandit. Nullam id risus erat. Aenean malesuada quam ut est auctor, vitae ullamcorper velit congue. In in placerat tellus. Duis sit amet dui id purus porta ornare non ac erat. Aenean dapibus arcu elit, tempor gravida arcu blandit eu.</p>\r\n<p style="text-align: center;"><strong>Выравнивание</strong>&nbsp;<strong>по</strong>&nbsp;<strong>центру</strong></p>\r\n<p style="text-align: center;">Sed tempor, ante vitae faucibus feugiat, felis magna pretium nisl, ac pellentesque mi mi id augue. Aliquam a mauris lobortis, congue odio ac, dictum quam. Suspendisse tempus orci ut molestie cursus. Etiam consectetur vehicula ipsum, et sodales nisl. Vestibulum id aliquam libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut leo in neque pharetra iaculis.</p>\r\n<p style="text-align: justify;"><strong>Выравнивание</strong>&nbsp;<strong>по</strong>&nbsp;<strong>ширине</strong></p>\r\n<p style="text-align: justify;">Donec quis fermentum risus. Aliquam efficitur aliquam urna, vitae ornare purus feugiat non. Nam laoreet, velit at porta aliquam, dolor sem pretium nulla, vel sagittis sapien ante eget sapien. Sed est elit, lacinia et urna vel, venenatis vestibulum tortor. Duis ac tincidunt dolor. Pellentesque lacinia hendrerit urna sit amet lobortis. Suspendisse potenti. Vivamus eu sapien sollicitudin, elementum turpis efficitur, feugiat sapien. Nulla congue rutrum nisl. Quisque pretium facilisis ligula eu tincidunt. Donec posuere lorem eu est mattis commodo. Suspendisse pretium nibh nec convallis vehicula. Cras ac suscipit mi, vitae laoreet mauris. Aliquam erat volutpat. Quisque scelerisque nunc ut congue scelerisque.</p>\r\n<p><strong>Добавить ссылку &ndash; одна открывается в текущем окне, одна в соседнем</strong></p>\r\n<p><a href="http://uk.lipsum.com/">Proin justo nisl, faucibus</a>&nbsp;nec dignissim a, tincidunt at lorem. Vivamus ligula arcu, faucibus a ex et, viverra molestie velit. Donec ut justo arcu. Integer a lorem ut massa mattis vestibulum. Fusce in lacus eget dolor finibus vestibulum. Vestibulum lobortis placerat felis non feugiat. Sed eu risus non nisi iaculis elementum.&nbsp;<a href="https://google.com/">Etiam eu eros eget</a>&nbsp;ante cursus laoreet in ut nisi. Phasellus porta, est vitae accumsan dictum, erat nibh bibendum tellus, id suscipit elit mauris nec felis. Nunc in sodales erat, in scelerisque sapien. Aenean rutrum ligula leo, nec fringilla mi consectetur a. Quisque molestie nulla sit amet nibh dictum maximus.</p>\r\n<h3><span style="text-decoration: underline; color: #99cc00; background-color: #ffcc00;"><em>Изменить форматирование &ndash; размер, цвет, фон, формат, начертание шрифта (все возможные варианты редактора)</em></span></h3>\r\n<p><strong>Nunc ac massa sit amet erat dignissim tristique. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lorem justo, vestibulum quis posuere blandit,&nbsp;</strong>volutpat&nbsp;<em>vitae tellus. Sed blandit tortor vitae libero porttitor, eu vehicula odio dapibus. Quisque rhoncus facilisis vulputate. Etiam mi sem, placerat ut erat non, accumsan dignissim magna. Nullam tempor eleifend erat eu placerat. Nulla suscipit nunc sed</em>&nbsp;tortor sodales sodales. Suspendisse porta placerat tellus, eget luctus arcu blandit at. Suspendisse imperdiet, sapien ac hendrerit laoreet, mauris tortor porttitor augue, pellentesque mattis nisi nulla eu urna. Donec dictum sed velit id tristique. Vivamus sit amet eleifend ex. Quisque ullamcorper rhoncus congue.</p>\r\n<p>Duis imperdiet neque velit, vel tempor dui volutpat sit amet. Sed laoreet quam vitae sem vulputate vulputate sed et metus. Phasellus nec eros rhoncus, semper tortor nec, rutrum justo. Donec in lectus ullamcorper, aliquam nibh vitae, commodo augue. Duis eget lorem ac purus venenatis eleifend. Phasellus finibus magna at ante volutpat, vel porttitor ante gravida. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\r\n<table width="640">\r\n<tbody>\r\n<tr>\r\n<td>\r\n<p>№</p>\r\n</td>\r\n<td>\r\n<p>1</p>\r\n</td>\r\n<td>\r\n<p>2</p>\r\n</td>\r\n<td>\r\n<p>3</p>\r\n</td>\r\n<td>\r\n<p>4</p>\r\n</td>\r\n<td>\r\n<p>5</p>\r\n</td>\r\n<td>\r\n<p>6</p>\r\n</td>\r\n<td>\r\n<p>7</p>\r\n</td>\r\n<td>\r\n<p>8</p>\r\n</td>\r\n<td>\r\n<p>9</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>1</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td>\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td>\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td>\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td>\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td>\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>&nbsp;</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td>\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td>\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td>\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td>\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td>\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>&nbsp;</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td>\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td>\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td>\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td>\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td>\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<p>&nbsp;</p>\r\n<p><strong>Вставить изображение с описанием</strong></p>\r\n<p>&nbsp;</p>\r\n<p><strong>Вставить видео с изображением</strong></p>\r\n<p>&nbsp;</p>\r\n<p><strong>Вставить видео без изображения</strong></p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', NULL, NULL, NULL, NULL, 7, 'ru');
INSERT INTO `projects_i18n` (`id`, `name`, `text`, `h1`, `title`, `description`, `keywords`, `row_id`, `language`) VALUES
(14, 'Test project222', '<p><strong>Использовать все виды списков</strong></p>\r\n<ul>\r\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n<li>Etiam id leo at eros tempor aliquet nec vitae mi.</li>\r\n<li>Sed vel leo quis est dictum egestas.</li>\r\n<li>Morbi ac orci at ex pharetra finibus vitae in sem.</li>\r\n<li>Sed et odio ac velit euismod varius vitae in ligula.&nbsp;</li>\r\n</ul>\r\n<ul style="list-style-type: circle;">\r\n<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n<li>Etiam id leo at eros tempor aliquet nec vitae mi.</li>\r\n<li>Sed vel leo quis est dictum egestas.</li>\r\n<li>Morbi ac orci at ex pharetra finibus vitae in sem.</li>\r\n<li>Sed et odio ac velit euismod varius vitae in ligula.&nbsp;</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ul style="list-style-type: square;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<ol>\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: lower-alpha;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>&nbsp;Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: lower-greek;">\r\n<li>&nbsp;Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>&nbsp;Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>&nbsp;Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>&nbsp;Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>&nbsp;Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>&nbsp;Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: lower-roman;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>.Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>.Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: upper-alpha;">\r\n<li>Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<ol style="list-style-type: upper-roman;">\r\n<li>.Nulla bibendum arcu pellentesque enim ultricies, at luctus mi scelerisque.</li>\r\n<li>Nulla vel risus sollicitudin, interdum felis non, consectetur risus.</li>\r\n<li>Phasellus ut odio non turpis tincidunt consectetur non non sem.</li>\r\n<li>Duis in quam ac ante sagittis accumsan ut ac dolor.</li>\r\n<li>Morbi eleifend enim aliquam neque dapibus blandit.</li>\r\n<li>Vestibulum in mauris in velit malesuada volutpat ac eget orci.</li>\r\n<li>Duis faucibus odio at arcu placerat, in aliquet leo mollis.</li>\r\n</ol>\r\n<p>&nbsp;</p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus lorem. Vivamus sed metus aliquet, tempor turpis sit amet, volutpat risus. Fusce magna neque, pellentesque vitae purus vel, pellentesque maximus ante. Vivamus diam lectus, lobortis nec ipsum quis, laoreet semper odio. Nam consectetur nisi turpis, ut pulvinar justo aliquam vitae. Fusce egestas eros sodales, aliquam erat sed, vulputate massa. Mauris eu dolor vitae dui tempus semper. Cras elementum, nibh vel scelerisque dignissim, metus orci malesuada tellus, maximus eleifend urna libero quis ipsum. Ut ex lectus, scelerisque sed cursus nec, ullamcorper ut elit.</p>\r\n<p style="text-align: right;"><strong>Выравнивание</strong>&nbsp;<strong>по</strong>&nbsp;<strong>правому</strong>&nbsp;<strong>краю</strong></p>\r\n<p style="text-align: right;">Cras imperdiet dolor eu vestibulum congue. Proin suscipit fermentum ex, quis tempor est cursus non. Nullam suscipit augue dui. Ut molestie interdum tortor maximus commodo. Vestibulum non est volutpat, molestie mauris in, feugiat est. Donec consequat ligula sed egestas pretium. Nam ac mauris rhoncus, lobortis dui non, molestie leo. Quisque pretium sed metus sed tristique. Fusce a nibh eu justo pharetra blandit. Nullam id risus erat. Aenean malesuada quam ut est auctor, vitae ullamcorper velit congue. In in placerat tellus. Duis sit amet dui id purus porta ornare non ac erat. Aenean dapibus arcu elit, tempor gravida arcu blandit eu.</p>\r\n<p style="text-align: center;"><strong>Выравнивание</strong>&nbsp;<strong>по</strong>&nbsp;<strong>центру</strong></p>\r\n<p style="text-align: center;">Sed tempor, ante vitae faucibus feugiat, felis magna pretium nisl, ac pellentesque mi mi id augue. Aliquam a mauris lobortis, congue odio ac, dictum quam. Suspendisse tempus orci ut molestie cursus. Etiam consectetur vehicula ipsum, et sodales nisl. Vestibulum id aliquam libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut leo in neque pharetra iaculis.</p>\r\n<p style="text-align: justify;"><strong>Выравнивание</strong>&nbsp;<strong>по</strong>&nbsp;<strong>ширине</strong></p>\r\n<p style="text-align: justify;">Donec quis fermentum risus. Aliquam efficitur aliquam urna, vitae ornare purus feugiat non. Nam laoreet, velit at porta aliquam, dolor sem pretium nulla, vel sagittis sapien ante eget sapien. Sed est elit, lacinia et urna vel, venenatis vestibulum tortor. Duis ac tincidunt dolor. Pellentesque lacinia hendrerit urna sit amet lobortis. Suspendisse potenti. Vivamus eu sapien sollicitudin, elementum turpis efficitur, feugiat sapien. Nulla congue rutrum nisl. Quisque pretium facilisis ligula eu tincidunt. Donec posuere lorem eu est mattis commodo. Suspendisse pretium nibh nec convallis vehicula. Cras ac suscipit mi, vitae laoreet mauris. Aliquam erat volutpat. Quisque scelerisque nunc ut congue scelerisque.</p>\r\n<p><strong>Добавить ссылку &ndash; одна открывается в текущем окне, одна в соседнем</strong></p>\r\n<p><a href="http://uk.lipsum.com/">Proin justo nisl, faucibus</a>&nbsp;nec dignissim a, tincidunt at lorem. Vivamus ligula arcu, faucibus a ex et, viverra molestie velit. Donec ut justo arcu. Integer a lorem ut massa mattis vestibulum. Fusce in lacus eget dolor finibus vestibulum. Vestibulum lobortis placerat felis non feugiat. Sed eu risus non nisi iaculis elementum.&nbsp;<a href="https://google.com/">Etiam eu eros eget</a>&nbsp;ante cursus laoreet in ut nisi. Phasellus porta, est vitae accumsan dictum, erat nibh bibendum tellus, id suscipit elit mauris nec felis. Nunc in sodales erat, in scelerisque sapien. Aenean rutrum ligula leo, nec fringilla mi consectetur a. Quisque molestie nulla sit amet nibh dictum maximus.</p>\r\n<h3><span style="text-decoration: underline; color: #99cc00; background-color: #ffcc00;"><em>Изменить форматирование &ndash; размер, цвет, фон, формат, начертание шрифта (все возможные варианты редактора)</em></span></h3>\r\n<p><strong>Nunc ac massa sit amet erat dignissim tristique. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent lorem justo, vestibulum quis posuere blandit,&nbsp;</strong>volutpat&nbsp;<em>vitae tellus. Sed blandit tortor vitae libero porttitor, eu vehicula odio dapibus. Quisque rhoncus facilisis vulputate. Etiam mi sem, placerat ut erat non, accumsan dignissim magna. Nullam tempor eleifend erat eu placerat. Nulla suscipit nunc sed</em>&nbsp;tortor sodales sodales. Suspendisse porta placerat tellus, eget luctus arcu blandit at. Suspendisse imperdiet, sapien ac hendrerit laoreet, mauris tortor porttitor augue, pellentesque mattis nisi nulla eu urna. Donec dictum sed velit id tristique. Vivamus sit amet eleifend ex. Quisque ullamcorper rhoncus congue.</p>\r\n<p>Duis imperdiet neque velit, vel tempor dui volutpat sit amet. Sed laoreet quam vitae sem vulputate vulputate sed et metus. Phasellus nec eros rhoncus, semper tortor nec, rutrum justo. Donec in lectus ullamcorper, aliquam nibh vitae, commodo augue. Duis eget lorem ac purus venenatis eleifend. Phasellus finibus magna at ante volutpat, vel porttitor ante gravida. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\r\n<table width="640">\r\n<tbody>\r\n<tr>\r\n<td>\r\n<p>№</p>\r\n</td>\r\n<td>\r\n<p>1</p>\r\n</td>\r\n<td>\r\n<p>2</p>\r\n</td>\r\n<td>\r\n<p>3</p>\r\n</td>\r\n<td>\r\n<p>4</p>\r\n</td>\r\n<td>\r\n<p>5</p>\r\n</td>\r\n<td>\r\n<p>6</p>\r\n</td>\r\n<td>\r\n<p>7</p>\r\n</td>\r\n<td>\r\n<p>8</p>\r\n</td>\r\n<td>\r\n<p>9</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>1</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td>\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td>\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td>\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td>\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td>\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>&nbsp;</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td>\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td>\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td>\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td>\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td>\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>&nbsp;</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>mollis, sodales nulla non, molestie tortor. Vivamus pretium sed mi finibus efficitur. Sed in diam laoreet, varius dolor sed, ultrices leo.</p>\r\n</td>\r\n<td>\r\n<p>Nam vulputate ipsum eros, sed vulputate massa mattis eu. In nec dolor nec magna molestie laoreet ut nec erat. Ut vulputate</p>\r\n</td>\r\n<td>\r\n<p>gravida vestibulum. Aliquam vel leo magna. Nam in eros non ante suscipit placerat. Pellentesque feugiat ante augue, sed ultrices metus tempor a.</p>\r\n</td>\r\n<td>\r\n<p>pulvinar condimentum. Integer ut pretium velit. Aliquam erat volutpat. Duis pretium, turpis eget rutrum euismod, leo odio eleifend mauris,</p>\r\n</td>\r\n<td>\r\n<p>Vivamus eu risus sed mi pharetra tincidunt. Maecenas nibh dui, facilisis sed turpis vel, congue cursus mi. Nunc id accumsan ipsum.</p>\r\n</td>\r\n<td>\r\n<p>libero. Maecenas erat elit, sollicitudin at nunc eleifend, auctor mollis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n<td>\r\n<p>Phasellus non libero ut sem scelerisque dignissim. Fusce suscipit sit amet tellus eget semper. Aliquam sollicitudin quis lectus eu dignissim.</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<p>&nbsp;</p>\r\n<p><strong>Вставить изображение с описанием</strong></p>\r\n<p>&nbsp;</p>\r\n<p><strong>Вставить видео с изображением</strong></p>\r\n<p>&nbsp;</p>\r\n<p><strong>Вставить видео без изображения</strong></p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>', NULL, NULL, NULL, NULL, 7, 'en'),
(15, 'Тестовый проект111', '<p>тест</p>', NULL, NULL, NULL, NULL, 8, 'ru'),
(16, 'Test project111', '<p>Test</p>', NULL, NULL, NULL, NULL, 8, 'en'),
(17, 'Тестовый проект111', '<p>цццццццц</p>', NULL, NULL, NULL, NULL, 9, 'ru'),
(18, 'Test project111', '<p>wwwwwww</p>', NULL, NULL, NULL, NULL, 9, 'en'),
(19, 'Тестовый проект222', '<p>ццц</p>', NULL, NULL, NULL, NULL, 10, 'ru'),
(20, 'Test projec222', '<p>www</p>', NULL, NULL, NULL, NULL, 10, 'en'),
(21, 'тестовый проект333', '<p>ццццццц</p>', NULL, NULL, NULL, NULL, 11, 'ru'),
(22, 'Test projec333', '<p>wwwwwwwwwwww</p>', NULL, NULL, NULL, NULL, 11, 'en'),
(23, 'тест1', '<p>ццц</p>', NULL, NULL, NULL, NULL, 12, 'ru'),
(24, 'test1', '<p>www</p>', NULL, NULL, NULL, NULL, 12, 'en'),
(25, 'тест2', '<p>цццццццццццццццццццццццц</p>', NULL, NULL, NULL, NULL, 13, 'ru'),
(26, 'test2', '<p>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>', NULL, NULL, NULL, NULL, 13, 'en'),
(27, 'тест3', '<p>Разрастаясь до крупных размеров, компании, как правило, становятся очень традиционными и даже консервативными, медлительными и забюрократизированными. Они теряют способность быть инновационными и постепенно теряют рынок. Для инноваций необходимо пробудить в сотрудниках дух предпринимательства &ndash; свободу предлагать новое, брать инициативу на себя. Именно такие компании принято называть предпринимательскими. Следующий быстрый тест позволяет грубо, но быстро оценить уровень развития предпринимательства в вашей компании.</p>', NULL, NULL, NULL, NULL, 14, 'ru'),
(28, 'test3', '<p>Grow to large sizes, the company, as a rule, are very traditional and even conservative, slow and bureaucratic. They lose their ability to be innovative and gradually lose the market. For innovation is necessary to awaken the spirit of enterprise employees - the freedom to offer new, to take the initiative. Such companies are called entrepreneurial. The following rapid test enables rough, but quickly assess the level of development of business in your company.</p>', NULL, NULL, NULL, NULL, 14, 'en'),
(29, 'тест4', '<p>ццццццццц</p>\r\n<p><video controls="controls" width="300" height="150">\r\n<source src="http://beatus.wezom.ks.ua/Media/files/filemanager/test.mp4" type="video/mp4" />\r\n</video></p>', NULL, NULL, NULL, NULL, 15, 'ru'),
(30, 'test4', '<p>wwwwww</p>', NULL, NULL, NULL, NULL, 15, 'en'),
(31, 'Тестовый проект.', '<p>Тестовый проект.</p>', NULL, NULL, NULL, NULL, 16, 'ru'),
(32, 'Test project.', '<p>Test project.</p>', NULL, NULL, NULL, NULL, 16, 'en'),
(33, 'Тест проект', '<p>Веб-разработка</p>', NULL, NULL, NULL, NULL, 17, 'ru'),
(34, 'Test project', '<p>Web-Development</p>', NULL, NULL, NULL, NULL, 17, 'en'),
(35, 'Стратегия', '', NULL, NULL, NULL, NULL, 18, 'ru'),
(36, 'Strategy', '', NULL, NULL, NULL, NULL, 18, 'en'),
(37, 'Дизайн', '<p>Дизайн</p>', NULL, NULL, NULL, NULL, 19, 'ru'),
(38, 'Design', '<p>Design</p>', NULL, NULL, NULL, NULL, 19, 'en'),
(39, 'asdfsd', '', NULL, NULL, NULL, NULL, 19, 'de'),
(40, 'asdfsadf', '', NULL, NULL, NULL, NULL, 19, 'sp'),
(41, 'asdfasdfsadf', '', NULL, NULL, NULL, NULL, 19, 'fr');

-- --------------------------------------------------------

--
-- Структура таблицы `projects_images`
--

CREATE TABLE IF NOT EXISTS `projects_images` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `sort` int(10) NOT NULL DEFAULT '0',
  `projects_id` int(10) NOT NULL DEFAULT '0',
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projects_images`
--

INSERT INTO `projects_images` (`id`, `created_at`, `updated_at`, `sort`, `projects_id`, `image`) VALUES
(15, 1470916757, NULL, 1, 1, 'b02bbdf9b9791b545638cb08f1df0e25.jpg'),
(16, 1470916757, NULL, 2, 1, 'bcd75e7041312ef52703183cf7a66388.jpg'),
(17, 1470916758, NULL, 3, 1, 'aa3e8e072bf3a891272aedc1b180c234.jpg'),
(18, 1470986519, NULL, 1, 5, 'e6166e9c2abbd4c4bda85f410a58e531.png'),
(19, 1470986565, NULL, 2, 5, '7b8606edb9b0c5bcd7c80bbe7d9dcc92.jpg'),
(20, 1470986629, NULL, 3, 5, 'e9a0890712891eaaa8cec4ecb4f3ad6f.jpg'),
(22, 1470988273, NULL, 1, 6, 'beab2a62dd32831c304eeba542c22417.jpg'),
(26, 1471248126, NULL, 1, 15, '04f003ea3362ab5b3f9abfc04d848444.jpg'),
(27, 1471254471, NULL, 1, 14, '5c6a22372cb25b10c00256a059bc518f.jpg'),
(28, 1471254471, NULL, 2, 14, 'a53f3b9f70bdbc1b5e4b4bdd312919da.jpg'),
(29, 1471254472, NULL, 3, 14, 'fd0325bdcbff8c07990b762f7e894f2a.png'),
(30, 1471330587, NULL, 1, 16, 'd210c377346ef4bb37b3cfd1c07d7b8d.jpg'),
(31, 1471330588, NULL, 2, 16, '2569f3d7740bad125ba4319e30c009a8.png'),
(32, 1471332473, NULL, 1, 17, '2f478c1c8937bd889e7152859a3bb904.jpg'),
(35, 1471332858, 1471332904, 3, 19, '9b9ab7eca6a356ab7615750e3c053c92.jpg'),
(36, 1471332858, 1471332904, 4, 19, '7ddc6beb71fb7c156f5767a6b8e690e9.jpg'),
(37, 1471332956, NULL, 5, 19, '32a4e56f1ea48a323924da79d4f568cf.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `projects_info`
--

CREATE TABLE IF NOT EXISTS `projects_info` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `theme` text,
  `ip` varchar(16) DEFAULT NULL,
  `phone` varchar(150) NOT NULL,
  `project` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projects_info`
--

INSERT INTO `projects_info` (`id`, `created_at`, `updated_at`, `status`, `name`, `email`, `theme`, `ip`, `phone`, `project`) VALUES
(48, 1471331593, NULL, 1, 'test', 'test@test.test', NULL, '178.136.229.251', '', 1),
(49, 1471331762, NULL, 1, 'тест', 'Mail@mail.ru', NULL, '178.136.229.251', '', 1),
(51, 1471333032, NULL, 1, 'design', 'creative@design.com', NULL, '178.136.229.251', '', 19),
(52, 1471333055, 1471333087, 1, 'Viacheslav', 'ivanov.via4eslav@gmail.com', NULL, '178.136.229.251', '', 18),
(53, 1471336013, NULL, 1, 'Samsung', 'samsung@sss.ss', NULL, '178.136.229.251', '', 5),
(54, 1471337569, NULL, 1, 'Ipad', 'ipad@ipad.ipad', NULL, '178.136.229.251', '', 18);

-- --------------------------------------------------------

--
-- Структура таблицы `promo`
--

CREATE TABLE IF NOT EXISTS `promo` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `percent` double(7,4) DEFAULT NULL COMMENT 'Процент скидки от 0% до 100%',
  `start_amount` int(10) DEFAULT '0',
  `date_from` int(10) DEFAULT NULL,
  `date_to` int(10) DEFAULT NULL,
  `max_uses` int(10) DEFAULT NULL,
  `uses` int(10) DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `promo`
--

INSERT INTO `promo` (`id`, `created_at`, `updated_at`, `status`, `name`, `code`, `percent`, `start_amount`, `date_from`, `date_to`, `max_uses`, `uses`) VALUES
(6, 1449909966, 1449949378, 1, 'test 1', 'JRNCX7PUZPDM', 20.0000, 243, 1449871200, 1450994400, NULL, 0),
(7, 1449910311, 1450172536, 1, 'test', 'SYN7AUWJR9K3', 10.0000, 200, 1449871200, 1450908000, 2, 2),
(8, 1450167909, NULL, 1, 'акция12', 'HSHLLEZ36C4W', 12.0000, 150, 1450130400, 1450130400, 1, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `promo_groups`
--

CREATE TABLE IF NOT EXISTS `promo_groups` (
  `id` int(10) NOT NULL,
  `promo_id` int(10) DEFAULT NULL,
  `group_id` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `promo_groups`
--

INSERT INTO `promo_groups` (`id`, `promo_id`, `group_id`) VALUES
(130, 6, 37),
(131, 6, 38),
(132, 6, 40),
(133, 6, 39),
(134, 6, 41),
(135, 6, 42),
(138, 7, 37),
(139, 7, 38),
(140, 8, 37),
(141, 8, 43);

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `city` varchar(128) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `mark` enum('1','2','3','4','5') DEFAULT '5'
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`id`, `created_at`, `updated_at`, `status`, `name`, `text`, `city`, `title`, `language`, `mark`) VALUES
(25, 1473251407, NULL, 1, 'Евгений Николаевич', 'Хочу поделиться с опытом, приобретенным во время прохождения курса лечения. Перед началом менструации я побывала в представительстве "SENSITIV IMAGO". У меня было нервное состояние, настроение не уравновешенное, наблюдались вздутие живота, сильные головные боли, мерзли конечности, бил озноб - под воздействием терапии эти симптомы прошли. Попеременно приходящие запор и понос прошли, стул нормализировался. Физически стала способной на большее. По дому могу делать больше чем до сих пор. Симптомы сильной заложенности носа уменьшились. Было воспаление горла, и сопровождающиеся с ним симптомы тоже уменьшились. Боли в груди и дрожание губ под... ...воздействием терапии прошли. Сильно выпадали волосы - степень выпадения уменьшилась. То есть в общей сложности курс терапии пришелся на пользу!', 'г. Будапешт, Венгрия', 'пациент, 57 лет', 'ru', '4'),
(26, 1473251443, NULL, 1, 'Анна Сергеевна', 'Хочу поделиться с опытом, приобретенным во время прохождения курса лечения. Перед началом менструации я побывала в представительстве "SENSITIV IMAGO". У меня было нервное состояние, настроение не уравновешенное, наблюдались вздутие живота, сильные головные боли, мерзли конечности, бил озноб - под воздействием терапии эти симптомы прошли. Попеременно приходящие запор и понос прошли, стул нормализировался. Физически стала способной на большее. По дому могу делать больше чем до сих пор. Симптомы сильной заложенности носа уменьшились. Было воспаление горла, и сопровождающиеся с ним симптомы тоже уменьшились. Боли в груди и дрожание губ под... ...воздействием терапии прошли. Сильно выпадали волосы - степень выпадения уменьшилась. То есть в общей сложности курс терапии пришелся на пользу!', 'г. Будапешт, Венгрия', 'пациент, 32 года', 'ru', '5'),
(27, 1473251480, NULL, 1, 'Марина Александровна', 'Хочу поделиться с опытом, приобретенным во время прохождения курса лечения. Перед началом менструации я побывала в представительстве "SENSITIV IMAGO". У меня было нервное состояние, настроение не уравновешенное, наблюдались вздутие живота, сильные головные боли, мерзли конечности, бил озноб - под воздействием терапии эти симптомы прошли. Попеременно приходящие запор и понос прошли, стул нормализировался. Физически стала способной на большее. По дому могу делать больше чем до сих пор. Симптомы сильной заложенности носа уменьшились. Было воспаление горла, и сопровождающиеся с ним симптомы тоже уменьшились. Боли в груди и дрожание губ под... ...воздействием терапии прошли. Сильно выпадали волосы - степень выпадения уменьшилась. То есть в общей сложности курс терапии пришелся на пользу!', 'г. Будапешт, Венгрия', 'пациент, 20 лет', 'ru', '5');

-- --------------------------------------------------------

--
-- Структура таблицы `seo_links`
--

CREATE TABLE IF NOT EXISTS `seo_links` (
  `id` int(10) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `seo_links_i18n`
--

CREATE TABLE IF NOT EXISTS `seo_links_i18n` (
  `id` int(10) NOT NULL,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `keywords` text,
  `text` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `seo_redirects`
--

CREATE TABLE IF NOT EXISTS `seo_redirects` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `link_from` varchar(255) DEFAULT NULL,
  `link_to` varchar(255) DEFAULT NULL,
  `type` int(4) NOT NULL DEFAULT '300'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `seo_scripts`
--

CREATE TABLE IF NOT EXISTS `seo_scripts` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `script` text,
  `status` int(1) DEFAULT '0',
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `place` varchar(31) DEFAULT 'head'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `seo_templates`
--

CREATE TABLE IF NOT EXISTS `seo_templates` (
  `id` int(10) NOT NULL,
  `name` varchar(250) CHARACTER SET cp1251 DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `seo_templates`
--

INSERT INTO `seo_templates` (`id`, `name`, `updated_at`) VALUES
(1, 'Шаблон для групп товаров', 1431017014),
(2, 'Шаблон для товаров', 1431364621),
(3, 'Шаблон для списка товаров из всех подгрупп', 1431364621),
(4, 'Шаблон для страницы сертификата', 1431364621);

-- --------------------------------------------------------

--
-- Структура таблицы `seo_templates_i18n`
--

CREATE TABLE IF NOT EXISTS `seo_templates_i18n` (
  `id` int(10) NOT NULL,
  `h1` varchar(250) CHARACTER SET cp1251 DEFAULT NULL,
  `title` varchar(250) CHARACTER SET cp1251 DEFAULT NULL,
  `description` text CHARACTER SET cp1251,
  `keywords` text CHARACTER SET cp1251,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `seo_templates_i18n`
--

INSERT INTO `seo_templates_i18n` (`id`, `h1`, `title`, `description`, `keywords`, `row_id`, `language`) VALUES
(1, '{{name}}', '{{name}} в интернет магазине HD-Moda. Купить обувь в Украине, Киеве', '{{content:20}}', '{{name}}, Купить обувь в Украине, Киеве', 1, 'ru'),
(2, '{{name}}', '{{name}} в интернет магазине HD-Moda. Купить лучшую обувь {{group}} в Украине, Киеве', 'Купить {{name}} в Украине. Огромный ассортимент обуви, современные {{group}} от компании {{brand}}. Гарантия качества, своевременная доставка, любые способы оплаты', 'Купить, {{name}}, {{group}}, {{brand}}, обувь', 2, 'ru'),
(3, '{{name}}', '{{name}} в интернет магазине HD-Moda. Купить обувь в Украине, Киеве', '', '', 1, 'en'),
(5, '{{name}}', '{{name}} в интернет магазине HD-Moda. Купить лучшую обувь {{group}} в Украине, Киеве', '', '', 2, 'en'),
(7, 'Все {{name}}', 'Все {{name}} в интернет магазине HD-Moda. Купить обувь в Украине, Киеве', '{{content:20}}', 'Все {{name}}, Купить обувь в Украине, Киеве', 3, 'ru'),
(8, 'Все {{name}}', 'Все {{name}}', '', '', 3, 'en'),
(10, '{{name}}', '{{name}}', '{{name}}', '{{name}}', 4, 'ru');

-- --------------------------------------------------------

--
-- Структура таблицы `sitemenu`
--

CREATE TABLE IF NOT EXISTS `sitemenu` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int(10) NOT NULL DEFAULT '0',
  `url` varchar(255) DEFAULT NULL,
  `nofollow` tinyint(1) unsigned DEFAULT '0',
  `group` tinyint(1) unsigned DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sitemenu`
--

INSERT INTO `sitemenu` (`id`, `created_at`, `updated_at`, `status`, `sort`, `url`, `nofollow`, `group`) VALUES
(11, 1448200602, 1471332067, 1, 0, 'about', 0, 0),
(12, 1448200726, 1471332067, 1, 2, 'works', 0, 0),
(13, 1448200745, 1471332067, 1, 1, 'services', 0, 0),
(14, 1448200821, 1471332067, 1, 3, 'news', 0, 0),
(15, 1448200875, 1471332067, 1, 4, 'contacts', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `sitemenu_i18n`
--

CREATE TABLE IF NOT EXISTS `sitemenu_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sitemenu_i18n`
--

INSERT INTO `sitemenu_i18n` (`id`, `name`, `row_id`, `language`) VALUES
(11, 'О компании', 11, 'ru'),
(12, 'About', 11, 'en'),
(14, 'Наши работы', 12, 'ru'),
(15, 'Our work', 12, 'en'),
(17, 'Услуги', 13, 'ru'),
(18, 'Services', 13, 'en'),
(20, 'Новости', 14, 'ru'),
(21, 'News', 14, 'en'),
(23, 'Контакты', 15, 'ru'),
(24, 'Contacts', 15, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `sizes`
--

CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  `sort` int(10) unsigned DEFAULT '0',
  `group` int(10) unsigned DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sizes`
--

INSERT INTO `sizes` (`id`, `created_at`, `updated_at`, `sort`, `group`, `alias`, `name`) VALUES
(1, 1448218702, 1448218824, 2, 2, 'm', 'M'),
(2, 1448218728, 1448218824, 3, 2, 'l', 'L'),
(3, 1448218740, 1448218824, 4, 2, 'xl', 'XL'),
(4, 1448218780, 1448218824, 1, 2, 's', 'S'),
(5, 1448218786, 1448218824, 0, 2, 'xs', 'XS'),
(6, 1448218792, 1448218824, 5, 2, 'xxl', 'XXL'),
(7, 1448218808, 1448218824, 6, 1, '39', '39'),
(8, 1448218813, 1448218824, 7, 1, '40', '40'),
(9, 1448218819, 1448218824, 8, 1, '41', '41'),
(11, 1452105534, NULL, 0, 1, '35', '35'),
(12, 1452105550, NULL, 0, 1, '36', '36'),
(13, 1452105564, NULL, 0, 1, '38', '38'),
(14, 1452105583, NULL, 0, 1, '37', '37'),
(15, 1452105640, NULL, 0, 3, '32a--xs', '32A + XS'),
(16, 1452106104, NULL, 0, 3, '32a--s', '32A + S'),
(17, 1452106130, NULL, 0, 3, '32b--xs', '32B + XS'),
(18, 1452106149, NULL, 0, 3, '32b--s', '32B + S'),
(19, 1452106167, NULL, 0, 3, '34a--xs', '34A + XS'),
(20, 1452106183, NULL, 0, 3, '34a--s', '34A + S'),
(21, 1452106198, NULL, 0, 3, '34a--m', '34A + M'),
(22, 1452106218, NULL, 0, 3, '34b--xs', '34B + XS'),
(23, 1452106234, NULL, 0, 3, '34b--s', '34B + S'),
(24, 1452106252, NULL, 0, 3, '34b--m', '34B + M'),
(25, 1452106269, NULL, 0, 3, '34c--xs', '34C + XS'),
(26, 1452106283, NULL, 0, 3, '34c--s', '34C + S'),
(27, 1452106299, NULL, 0, 3, '34c--m', '34C + M'),
(28, 1452106318, NULL, 0, 3, '36b--s', '36B + S'),
(29, 1452106333, NULL, 0, 3, '36b--m', '36B + M'),
(30, 1452106362, NULL, 0, 3, 'xs1', 'XS'),
(31, 1452106374, NULL, 0, 3, 's1', 'S'),
(32, 1452106384, NULL, 0, 3, 'm1', 'M'),
(33, 1452106393, NULL, 0, 3, 'l1', 'L'),
(34, 1452106405, NULL, 0, 3, 'xl1', 'XL');

-- --------------------------------------------------------

--
-- Структура таблицы `sizes_groups`
--

CREATE TABLE IF NOT EXISTS `sizes_groups` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `sort` int(10) unsigned DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sizes_groups`
--

INSERT INTO `sizes_groups` (`id`, `created_at`, `updated_at`, `sort`) VALUES
(1, 1448218116, 1448218138, 1),
(2, 1448218132, 1448218138, 0),
(3, 1450178482, NULL, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `sizes_groups_i18n`
--

CREATE TABLE IF NOT EXISTS `sizes_groups_i18n` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `row_id` int(10) unsigned DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sizes_groups_i18n`
--

INSERT INTO `sizes_groups_i18n` (`id`, `name`, `row_id`, `language`) VALUES
(1, 'Обувь', 1, 'ru'),
(2, 'Shoes', 1, 'en'),
(4, 'Одежда', 2, 'ru'),
(5, 'Clothes', 2, 'en'),
(7, 'Купальники', 3, 'ru'),
(8, 'Купальники', 3, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `slider`
--

CREATE TABLE IF NOT EXISTS `slider` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `sort` int(10) NOT NULL DEFAULT '0',
  `url` varchar(255) DEFAULT NULL,
  `image` varchar(128) DEFAULT NULL,
  `bg` varchar(128) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `slider`
--

INSERT INTO `slider` (`id`, `created_at`, `updated_at`, `status`, `sort`, `url`, `image`, `bg`) VALUES
(13, 1470731390, 1471239114, 1, 0, '', 'd5f4eecb2394be405905ab0428065a65.jpg', 'd48798bbb0e64a9e3b7475d15b283d06.jpg'),
(14, 1470731764, 1471333621, 1, 0, NULL, '0107c1985851437bd81661111f8bb2c8.jpg', '64dc9ea27ecfee34cae9db631e7d7735.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `slider_i18n`
--

CREATE TABLE IF NOT EXISTS `slider_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `text` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `text_bottom` text
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `slider_i18n`
--

INSERT INTO `slider_i18n` (`id`, `name`, `text`, `row_id`, `language`, `text_bottom`) VALUES
(1, 'Вместе расширим Ваши возможности', 'Мы убеждены, что созидательная сила движения заключается в понимании ситуации и соответствующем желании.', 13, 'ru', NULL),
(2, 'Together increases your chances', 'We are convinced that the creative power of the movement is to understand the situation and the corresponding desire.', 13, 'en', NULL),
(3, 'Вместе расширим Ваши возможности', 'Мы убеждены, что созидательная сила движения заключается в понимании ситуации и соответствующем желании.', 14, 'ru', NULL),
(4, 'Together2 increases1 your chances', 'We are convinced that the creative power of the movement is to understand the situation and the corresponding desire.', 14, 'en', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned DEFAULT NULL,
  `updated_at` int(10) unsigned DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT '0',
  `alias` varchar(200) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tags`
--

INSERT INTO `tags` (`id`, `created_at`, `updated_at`, `status`, `alias`) VALUES
(1, 1449171553, 1450256969, 1, 'teg1');

-- --------------------------------------------------------

--
-- Структура таблицы `tags_brands`
--

CREATE TABLE IF NOT EXISTS `tags_brands` (
  `id` int(10) unsigned NOT NULL,
  `tag_id` int(10) unsigned DEFAULT NULL,
  `brand_alias` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tags_brands`
--

INSERT INTO `tags_brands` (`id`, `tag_id`, `brand_alias`) VALUES
(1, NULL, 'colin-stuart'),
(2, NULL, 'victorias-secret'),
(3, NULL, 'hm'),
(4, NULL, 'pink-victorias-secret'),
(14, 1, 'victorias-secret');

-- --------------------------------------------------------

--
-- Структура таблицы `tags_groups`
--

CREATE TABLE IF NOT EXISTS `tags_groups` (
  `id` int(10) unsigned NOT NULL,
  `tag_id` int(10) unsigned DEFAULT NULL,
  `group_id` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tags_groups`
--

INSERT INTO `tags_groups` (`id`, `tag_id`, `group_id`) VALUES
(9, 1, 37);

-- --------------------------------------------------------

--
-- Структура таблицы `tags_i18n`
--

CREATE TABLE IF NOT EXISTS `tags_i18n` (
  `id` int(10) unsigned NOT NULL,
  `row_id` int(10) unsigned DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `h1` varchar(400) DEFAULT NULL,
  `title` varchar(400) DEFAULT NULL,
  `keywords` text,
  `description` text,
  `text` text
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tags_i18n`
--

INSERT INTO `tags_i18n` (`id`, `row_id`, `language`, `name`, `h1`, `title`, `keywords`, `description`, `text`) VALUES
(1, 1, 'ru', 'Тег1', 'Тег1Тег1', 'Тег1Тег1Тег1', 'Тег1Тег1Тег1Тег1', 'Тег1Тег1Тег1Тег1Тег1', '<p>Тег1Тег1Тег1Тег1Тег1Тег1</p>'),
(2, 1, 'en', 'Tag1', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `team`
--

CREATE TABLE IF NOT EXISTS `team` (
  `id` int(10) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `alias` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `views` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `team`
--

INSERT INTO `team` (`id`, `created_at`, `updated_at`, `status`, `alias`, `image`, `views`) VALUES
(1, 1473229626, NULL, 1, 'smirnova-tatjana', 'a34ff348e185309d1b6b5028a96bad3e.jpg', 0),
(2, 1473232189, NULL, 1, 'pavlenko-inna', '8cf9f27ab1613e1f42d764d5dba45c92.jpg', 0),
(3, 1473233934, NULL, 1, 'marchenko-galina', '3f3d06e063e9e5e363a9e2ec60debd96.jpg', 0),
(4, 1473233992, NULL, 1, 'shevchenko-vita', '90d9bafa2dbb7c5c5056b6a159fee58c.jpg', 0),
(5, 1473234077, NULL, 1, 'nedilko-aleksandr', 'f6eeed92864e2709d4bae2287c79ab40.jpg', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `team_i18n`
--

CREATE TABLE IF NOT EXISTS `team_i18n` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(250) DEFAULT NULL,
  `text` text,
  `h1` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `keywords` text,
  `row_id` int(10) DEFAULT NULL,
  `language` varchar(2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `team_i18n`
--

INSERT INTO `team_i18n` (`id`, `name`, `position`, `text`, `h1`, `title`, `description`, `keywords`, `row_id`, `language`) VALUES
(1, 'Смирнова Татьяна', 'Врач', '', NULL, NULL, NULL, NULL, 1, 'ru'),
(2, 'Tatiana Smirnova', 'Doctor', '', NULL, NULL, NULL, NULL, 1, 'en'),
(3, 'Tatiana Smirnova', 'Doctor', '', NULL, NULL, NULL, NULL, 1, 'de'),
(4, 'Tatiana Smirnova', 'Doctor', '', NULL, NULL, NULL, NULL, 1, 'sp'),
(5, 'Tatiana Smirnova', 'Doctor', '', NULL, NULL, NULL, NULL, 1, 'fr'),
(6, 'Павленко Инна', 'Администратор', '', NULL, NULL, NULL, NULL, 2, 'ru'),
(7, 'Pavlenko Inna', 'Administrator', '', NULL, NULL, NULL, NULL, 2, 'en'),
(8, 'Pavlenko Inna', 'Administrator', '', NULL, NULL, NULL, NULL, 2, 'de'),
(9, 'Pavlenko Inna', 'Administrator', '', NULL, NULL, NULL, NULL, 2, 'sp'),
(10, 'Pavlenko Inna', 'Administrator', '', NULL, NULL, NULL, NULL, 2, 'fr'),
(11, 'Марченко Галина', 'Директор', '', NULL, NULL, NULL, NULL, 3, 'ru'),
(12, 'Marchenko Galina', 'Director', '', NULL, NULL, NULL, NULL, 3, 'en'),
(13, 'Marchenko Galina', 'Director', '', NULL, NULL, NULL, NULL, 3, 'de'),
(14, 'Marchenko Galina', 'Director', '', NULL, NULL, NULL, NULL, 3, 'sp'),
(15, 'Marchenko Galina', 'Director', '', NULL, NULL, NULL, NULL, 3, 'fr'),
(16, 'Шевченко Вита', 'Менеджер-переводчик', '', NULL, NULL, NULL, NULL, 4, 'ru'),
(17, 'Shevchenko Wick', 'Manager-translator', '', NULL, NULL, NULL, NULL, 4, 'en'),
(18, 'Shevchenko Wick', 'Manager-translator', '', NULL, NULL, NULL, NULL, 4, 'de'),
(19, 'Shevchenko Wick', 'Manager-translator', '', NULL, NULL, NULL, NULL, 4, 'sp'),
(20, 'Shevchenko Wick', 'Manager-translator', '', NULL, NULL, NULL, NULL, 4, 'fr'),
(21, 'Недилько Александр', 'WEB-мастер', '', NULL, NULL, NULL, NULL, 5, 'ru'),
(22, 'Nedilko Alexander', 'WEB-master', '', NULL, NULL, NULL, NULL, 5, 'en'),
(23, 'Nedilko Alexander', 'WEB-master', '', NULL, NULL, NULL, NULL, 5, 'de'),
(24, 'Nedilko Alexander', 'WEB-master', '', NULL, NULL, NULL, NULL, 5, 'sp'),
(25, 'Nedilko Alexander', 'WEB-master', '', NULL, NULL, NULL, NULL, 5, 'fr');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) CHARACTER SET cp1251 DEFAULT NULL,
  `login` varchar(128) CHARACTER SET cp1251 DEFAULT NULL,
  `password` varchar(128) CHARACTER SET cp1251 DEFAULT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `hash` varchar(255) CHARACTER SET cp1251 DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `role_id` int(2) NOT NULL DEFAULT '1',
  `ip` varchar(16) DEFAULT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `last_login` int(10) DEFAULT NULL,
  `logins` int(10) DEFAULT '0',
  `last_name` varchar(64) DEFAULT NULL,
  `middle_name` varchar(64) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `login`, `password`, `created_at`, `updated_at`, `hash`, `email`, `status`, `role_id`, `ip`, `phone`, `last_login`, `logins`, `last_name`, `middle_name`) VALUES
(1, 'Администратор', 'admin', 'c2bcb46de4d99a0ce346ee0a6530b85bb6f0fb80656406a23d3e60c1158a22e8', 1418300546, 1430939378, '48e00180ccc77b94d73ec413b015a4cfb9aa58ba10d8c1b63aad5c8317847d9f', 'palenaya.v.wezom111@gmail.com', 1, 4, NULL, '+38 (111) 111-11-11', NULL, 0, NULL, NULL),
(2, 'weZom', 'wezom', '4958070fab7cebd8b1000c6c8cb1bca4aa23b509ee9bc4b70570b5c0e3dfe64a', NULL, 1435164507, 'c2bcb46de4d99a0ce346ee0a6530b85bb6f0fb80656406a23d3e60c1158a22e8', 'vitaliy.demyjkane3nko.1991@gmail.com', 1, 3, NULL, '+38 (567) 567-56-75', NULL, 0, NULL, NULL),
(23, 'Виталий', NULL, '52f3c00b62ec3f50526bc7968597f1ab49bd2b73a2d7d8ac20e446a50f9bde3f', 1448813244, 1450444249, 'ee415c9edce196b74b94186b197e199fe2c9f2a9539936e2f087f7e4d31a2af2', 'demyanenko.v.wezom@gmail.com', 1, 1, '127.0.0.1', '+380992740348', 1449422859, 6, 'Демяненко', NULL),
(24, NULL, NULL, '44cf0e51f520bb97943f1d0dccb35e859ec376943deba336c4e3f20e6d327d5b', 1450083038, NULL, '59c3fea86dcec30df1cdccee88c0baa9fee7144a44ce1cf58b82e0836542570a', 'test@test.ts', 0, 1, '178.136.229.251', NULL, NULL, 0, NULL, NULL),
(25, 'Dd', NULL, '76c2b19774817c5ead96291c2294041f624b0475a916caacf7bd955b526ccc15', 1450086873, 1450086943, '763981a3d05fe6928c96a85ec40fa8cefcb685cd11959fdb2351f5d5a09ac9fc', 'catdashyta@gmail.com', 1, 1, '93.79.133.79', '+380500230032', NULL, 0, 'Ddd', NULL),
(28, 'Оля', NULL, '99bbed544406cf05b82dd1e9f2affaebaf189fca8c2cfef0ee3ffa2f5250611f', 1450101199, 1450169620, 'ffc78106d3fa9f24a08b038e7fd55401fcd5c5300845e88c89ff880d0d8e4f1c', 'test.wezom@mail.ru', 1, 1, '178.136.229.251', '+380957406957', 1450101199, 1, 'Котикова', ''),
(29, 'ывф', NULL, '4bbdef8ce13b7cd89ef0601fbdc0c27b8f96de1f502d9c828ce1401a8fd84595', 1450103968, NULL, '428e5e8bb5d65b76eacff35627e66429aaada622a305a2e8e30eca22d7998cb4', 'test.wezom@yandex.ru', 0, 1, NULL, '+380661864848', NULL, 0, 'ыфыв', NULL),
(30, 'Grf', NULL, 'e9c82987c845016aa11d562400d66a434e117a9610c8f426c8b9166fbeb93bad', 1450181295, NULL, '97ccbc13c6fcb334a13450df22f8c9b7d45413d60ae00304c52c9a111f0463ad', 'terd@kijk.nim', 0, 1, NULL, '+380957409669', NULL, 0, 'Frr', NULL),
(32, 'Тест Имя', NULL, '99bbed544406cf05b82dd1e9f2affaebaf189fca8c2cfef0ee3ffa2f5250611f', 1450249955, 1452245353, 'b6117848ce4bf5e2aafed72a81ffbe84bed7db6898001701824766b102932215', 'artemonenko.a.wezom@gmail.com', 1, 1, '178.136.229.251', '0957406957', 1452242408, 5, 'Тест Фамилия', NULL),
(33, 'werwer', NULL, 'c9bb84c09123e7fdec64bb849a65d45f9862013e667e0d27ca7500cbe5abd6df', 1450445846, NULL, 'b7cb884baff448493f909569b877073731af019954a8188b2834ddb9fb044bd0', 'werwer@wer.ddd', 0, 1, NULL, '+735956546546', NULL, 0, 'werwerw', NULL),
(34, 'Юлия', NULL, '106497a9fffa553b21d3aa05160463ad610bdf54f5679fcaced9ba559fde1243', 1450787063, NULL, '3ad0af8cc627e8b4f242ed8f5ac44a5f286727fa379d6b200821f84ba8f6f4eb', 'knopka1290@gmail.com', 1, 1, '178.136.229.251', NULL, 1450787063, 1, 'Кардаш', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users_addresses`
--

CREATE TABLE IF NOT EXISTS `users_addresses` (
  `id` int(10) unsigned NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `main` tinyint(1) DEFAULT '0',
  `name` varchar(400) DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users_addresses`
--

INSERT INTO `users_addresses` (`id`, `created_at`, `updated_at`, `main`, `name`, `city`, `user_id`) VALUES
(1, 1449314324, 1449315295, 1, '200 лет Херсона 8, кв. 146', 'Херсон', 23),
(2, 1449314592, 1449315292, 0, 'Советская 12/14', 'Херсон', 23),
(8, 1450251626, 1450252536, 0, 'АДРЕСС ТЕСТ 1', 'ГОРОД ТЕСТ 1', 28),
(9, 1450251643, 1450252536, 0, 'ВТОРОЙ АДРЕС', 'ВТОРОЙГОРОД', 28),
(10, 1450252107, 1450252537, 1, '40 лет Победы, 25/4а', 'Арзамас-16', 28);

-- --------------------------------------------------------

--
-- Структура таблицы `users_networks`
--

CREATE TABLE IF NOT EXISTS `users_networks` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `network` varchar(32) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `uid` varchar(64) NOT NULL,
  `profile` varchar(128) NOT NULL,
  `first_name` varchar(32) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `email` varchar(64) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users_networks`
--

INSERT INTO `users_networks` (`id`, `user_id`, `network`, `created_at`, `uid`, `profile`, `first_name`, `last_name`, `email`) VALUES
(7, 23, 'vkontakte', 1447096768, '22898418', 'http://vk.com/id22898418', 'Виталя', 'Демяненко', 'demyanenko.v.wezom@ukr.net'),
(8, 23, 'facebook', 1447096775, '100003261046861', 'https://www.facebook.com/app_scoped_user_id/100003261046861/', 'Vitaliy', 'Demianenko', 'vitaliy.demyanenko.1991@gmail.com'),
(12, 23, 'instagram', 1449173472, '1685676043', 'http://instagram.com/demianenko_v', 'Vitaliy', 'Demianenko', 'demyanenko.v.wezom@gmail.com'),
(13, 28, 'vkontakte', 1450101199, '314286931', 'http://vk.com/id314286931', 'Оля', 'Котикова', 'test.wezom@mail.ru'),
(14, 34, 'vkontakte', 1450787063, '24595232', 'http://vk.com/id24595232', 'Юлия', 'Кардаш', 'knopka1290@gmail.com');

-- --------------------------------------------------------

--
-- Структура таблицы `users_roles`
--

CREATE TABLE IF NOT EXISTS `users_roles` (
  `id` int(2) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `alias` varchar(128) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users_roles`
--

INSERT INTO `users_roles` (`id`, `name`, `description`, `alias`, `created_at`, `updated_at`) VALUES
(1, 'Пользователь', 'Обычный пользователь, зарегистрировавшийся на сайте', 'user', NULL, NULL),
(3, 'Разработчик', 'Полный доступ ко всему + к тому к чему нет доступа у главного администратора', 'developer', NULL, NULL),
(4, 'Суперадмин', 'Доступ ко всем разделам, кроме тех, к которым имеет доступ только разработчик', 'superadmin', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users_wishlist`
--

CREATE TABLE IF NOT EXISTS `users_wishlist` (
  `id` int(10) unsigned NOT NULL,
  `catalog_id` int(10) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `visitors`
--

CREATE TABLE IF NOT EXISTS `visitors` (
  `id` int(11) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `country` varchar(63) DEFAULT NULL,
  `region` varchar(63) DEFAULT NULL,
  `city` varchar(63) DEFAULT NULL,
  `longitude` varchar(15) DEFAULT NULL,
  `latitude` varchar(15) DEFAULT NULL,
  `answer` text,
  `first_enter` int(10) DEFAULT NULL,
  `last_enter` int(10) DEFAULT NULL,
  `enters` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `visitors`
--

INSERT INTO `visitors` (`id`, `ip`, `country`, `region`, `city`, `longitude`, `latitude`, `answer`, `first_enter`, `last_enter`, `enters`) VALUES
(2, '46.175.163.12', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1436769939, 1443635307, 46),
(3, '46.175.163.23', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1436779299, 1436788232, 31),
(4, '178.136.229.251', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1436790847, 1446482463, 2686),
(5, '141.101.31.209', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1436793036, 1436793036, 2),
(6, '5.255.253.82', 'Россия', 'Центральный федеральный округ', 'Москва', '37.615560', '55.752252', '{"Address":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f, \\u041c\\u043e\\u0441\\u043a\\u0432\\u0430, \\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"RU","CountryName":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f","AdministrativeAreaName":"\\u0426\\u0435\\u043d\\u0442\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u0444\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433","SubAdministrativeAreaName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","LocalityName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","ThoroughfareName":"\\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":37.61556,"Latitude":55.752252}', 1436793615, 1436897192, 4),
(7, '82.207.32.122', 'Украина', 'Киев', 'Киев', '30.523792', '50.454657', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523792,"Latitude":50.454657}', 1436794089, 1436889003, 6),
(8, '94.153.238.74', 'Украина', 'Киев', 'Киев', '30.523792', '50.454657', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523792,"Latitude":50.454657}', 1436795971, 1436795990, 5),
(9, '77.52.155.160', 'Украина', 'Киев', 'Киев', '30.523792', '50.454657', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523792,"Latitude":50.454657}', 1436807599, 1436807624, 6),
(10, '77.52.153.204', 'Украина', 'Киев', 'Киев', '30.523792', '50.454657', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523792,"Latitude":50.454657}', 1436813898, 1436813902, 3),
(11, '93.79.166.242', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1436815753, 1436815947, 21),
(12, '77.52.158.210', 'Украина', 'Киев', 'Киев', '30.523792', '50.454657', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523792,"Latitude":50.454657}', 1436885640, 1436885640, 1),
(13, '5.255.253.92', 'Россия', 'Центральный федеральный округ', 'Москва', '37.615560', '55.752252', '{"Address":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f, \\u041c\\u043e\\u0441\\u043a\\u0432\\u0430, \\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"RU","CountryName":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f","AdministrativeAreaName":"\\u0426\\u0435\\u043d\\u0442\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u0444\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433","SubAdministrativeAreaName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","LocalityName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","ThoroughfareName":"\\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":37.61556,"Latitude":55.752252}', 1436893704, 1436893704, 1),
(14, '178.93.63.19', 'Украина', 'Киев', 'Киев', '30.523792', '50.454657', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523792,"Latitude":50.454657}', 1436899627, 1436899634, 2),
(15, '95.108.158.169', 'Россия', 'Центральный федеральный округ', 'Москва', '37.615560', '55.752252', '{"Address":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f, \\u041c\\u043e\\u0441\\u043a\\u0432\\u0430, \\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"RU","CountryName":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f","AdministrativeAreaName":"\\u0426\\u0435\\u043d\\u0442\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u0444\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433","SubAdministrativeAreaName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","LocalityName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","ThoroughfareName":"\\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":37.61556,"Latitude":55.752252}', 1436907570, 1436907570, 1),
(16, '127.0.0.1', NULL, NULL, NULL, NULL, NULL, NULL, 1438319894, 1446752659, 991),
(17, '62.76.103.139', 'Россия', 'Центральный федеральный округ', 'Москва', '37.615560', '55.752252', '{"Address":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f, \\u041c\\u043e\\u0441\\u043a\\u0432\\u0430, \\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"RU","CountryName":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f","AdministrativeAreaName":"\\u0426\\u0435\\u043d\\u0442\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u0444\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433","SubAdministrativeAreaName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","LocalityName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","ThoroughfareName":"\\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":37.61556,"Latitude":55.752252}', 1439317767, 1439317767, 1),
(18, '62.76.103.137', 'Россия', 'Центральный федеральный округ', 'Москва', '37.615560', '55.752252', '{"Address":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f, \\u041c\\u043e\\u0441\\u043a\\u0432\\u0430, \\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"RU","CountryName":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f","AdministrativeAreaName":"\\u0426\\u0435\\u043d\\u0442\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u0444\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433","SubAdministrativeAreaName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","LocalityName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","ThoroughfareName":"\\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":37.61556,"Latitude":55.752252}', 1439323710, 1439323710, 1),
(19, '104.45.18.178', NULL, NULL, NULL, NULL, NULL, NULL, 1439379430, 1439379430, 1),
(20, '23.101.61.176', 'Соединённые Штаты Америки', 'Вашингтон', NULL, '-122.121543', '47.673986', '{"Address":"\\u0421\\u043e\\u0435\\u0434\\u0438\\u043d\\u0451\\u043d\\u043d\\u044b\\u0435 \\u0428\\u0442\\u0430\\u0442\\u044b \\u0410\\u043c\\u0435\\u0440\\u0438\\u043a\\u0438, \\u0412\\u0430\\u0448\\u0438\\u043d\\u0433\\u0442\\u043e\\u043d, \\u041a\\u0438\\u043d\\u0433, Cascade Valleys Heritage Corridor","CountryNameCode":"US","CountryName":"\\u0421\\u043e\\u0435\\u0434\\u0438\\u043d\\u0451\\u043d\\u043d\\u044b\\u0435 \\u0428\\u0442\\u0430\\u0442\\u044b \\u0410\\u043c\\u0435\\u0440\\u0438\\u043a\\u0438","AdministrativeAreaName":"\\u0412\\u0430\\u0448\\u0438\\u043d\\u0433\\u0442\\u043e\\u043d","SubAdministrativeAreaName":"\\u041a\\u0438\\u043d\\u0433","ThoroughfareName":"Cascade Valleys Heritage Corridor","Longitude":-122.121543,"Latitude":47.673986}', 1439381412, 1439528444, 2),
(21, '188.163.64.164', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1439407765, 1439407765, 1),
(22, '37.53.164.140', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1439815475, 1439912997, 3),
(23, '46.33.235.207', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1440142147, 1440142147, 1),
(24, '37.115.37.41', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1440316869, 1440317540, 2),
(25, '141.101.7.200', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1440574841, 1440574841, 1),
(26, '37.25.105.82', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1441198859, 1441198859, 1),
(27, '95.132.65.20', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1441218023, 1441218786, 8),
(28, '5.248.122.132', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1441386208, 1441386237, 2),
(29, '77.52.157.154', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1441439358, 1441439358, 1),
(30, '178.94.7.60', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1441478891, 1441514080, 12),
(31, '178.93.23.91', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1441525980, 1441525980, 1),
(32, '93.79.133.79', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1441704254, 1441704254, 1),
(33, '46.33.240.230', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1441706615, 1441894928, 2),
(34, '78.27.159.148', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1441736777, 1441736777, 1),
(35, '158.255.159.142', 'Россия', 'Центральный федеральный округ', 'Москва', '37.615560', '55.752252', '{"Address":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f, \\u041c\\u043e\\u0441\\u043a\\u0432\\u0430, \\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"RU","CountryName":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f","AdministrativeAreaName":"\\u0426\\u0435\\u043d\\u0442\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u0444\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433","SubAdministrativeAreaName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","LocalityName":"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430","ThoroughfareName":"\\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":37.61556,"Latitude":55.752252}', 1442324774, 1442326178, 6),
(36, '31.43.18.81', 'Украина', 'Житомирская область', 'Житомир', '28.676775', '50.264764', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440, \\u0443\\u043b\\u0438\\u0446\\u0430 \\u041c\\u0438\\u0445\\u0430\\u0438\\u043b\\u0430 \\u0413\\u0440\\u0443\\u0448\\u0435\\u0432\\u0441\\u043a\\u043e\\u0433\\u043e","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440","ThoroughfareName":"\\u0443\\u043b\\u0438\\u0446\\u0430 \\u041c\\u0438\\u0445\\u0430\\u0438\\u043b\\u0430 \\u0413\\u0440\\u0443\\u0448\\u0435\\u0432\\u0441\\u043a\\u043e\\u0433\\u043e","Longitude":28.676775,"Latitude":50.264764}', 1442825933, 1443032101, 25),
(37, '46.33.244.80', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1443531682, 1443538287, 14),
(38, '46.136.3.147', NULL, NULL, NULL, '2', '46', NULL, 1443603129, 1443603612, 10),
(39, '31.193.124.174', 'Россия', 'Северо-Западный федеральный округ', 'Санкт-Петербург', '30.314709', '59.938166', '{"Address":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f, \\u0421\\u0430\\u043d\\u043a\\u0442-\\u041f\\u0435\\u0442\\u0435\\u0440\\u0431\\u0443\\u0440\\u0433, \\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u043f\\u043b\\u043e\\u0449\\u0430\\u0434\\u044c","CountryNameCode":"RU","CountryName":"\\u0420\\u043e\\u0441\\u0441\\u0438\\u044f","AdministrativeAreaName":"\\u0421\\u0435\\u0432\\u0435\\u0440\\u043e-\\u0417\\u0430\\u043f\\u0430\\u0434\\u043d\\u044b\\u0439 \\u0444\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433","SubAdministrativeAreaName":"\\u0421\\u0430\\u043d\\u043a\\u0442-\\u041f\\u0435\\u0442\\u0435\\u0440\\u0431\\u0443\\u0440\\u0433","LocalityName":"\\u0421\\u0430\\u043d\\u043a\\u0442-\\u041f\\u0435\\u0442\\u0435\\u0440\\u0431\\u0443\\u0440\\u0433","ThoroughfareName":"\\u0414\\u0432\\u043e\\u0440\\u0446\\u043e\\u0432\\u0430\\u044f \\u043f\\u043b\\u043e\\u0449\\u0430\\u0434\\u044c","Longitude":30.314709,"Latitude":59.938166}', 1443609860, 1443610490, 2),
(40, '195.230.129.9', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1443902052, 1443902052, 1),
(41, '93.79.169.214', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1444222828, 1444222828, 1),
(42, '89.19.105.19', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1444226112, 1444226112, 1),
(43, '93.79.245.43', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1444231244, 1444231798, 15),
(44, '93.79.132.79', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1444233347, 1444233347, 1),
(45, '109.104.179.45', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1444309268, 1444309281, 3),
(46, '93.79.187.241', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1444568002, 1444568002, 1),
(47, '176.38.168.242', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1444745351, 1444745472, 4),
(48, '31.43.28.67', 'Украина', 'Житомирская область', 'Житомир', '28.676775', '50.264764', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440, \\u0443\\u043b\\u0438\\u0446\\u0430 \\u041a\\u043e\\u0442\\u043e\\u0432\\u0441\\u043a\\u043e\\u0433\\u043e","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440","ThoroughfareName":"\\u0443\\u043b\\u0438\\u0446\\u0430 \\u041a\\u043e\\u0442\\u043e\\u0432\\u0441\\u043a\\u043e\\u0433\\u043e","Longitude":28.676775,"Latitude":50.264764}', 1445493510, 1445493605, 13),
(49, '212.111.209.20', 'Украина', 'Херсонская область', 'Херсон', '32.617801', '46.655810', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0425\\u0435\\u0440\\u0441\\u043e\\u043d, \\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0425\\u0435\\u0440\\u0441\\u043e\\u043d","DependentLocalityName":"\\u0421\\u0443\\u0432\\u043e\\u0440\\u043e\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0440\\u0430\\u0439\\u043e\\u043d","Longitude":32.617801,"Latitude":46.65581}', 1445972551, 1446064625, 13),
(50, '90.191.172.183', NULL, NULL, NULL, '24.753530', '59.436960', NULL, 1445974986, 1445975063, 9),
(51, '178.92.174.22', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1446039058, 1446039058, 1),
(52, '31.43.17.114', 'Украина', 'Житомирская область', 'Житомир', '28.676775', '50.264764', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440, \\u0443\\u043b\\u0438\\u0446\\u0430 \\u041a\\u043e\\u0442\\u043e\\u0432\\u0441\\u043a\\u043e\\u0433\\u043e","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440","ThoroughfareName":"\\u0443\\u043b\\u0438\\u0446\\u0430 \\u041a\\u043e\\u0442\\u043e\\u0432\\u0441\\u043a\\u043e\\u0433\\u043e","Longitude":28.676775,"Latitude":50.264764}', 1446110638, 1446110796, 20),
(53, '176.104.11.150', 'Украина', 'Житомирская область', 'Бердичев', '28.602350', '49.899278', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c, \\u0411\\u0435\\u0440\\u0434\\u0438\\u0447\\u0435\\u0432","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u0416\\u0438\\u0442\\u043e\\u043c\\u0438\\u0440\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u0411\\u0435\\u0440\\u0434\\u0438\\u0447\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u0411\\u0435\\u0440\\u0434\\u0438\\u0447\\u0435\\u0432","Longitude":28.60235,"Latitude":49.899278}', 1446133206, 1446133271, 11),
(54, '193.239.254.154', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1446205418, 1446209868, 2),
(55, '212.92.249.206', 'Украина', 'Николаевская область', 'Николаев', '31.997883', '46.965870', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432, \\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430, 93","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0430\\u044f \\u043e\\u0431\\u043b\\u0430\\u0441\\u0442\\u044c","SubAdministrativeAreaName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0440\\u043e\\u0434\\u0441\\u043a\\u043e\\u0439 \\u0441\\u043e\\u0432\\u0435\\u0442","LocalityName":"\\u041d\\u0438\\u043a\\u043e\\u043b\\u0430\\u0435\\u0432","ThoroughfareName":"\\u043f\\u0440\\u043e\\u0441\\u043f\\u0435\\u043a\\u0442 \\u041b\\u0435\\u043d\\u0438\\u043d\\u0430","PremiseNumber":"93","Longitude":31.997883,"Latitude":46.96587}', 1446468906, 1446468906, 1),
(56, '176.8.202.47', 'Украина', 'Киев', 'Киев', '30.523819', '50.454685', '{"Address":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430, \\u041a\\u0438\\u0435\\u0432, \\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","CountryNameCode":"UA","CountryName":"\\u0423\\u043a\\u0440\\u0430\\u0438\\u043d\\u0430","AdministrativeAreaName":"\\u041a\\u0438\\u0435\\u0432","LocalityName":"\\u041a\\u0438\\u0435\\u0432","ThoroughfareName":"\\u0422\\u0440\\u0451\\u0445\\u0441\\u0432\\u044f\\u0442\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0430\\u044f \\u0443\\u043b\\u0438\\u0446\\u0430","Longitude":30.523819,"Latitude":50.454685}', 1446480282, 1446488075, 11);

-- --------------------------------------------------------

--
-- Структура таблицы `visitors_hits`
--

CREATE TABLE IF NOT EXISTS `visitors_hits` (
  `id` int(10) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` int(10) DEFAULT NULL,
  `updated_at` int(10) DEFAULT NULL,
  `status` varchar(32) NOT NULL DEFAULT '200 OK',
  `device` varchar(32) NOT NULL DEFAULT 'Computer',
  `useragent` varchar(255) DEFAULT NULL,
  `counter` int(10) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=3083 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `visitors_hits`
--

INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(1, '46.175.163.12', '/', 1436771768, 1436771768, '200 OK', 'Computer', NULL, 1),
(2, '46.175.163.12', '/', 1436771773, 1436771773, '200 OK', 'Computer', NULL, 1),
(3, '46.175.163.12', '/product/nike_air_max_90_hyperfuse6927', 1436771795, 1436771795, '200 OK', 'Computer', NULL, 1),
(4, '46.175.163.12', '/product/nike_air_max_90_hyperfuse6927', 1436771841, 1436771841, '200 OK', 'Computer', NULL, 1),
(5, '46.175.163.23', '/', 1436779299, 1436779299, '200 OK', 'Phone', NULL, 1),
(6, '178.136.229.251', '/', 1436790847, 1436790847, '200 OK', 'Computer', NULL, 1),
(7, '141.101.31.209', '/', 1436793036, 1436793036, '200 OK', 'Phone', NULL, 1),
(8, '82.207.32.122', '/', 1436794089, 1436794089, '200 OK', 'Phone', NULL, 1),
(9, '94.153.238.74', '/', 1436795971, 1436795971, '200 OK', 'Phone', NULL, 1),
(10, '77.52.155.160', '/', 1436807599, 1436807599, '200 OK', 'Phone', NULL, 1),
(11, '93.79.166.242', '/', 1436815753, 1436815753, '200 OK', 'Phone', NULL, 1),
(12, '93.79.166.242', '/', 1436815761, 1436815761, '200 OK', 'Computer', NULL, 1),
(13, '93.79.166.242', '/', 1436815796, 1436815796, '200 OK', 'Computer', NULL, 1),
(14, '93.79.166.242', '/catalog', 1436815802, 1436815802, '200 OK', 'Computer', NULL, 1),
(15, '93.79.166.242', '/catalog/for_men', 1436815807, 1436815807, '200 OK', 'Computer', NULL, 1),
(16, '93.79.166.242', '/catalog/krossovki_dlja_bega', 1436815810, 1436815810, '200 OK', 'Computer', NULL, 1),
(17, '93.79.166.242', '/product/test_wezom', 1436815816, 1436815816, '200 OK', 'Computer', NULL, 1),
(18, '93.79.166.242', '/catalog/krossovki_dlja_bega', 1436815823, 1436815823, '200 OK', 'Computer', NULL, 1),
(19, '93.79.166.242', '/', 1436815834, 1436815834, '200 OK', 'Computer', NULL, 1),
(20, '93.79.166.242', '/catalog', 1436815909, 1436815909, '200 OK', 'Computer', NULL, 1),
(21, '46.175.163.12', '/', 1436824627, 1436824627, '200 OK', 'Computer', NULL, 1),
(22, '46.175.163.12', '/w', 1436824636, 1436824636, '404 Not Found', 'Computer', NULL, 1),
(23, '46.175.163.12', '/', 1436824886, 1436824886, '200 OK', 'Computer', NULL, 1),
(24, '46.175.163.12', '/', 1436824888, 1436824888, '200 OK', 'Computer', NULL, 1),
(25, '5.255.253.82', '/catalog/krossovki_dlja_bega/filter/size=41_eur&color=beige,gray&sezon=autumn', 1436827506, 1436827506, '200 OK', 'Computer', NULL, 1),
(26, '5.255.253.82', '/catalog/krossovki_dlja_bega/filter/brand=nike&available=2&size=42_eur&color=blue', 1436844355, 1436844355, '200 OK', 'Computer', NULL, 1),
(27, '46.175.163.12', '/', 1436860567, 1436860567, '200 OK', 'Computer', NULL, 1),
(28, '46.175.163.12', '/', 1436860588, 1436860588, '200 OK', 'Phone', NULL, 1),
(29, '46.175.163.12', '/', 1436860713, 1436860713, '200 OK', 'Computer', NULL, 1),
(30, '46.175.163.12', '/catalog/krossovki_dlja_bega', 1436860727, 1436860727, '200 OK', 'Computer', NULL, 1),
(31, '46.175.163.12', '/catalog/krossovki_dlja_bega8', 1436860737, 1436860737, '404 Not Found', 'Computer', NULL, 1),
(32, '46.175.163.12', '/catalog/krossovki_dlja_bega', 1436860784, 1436860784, '200 OK', 'Computer', NULL, 1),
(33, '178.136.229.251', '/backend/auth/login', 1436860913, 1436860913, '404 Not Found', 'Computer', NULL, 1),
(34, '46.175.163.12', '/catalog/krossovki_dlja_bega', 1436860919, 1436860919, '200 OK', 'Computer', NULL, 1),
(35, '178.136.229.251', '/backend', 1436860924, 1436860924, '404 Not Found', 'Computer', NULL, 1),
(36, '46.175.163.12', '/', 1436862837, 1436862837, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(37, '46.175.163.12', '/product/nike_air_max_90_hyperfuse6869', 1436862877, 1436862877, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(38, '178.136.229.251', '/', 1436880477, 1436880477, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36', 1),
(39, '77.52.158.210', '/product/nike_air_max_90_hyperfuse6869', 1436885640, 1436885640, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(40, '82.207.32.122', '/', 1436889003, 1436889003, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(41, '5.255.253.92', '/articles/muzhskaja_asics', 1436893704, 1436893704, '200 OK', 'Computer', 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)', 1),
(42, '5.255.253.82', '/catalog/krossovki_dlja_bega/filter/size=42_eur&material=sintetik&sezon=spring,summer', 1436897192, 1436897192, '200 OK', 'Computer', 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)', 1),
(43, '178.93.63.19', '/', 1436899627, 1436899627, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(44, '178.93.63.19', '/product/nike_air_max_90_hyperfuse2018', 1436899634, 1436899634, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(45, '46.175.163.12', '/product/nike_air_max_90_hyperfuse2018', 1436900755, 1436900755, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(46, '46.175.163.12', '/', 1436900758, 1436900758, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36', 1),
(47, '46.175.163.12', '/', 1436901253, 1436901253, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(48, '95.108.158.169', '/product/nike_air_max_90_hyperfuse6869', 1436907570, 1436907570, '200 OK', 'Computer', 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)', 1),
(49, '46.175.163.12', '/', 1436909319, 1436909319, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(50, '46.175.163.12', '/', 1436909343, 1436909343, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(51, '46.175.163.12', '/', 1436909414, 1436909414, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(52, '46.175.163.12', '/', 1436909426, 1436909426, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(53, '46.175.163.12', '/', 1436909438, 1436909438, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(54, '46.175.163.12', '/', 1436909589, 1436909589, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(55, '46.175.163.12', '/', 1436909625, 1436909625, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(56, '46.175.163.12', '/', 1436909635, 1436909635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(57, '46.175.163.12', '/', 1436909675, 1436909675, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(58, '46.175.163.12', '/user', 1436909679, 1436909679, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(59, '46.175.163.12', '/', 1436909683, 1436909683, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(60, '127.0.0.1', '/', 1438319894, 1438319894, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(61, '127.0.0.1', '/', 1438949176, 1438949176, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(62, '127.0.0.1', '/', 1438949780, 1438949780, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(63, '127.0.0.1', '/user', 1438951113, 1438951113, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(64, '127.0.0.1', '/user/orders', 1438951123, 1438951123, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(65, '127.0.0.1', '/user/profile', 1438951125, 1438951125, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(66, '127.0.0.1', '/user', 1438953202, 1438953202, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(67, '127.0.0.1', '/', 1438953344, 1438953344, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(68, '127.0.0.1', '/', 1438953475, 1438953475, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(69, '127.0.0.1', '/', 1438953527, 1438953527, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(70, '127.0.0.1', '/', 1438953603, 1438953603, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(71, '127.0.0.1', '/', 1438953700, 1438953700, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(72, '127.0.0.1', '/', 1438953783, 1438953783, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(73, '127.0.0.1', '/news', 1438953812, 1438953812, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(74, '127.0.0.1', '/news/vchapsrol54642505', 1438953815, 1438953815, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(75, '127.0.0.1', '/news', 1438953817, 1438953817, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(76, '127.0.0.1', '/news/nazvanie_novost', 1438953820, 1438953820, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(77, '127.0.0.1', '/news', 1438953821, 1438953821, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(78, '127.0.0.1', '/news/novye_krossovki_nike_air_force_1_low_purple_venom', 1438953825, 1438953825, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(79, '127.0.0.1', '/news', 1438953829, 1438953829, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(80, '127.0.0.1', '/news', 1438954579, 1438954579, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(81, '127.0.0.1', '/news', 1438954657, 1438954657, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(82, '127.0.0.1', '/', 1438954670, 1438954670, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(83, '127.0.0.1', '/user', 1438954687, 1438954687, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(84, '127.0.0.1', '/dostavka', 1438954691, 1438954691, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(85, '127.0.0.1', '/', 1438954696, 1438954696, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(86, '127.0.0.1', '/cart', 1438954700, 1438954700, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(87, '127.0.0.1', '/', 1438954703, 1438954703, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(88, '178.136.229.251', '/', 1439185093, 1439185093, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(89, '178.136.229.251', '/', 1439185123, 1439185123, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(90, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1439185135, 1439185135, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(91, '178.136.229.251', '/', 1439199636, 1439199636, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(92, '127.0.0.1', '/', 1439203224, 1439203224, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(93, '178.136.229.251', '/', 1439205572, 1439205572, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(94, '178.136.229.251', '/', 1439208477, 1439208477, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(95, '178.136.229.251', '/', 1439211314, 1439211314, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(96, '178.136.229.251', '/', 1439211349, 1439211349, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(97, '178.136.229.251', '/', 1439211375, 1439211375, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(98, '178.136.229.251', '/', 1439213766, 1439213766, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(99, '178.136.229.251', '/', 1439214150, 1439214150, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(100, '178.136.229.251', '/', 1439214160, 1439214160, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(101, '178.136.229.251', '/', 1439214309, 1439214309, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(102, '178.136.229.251', '/', 1439214854, 1439214854, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(103, '178.136.229.251', '/', 1439214854, 1439214854, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(104, '178.136.229.251', '/', 1439214869, 1439214869, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(105, '178.136.229.251', '/', 1439214905, 1439214905, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(106, '178.136.229.251', '/', 1439215023, 1439215023, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(107, '178.136.229.251', '/', 1439215038, 1439215038, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(108, '178.136.229.251', '/', 1439215112, 1439215112, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(109, '178.136.229.251', '/', 1439215122, 1439215122, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(110, '178.136.229.251', '/', 1439215122, 1439215122, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(111, '178.136.229.251', '/', 1439215228, 1439215228, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(112, '178.136.229.251', '/', 1439215349, 1439215349, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(113, '178.136.229.251', '/', 1439215492, 1439215492, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(114, '178.136.229.251', '/', 1439215492, 1439215492, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(115, '178.136.229.251', '/', 1439215493, 1439215493, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(116, '178.136.229.251', '/', 1439215494, 1439215494, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(117, '178.136.229.251', '/', 1439215522, 1439215522, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(118, '178.136.229.251', '/', 1439215532, 1439215532, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(119, '178.136.229.251', '/', 1439215620, 1439215620, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(120, '178.136.229.251', '/', 1439215623, 1439215623, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(121, '178.136.229.251', '/', 1439215633, 1439215633, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(122, '178.136.229.251', '/', 1439215633, 1439215633, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(123, '178.136.229.251', '/', 1439215686, 1439215686, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(124, '178.136.229.251', '/', 1439215689, 1439215689, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(125, '178.136.229.251', '/', 1439215706, 1439215706, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(126, '178.136.229.251', '/', 1439215727, 1439215727, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(127, '178.136.229.251', '/', 1439215748, 1439215748, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(128, '178.136.229.251', '/', 1439215750, 1439215750, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(129, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1439215752, 1439215752, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(130, '178.136.229.251', '/', 1439215754, 1439215754, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(131, '178.136.229.251', '/', 1439215758, 1439215758, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(132, '178.136.229.251', '/', 1439215783, 1439215783, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(133, '178.136.229.251', '/', 1439215951, 1439215951, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(134, '178.136.229.251', '/', 1439215951, 1439215951, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(135, '178.136.229.251', '/', 1439215990, 1439215990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(136, '46.175.163.12', '/', 1439265348, 1439265348, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36 OPR/30.0.1856.93524', 1),
(137, '178.136.229.251', '/', 1439269251, 1439269251, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(138, '178.136.229.251', '/', 1439269251, 1439269251, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(139, '178.136.229.251', '/', 1439288520, 1439288520, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(140, '178.136.229.251', '/', 1439289269, 1439289269, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(141, '178.136.229.251', '/oplata', 1439289396, 1439289396, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(142, '178.136.229.251', '/garantija', 1439289398, 1439289398, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(143, '178.136.229.251', '/vozvrat', 1439289401, 1439289401, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(144, '178.136.229.251', '/', 1439289407, 1439289407, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(145, '178.136.229.251', '/', 1439290871, 1439290871, '200 OK', 'Computer', 'Google favicon', 1),
(146, '178.136.229.251', '/', 1439292726, 1439292726, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(147, '178.136.229.251', '/', 1439292782, 1439292782, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(148, '178.136.229.251', '/', 1439295963, 1439295963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(149, '178.136.229.251', '/', 1439295994, 1439295994, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(150, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1439295997, 1439295997, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(151, '178.136.229.251', '/product/sdfsdfsdfsd', 1439295999, 1439295999, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(152, '178.136.229.251', '/product/sdfsdfsdfsd', 1439296010, 1439296010, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(153, '178.136.229.251', '/product/sdfsdfsdfsd', 1439296017, 1439296017, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(154, '178.136.229.251', '/product/sdfsdfsdfsd', 1439296024, 1439296024, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(155, '178.136.229.251', '/product/sdfsdfsdfsd', 1439296033, 1439296033, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(156, '178.136.229.251', '/', 1439296648, 1439296648, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(157, '178.136.229.251', '/catalog', 1439296668, 1439296668, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(158, '178.136.229.251', '/', 1439304062, 1439304062, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(159, '62.76.103.139', '/product/nike_air_max_90_hyperfuse2018', 1439317767, 1439317767, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 1),
(160, '62.76.103.137', '/', 1439323710, 1439323710, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36', 1),
(161, '178.136.229.251', '/', 1439360027, 1439360027, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(162, '178.136.229.251', '/catalog', 1439360058, 1439360058, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(163, '178.136.229.251', '/contact', 1439360070, 1439360070, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(164, '178.136.229.251', '/faq', 1439360072, 1439360072, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(165, '178.136.229.251', '/articles', 1439360074, 1439360074, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(166, '178.136.229.251', '/', 1439360078, 1439360078, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(167, '178.136.229.251', '/', 1439362883, 1439362883, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(168, '178.136.229.251', '/', 1439362926, 1439362926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(169, '178.136.229.251', '/', 1439362963, 1439362963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(170, '178.136.229.251', '/', 1439362986, 1439362986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(171, '178.136.229.251', '/', 1439368330, 1439368330, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(172, '178.136.229.251', '/', 1439368356, 1439368356, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(173, '178.136.229.251', '/', 1439368356, 1439368356, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(174, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6869', 1439368389, 1439368389, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(175, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6869', 1439368393, 1439368393, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36', 1),
(176, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6869', 1439368394, 1439368394, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/6.0 Mobile/10A525 Safari/8536.25', 1),
(177, '178.136.229.251', '/', 1439379342, 1439379342, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36', 1),
(178, '104.45.18.178', '/', 1439379431, 1439379431, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5', 1),
(179, '23.101.61.176', '/', 1439381412, 1439381412, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5', 1),
(180, '188.163.64.164', '/', 1439407765, 1439407765, '200 OK', 'Computer', 'Google favicon', 1),
(181, '178.136.229.251', '/', 1439441677, 1439441677, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(182, '178.136.229.251', '/brands', 1439441683, 1439441683, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(183, '178.136.229.251', '/brands/asics', 1439441686, 1439441686, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(184, '178.136.229.251', '/brands//asics', 1439441692, 1439441692, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(185, '178.136.229.251', '//brands/asics', 1439441700, 1439441700, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(186, '178.136.229.251', '///brands/asics', 1439441709, 1439441709, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(187, '178.136.229.251', '////brands/asics', 1439441715, 1439441715, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(188, '178.136.229.251', '/', 1439444334, 1439444334, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(189, '178.136.229.251', '/', 1439445229, 1439445229, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(190, '178.136.229.251', '/', 1439448410, 1439448410, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(191, '178.136.229.251', '/', 1439448771, 1439448771, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(192, '178.136.229.251', '/o_nas', 1439448889, 1439448889, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(193, '178.136.229.251', '/', 1439450286, 1439450286, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(194, '178.136.229.251', '/', 1439450543, 1439450543, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(195, '178.136.229.251', '/', 1439452907, 1439452907, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(196, '127.0.0.1', '/', 1439456956, 1439456956, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(197, '127.0.0.1', '/o_nas', 1439462476, 1439462476, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(198, '127.0.0.1', '/news', 1439462486, 1439462486, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(199, '127.0.0.1', '/news', 1439462513, 1439462513, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(200, '127.0.0.1', '/news/vchapsrol54642505', 1439462525, 1439462525, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(201, '127.0.0.1', '/', 1439468619, 1439468619, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(202, '178.136.229.251', '/', 1439469662, 1439469662, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(203, '178.136.229.251', '/', 1439469671, 1439469671, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36', 1),
(204, '127.0.0.1', '/', 1439482866, 1439482866, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(205, '127.0.0.1', '/', 1439488458, 1439488458, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(206, '127.0.0.1', '/popular', 1439488525, 1439488525, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(207, '127.0.0.1', '/catalog', 1439488539, 1439488539, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(208, '127.0.0.1', '/news/vchapsrol54642505', 1439488575, 1439488575, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(209, '127.0.0.1', '/catalog', 1439488581, 1439488581, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(210, '127.0.0.1', '/popular', 1439488586, 1439488586, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(211, '127.0.0.1', '/', 1439488590, 1439488590, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(212, '23.101.61.176', '/', 1439528445, 1439528445, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5', 1),
(213, '127.0.0.1', '/', 1439533241, 1439533241, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.130 Chrome/43.0.2357.130 Safari/537.36', 1),
(214, '178.136.229.251', '/', 1439551359, 1439551359, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(215, '178.136.229.251', '/', 1439553698, 1439553698, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(216, '178.136.229.251', '/', 1439562190, 1439562190, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(217, '46.175.163.12', '/', 1439646251, 1439646251, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Mobile Safari/537.36', 1),
(218, '46.175.163.12', '/product/nike_air_max_90_hyperfuse2018', 1439646283, 1439646283, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.133 Mobile Safari/537.36', 1),
(219, '178.136.229.251', '/', 1439791955, 1439791955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(220, '178.136.229.251', '/', 1439792001, 1439792001, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(221, '178.136.229.251', '/', 1439795819, 1439795819, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(222, '178.136.229.251', '/', 1439796173, 1439796173, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(223, '178.136.229.251', '/new', 1439796563, 1439796563, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(224, '178.136.229.251', '/catalog', 1439796566, 1439796566, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(225, '178.136.229.251', '/catalog/for_men', 1439796569, 1439796569, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(226, '178.136.229.251', '/articles/dfgfdg41222', 1439796582, 1439796582, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(227, '178.136.229.251', '/catalog/kedy', 1439796613, 1439796613, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(228, '178.136.229.251', '/catalog/for_men', 1439796616, 1439796616, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(229, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1439796619, 1439796619, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(230, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1439796635, 1439796635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(231, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1439796691, 1439796691, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(232, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/brand=nike', 1439797004, 1439797004, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(233, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/brand=nike&model=air_max_90_vt', 1439797488, 1439797488, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(234, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/brand=nike&model=air_max_87,air_max_90_vt', 1439797493, 1439797493, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(235, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/brand=nike&model=air_max_87', 1439797495, 1439797495, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(236, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/brand=nike', 1439797503, 1439797503, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(237, '178.136.229.251', '/', 1439797544, 1439797544, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(238, '178.136.229.251', '/articles/dfgfdg41222', 1439797887, 1439797887, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(239, '178.136.229.251', '/', 1439797897, 1439797897, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(240, '178.136.229.251', '/', 1439797901, 1439797901, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(241, '178.136.229.251', '/', 1439797903, 1439797903, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(242, '178.136.229.251', '/', 1439797927, 1439797927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(243, '178.136.229.251', '/', 1439797939, 1439797939, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(244, '178.136.229.251', '/', 1439797999, 1439797999, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(245, '178.136.229.251', '/', 1439798129, 1439798129, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(246, '178.136.229.251', '/', 1439798393, 1439798393, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(247, '178.136.229.251', '/oplata', 1439798492, 1439798492, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(248, '178.136.229.251', '/garantija', 1439798533, 1439798533, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(249, '178.136.229.251', '/vozvrat', 1439798536, 1439798536, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(250, '178.136.229.251', '/dostavka', 1439798539, 1439798539, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(251, '178.136.229.251', '/garantija', 1439798556, 1439798556, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(252, '178.136.229.251', '/dostavka', 1439798558, 1439798558, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(253, '178.136.229.251', '/oplata', 1439798563, 1439798563, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(254, '178.136.229.251', '/catalog/aksessuary', 1439798567, 1439798567, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(255, '178.136.229.251', '/catalog', 1439798581, 1439798581, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(256, '178.136.229.251', '/', 1439798585, 1439798585, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(257, '178.136.229.251', '/faq', 1439798757, 1439798757, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(258, '178.136.229.251', '/', 1439798777, 1439798777, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(259, '178.136.229.251', '/brands', 1439798865, 1439798865, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(260, '178.136.229.251', '/sale', 1439798873, 1439798873, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(261, '178.136.229.251', '/popular', 1439798875, 1439798875, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(262, '178.136.229.251', '/new', 1439798876, 1439798876, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(263, '178.136.229.251', '/garantija', 1439798877, 1439798877, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(264, '178.136.229.251', '/new', 1439798878, 1439798878, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(265, '178.136.229.251', '/catalog', 1439798879, 1439798879, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(266, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1439798880, 1439798880, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(267, '178.136.229.251', '/catalog', 1439798882, 1439798882, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(268, '178.136.229.251', '/catalog/for_women', 1439798887, 1439798887, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(269, '178.136.229.251', '/catalog/for_men', 1439798891, 1439798891, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(270, '178.136.229.251', '/new', 1439798975, 1439798975, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(271, '178.136.229.251', '/popular', 1439798976, 1439798976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(272, '178.136.229.251', '/sale', 1439798990, 1439798990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(273, '178.136.229.251', '/sale', 1439799007, 1439799007, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(274, '178.136.229.251', '/popular', 1439799007, 1439799007, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(275, '178.136.229.251', '/new', 1439799146, 1439799146, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(276, '178.136.229.251', '/', 1439799284, 1439799284, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(277, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1439799433, 1439799433, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(278, '178.136.229.251', '/dostavka', 1439799534, 1439799534, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(279, '178.136.229.251', '/', 1439799535, 1439799535, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(280, '178.136.229.251', '/catalog', 1439799536, 1439799536, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(281, '178.136.229.251', '/cart', 1439799623, 1439799623, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(282, '178.136.229.251', '/sitemap', 1439800413, 1439800413, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(283, '178.136.229.251', '/new', 1439800480, 1439800480, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(284, '178.136.229.251', '/brands', 1439800489, 1439800489, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(285, '178.136.229.251', '/brands/nike', 1439800555, 1439800555, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(286, '127.0.0.1', '/', 1439800606, 1439800606, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(287, '178.136.229.251', '/brands', 1439800867, 1439800867, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(288, '178.136.229.251', '/brands/nike', 1439800878, 1439800878, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(289, '178.136.229.251', '/', 1439801423, 1439801423, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(290, '178.136.229.251', '/news/vchapsrol54642505', 1439801429, 1439801429, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(291, '178.136.229.251', '/news', 1439801432, 1439801432, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(292, '178.136.229.251', '/', 1439805241, 1439805241, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(293, '178.136.229.251', '/', 1439805251, 1439805251, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(294, '178.136.229.251', '/', 1439805258, 1439805258, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(295, '178.136.229.251', '/', 1439805265, 1439805265, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(296, '178.136.229.251', '/', 1439805271, 1439805271, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(297, '178.136.229.251', '/', 1439805313, 1439805313, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(298, '178.136.229.251', '/', 1439805320, 1439805320, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(299, '178.136.229.251', '/', 1439805345, 1439805345, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(300, '178.136.229.251', '/', 1439805350, 1439805350, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(301, '178.136.229.251', '/', 1439805398, 1439805398, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(302, '178.136.229.251', '/', 1439805411, 1439805411, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(303, '178.136.229.251', '/', 1439805586, 1439805586, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(304, '178.136.229.251', '/', 1439805925, 1439805925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(305, '178.136.229.251', '/', 1439805990, 1439805990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(306, '178.136.229.251', '/', 1439805991, 1439805991, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(307, '178.136.229.251', '/', 1439806009, 1439806009, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(308, '178.136.229.251', '/', 1439806096, 1439806096, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(309, '178.136.229.251', '/', 1439806812, 1439806812, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(310, '178.136.229.251', '/', 1439809084, 1439809084, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(311, '178.136.229.251', '/', 1439809468, 1439809468, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(312, '178.136.229.251', '/', 1439810411, 1439810411, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(313, '178.136.229.251', '/', 1439813534, 1439813534, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(314, '178.136.229.251', '/', 1439813591, 1439813591, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(315, '178.136.229.251', '/new', 1439813599, 1439813599, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(316, '178.136.229.251', '/catalog/kedy', 1439813600, 1439813600, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(317, '178.136.229.251', '/', 1439813899, 1439813899, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(318, '178.136.229.251', '/', 1439814361, 1439814361, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(319, '178.136.229.251', '/o_nas', 1439814407, 1439814407, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(320, '178.136.229.251', '/news', 1439814409, 1439814409, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(321, '178.136.229.251', '/', 1439814416, 1439814416, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(322, '178.136.229.251', '/vozvrat', 1439814603, 1439814603, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(323, '178.136.229.251', '/catalog', 1439814609, 1439814609, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(324, '37.53.164.140', '/', 1439815475, 1439815475, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(325, '178.136.229.251', '/catalog', 1439817032, 1439817032, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(326, '178.136.229.251', '/', 1439817034, 1439817034, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(327, '178.136.229.251', '/', 1439817037, 1439817037, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(328, '178.136.229.251', '/', 1439817762, 1439817762, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(329, '178.136.229.251', '/', 1439818799, 1439818799, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(330, '178.136.229.251', '/garantija', 1439819185, 1439819185, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(331, '178.136.229.251', '/', 1439820666, 1439820666, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(332, '178.136.229.251', '/', 1439880617, 1439880617, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(333, '178.136.229.251', '/', 1439880622, 1439880622, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(334, '178.136.229.251', '/', 1439881965, 1439881965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(335, '178.136.229.251', '/news?asdsad=asdasd', 1439884438, 1439884438, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(336, '178.136.229.251', '/', 1439885254, 1439885254, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(337, '178.136.229.251', '/', 1439885621, 1439885621, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(338, '178.136.229.251', '/', 1439886741, 1439886741, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(339, '178.136.229.251', '/', 1439887320, 1439887320, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(340, '178.136.229.251', '/', 1439887955, 1439887955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(341, '178.136.229.251', '/new', 1439887965, 1439887965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(342, '178.136.229.251', '/catalog', 1439887968, 1439887968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(343, '178.136.229.251', '/new', 1439887973, 1439887973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(344, '178.136.229.251', '/', 1439887978, 1439887978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(345, '178.136.229.251', '/', 1439887991, 1439887991, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(346, '178.136.229.251', '/news', 1439888061, 1439888061, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(347, '178.136.229.251', '/news/vchapsrol54642505', 1439888287, 1439888287, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(348, '178.136.229.251', '/news', 1439888290, 1439888290, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(349, '178.136.229.251', '/', 1439895257, 1439895257, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(350, '178.136.229.251', '/new', 1439895268, 1439895268, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(351, '178.136.229.251', '/popular', 1439895269, 1439895269, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(352, '178.136.229.251', '/sale', 1439895270, 1439895270, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(353, '178.136.229.251', '/brands', 1439895271, 1439895271, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(354, '178.136.229.251', '/articles', 1439895274, 1439895274, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(355, '178.136.229.251', '/', 1439895407, 1439895407, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(356, '178.136.229.251', '/articles', 1439895412, 1439895412, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(357, '178.136.229.251', '/', 1439896673, 1439896673, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(358, '178.136.229.251', '/articles', 1439896720, 1439896720, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(359, '178.136.229.251', '/', 1439897189, 1439897189, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(360, '178.136.229.251', '/articles', 1439897203, 1439897203, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(361, '178.136.229.251', '/news', 1439897205, 1439897205, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(362, '178.136.229.251', '/news', 1439897240, 1439897240, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(363, '178.136.229.251', '/', 1439897583, 1439897583, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(364, '178.136.229.251', '/', 1439898160, 1439898160, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(365, '178.136.229.251', '/', 1439898190, 1439898190, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(366, '178.136.229.251', '/', 1439898266, 1439898266, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(367, '178.136.229.251', '/', 1439898305, 1439898305, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(368, '178.136.229.251', '/', 1439898479, 1439898479, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(369, '178.136.229.251', '/', 1439898635, 1439898635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(370, '178.136.229.251', '/popular', 1439898687, 1439898687, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(371, '178.136.229.251', '/dostavka', 1439898697, 1439898697, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(372, '178.136.229.251', '/oplata', 1439898702, 1439898702, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(373, '178.136.229.251', '/garantija', 1439898706, 1439898706, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(374, '178.136.229.251', '/vozvrat', 1439898708, 1439898708, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(375, '178.136.229.251', '/dostavka', 1439898710, 1439898710, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(376, '178.136.229.251', '/', 1439898732, 1439898732, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(377, '178.136.229.251', '/dostavka', 1439898762, 1439898762, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(378, '178.136.229.251', '/', 1439898781, 1439898781, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(379, '178.136.229.251', '/articles', 1439898789, 1439898789, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(380, '178.136.229.251', '/dostavka', 1439898833, 1439898833, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(381, '178.136.229.251', '/dostavka', 1439898858, 1439898858, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(382, '178.136.229.251', '/oplata', 1439898864, 1439898864, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(383, '178.136.229.251', '/oplata', 1439898913, 1439898913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(384, '178.136.229.251', '/oplata', 1439898946, 1439898946, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(385, '178.136.229.251', '/oplata', 1439898965, 1439898965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(386, '178.136.229.251', '/garantija', 1439898973, 1439898973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(387, '178.136.229.251', '/garantija', 1439899022, 1439899022, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(388, '178.136.229.251', '/vozvrat', 1439899029, 1439899029, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(389, '178.136.229.251', '/vozvrat', 1439899082, 1439899082, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(390, '178.136.229.251', '/sale', 1439899088, 1439899088, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(391, '178.136.229.251', '/sale', 1439899107, 1439899107, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(392, '178.136.229.251', '/', 1439899117, 1439899117, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(393, '178.136.229.251', '/', 1439899283, 1439899283, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(394, '178.136.229.251', '/', 1439899323, 1439899323, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(395, '178.136.229.251', '/sale', 1439899331, 1439899331, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(396, '178.136.229.251', '/articles', 1439899335, 1439899335, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(397, '178.136.229.251', '/news', 1439899342, 1439899342, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(398, '178.136.229.251', '/articles', 1439899348, 1439899348, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(399, '178.136.229.251', '/articles', 1439899371, 1439899371, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(400, '178.136.229.251', '/', 1439899373, 1439899373, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(401, '178.136.229.251', '/news', 1439899388, 1439899388, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(402, '178.136.229.251', '/articles', 1439899400, 1439899400, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(403, '178.136.229.251', '/', 1439899408, 1439899408, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(404, '178.136.229.251', '/news', 1439899429, 1439899429, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(405, '178.136.229.251', '/contact', 1439899437, 1439899437, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(406, '178.136.229.251', '/articles', 1439899450, 1439899450, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(407, '178.136.229.251', '/', 1439899454, 1439899454, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(408, '178.136.229.251', '/', 1439899458, 1439899458, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(409, '178.136.229.251', '/', 1439899487, 1439899487, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(410, '178.136.229.251', '/articles', 1439899490, 1439899490, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(411, '178.136.229.251', '/articles', 1439899493, 1439899493, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(412, '178.136.229.251', '/news', 1439899495, 1439899495, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(413, '178.136.229.251', '/faq', 1439899497, 1439899497, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(414, '178.136.229.251', '/contact', 1439899512, 1439899512, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(415, '178.136.229.251', '/o_nas', 1439899515, 1439899515, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(416, '178.136.229.251', '/', 1439899520, 1439899520, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(417, '178.136.229.251', '/articles/kak-vybrat-muzhskie-krossovki', 1439899567, 1439899567, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(418, '178.136.229.251', '/articles/kak-vybrat-muzhskie-krossovki', 1439899851, 1439899851, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(419, '178.136.229.251', '/faq', 1439899869, 1439899869, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(420, '178.136.229.251', '/faq', 1439899945, 1439899945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(421, '178.136.229.251', '/faq', 1439899972, 1439899972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(422, '178.136.229.251', '/faq', 1439899992, 1439899992, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(423, '178.136.229.251', '/', 1439900106, 1439900106, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(424, '178.136.229.251', '/', 1439900110, 1439900110, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(425, '178.136.229.251', '/', 1439900128, 1439900128, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(426, '178.136.229.251', '/', 1439900262, 1439900262, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(427, '178.136.229.251', '/', 1439901658, 1439901658, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(428, '178.136.229.251', '/o_nas', 1439901740, 1439901740, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(429, '178.136.229.251', '/', 1439903747, 1439903747, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(430, '178.136.229.251', '/articles', 1439903931, 1439903931, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(431, '127.0.0.1', '/', 1439905302, 1439905302, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(432, '127.0.0.1', '/', 1439905406, 1439905406, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(433, '178.136.229.251', '/', 1439906277, 1439906277, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(434, '178.136.229.251', '/', 1439906279, 1439906279, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(435, '127.0.0.1', '/', 1439906519, 1439906519, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(436, '178.136.229.251', '/', 1439906879, 1439906879, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(437, '178.136.229.251', '/', 1439907130, 1439907130, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(438, '178.136.229.251', '/', 1439909069, 1439909069, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(439, '178.136.229.251', '/', 1439909197, 1439909197, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(440, '178.136.229.251', '/', 1439909251, 1439909251, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(441, '178.136.229.251', '/popular', 1439909265, 1439909265, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(442, '178.136.229.251', '/contact', 1439909269, 1439909269, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(443, '178.136.229.251', '/contact', 1439909361, 1439909361, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(444, '178.136.229.251', '/sale', 1439909363, 1439909363, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(445, '178.136.229.251', '/brands', 1439909364, 1439909364, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(446, '178.136.229.251', '/popular', 1439909366, 1439909366, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(447, '178.136.229.251', '/new', 1439909367, 1439909367, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(448, '178.136.229.251', '/catalog', 1439909367, 1439909367, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(449, '178.136.229.251', '/', 1439909368, 1439909368, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(450, '37.53.164.140', '/', 1439912938, 1439912938, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(451, '37.53.164.140', '/new', 1439912997, 1439912997, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(452, '127.0.0.1', '/', 1439979017, 1439979017, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(453, '127.0.0.1', '/', 1439979094, 1439979094, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(454, '127.0.0.1', '/', 1439979495, 1439979495, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(455, '178.136.229.251', '/', 1439989703, 1439989703, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(456, '178.136.229.251', '/otziv', 1439989712, 1439989712, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(457, '178.136.229.251', '/', 1440054846, 1440054846, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(458, '178.136.229.251', '/', 1440075766, 1440075766, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2488.0 Safari/537.36', 1),
(459, '178.136.229.251', '/new', 1440075799, 1440075799, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2488.0 Safari/537.36', 1),
(460, '178.136.229.251', '/catalog', 1440075801, 1440075801, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2488.0 Safari/537.36', 1),
(461, '178.136.229.251', '/catalog/for_women', 1440075803, 1440075803, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2488.0 Safari/537.36', 1),
(462, '178.136.229.251', '/catalog/krossovki', 1440075805, 1440075805, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2488.0 Safari/537.36', 1),
(463, '178.136.229.251', '/', 1440075808, 1440075808, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2488.0 Safari/537.36', 1),
(464, '178.136.229.251', '/', 1440136622, 1440136622, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(465, '178.136.229.251', '/otziv', 1440136638, 1440136638, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(466, '178.136.229.251', '/otziv', 1440136647, 1440136647, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(467, '178.136.229.251', '/brands', 1440136662, 1440136662, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(468, '178.136.229.251', '/popular', 1440136664, 1440136664, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(469, '178.136.229.251', '/new', 1440136665, 1440136665, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(470, '178.136.229.251', '/catalog', 1440136666, 1440136666, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(471, '178.136.229.251', '/otziv', 1440136672, 1440136672, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(472, '178.136.229.251', '/otziv', 1440136678, 1440136678, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(473, '178.136.229.251', '/', 1440140829, 1440140829, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(474, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1440140842, 1440140842, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(475, '178.136.229.251', '/cart', 1440140851, 1440140851, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(476, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1440140860, 1440140860, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(477, '178.136.229.251', '/', 1440141081, 1440141081, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(478, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1440141087, 1440141087, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(479, '178.136.229.251', '/', 1440141854, 1440141854, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(480, '178.136.229.251', '/cart', 1440141876, 1440141876, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(481, '178.136.229.251', '/catalog', 1440141879, 1440141879, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(482, '178.136.229.251', '/cart', 1440141888, 1440141888, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(483, '46.33.235.207', '/', 1440142147, 1440142147, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(484, '178.136.229.251', '/', 1440144518, 1440144518, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(485, '178.136.229.251', '/cart', 1440144539, 1440144539, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(486, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1440144546, 1440144546, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(487, '178.136.229.251', '/cart', 1440144552, 1440144552, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(488, '178.136.229.251', '/cart', 1440144586, 1440144586, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(489, '178.136.229.251', '/cart', 1440144616, 1440144616, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(490, '178.136.229.251', '/news', 1440145328, 1440145328, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(491, '127.0.0.1', '/', 1440158668, 1440158668, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2488.0 Safari/537.36', 1),
(492, '178.136.229.251', '/', 1440159069, 1440159069, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(493, '178.136.229.251', '/otziv', 1440159072, 1440159072, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(494, '178.136.229.251', '/', 1440231859, 1440231859, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(495, '37.115.37.41', '/', 1440316869, 1440316869, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(496, '37.115.37.41', '/otziv', 1440317540, 1440317540, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(497, '178.136.229.251', '/', 1440322389, 1440322389, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(498, '127.0.0.1', '/', 1440402219, 1440402219, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(499, '127.0.0.1', '/', 1440402338, 1440402338, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(500, '127.0.0.1', '/', 1440402425, 1440402425, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(501, '127.0.0.1', '/', 1440402429, 1440402429, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(502, '127.0.0.1', '/', 1440402855, 1440402855, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(503, '127.0.0.1', '/', 1440402884, 1440402884, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(504, '127.0.0.1', '/', 1440402885, 1440402885, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(505, '127.0.0.1', '/', 1440402886, 1440402886, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(506, '127.0.0.1', '/', 1440402886, 1440402886, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(507, '127.0.0.1', '/', 1440402887, 1440402887, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(508, '127.0.0.1', '/', 1440402888, 1440402888, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(509, '127.0.0.1', '/', 1440402889, 1440402889, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(510, '127.0.0.1', '/', 1440402934, 1440402934, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(511, '127.0.0.1', '/', 1440402973, 1440402973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(512, '127.0.0.1', '/', 1440402977, 1440402977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(513, '127.0.0.1', '/', 1440402999, 1440402999, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(514, '127.0.0.1', '/', 1440403002, 1440403002, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(515, '127.0.0.1', '/', 1440403052, 1440403052, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(516, '127.0.0.1', '/catalog', 1440403303, 1440403303, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(517, '127.0.0.1', '/catalog', 1440403572, 1440403572, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(518, '127.0.0.1', '/contact', 1440403576, 1440403576, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(519, '127.0.0.1', '/', 1440403588, 1440403588, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2489.0 Safari/537.36', 1),
(520, '178.136.229.251', '/', 1440405377, 1440405377, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0', 1),
(521, '46.175.163.12', '/w', 1440409370, 1440409370, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(522, '127.0.0.1', '/', 1440485338, 1440485338, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(523, '127.0.0.1', '/', 1440485651, 1440485651, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(524, '127.0.0.1', '/', 1440485655, 1440485655, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(525, '127.0.0.1', '/', 1440485658, 1440485658, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(526, '127.0.0.1', '/', 1440485800, 1440485800, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(527, '127.0.0.1', '/', 1440489200, 1440489200, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(528, '127.0.0.1', '/', 1440489346, 1440489346, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(529, '127.0.0.1', '/', 1440489363, 1440489363, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(530, '127.0.0.1', '/', 1440489408, 1440489408, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(531, '127.0.0.1', '/', 1440489522, 1440489522, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(532, '127.0.0.1', '/', 1440489935, 1440489935, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(533, '127.0.0.1', '/', 1440490134, 1440490134, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(534, '127.0.0.1', '/', 1440490517, 1440490517, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(535, '127.0.0.1', '/', 1440490776, 1440490776, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(536, '127.0.0.1', '/', 1440490887, 1440490887, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(537, '127.0.0.1', '/', 1440490910, 1440490910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(538, '127.0.0.1', '/', 1440490954, 1440490954, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(539, '127.0.0.1', '/', 1440490957, 1440490957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(540, '127.0.0.1', '/', 1440490995, 1440490995, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(541, '127.0.0.1', '/', 1440491041, 1440491041, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(542, '127.0.0.1', '/', 1440491075, 1440491075, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(543, '127.0.0.1', '/', 1440491156, 1440491156, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(544, '127.0.0.1', '/', 1440491194, 1440491194, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(545, '127.0.0.1', '/', 1440491224, 1440491224, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(546, '127.0.0.1', '/', 1440491236, 1440491236, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(547, '127.0.0.1', '/', 1440491315, 1440491315, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(548, '127.0.0.1', '/', 1440491362, 1440491362, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(549, '127.0.0.1', '/', 1440491454, 1440491454, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(550, '127.0.0.1', '/', 1440491539, 1440491539, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(551, '127.0.0.1', '/', 1440491630, 1440491630, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(552, '127.0.0.1', '/', 1440491661, 1440491661, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(553, '127.0.0.1', '/', 1440491696, 1440491696, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(554, '127.0.0.1', '/', 1440492017, 1440492017, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(555, '127.0.0.1', '/', 1440492030, 1440492030, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(556, '127.0.0.1', '/', 1440492042, 1440492042, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(557, '127.0.0.1', '/', 1440492069, 1440492069, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(558, '127.0.0.1', '/', 1440492073, 1440492073, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(559, '127.0.0.1', '/', 1440492153, 1440492153, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(560, '127.0.0.1', '/', 1440492162, 1440492162, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(561, '127.0.0.1', '/', 1440492269, 1440492269, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(562, '178.136.229.251', '/', 1440499783, 1440499783, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(563, '178.136.229.251', '/popular', 1440499804, 1440499804, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(564, '178.136.229.251', '/contacts', 1440499807, 1440499807, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(565, '178.136.229.251', '/new', 1440499812, 1440499812, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(566, '178.136.229.251', '/catalog', 1440499817, 1440499817, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36', 1),
(567, '178.136.229.251', '/', 1440568494, 1440568494, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(568, '178.136.229.251', '/wezzom', 1440568517, 1440568517, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(569, '141.101.7.200', '/', 1440574842, 1440574842, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(570, '178.136.229.251', '/', 1440598873, 1440598873, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(571, '127.0.0.1', '/', 1440620195, 1440620195, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(572, '127.0.0.1', '/', 1440620289, 1440620289, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(573, '127.0.0.1', '/', 1440620482, 1440620482, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(574, '127.0.0.1', '/', 1440620615, 1440620615, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(575, '127.0.0.1', '/', 1440620631, 1440620631, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(576, '127.0.0.1', '/', 1440620694, 1440620694, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(577, '127.0.0.1', '/', 1440620713, 1440620713, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(578, '127.0.0.1', '/', 1440621120, 1440621120, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(579, '127.0.0.1', '/', 1440621506, 1440621506, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(580, '127.0.0.1', '/', 1440621623, 1440621623, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(581, '127.0.0.1', '/', 1440621665, 1440621665, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(582, '127.0.0.1', '/', 1440622185, 1440622185, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(583, '127.0.0.1', '/', 1440622752, 1440622752, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(584, '127.0.0.1', '/', 1440622770, 1440622770, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(585, '127.0.0.1', '/', 1440622828, 1440622828, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(586, '127.0.0.1', '/', 1440622866, 1440622866, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(587, '127.0.0.1', '/', 1440622906, 1440622906, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(588, '127.0.0.1', '/', 1440622952, 1440622952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(589, '127.0.0.1', '/', 1440622986, 1440622986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(590, '127.0.0.1', '/', 1440623030, 1440623030, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(591, '127.0.0.1', '/', 1440623075, 1440623075, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(592, '127.0.0.1', '/', 1440623210, 1440623210, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(593, '127.0.0.1', '/', 1440623374, 1440623374, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(594, '127.0.0.1', '/', 1440623403, 1440623403, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(595, '127.0.0.1', '/', 1440624314, 1440624314, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(596, '127.0.0.1', '/', 1440624322, 1440624322, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(597, '127.0.0.1', '/', 1440624679, 1440624679, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(598, '127.0.0.1', '/', 1440624795, 1440624795, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(599, '127.0.0.1', '/backend/index', 1440624823, 1440624823, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(600, '127.0.0.1', '/', 1440655447, 1440655447, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(601, '127.0.0.1', '/catalog/krossovki_dlja_bega', 1440655465, 1440655465, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(602, '127.0.0.1', '/', 1440656821, 1440656821, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(603, '127.0.0.1', '/', 1440658550, 1440658550, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(604, '127.0.0.1', '/', 1440658692, 1440658692, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(605, '178.136.229.251', '/', 1440658878, 1440658878, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(606, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1440658886, 1440658886, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(607, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/min_cost=1029&max_cost=2030', 1440658896, 1440658896, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(608, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/min_cost=1029&max_cost=2030&material=sintetik', 1440658899, 1440658899, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(609, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/min_cost=1029&max_cost=2030&country=china&material=sintetik', 1440658903, 1440658903, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(610, '178.136.229.251', '/', 1440658929, 1440658929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(611, '127.0.0.1', '/', 1440659136, 1440659136, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(612, '127.0.0.1', '/', 1440659139, 1440659139, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(613, '127.0.0.1', '/', 1440659549, 1440659549, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(614, '127.0.0.1', '/', 1440659585, 1440659585, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(615, '127.0.0.1', '/', 1440660127, 1440660127, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(616, '127.0.0.1', '/', 1440660135, 1440660135, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(617, '127.0.0.1', '/', 1440660140, 1440660140, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(618, '127.0.0.1', '/', 1440660171, 1440660171, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(619, '127.0.0.1', '/', 1440660175, 1440660175, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(620, '127.0.0.1', '/', 1440660197, 1440660197, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(621, '127.0.0.1', '/', 1440660220, 1440660220, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(622, '127.0.0.1', '/', 1440660229, 1440660229, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(623, '127.0.0.1', '/', 1440660246, 1440660246, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(624, '127.0.0.1', '/', 1440660289, 1440660289, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(625, '127.0.0.1', '/', 1440660609, 1440660609, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(626, '127.0.0.1', '/', 1440660722, 1440660722, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(627, '127.0.0.1', '/', 1440660854, 1440660854, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(628, '127.0.0.1', '/', 1440660863, 1440660863, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(629, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1440660906, 1440660906, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(630, '178.136.229.251', '/cart', 1440660915, 1440660915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(631, '178.136.229.251', '/cart', 1440660945, 1440660945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(632, '127.0.0.1', '/', 1440661363, 1440661363, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(633, '127.0.0.1', '/', 1440661835, 1440661835, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(634, '127.0.0.1', '/', 1440661873, 1440661873, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(635, '127.0.0.1', '/', 1440661902, 1440661902, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(636, '127.0.0.1', '/', 1440662096, 1440662096, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(637, '127.0.0.1', '/', 1440662185, 1440662185, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(638, '127.0.0.1', '/', 1440662289, 1440662289, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(639, '127.0.0.1', '/', 1440662315, 1440662315, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(640, '127.0.0.1', '/', 1440662320, 1440662320, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(641, '127.0.0.1', '/', 1440662357, 1440662357, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(642, '127.0.0.1', '/%D1%8B%D0%B2%D0%B0%D1%8B%D1%84%D0%B2%D0%B0%D1%84%D1%8B%D0%B2%D0%B0', 1440662824, 1440662824, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(643, '127.0.0.1', '/%D1%8B%D0%B2%D0%B0%D1%8B%D1%84%D0%B2%D0%B0%D1%84%D1%8B%D0%B2%D0%B0', 1440663006, 1440663006, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(644, '127.0.0.1', '/%D1%8B%D0%B2%D0%B0%D1%8B%D1%84%D0%B2%D0%B0%D1%84%D1%8B%D0%B2%D0%B0', 1440663032, 1440663032, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(645, '127.0.0.1', '/%D1%8B%D0%B2%D0%B0%D1%8B%D1%84%D0%B2%D0%B0%D1%84%D1%8B%D0%B2%D0%B0', 1440663050, 1440663050, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(646, '127.0.0.1', '/%D1%8B%D0%B2%D0%B0%D1%8B%D1%84%D0%B2%D0%B0%D1%84%D1%8B%D0%B2%D0%B0', 1440663055, 1440663055, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(647, '127.0.0.1', '/', 1440663187, 1440663187, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(648, '127.0.0.1', '/%D1%81%D1%84%D0%B5%D1%84%D0%B4%D1%89%D0%BF', 1440663232, 1440663232, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(649, '127.0.0.1', '/catalog', 1440663237, 1440663237, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(650, '127.0.0.1', '/', 1440663242, 1440663242, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(651, '127.0.0.1', '/', 1440663353, 1440663353, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(652, '127.0.0.1', '/', 1440663382, 1440663382, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(653, '127.0.0.1', '/', 1440663407, 1440663407, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(654, '127.0.0.1', '/', 1440663438, 1440663438, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(655, '127.0.0.1', '/', 1440663449, 1440663449, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(656, '127.0.0.1', '/', 1440663462, 1440663462, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(657, '127.0.0.1', '/', 1440663512, 1440663512, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(658, '127.0.0.1', '/', 1440663596, 1440663596, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(659, '127.0.0.1', '/', 1440663608, 1440663608, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(660, '127.0.0.1', '/', 1440663864, 1440663864, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(661, '127.0.0.1', '/', 1440663952, 1440663952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(662, '127.0.0.1', '/', 1440664063, 1440664063, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(663, '127.0.0.1', '/', 1440665000, 1440665000, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(664, '127.0.0.1', '/', 1440665067, 1440665067, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(665, '127.0.0.1', '/', 1440665131, 1440665131, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(666, '127.0.0.1', '/o-kompanii', 1440665324, 1440665324, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(667, '127.0.0.1', '/o-kompanii', 1440665361, 1440665361, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(668, '127.0.0.1', '/o-kompanii', 1440665430, 1440665430, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(669, '127.0.0.1', '/o-kompanii', 1440665509, 1440665509, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(670, '127.0.0.1', '/o-kompanii', 1440665534, 1440665534, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(671, '127.0.0.1', '/o-kompanii', 1440665607, 1440665607, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(672, '127.0.0.1', '/o-kompanii', 1440665659, 1440665659, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(673, '127.0.0.1', '/o-kompanii', 1440665704, 1440665704, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(674, '127.0.0.1', '/o-kompanii', 1440665731, 1440665731, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(675, '127.0.0.1', '/o-kompanii', 1440665926, 1440665926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(676, '127.0.0.1', '/o-kompanii', 1440666029, 1440666029, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(677, '127.0.0.1', '/index', 1440666067, 1440666067, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(678, '127.0.0.1', '/o-kompanii', 1440666072, 1440666072, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(679, '127.0.0.1', '/o-kompanii', 1440666103, 1440666103, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(680, '127.0.0.1', '/', 1440666106, 1440666106, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(681, '127.0.0.1', '/', 1440666991, 1440666991, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(682, '127.0.0.1', '/o-kompanii', 1440666995, 1440666995, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(683, '127.0.0.1', '/news', 1440667004, 1440667004, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(684, '127.0.0.1', '/oplata', 1440667009, 1440667009, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(685, '127.0.0.1', '/oplata', 1440667071, 1440667071, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(686, '127.0.0.1', '/oplata', 1440667118, 1440667118, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(687, '127.0.0.1', '/oplata', 1440667174, 1440667174, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(688, '127.0.0.1', '/', 1440667243, 1440667243, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(689, '127.0.0.1', '/', 1440667262, 1440667262, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(690, '127.0.0.1', '/o-kompanii', 1440667266, 1440667266, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(691, '127.0.0.1', '/news', 1440667273, 1440667273, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(692, '127.0.0.1', '/oplata', 1440667277, 1440667277, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(693, '127.0.0.1', '/dostavka', 1440667285, 1440667285, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(694, '127.0.0.1', '/kak-zakazat', 1440667288, 1440667288, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(695, '127.0.0.1', '/kak-zakazat', 1440667289, 1440667289, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(696, '127.0.0.1', '/contacts', 1440667294, 1440667294, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(697, '127.0.0.1', '/', 1440671270, 1440671270, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(698, '127.0.0.1', '/o-kompanii', 1440671339, 1440671339, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(699, '127.0.0.1', '/contacts', 1440671342, 1440671342, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(700, '127.0.0.1', '/contacts', 1440671758, 1440671758, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(701, '127.0.0.1', '/', 1440671765, 1440671765, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(702, '127.0.0.1', '/news', 1440671845, 1440671845, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(703, '127.0.0.1', '/news', 1440672330, 1440672330, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(704, '127.0.0.1', '/news', 1440672408, 1440672408, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(705, '127.0.0.1', '/news', 1440672626, 1440672626, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(706, '127.0.0.1', '/news', 1440672772, 1440672772, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(707, '127.0.0.1', '/news', 1440672814, 1440672814, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(708, '127.0.0.1', '/news', 1440672949, 1440672949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(709, '127.0.0.1', '/news', 1440673014, 1440673014, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(710, '127.0.0.1', '/news/kak-vybrat-puhovik', 1440673019, 1440673019, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(711, '127.0.0.1', '/news/kak-vybrat-puhovik', 1440673399, 1440673399, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(712, '178.136.229.251', '/', 1440674526, 1440674526, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(713, '178.136.229.251', '/', 1440674608, 1440674608, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(714, '178.136.229.251', '/', 1440674621, 1440674621, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(715, '178.136.229.251', '/o-kompanii', 1440674623, 1440674623, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(716, '178.136.229.251', '/news', 1440674627, 1440674627, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(717, '178.136.229.251', '/oplata', 1440674640, 1440674640, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(718, '178.136.229.251', '/dostavka', 1440674642, 1440674642, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(719, '178.136.229.251', '/', 1440675082, 1440675082, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(720, '178.136.229.251', '/faq', 1440675090, 1440675090, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(721, '178.136.229.251', '/vopros_2', 1440675093, 1440675093, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(722, '178.136.229.251', '/', 1440747601, 1440747601, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(723, '178.136.229.251', '/', 1440747631, 1440747631, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(724, '127.0.0.1', '/', 1440748806, 1440748806, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(725, '127.0.0.1', '/', 1440750229, 1440750229, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(726, '127.0.0.1', '/', 1440750462, 1440750462, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(727, '127.0.0.1', '/', 1440750492, 1440750492, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(728, '127.0.0.1', '/', 1440750525, 1440750525, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(729, '127.0.0.1', '/', 1440750617, 1440750617, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(730, '127.0.0.1', '/', 1440750758, 1440750758, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(731, '127.0.0.1', '/', 1440750803, 1440750803, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(732, '127.0.0.1', '/', 1440750846, 1440750846, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(733, '127.0.0.1', '/', 1440750896, 1440750896, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(734, '127.0.0.1', '/', 1440750948, 1440750948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(735, '127.0.0.1', '/', 1440750950, 1440750950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(736, '127.0.0.1', '/', 1440751043, 1440751043, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(737, '127.0.0.1', '/', 1440751063, 1440751063, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(738, '127.0.0.1', '/', 1440751256, 1440751256, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(739, '127.0.0.1', '/', 1440751289, 1440751289, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(740, '127.0.0.1', '/', 1440751305, 1440751305, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(741, '127.0.0.1', '/', 1440751349, 1440751349, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(742, '127.0.0.1', '/', 1440751354, 1440751354, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(743, '127.0.0.1', '/', 1440751389, 1440751389, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(744, '127.0.0.1', '/o_nas', 1440751393, 1440751393, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(745, '127.0.0.1', '/', 1440751397, 1440751397, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(746, '127.0.0.1', '/', 1440751410, 1440751410, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(747, '127.0.0.1', '/', 1440751435, 1440751435, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(748, '127.0.0.1', '/', 1440751479, 1440751479, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(749, '127.0.0.1', '/', 1440751529, 1440751529, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(750, '127.0.0.1', '/', 1440751545, 1440751545, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(751, '127.0.0.1', '/', 1440751568, 1440751568, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(752, '127.0.0.1', '/', 1440751591, 1440751591, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(753, '127.0.0.1', '/', 1440751600, 1440751600, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(754, '127.0.0.1', '/', 1440751618, 1440751618, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(755, '127.0.0.1', '/', 1440751650, 1440751650, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(756, '127.0.0.1', '/', 1440751660, 1440751660, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(757, '127.0.0.1', '/', 1440751675, 1440751675, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(758, '127.0.0.1', '/', 1440751691, 1440751691, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(759, '127.0.0.1', '/', 1440751707, 1440751707, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(760, '127.0.0.1', '/', 1440751826, 1440751826, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(761, '127.0.0.1', '/', 1440751852, 1440751852, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(762, '127.0.0.1', '/', 1440751869, 1440751869, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(763, '127.0.0.1', '/', 1440751879, 1440751879, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(764, '127.0.0.1', '/', 1440751905, 1440751905, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(765, '127.0.0.1', '/', 1440751912, 1440751912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(766, '127.0.0.1', '/', 1440751935, 1440751935, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(767, '127.0.0.1', '/', 1440751950, 1440751950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(768, '127.0.0.1', '/', 1440751956, 1440751956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(769, '127.0.0.1', '/', 1440751975, 1440751975, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(770, '127.0.0.1', '/', 1440752008, 1440752008, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(771, '127.0.0.1', '/', 1440752065, 1440752065, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(772, '127.0.0.1', '/', 1440752094, 1440752094, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(773, '127.0.0.1', '/', 1440752345, 1440752345, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(774, '178.136.229.251', '/', 1440752371, 1440752371, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(775, '127.0.0.1', '/', 1440752395, 1440752395, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(776, '127.0.0.1', '/', 1440752396, 1440752396, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(777, '127.0.0.1', '/', 1440756363, 1440756363, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(778, '127.0.0.1', '/', 1440756497, 1440756497, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(779, '127.0.0.1', '/', 1440756548, 1440756548, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(780, '127.0.0.1', '/', 1440756635, 1440756635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(781, '127.0.0.1', '/', 1440756724, 1440756724, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(782, '127.0.0.1', '/', 1440756818, 1440756818, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(783, '127.0.0.1', '/', 1440757016, 1440757016, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(784, '127.0.0.1', '/', 1440757104, 1440757104, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(785, '127.0.0.1', '/', 1440757155, 1440757155, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(786, '127.0.0.1', '/', 1440757170, 1440757170, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(787, '178.136.229.251', '/', 1440757574, 1440757574, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(788, '178.136.229.251', '/', 1440759999, 1440759999, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(789, '178.136.229.251', '/', 1440760522, 1440760522, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(790, '178.136.229.251', '/o_nas', 1440760527, 1440760527, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(791, '178.136.229.251', '/', 1440760587, 1440760587, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(792, '178.136.229.251', '/o_nas', 1440760591, 1440760591, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(793, '178.136.229.251', '/', 1440761916, 1440761916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(794, '178.136.229.251', '/catalog', 1440761920, 1440761920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(795, '178.136.229.251', '/catalog/for_men', 1440761949, 1440761949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(796, '178.136.229.251', '/catalog/for_men', 1440762312, 1440762312, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(797, '178.136.229.251', '/catalog/for_women', 1440762318, 1440762318, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(798, '178.136.229.251', '/catalog/aksessuary', 1440762320, 1440762320, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(799, '178.136.229.251', '/catalog/for_men', 1440762326, 1440762326, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(800, '178.136.229.251', '/catalog/krossovki', 1440762330, 1440762330, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(801, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1440762334, 1440762334, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(802, '178.136.229.251', '/catalog/for_men', 1440766633, 1440766633, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(803, '178.136.229.251', '/', 1440931159, 1440931159, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(804, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1440931173, 1440931173, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(805, '178.136.229.251', '/', 1440931265, 1440931265, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(806, '178.136.229.251', '/news', 1440932927, 1440932927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(807, '178.136.229.251', '/news/novye_krossovki_nike_air_force_1_low_purple_venom', 1440932930, 1440932930, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(808, '178.136.229.251', '/popular', 1440932944, 1440932944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(809, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1440932946, 1440932946, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(810, '178.136.229.251', '/garantija', 1440932951, 1440932951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(811, '178.136.229.251', '/brands', 1440932956, 1440932956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(812, '178.136.229.251', '/brands/hater', 1440932959, 1440932959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(813, '178.136.229.251', '/brands', 1440932961, 1440932961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(814, '178.136.229.251', '/brands/asics', 1440932964, 1440932964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(815, '178.136.229.251', '/brands', 1440932966, 1440932966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(816, '178.136.229.251', '/brands/nike', 1440932972, 1440932972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(817, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1440933981, 1440933981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(818, '178.136.229.251', '/sale', 1440934313, 1440934313, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(819, '178.136.229.251', '/sale', 1441000342, 1441000342, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(820, '178.136.229.251', '/', 1441005228, 1441005228, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(821, '178.136.229.251', '/', 1441090884, 1441090884, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(822, '178.136.229.251', '/', 1441093059, 1441093059, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(823, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441093064, 1441093064, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(824, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441093066, 1441093066, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(825, '178.136.229.251', '/catalog', 1441093075, 1441093075, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(826, '178.136.229.251', '/catalog/for_men', 1441093147, 1441093147, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(827, '178.136.229.251', '/catalog/for_men', 1441093149, 1441093149, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(828, '178.136.229.251', '/catalog', 1441093151, 1441093151, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(829, '178.136.229.251', '/catalog', 1441093370, 1441093370, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(830, '178.136.229.251', '/catalog/for_men', 1441093444, 1441093444, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(831, '178.136.229.251', '/catalog', 1441093450, 1441093450, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(832, '178.136.229.251', '/catalog/for_men', 1441093645, 1441093645, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(833, '178.136.229.251', '/catalog', 1441093648, 1441093648, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(834, '178.136.229.251', '/', 1441093649, 1441093649, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(835, '178.136.229.251', '/catalog', 1441093651, 1441093651, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(836, '178.136.229.251', '/', 1441093770, 1441093770, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(837, '178.136.229.251', '/catalog/for_men', 1441102131, 1441102131, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(838, '178.136.229.251', '/catalog', 1441102140, 1441102140, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(839, '178.136.229.251', '/', 1441116325, 1441116325, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(840, '178.136.229.251', '/', 1441176836, 1441176836, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(841, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1441176889, 1441176889, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(842, '178.136.229.251', '/', 1441177770, 1441177770, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(843, '178.136.229.251', '/', 1441197461, 1441197461, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(844, '37.25.105.82', '/', 1441198859, 1441198859, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(845, '178.136.229.251', '/', 1441199455, 1441199455, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(846, '178.136.229.251', '/', 1441204856, 1441204856, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(847, '95.132.65.20', '/', 1441218023, 1441218023, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(848, '95.132.65.20', '/', 1441218028, 1441218028, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(849, '95.132.65.20', '/o_nas', 1441218388, 1441218388, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(850, '95.132.65.20', '/catalog/krossovki_dlja_bega', 1441218402, 1441218402, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(851, '95.132.65.20', '/popular', 1441218772, 1441218772, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(852, '95.132.65.20', '/new', 1441218776, 1441218776, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(853, '95.132.65.20', '/sale', 1441218783, 1441218783, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(854, '95.132.65.20', '/brands', 1441218786, 1441218786, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(855, '178.136.229.251', '/', 1441268997, 1441268997, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(856, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1441269002, 1441269002, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(857, '178.136.229.251', '/', 1441274116, 1441274116, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(858, '178.136.229.251', '/', 1441274203, 1441274203, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(859, '178.136.229.251', '/', 1441275475, 1441275475, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(860, '178.136.229.251', '/', 1441282793, 1441282793, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(861, '178.136.229.251', '/o_nas', 1441283630, 1441283630, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(862, '178.136.229.251', '/', 1441294610, 1441294610, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(863, '178.136.229.251', '/', 1441344069, 1441344069, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(864, '178.136.229.251', '/catalog', 1441344078, 1441344078, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(865, '178.136.229.251', '/catalog/krossovki', 1441344085, 1441344085, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(866, '178.136.229.251', '/catalog/krossovki?per_page=30&sort=cost&type=desc', 1441344089, 1441344089, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(867, '178.136.229.251', '/catalog/krossovki?per_page=30&sort=created_at&type=desc', 1441344094, 1441344094, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(868, '178.136.229.251', '/catalog/krossovki?per_page=30&sort=created_at&type=asc', 1441344097, 1441344097, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(869, '178.136.229.251', '/catalog/krossovki?per_page=30&sort=name&type=asc', 1441344099, 1441344099, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(870, '178.136.229.251', '/catalog/krossovki?per_page=30&sort=name&type=desc', 1441344102, 1441344102, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(871, '127.0.0.1', '/', 1441368336, 1441368336, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(872, '127.0.0.1', '/', 1441369069, 1441369069, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(873, '127.0.0.1', '/', 1441369178, 1441369178, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(874, '127.0.0.1', '/', 1441369179, 1441369179, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(875, '127.0.0.1', '/', 1441369182, 1441369182, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(876, '127.0.0.1', '/', 1441369196, 1441369196, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(877, '127.0.0.1', '/', 1441369201, 1441369201, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(878, '127.0.0.1', '/', 1441369212, 1441369212, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(879, '127.0.0.1', '/', 1441369396, 1441369396, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(880, '127.0.0.1', '/', 1441369401, 1441369401, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(881, '127.0.0.1', '/popular', 1441369415, 1441369415, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(882, '127.0.0.1', '/', 1441369418, 1441369418, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(883, '127.0.0.1', '/', 1441369490, 1441369490, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(884, '127.0.0.1', '/', 1441369842, 1441369842, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(885, '127.0.0.1', '/', 1441369889, 1441369889, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(886, '127.0.0.1', '/', 1441369894, 1441369894, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(887, '127.0.0.1', '/', 1441369909, 1441369909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(888, '127.0.0.1', '/', 1441369950, 1441369950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(889, '127.0.0.1', '/', 1441369952, 1441369952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(890, '127.0.0.1', '/', 1441369969, 1441369969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(891, '127.0.0.1', '/', 1441369989, 1441369989, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(892, '127.0.0.1', '/', 1441369992, 1441369992, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(893, '127.0.0.1', '/', 1441370038, 1441370038, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(894, '127.0.0.1', '/', 1441370042, 1441370042, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(895, '127.0.0.1', '/', 1441370160, 1441370160, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(896, '127.0.0.1', '/', 1441370163, 1441370163, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(897, '127.0.0.1', '/', 1441370220, 1441370220, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(898, '127.0.0.1', '/', 1441370223, 1441370223, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(899, '127.0.0.1', '/', 1441370262, 1441370262, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(900, '127.0.0.1', '/product/nike_air_max_90_hyperfuse', 1441370266, 1441370266, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(901, '127.0.0.1', '/', 1441370268, 1441370268, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(902, '127.0.0.1', '/', 1441370342, 1441370342, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(903, '127.0.0.1', '/', 1441370374, 1441370374, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(904, '127.0.0.1', '/', 1441370392, 1441370392, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(905, '127.0.0.1', '/', 1441370528, 1441370528, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(906, '127.0.0.1', '/', 1441370566, 1441370566, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(907, '127.0.0.1', '/', 1441370653, 1441370653, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(908, '127.0.0.1', '/', 1441370673, 1441370673, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(909, '127.0.0.1', '/', 1441370692, 1441370692, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(910, '127.0.0.1', '/', 1441370696, 1441370696, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(911, '127.0.0.1', '/', 1441370778, 1441370778, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(912, '127.0.0.1', '/', 1441370797, 1441370797, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(913, '127.0.0.1', '/', 1441370803, 1441370803, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(914, '127.0.0.1', '/', 1441370819, 1441370819, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(915, '127.0.0.1', '/catalog', 1441370823, 1441370823, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(916, '127.0.0.1', '/', 1441370826, 1441370826, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(917, '127.0.0.1', '/', 1441370881, 1441370881, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(918, '127.0.0.1', '/', 1441370893, 1441370893, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(919, '127.0.0.1', '/', 1441370975, 1441370975, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(920, '127.0.0.1', '/', 1441371047, 1441371047, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(921, '127.0.0.1', '/', 1441371053, 1441371053, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(922, '127.0.0.1', '/', 1441371101, 1441371101, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(923, '127.0.0.1', '/', 1441371213, 1441371213, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(924, '127.0.0.1', '/', 1441371253, 1441371253, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(925, '127.0.0.1', '/', 1441371263, 1441371263, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(926, '127.0.0.1', '/', 1441371331, 1441371331, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(927, '127.0.0.1', '/', 1441371419, 1441371419, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(928, '127.0.0.1', '/', 1441371434, 1441371434, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(929, '127.0.0.1', '/', 1441371522, 1441371522, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(930, '178.136.229.251', '/', 1441371982, 1441371982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(931, '127.0.0.1', '/', 1441372111, 1441372111, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(932, '127.0.0.1', '/', 1441372158, 1441372158, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(933, '127.0.0.1', '/', 1441372173, 1441372173, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(934, '127.0.0.1', '/', 1441372191, 1441372191, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(935, '127.0.0.1', '/', 1441372191, 1441372191, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(936, '127.0.0.1', '/', 1441372200, 1441372200, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(937, '127.0.0.1', '/', 1441372201, 1441372201, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(938, '127.0.0.1', '/', 1441372291, 1441372291, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(939, '127.0.0.1', '/', 1441372307, 1441372307, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(940, '127.0.0.1', '/', 1441372543, 1441372543, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(941, '127.0.0.1', '/', 1441372594, 1441372594, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(942, '127.0.0.1', '/', 1441372628, 1441372628, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(943, '127.0.0.1', '/', 1441372664, 1441372664, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(944, '127.0.0.1', '/', 1441372674, 1441372674, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(945, '127.0.0.1', '/', 1441372832, 1441372832, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(946, '127.0.0.1', '/', 1441372839, 1441372839, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(947, '127.0.0.1', '/', 1441372868, 1441372868, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(948, '127.0.0.1', '/', 1441372939, 1441372939, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(949, '127.0.0.1', '/', 1441373020, 1441373020, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(950, '127.0.0.1', '/', 1441373115, 1441373115, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(951, '127.0.0.1', '/', 1441373130, 1441373130, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(952, '127.0.0.1', '/', 1441373239, 1441373239, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(953, '127.0.0.1', '/', 1441373464, 1441373464, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(954, '127.0.0.1', '/', 1441373489, 1441373489, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(955, '127.0.0.1', '/', 1441373503, 1441373503, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(956, '127.0.0.1', '/', 1441373526, 1441373526, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(957, '127.0.0.1', '/', 1441373553, 1441373553, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(958, '127.0.0.1', '/', 1441373690, 1441373690, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(959, '127.0.0.1', '/', 1441373767, 1441373767, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(960, '127.0.0.1', '/', 1441373818, 1441373818, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(961, '127.0.0.1', '/', 1441373830, 1441373830, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(962, '127.0.0.1', '/', 1441373926, 1441373926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(963, '127.0.0.1', '/', 1441373929, 1441373929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(964, '127.0.0.1', '/', 1441373955, 1441373955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(965, '127.0.0.1', '/', 1441373974, 1441373974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(966, '127.0.0.1', '/', 1441374068, 1441374068, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(967, '127.0.0.1', '/', 1441374103, 1441374103, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(968, '127.0.0.1', '/', 1441374135, 1441374135, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(969, '127.0.0.1', '/', 1441374144, 1441374144, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(970, '127.0.0.1', '/', 1441374165, 1441374165, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(971, '127.0.0.1', '/', 1441374211, 1441374211, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(972, '127.0.0.1', '/', 1441374230, 1441374230, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(973, '127.0.0.1', '/', 1441374301, 1441374301, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(974, '127.0.0.1', '/', 1441374305, 1441374305, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(975, '127.0.0.1', '/', 1441374306, 1441374306, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(976, '127.0.0.1', '/', 1441374309, 1441374309, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(977, '127.0.0.1', '/', 1441374312, 1441374312, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(978, '127.0.0.1', '/', 1441374335, 1441374335, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(979, '127.0.0.1', '/', 1441374588, 1441374588, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(980, '127.0.0.1', '/', 1441374608, 1441374608, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(981, '127.0.0.1', '/', 1441374734, 1441374734, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(982, '127.0.0.1', '/', 1441374744, 1441374744, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(983, '127.0.0.1', '/', 1441374809, 1441374809, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(984, '127.0.0.1', '/', 1441374859, 1441374859, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(985, '127.0.0.1', '/', 1441375096, 1441375096, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(986, '127.0.0.1', '/', 1441375137, 1441375137, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(987, '127.0.0.1', '/', 1441375147, 1441375147, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(988, '127.0.0.1', '/', 1441375976, 1441375976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(989, '127.0.0.1', '/', 1441376200, 1441376200, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(990, '178.136.229.251', '/', 1441376333, 1441376333, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(991, '178.136.229.251', '/', 1441376344, 1441376344, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(992, '178.136.229.251', '/', 1441376398, 1441376398, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(993, '178.136.229.251', '/', 1441376539, 1441376539, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.0.4; HTC Desire SV Build/IMM76D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36', 1),
(994, '178.136.229.251', '/', 1441376629, 1441376629, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(995, '178.136.229.251', '/', 1441376667, 1441376667, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(996, '178.136.229.251', '/', 1441376772, 1441376772, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(997, '178.136.229.251', '/', 1441376808, 1441376808, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(998, '178.136.229.251', '/', 1441376870, 1441376870, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(999, '5.248.122.132', '/', 1441386208, 1441386208, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1000, '5.248.122.132', '/catalog/krossovki_dlja_bega', 1441386237, 1441386237, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1001, '77.52.157.154', '/', 1441439358, 1441439358, '200 OK', 'Phone', 'Mozilla/5.0 (Linux; Android 4.0.4; HTC Desire SV Build/IMM76D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36', 1),
(1002, '178.136.229.251', '/', 1441466541, 1441466541, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1003, '178.94.7.60', '/', 1441478891, 1441478891, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1004, '178.94.7.60', '/', 1441479109, 1441479109, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1005, '178.94.7.60', '/', 1441479124, 1441479124, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1006, '178.94.7.60', '/', 1441479187, 1441479187, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1007, '178.94.7.60', '/news', 1441479199, 1441479199, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1008, '178.94.7.60', '/articles', 1441479201, 1441479201, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1009, '178.94.7.60', '/faq', 1441479203, 1441479203, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1010, '178.94.7.60', '/o_nas', 1441479205, 1441479205, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1011, '178.94.7.60', '/contact', 1441479207, 1441479207, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1012, '178.94.7.60', '/', 1441514074, 1441514074, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1013, '178.94.7.60', '/o_nas', 1441514077, 1441514077, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1014, '178.94.7.60', '/news', 1441514081, 1441514081, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1015, '178.93.23.91', '/', 1441525981, 1441525981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1016, '178.136.229.251', '/', 1441603891, 1441603891, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1017, '127.0.0.1', '/', 1441605217, 1441605217, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1018, '127.0.0.1', '/', 1441605281, 1441605281, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1019, '127.0.0.1', '/', 1441605298, 1441605298, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1020, '178.136.229.251', '/', 1441605396, 1441605396, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1021, '178.136.229.251', '/', 1441605523, 1441605523, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1022, '178.136.229.251', '/', 1441605569, 1441605569, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1023, '178.136.229.251', '/', 1441605635, 1441605635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1024, '178.136.229.251', '/', 1441605795, 1441605795, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1025, '178.136.229.251', '/', 1441605833, 1441605833, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1026, '127.0.0.1', '/', 1441606088, 1441606088, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1027, '178.136.229.251', '/', 1441606168, 1441606168, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1028, '178.136.229.251', '/', 1441607351, 1441607351, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1029, '178.136.229.251', '/', 1441607516, 1441607516, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1030, '178.136.229.251', '/', 1441607809, 1441607809, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1031, '178.136.229.251', '/', 1441609355, 1441609355, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1032, '178.136.229.251', '/', 1441609411, 1441609411, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1033, '178.136.229.251', '/', 1441611769, 1441611769, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1034, '178.136.229.251', '/', 1441615635, 1441615635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1035, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1441615645, 1441615645, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1036, '178.136.229.251', '/', 1441621244, 1441621244, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1037, '178.136.229.251', '/', 1441625117, 1441625117, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1038, '178.136.229.251', '/cart', 1441625121, 1441625121, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1039, '178.136.229.251', '/', 1441626911, 1441626911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1040, '178.136.229.251', '/', 1441627124, 1441627124, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1041, '178.136.229.251', '/cart', 1441627130, 1441627130, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1042, '178.136.229.251', '/catalog', 1441627133, 1441627133, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1043, '178.136.229.251', '/catalog', 1441627133, 1441627133, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1044, '178.136.229.251', '/cart', 1441627233, 1441627233, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1045, '178.136.229.251', '/', 1441627238, 1441627238, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1046, '178.136.229.251', '/catalog/for_men', 1441627618, 1441627618, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1047, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441627622, 1441627622, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1048, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1441627623, 1441627623, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1049, '178.136.229.251', '/catalog/kedy', 1441627625, 1441627625, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1050, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1441627630, 1441627630, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1051, '178.136.229.251', '/', 1441627672, 1441627672, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1052, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1441627679, 1441627679, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1053, '178.136.229.251', '/', 1441628299, 1441628299, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1054, '178.136.229.251', '/cart', 1441628302, 1441628302, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1055, '178.136.229.251', '/cart', 1441628309, 1441628309, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1056, '178.136.229.251', '/', 1441703458, 1441703458, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1057, '93.79.133.79', '/', 1441704255, 1441704255, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1058, '46.33.240.230', '/', 1441706615, 1441706615, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1059, '178.136.229.251', '/', 1441710042, 1441710042, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1060, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1441710046, 1441710046, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1061, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1441710165, 1441710165, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1062, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1441710966, 1441710966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1063, '178.136.229.251', '/', 1441713775, 1441713775, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1064, '178.136.229.251', '/catalog', 1441713785, 1441713785, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1065, '178.136.229.251', '/catalog/for_men', 1441713787, 1441713787, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(1066, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441713789, 1441713789, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1067, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1441713790, 1441713790, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1068, '178.136.229.251', '/catalog/kedy', 1441713792, 1441713792, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1069, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1441713794, 1441713794, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1070, '178.136.229.251', '/catalog/for_men', 1441713814, 1441713814, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1071, '178.136.229.251', '/', 1441713821, 1441713821, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1072, '178.136.229.251', '/catalog/for_men', 1441713851, 1441713851, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1073, '178.136.229.251', '/catalog/for_men', 1441713852, 1441713852, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1074, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441713853, 1441713853, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1075, '178.136.229.251', '/catalog', 1441713856, 1441713856, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1076, '178.136.229.251', '/catalog/for_women', 1441713859, 1441713859, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1077, '178.136.229.251', '/catalog', 1441713862, 1441713862, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1078, '178.136.229.251', '/catalog/for_men', 1441713863, 1441713863, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1079, '178.136.229.251', '/catalog', 1441713871, 1441713871, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1080, '178.136.229.251', '/catalog/for_men', 1441713872, 1441713872, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1081, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441713873, 1441713873, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1082, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1441713874, 1441713874, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1083, '178.136.229.251', '/catalog/kedy', 1441713876, 1441713876, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1084, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1441713878, 1441713878, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1085, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6873', 1441713923, 1441713923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1086, '178.136.229.251', '/', 1441714177, 1441714177, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1087, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1441714181, 1441714181, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1088, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6873', 1441714183, 1441714183, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1089, '78.27.159.148', '/product/test_wezom', 1441736777, 1441736777, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1090, '178.136.229.251', '/', 1441782220, 1441782220, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1091, '178.136.229.251', '/search?query=', 1441782229, 1441782229, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1092, '178.136.229.251', '/cart', 1441783691, 1441783691, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1093, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441783699, 1441783699, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1094, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1441783701, 1441783701, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1095, '178.136.229.251', '/catalog/kedy', 1441783704, 1441783704, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1096, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1441783706, 1441783706, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1097, '178.136.229.251', '/cart', 1441783710, 1441783710, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1098, '178.136.229.251', '/', 1441786759, 1441786759, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1099, '178.136.229.251', '/', 1441798575, 1441798575, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1100, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6869', 1441798595, 1441798595, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1101, '178.136.229.251', '/cart', 1441798617, 1441798617, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1102, '178.136.229.251', '/cart', 1441798644, 1441798644, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1103, '178.136.229.251', '/', 1441798651, 1441798651, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1104, '178.136.229.251', '/', 1441798677, 1441798677, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1105, '178.136.229.251', '/backend', 1441798785, 1441798785, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1106, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1441798846, 1441798846, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1107, '178.136.229.251', '/', 1441798872, 1441798872, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1108, '178.136.229.251', '/user', 1441798910, 1441798910, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1109, '46.175.163.12', '/b', 1441815889, 1441815889, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1110, '178.136.229.251', '/', 1441894130, 1441894130, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1111, '178.136.229.251', '/', 1441894164, 1441894164, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1112, '46.33.240.230', '/', 1441894929, 1441894929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1113, '178.136.229.251', '/', 1441953498, 1441953498, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1114, '178.136.229.251', '/', 1441954061, 1441954061, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1115, '178.136.229.251', '/cart', 1441954465, 1441954465, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1116, '178.136.229.251', '/cart', 1441955222, 1441955222, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1117, '178.136.229.251', '/', 1441968855, 1441968855, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1118, '178.136.229.251', '/cart', 1441968861, 1441968861, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1119, '178.136.229.251', '/', 1441972147, 1441972147, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1120, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441972150, 1441972150, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1121, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1441972153, 1441972153, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1122, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1441972157, 1441972157, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1123, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1441972157, 1441972157, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1124, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6873', 1441972159, 1441972159, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1125, '178.136.229.251', '/', 1441977665, 1441977665, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1126, '178.136.229.251', '/catalog', 1441977691, 1441977691, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1127, '178.136.229.251', '/catalog/for_men', 1441977693, 1441977693, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1128, '178.136.229.251', '/', 1442317329, 1442317329, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1129, '178.136.229.251', '/cart', 1442317359, 1442317359, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1130, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6869', 1442317372, 1442317372, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1131, '158.255.159.142', '/', 1442324774, 1442324774, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1132, '158.255.159.142', '/brands', 1442324876, 1442324876, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1133, '158.255.159.142', '/brands/carhartt', 1442324879, 1442324879, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1134, '158.255.159.142', '/brands/carhartt?per_page=30&sort=cost&type=desc', 1442324884, 1442324884, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1135, '158.255.159.142', '/garantija', 1442326173, 1442326173, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1136, '158.255.159.142', '/vozvrat', 1442326178, 1442326178, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36', 1),
(1137, '178.136.229.251', '/', 1442400193, 1442400193, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1138, '178.136.229.251', '/', 1442400219, 1442400219, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1139, '178.136.229.251', '/', 1442486430, 1442486430, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36', 1),
(1140, '178.136.229.251', '/', 1442489281, 1442489281, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1141, '178.136.229.251', '/articles', 1442490516, 1442490516, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1142, '178.136.229.251', '/catalog/mokasiny', 1442490524, 1442490524, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1143, '178.136.229.251', '/catalog/snikersy', 1442490526, 1442490526, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1144, '178.136.229.251', '/', 1442493187, 1442493187, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1145, '178.136.229.251', '/catalog/snikersy', 1442493555, 1442493555, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1146, '178.136.229.251', '/', 1442507517, 1442507517, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2510.0 Safari/537.36', 1),
(1147, '178.136.229.251', '/', 1442815720, 1442815720, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1148, '178.136.229.251', '/', 1442818990, 1442818990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1149, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1442818994, 1442818994, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1150, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1442818997, 1442818997, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1151, '178.136.229.251', '/catalog/kedy', 1442819000, 1442819000, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1152, '178.136.229.251', '/catalog', 1442819006, 1442819006, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1153, '178.136.229.251', '/catalog/for_women', 1442819007, 1442819007, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1154, '178.136.229.251', '/catalog/krossovki', 1442819011, 1442819011, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1155, '178.136.229.251', '/sale', 1442819066, 1442819066, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1156, '178.136.229.251', '/popular', 1442819068, 1442819068, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1157, '178.136.229.251', '/new', 1442819069, 1442819069, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1158, '178.136.229.251', '/catalog', 1442819071, 1442819071, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1159, '178.136.229.251', '/catalog/aksessuary', 1442819073, 1442819073, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1160, '178.136.229.251', '/catalog/for_women', 1442819079, 1442819079, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1161, '178.136.229.251', '/catalog/krossovki', 1442819083, 1442819083, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1162, '178.136.229.251', '/viewed', 1442819087, 1442819087, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1163, '178.136.229.251', '/catalog/for_men', 1442819094, 1442819094, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1164, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1442819097, 1442819097, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1165, '178.136.229.251', '/catalog/kedy', 1442819098, 1442819098, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1166, '178.136.229.251', '/catalog/mokasiny', 1442819102, 1442819102, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1167, '178.136.229.251', '/catalog/snikersy', 1442819107, 1442819107, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1168, '178.136.229.251', '/catalog/for_men', 1442819110, 1442819110, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1169, '127.0.0.1', '/', 1442820003, 1442820003, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1170, '31.43.18.81', '/', 1442825934, 1442825934, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1171, '31.43.18.81', '/catalog', 1442826094, 1442826094, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1172, '31.43.18.81', '/catalog/for_men', 1442826104, 1442826104, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1173, '31.43.18.81', '/catalog/for_men', 1442826104, 1442826104, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1174, '31.43.18.81', '/catalog/for_women', 1442826104, 1442826104, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1175, '31.43.18.81', '/catalog/for_women', 1442826107, 1442826107, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1176, '31.43.18.81', '/catalog/krossovki', 1442826110, 1442826110, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1177, '31.43.18.81', '/catalog/krossovki_dlja_bega', 1442826115, 1442826115, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1178, '31.43.18.81', '/catalog/kedy', 1442826117, 1442826117, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1179, '31.43.18.81', '/catalog', 1442826120, 1442826120, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1180, '31.43.18.81', '/catalog/for_men', 1442826122, 1442826122, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1181, '31.43.18.81', '/catalog/kedy', 1442826124, 1442826124, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1182, '31.43.18.81', '/catalog', 1442826128, 1442826128, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1183, '31.43.18.81', '/catalog/for_women', 1442826131, 1442826131, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1184, '31.43.18.81', '/catalog/krossovki', 1442826132, 1442826132, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1185, '31.43.18.81', '/catalog/for_women', 1442826142, 1442826142, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1186, '31.43.18.81', '/sale', 1442826156, 1442826156, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1187, '31.43.18.81', '/product/nike_air_max_90_hyperfuse6873', 1442826159, 1442826159, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1188, '31.43.18.81', '/product/nike_air_max_90_hyperfuse6869', 1442826173, 1442826173, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1189, '31.43.18.81', '/cart', 1442826178, 1442826178, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1190, '31.43.18.81', '/cart', 1442826243, 1442826243, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1191, '31.43.18.81', '/catalog', 1442826247, 1442826247, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1192, '31.43.18.81', '/dostavka', 1442826250, 1442826250, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1193, '31.43.18.81', '/', 1442826262, 1442826262, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1194, '127.0.0.1', '/faq', 1442834010, 1442834010, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1195, '127.0.0.1', '/', 1442834012, 1442834012, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1196, '127.0.0.1', '/', 1442834065, 1442834065, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1197, '127.0.0.1', '/', 1442838084, 1442838084, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36', 1),
(1198, '127.0.0.1', '/', 1442838224, 1442838224, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36', 1),
(1199, '178.136.229.251', '/', 1442842202, 1446107602, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 2),
(1200, '127.0.0.1', '/', 1442855039, 1442855039, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36', 1),
(1201, '127.0.0.1', '/', 1442855072, 1442855072, '200 OK', 'Computer', 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/44.0.2403.89 Chrome/44.0.2403.89 Safari/537.36', 1),
(1202, '127.0.0.1', '/', 1442864448, 1442864448, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1203, '127.0.0.1', '/', 1442865686, 1442865686, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1204, '127.0.0.1', '/', 1442866119, 1442866119, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1205, '127.0.0.1', '/', 1442866125, 1442866125, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1206, '127.0.0.1', '/', 1442866126, 1442866126, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1207, '127.0.0.1', '/', 1442866126, 1442866126, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1208, '127.0.0.1', '/', 1442866175, 1442866175, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1209, '127.0.0.1', '/', 1442866199, 1442866199, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1210, '127.0.0.1', '/', 1442866214, 1442866214, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1211, '127.0.0.1', '/', 1442866363, 1442866363, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1212, '127.0.0.1', '/', 1442867280, 1442867280, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1213, '127.0.0.1', '/', 1442867532, 1442867532, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1214, '127.0.0.1', '/', 1442867579, 1442867579, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1215, '127.0.0.1', '/', 1442867643, 1442867643, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1216, '127.0.0.1', '/', 1442867696, 1442867696, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1217, '127.0.0.1', '/', 1442867959, 1442867959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1218, '127.0.0.1', '/', 1442868153, 1442868153, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1219, '127.0.0.1', '/', 1442868165, 1442868165, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1220, '127.0.0.1', '/', 1442868468, 1442868468, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1221, '127.0.0.1', '/', 1442868503, 1442868503, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1222, '127.0.0.1', '/', 1442914160, 1442914160, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1223, '127.0.0.1', '/', 1442915775, 1442915775, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1224, '127.0.0.1', '/', 1442915985, 1442915985, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1225, '127.0.0.1', '/', 1442916001, 1442916001, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1226, '127.0.0.1', '/', 1442916004, 1442916004, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1227, '127.0.0.1', '/', 1442916007, 1442916007, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1228, '127.0.0.1', '/', 1442916011, 1442916011, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1229, '127.0.0.1', '/', 1442916049, 1442916049, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1230, '127.0.0.1', '/', 1442916186, 1442916186, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1231, '127.0.0.1', '/', 1442916224, 1442916224, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1232, '127.0.0.1', '/', 1442916269, 1442916269, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1233, '127.0.0.1', '/', 1442916795, 1442916795, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1234, '127.0.0.1', '/', 1442917003, 1442917003, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1235, '127.0.0.1', '/', 1442917053, 1442917053, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1236, '127.0.0.1', '/', 1442917095, 1442917095, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1237, '127.0.0.1', '/', 1442917285, 1442917285, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1238, '127.0.0.1', '/', 1442945696, 1442945696, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1239, '127.0.0.1', '/', 1442946896, 1442946896, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1240, '127.0.0.1', '/', 1442946915, 1442946915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1241, '127.0.0.1', '/', 1442947168, 1442947168, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1242, '127.0.0.1', '/', 1442947535, 1442947535, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1243, '127.0.0.1', '/', 1442947553, 1442947553, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1244, '127.0.0.1', '/', 1442947720, 1442947720, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1245, '127.0.0.1', '/', 1442947783, 1442947783, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1246, '127.0.0.1', '/', 1442947808, 1442947808, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1247, '127.0.0.1', '/', 1442948174, 1442948174, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1248, '127.0.0.1', '/', 1442948438, 1442948438, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1249, '127.0.0.1', '/', 1442948582, 1442948582, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1250, '127.0.0.1', '/', 1442948586, 1442948586, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1251, '127.0.0.1', '/', 1442948797, 1442948797, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1252, '127.0.0.1', '/', 1442948987, 1442948987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1253, '127.0.0.1', '/', 1442949031, 1442949031, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1254, '127.0.0.1', '/', 1442949150, 1442949150, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1255, '127.0.0.1', '/', 1442949250, 1442949250, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1256, '127.0.0.1', '/', 1442949893, 1442949893, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1257, '127.0.0.1', '/', 1442949923, 1442949923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1258, '127.0.0.1', '/', 1442950011, 1442950011, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1259, '127.0.0.1', '/', 1442950013, 1442950013, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1260, '178.136.229.251', '/', 1442994168, 1442994168, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1261, '178.136.229.251', '/', 1443018792, 1443018792, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1262, '178.136.229.251', '/', 1443018792, 1443018792, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1263, '31.43.18.81', '/', 1443032102, 1443032102, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1264, '178.136.229.251', '/', 1443097489, 1443097489, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1265, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1443097497, 1443097497, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1266, '178.136.229.251', '/product/nike_air_max_90_hyperfuse1178', 1443097509, 1443097509, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1267, '178.136.229.251', '/cart', 1443097574, 1443097574, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1268, '178.136.229.251', '/', 1443101428, 1443101428, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36', 1),
(1269, '178.136.229.251', '/', 1443110741, 1443110741, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1270, '178.136.229.251', '/', 1443110747, 1443110747, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1271, '178.136.229.251', '/', 1443158874, 1443158874, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1272, '178.136.229.251', '/new', 1443158878, 1443158878, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1273, '178.136.229.251', '/', 1443185520, 1443185520, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1274, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1443185532, 1443185532, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1275, '178.136.229.251', '/catalog', 1443185538, 1443185538, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1276, '178.136.229.251', '/catalog/for_men', 1443185542, 1443185542, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1277, '178.136.229.251', '/catalog/kedy', 1443185543, 1443185543, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1278, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1443185544, 1443185544, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1279, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1443185548, 1443185548, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1280, '178.136.229.251', '/', 1443185551, 1443185551, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1281, '178.136.229.251', '/brands', 1443185635, 1443185635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1282, '178.136.229.251', '/sale', 1443185636, 1443185636, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1283, '178.136.229.251', '/popular', 1443185637, 1443185637, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1284, '178.136.229.251', '/sale', 1443185639, 1443185639, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1285, '178.136.229.251', '/user', 1443185646, 1443185646, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1286, '178.136.229.251', '/catalog', 1443185650, 1443185650, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1287, '178.136.229.251', '/catalog/for_men', 1443185654, 1443185654, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1288, '178.136.229.251', '/catalog/kedy', 1443185655, 1443185655, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1289, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1443185656, 1443185656, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1290, '178.136.229.251', '/product/nike_air_max_90_hyperfuse3973', 1443185658, 1443185658, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1291, '178.136.229.251', '/catalog', 1443185661, 1443185661, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1292, '178.136.229.251', '/', 1443185663, 1443185663, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1293, '178.136.229.251', '/', 1443252789, 1443252789, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1294, '178.136.229.251', '/popular', 1443252804, 1443252804, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1295, '178.136.229.251', '/', 1443422393, 1443422393, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1296, '178.136.229.251', '/', 1443438328, 1443438328, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1297, '178.136.229.251', '/', 1443439947, 1443439947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1298, '178.136.229.251', '/product/nike_air_max_90_hyperfuse9495', 1443439965, 1443439965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1299, '178.136.229.251', '/backend/contacts/new/id/1', 1443442254, 1443442254, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1300, '178.136.229.251', '/', 1443443142, 1443443142, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1301, '178.136.229.251', '/', 1443443962, 1443443962, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1302, '178.136.229.251', '/sitemap', 1443443995, 1443443995, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1303, '178.136.229.251', '/', 1443444000, 1443444000, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1304, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1443444569, 1443444569, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1305, '127.0.0.1', '/', 1443517133, 1443517133, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1306, '178.136.229.251', '/', 1443528170, 1443528170, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1307, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6869', 1443528176, 1443528176, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1308, '46.33.244.80', '/', 1443531682, 1443531682, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1309, '46.33.244.80', '/new', 1443531686, 1443531686, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1310, '46.33.244.80', '/catalog', 1443531690, 1443531690, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1311, '46.33.244.80', '/catalog/for_men', 1443531693, 1443531693, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1312, '46.33.244.80', '/catalog/krossovki_dlja_bega', 1443531695, 1443531695, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1313, '46.33.244.80', '/catalog/kedy', 1443531698, 1443531698, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1314, '46.33.244.80', '/catalog/snikersy', 1443531707, 1443531707, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1315, '46.33.244.80', '/catalog/krossovki', 1443531710, 1443531710, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1316, '46.33.244.80', '/catalog/futbolki', 1443531713, 1443531713, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1317, '46.33.244.80', '/catalog/futbolki?per_page=30&sort=cost&type=asc', 1443531725, 1443531725, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1318, '46.33.244.80', '/catalog/futbolki?per_page=120&sort=cost&type=asc', 1443531783, 1443531783, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1319, '46.33.244.80', '/', 1443538039, 1443538039, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1320, '46.33.244.80', '/', 1443538046, 1443538046, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(1321, '46.33.244.80', '/', 1443538287, 1443538287, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1322, '178.136.229.251', '/', 1443549503, 1443549503, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1323, '178.136.229.251', '/', 1443603087, 1443603087, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1324, '46.136.3.147', '/', 1443603129, 1443603129, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1325, '46.136.3.147', '/oplata', 1443603541, 1443603541, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1326, '46.136.3.147', '/vozvrat', 1443603544, 1443603544, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1327, '46.136.3.147', '/dostavka', 1443603546, 1443603546, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1328, '46.136.3.147', '/vozvrat', 1443603558, 1443603558, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1329, '46.136.3.147', '/dostavka', 1443603567, 1443603567, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1330, '46.136.3.147', '/vozvrat', 1443603575, 1443603575, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1331, '46.136.3.147', '/popular', 1443603577, 1443603577, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1332, '46.136.3.147', '/catalog', 1443603583, 1443603583, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1333, '46.136.3.147', '/articles/kak-vybrat-muzhskie-krossovki', 1443603612, 1443603612, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9', 1),
(1334, '31.193.124.174', '/', 1443609860, 1443609860, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1335, '31.193.124.174', '/dostavka', 1443610490, 1443610490, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1336, '178.136.229.251', '/', 1443613660, 1443613660, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1337, '127.0.0.1', '/', 1443621751, 1443621751, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1338, '178.136.229.251', '/', 1443625338, 1443794638, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 2),
(1339, '178.136.229.251', '/', 1443628803, 1443628803, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36', 1),
(1340, '46.175.163.12', '/', 1443635307, 1443635307, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:40.0) Gecko/20100101 Firefox/40.0', 1),
(1341, '178.136.229.251', '/', 1443693710, 1443693710, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2523.0 Safari/537.36', 1),
(1342, '178.136.229.251', '/user', 1443693728, 1443693728, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2523.0 Safari/537.36', 1),
(1343, '178.136.229.251', '/', 1443693731, 1443694325, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2523.0 Safari/537.36', 3),
(1344, '127.0.0.1', '/', 1443792605, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1345, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1443794804, 1443794804, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1346, '178.136.229.251', '/krossovki_dlja_bega', 1443794823, 1443794823, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1347, '178.136.229.251', '/', 1443794829, 1443794829, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1348, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1443794857, 1443794857, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1349, '178.136.229.251', '/', 1443795085, 1443795085, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1350, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1443795100, 1443795110, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 2),
(1351, '178.136.229.251', '/krossovki_dlja_bega', 1443795169, 1443795169, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1352, '178.136.229.251', '/', 1443795418, 1443795418, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1353, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1443795426, 1443795428, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 2),
(1354, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1443795430, 1443795430, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1355, '178.136.229.251', '/catalog/kedy', 1443795439, 1443795439, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1356, '178.136.229.251', '/catalog/for_men', 1443795841, 1443795841, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1357, '178.136.229.251', '/', 1443795845, 1444393787, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 12),
(1358, '195.230.129.9', '/', 1443902052, 1443902052, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1359, '127.0.0.1', '/', 1444021508, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1360, '127.0.0.1', '/', 1444021526, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1361, '127.0.0.1', '/', 1444021550, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1362, '127.0.0.1', '/', 1444021745, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1363, '127.0.0.1', '/', 1444074843, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1364, '127.0.0.1', '/', 1444156314, 1444158083, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1365, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/available=1', 1444160003, 1444160003, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1366, '127.0.0.1', '/catalog/krossovki_dlja_bega', 1444160008, 1444160008, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1367, '127.0.0.1', '/catalog/povsednevnye_krossovki', 1444160023, 1444160023, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1368, '127.0.0.1', '/catalog/krossovki_dlja_bega', 1444160027, 1444160027, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1369, '127.0.0.1', '/catalog/kedy', 1444160030, 1444160030, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1370, '127.0.0.1', '/catalog/for_men', 1444160034, 1444160034, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1371, '127.0.0.1', '/catalog/mokasiny', 1444160036, 1444160036, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1372, '127.0.0.1', '/catalog/for_men', 1444160038, 1444160038, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1373, '127.0.0.1', '/catalog/snikersy', 1444160041, 1444160041, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1374, '127.0.0.1', '/catalog/for_men', 1444160043, 1444160043, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1375, '127.0.0.1', '/catalog/kedy', 1444160045, 1444160045, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1376, '127.0.0.1', '/catalog/for_men', 1444160048, 1444160048, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1377, '127.0.0.1', '/', 1444160053, 1444160053, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1378, '127.0.0.1', '/product/nike_air_max_90_hyperfuse6869', 1444160055, 1444160055, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1379, '127.0.0.1', '/catalog/krossovki_dlja_bega', 1444160058, 1444160072, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1380, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/material=sintetik&country=china', 1444163396, 1444163582, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 19),
(1381, '93.79.169.214', '/', 1444222829, 1444222829, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1382, '89.19.105.19', '/', 1444226112, 1444226112, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69', 1),
(1383, '93.79.245.43', '/', 1444231244, 1444231703, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 2),
(1384, '93.79.245.43', '/oplata', 1444231729, 1444231729, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1385, '93.79.245.43', '/garantija', 1444231732, 1444231732, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1386, '93.79.245.43', '/dostavka', 1444231734, 1444231734, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1387, '93.79.245.43', '/faq', 1444231746, 1444231753, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 2),
(1388, '93.79.245.43', '/articles', 1444231756, 1444231756, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1389, '93.79.245.43', '/articles/muzhskaja_asics', 1444231767, 1444231767, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1390, '93.79.245.43', '/news', 1444231774, 1444231774, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1391, '93.79.245.43', '/contact', 1444231777, 1444231777, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1392, '93.79.245.43', '/popular', 1444231788, 1444231788, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1393, '93.79.245.43', '/sale', 1444231789, 1444231789, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1394, '93.79.245.43', '/brands', 1444231791, 1444231791, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1395, '93.79.245.43', '/contact', 1444231798, 1444231798, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174', 1),
(1396, '93.79.132.79', '/', 1444233347, 1444233347, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1397, '109.104.179.45', '/', 1444309269, 1444309269, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1398, '109.104.179.45', '/product/nike_air_max_90_hyperfuse6927', 1444309275, 1444309275, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1399, '109.104.179.45', '/cart', 1444309281, 1444309281, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1400, '127.0.0.1', '/', 1444315287, 1444316496, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1401, '178.136.229.251', '/contact', 1444393813, 1444393813, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1402, '178.136.229.251', '/news', 1444393817, 1444393817, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1403, '178.136.229.251', '/o_nas', 1444393820, 1444393820, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1404, '178.136.229.251', '/articles', 1444393824, 1444393824, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1405, '178.136.229.251', '/faq', 1444393827, 1444393827, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1406, '178.136.229.251', '/vopros_2', 1444393832, 1444393832, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1407, '178.136.229.251', '/catalog/mokasiny', 1444393836, 1444393836, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1408, '178.136.229.251', '/catalog/kedy', 1444393841, 1444393841, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1409, '93.79.187.241', '/', 1444568002, 1444568002, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69', 1),
(1410, '178.136.229.251', '/', 1444658200, 1444906798, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 2),
(1411, '127.0.0.1', '/', 1444676093, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1412, '127.0.0.1', '/catalog/kedy', 1444676102, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1413, '127.0.0.1', '/catalog', 1444676117, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1414, '127.0.0.1', '/catalog/for_women', 1444676120, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1415, '127.0.0.1', '/catalog/krossovki', 1444676122, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1416, '176.38.168.242', '/', 1444745352, 1444745354, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 2),
(1417, '176.38.168.242', '/', 1444745353, 1444745353, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1418, '176.38.168.242', '/product/nike_air_max_90_hyperfuse', 1444745472, 1444745472, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1419, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1444906809, 1444906809, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1420, '178.136.229.251', '/cart', 1444906814, 1444906823, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 2),
(1421, '178.136.229.251', '/', 1444906831, 1444906831, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1422, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1444906967, 1444906967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1423, '178.136.229.251', '/cart', 1444906970, 1444906970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1424, '178.136.229.251', '/', 1445266697, 1445266697, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36', 1),
(1425, '178.136.229.251', '/', 1445273620, 1445610482, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 7),
(1426, '178.136.229.251', '/', 1445416370, 1446194755, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1427, '127.0.0.1', '/', 1445438717, 1445438717, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1428, '31.43.28.67', '/', 1445493510, 1445493510, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1429, '31.43.28.67', '/catalog', 1445493549, 1445493549, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1430, '31.43.28.67', '/catalog/for_women', 1445493552, 1445493552, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1431, '31.43.28.67', '/catalog/krossovki', 1445493558, 1445493558, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1432, '31.43.28.67', '/catalog', 1445493562, 1445493562, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1433, '31.43.28.67', '/catalog/aksessuary', 1445493564, 1445493564, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1434, '31.43.28.67', '/catalog', 1445493569, 1445493569, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1435, '31.43.28.67', '/catalog/for_women', 1445493571, 1445493571, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1436, '31.43.28.67', '/catalog', 1445493574, 1445493574, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1437, '31.43.28.67', '/new', 1445493575, 1445493575, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1438, '31.43.28.67', '/popular', 1445493577, 1445493577, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1439, '31.43.28.67', '/product/nike_air_max_90_hyperfuse9495', 1445493579, 1445493579, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1440, '31.43.28.67', '/brands', 1445493605, 1445493605, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1441, '127.0.0.1', '/', 1445532636, NULL, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1442, '178.136.229.251', '/backend', 1445610490, 1445610490, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1443, '178.136.229.251', '/', 1445610537, 1445610537, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1444, '178.136.229.251', '/dostavka', 1445610550, 1445610550, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1445, '178.136.229.251', '/test', 1445610557, 1445610557, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1446, '178.136.229.251', '/oplata', 1445610560, 1445610560, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1447, '178.136.229.251', '/', 1445849601, 1445849601, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36', 1),
(1448, '178.136.229.251', '/', 1445851767, 1445851767, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1449, '178.136.229.251', '/catalog', 1445851772, 1445851772, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1450, '178.136.229.251', '/catalog/for_men', 1445851775, 1445851775, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1451, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1445851778, 1445851778, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1452, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/color=green', 1445851784, 1445851784, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1453, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/color=blue,green', 1445851790, 1445851790, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1454, '178.136.229.251', '/', 1445852494, 1445852494, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1455, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1445852502, 1445852502, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1456, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/color=blue', 1445854304, 1445854304, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1457, '178.136.229.251', '/', 1445866314, 1445866314, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1458, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1445866318, 1445866318, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1459, '178.136.229.251', '/', 1445927795, 1445927795, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1460, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1445927799, 1445927799, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1461, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1445927842, 1445927842, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1462, '178.136.229.251', '/', 1445934488, 1445934488, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1463, '178.136.229.251', '/backend/index', 1445934951, 1445934951, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1464, '178.136.229.251', '/', 1445939735, 1445939735, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1465, '178.136.229.251', '/', 1445955469, 1446036649, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 6),
(1466, '212.111.209.20', '/', 1445972551, 1445972551, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1467, '212.111.209.20', '/brands', 1445972635, 1445972635, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1468, '212.111.209.20', '/brands/asics', 1445972640, 1445972640, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1469, '212.111.209.20', '/brands/lacoste', 1445972652, 1445972652, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1470, '90.191.172.183', '/', 1445974986, 1445974986, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1471, '90.191.172.183', '/catalog', 1445974996, 1445974996, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1472, '90.191.172.183', '/articles', 1445975002, 1445975002, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1473, '90.191.172.183', '/articles/kak-vybrat-muzhskie-krossovki', 1445975013, 1445975013, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1474, '90.191.172.183', '/dostavka', 1445975025, 1445975025, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1475, '90.191.172.183', '/contact', 1445975039, 1445975039, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1476, '90.191.172.183', '/popular', 1445975045, 1445975045, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1477, '90.191.172.183', '/product/nike_air_max_90_hyperfuse', 1445975048, 1445975048, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1478, '90.191.172.183', '/cart', 1445975063, 1445975063, '200 OK', 'Phone', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 1),
(1479, '212.111.209.20', '/', 1445975147, 1445975147, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1480, '212.111.209.20', '/catalog', 1445975152, 1445975152, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1481, '212.111.209.20', '/catalog/for_men', 1445975157, 1445975157, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1482, '212.111.209.20', '/catalog/kedy', 1445975166, 1445975166, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1483, '212.111.209.20', '/catalog/kedy?per_page=30&sort=cost&type=desc', 1445975170, 1445975170, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1484, '178.136.229.251', '/sale', 1446036652, 1446036652, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1485, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6873', 1446036655, 1446036655, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1486, '178.136.229.251', '/cart', 1446036658, 1446036658, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1487, '178.92.174.22', '/', 1446039059, 1446039059, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69 (Edition Campaign 18)', 1),
(1488, '178.136.229.251', '/', 1446047833, 1446112133, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 4),
(1489, '212.111.209.20', '/', 1446064610, 1446064610, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1490, '212.111.209.20', '/catalog', 1446064615, 1446064615, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1491, '212.111.209.20', '/catalog/for_men', 1446064619, 1446064619, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1492, '212.111.209.20', '/catalog/kedy', 1446064625, 1446064625, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1493, '178.136.229.251', '/cart', 1446107615, 1446107615, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1494, '178.136.229.251', '/articles', 1446107617, 1446107617, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1495, '178.136.229.251', '/catalog/kedy', 1446107622, 1446107622, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1496, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1446107625, 1446107625, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1497, '178.136.229.251', '/product/test_wezom', 1446107628, 1446107628, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1498, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1446107634, 1446107634, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1499, '178.136.229.251', '/cart', 1446107643, 1446107643, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', 1),
(1500, '178.136.229.251', '/', 1446107655, 1446127754, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 2),
(1501, '31.43.17.114', '/', 1446110639, 1446110639, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1502, '31.43.17.114', '/catalog/kedy', 1446110712, 1446110712, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1503, '31.43.17.114', '/catalog/mokasiny', 1446110717, 1446110717, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1504, '31.43.17.114', '/catalog/for_women', 1446110721, 1446110721, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1505, '31.43.17.114', '/catalog/krossovki', 1446110723, 1446110723, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1506, '31.43.17.114', '/catalog/for_men', 1446110725, 1446110725, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1507, '31.43.17.114', '/catalog/kedy', 1446110727, 1446110727, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1508, '31.43.17.114', '/catalog', 1446110730, 1446110730, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1509, '31.43.17.114', '/catalog/aksessuary', 1446110733, 1446110733, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1510, '31.43.17.114', '/new', 1446110738, 1446110738, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1511, '31.43.17.114', '/popular', 1446110740, 1446110740, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1512, '31.43.17.114', '/product/nike_air_max_90_hyperfuse2018', 1446110745, 1446110745, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1513, '31.43.17.114', '/new', 1446110767, 1446110767, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1514, '31.43.17.114', '/popular', 1446110768, 1446110768, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1515, '31.43.17.114', '/sale', 1446110770, 1446110770, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1516, '31.43.17.114', '/brands', 1446110771, 1446110771, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1517, '31.43.17.114', '/popular', 1446110776, 1446110776, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1518, '31.43.17.114', '/product/nike_air_max_90_hyperfuse', 1446110778, 1446110778, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1519, '31.43.17.114', '/cart', 1446110782, 1446110796, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(1520, '178.136.229.251', '/yuytu', 1446112142, 1446112142, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1521, '178.136.229.251', '/', 1446112316, 1446112317, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(1522, '178.136.229.251', '/new', 1446112319, 1446112319, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1523, '178.136.229.251', '/popular', 1446112324, 1446112324, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1524, '178.136.229.251', '/tyuyi', 1446112345, 1446112345, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1525, '178.136.229.251', '/Sitemap', 1446112347, 1446112347, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1526, '178.136.229.251', '/sitemap', 1446112351, 1446112351, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1527, '178.136.229.251', '/', 1446113559, 1446113570, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(1528, '178.136.229.251', '/o_nas', 1446113590, 1446113699, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 7),
(1529, '178.136.229.251', '/faq', 1446113891, 1446113969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 3),
(1530, '178.136.229.251', '/', 1446114091, 1446114091, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1531, '178.136.229.251', '/new', 1446114095, 1446114095, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1532, '178.136.229.251', '/catalog', 1446114097, 1446114097, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1533, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1446114099, 1446114243, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 4),
(1534, '178.136.229.251', '/o_nas', 1446115650, 1446115726, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 3),
(1535, '178.136.229.251', '/', 1446117325, 1446117325, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1536, '178.136.229.251', '/backend', 1446127313, 1446127313, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1537, '178.136.229.251', '/html', 1446127777, 1446127777, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1538, '178.136.229.251', '/vozvrat', 1446128001, 1446128001, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1539, '178.136.229.251', '/garantija', 1446128012, 1446128012, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1540, '178.136.229.251', '/oplata', 1446128015, 1446128015, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1541, '178.136.229.251', '/catalog/krossovki_dlja_bega', 1446128036, 1446128036, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1542, '178.136.229.251', '/catalog/krossovki_dlja_bega/page/2', 1446128039, 1446128039, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1543, '178.136.229.251', '/catalog/krossovki_dlja_bega/page/11', 1446128043, 1446128043, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1544, '178.136.229.251', '/catalog/krossovki_dlja_bega/filter/min_cost=1029&max_cost=1449', 1446128046, 1446128046, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1545, '178.136.229.251', '/', 1446128058, 1446128058, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2547.0 Safari/537.36', 1),
(1546, '178.136.229.251', '/', 1446128870, 1446129086, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 3),
(1547, '178.136.229.251', '/', 1446128979, 1446128979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1548, '178.136.229.251', '/backend', 1446129143, 1446129143, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1549, '178.136.229.251', '/backend', 1446129171, 1446129171, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1550, '178.136.229.251', '/', 1446129224, 1446130866, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 9),
(1551, '178.136.229.251', '/catalog', 1446131255, 1446131255, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1552, '178.136.229.251', '/product/nike_air_max_90_hyperfuse2018', 1446131270, 1446131270, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1553, '176.104.11.150', '/', 1446133206, 1446133206, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1554, '176.104.11.150', '/new', 1446133223, 1446133223, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1555, '176.104.11.150', '/popular', 1446133227, 1446133227, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1556, '176.104.11.150', '/sale', 1446133229, 1446133229, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1557, '176.104.11.150', '/catalog/krossovki_dlja_bega', 1446133235, 1446133235, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1558, '176.104.11.150', '/brands', 1446133239, 1446133239, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1559, '176.104.11.150', '/brands/franklin_marshall', 1446133251, 1446133251, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1560, '176.104.11.150', '/dostavka', 1446133257, 1446133257, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1561, '176.104.11.150', '/oplata', 1446133261, 1446133261, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1562, '176.104.11.150', '/catalog', 1446133267, 1446133267, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1563, '176.104.11.150', '/o_nas', 1446133271, 1446133271, '200 OK', 'Computer', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7', 1),
(1564, '178.136.229.251', '/', 1446192598, 1446192598, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1565, '178.136.229.251', '/faq', 1446193000, 1446193000, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1566, '178.136.229.251', '/', 1446193006, 1446195908, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(1567, '178.136.229.251', '/', 1446193915, 1446193915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1568, '178.136.229.251', '/', 1446194119, 1446194119, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1569, '178.136.229.251', '/catalog', 1446194178, 1446194178, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1570, '178.136.229.251', '/catalog/krossovki', 1446194185, 1446194185, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1571, '178.136.229.251', '/', 1446194200, 1446194594, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1572, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446194637, 1446194637, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1573, '178.136.229.251', '/', 1446194719, 1446194719, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(1574, '178.136.229.251', '/articles', 1446194769, 1446194769, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1575, '178.136.229.251', '/faq', 1446194769, 1446194769, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1576, '178.136.229.251', '/o_nas', 1446194772, 1446194772, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1577, '178.136.229.251', '/news', 1446194773, 1446194773, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1578, '178.136.229.251', '/contact', 1446194775, 1446194775, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1579, '178.136.229.251', '/catalog/kedy', 1446194778, 1446194778, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1580, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446194783, 1446194783, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1581, '178.136.229.251', '/catalog/krossovki', 1446194786, 1446194786, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1582, '178.136.229.251', '/', 1446194791, 1446194791, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1583, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446194795, 1446194795, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1584, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446194796, 1446194796, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1585, '178.136.229.251', '/cart', 1446194803, 1446194803, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1586, '178.136.229.251', '/', 1446194806, 1446194806, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1587, '178.136.229.251', '/sale', 1446194809, 1446194809, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1588, '178.136.229.251', '/brands', 1446194811, 1446194811, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1589, '178.136.229.251', '/', 1446194820, 1446194820, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1590, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446194823, 1446194823, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1591, '178.136.229.251', '/', 1446195022, 1446195022, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1592, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446195024, 1446195024, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1593, '178.136.229.251', '/cart', 1446195196, 1446195196, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1594, '178.136.229.251', '/', 1446195416, 1446195416, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1595, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446195419, 1446195419, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1596, '178.136.229.251', '/', 1446195466, 1446195466, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1597, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446195469, 1446195469, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1598, '178.136.229.251', '/', 1446195603, 1446195603, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1599, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446195608, 1446195608, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1600, '178.136.229.251', '/', 1446195827, 1446195985, '200 OK', 'Computer', 'Apache-HttpClient/4.2.6 (java 1.5)', 130),
(1601, '178.136.229.251', '/', 1446195827, 1446195828, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1602, '178.136.229.251', '/articles', 1446195830, 1446195830, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1603, '178.136.229.251', '/faq', 1446195831, 1446195831, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1604, '178.136.229.251', '/o_nas', 1446195831, 1446195831, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1605, '178.136.229.251', '/news', 1446195832, 1446195832, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1606, '178.136.229.251', '/contact', 1446195832, 1446195832, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1607, '178.136.229.251', '/catalog/kedy', 1446195832, 1446195832, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1608, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195833, 1446195833, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1609, '178.136.229.251', '/catalog/krossovki', 1446195833, 1446195833, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1610, '178.136.229.251', '/', 1446195833, 1446195833, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1611, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195834, 1446195834, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1612, '178.136.229.251', '/cart', 1446195835, 1446195835, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1613, '178.136.229.251', '/', 1446195835, 1446195835, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1614, '178.136.229.251', '/sale', 1446195836, 1446195836, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1615, '178.136.229.251', '/brands', 1446195836, 1446195836, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1616, '178.136.229.251', '/', 1446195889, 1446195897, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 79),
(1617, '178.136.229.251', '/articles', 1446195906, 1446195908, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 10),
(1618, '178.136.229.251', '/faq', 1446195908, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1619, '178.136.229.251', '/articles', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1620, '178.136.229.251', '/articles', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1621, '178.136.229.251', '/faq', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1622, '178.136.229.251', '/articles', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1623, '178.136.229.251', '/articles', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1624, '178.136.229.251', '/faq', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(1625, '178.136.229.251', '/articles', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1626, '178.136.229.251', '/faq', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1627, '178.136.229.251', '/articles', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 6),
(1628, '178.136.229.251', '/o_nas', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1629, '178.136.229.251', '/articles', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1630, '178.136.229.251', '/o_nas', 1446195909, 1446195909, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1631, '178.136.229.251', '/articles', 1446195909, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(1632, '178.136.229.251', '/o_nas', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1633, '178.136.229.251', '/o_nas', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1634, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1635, '178.136.229.251', '/o_nas', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1636, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1637, '178.136.229.251', '/o_nas', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1638, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1639, '178.136.229.251', '/o_nas', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1640, '178.136.229.251', '/news', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1641, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1642, '178.136.229.251', '/faq', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1643, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1644, '178.136.229.251', '/o_nas', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1645, '178.136.229.251', '/news', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1646, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1647, '178.136.229.251', '/news', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1648, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1649, '178.136.229.251', '/news', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1650, '178.136.229.251', '/o_nas', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1651, '178.136.229.251', '/articles', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1652, '178.136.229.251', '/news', 1446195910, 1446195910, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1653, '178.136.229.251', '/articles', 1446195910, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1654, '178.136.229.251', '/news', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1655, '178.136.229.251', '/faq', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1656, '178.136.229.251', '/articles', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1657, '178.136.229.251', '/news', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1658, '178.136.229.251', '/faq', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1659, '178.136.229.251', '/articles', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1660, '178.136.229.251', '/faq', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1661, '178.136.229.251', '/news', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1662, '178.136.229.251', '/o_nas', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1663, '178.136.229.251', '/articles', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1664, '178.136.229.251', '/faq', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1665, '178.136.229.251', '/contact', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1666, '178.136.229.251', '/o_nas', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1667, '178.136.229.251', '/articles', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1668, '178.136.229.251', '/contact', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1669, '178.136.229.251', '/faq', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1670, '178.136.229.251', '/o_nas', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1671, '178.136.229.251', '/faq', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1672, '178.136.229.251', '/contact', 1446195911, 1446195911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1673, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1674, '178.136.229.251', '/contact', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1675, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1676, '178.136.229.251', '/news', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1677, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1678, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1679, '178.136.229.251', '/contact', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1680, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1681, '178.136.229.251', '/catalog/kedy', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1682, '178.136.229.251', '/news', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1683, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1684, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1685, '178.136.229.251', '/catalog/kedy', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1686, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1687, '178.136.229.251', '/contact', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1688, '178.136.229.251', '/news', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1689, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1690, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1691, '178.136.229.251', '/catalog/kedy', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1692, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1693, '178.136.229.251', '/contact', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1694, '178.136.229.251', '/catalog/kedy', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1695, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1696, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1697, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1698, '178.136.229.251', '/catalog/kedy', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1699, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1700, '178.136.229.251', '/contact', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1701, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1702, '178.136.229.251', '/faq', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1703, '178.136.229.251', '/news', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1704, '178.136.229.251', '/o_nas', 1446195912, 1446195912, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1705, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1706, '178.136.229.251', '/catalog/kedy', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1707, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1708, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1709, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1710, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1711, '178.136.229.251', '/catalog/kedy', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1712, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1713, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1714, '178.136.229.251', '/catalog/kedy', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1715, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1716, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1717, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1718, '178.136.229.251', '/contact', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1719, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1720, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1721, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1722, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1723, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1724, '178.136.229.251', '/catalog/kedy', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1725, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1726, '178.136.229.251', '/contact', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1727, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1728, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1729, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1730, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1731, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1732, '178.136.229.251', '/contact', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1733, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1734, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1735, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1736, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1737, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1738, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1739, '178.136.229.251', '/news', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1740, '178.136.229.251', '/faq', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1741, '178.136.229.251', '/o_nas', 1446195913, 1446195913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1742, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195913, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1743, '178.136.229.251', '/news', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1744, '178.136.229.251', '/o_nas', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1745, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(1746, '178.136.229.251', '/faq', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1747, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1748, '178.136.229.251', '/news', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1749, '178.136.229.251', '/o_nas', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1750, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1751, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1752, '178.136.229.251', '/news', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1753, '178.136.229.251', '/o_nas', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1754, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1755, '178.136.229.251', '/catalog/krossovki', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1756, '178.136.229.251', '/o_nas', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1757, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1758, '178.136.229.251', '/catalog/kedy', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1759, '178.136.229.251', '/o_nas', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1760, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1761, '178.136.229.251', '/catalog/kedy', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1762, '178.136.229.251', '/news', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1763, '178.136.229.251', '/o_nas', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1764, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1765, '178.136.229.251', '/news', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1766, '178.136.229.251', '/o_nas', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1767, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1768, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1769, '178.136.229.251', '/catalog/krossovki', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1770, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1771, '178.136.229.251', '/catalog/kedy', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1772, '178.136.229.251', '/contact', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1773, '178.136.229.251', '/catalog/krossovki', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1774, '178.136.229.251', '/catalog/kedy', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1775, '178.136.229.251', '/news', 1446195914, 1446195914, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1776, '178.136.229.251', '/catalog/kedy', 1446195914, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(1777, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1778, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1779, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1780, '178.136.229.251', '/o_nas', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1781, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1782, '178.136.229.251', '/', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1783, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1784, '178.136.229.251', '/catalog/krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1785, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1786, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1787, '178.136.229.251', '/catalog/krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1788, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1789, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1790, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1791, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1792, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1793, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1794, '178.136.229.251', '/catalog/krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1795, '178.136.229.251', '/o_nas', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1796, '178.136.229.251', '/catalog/krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1797, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1798, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1799, '178.136.229.251', '/catalog/krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1800, '178.136.229.251', '/', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1801, '178.136.229.251', '/', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1802, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1803, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1804, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1805, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1806, '178.136.229.251', '/popular', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(1807, '178.136.229.251', '/news', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1808, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1809, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1810, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1811, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1812, '178.136.229.251', '/', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1813, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1814, '178.136.229.251', '/', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1815, '178.136.229.251', '/', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1816, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1817, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1818, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1819, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1820, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1821, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1822, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1823, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1824, '178.136.229.251', '/contact', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1825, '178.136.229.251', '/catalog/kedy', 1446195915, 1446195915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1826, '178.136.229.251', '/', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1827, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1828, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1829, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1830, '178.136.229.251', '/contact', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1831, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1832, '178.136.229.251', '/', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1833, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1834, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1835, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1836, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1837, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1838, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1839, '178.136.229.251', '/contact', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1840, '178.136.229.251', '/', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1841, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1842, '178.136.229.251', '/contact', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1843, '178.136.229.251', '/catalog/krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1844, '178.136.229.251', '/news', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1845, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1846, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1847, '178.136.229.251', '/catalog/krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1848, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1849, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1850, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1851, '178.136.229.251', '/catalog/krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1852, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1853, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1854, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1855, '178.136.229.251', '/contact', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1856, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1857, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1858, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1859, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1860, '178.136.229.251', '/catalog/krossovki', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1861, '178.136.229.251', '/catalog/kedy', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1862, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195916, 1446195916, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1863, '178.136.229.251', '/catalog/krossovki', 1446195916, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1864, '178.136.229.251', '/catalog/kedy', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1865, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1866, '178.136.229.251', '/contact', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1867, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1868, '178.136.229.251', '/contact', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1869, '178.136.229.251', '/', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1870, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1871, '178.136.229.251', '/catalog/kedy', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1872, '178.136.229.251', '/', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1873, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1874, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1875, '178.136.229.251', '/', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1876, '178.136.229.251', '/contact', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(1877, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1878, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1879, '178.136.229.251', '/', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1880, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1881, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1882, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1883, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1884, '178.136.229.251', '/catalog/kedy', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1885, '178.136.229.251', '/contact', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1886, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1887, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1888, '178.136.229.251', '/catalog/kedy', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1889, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1890, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1891, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1892, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1893, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1894, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1895, '178.136.229.251', '/', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1896, '178.136.229.251', '/catalog/kedy', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1897, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1898, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1899, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1900, '178.136.229.251', '/', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1901, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1902, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1903, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1904, '178.136.229.251', '/', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1905, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1906, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1907, '178.136.229.251', '/catalog/krossovki', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1908, '178.136.229.251', '/cart', 1446195917, 1446195917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1909, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1910, '178.136.229.251', '/', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1911, '178.136.229.251', '/catalog/krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1912, '178.136.229.251', '/catalog/kedy', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1913, '178.136.229.251', '/', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1914, '178.136.229.251', '/cart', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1915, '178.136.229.251', '/catalog/kedy', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1916, '178.136.229.251', '/', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1917, '178.136.229.251', '/catalog/krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1918, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1919, '178.136.229.251', '/catalog/krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1920, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1921, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1922, '178.136.229.251', '/', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1923, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1924, '178.136.229.251', '/', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1925, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1926, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1927, '178.136.229.251', '/catalog/krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1928, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1929, '178.136.229.251', '/catalog/krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1930, '178.136.229.251', '/catalog/krossovki', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1931, '178.136.229.251', '/', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1932, '178.136.229.251', '/', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1933, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(1934, '178.136.229.251', '/cart', 1446195918, 1446195918, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1935, '178.136.229.251', '/catalog', 1446195920, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(1936, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1937, '178.136.229.251', '/', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1938, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1939, '178.136.229.251', '/catalog/krossovki', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1940, '178.136.229.251', '/', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1941, '178.136.229.251', '/', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1942, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1943, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1944, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1945, '178.136.229.251', '/', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(1946, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1947, '178.136.229.251', '/', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1948, '178.136.229.251', '/sale', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1949, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1950, '178.136.229.251', '/', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1951, '178.136.229.251', '/', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1952, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195920, 1446195920, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1953, '178.136.229.251', '/cart', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1954, '178.136.229.251', '/catalog/krossovki', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1955, '178.136.229.251', '/cart', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1956, '178.136.229.251', '/cart', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1957, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1958, '178.136.229.251', '/', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1959, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1960, '178.136.229.251', '/sale', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1961, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1962, '178.136.229.251', '/catalog/krossovki', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1963, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1964, '178.136.229.251', '/sale', 1446195921, 1446195921, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1965, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1966, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1967, '178.136.229.251', '/brands', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1968, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1969, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1970, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1971, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1972, '178.136.229.251', '/catalog/krossovki', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1973, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1974, '178.136.229.251', '/cart', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1975, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1976, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1977, '178.136.229.251', '/cart', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1978, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1979, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1980, '178.136.229.251', '/cart', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1981, '178.136.229.251', '/brands', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1982, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1983, '178.136.229.251', '/brands', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1984, '178.136.229.251', '/', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1985, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1986, '178.136.229.251', '/cart', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1987, '178.136.229.251', '/sale', 1446195922, 1446195922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(1988, '178.136.229.251', '/cart', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1989, '178.136.229.251', '/sale', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(1990, '178.136.229.251', '/', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1991, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1992, '178.136.229.251', '/brands', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1993, '178.136.229.251', '/', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1994, '178.136.229.251', '/sale', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1995, '178.136.229.251', '/sale', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1996, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1997, '178.136.229.251', '/cart', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1998, '178.136.229.251', '/', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(1999, '178.136.229.251', '/sale', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2000, '178.136.229.251', '/brands', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2001, '178.136.229.251', '/sale', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2002, '178.136.229.251', '/', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2003, '178.136.229.251', '/brands', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2004, '178.136.229.251', '/cart', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2005, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2006, '178.136.229.251', '/brands', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2007, '178.136.229.251', '/', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2008, '178.136.229.251', '/brands', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2009, '178.136.229.251', '/cart', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2010, '178.136.229.251', '/', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2011, '178.136.229.251', '/cart', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2012, '178.136.229.251', '/brands', 1446195923, 1446195923, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2013, '178.136.229.251', '/', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2014, '178.136.229.251', '/sale', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2015, '178.136.229.251', '/', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2016, '178.136.229.251', '/sale', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2017, '178.136.229.251', '/brands', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2018, '178.136.229.251', '/', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2019, '178.136.229.251', '/brands', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2020, '178.136.229.251', '/', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2021, '178.136.229.251', '/sale', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2022, '178.136.229.251', '/', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2023, '178.136.229.251', '/sale', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2024, '178.136.229.251', '/cart', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2025, '178.136.229.251', '/', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2026, '178.136.229.251', '/cart', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2027, '178.136.229.251', '/', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2028, '178.136.229.251', '/brands', 1446195924, 1446195924, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2029, '178.136.229.251', '/', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2030, '178.136.229.251', '/sale', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2031, '178.136.229.251', '/', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2032, '178.136.229.251', '/brands', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2033, '178.136.229.251', '/', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2034, '178.136.229.251', '/sale', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2035, '178.136.229.251', '/brands', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2036, '178.136.229.251', '/', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2037, '178.136.229.251', '/sale', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2038, '178.136.229.251', '/cart', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2039, '178.136.229.251', '/cart', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2040, '178.136.229.251', '/brands', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2041, '178.136.229.251', '/cart', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2042, '178.136.229.251', '/sale', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2043, '178.136.229.251', '/cart', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2044, '178.136.229.251', '/', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2045, '178.136.229.251', '/cart', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2046, '178.136.229.251', '/sale', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2047, '178.136.229.251', '/cart', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2048, '178.136.229.251', '/', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2049, '178.136.229.251', '/cart', 1446195925, 1446195925, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2050, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2051, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2052, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2053, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2054, '178.136.229.251', '/sale', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2055, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2056, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2057, '178.136.229.251', '/cart', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2058, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2059, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2060, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2061, '178.136.229.251', '/sale', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2062, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2063, '178.136.229.251', '/cart', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2064, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2065, '178.136.229.251', '/cart', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2066, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2067, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2068, '178.136.229.251', '/cart', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2069, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2070, '178.136.229.251', '/cart', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2071, '178.136.229.251', '/sale', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2072, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2073, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2074, '178.136.229.251', '/sale', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2075, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2076, '178.136.229.251', '/cart', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2077, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2078, '178.136.229.251', '/cart', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2079, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2080, '178.136.229.251', '/sale', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2081, '178.136.229.251', '/brands', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2082, '178.136.229.251', '/', 1446195926, 1446195926, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2083, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2084, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2085, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2086, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2087, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2088, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2089, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2090, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2091, '178.136.229.251', '/cart', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2092, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2093, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2094, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2095, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2096, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2097, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2098, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2099, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2100, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2101, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2102, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2103, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2104, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2105, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2106, '178.136.229.251', '/', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2107, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2108, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2109, '178.136.229.251', '/brands', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2110, '178.136.229.251', '/sale', 1446195927, 1446195927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2111, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2112, '178.136.229.251', '/sale', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2113, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2114, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2115, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2116, '178.136.229.251', '/sale', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2117, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2118, '178.136.229.251', '/sale', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2119, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2120, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2121, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2122, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2123, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2124, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2125, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2126, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2127, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2128, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2129, '178.136.229.251', '/brands', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2130, '178.136.229.251', '/', 1446195928, 1446195928, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2131, '178.136.229.251', '/brands', 1446195929, 1446195929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2132, '178.136.229.251', '/', 1446195929, 1446195929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2133, '178.136.229.251', '/sale', 1446195929, 1446195929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2134, '178.136.229.251', '/', 1446195929, 1446195929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2135, '178.136.229.251', '/brands', 1446195929, 1446195929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2136, '178.136.229.251', '/', 1446195929, 1446195929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2137, '178.136.229.251', '/', 1446195929, 1446195933, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 39),
(2138, '178.136.229.251', '/articles', 1446195939, 1446195942, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 11),
(2139, '178.136.229.251', '/faq', 1446195942, 1446195942, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2140, '178.136.229.251', '/articles', 1446195943, 1446195943, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2141, '178.136.229.251', '/o_nas', 1446195943, 1446195943, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2142, '178.136.229.251', '/faq', 1446195943, 1446195943, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2143, '178.136.229.251', '/news', 1446195943, 1446195943, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2144, '178.136.229.251', '/faq', 1446195943, 1446195943, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2145, '178.136.229.251', '/o_nas', 1446195943, 1446195943, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2146, '178.136.229.251', '/faq', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2147, '178.136.229.251', '/o_nas', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2148, '178.136.229.251', '/articles', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2149, '178.136.229.251', '/faq', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2150, '178.136.229.251', '/news', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2151, '178.136.229.251', '/o_nas', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2152, '178.136.229.251', '/faq', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2153, '178.136.229.251', '/articles', 1446195944, 1446195944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2154, '178.136.229.251', '/faq', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2155, '178.136.229.251', '/articles', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2156, '178.136.229.251', '/o_nas', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2157, '178.136.229.251', '/news', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2158, '178.136.229.251', '/faq', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2159, '178.136.229.251', '/articles', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2160, '178.136.229.251', '/o_nas', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2161, '178.136.229.251', '/news', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2162, '178.136.229.251', '/articles', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2163, '178.136.229.251', '/news', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2164, '178.136.229.251', '/articles', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2165, '178.136.229.251', '/contact', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2166, '178.136.229.251', '/o_nas', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2167, '178.136.229.251', '/news', 1446195945, 1446195945, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2168, '178.136.229.251', '/o_nas', 1446195945, 1446195946, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2169, '178.136.229.251', '/articles', 1446195946, 1446195946, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2170, '178.136.229.251', '/news', 1446195946, 1446195946, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2171, '178.136.229.251', '/news', 1446195946, 1446195946, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2172, '178.136.229.251', '/catalog/kedy', 1446195946, 1446195946, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2173, '178.136.229.251', '/news', 1446195947, 1446195947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2174, '178.136.229.251', '/contact', 1446195947, 1446195947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2175, '178.136.229.251', '/news', 1446195947, 1446195947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2176, '178.136.229.251', '/contact', 1446195947, 1446195947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2177, '178.136.229.251', '/news', 1446195947, 1446195947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2178, '178.136.229.251', '/contact', 1446195947, 1446195947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2179, '178.136.229.251', '/faq', 1446195947, 1446195947, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2180, '178.136.229.251', '/news', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(2181, '178.136.229.251', '/catalog/kedy', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2182, '178.136.229.251', '/catalog/kedy', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2183, '178.136.229.251', '/faq', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2184, '178.136.229.251', '/articles', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2185, '178.136.229.251', '/catalog/kedy', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2186, '178.136.229.251', '/articles', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2187, '178.136.229.251', '/contact', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2188, '178.136.229.251', '/articles', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2189, '178.136.229.251', '/faq', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2190, '178.136.229.251', '/o_nas', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2191, '178.136.229.251', '/contact', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2192, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2193, '178.136.229.251', '/o_nas', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2194, '178.136.229.251', '/faq', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2195, '178.136.229.251', '/contact', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2196, '178.136.229.251', '/catalog/kedy', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2197, '178.136.229.251', '/articles', 1446195948, 1446195948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2198, '178.136.229.251', '/contact', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2199, '178.136.229.251', '/catalog/kedy', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2200, '178.136.229.251', '/faq', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2201, '178.136.229.251', '/catalog/kedy', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2202, '178.136.229.251', '/catalog/krossovki', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2203, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2204, '178.136.229.251', '/contact', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2205, '178.136.229.251', '/faq', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2206, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2207, '178.136.229.251', '/news', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2208, '178.136.229.251', '/o_nas', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2209, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2210, '178.136.229.251', '/faq', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2211, '178.136.229.251', '/catalog/kedy', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2212, '178.136.229.251', '/articles', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2213, '178.136.229.251', '/', 1446195949, 1446195949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2214, '178.136.229.251', '/catalog/kedy', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2215, '178.136.229.251', '/o_nas', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2216, '178.136.229.251', '/catalog/kedy', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2217, '178.136.229.251', '/catalog/krossovki', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2218, '178.136.229.251', '/articles', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2219, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2220, '178.136.229.251', '/o_nas', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2221, '178.136.229.251', '/articles', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2222, '178.136.229.251', '/catalog/kedy', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2223, '178.136.229.251', '/catalog/krossovki', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2224, '178.136.229.251', '/articles', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2225, '178.136.229.251', '/contact', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2226, '178.136.229.251', '/faq', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2227, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2228, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2229, '178.136.229.251', '/faq', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2230, '178.136.229.251', '/o_nas', 1446195950, 1446195950, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2231, '178.136.229.251', '/news', 1446195950, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2232, '178.136.229.251', '/', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2233, '178.136.229.251', '/catalog/krossovki', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2234, '178.136.229.251', '/articles', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2235, '178.136.229.251', '/o_nas', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2236, '178.136.229.251', '/catalog/krossovki', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2237, '178.136.229.251', '/news', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2238, '178.136.229.251', '/', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2239, '178.136.229.251', '/catalog/krossovki', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2240, '178.136.229.251', '/news', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2241, '178.136.229.251', '/o_nas', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2242, '178.136.229.251', '/o_nas', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2243, '178.136.229.251', '/catalog/kedy', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2244, '178.136.229.251', '/o_nas', 1446195951, 1446195951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2245, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195951, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2246, '178.136.229.251', '/', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2247, '178.136.229.251', '/news', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2248, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2249, '178.136.229.251', '/faq', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2250, '178.136.229.251', '/news', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2251, '178.136.229.251', '/', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2252, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2253, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2254, '178.136.229.251', '/news', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2255, '178.136.229.251', '/contact', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2256, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2257, '178.136.229.251', '/catalog/krossovki', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2258, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2259, '178.136.229.251', '/contact', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2260, '178.136.229.251', '/catalog/krossovki', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2261, '178.136.229.251', '/contact', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2262, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2263, '178.136.229.251', '/contact', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2264, '178.136.229.251', '/o_nas', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2265, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195952, 1446195952, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2266, '178.136.229.251', '/catalog/kedy', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2267, '178.136.229.251', '/catalog/krossovki', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2268, '178.136.229.251', '/faq', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2269, '178.136.229.251', '/contact', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2270, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2271, '178.136.229.251', '/articles', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2272, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2273, '178.136.229.251', '/articles', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2274, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2275, '178.136.229.251', '/faq', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2276, '178.136.229.251', '/catalog/krossovki', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2277, '178.136.229.251', '/', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2278, '178.136.229.251', '/faq', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2279, '178.136.229.251', '/articles', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2280, '178.136.229.251', '/contact', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2281, '178.136.229.251', '/catalog/kedy', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2282, '178.136.229.251', '/catalog/krossovki', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2283, '178.136.229.251', '/faq', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2284, '178.136.229.251', '/', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2285, '178.136.229.251', '/faq', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2286, '178.136.229.251', '/catalog/kedy', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2287, '178.136.229.251', '/catalog/krossovki', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2288, '178.136.229.251', '/contact', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2289, '178.136.229.251', '/news', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2290, '178.136.229.251', '/catalog/kedy', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2291, '178.136.229.251', '/articles', 1446195953, 1446195953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2292, '178.136.229.251', '/contact', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2293, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2294, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2295, '178.136.229.251', '/o_nas', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2296, '178.136.229.251', '/articles', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2297, '178.136.229.251', '/articles', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2298, '178.136.229.251', '/faq', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2299, '178.136.229.251', '/articles', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2300, '178.136.229.251', '/', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2301, '178.136.229.251', '/contact', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2302, '178.136.229.251', '/catalog/kedy', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2303, '178.136.229.251', '/o_nas', 1446195955, 1446195955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2304, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2305, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2306, '178.136.229.251', '/o_nas', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2307, '178.136.229.251', '/articles', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2308, '178.136.229.251', '/', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2309, '178.136.229.251', '/catalog/kedy', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2310, '178.136.229.251', '/articles', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2311, '178.136.229.251', '/faq', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2312, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2313, '178.136.229.251', '/faq', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2314, '178.136.229.251', '/o_nas', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2315, '178.136.229.251', '/o_nas', 1446195956, 1446195956, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2316, '178.136.229.251', '/', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2317, '178.136.229.251', '/news', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2318, '178.136.229.251', '/o_nas', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2319, '178.136.229.251', '/news', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2320, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2321, '178.136.229.251', '/', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2322, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2323, '178.136.229.251', '/news', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2324, '178.136.229.251', '/catalog/kedy', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2325, '178.136.229.251', '/o_nas', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2326, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2327, '178.136.229.251', '/catalog/kedy', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2328, '178.136.229.251', '/o_nas', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2329, '178.136.229.251', '/catalog/krossovki', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2330, '178.136.229.251', '/articles', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2331, '178.136.229.251', '/catalog/kedy', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2332, '178.136.229.251', '/catalog/krossovki', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2333, '178.136.229.251', '/articles', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2334, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195957, 1446195957, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2335, '178.136.229.251', '/o_nas', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2336, '178.136.229.251', '/articles', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2337, '178.136.229.251', '/contact', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2338, '178.136.229.251', '/articles', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2339, '178.136.229.251', '/news', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2340, '178.136.229.251', '/cart', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2341, '178.136.229.251', '/cart', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2342, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2343, '178.136.229.251', '/news', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2344, '178.136.229.251', '/cart', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2345, '178.136.229.251', '/catalog/krossovki', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2346, '178.136.229.251', '/cart', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2347, '178.136.229.251', '/news', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2348, '178.136.229.251', '/cart', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2349, '178.136.229.251', '/', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2350, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2351, '178.136.229.251', '/cart', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2352, '178.136.229.251', '/catalog/krossovki', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2353, '178.136.229.251', '/catalog/kedy', 1446195958, 1446195958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2354, '178.136.229.251', '/', 1446195958, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2355, '178.136.229.251', '/catalog/krossovki', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2356, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2357, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2358, '178.136.229.251', '/news', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2359, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2360, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2361, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2362, '178.136.229.251', '/contact', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2363, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2364, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2365, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2366, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2367, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2368, '178.136.229.251', '/contact', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2369, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2370, '178.136.229.251', '/contact', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2371, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2372, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2373, '178.136.229.251', '/sale', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2374, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2375, '178.136.229.251', '/sale', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2376, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2377, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2378, '178.136.229.251', '/sale', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2379, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2380, '178.136.229.251', '/sale', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2381, '178.136.229.251', '/articles', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2382, '178.136.229.251', '/', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2383, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2384, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2385, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2386, '178.136.229.251', '/contact', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2387, '178.136.229.251', '/faq', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2388, '178.136.229.251', '/catalog/krossovki', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2389, '178.136.229.251', '/contact', 1446195959, 1446195959, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2390, '178.136.229.251', '/catalog/krossovki', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2391, '178.136.229.251', '/contact', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2392, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2393, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2394, '178.136.229.251', '/catalog/krossovki', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2395, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2396, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2397, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2398, '178.136.229.251', '/sale', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2399, '178.136.229.251', '/faq', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2400, '178.136.229.251', '/sale', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2401, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2402, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2403, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2404, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2405, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2406, '178.136.229.251', '/sale', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2407, '178.136.229.251', '/brands', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2408, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2409, '178.136.229.251', '/brands', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2410, '178.136.229.251', '/contact', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2411, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2412, '178.136.229.251', '/brands', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2413, '178.136.229.251', '/catalog/krossovki', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2414, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2415, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2416, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2417, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2418, '178.136.229.251', '/brands', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2419, '178.136.229.251', '/', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2420, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2421, '178.136.229.251', '/', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2422, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2423, '178.136.229.251', '/cart', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2424, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2425, '178.136.229.251', '/articles', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2426, '178.136.229.251', '/cart', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2427, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2428, '178.136.229.251', '/', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2429, '178.136.229.251', '/catalog/kedy', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2430, '178.136.229.251', '/catalog/krossovki', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2431, '178.136.229.251', '/cart', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2432, '178.136.229.251', '/o_nas', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2433, '178.136.229.251', '/brands', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2434, '178.136.229.251', '/faq', 1446195960, 1446195960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2435, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2436, '178.136.229.251', '/cart', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2437, '178.136.229.251', '/cart', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2438, '178.136.229.251', '/catalog/krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2439, '178.136.229.251', '/', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2440, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2441, '178.136.229.251', '/brands', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2442, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2443, '178.136.229.251', '/catalog/kedy', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2444, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2445, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2446, '178.136.229.251', '/faq', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2447, '178.136.229.251', '/cart', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2448, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2449, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2450, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2451, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2452, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2453, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2454, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2455, '178.136.229.251', '/', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2456, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2457, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2458, '178.136.229.251', '/news', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2459, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2460, '178.136.229.251', '/o_nas', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2461, '178.136.229.251', '/', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2462, '178.136.229.251', '/', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2463, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2464, '178.136.229.251', '/faq', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2465, '178.136.229.251', '/', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2466, '178.136.229.251', '/cart', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2467, '178.136.229.251', '/', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2468, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2469, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195961, 1446195961, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2470, '178.136.229.251', '/o_nas', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2471, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2472, '178.136.229.251', '/sale', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2473, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2474, '178.136.229.251', '/catalog/krossovki', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2475, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2476, '178.136.229.251', '/cart', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2477, '178.136.229.251', '/', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2478, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2479, '178.136.229.251', '/', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2480, '178.136.229.251', '/', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(2481, '178.136.229.251', '/catalog/krossovki', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2482, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2483, '178.136.229.251', '/sale', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2484, '178.136.229.251', '/news', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2485, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2486, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2487, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2488, '178.136.229.251', '/catalog/krossovki', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2489, '178.136.229.251', '/sale', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2490, '178.136.229.251', '/catalog/krossovki', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2491, '178.136.229.251', '/catalog/krossovki', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2492, '178.136.229.251', '/sale', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2493, '178.136.229.251', '/contact', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2494, '178.136.229.251', '/', 1446195963, 1446195963, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2495, '178.136.229.251', '/o_nas', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2496, '178.136.229.251', '/catalog/krossovki', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2497, '178.136.229.251', '/cart', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2498, '178.136.229.251', '/catalog/krossovki', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2499, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2500, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2501, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2502, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2503, '178.136.229.251', '/cart', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2504, '178.136.229.251', '/sale', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2505, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2506, '178.136.229.251', '/contact', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2507, '178.136.229.251', '/contact', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2508, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2509, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2510, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2511, '178.136.229.251', '/contact', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2512, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2513, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2514, '178.136.229.251', '/sale', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2515, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2516, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2517, '178.136.229.251', '/sale', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2518, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2519, '178.136.229.251', '/brands', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2520, '178.136.229.251', '/catalog/krossovki', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2521, '178.136.229.251', '/', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2522, '178.136.229.251', '/contact', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2523, '178.136.229.251', '/catalog/kedy', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2524, '178.136.229.251', '/news', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2525, '178.136.229.251', '/cart', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2526, '178.136.229.251', '/catalog/kedy', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2527, '178.136.229.251', '/catalog/krossovki', 1446195964, 1446195964, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2528, '178.136.229.251', '/catalog/kedy', 1446195964, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2529, '178.136.229.251', '/cart', 1446195965, 1446195992, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2530, '178.136.229.251', '/', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2531, '178.136.229.251', '/brands', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2532, '178.136.229.251', '/', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2533, '178.136.229.251', '/catalog/krossovki', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2534, '178.136.229.251', '/news', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2535, '178.136.229.251', '/', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2536, '178.136.229.251', '/sale', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2537, '178.136.229.251', '/catalog/kedy', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2538, '178.136.229.251', '/brands', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2539, '178.136.229.251', '/cart', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2540, '178.136.229.251', '/', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2541, '178.136.229.251', '/catalog/kedy', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2542, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2543, '178.136.229.251', '/cart', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2544, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2545, '178.136.229.251', '/brands', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2546, '178.136.229.251', '/', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2547, '178.136.229.251', '/brands', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2548, '178.136.229.251', '/sale', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2549, '178.136.229.251', '/catalog/kedy', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2550, '178.136.229.251', '/', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2551, '178.136.229.251', '/brands', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2552, '178.136.229.251', '/catalog/kedy', 1446195965, 1446195965, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2553, '178.136.229.251', '/sale', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2554, '178.136.229.251', '/', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2555, '178.136.229.251', '/sale', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2556, '178.136.229.251', '/brands', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2557, '178.136.229.251', '/', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2558, '178.136.229.251', '/brands', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2559, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2560, '178.136.229.251', '/', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2561, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2562, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2563, '178.136.229.251', '/', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2564, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2565, '178.136.229.251', '/cart', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2566, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2567, '178.136.229.251', '/brands', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2568, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2569, '178.136.229.251', '/contact', 1446195966, 1446195966, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2570, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195966, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2571, '178.136.229.251', '/', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2572, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2573, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2574, '178.136.229.251', '/', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2575, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2576, '178.136.229.251', '/', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2577, '178.136.229.251', '/', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2578, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2579, '178.136.229.251', '/sale', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2580, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2581, '178.136.229.251', '/', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2582, '178.136.229.251', '/brands', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2583, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2584, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2585, '178.136.229.251', '/', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2586, '178.136.229.251', '/contact', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2587, '178.136.229.251', '/sale', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2588, '178.136.229.251', '/catalog/krossovki', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2589, '178.136.229.251', '/', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2590, '178.136.229.251', '/sale', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2591, '178.136.229.251', '/catalog/kedy', 1446195967, 1446195967, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2592, '178.136.229.251', '/catalog/krossovki', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2593, '178.136.229.251', '/', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2594, '178.136.229.251', '/catalog/krossovki', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2595, '178.136.229.251', '/catalog/krossovki', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2596, '178.136.229.251', '/', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2597, '178.136.229.251', '/catalog/krossovki', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2598, '178.136.229.251', '/', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2599, '178.136.229.251', '/catalog/krossovki', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2600, '178.136.229.251', '/', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2601, '178.136.229.251', '/brands', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2602, '178.136.229.251', '/catalog/krossovki', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2603, '178.136.229.251', '/', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2604, '178.136.229.251', '/catalog/kedy', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2605, '178.136.229.251', '/catalog/krossovki', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2606, '178.136.229.251', '/', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2607, '178.136.229.251', '/brands', 1446195968, 1446195968, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2608, '178.136.229.251', '/catalog/krossovki', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2609, '178.136.229.251', '/cart', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2610, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2611, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2612, '178.136.229.251', '/brands', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2613, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2614, '178.136.229.251', '/sale', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2615, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2616, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2617, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2618, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2619, '178.136.229.251', '/cart', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2620, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2621, '178.136.229.251', '/', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2622, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195969, 1446195969, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2623, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2624, '178.136.229.251', '/', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2625, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2626, '178.136.229.251', '/cart', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2627, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2628, '178.136.229.251', '/', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2629, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2630, '178.136.229.251', '/catalog/krossovki', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2631, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2632, '178.136.229.251', '/brands', 1446195970, 1446195970, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2633, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2634, '178.136.229.251', '/', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 5),
(2635, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2636, '178.136.229.251', '/cart', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2637, '178.136.229.251', '/cart', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2638, '178.136.229.251', '/cart', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2639, '178.136.229.251', '/catalog/krossovki', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2640, '178.136.229.251', '/cart', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2641, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2642, '178.136.229.251', '/cart', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2643, '178.136.229.251', '/', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2644, '178.136.229.251', '/cart', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2645, '178.136.229.251', '/sale', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2646, '178.136.229.251', '/', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2647, '178.136.229.251', '/sale', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2648, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195971, 1446195971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2649, '178.136.229.251', '/', 1446195971, 1446195972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2650, '178.136.229.251', '/sale', 1446195972, 1446195972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2651, '178.136.229.251', '/brands', 1446195972, 1446195972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2652, '178.136.229.251', '/brands', 1446195972, 1446195972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2653, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195972, 1446195972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2654, '178.136.229.251', '/', 1446195972, 1446195972, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2655, '178.136.229.251', '/sale', 1446195972, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2656, '178.136.229.251', '/brands', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2657, '178.136.229.251', '/sale', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2658, '178.136.229.251', '/', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2659, '178.136.229.251', '/sale', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2660, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2661, '178.136.229.251', '/sale', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2662, '178.136.229.251', '/sale', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2663, '178.136.229.251', '/brands', 1446195973, 1446195973, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2664, '178.136.229.251', '/cart', 1446195974, 1446195974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2665, '178.136.229.251', '/brands', 1446195974, 1446195974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 7),
(2666, '178.136.229.251', '/cart', 1446195974, 1446195974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2667, '178.136.229.251', '/brands', 1446195974, 1446195974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2668, '178.136.229.251', '/cart', 1446195974, 1446195974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2669, '178.136.229.251', '/', 1446195974, 1446195974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2670, '178.136.229.251', '/cart', 1446195975, 1446195975, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2671, '178.136.229.251', '/', 1446195975, 1446195975, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 6),
(2672, '178.136.229.251', '/cart', 1446195975, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2673, '178.136.229.251', '/', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2674, '178.136.229.251', '/cart', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2675, '178.136.229.251', '/', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2676, '178.136.229.251', '/sale', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2677, '178.136.229.251', '/', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2678, '178.136.229.251', '/sale', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2679, '178.136.229.251', '/', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2680, '178.136.229.251', '/sale', 1446195976, 1446195976, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2681, '178.136.229.251', '/', 1446195976, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2682, '178.136.229.251', '/cart', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2683, '178.136.229.251', '/brands', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2684, '178.136.229.251', '/', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2685, '178.136.229.251', '/brands', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2686, '178.136.229.251', '/sale', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2687, '178.136.229.251', '/', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2688, '178.136.229.251', '/brands', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2689, '178.136.229.251', '/', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2690, '178.136.229.251', '/sale', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2691, '178.136.229.251', '/', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2692, '178.136.229.251', '/brands', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2693, '178.136.229.251', '/', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2694, '178.136.229.251', '/sale', 1446195977, 1446195977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2695, '178.136.229.251', '/', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2696, '178.136.229.251', '/articles', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2697, '178.136.229.251', '/brands', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2698, '178.136.229.251', '/', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2699, '178.136.229.251', '/brands', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2700, '178.136.229.251', '/sale', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2701, '178.136.229.251', '/', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2702, '178.136.229.251', '/cart', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2703, '178.136.229.251', '/sale', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2704, '178.136.229.251', '/articles', 1446195978, 1446195978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2705, '178.136.229.251', '/sale', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2706, '178.136.229.251', '/', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2707, '178.136.229.251', '/brands', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2708, '178.136.229.251', '/sale', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2709, '178.136.229.251', '/brands', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2710, '178.136.229.251', '/brands', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2711, '178.136.229.251', '/', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2712, '178.136.229.251', '/', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2713, '178.136.229.251', '/articles', 1446195979, 1446195979, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2714, '178.136.229.251', '/', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2715, '178.136.229.251', '/articles', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2716, '178.136.229.251', '/faq', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2717, '178.136.229.251', '/', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2718, '178.136.229.251', '/articles', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2719, '178.136.229.251', '/', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2720, '178.136.229.251', '/faq', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2721, '178.136.229.251', '/faq', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2722, '178.136.229.251', '/', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2723, '178.136.229.251', '/cart', 1446195980, 1446195980, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2724, '178.136.229.251', '/brands', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2725, '178.136.229.251', '/', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2726, '178.136.229.251', '/sale', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2727, '178.136.229.251', '/', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2728, '178.136.229.251', '/o_nas', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2729, '178.136.229.251', '/faq', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2730, '178.136.229.251', '/', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2731, '178.136.229.251', '/o_nas', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2732, '178.136.229.251', '/', 1446195981, 1446195981, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2733, '178.136.229.251', '/brands', 1446195982, 1446195982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2734, '178.136.229.251', '/', 1446195982, 1446195982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2735, '178.136.229.251', '/sale', 1446195982, 1446195982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2736, '178.136.229.251', '/news', 1446195982, 1446195982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2737, '178.136.229.251', '/o_nas', 1446195982, 1446195982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2738, '178.136.229.251', '/', 1446195982, 1446195982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2739, '178.136.229.251', '/news', 1446195982, 1446195982, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2740, '178.136.229.251', '/faq', 1446195982, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2741, '178.136.229.251', '/news', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2742, '178.136.229.251', '/', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2743, '178.136.229.251', '/brands', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2744, '178.136.229.251', '/faq', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2745, '178.136.229.251', '/sale', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2746, '178.136.229.251', '/o_nas', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2747, '178.136.229.251', '/contact', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2748, '178.136.229.251', '/o_nas', 1446195983, 1446195983, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2749, '178.136.229.251', '/articles', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2750, '178.136.229.251', '/', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2751, '178.136.229.251', '/contact', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2752, '178.136.229.251', '/brands', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2753, '178.136.229.251', '/catalog/kedy', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2754, '178.136.229.251', '/news', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2755, '178.136.229.251', '/o_nas', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2756, '178.136.229.251', '/contact', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2757, '178.136.229.251', '/articles', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2758, '178.136.229.251', '/', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2759, '178.136.229.251', '/catalog/kedy', 1446195984, 1446195984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2760, '178.136.229.251', '/', 1446195984, 1446195985, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2761, '178.136.229.251', '/contact', 1446195985, 1446195985, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2762, '178.136.229.251', '/catalog/kedy', 1446195985, 1446195985, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2763, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195985, 1446195985, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2764, '178.136.229.251', '/news', 1446195985, 1446195985, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2765, '178.136.229.251', '/', 1446195985, 1446195985, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2766, '178.136.229.251', '/contact', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2767, '178.136.229.251', '/', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2768, '178.136.229.251', '/catalog/kedy', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2769, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2770, '178.136.229.251', '/faq', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2771, '178.136.229.251', '/catalog/krossovki', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2772, '178.136.229.251', '/', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2773, '178.136.229.251', '/catalog/kedy', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2774, '178.136.229.251', '/contact', 1446195986, 1446195986, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2775, '178.136.229.251', '/faq', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2776, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2777, '178.136.229.251', '/articles', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2778, '178.136.229.251', '/o_nas', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2779, '178.136.229.251', '/', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2780, '178.136.229.251', '/catalog/kedy', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2781, '178.136.229.251', '/catalog/kedy', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2782, '178.136.229.251', '/catalog/kedy', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2783, '178.136.229.251', '/', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2784, '178.136.229.251', '/catalog/krossovki', 1446195987, 1446195987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2785, '178.136.229.251', '/articles', 1446195988, 1446195988, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(2786, '178.136.229.251', '/news', 1446195988, 1446195988, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2787, '178.136.229.251', '/', 1446195988, 1446195988, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2788, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195990, 1446195990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2789, '178.136.229.251', '/catalog/krossovki', 1446195990, 1446195990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2790, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446195990, 1446195990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2791, '178.136.229.251', '/articles', 1446195990, 1446195990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2792, '178.136.229.251', '/catalog/kedy', 1446195990, 1446195990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2793, '178.136.229.251', '/o_nas', 1446195990, 1446195990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2794, '178.136.229.251', '/articles', 1446195990, 1446195990, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2795, '178.136.229.251', '/catalog/povsednevnye_krossovki', 1446195991, 1446195991, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2796, '178.136.229.251', '/articles', 1446195997, 1446195997, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2797, '178.136.229.251', '/', 1446196006, 1446196006, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2798, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446196006, 1446196006, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2799, '178.136.229.251', '/catalog/krossovki', 1446196006, 1446196006, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2800, '178.136.229.251', '/news', 1446196016, 1446196016, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2801, '178.136.229.251', '/catalog/krossovki', 1446196016, 1446196017, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2802, '178.136.229.251', '/faq', 1446196017, 1446196017, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2803, '178.136.229.251', '/catalog/krossovki', 1446196017, 1446196017, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2804, '178.136.229.251', '/', 1446196041, 1446196041, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2805, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446196044, 1446196044, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2806, '178.136.229.251', '/cart', 1446196048, 1446196048, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2807, '178.136.229.251', '/faq', 1446196122, 1446196122, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2808, '178.136.229.251', '/new', 1446196125, 1446196125, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2809, '178.136.229.251', '/', 1446196128, 1446198576, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(2810, '178.136.229.251', '/', 1446196606, 1446196606, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2811, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446196608, 1446196608, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2812, '178.136.229.251', '/cart', 1446196612, 1446196612, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2813, '178.136.229.251', '/', 1446196662, 1446196662, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2814, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446196664, 1446196664, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2815, '178.136.229.251', '/cart', 1446196670, 1446196670, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2816, '178.136.229.251', '/', 1446196751, 1446196751, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2817, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446196753, 1446196753, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2818, '178.136.229.251', '/cart', 1446196757, 1446196769, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2819, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446196780, 1446196780, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2820, '178.136.229.251', '/cart', 1446196843, 1446196881, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2821, '178.136.229.251', '/', 1446197189, 1446197189, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2822, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446197191, 1446197191, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2823, '178.136.229.251', '/cart', 1446197196, 1446197311, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 5),
(2824, '178.136.229.251', '/', 1446197707, 1446197707, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2825, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446197712, 1446197712, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2826, '178.136.229.251', '/cart', 1446197716, 1446197728, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2827, '178.136.229.251', '/', 1446198026, 1446198026, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2828, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446198028, 1446198028, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2829, '178.136.229.251', '/', 1446198067, 1446198067, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2830, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6927', 1446198076, 1446198076, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2831, '178.136.229.251', '/', 1446198147, 1446198147, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2832, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446198151, 1446198155, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2833, '178.136.229.251', '/cart', 1446198159, 1446198502, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2834, '178.136.229.251', '/', 1446198541, 1446203212, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2835, '178.136.229.251', '/product/nike_air_max_90_hyperfuse6869', 1446198733, 1446198733, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2836, '178.136.229.251', '/', 1446199086, 1446199086, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2837, '178.136.229.251', '/catalog', 1446203230, 1446203230, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2838, '178.136.229.251', '/catalog/kedy', 1446203234, 1446203234, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2839, '193.239.254.154', '/', 1446205418, 1446209868, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(2840, '178.136.229.251', '/', 1446209549, 1446216427, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(2841, '178.136.229.251', '/news', 1446216431, 1446216431, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2842, '178.136.229.251', '/news/novye_krossovki_nike_air_force_1_low_purple_venom', 1446216435, 1446217653, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 7),
(2843, '178.136.229.251', '/', 1446466026, 1446466026, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2844, '178.136.229.251', '/catalog/kedy', 1446466038, 1446466038, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2845, '178.136.229.251', '/catalog/kedy?per_page=15&sort=cost&type=asc', 1446466060, 1446466060, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2846, '178.136.229.251', '/catalog/kedy?per_page=15&sort=created_at&type=desc', 1446466071, 1446466071, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2847, '178.136.229.251', '/catalog/kedy?per_page=15&sort=cost&type=asc', 1446466079, 1446466079, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2848, '178.136.229.251', '/', 1446467186, 1446475971, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 4),
(2849, '212.92.249.206', '/', 1446468906, 1446468906, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2850, '178.136.229.251', '/product/nike_air_max_90_hyperfuse', 1446475978, 1446475978, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2851, '178.136.229.251', '/dostavka', 1446476029, 1446476029, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2852, '178.136.229.251', '/', 1446476031, 1446482463, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 2),
(2853, '176.8.202.47', '/', 1446480282, 1446480282, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2854, '176.8.202.47', '/product/nike_air_max_90_hyperfuse9495', 1446480302, 1446480302, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2855, '176.8.202.47', '/product/nike_air_max_90_hyperfuse6927', 1446480446, 1446480446, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2856, '176.8.202.47', '/brands', 1446480490, 1446480490, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2857, '176.8.202.47', '/sale', 1446480492, 1446480492, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2858, '176.8.202.47', '/product/nike_air_max_90_hyperfuse6873', 1446480496, 1446480496, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2859, '176.8.202.47', '/popular', 1446480691, 1446480691, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2860, '176.8.202.47', '/product/nike_air_max_90_hyperfuse6869', 1446480701, 1446480701, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2861, '176.8.202.47', '/', 1446488028, 1446488028, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2862, '176.8.202.47', '/catalog/futbolki', 1446488071, 1446488071, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2863, '176.8.202.47', '/new', 1446488075, 1446488075, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36', 1),
(2864, '127.0.0.1', '/', 1446489944, 1446489944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2865, '127.0.0.1', '/catalog', 1446489949, 1446489949, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2866, '127.0.0.1', '/catalog/for_men', 1446489953, 1446489953, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2867, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha&brand=nike&sezon=spring', 1446494681, 1446494714, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2868, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha&brand=nike', 1446494719, 1446495835, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 9),
(2869, '127.0.0.1', '/product', 1446495862, 1446495862, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2870, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha&brand=nike', 1446495864, 1446495864, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2871, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha&brand=nike?per_page=30', 1446495875, 1446495875, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2872, '127.0.0.1', '/', 1446662226, 1446662810, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2873, '127.0.0.1', '/faq', 1446662816, 1446662816, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2874, '127.0.0.1', '/catalog', 1446662824, 1446662824, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2875, '127.0.0.1', '/catalog/kedy', 1446662827, 1446662827, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2876, '127.0.0.1', '/product', 1446662830, 1446662830, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2877, '127.0.0.1', '/catalog/kedy', 1446662832, 1446664037, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 13),
(2878, '127.0.0.1', '/catalog/kedy/page/2', 1446664039, 1446664039, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2879, '127.0.0.1', '/catalog/kedy', 1446664042, 1446664096, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2880, '127.0.0.1', '/catalog/kedy/filter/min_cost=0&max_cost=1454', 1446664188, 1446664188, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2881, '127.0.0.1', '/catalog/kedy/filter/min_cost=504&max_cost=1454', 1446664196, 1446664196, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2882, '127.0.0.1', '/catalog/kedy', 1446664205, 1446665570, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 29),
(2883, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayazamsha', 1446665574, 1446665574, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2884, '127.0.0.1', '/catalog/kedy', 1446665578, 1446665578, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2885, '127.0.0.1', '/catalog/kedy/filter/country=china', 1446665588, 1446665588, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2886, '127.0.0.1', '/catalog/kedy', 1446665592, 1446665592, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2887, '127.0.0.1', '/catalog/kedy/filter/material=nylon', 1446665594, 1446665594, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2888, '127.0.0.1', '/catalog/kedy', 1446665596, 1446665596, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2889, '127.0.0.1', '/catalog/kedy/filter/material=poliestr', 1446665597, 1446665597, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2890, '127.0.0.1', '/catalog/kedy/filter/country=ukraine&material=poliestr', 1446665600, 1446665600, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2891, '127.0.0.1', '/catalog/kedy/filter/material=poliestr', 1446665602, 1446665602, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2892, '127.0.0.1', '/catalog/kedy', 1446665603, 1446665603, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2893, '127.0.0.1', '/catalog/kedy/filter/country=ukraine', 1446665605, 1446665605, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2894, '127.0.0.1', '/catalog/kedy', 1446665612, 1446665612, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2895, '127.0.0.1', '/catalog/kedy/filter/sezon=autumn', 1446665615, 1446665615, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2896, '127.0.0.1', '/catalog/kedy/filter/color=turquoise&sezon=autumn', 1446665619, 1446665619, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2897, '127.0.0.1', '/catalog/kedy/filter/color=turquoise&material=iskustvennayazamsha&sezon=autumn', 1446665624, 1446665624, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2898, '127.0.0.1', '/catalog/kedy', 1446665627, 1446665627, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2899, '127.0.0.1', '/catalog/kedy/filter/min_cost=447&max_cost=1760', 1446665638, 1446665638, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2900, '127.0.0.1', '/catalog/kedy', 1446665644, 1446665644, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2901, '127.0.0.1', '/catalog/kedy/filter/min_cost=604&max_cost=2500', 1446665647, 1446665647, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2902, '127.0.0.1', '/catalog/kedy', 1446665663, 1446665663, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2903, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2500', 1446665666, 1446665711, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2904, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422', 1446665716, 1446665716, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2905, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=iskustvennayazamsha', 1446665719, 1446665720, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2906, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=iskustvennayazamsha,nylon', 1446665723, 1446665773, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2907, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=nylon', 1446665777, 1446665777, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2908, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=nylon,skin', 1446665781, 1446665781, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2909, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=nylon', 1446665788, 1446665788, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2910, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=nylon,skin', 1446665789, 1446665994, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2911, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=nylon,poliestr,skin', 1446665996, 1446666060, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 6),
(2912, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=nylon,skin', 1446666066, 1446666066, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2913, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422&material=skin', 1446666068, 1446666068, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2914, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2422', 1446666070, 1446666070, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2915, '127.0.0.1', '/catalog/kedy', 1446666075, 1446666075, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2916, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayazamsha', 1446666077, 1446666077, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2917, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayazamsha,poliestr', 1446666079, 1446666079, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2918, '127.0.0.1', '/catalog/kedy/filter/material=poliestr', 1446666081, 1446666082, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2919, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayazamsha,poliestr', 1446666083, 1446666083, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2920, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,iskustvennayazamsha,poliestr', 1446666084, 1446666085, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2921, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,iskustvennayazamsha,poliestr,skin', 1446666086, 1446666086, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2922, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,iskustvennayazamsha,nylon,poliestr,skin', 1446666088, 1446666105, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 4),
(2923, '127.0.0.1', '/catalog/kedy/filter/country=china&material=iskustvennayakozha,iskustvennayazamsha,nylon,poliestr,skin', 1446666107, 1446666108, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2924, '127.0.0.1', '/catalog/kedy/filter/country=china,ukraine&material=iskustvennayakozha,iskustvennayazamsha,nylon,poliestr,skin', 1446666110, 1446666110, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2925, '127.0.0.1', '/catalog/kedy/filter/country=ukraine&material=iskustvennayakozha,iskustvennayazamsha,nylon,poliestr,skin', 1446666112, 1446666112, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2926, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,iskustvennayazamsha,nylon,poliestr,skin', 1446666117, 1446666117, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2927, '127.0.0.1', '/catalog/kedy/filter/color=turquoise&material=iskustvennayakozha,iskustvennayazamsha,nylon,poliestr,skin', 1446666119, 1446668903, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2928, '127.0.0.1', '/catalog/kedy', 1446668908, 1446668908, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2929, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayazamsha', 1446668910, 1446668911, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2930, '127.0.0.1', '/catalog/kedy', 1446668913, 1446668913, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2931, '127.0.0.1', '/catalog/kedy/filter/material=poliestr', 1446668914, 1446668915, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2932, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,poliestr', 1446668917, 1446668917, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2933, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2097&material=iskustvennayakozha,poliestr', 1446668922, 1446668922, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2934, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2097&material=iskustvennayakozha', 1446668926, 1446668927, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2935, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2097&material=iskustvennayakozha,poliestr', 1446668929, 1446668929, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2936, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2097&material=poliestr', 1446668930, 1446668930, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2937, '127.0.0.1', '/catalog/kedy/filter/min_cost=255&max_cost=2097', 1446668932, 1446668932, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2938, '127.0.0.1', '/catalog/kedy', 1446668941, 1446668941, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2939, '127.0.0.1', '/catalog/kedy/filter/min_cost=480&max_cost=2500', 1446668944, 1446668944, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2940, '127.0.0.1', '/catalog/kedy/filter/min_cost=480&max_cost=2500&material=skin', 1446668949, 1446668974, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2941, '127.0.0.1', '/catalog/kedy/filter/min_cost=480&max_cost=2500', 1446668977, 1446668977, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2942, '127.0.0.1', '/catalog/kedy', 1446668984, 1446668984, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2943, '127.0.0.1', '/catalog/kedy/filter/material=nylon', 1446668987, 1446668987, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2944, '127.0.0.1', '/catalog/kedy', 1446668991, 1446668991, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2945, '127.0.0.1', '/catalog/kedy/filter/material=poliestr', 1446668992, 1446668992, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2946, '127.0.0.1', '/catalog/kedy', 1446668995, 1446668995, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2947, '127.0.0.1', '/catalog/kedy?per_page=40', 1446669102, 1446669275, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2948, '127.0.0.1', '/catalog/kedy/filter/available=2?per_page=40', 1446669276, 1446669277, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2949, '127.0.0.1', '/catalog/kedy?per_page=40', 1446669278, 1446669278, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2950, '127.0.0.1', '/catalog/kedy/filter/available=1?per_page=40', 1446669280, 1446669280, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2951, '127.0.0.1', '/catalog/kedy?per_page=40', 1446669281, 1446669281, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2952, '127.0.0.1', '/catalog/kedy/filter/brand=nike?per_page=40', 1446669282, 1446669283, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2953, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model?per_page=40', 1446669285, 1446669286, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2954, '127.0.0.1', '/catalog/kedy/filter/model=test-model?per_page=40', 1446669288, 1446669288, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2955, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model?per_page=40', 1446669290, 1446669290, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2956, '127.0.0.1', '/catalog/kedy/filter/brand=nike?per_page=40', 1446669292, 1446669292, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2957, '127.0.0.1', '/catalog/kedy?per_page=40', 1446669294, 1446669294, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2958, '127.0.0.1', '/catalog/kedy/filter/available=1?per_page=40', 1446669330, 1446669330, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2959, '127.0.0.1', '/catalog/kedy?per_page=40', 1446669331, 1446669332, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2960, '127.0.0.1', '/catalog/kedy/filter/available=2?per_page=40', 1446669333, 1446669333, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2961, '127.0.0.1', '/catalog/kedy?per_page=40', 1446669334, 1446669412, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2962, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha?per_page=40', 1446669414, 1446669414, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2963, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,skin?per_page=40', 1446669434, 1446669434, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2964, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,skin&sezon=winter?per_page=40', 1446669437, 1446669437, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2965, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,skin&sezon=summer,winter?per_page=40', 1446669439, 1446669439, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2966, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,skin&sezon=winter?per_page=40', 1446669446, 1446669446, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2967, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,skin&sezon=spring,winter?per_page=40', 1446669447, 1446669447, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2968, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayakozha,skin&sezon=spring,winter,summer&bbb=nnn,lll&c=p?per_page=40', 1446671942, 1446671942, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2969, '127.0.0.1', '/catalog/kedy', 1446671948, 1446671948, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2970, '127.0.0.1', '/catalog/kedy/filter/sezon=spring', 1446671951, 1446671951, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2971, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,winter', 1446671954, 1446671955, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2972, '127.0.0.1', '/catalog/kedy/filter/country=china&sezon=spring,winter', 1446671957, 1446671958, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2973, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,winter', 1446671960, 1446671960, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2974, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha&sezon=winter&country=ukraine,china', 1446674169, 1446674169, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2975, '127.0.0.1', '/catalog/kedy/filter/available=1&country=china,ukraine&material=Zamsha&sezon=winter', 1446674173, 1446674173, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2976, '127.0.0.1', '/catalog/kedy/filter/country=china,ukraine&material=Zamsha&sezon=winter', 1446674175, 1446674175, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2977, '127.0.0.1', '/catalog/kedy/filter/brand=nike&country=china,ukraine&material=Zamsha&sezon=winter', 1446674177, 1446674177, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2978, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model&country=china,ukraine&material=Zamsha&sezon=winter', 1446674179, 1446674179, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2979, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model&available=1&country=china,ukraine&material=Zamsha&sezon=winter', 1446674181, 1446674181, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2980, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model&available=1&country=china,ukraine&material=Zamsha&sezon=spring,winter', 1446674184, 1446674184, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2981, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model&available=1&country=china,ukraine&material=Zamsha&sezon=winter', 1446674195, 1446674195, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2982, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model&available=1&country=china,ukraine&material=Zamsha,iskustvennayazamsha&sezon=winter', 1446674212, 1446674212, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2983, '127.0.0.1', '/', 1446699020, 1446699020, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2984, '127.0.0.1', '/catalog/kedy', 1446699025, 1446699138, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2985, '127.0.0.1', '/catalog/kedy/filter/sezon=spring', 1446699145, 1446699145, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2986, '127.0.0.1', '/catalog/kedy', 1446699148, 1446699148, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(2987, '127.0.0.1', '/catalog/kedy/filter/sezon=spring', 1446699150, 1446699151, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2988, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,winter', 1446699153, 1446699153, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2989, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,summer,winter', 1446699156, 1446699156, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2990, '127.0.0.1', '/catalog/kedy/filter/sezon=summer,winter', 1446699160, 1446699160, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2991, '127.0.0.1', '/catalog/kedy/filter/sezon=summer', 1446699162, 1446699163, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2992, '127.0.0.1', '/catalog/kedy/filter/sezon=summer,winter', 1446699165, 1446699165, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2993, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha&sezon=summer,winter', 1446699168, 1446699168, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2994, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha,iskustvennayazamsha&sezon=summer,winter', 1446699171, 1446699343, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(2995, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha&sezon=summer,winter', 1446699346, 1446699346, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2996, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha&sezon=spring,summer,winter', 1446699350, 1446699350, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2997, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha&sezon=spring,winter', 1446699363, 1446699364, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2998, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,winter', 1446699368, 1446699368, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(2999, '127.0.0.1', '/catalog/kedy/filter/material=iskustvennayazamsha&sezon=spring,winter', 1446699370, 1446699370, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3000, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,winter', 1446699373, 1446699373, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3001, '127.0.0.1', '/catalog/kedy/filter/country=ukraine&sezon=spring,winter', 1446699375, 1446699376, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3002, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,winter', 1446699377, 1446699377, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3003, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha&sezon=spring,winter', 1446699400, 1446699401, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3004, '127.0.0.1', '/catalog/kedy/filter/sezon=spring,winter', 1446699417, 1446699417, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3005, '127.0.0.1', '/catalog/kedy/filter/sezon=winter', 1446699421, 1446699422, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3006, '127.0.0.1', '/catalog/kedy', 1446699424, 1446699424, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3007, '127.0.0.1', '/catalog/kedy/filter/color=green', 1446699426, 1446699477, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(3008, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green', 1446699572, 1446699572, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3009, '127.0.0.1', '/catalog/kedy/filter/brand=nike&model=test-model&color=green', 1446699574, 1446699574, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3010, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green', 1446699575, 1446699575, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3011, '127.0.0.1', '/catalog/kedy/filter/color=green', 1446699576, 1446699577, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3012, '127.0.0.1', '/', 1446699992, 1446699992, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3013, '127.0.0.1', '/catalog/kedy', 1446700131, 1446700131, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3014, '127.0.0.1', '/catalog/kedy/filter/color=green', 1446700135, 1446700135, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3015, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise', 1446700138, 1446700138, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3016, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=ukraine', 1446700140, 1446700140, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3017, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=ukraine&material=skin', 1446700144, 1446700144, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3018, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=ukraine', 1446700148, 1446700148, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3019, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=china,ukraine', 1446700150, 1446700150, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3020, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=china,ukraine&material=skin', 1446700152, 1446700153, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3021, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=ukraine&material=skin', 1446700160, 1446700160, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3022, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=ukraine&material=skin&sezon=spring', 1446700163, 1446700163, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3023, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=ukraine&sezon=spring', 1446700166, 1446700166, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3024, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&sezon=spring', 1446700168, 1446700168, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3025, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=china&sezon=spring', 1446700170, 1446700171, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3026, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&country=china&material=iskustvennayazamsha&sezon=spring', 1446700174, 1446700507, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(3027, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&material=iskustvennayazamsha&sezon=spring', 1446700543, 1446700543, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3028, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&sezon=spring', 1446700545, 1446700545, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3029, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&material=iskustvennayazamsha&sezon=spring', 1446700555, 1446700555, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3030, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&material=iskustvennayazamsha&sezon=spring/page/2', 1446700557, 1446700557, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3031, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&material=iskustvennayazamsha&sezon=spring', 1446700560, 1446700623, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(3032, '127.0.0.1', '/', 1446748039, 1446748039, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3033, '127.0.0.1', '/catalog/kedy', 1446748387, 1446748387, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3034, '127.0.0.1', '/catalog/kedy?per_page=40', 1446748398, 1446748398, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3035, '127.0.0.1', '/catalog/kedy/filter/brand=nike?per_page=40', 1446748409, 1446748409, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3036, '127.0.0.1', '/catalog/kedy?per_page=40', 1446748411, 1446748411, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3037, '127.0.0.1', '/catalog/kedy/filter/material=Zamsha?per_page=40', 1446748422, 1446748422, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3038, '127.0.0.1', '/catalog/kedy?per_page=40', 1446748428, 1446748522, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 5),
(3039, '127.0.0.1', '/catalog/kedy/filter/country=ukraine?per_page=40', 1446748525, 1446748525, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3040, '127.0.0.1', '/catalog/kedy/filter/country=ukraine&sezon=winter?per_page=40', 1446748529, 1446748529, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3041, '127.0.0.1', '/catalog/kedy/filter/sezon=winter?per_page=40', 1446748532, 1446748533, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3042, '127.0.0.1', '/catalog/kedy/filter/color=green&sezon=winter?per_page=40', 1446748535, 1446748535, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3043, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&sezon=winter?per_page=40', 1446748537, 1446748537, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3044, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&sezon=summer,winter?per_page=40', 1446748545, 1446748546, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3045, '127.0.0.1', '/catalog/kedy/filter/color=turquoise&sezon=summer,winter?per_page=40', 1446748548, 1446748548, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3046, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&sezon=summer,winter?per_page=40', 1446748552, 1446748552, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3047, '127.0.0.1', '/catalog/kedy/filter/color=green&sezon=summer,winter?per_page=40', 1446748554, 1446748555, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3048, '127.0.0.1', '/catalog/kedy/filter/color=green&sezon=winter?per_page=40', 1446748557, 1446748557, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3049, '127.0.0.1', '/catalog/kedy/filter/color=green,turquoise&sezon=winter?per_page=40', 1446748729, 1446748730, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3050, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter?per_page=40', 1446748732, 1446748732, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2);
INSERT INTO `visitors_hits` (`id`, `ip`, `url`, `created_at`, `updated_at`, `status`, `device`, `useragent`, `counter`) VALUES
(3051, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter', 1446748737, 1446748737, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3052, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter/page/2', 1446748740, 1446748740, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3053, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter', 1446748742, 1446748742, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3054, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter/page/2', 1446748744, 1446748744, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3055, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter?per_page=20&sort=cost&type=asc', 1446748749, 1446748749, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3056, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter?per_page=20&sort=cost&type=desc', 1446748755, 1446748755, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3057, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter?per_page=20&sort=created_at&type=desc', 1446748758, 1446748758, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3058, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter?per_page=20&sort=name&type=desc', 1446748761, 1446748761, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3059, '127.0.0.1', '/catalog/kedy/filter/brand=nike&color=green,turquoise&sezon=winter?per_page=20&sort=name&type=asc', 1446748764, 1446748764, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3060, '127.0.0.1', '/', 1446751811, 1446751811, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3061, '127.0.0.1', '/catalog/kedy', 1446751815, 1446751849, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 6),
(3062, '127.0.0.1', '/product/gfgf', 1446752007, 1446752007, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3063, '127.0.0.1', '/brands/gfgf', 1446752021, 1446752021, '404 Not Found', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3064, '127.0.0.1', '/product/gfgf', 1446752023, 1446752114, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 3),
(3065, '127.0.0.1', '/brands', 1446752147, 1446752147, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3066, '127.0.0.1', '/brands/nike', 1446752219, 1446752219, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3067, '127.0.0.1', '/product/gfgf', 1446752227, 1446752227, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3068, '127.0.0.1', '/new', 1446752228, 1446752228, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3069, '127.0.0.1', '/popular', 1446752230, 1446752230, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3070, '127.0.0.1', '/sale', 1446752233, 1446752233, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3071, '127.0.0.1', '/brands', 1446752235, 1446752235, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3072, '127.0.0.1', '/', 1446752240, 1446752240, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3073, '127.0.0.1', '/product/nike_air_max_90_hyperfuse2018', 1446752243, 1446752627, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3074, '127.0.0.1', '/catalog/krossovki_dlja_bega', 1446752631, 1446752631, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1),
(3075, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/brand=nike', 1446752634, 1446752634, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3076, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/brand=nike&material=Zamsha', 1446752638, 1446752638, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3077, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/brand=nike&country=ukraine&material=Zamsha', 1446752641, 1446752642, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3078, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/brand=nike&country=ukraine&material=Zamsha&sezon=autumn', 1446752645, 1446752645, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3079, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/brand=nike&country=ukraine&material=Zamsha', 1446752648, 1446752648, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3080, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/brand=nike&color=green&country=ukraine&material=Zamsha', 1446752651, 1446752651, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3081, '127.0.0.1', '/catalog/krossovki_dlja_bega/filter/brand=nike&country=ukraine&material=Zamsha', 1446752656, 1446752656, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 2),
(3082, '127.0.0.1', '/product/gfgf', 1446752659, 1446752659, '200 OK', 'Computer', 'Mozilla/5.0 (Windows NT 10.0; rv:41.0) Gecko/20100101 Firefox/41.0', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `visitors_referers`
--

CREATE TABLE IF NOT EXISTS `visitors_referers` (
  `id` int(10) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `visitors_referers`
--

INSERT INTO `visitors_referers` (`id`, `ip`, `url`, `created_at`) VALUES
(3, '62.76.103.139', 'http://ya.ru/', 1439317767),
(4, '62.76.103.137', 'http://ya.ru/', 1439323710),
(5, '93.79.245.43', 'http://vk.com/away.php', 1444231244);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`) USING BTREE;

--
-- Индексы таблицы `blacklist`
--
ALTER TABLE `blacklist`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`) USING BTREE;

--
-- Индексы таблицы `brands_i18n`
--
ALTER TABLE `brands_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `br_row_id` (`row_id`),
  ADD KEY `br_lang` (`language`);

--
-- Индексы таблицы `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hash` (`hash`) USING BTREE;

--
-- Индексы таблицы `carts_items`
--
ALTER TABLE `carts_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cart` (`cart_id`) USING BTREE,
  ADD KEY `id_goods` (`catalog_id`) USING BTREE,
  ADD KEY `cart_id` (`cart_id`) USING BTREE,
  ADD KEY `catalog_id` (`catalog_id`) USING BTREE,
  ADD KEY `cart_color_alias` (`color_alias`),
  ADD KEY `cart_size_alias` (`size_alias`);

--
-- Индексы таблицы `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`) USING BTREE,
  ADD KEY `parent_id` (`parent_id`) USING BTREE,
  ADD KEY `cat_brand_alias` (`brand_alias`) USING BTREE,
  ADD KEY `image_link` (`image`) USING BTREE;

--
-- Индексы таблицы `catalog_colors`
--
ALTER TABLE `catalog_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_color` (`color_alias`),
  ADD KEY `c_catalog` (`catalog_id`);

--
-- Индексы таблицы `catalog_i18n`
--
ALTER TABLE `catalog_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_row_id` (`row_id`),
  ADD KEY `c_lang` (`language`);

--
-- Индексы таблицы `catalog_images`
--
ALTER TABLE `catalog_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catalog_id` (`catalog_id`) USING BTREE,
  ADD KEY `image` (`image`) USING BTREE;

--
-- Индексы таблицы `catalog_related`
--
ALTER TABLE `catalog_related`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catalog_id` (`who_id`) USING BTREE,
  ADD KEY `related_id` (`with_id`) USING BTREE;

--
-- Индексы таблицы `catalog_returns`
--
ALTER TABLE `catalog_returns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `os_catalog_id` (`catalog_id`),
  ADD KEY `os_color_alias` (`color_alias`),
  ADD KEY `os_size_alias` (`size_alias`),
  ADD KEY `os_user_id` (`user_id`);

--
-- Индексы таблицы `catalog_sizes`
--
ALTER TABLE `catalog_sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_color` (`size_alias`),
  ADD KEY `c_catalog` (`catalog_id`);

--
-- Индексы таблицы `catalog_tree`
--
ALTER TABLE `catalog_tree`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`) USING BTREE;

--
-- Индексы таблицы `catalog_tree_i18n`
--
ALTER TABLE `catalog_tree_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_row_id` (`row_id`),
  ADD KEY `cat_lang` (`language`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `category_i18n`
--
ALTER TABLE `category_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_row_id` (`row_id`),
  ADD KEY `news_lang` (`language`);

--
-- Индексы таблицы `certificates`
--
ALTER TABLE `certificates`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `certificates_i18n`
--
ALTER TABLE `certificates_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cert_row_id` (`row_id`),
  ADD KEY `cert_lang` (`language`);

--
-- Индексы таблицы `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`) USING BTREE;

--
-- Индексы таблицы `colors_i18n`
--
ALTER TABLE `colors_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `col_row_id` (`row_id`),
  ADD KEY `col_lang` (`language`);

--
-- Индексы таблицы `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`),
  ADD KEY `block` (`group`) USING BTREE,
  ADD KEY `type` (`type`) USING BTREE;

--
-- Индексы таблицы `config_groups`
--
ALTER TABLE `config_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`) USING BTREE;

--
-- Индексы таблицы `config_types`
--
ALTER TABLE `config_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`) USING BTREE;

--
-- Индексы таблицы `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `contacts_emails`
--
ALTER TABLE `contacts_emails`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `contacts_phones`
--
ALTER TABLE `contacts_phones`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `action` (`alias`) USING BTREE;

--
-- Индексы таблицы `content_i18n`
--
ALTER TABLE `content_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `row_id` (`row_id`),
  ADD KEY `lang` (`language`);

--
-- Индексы таблицы `control`
--
ALTER TABLE `control`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `control_i18n`
--
ALTER TABLE `control_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `row_id` (`row_id`),
  ADD KEY `lang` (`language`);

--
-- Индексы таблицы `country_ems`
--
ALTER TABLE `country_ems`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `country_ems_i18n`
--
ALTER TABLE `country_ems_i18n`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`) USING BTREE,
  ADD KEY `c_user_id` (`user_id`);

--
-- Индексы таблицы `coupons_groups`
--
ALTER TABLE `coupons_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`) USING BTREE,
  ADD KEY `coupon_id` (`coupon_id`) USING BTREE;

--
-- Индексы таблицы `cron`
--
ALTER TABLE `cron`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `i18n`
--
ALTER TABLE `i18n`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias_2` (`alias`);

--
-- Индексы таблицы `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `mail_templates`
--
ALTER TABLE `mail_templates`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `mail_templates_i18n`
--
ALTER TABLE `mail_templates_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mt_row_id` (`row_id`),
  ADD KEY `mt_lang` (`language`);

--
-- Индексы таблицы `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `news_i18n`
--
ALTER TABLE `news_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_row_id` (`row_id`),
  ADD KEY `news_lang` (`language`);

--
-- Индексы таблицы `news_items`
--
ALTER TABLE `news_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ni_news_id` (`news_id`),
  ADD KEY `ni_catalog_id` (`catalog_id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`) USING BTREE;

--
-- Индексы таблицы `orders_certificates`
--
ALTER TABLE `orders_certificates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`) USING BTREE,
  ADD KEY `status` (`status`) USING BTREE,
  ADD KEY `oc_cert_id` (`certificate_id`),
  ADD KEY `oc_user_id` (`user_id`);

--
-- Индексы таблицы `orders_items`
--
ALTER TABLE `orders_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`) USING BTREE,
  ADD KEY `catalog_id` (`catalog_id`) USING BTREE,
  ADD KEY `ord_size_alias` (`size_alias`),
  ADD KEY `ord_color_alias` (`color_alias`);

--
-- Индексы таблицы `orders_only`
--
ALTER TABLE `orders_only`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oo_user_id` (`user_id`);

--
-- Индексы таблицы `orders_only_items`
--
ALTER TABLE `orders_only_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ooi_order_id` (`order_id`);

--
-- Индексы таблицы `orders_simple`
--
ALTER TABLE `orders_simple`
  ADD PRIMARY KEY (`id`),
  ADD KEY `os_catalog_id` (`catalog_id`),
  ADD KEY `os_color_alias` (`color_alias`),
  ADD KEY `os_size_alias` (`size_alias`),
  ADD KEY `os_user_id` (`user_id`);

--
-- Индексы таблицы `prog`
--
ALTER TABLE `prog`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `projects_i18n`
--
ALTER TABLE `projects_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_row_id` (`row_id`),
  ADD KEY `news_lang` (`language`);

--
-- Индексы таблицы `projects_images`
--
ALTER TABLE `projects_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catalog_id` (`projects_id`) USING BTREE,
  ADD KEY `image` (`image`) USING BTREE;

--
-- Индексы таблицы `projects_info`
--
ALTER TABLE `projects_info`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`) USING BTREE;

--
-- Индексы таблицы `promo_groups`
--
ALTER TABLE `promo_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `promo_id` (`promo_id`) USING BTREE,
  ADD KEY `group_id` (`group_id`) USING BTREE;

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `seo_links`
--
ALTER TABLE `seo_links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `link` (`link`) USING BTREE;

--
-- Индексы таблицы `seo_links_i18n`
--
ALTER TABLE `seo_links_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `st_lang` (`language`),
  ADD KEY `st_row_id` (`row_id`);

--
-- Индексы таблицы `seo_redirects`
--
ALTER TABLE `seo_redirects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `seo_scripts`
--
ALTER TABLE `seo_scripts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`) USING BTREE;

--
-- Индексы таблицы `seo_templates`
--
ALTER TABLE `seo_templates`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `seo_templates_i18n`
--
ALTER TABLE `seo_templates_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sl_row_id` (`row_id`),
  ADD KEY `sl_lang` (`language`);

--
-- Индексы таблицы `sitemenu`
--
ALTER TABLE `sitemenu`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sitemenu_i18n`
--
ALTER TABLE `sitemenu_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_row_id` (`row_id`),
  ADD KEY `menu_lang` (`language`);

--
-- Индексы таблицы `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alias` (`alias`) USING BTREE,
  ADD KEY `sizes_group` (`group`);

--
-- Индексы таблицы `sizes_groups`
--
ALTER TABLE `sizes_groups`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sizes_groups_i18n`
--
ALTER TABLE `sizes_groups_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `col_row_id` (`row_id`),
  ADD KEY `col_lang` (`language`);

--
-- Индексы таблицы `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `slider_i18n`
--
ALTER TABLE `slider_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `slider_row_id` (`row_id`),
  ADD KEY `slider_lang` (`language`);

--
-- Индексы таблицы `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tags_brands`
--
ALTER TABLE `tags_brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gtag_id` (`tag_id`),
  ADD KEY `tags_brand_alias` (`brand_alias`);

--
-- Индексы таблицы `tags_groups`
--
ALTER TABLE `tags_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gtag_id` (`tag_id`),
  ADD KEY `gtag_group_id` (`group_id`);

--
-- Индексы таблицы `tags_i18n`
--
ALTER TABLE `tags_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tags_lang` (`language`),
  ADD KEY `tags_id` (`row_id`);

--
-- Индексы таблицы `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `team_i18n`
--
ALTER TABLE `team_i18n`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_row_id` (`row_id`),
  ADD KEY `news_lang` (`language`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`) USING BTREE,
  ADD UNIQUE KEY `hash` (`hash`) USING BTREE,
  ADD KEY `role_id` (`role_id`) USING BTREE;

--
-- Индексы таблицы `users_addresses`
--
ALTER TABLE `users_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `add_user_id` (`user_id`);

--
-- Индексы таблицы `users_networks`
--
ALTER TABLE `users_networks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`) USING BTREE;

--
-- Индексы таблицы `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users_wishlist`
--
ALTER TABLE `users_wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uw_c_id` (`catalog_id`),
  ADD KEY `uw_u_id` (`user_id`);

--
-- Индексы таблицы `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ip` (`ip`) USING BTREE,
  ADD KEY `country` (`country`) USING BTREE;

--
-- Индексы таблицы `visitors_hits`
--
ALTER TABLE `visitors_hits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ip` (`ip`) USING BTREE;

--
-- Индексы таблицы `visitors_referers`
--
ALTER TABLE `visitors_referers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ip` (`ip`) USING BTREE;

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `access`
--
ALTER TABLE `access`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `blacklist`
--
ALTER TABLE `blacklist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT для таблицы `brands_i18n`
--
ALTER TABLE `brands_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT для таблицы `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35339;
--
-- AUTO_INCREMENT для таблицы `carts_items`
--
ALTER TABLE `carts_items`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `catalog_colors`
--
ALTER TABLE `catalog_colors`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `catalog_i18n`
--
ALTER TABLE `catalog_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `catalog_images`
--
ALTER TABLE `catalog_images`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `catalog_related`
--
ALTER TABLE `catalog_related`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `catalog_returns`
--
ALTER TABLE `catalog_returns`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `catalog_sizes`
--
ALTER TABLE `catalog_sizes`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `catalog_tree`
--
ALTER TABLE `catalog_tree`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT для таблицы `catalog_tree_i18n`
--
ALTER TABLE `catalog_tree_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `category_i18n`
--
ALTER TABLE `category_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT для таблицы `certificates`
--
ALTER TABLE `certificates`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `certificates_i18n`
--
ALTER TABLE `certificates_i18n`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `colors_i18n`
--
ALTER TABLE `colors_i18n`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `config`
--
ALTER TABLE `config`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=98;
--
-- AUTO_INCREMENT для таблицы `config_groups`
--
ALTER TABLE `config_groups`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `config_types`
--
ALTER TABLE `config_types`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `contacts_emails`
--
ALTER TABLE `contacts_emails`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `contacts_phones`
--
ALTER TABLE `contacts_phones`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT для таблицы `content`
--
ALTER TABLE `content`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `content_i18n`
--
ALTER TABLE `content_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT для таблицы `control`
--
ALTER TABLE `control`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `control_i18n`
--
ALTER TABLE `control_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT для таблицы `country_ems`
--
ALTER TABLE `country_ems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=235;
--
-- AUTO_INCREMENT для таблицы `country_ems_i18n`
--
ALTER TABLE `country_ems_i18n`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=250;
--
-- AUTO_INCREMENT для таблицы `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT для таблицы `coupons_groups`
--
ALTER TABLE `coupons_groups`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `cron`
--
ALTER TABLE `cron`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `i18n`
--
ALTER TABLE `i18n`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `log`
--
ALTER TABLE `log`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT для таблицы `mail_templates`
--
ALTER TABLE `mail_templates`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT для таблицы `mail_templates_i18n`
--
ALTER TABLE `mail_templates_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=64;
--
-- AUTO_INCREMENT для таблицы `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=171;
--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT для таблицы `news_i18n`
--
ALTER TABLE `news_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=89;
--
-- AUTO_INCREMENT для таблицы `news_items`
--
ALTER TABLE `news_items`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `orders_certificates`
--
ALTER TABLE `orders_certificates`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT для таблицы `orders_items`
--
ALTER TABLE `orders_items`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `orders_only`
--
ALTER TABLE `orders_only`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `orders_only_items`
--
ALTER TABLE `orders_only_items`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `orders_simple`
--
ALTER TABLE `orders_simple`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `prog`
--
ALTER TABLE `prog`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT для таблицы `projects_i18n`
--
ALTER TABLE `projects_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT для таблицы `projects_images`
--
ALTER TABLE `projects_images`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT для таблицы `projects_info`
--
ALTER TABLE `projects_info`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=55;
--
-- AUTO_INCREMENT для таблицы `promo`
--
ALTER TABLE `promo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `promo_groups`
--
ALTER TABLE `promo_groups`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=142;
--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT для таблицы `seo_links`
--
ALTER TABLE `seo_links`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `seo_links_i18n`
--
ALTER TABLE `seo_links_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `seo_redirects`
--
ALTER TABLE `seo_redirects`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `seo_scripts`
--
ALTER TABLE `seo_scripts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `seo_templates`
--
ALTER TABLE `seo_templates`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `seo_templates_i18n`
--
ALTER TABLE `seo_templates_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT для таблицы `sitemenu`
--
ALTER TABLE `sitemenu`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT для таблицы `sitemenu_i18n`
--
ALTER TABLE `sitemenu_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT для таблицы `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT для таблицы `sizes_groups`
--
ALTER TABLE `sizes_groups`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `sizes_groups_i18n`
--
ALTER TABLE `sizes_groups_i18n`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `slider_i18n`
--
ALTER TABLE `slider_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `tags_brands`
--
ALTER TABLE `tags_brands`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `tags_groups`
--
ALTER TABLE `tags_groups`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `tags_i18n`
--
ALTER TABLE `tags_i18n`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `team`
--
ALTER TABLE `team`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `team_i18n`
--
ALTER TABLE `team_i18n`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT для таблицы `users_addresses`
--
ALTER TABLE `users_addresses`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT для таблицы `users_networks`
--
ALTER TABLE `users_networks`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `users_wishlist`
--
ALTER TABLE `users_wishlist`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `visitors`
--
ALTER TABLE `visitors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=57;
--
-- AUTO_INCREMENT для таблицы `visitors_hits`
--
ALTER TABLE `visitors_hits`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3083;
--
-- AUTO_INCREMENT для таблицы `visitors_referers`
--
ALTER TABLE `visitors_referers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `access`
--
ALTER TABLE `access`
  ADD CONSTRAINT `access_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `brands_i18n`
--
ALTER TABLE `brands_i18n`
  ADD CONSTRAINT `br_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `br_row_id` FOREIGN KEY (`row_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `carts_items`
--
ALTER TABLE `carts_items`
  ADD CONSTRAINT `carts_items_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_items_ibfk_2` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_color_alias` FOREIGN KEY (`color_alias`) REFERENCES `colors` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_size_alias` FOREIGN KEY (`size_alias`) REFERENCES `sizes` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog`
--
ALTER TABLE `catalog`
  ADD CONSTRAINT `catalog_ibfk_1` FOREIGN KEY (`brand_alias`) REFERENCES `brands` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `catalog_ibfk_3` FOREIGN KEY (`image`) REFERENCES `catalog_images` (`image`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `catalog_ibfk_4` FOREIGN KEY (`parent_id`) REFERENCES `catalog_tree` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog_colors`
--
ALTER TABLE `catalog_colors`
  ADD CONSTRAINT `c_catalog` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c_color` FOREIGN KEY (`color_alias`) REFERENCES `colors` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog_i18n`
--
ALTER TABLE `catalog_i18n`
  ADD CONSTRAINT `c_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c_row_id` FOREIGN KEY (`row_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog_images`
--
ALTER TABLE `catalog_images`
  ADD CONSTRAINT `catalog_images_ibfk_1` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog_related`
--
ALTER TABLE `catalog_related`
  ADD CONSTRAINT `catalog_related_ibfk_1` FOREIGN KEY (`who_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `catalog_related_ibfk_2` FOREIGN KEY (`with_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog_returns`
--
ALTER TABLE `catalog_returns`
  ADD CONSTRAINT `catalog_returns_ibfk_1` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `catalog_returns_ibfk_2` FOREIGN KEY (`color_alias`) REFERENCES `colors` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `catalog_returns_ibfk_3` FOREIGN KEY (`size_alias`) REFERENCES `sizes` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `catalog_returns_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog_sizes`
--
ALTER TABLE `catalog_sizes`
  ADD CONSTRAINT `catalog_sizes_ibfk_1` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `catalog_sizes_ibfk_2` FOREIGN KEY (`size_alias`) REFERENCES `sizes` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `catalog_tree_i18n`
--
ALTER TABLE `catalog_tree_i18n`
  ADD CONSTRAINT `cat_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cat_row_id` FOREIGN KEY (`row_id`) REFERENCES `catalog_tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `certificates_i18n`
--
ALTER TABLE `certificates_i18n`
  ADD CONSTRAINT `cert_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cert_row_id` FOREIGN KEY (`row_id`) REFERENCES `certificates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `colors_i18n`
--
ALTER TABLE `colors_i18n`
  ADD CONSTRAINT `col_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `col_row_id` FOREIGN KEY (`row_id`) REFERENCES `colors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `config`
--
ALTER TABLE `config`
  ADD CONSTRAINT `config_ibfk_1` FOREIGN KEY (`group`) REFERENCES `config_groups` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `config_ibfk_2` FOREIGN KEY (`type`) REFERENCES `config_types` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `content_i18n`
--
ALTER TABLE `content_i18n`
  ADD CONSTRAINT `lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `row_id` FOREIGN KEY (`row_id`) REFERENCES `content` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `control_i18n`
--
ALTER TABLE `control_i18n`
  ADD CONSTRAINT `control_i18n_ibfk_1` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `control_i18n_ibfk_2` FOREIGN KEY (`row_id`) REFERENCES `control` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `coupons`
--
ALTER TABLE `coupons`
  ADD CONSTRAINT `c_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `coupons_groups`
--
ALTER TABLE `coupons_groups`
  ADD CONSTRAINT `coupons_groups_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `catalog_tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `coupons_groups_ibfk_2` FOREIGN KEY (`coupon_id`) REFERENCES `coupons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `mail_templates_i18n`
--
ALTER TABLE `mail_templates_i18n`
  ADD CONSTRAINT `mt_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mt_row_id` FOREIGN KEY (`row_id`) REFERENCES `mail_templates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `news_i18n`
--
ALTER TABLE `news_i18n`
  ADD CONSTRAINT `news_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `news_row_id` FOREIGN KEY (`row_id`) REFERENCES `news` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `news_items`
--
ALTER TABLE `news_items`
  ADD CONSTRAINT `ni_catalog_id` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ni_news_id` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `orders_certificates`
--
ALTER TABLE `orders_certificates`
  ADD CONSTRAINT `oc_cert_id` FOREIGN KEY (`certificate_id`) REFERENCES `certificates` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `oc_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `orders_items`
--
ALTER TABLE `orders_items`
  ADD CONSTRAINT `orders_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_items_ibfk_2` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ord_color_alias` FOREIGN KEY (`color_alias`) REFERENCES `colors` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ord_size_alias` FOREIGN KEY (`size_alias`) REFERENCES `sizes` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `orders_only`
--
ALTER TABLE `orders_only`
  ADD CONSTRAINT `oo_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `orders_only_items`
--
ALTER TABLE `orders_only_items`
  ADD CONSTRAINT `ooi_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders_only` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `orders_simple`
--
ALTER TABLE `orders_simple`
  ADD CONSTRAINT `os_catalog_id` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `os_color_alias` FOREIGN KEY (`color_alias`) REFERENCES `colors` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `os_size_alias` FOREIGN KEY (`size_alias`) REFERENCES `sizes` (`alias`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `os_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `promo_groups`
--
ALTER TABLE `promo_groups`
  ADD CONSTRAINT `promo_groups_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `catalog_tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `promo_groups_ibfk_2` FOREIGN KEY (`promo_id`) REFERENCES `promo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `seo_links_i18n`
--
ALTER TABLE `seo_links_i18n`
  ADD CONSTRAINT `st_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `st_row_id` FOREIGN KEY (`row_id`) REFERENCES `seo_links` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `seo_templates_i18n`
--
ALTER TABLE `seo_templates_i18n`
  ADD CONSTRAINT `sl_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sl_row_id` FOREIGN KEY (`row_id`) REFERENCES `seo_templates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `sitemenu_i18n`
--
ALTER TABLE `sitemenu_i18n`
  ADD CONSTRAINT `menu_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `menu_row_id` FOREIGN KEY (`row_id`) REFERENCES `sitemenu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_group` FOREIGN KEY (`group`) REFERENCES `sizes_groups` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `sizes_groups_i18n`
--
ALTER TABLE `sizes_groups_i18n`
  ADD CONSTRAINT `sizes_groups_i18n_ibfk_1` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sizes_groups_i18n_ibfk_2` FOREIGN KEY (`row_id`) REFERENCES `sizes_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `slider_i18n`
--
ALTER TABLE `slider_i18n`
  ADD CONSTRAINT `slider_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `slider_row_id` FOREIGN KEY (`row_id`) REFERENCES `slider` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `tags_brands`
--
ALTER TABLE `tags_brands`
  ADD CONSTRAINT `tags_brands_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tags_brand_alias` FOREIGN KEY (`brand_alias`) REFERENCES `brands` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `tags_groups`
--
ALTER TABLE `tags_groups`
  ADD CONSTRAINT `gtag_group_id` FOREIGN KEY (`group_id`) REFERENCES `catalog_tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gtag_id` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `tags_i18n`
--
ALTER TABLE `tags_i18n`
  ADD CONSTRAINT `tags_id` FOREIGN KEY (`row_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tags_lang` FOREIGN KEY (`language`) REFERENCES `i18n` (`alias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `users_roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users_addresses`
--
ALTER TABLE `users_addresses`
  ADD CONSTRAINT `add_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users_networks`
--
ALTER TABLE `users_networks`
  ADD CONSTRAINT `users_networks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users_wishlist`
--
ALTER TABLE `users_wishlist`
  ADD CONSTRAINT `uw_c_id` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `uw_u_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `visitors_hits`
--
ALTER TABLE `visitors_hits`
  ADD CONSTRAINT `visitors_hits_ibfk_1` FOREIGN KEY (`ip`) REFERENCES `visitors` (`ip`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `visitors_referers`
--
ALTER TABLE `visitors_referers`
  ADD CONSTRAINT `visitors_referers_ibfk_1` FOREIGN KEY (`ip`) REFERENCES `visitors` (`ip`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
