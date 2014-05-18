
<?php 
$args = array( 'post_type' => 'post');
$loop = new WP_Query( $args ); ?>

            <?php 
                while ( $loop->have_posts() ) : $loop->the_post();?>

		<article>
		    

		<?php

			//der Videoplayer
		    include 'parts/modules/video.php';

		    //die Timeline
		    include 'parts/modules/timeline.php';

		    //AutorenProfile unter dem Beitrag
		    include 'parts/modules/autorenprofil.php';

		    //AutorenProfile unter dem Beitrag
		    include 'parts/modules/textContent.php';

		    //teaser zu den naechsten Beitraegen
		    include 'parts/modules/related.php';

		    ?>  
		</article>
<?php endwhile; ?>