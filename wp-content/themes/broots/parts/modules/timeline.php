<?php
while ( have_rows('videosource') ) : the_row();

echo '<div class="timeline"><div class="buffered"><div class="inner"></div></div><div class="current"></div>';
            
            $num = 0;
            while ( have_rows('sprungmarken') ) : the_row();
            $num++;
            $zeit = get_sub_field('zeit');
            $artikel = get_sub_field('artikel');


                echo '<div class="box info'.$num.'" data-time="'.$zeit.'"><div class="inner">';
              
                    // display a sub field value
                
                echo '<time>'.$zeit.'</time>';
                

                if( $artikel ):
                    foreach( $artikel as $link ): 
                        $sprungmarkenLink = get_permalink( $link->ID );
                        $sprungmarkenHeadline = get_the_title( $link->ID ); 
                        echo '<h3>'.$sprungmarkenHeadline.'</h3>';
                      endforeach;
                endif;

                echo '</div></div>';
            endwhile;


        echo '</div>';

    endwhile;

?>