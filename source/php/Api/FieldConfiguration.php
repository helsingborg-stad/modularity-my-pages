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
        register_rest_route(
            "ModularityMyPages/v1",
            "GetFieldConfiguration/(?P<id>[\d]+)",
            array(
                'methods' => \WP_REST_Server::ALLMETHODS,
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
                'state' => 'success',
                'service_description' => (string) get_field('service_field_config', $param['id']),
                'configuration' => (array) get_field('service_field_config', $param['id'])
            )
        );

        //Not valid response above, send error
        return wp_send_json(
            array(
                'state' => 'error',
                'message' => __("A unknown error with the response occured.", 'modularity-agreements-archive')
            )
        );
    }
}
