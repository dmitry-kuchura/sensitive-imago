<?php

return [
    // Equipment
    'equipment' => 'equipment/equipment/index',
    '<lang:ru|en|fr|de|sp>/equipment' => 'equipment/equipment/index',
    '<lang:ru|en|fr|de|sp>/equipment/page/<page:[0-9]*>' => 'equipment/equipment/index',
    '<lang:ru|en|fr|de|sp>/equipment/<alias>' => 'equipment/equipment/inner',
    // Models
    'equipment/models/<alias>' => 'equipment/models/inner',
];
