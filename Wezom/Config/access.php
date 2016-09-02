<?php

    return array(
        array(
            'name' => __('Панель управления'),
            'module' => 'index',
            'controller' => 'index',
            'edit' => 0,
        ),
        array(
            'name' => __('Текстовые страницы'),
            'module' => 'content',
            'controller' => 'content',
        ),
        array(
            'name' => __('Системные страницы'),
            'module' => 'content',
            'controller' => 'control',
        ),
        array(
            'name' => __('Новости'),
            'module' => 'content',
            'controller' => 'news',
        ),
        array(
            'name' => __('Меню'),
            'module' => 'menu',
            'controller' => 'menu',
        ),
        array(
            'name' => __('Слайдшоу'),
            'module' => 'multimedia',
            'controller' => 'slider',
        ),
        array(
            'name' => __('Справочники. Цвета'),
            'module' => 'dict',
            'controller' => 'colors',
        ),
        array(
            'name' => __('Справочники. Группы размеров'),
            'module' => 'dict',
            'controller' => 'sizesGroups',
        ),
        array(
            'name' => __('Справочники. Размеры'),
            'module' => 'dict',
            'controller' => 'sizes',
        ),
        array(
            'name' => __('Сертификаты'),
            'module' => 'catalog',
            'controller' => 'cert',
        ),
        array(
            'name' => __('Товары'),
            'module' => 'catalog',
            'controller' => 'items',
        ),
        array(
            'name' => __('Группы товаров'),
            'module' => 'catalog',
            'controller' => 'groups',
        ),
        array(
            'name' => __('Производители'),
            'module' => 'catalog',
            'controller' => 'brands',
        ),
        array(
            'name' => __('Теги'),
            'module' => 'catalog',
            'controller' => 'tags',
        ),
        array(
            'name' => __('Заказы товаров'),
            'module' => 'orders',
            'controller' => 'orders',
            'view' => false,
        ),
        array(
            'name' => __('Заказы сертификатов'),
            'module' => 'orders',
            'controller' => 'ordersCert',
        ),
        array(
            'name' => __('Быстрые заказы'),
            'module' => 'orders',
            'controller' => 'simple',
        ),
        array(
            'name' => __('Под заказ'),
            'module' => 'orders',
            'controller' => 'ordersOnly',
        ),
        array(
            'name' => __('Скидки. Купоны'),
            'module' => 'promo',
            'controller' => 'promo',
        ),
        array(
            'name' => __('Скидки. Персональные купоны'),
            'module' => 'promo',
            'controller' => 'coupons',
        ),
        array(
            'name' => __('Скидки. Накопительная программа'),
            'module' => 'promo',
            'controller' => 'prog',
            'view' => false,
        ),
        array(
            'name' => __('Отзывы'),
            'module' => 'reviews',
            'controller' => 'reviews',
        ),
        array(
            'name' => __('Черный список'),
            'module' => 'blacklist',
            'controller' => 'blacklist',
        ),
        array(
            'name' => __('Пользователи сайта'),
            'module' => 'user',
            'controller' => 'users',
        ),
        array(
            'name' => __('Сообщения из контактной формы'),
            'module' => 'contacts',
            'controller' => 'contacts',
            'view' => false,
        ),
        array(
            'name' => __('Шаблоны писем'),
            'module' => 'mailTemplates',
            'controller' => 'mailTemplates',
            'view' => false,
        ),
        array(
            'name' => __('Настройки сайта'),
            'module' => 'config',
            'controller' => 'config',
        ),
        array(
            'name' => __('СЕО. Шаблоны'),
            'module' => 'seo',
            'controller' => 'templates',
        ),
        array(
            'name' => __('СЕО. Теги для конкретных ссылок'),
            'controller' => 'links',
        ),
        array(
            'name' => __('СЕО. Метрика и счетчики'),
            'controller' => 'scripts',
        ),
        array(
            'name' => __('СЕО. Перенаправления'),
            'controller' => 'redirects',
        ),
    );