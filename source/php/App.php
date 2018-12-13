<?php

namespace MyPages;

class App
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', array($this, 'enqueueStyles'));
    }

    /**
     * Enqueue required style
     * @return void
     */
    public function enqueueStyles()
    {
        wp_register_style('my-pages-css', MYPAGES_URL . '/dist/css/my-pages.css');
        wp_register_script('my-pages-js', MYPAGES_URL . '/dist/js/my-pages.js');
    }
}
