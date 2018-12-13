<?php 



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
        1 => array(
            'key' => 'field_5c125f8744984',
            'label' => __('Field configuration', 'my-pages'),
            'name' => 'service_field_config',
            'type' => 'flexible_content',
            'instructions' => __('Add your fields below...', 'my-pages'),
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'layouts' => array(
                '5c125f906fab9' => array(
                    'key' => '5c125f906fab9',
                    'name' => 'text_input',
                    'label' => __('Text input', 'my-pages'),
                    'display' => 'row',
                    'sub_fields' => array(
                        0 => array(
                            'key' => 'field_5c1267ede4365',
                            'label' => 'Conversional: Statement',
                            'name' => 'statement',
                            'type' => 'text',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'default_value' => '',
                            'placeholder' => '',
                            'prepend' => '',
                            'append' => '',
                            'maxlength' => '',
                        ),
                    ),
                    'min' => '',
                    'max' => '',
                ),
            ),
            'button_label' => __('Add Field', 'my-pages'),
            'min' => '',
            'max' => 100,
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
