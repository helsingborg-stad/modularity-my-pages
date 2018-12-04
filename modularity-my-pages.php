<?php

/**
 * Plugin Name:       Modularity My Pages
 * Plugin URI:        (#plugin_url#)
 * Description:       My pages React fronend plugin
 * Version:           1.0.0
 * Author:            Sebastian Thulin
 * Author URI:        (#plugin_author_url#)
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       modularity-my-pages
 * Domain Path:       /languages
 */

 // Protect agains direct file access
if (! defined('WPINC')) {
    die;
}

define('MODULARITYMYPAGES_PATH', plugin_dir_path(__FILE__));
define('MODULARITYMYPAGES_URL', plugins_url('', __FILE__));
define('MODULARITYMYPAGES_TEMPLATE_PATH', MODULARITYMYPAGES_PATH . 'templates/');

load_plugin_textdomain('modularity-my-pages', false, plugin_basename(dirname(__FILE__)) . '/languages');

require_once MODULARITYMYPAGES_PATH . 'source/php/Vendor/Psr4ClassLoader.php';
require_once MODULARITYMYPAGES_PATH . 'Public.php';

// Instantiate and register the autoloader
$loader = new ModularityMyPages\Vendor\Psr4ClassLoader();
$loader->addPrefix('ModularityMyPages', MODULARITYMYPAGES_PATH);
$loader->addPrefix('ModularityMyPages', MODULARITYMYPAGES_PATH . 'source/php/');
$loader->register();

// Start application
new ModularityMyPages\App();
