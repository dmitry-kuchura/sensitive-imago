<?php
use Core\HTML;

foreach ($styles as $style) {
    echo HTML::style($style);
}

foreach ($scripts as $script) {
    echo HTML::script($script);
}