<?php
echo '<div class="content">';
while ( have_rows('videosource') ) : the_row();
    
        // display a sub field value
        $posterObj = get_sub_field('poster');
        $posterLink = $posterObj['url'];
        
        //MP4
        $MP4Url = get_sub_field('mp4');
        $MP4Mime = 'video/mp4';
        
        //OGG
        $OGGUrl = get_sub_field('ogg');
        $OGGMime = 'video/ogg';
        
        //WebM
        $webMUrl = get_sub_field('webm');
        $webMMime = 'video/webm';
        
        $rootVerzeichnis = 'http://broots.brut-magazin.de/wp-content/uploads/video/desktop/';
        echo '<div class="play"></div>';
        echo '<div class="loader"></div>';

        echo '<div class="video"><video id="video_background" preload="true" poster="'.$posterLink.'">';
        	echo '<source src="'.$rootVerzeichnis.$MP4Url.'" type="'.$MP4Mime.'">';
        	echo '<source src="'.$rootVerzeichnis.$OGGUrl.'" type="'.$OGGMime.'">';
        	echo '<source src="'.$rootVerzeichnis.$webMUrl.'" type="'.$webMMime.'">';
        echo '</video></div>';
    
endwhile;

$posts = get_field('nextread');
if( $posts ):
    foreach( $posts as $post): // variable must be called $post (IMPORTANT)
        setup_postdata($post);
            while ( have_rows('videosource') ) : the_row();
 
                // display a sub field value
                $imageObj = get_sub_field('poster');
                $image = $imageObj['url'];
 
            endwhile;
           // $posts = get_field('projekt');
            echo '<section class="nextread" style="background-image:url('.$image.')">';
                echo '<div class="inner">';
                    $link = get_relative_permalink(get_the_permalink());
                    $headline = get_the_title();
                    echo '<a href="'.$link.'" class="post-link">';
                        echo '<h2>'.$headline.'</h2>';
                        the_field('text');

                        $spitzPost = get_field('projekt');
                        if( $spitzPost ):
                            foreach( $spitzPost as $post): // variable must be called $post (IMPORTANT)
                                setup_postdata($post);
                                    $header = get_the_title();
                                    echo '<span data-type="spitzmarke">'.$header.'</span>';
                                endforeach;
                        wp_reset_postdata();
                        endif;
                    echo '</a>';                    
                echo '</div>';
            echo '</section>';
        endforeach;
wp_reset_postdata();
endif;

echo '</div>';
?>
