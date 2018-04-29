<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

/**
 * Sets entry content styles
 *
 * @param string $selector
 * @return void
 */
function snow_monkey_entry_content_styles( $selector ) {
	$accent_color = get_theme_mod( 'accent-color' );

	$cfs = \Inc2734\WP_Customizer_Framework\Customizer_Framework::styles();

	$cfs->register(
		$selector . ' > h2',
		'border-color: ' . $accent_color
	);

	$cfs->register(
		$selector . ' > table thead th',
		[
			'background-color: ' . $accent_color,
			'border-right-color: ' . $cfs->light( $accent_color ),
			'border-left-color: ' . $cfs->light( $accent_color ),
		]
	);
}
