<?php

return [
    // Prices
    'wezom/prices/index' => 'contacts/prices/index',
    'wezom/prices/index/page/<page:[0-9]*>' => 'contacts/prices/index',
    'wezom/prices/edit/<id:[0-9]*>' => 'contacts/prices/edit',
    'wezom/prices/delete/<id:[0-9]*>' => 'contacts/prices/delete',
    // Contacts
    'wezom/contacts/index' => 'contacts/contacts/index',
    'wezom/contacts/index/page/<page:[0-9]*>' => 'contacts/contacts/index',
    'wezom/contacts/edit/<id:[0-9]*>' => 'contacts/contacts/edit',
    'wezom/contacts/delete/<id:[0-9]*>' => 'contacts/contacts/delete',
    // Regions
    'wezom/regions/index' => 'contacts/regions/index',
    'wezom/regions/add' => 'contacts/regions/add',
    'wezom/regions/index/page/<page:[0-9]*>' => 'contacts/regions/index',
    'wezom/regions/edit/<id:[0-9]*>' => 'contacts/regions/edit',
    'wezom/regions/delete/<id:[0-9]*>' => 'contacts/regions/delete',
];
