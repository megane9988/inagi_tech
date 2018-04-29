<?php
/**
 * @package inc2734/wp-awesome-widgets
 * @author inc2734
 * @license GPL-2.0+
 */
?>

<?php echo wp_kses_post( $args['before_widget'] ); ?>

	<div
		class="wpaw-pr-box wpaw-pr-box--<?php echo esc_attr( $args['widget_id'] ); ?>"
		id="wpaw-pr-box-<?php echo esc_attr( $args['widget_id'] ); ?>"
		style="background-color: <?php echo esc_attr( $instance['bg-color'] ); ?>"
		>

		<div class="wpaw-pr-box__inner">

			<?php if ( ! empty( $instance['title'] ) ) : ?>
				<h2 class="wpaw-pr-box__title"><?php echo esc_html( $instance['title'] ); ?></h2>
			<?php endif; ?>

			<?php if ( ! empty( $instance['lead'] ) ) : ?>
				<div class="wpaw-pr-box__lead">
					<?php echo wp_kses_post( wpautop( $instance['lead'] ) ); ?>
				</div>
			<?php endif; ?>

			<div class="wpaw-pr-box__row wpaw-pr-box__row--<?php echo esc_attr( $instance['sm-columns'] ); ?> wpaw-pr-box__row--md-<?php echo esc_attr( $instance['md-columns'] ); ?>  wpaw-pr-box__row--lg-<?php echo esc_attr( $instance['lg-columns'] ); ?>">
				<?php foreach ( $instance['items'] as $item ) : ?>
					<div class="wpaw-pr-box__item">
						<?php if ( ! empty( $item['src'] ) ) : ?>
							<div class="wpaw-pr-box__item-figure wpaw-pr-box__item-figure--<?php echo esc_attr( $instance['thumbnail-aspect-ratio'] ); ?>"
								style="background-image: url( <?php echo esc_url( wp_get_attachment_image_url( $item['src'], $instance['thumbnail-size'] ) ); ?> );"
							></div>
						<?php endif; ?>

						<?php if ( ! empty( $item['title'] ) ) : ?>
							<div class="wpaw-pr-box__item-title"><?php echo esc_html( $item['title'] ); ?></div>
						<?php endif; ?>

						<?php if ( ! empty( $item['summary'] ) ) : ?>
							<div class="wpaw-pr-box__item-summary">
								<?php echo wp_kses_post( wpautop( $item['summary'] ) ); ?>
							</div>
						<?php endif; ?>
					</div>
				<?php endforeach; ?>
			</div>

			<?php if ( ! empty( $instance['link-url'] ) && ! empty( $instance['link-text'] ) ) : ?>
				<div class="wpaw-pr-box__action">
					<a class="wpaw-pr-box__more" href="<?php echo esc_url( $instance['link-url'] ); ?>"><?php echo esc_html( $instance['link-text'] ); ?></a>
				</div>
			<?php endif; ?>

		</div>
	</div>

<?php echo wp_kses_post( $args['after_widget'] ); ?>
