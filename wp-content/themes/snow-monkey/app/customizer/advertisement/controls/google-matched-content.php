<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_Customizer_Framework\Customizer_Framework;

$customizer = Customizer_Framework::init();
$section    = $customizer->get_section( 'advertisement' );

$customizer->control( 'textarea', 'mwt-google-matched-content', [
	'label'       => __( 'Google Matched Content', 'snow-monkey' ),
	'description' => __( 'When pasting the code of the matched content, related posts are replaced with advertisements.', 'snow-monkey' ),
	'type'        => 'option',
	'priority'    => 120,
] );

$control = $customizer->get_control( 'mwt-google-matched-content' );
$control->join( $section );
