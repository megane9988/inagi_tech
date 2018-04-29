<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

$header_position = snow_monkey_get_header_position();
$default_header_position = snow_monkey_get_default_header_position();
?>
<header class="l-header" role="banner" data-l-header-type="<?php echo esc_attr( $header_position ); ?>" data-snow-monkey-default-header-position="<?php echo esc_attr( $default_header_position ); ?>">
	<?php get_template_part( 'template-parts/center-header' ); ?>

	<?php if ( has_nav_menu( 'global-nav' ) ) : ?>
		<div class="l-header__drop-nav" aria-hidden="true">
			<div class="c-container">
				<?php get_template_part( 'template-parts/global-nav' ); ?>
			</div>
		</div>
	<?php endif; ?>
</header>
