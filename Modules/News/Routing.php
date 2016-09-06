<?php

return [
    'news' => 'news/news/index',
    '<lang:ru|en|fr|de|sp>/news' => 'news/news/index',
    '<lang:ru|en|fr|de|sp>/news/page/<page:[0-9]*>' => 'news/news/index',
    '<lang:ru|en|fr|de|sp>/news/<alias>' => 'news/news/inner',
];
