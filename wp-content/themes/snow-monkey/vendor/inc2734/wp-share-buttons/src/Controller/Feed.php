<?php
/**
 * @package inc2734/wp-share-buttons
 * @author inc2734
 * @license GPL-2.0+
 */

namespace Inc2734\WP_Share_Buttons\Controller;

/**
 * Feed button
 */
class Feed extends Controller {

	public function _shortcode( $attributes ) {
		if ( ! isset( $attributes['post_id'] ) ) {
			return;
		}

		$attributes = shortcode_atts( [
			'type'    => 'balloon',
			'post_id' => '',
		], $attributes );

		return $this->render( 'feed/feed', [
			'type'    => $attributes['type'],
			'post_id' => $attributes['post_id'],
		] );
	}
}
