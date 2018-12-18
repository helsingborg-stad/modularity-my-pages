<?php

namespace MyPages\Api;

class FieldConfiguration
{
    public function __construct()
    {
        add_action('rest_api_init', array($this, 'registerRestRoutes'));
    }

    /**
     * Registers rest routes for fetching data from API
     *
     * @return void
     */
    public function registerRestRoutes()
    {
        //Enable filters
        add_filter('acf/load_value/name=service_response', array($this, 'filterServiceResponse'), 10, 3);

        //Single
        register_rest_route(
            "ModularityMyPages/v1",
            "GetFieldConfiguration/(?P<id>[\d]+)",
            array(
                'methods' => \WP_REST_Server::READABLE,
                'callback' => array($this, 'getFieldConfiguration'),
                'args' => array(
                    'id' => array(
                        'validate_callback' => function ($param, $request, $key) {
                            return is_numeric($param);
                        }
                    ),
                )
            )
        );

        //Index
        register_rest_route(
            "ModularityMyPages/v1",
            "GetFieldConfiguration",
            array(
                'methods' => \WP_REST_Server::READABLE,
                'callback' => array($this, 'getFieldConfigurationIndex'),
            )
        );
    }

    /**
     * Fetch data from API
     *
     * @wp return object wp_send_json
     *
     * @return
     */
    public function getFieldConfiguration($request)
    {
        //Get parameters
        $param = $request->get_params();

        //Not valid response above, send error
        return wp_send_json(
            array(
                'state' => true,
                'service_heading' => (string) get_the_title($param['id']),
                'service_description' => (string) get_field('service_description', $param['id']),
                'configuration' => (array) $this->filterConfigurationResponseObject(get_field('service_field_config', $param['id'])),
                'service_response' => get_field('service_response', $param['id'])
            )
        );
    }

    /**
     * Fetch data from API
     *
     * @wp return object wp_send_json
     *
     * @return
     */
    public function getFieldConfigurationIndex($request)
    {
        //Get parameters
        $param = $request->get_params();

        //Not valid response above, send error
        return wp_send_json(
            $this->filterIndexResponseObject(
                get_posts(
                    array(
                        'posts_per_page' => -1,
                        'post_type' => 'mod-mypages',
                    )
                )
            )
        );

        //Not valid response above, send error
        return wp_send_json(
            array(
                'state' => false,
                'message' => __("A unknown error with the response occured.", 'modularity-agreements-archive')
            )
        );
    }

    /**
     * Fetch data from API
     *
     * @wp return object wp_send_json
     *
     * @return
     */
    public function filterConfigurationResponseObject($object) {

        if (!is_array($object)) {
            return array();
        }

        if (empty($object)) {
            return array();
        }

        foreach ($object as &$configurationItem) {

            //Rename acf key
            if (isset($configurationItem['acf_fc_layout'])) {
                $configurationItem['type'] = $configurationItem['acf_fc_layout'];
                unset($configurationItem['acf_fc_layout']);
            }

            //Add null value on validation type
            if (isset($configurationItem['validation']) && $configurationItem['validation'] != true) {
                if (isset($configurationItem['validation_requirement'])) {
                    $configurationItem['validation_requirement'] = null;
                }
            }
        }

        return $object;
    }

    /**
     * Get an index of all modules published, with title, id and desciption
     *
     * @param array $object   Get posts array contining posts objects
     * @param array $keepKeys All keys that the filter should keep to output.
     *
     * @return array Contain all services in a simplified format.
     */
    public function filterIndexResponseObject($object, $keepKeys = array('ID', 'post_title')) {

        if (!is_array($object)) {
            return array();
        }

        if (empty($object)) {
            return array();
        }

        //Filter out keeys that dosent apply to keep array
        foreach ($object as &$indexObject) {
            foreach ($indexObject as $fieldKey => $field) {
                if (!in_array($fieldKey, $keepKeys)) {
                    unset($indexObject->{$fieldKey});
                }
            }

            //Rename
            $indexObject->service_heading = $indexObject->post_title;
            $indexObject->service_description = (string) get_field('service_description', $indexObject->ID);

            //Unset
            unset($indexObject->post_title);
        }

        return $object;
    }

    /**
     * Get an index of all modules published, with title, id and desciption
     *
     * @param array $value  Previous value
     * @param int   $postId The post id
     * @param array $field  The field definition
     *
     * @return array Contain all services in a simplified format.
     */
    public function filterServiceResponse($value, $postId, $field)
    {
        if (is_array($value) && reset($value) == 0) {
            return null;
        }
        return $value;
    }
}
