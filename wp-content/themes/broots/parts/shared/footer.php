	<div class="clear"></div>
<footer id="heythere">
	<div class="inner">
		<?php 
				$root = ($_SERVER['HTTPS'] ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/';
				$url = getUrl();
				echo .$url;
		?>
		<a href="<?php echo $root;?>/brutonline/wp-content/themes/broots/templates/about/index.html">
			<p class="spitzmarke-about">ABOUT</p>
			    <div class="headline-about">
			    <p>broots</p>
			    BRUTs kleiner Bruder.
			    </div>
		</a>
	</div>
</footer>
