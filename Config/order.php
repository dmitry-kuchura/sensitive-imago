<?php
	
	return array(
		'statuses' => array(
            0 => __('Новый'),
            2 => __('В работе'),
            1 => __('Выполнен'),
            3 => __('Отменен'),
        ),
        'st_classes' => array(
            0 => 'default',
            2 => 'info',
            1 => 'success',
            3 => 'danger',
        ),
        'payment' => array(
            1 => __('Наложенный платеж (оплата при получении)'),
            2 => __('Оплата на карту ПриватБанка'),
            // 3 => __('Приват24'),
            4 => 'Western Union',
            5 => 'PayPal',
        ),
        'delivery' => array(
            1 => __('Новая Почта'),
            2 => __('Автолюкс'),
            3 => __('ИнТайм'),
            4 => __('УкрПошта'),
            5 => 'EMS',
        ),
        'currency' => array(
            'USD' => '$',
            'UAH' => 'грн',
            'BGN' => 'BGN',
        ),

        'delivery-images' => array(
            1 => \Core\HTML::media('pic/icons/nova-poshta.png'),
            2 => \Core\HTML::media('pic/icons/avtoluks.png'),
            3 => \Core\HTML::media('pic/icons/intime.png'),
            4 => \Core\HTML::media('pic/icons/ukrposhta.png'),
            5 => \Core\HTML::media('pic/icons/ems.png'),
        ),

        'payment-images' => array(
            1 => \Core\HTML::media('pic/icons/nal-plat.png'),
            2 => \Core\HTML::media('pic/icons/privatbank.png'),
            // 3 => \Core\HTML::media('pic/icons/privat24.png'),
            4 => \Core\HTML::media('pic/icons/wu.png'),
            5 => \Core\HTML::media('pic/icons/paypal.png'),
        ),
	);