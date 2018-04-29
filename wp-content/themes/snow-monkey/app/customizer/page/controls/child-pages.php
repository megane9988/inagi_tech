<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_Customizer_Framework\Customizer_Framework;

$customizer = Customizer_Framework::init();
$section    = $customizer->get_section( 'page' );

$customizer->control( 'checkbox', 'mwt-display-child-pages', [
	'transport' => 'postMessage',
	'label'     => __( 'Display child pages in page', 'snow-monkey' ),
	'priority'  => 110,
	'type'      => 'option',
	'default'   => true,
	'active_callback' => function() {
		return ( snow_monkey_get_child_pages( get_the_ID() ) ) ? true : false;
	},
] );

$control = $customizer->get_control( 'mwt-display-child-pages' );
$control->join( $section );
$control->partial( [
	'selector'            => '.p-child-pages',
	'container_inclusive' => true,
	'render_callback'     => function() {
		if ( get_option( 'mwt-display-child-pages' ) ) {
			get_template_part( 'template-parts/child-pages' );
		}
	},
] );
