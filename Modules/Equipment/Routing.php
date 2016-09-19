<?php

return [
    // Equipment
    'equipment' => 'equipment/equipment/index',
    '<lang:ru|en|fr|de|sp>/equipment' => 'equipment/equipment/index',
    '<lang:ru|en|fr|de|sp>/equipment/page/<page:[0-9]*>' => 'equipment/equipment/index',
    '<lang:ru|en|fr|de|sp>/equipment/<alias>' => 'equipment/equipment/inner',
    // Models
    'models/<alias>' => 'equipment/models/inner',
    '<lang:ru|en|fr|de|sp>/models/<alias>' => 'equipment/models/inner',
    // Services
    'equipment/services/<alias>' => 'equipment/models/inner',
];
