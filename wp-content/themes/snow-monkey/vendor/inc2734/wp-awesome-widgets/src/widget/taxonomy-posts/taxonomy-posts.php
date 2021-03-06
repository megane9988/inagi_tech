<?php
/**
 * @package inc2734/wp-awesome-widgets
 * @author inc2734
 * @license GPL-2.0+
 */

/**
 * Recent posts widget
 */
class Inc2734_WP_Awesome_Widgets_Taxonomy_Posts extends Inc2734_WP_Awesome_Widgets_Abstract_Widget {

	/**
	 * @var array
	 */
	protected $_defaults = [
		'title'          => null,
		'taxonomy'       => null,
		'posts-per-page' => 5,
		'show-thumbnail' => 1,
	];

	public function __construct() {
		parent::__construct( false, __( 'WPAW: Taxonomy posts', 'inc2734-wp-awesome-widgets' ) );
	}

	public function update( $new_instance, $old_instance ) {
		$new_instance = shortcode_atts( $this->_defaults, $new_instance );
		return $new_instance;
	}
}

add_action( 'widgets_init', function() {
	register_widget( 'Inc2734_WP_Awesome_Widgets_Taxonomy_Posts' );
} );
