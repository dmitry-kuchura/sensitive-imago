<?php

return [
    // Callback
    'wezom/feedback/index' => 'contacts/feedback/index',
    'wezom/feedback/index/page/<page:[0-9]*>' => 'contacts/feedback/index',
    'wezom/feedback/edit/<id:[0-9]*>' => 'contacts/feedback/edit',
    'wezom/feedback/delete/<id:[0-9]*>' => 'contacts/feedback/delete',
    // Contacts
    'wezom/contacts/index' => 'contacts/contacts/index',
    'wezom/contacts/index/page/<page:[0-9]*>' => 'contacts/contacts/index',
    'wezom/contacts/edit/<id:[0-9]*>' => 'contacts/contacts/edit',
    'wezom/contacts/delete/<id:[0-9]*>' => 'contacts/contacts/delete',
];
