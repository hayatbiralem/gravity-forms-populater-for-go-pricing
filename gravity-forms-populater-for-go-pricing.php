<?php

/**
 * Plugin Name: Gravity Forms Populater for Go Pricing
 * Author: Ömür Yanıkoğlu @hayatbiralem
 */

if (!class_exists('gravity_forms_populater_for_go_pricing')) {
    class gravity_forms_populater_for_go_pricing
    {
        function __construct()
        {
            add_action('wp_enqueue_scripts', 'my_load_scripts');
        }

        function my_load_scripts($hook)
        {
            $my_js_ver = date(
                'ymd-Gis',
                filemtime(plugin_dir_path(__FILE__) . 'script.js')
            );

            wp_enqueue_script(
                'gravity_forms_populater_for_go_pricing_js',
                plugins_url('script.js', __FILE__),
                ['jquery'],
                $my_js_ver
            );
        }
    }

    new gravity_forms_populater_for_go_pricing();
}
