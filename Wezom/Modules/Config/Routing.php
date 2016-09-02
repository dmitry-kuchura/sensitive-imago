<?php   
    
    return array(
        'wezom/config/edit' => 'config/config/edit',

        'wezom/pictures/index' => 'config/pictures/index',

        'wezom/phones/index' => 'config/phones/index',
        'wezom/phones/index/page/<page:[0-9]*>' => 'config/phones/index',
        'wezom/phones/edit/<id:[0-9]*>' => 'config/phones/edit',
        'wezom/phones/delete/<id:[0-9]*>' => 'config/phones/delete',
        'wezom/phones/add' => 'config/phones/add',

        'wezom/emails/index' => 'config/emails/index',
        'wezom/emails/index/page/<page:[0-9]*>' => 'config/emails/index',
        'wezom/emails/edit/<id:[0-9]*>' => 'config/emails/edit',
        'wezom/emails/delete/<id:[0-9]*>' => 'config/emails/delete',
        'wezom/emails/add' => 'config/emails/add',
    );