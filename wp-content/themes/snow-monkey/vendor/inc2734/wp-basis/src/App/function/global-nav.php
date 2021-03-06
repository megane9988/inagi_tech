<?php
/**
 * @package inc2734/wp-basis
 * @author inc2734
 * @license GPL-2.0+
 */

/**
 * Customizing WordPress navigation for Basis
 *
 * @param string $theme_location
 * @return void
 */
function wp_basis_global_navigation( $theme_location ) {
	new Inc2734\WP_Basis\App\Model\Global_Nav( $theme_location );
}
