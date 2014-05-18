<?php
	$autoren = get_field('autorenbeziehung');
	if( $autoren ):
		echo '<section class="autor" data-type="author-profil"><div class="inner">';
		
		foreach( $autoren as $autor ):
			echo '<div data-type="author">';
				$AutorLink = get_permalink( $autor->ID ); 
				$bildObj = get_field('bild', $autor->ID);
				$bild = $bildObj['url'];
				$bildTitle = $bildObj['title'];

				
				echo '<span class="autorName">'.get_the_title( $autor->ID ).'</span> ';
				echo '<div class="socialholder">';
					$socialHolder = get_field('socialholder', $autor->ID);
					
					foreach( $socialHolder as $social ):
						echo '<a href="'.$social['link'].'" data-ico="'.$social['dienst'].'" target="_blank">'.$social['link'].'</a>';
					endforeach;//end of social
				echo '</div>';
				echo '<img src="'.$bild.'" alt="'.$bildTitle.'" class="autorImg"/>';
			echo '</div>';
		  endforeach;
		  echo '<div class="clear"></div>';
		  echo '</div></section>';
	endif;

?>