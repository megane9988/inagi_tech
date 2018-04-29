<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_Customizer_Framework\Customizer_Framework;

$customizer = Customizer_Framework::init();
$section    = $customizer->get_section( 'design' );

$customizer->control( 'color', 'accent-color', [
	'label'    => __( 'Accent color', 'snow-monkey' ),
	'default'  => '#bd3c4f',
	'priority' => 100,
] );

$control = $customizer->get_control( 'accent-color' );
$control->join( $section );
