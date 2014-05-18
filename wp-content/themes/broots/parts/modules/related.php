<?php
	$related = get_field('related');
	if( $related ): 
		
	echo '<div class="relatedContent">';
		foreach( $related as $relatedArticle ): 

			$relatedArticleLink = get_permalink( $relatedArticle->ID );
			$relatedArticleID = get_the_id( $relatedArticle->ID ); 
			$featureBild = $url = wp_get_attachment_url( get_post_thumbnail_id( $relatedArticle->ID) );
			
			echo '<div class="teaser" style="background-image:url('.$featureBild.')">';		
				echo '<a href="'.get_relative_permalink($relatedArticleLink).'" class="post-link backgroundLink">';
					echo '<div class="inner">';					
								echo '<div class="info">';
									echo '<h3><a href="'.get_relative_permalink($relatedArticleLink).'" class="post-link">'.get_the_title( $relatedArticle->ID ).'</a></h3>';
								//the_field('text',$relatedArticle->ID);
								echo '</div>';//end of info
								echo '<a href="'.get_relative_permalink($relatedArticleLink).'" class="post-link playButton"><div class="play"></div></a>';
							
					echo '</div>';//end of inner
				echo '</a>';
			echo '</div>';//end of teaser
		endforeach;
	endif;
	echo '</div>';
?>