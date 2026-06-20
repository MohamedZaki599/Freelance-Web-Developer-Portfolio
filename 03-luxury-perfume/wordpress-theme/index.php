<?php

$static_index = get_template_directory() . '/static/index.html';

if (file_exists($static_index)) {
    readfile($static_index);
    return;
}

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <main style="min-height:100vh;display:grid;place-items:center;font-family:Arial,sans-serif;padding:24px;text-align:center;">
        <div>
            <h1>Static build is missing</h1>
            <p>Run <code>npm run theme:build</code> and upload the generated wordpress-theme folder.</p>
        </div>
    </main>
    <?php wp_footer(); ?>
</body>
</html>
