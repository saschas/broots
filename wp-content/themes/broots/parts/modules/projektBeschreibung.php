<?php
$posts = get_field('projekt');
if( $posts ):
    foreach( $posts as $post): // variable must be called $post (IMPORTANT)
        setup_postdata($post);

        	$headline = get_the_title();
        	echo '<section class="hauptprojekt">';
	        	echo '<h2>'.$headline.'</h2>';
	            the_field('beschreibung');
	        echo '</section>';
        endforeach;
wp_reset_postdata();
endif;
?>
