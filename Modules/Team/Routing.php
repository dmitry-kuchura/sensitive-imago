<?php

return [
    'team' => 'team/team/index',
    '<lang:ru|en|fr|de|sp>/team' => 'team/team/index',
    '<lang:ru|en|fr|de|sp>/team/page/<page:[0-9]*>' => 'team/team/index',
    '<lang:ru|en|fr|de|sp>/team/<alias>' => 'team/team/inner',
];
