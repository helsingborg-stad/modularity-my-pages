<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_5c125d8781f32',
    'title' => __('E-Service Form Input', 'my-pages'),
    'fields' => array(
        0 => array(
            'key' => 'field_5c125efc8254f',
            'label' => __('Desciption', 'my-pages'),
            'name' => 'service_description',
            'type' => 'textarea',
            'instructions' => __('A short description about the service. What\'s it about? Whats the end-user goal?', 'my-pages'),
            'required' => 1,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
            'maxlength' => 500,
            'rows' => 8,
            'new_lines' => '',
        ),
    ),
    'location' => array(
        0 => array(
            0 => array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'mod-mypages',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => 1,
    'description' => '',
));
}