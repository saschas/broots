<?php 
$args = array( 'post_type' => 'projects');
$loop = new WP_Query( $args ); ?>
<div id="menu"></div>
<div class='subnavi-container ipad'>
	
	<div class='subnavi'>
		<div class='inner'>
			<?php 
				while ( $loop->have_posts() ) : $loop->the_post(); 

					$time = get_field('uhrzeit');
					$projektName = get_the_title();
					echo '<div class="slide info">';
						//echo '<time>'.$time.'</time>';
						$einstieg = get_field('einstiegsartikel');
								if( $einstieg ):
									foreach( $einstieg as $einstiegsPunkt ):
										$link = get_permalink( $einstiegsPunkt->ID );
										echo '<a href="'.get_relative_permalink($link).'" class="post-link"><h2>'.$projektName.'</h2></a>';
									endforeach;
								endif;
								
								$autoren = get_field('autorenbeziehung');
								if( $autoren ): 
									echo '<span data-type="author">';
									foreach( $autoren as $autor ): 
										
										$AutorLink = get_permalink( $autor->ID ); 
										//echo $AutorLink;
										
										echo '<span>'.get_the_title( $autor->ID ).'</span> ';
									  endforeach;
									echo '</span>';
									  foreach( $autoren as $autor ):
									  	$zitat = get_field('zitat', $autor->ID);
									  	if(!empty($zitat)){
									  		echo '<blockquote>'.$zitat.'</blockquote>';
									  	}										
									  endforeach; 
								endif;

								$einstieg = get_field('einstiegsartikel');
								if( $einstieg ):
									foreach( $einstieg as $einstiegsPunkt ):
										$link = get_permalink( $einstiegsPunkt->ID );
										echo '<div class="playButton"><a href="'.get_relative_permalink($link).'" class="post-link">Abspielen</a></div>';
									endforeach;
								endif;
					echo '</div>';
				endwhile; 
			?>		
			</div>
		</div>
	</div>
</div>
