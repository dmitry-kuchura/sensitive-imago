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
    '<lang:ru|en|fr|de|sp>/equipment/services/<alias>' => 'equipment/models/inner',
    // Features
    'features/<alias>' => 'equipment/features/inner',
    '<lang:ru|en|fr|de|sp>/features/<alias>' => 'equipment/features/inner',
    // Advantages
    'advantages/<alias>' => 'equipment/advantages/inner',
    '<lang:ru|en|fr|de|sp>/advantages/<alias>' => 'equipment/advantages/inner',
    // Technology
    'technology/<alias>' => 'equipment/technology/inner',
    '<lang:ru|en|fr|de|sp>/technology/<alias>' => 'equipment/technology/inner',
    // Mechanism
    'mechanism/<alias>' => 'equipment/mechanism/inner',
    '<lang:ru|en|fr|de|sp>/mechanism/<alias>' => 'equipment/mechanism/inner',
    // Software
    'software/<alias>' => 'equipment/software/inner',
    '<lang:ru|en|fr|de|sp>/software/<alias>' => 'equipment/software/inner',
    // Results
    'results/<alias>' => 'equipment/results/inner',
    '<lang:ru|en|fr|de|sp>/results/<alias>' => 'equipment/results/inner',
];
