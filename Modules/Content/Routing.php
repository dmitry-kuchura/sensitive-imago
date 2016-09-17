<?php
return [
    // Content
    '' => 'content/index/index',
    '<lang:ru|en|fr|de|sp>' => 'content/index/index',
    // Contact
    'contact' => 'content/contact/index',
    '<lang:ru|en|fr|de|sp>/contact' => 'content/contact/index',
    'contact/<alias>' => 'content/contact/region',
    '<lang:ru|en|fr|de|sp>/contact/<alias>' => 'content/contact/region',
    // Sitemap
    'sitemap' => 'content/sitemap/index',
    '<lang:ru|en|fr|de|sp>/sitemap' => 'content/sitemap/index',
    // Page
    '<alias>' => 'content/content/index',
    '<lang:ru|en|fr|de|sp>/<alias>' => 'content/content/index',
];
