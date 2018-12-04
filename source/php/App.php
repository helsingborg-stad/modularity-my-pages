<?php

namespace ModularityMyPages;

class App
{
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueueStyles'));
        add_action('admin_enqueue_scripts', array($this, 'enqueueScripts'));
    }

    /**
     * Enqueue required style
     * @return void
     */
    public function enqueueStyles()
    {
        wp_register_style('modularity-my-pages-css', MODULARITYMYPAGES_URL . '/dist/' . \ModularityMyPages\Helper\CacheBust::name('css/modularity-my-pages.css'));
    }

    /**
     * Enqueue required scripts
     * @return void
     */
    public function enqueueScripts()
    {
        wp_register_script('modularity-my-pages-js', MODULARITYMYPAGES_URL . '/dist/' . \ModularityMyPages\Helper\CacheBust::name('js/modularity-my-pages.js'));
    }
}
