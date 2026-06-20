<?php

function portfolio_dental_clinic_setup() {
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'portfolio_dental_clinic_setup');
