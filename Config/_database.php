
<?php

return [
    'default' => [
        'type' => 'MySQLi',
        'connection' => [
            /**
             * The following options are available for MySQL:
             *
             * string   hostname     server hostname, or socket
             * string   database     database name
             * string   username     database username
             * string   password     database password
             * boolean  persistent   use persistent connections?
             * array    variables    system variables as "key => value" pairs
             *
             * Ports and sockets may be appended to the hostname.
             */
            'hostname' => '91.206.30.13',
            'database' => 'beatus_db',
            'username' => 'beatus_db',
            'password' => '6D3k0N3w',
            'persistent' => false,
        ],
        'table_prefix' => '',
        'charset' => 'utf8',
        'caching' => false,
    ],
];
