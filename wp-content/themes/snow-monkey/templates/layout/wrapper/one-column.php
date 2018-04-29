<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> data-sticky-footer="true">
<?php get_template_part( 'vendor/inc2734/mimizuku-core/src/view/template-parts/head' ); ?>

<body <?php body_class( [ 'l-body--one-column' ] ); ?> id="body">
	<?php do_action( 'snow_monkey_prepend_body' ); ?>

	<?php get_template_part( 'template-parts/drawer-nav' ); ?>
	<div class="l-container">
		<?php wpvc_get_header(); ?>

		<div class="l-contents" role="document">
			<?php
			if ( snow_monkey_is_output_page_header() ) {
				get_template_part( 'template-parts/page-header' );
			}
			?>

			<div class="c-container">
				<?php
				if ( in_array( get_theme_mod( 'breadcrumbs-position' ), [ 'default', 'content-width' ] ) ) {
					get_template_part( 'template-parts/breadcrumbs' );
				}
				?>

				<div class="l-contents__inner">
					<main class="l-contents__main" role="main">
						<?php $_view_controller->view(); ?>
					</main>
				</div>

				<?php
				if ( in_array( get_theme_mod( 'breadcrumbs-position' ), [ 'bottom', 'bottom-content-width' ] ) ) {
					get_template_part( 'template-parts/breadcrumbs' );
				}
				?>
			</div>
		</div>

		<?php wpvc_get_footer(); ?>
	</div>

<?php wp_footer(); ?>
</body>
</html>
