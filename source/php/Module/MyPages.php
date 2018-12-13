<?php

namespace MyPages\Module;

class MyPages extends \Modularity\Module
{
    public $slug = 'mypages-gallery';
    public $supports = array();

    public function init()
    {
        $this->nameSingular = __("mypages-gallery", 'my-pages');
        $this->namePlural = __("mypages-gallery", 'my-pages');
        $this->description = __("Retrives and output downloadable images from mypages.", 'my-pages');
    }

    public function data() : array
    {
        $data = array();

        //Send to view
        return $data;
    }
    
    public function template() : string
    {
        return "mypagesdiv.blade.php";
    }
    
    public function script()
    {

        wp_enqueue_script('my-pages-js');
        // wp_localize_script('skyfish-integration-js', 'skyfishAjaxObject', $this->scriptData());
    }
    
    
    public function style()
    {
        wp_enqueue_style('skyfish-integration-css');
    }
    
    /**
     * Available "magic" methods for modules:
     * init()            What to do on initialization
     * data()            Use to send data to view (return array)
     * style()           Enqueue style only when module is used on page
     * script            Enqueue script only when module is used on page
     * adminEnqueue()    Enqueue scripts for the module edit/add page in admin
     * template()        Return the view template (blade) the module should use when displayed
     */
}