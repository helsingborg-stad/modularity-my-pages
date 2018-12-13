<?php

/**
 * Plugin Name:       Modularity My Pages
 * Plugin URI:        https://github.com/helsingborg-stad/modularity-my-pages/
 * Description:       My pages React fronend plugin
 * Version:           1.0.0
 * Author:            Sebastian Thulin
 * Author URI:        https://github.com/sebastianthulin
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       modularity-my-pages
 * Domain Path:       /languages
 */

 // Protect agains direct file access
if (! defined('WPINC')) {
    die;
}

define('MYPAGES_PATH', plugin_dir_path(__FILE__));
define('MYPAGES_URL', plugins_url('', __FILE__));
define('MYPAGES_TEMPLATE_PATH', MYPAGES_PATH . 'templates/');

load_plugin_textdomain('my-pages', false, plugin_basename(dirname(__FILE__)) . '/languages');

require_once MYPAGES_PATH . 'source/php/Vendor/Psr4ClassLoader.php';
require_once MYPAGES_PATH . 'Public.php';

// Instantiate and register the autoloader
$loader = new MyPages\Vendor\Psr4ClassLoader();
$loader->addPrefix('MyPages', MYPAGES_PATH);
$loader->addPrefix('MyPages', MYPAGES_PATH . 'source/php/');
$loader->register();

// Start application
new MyPages\App();

// Acf auto import and export
add_action('plugins_loaded', function () {
    $acfExportManager = new \AcfExportManager\AcfExportManager();
    $acfExportManager->setTextdomain('my-pages');
    $acfExportManager->setExportFolder(MYPAGES_PATH . 'acf-fields/');
    $acfExportManager->autoExport(array(
        'my-pages-e-service' => 'group_5c125d8781f32',
    ));
    $acfExportManager->import();
});


//Registers the module
add_action('plugins_loaded', function () {
    if (function_exists('modularity_register_module')) {
        modularity_register_module(
            MYPAGES_PATH . 'source/php/Module/',
            'MyPages'
        );
    }
});

// Add module template dir
add_filter('Modularity/Module/TemplatePath', function ($paths) {
    $paths[] = MYPAGES_PATH . 'source/php/Module/views/';
    return $paths;
});
