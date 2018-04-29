<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

$header_image = snow_monkey_get_page_header_image_url();

if ( empty( $header_image ) && ! snow_monkey_is_output_page_header_title() ) {
	return;
}
?>

<div
	class="c-page-header js-bg-parallax"
	style="background-image: url(<?php echo esc_url( $header_image ); ?>);"
	data-has-content="<?php echo esc_attr( snow_monkey_is_output_page_header_title() ? 'true' : 'false' ); ?>"
	data-has-image="<?php echo esc_attr( empty( $header_image ) ? 'false' : 'true' ); ?>"
	>

	<?php if ( snow_monkey_is_output_page_header_title() ) : ?>
		<div class="c-container">
			<div class="c-page-header__content">
				<h1 class="c-page-header__title"><?php the_title(); ?></h1>

				<?php if ( is_singular( 'post' ) ) : ?>
					<div class="c-page-header__meta">
						<?php get_template_part( 'template-parts/entry-meta' ); ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	<?php endif; ?>
</div>
