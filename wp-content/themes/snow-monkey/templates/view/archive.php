<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */
?>
<?php get_template_part( 'template-parts/archive-top-widget-area' ); ?>

<div class="c-entry">
	<header class="c-entry__header">
		<?php
		$breadcrumbs = new \Inc2734\WP_Breadcrumbs\Breadcrumbs();
		$breadcrumbs = $breadcrumbs->get();
		$title_item  = end( $breadcrumbs );
		$title       = array_key_exists( 'title', $title_item ) ? $title_item['title'] : '';
		?>
		<h1 class="c-entry__title"><?php echo esc_html( $title ); ?></h1>
	</header>

	<div class="c-entry__content">
		<?php if ( term_description() ) : ?>
			<div class="p-term-description">
				<?php echo wp_kses_post( term_description() ); ?>
			</div>
		<?php endif; ?>

		<div class="p-archive">
			<?php
			$infeed_ads      = get_option( 'mwt-google-infeed-ads' );
			$data_infeed_ads = ( $infeed_ads ) ? 'true' : 'false';
			$archive_layout  = get_theme_mod( 'archive-layout' );
			?>

			<ul class="c-entries c-entries--<?php echo esc_attr( $archive_layout ); ?>" data-has-infeed-ads="<?php echo esc_attr( $data_infeed_ads ); ?>">
				<?php while ( have_posts() ) : ?>
					<?php the_post(); ?>
					<li class="c-entries__item">
						<?php get_template_part( 'template-parts/entry-summary' ); ?>
					</li>
				<?php endwhile; ?>
			</ul>
		</div>

		<?php get_template_part( 'template-parts/pagination' ); ?>
	</div>
</div>
