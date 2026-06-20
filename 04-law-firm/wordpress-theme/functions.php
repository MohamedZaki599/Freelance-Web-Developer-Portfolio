<?php

function portfolio_law_firm_setup() {
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'portfolio_law_firm_setup');
