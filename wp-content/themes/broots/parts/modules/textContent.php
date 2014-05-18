<?php 
	echo '<div class="project">';
		$headline = get_the_title(); 
	    $teaser = get_field('text');
	    $beschreibung = get_the_content_with_formatting(); //get_the_content();
		
		echo '<article><header>';
		echo '<h1>'.$headline.'</h1>';

		if( $autoren ): 
			echo '<span data-type="author">';
			foreach( $autoren as $autor ): 
				
				$AutorLink = get_permalink( $autor->ID ); 
				//echo $AutorLink;
				
				echo '<span>'.get_the_title( $autor->ID ).'</span>';
			  endforeach;

			echo '</span>';
			echo '<div class="clear"></div></header>';

			echo '<div class="intro">'.$teaser.'</div>';
			  foreach( $autoren as $autor ): 
				$zitat = get_field('zitat', $autor->ID);
				if(!empty($zitat)){
					echo '<blockquote>'.$zitat.'</blockquote>';
				}				
			  endforeach; 
		endif;



		echo $beschreibung;
	echo '</div>';
	?>