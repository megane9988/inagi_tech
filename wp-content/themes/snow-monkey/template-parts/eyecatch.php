<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

if ( ! has_post_thumbnail() ) {
	return;
}
?>

<div class="c-eyecatch">
	<?php the_post_thumbnail( 'large' ); ?>
</div>
