<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_Customizer_Framework\Customizer_Framework;

$customizer = Customizer_Framework::init();
$panel      = $customizer->get_panel( 'seo-sns' );
$section    = $customizer->get_section( 'share-buttons' );

$customizer->control( 'select', 'mwt-share-buttons-type', [
	'type'     => 'option',
	'label'    => __( 'Type', 'snow-monkey' ),
	'priority' => 110,
	'default'  => 'balloon',
	'choices'  => [
		'balloon'    => __( 'Balloon', 'snow-monkey' ),
		'horizontal' => __( 'Horizontal', 'snow-monkey' ),
		'icon'       => __( 'Icon', 'snow-monkey' ),
		'block'      => __( 'Block', 'snow-monkey' ),
		'official'   => __( 'Official', 'snow-monkey' ),
	],
] );

$control = $customizer->get_control( 'mwt-share-buttons-type' );
$control->join( $section )->join( $panel );
