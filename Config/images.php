<?php

return [
    'watermark' => \Core\HTML::media('images/watermark.png'),
    'types' => [
        'jpg', 'jpeg', 'png', 'gif',
    ],
    'slider' => [
        [
            'path' => 'main',
            'width' => 1440,
            'height' => 710,
            'resize' => 1,
            'crop' => 1,
        ],
        [
            'path' => 'bg',
            'width' => 1920,
            'height' => 420,
            'resize' => 1,
            'crop' => 1,
        ],
    ],
    'slider_about' => [
        [
            'path' => 'main',
            'width' => 830,
            'height' => 540,
            'resize' => 1,
            'crop' => 1,
        ],
    ],
    'news' => [
        [
            'path' => 'popup',
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
    'projects' => [
        [
            'path' => 'popup',
            'width' => 960,
            'height' => 640,
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
    'services' => [
        [
            'path' => 'main',
            'width' => 700,
            'height' => 440,
            'resize' => 1,
            'crop' => 1,
        ],
    ],
];
