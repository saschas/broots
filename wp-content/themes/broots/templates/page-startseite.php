<?php

/*
Template Name: Startseite Broots
*/

$parts = array( 
        //Parts to load at first
        'parts/shared/html-header',
        'parts/shared/header',
        'parts/shared/sidebar'
        );

Starkers_Utilities::get_template_parts( $parts );

?>



<?php

echo '<div class="vorschau section"><div class="inner">';

  $args = array(
        'post_type' => 'page',
        'post_id' => 2,
        'post_per_page' => 1
    );

    $post_query = new WP_Query($args);
if($post_query->have_posts() ) {
  while($post_query->have_posts() ) { $post_query->the_post();
    while ( have_rows('startvideoholder') ) : the_row();
        // display a sub field value
        $posterObj = get_sub_field('poster');
        $posterLink = $posterObj['url'];
        
        //MP4
        $MP4Obj = get_sub_field('mp4');
        $MP4Mime = $MP4Obj['mime_type'];
        $MP4Url = $MP4Obj['url'];
        
        //OGG
        $OGGObj = get_sub_field('ogg');
        $OGGMime = $OGGObj['mime_type'];
        $OGGUrl = $OGGObj['url'];
        

        //WebM
        $webMObj = get_sub_field('webm');
        $webMMime = $webMObj['mime_type'];
        $webMUrl = $webMObj['url'];

        echo '<div class="video"><video id="video_start" preload="true" poster="'.$posterLink.'" autoplay="false" loop>';
            echo '<source src="'.$MP4Url.'" type="'.$MP4Mime.'">';
            echo '<source src="'.$OGGUrl.'" type="'.$OGGMime.'">';
            echo '<source src="'.$webMUrl.'" type="'.$webMMime.'">';
        echo '</video></div>';
    endwhile;

    echo '<div class="links">';
        while ( have_rows('sprungmarkenholder') ) : the_row();
            
            //WebM
            $startTime = get_sub_field('starttime');
            $endTime = get_sub_field('endtime');

            $titel = get_sub_field('titel');
            $color = get_sub_field('color');
            //beziehung
            //

            $posts = get_sub_field('beziehung');
            if( $posts ):
                foreach( $posts as $p ):
                    echo '<a href="'.get_relative_permalink(get_permalink( $p->ID )).'" data-start="'.$startTime.'" data-end="'.$endTime.'" class="startLink post-link" style="border:0.15em solid '.$color.'; color:'.$color.';">'.$titel.'</a>';
                endforeach;
            endif;
        
        endwhile;
    echo '</div>';
  }
}

echo '</div></div>';
 ?>
      

<div id="content" class="section"></div>


<!--?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer' ) ); ?-->