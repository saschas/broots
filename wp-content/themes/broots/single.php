<?php
/**
 * The Template for displaying all single posts
 *
 * Please see /external/starkers-utilities.php for info on Starkers_Utilities::get_template_parts()
 *
 * @package 	WordPress
 * @subpackage 	Starkers
 * @since 		Starkers 4.0
 */
?>



<?php 
$post = get_post($_POST['id']);

if ( have_posts() ) while ( have_posts() ) : the_post();

	//der Videoplayer
	include 'parts/modules/video.php';

	//die Timeline
	include 'parts/modules/timeline.php';

	//AutorenProfile unter dem Beitrag
	include 'parts/modules/autorenprofil.php';

	//AutorenProfile unter dem Beitrag
	include 'parts/modules/textContent.php';

	//AutorenProfile unter dem Beitrag
	include 'parts/modules/projektBeschreibung.php';

	//teaser zu den naechsten Beitraegen
	include 'parts/modules/related.php';

	//footer
	include 'parts/shared/footer.php';

endwhile; ?>
