<?php

namespace MyPages;

class App
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', array($this, 'registerFrontendAssets'));
        add_action('init', array($this, 'init'));
    }

    public function init() {
        new Api\FieldConfiguration();
    }

    /**
     * Enqueue required style
     * @return void
     */
    public function registerFrontendAssets()
    {
        wp_register_style('my-pages-css', MYPAGES_URL . '/dist/my-pages.css');
        wp_register_script('my-pages-js', MYPAGES_URL . '/dist/' . \SkyfishIntegration\Helper\CacheBust::name('js/SkyfishIntegration.js'), array('jquery', 'react', 'react-dom'));
        // wp_register_script('skyfish-integration-js', SKYFISHINTEGRATION_URL . '/dist/' . \SkyfishIntegration\Helper\CacheBust::name('js/SkyfishIntegration.js'), array('jquery', 'react', 'react-dom'));
        // wp_register_style('skyfish-integration-css', SKYFISHINTEGRATION_URL . '/dist/' . \SkyfishIntegration\Helper\CacheBust::name('css/skyfish-integration.css'));
    }
}
