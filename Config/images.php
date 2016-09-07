<?php

return [
    'watermark' => \Core\HTML::media('images/watermark.png'),
    'types' => [
        'jpg', 'jpeg', 'png', 'gif',
    ],
    'news' => [
        [
            'path' => 'inner',
            'width' => 960,
            'height' => 720,
            'resize' => 1,
            'crop' => 1,
        ],
        [
            'path' => 'main',
            'width' => 700,
            'height' => 440,
            'resize' => 1,
            'crop' => 1,
        ],
    ],
    'team' => [
        [
            'path' => 'main',
            'width' => 138,
            'height' => 137,
            'resize' => 1,
            'crop' => 1,
        ],
    ],
    'advantage' => [
        [
            'path' => 'main',
            'width' => 150,
            'height' => 150,
            'resize' => 1,
            'crop' => 1,
        ],
    ],
];
