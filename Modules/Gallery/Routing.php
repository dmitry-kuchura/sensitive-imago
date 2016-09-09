<?php

return [
    // Photo
    '<lang:ru|en|fr|de|sp>/gallery' => 'gallery/gallery/index',
    '<lang:ru|en|fr|de|sp>/gallery/page/<page:[0-9]*>' => 'gallery/gallery/index',
    '<lang:ru|en|fr|de|sp>/gallery/<alias>' => 'gallery/gallery/inner',
    // Video
    '<lang:ru|en|fr|de|sp>/video' => 'gallery/video/index',
    '<lang:ru|en|fr|de|sp>/video/page/<page:[0-9]*>' => 'gallery/video/index',
    '<lang:ru|en|fr|de|sp>/video/<alias>' => 'gallery/video/inner',
];