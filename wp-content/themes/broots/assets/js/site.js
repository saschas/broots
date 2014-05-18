jQuery(document).ready(function($){

//mobile switch
function detectmob() { 
if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
   return true;
 }
else {
   return false;
 }
}

if(detectmob()){
 window.location = 'http://broots.brut-magazin.de/mobile.html';
}
else{}
//end of mobile switch

	/*
	var options = {
	  	panelSelector: '.section',
	  	directionThreshold: 10,
	  	slideSpeed: 200
	};

	$('body').panelSnap(options);
*/

	var $subnaviContainerWidth,$elementsToMove,$handler,$hoverClicker,$clicker;

	$handler = '.subnavi-container, div#menu';
	$hoverClicker = '.subnavi-container,#content, footer,#menu, .main-wrapper';
	$clicker = 'div#menu';

	$subnaviContainerWidth = 425;
	$elementsToMove = '';


//Events


	$('.startLink').click(function(){
		$('html,body').animate({scrollTop: window.innerHeight}).removeAttr('style');
	});

	$($handler).click(function(){
		if($('.subnavi-container').hasClass('open')){
			$($hoverClicker).addClass('closed').removeClass('open');
			$('body').css({
				'overflow-y':'visible'
			});
		}
		else{
			$($hoverClicker).addClass('open').removeClass('closed');
			$('body').css({
				'overflow-y':'hidden'
			});
		}
	});

	/*
		function(){
			$($hoverClicker).addClass('open').removeClass('closed');
			$('body').css({
				'overflow-y':'hidden'
			});
		},
		function(){
			$($hoverClicker).addClass('closed').removeClass('open')
			
	});//end of hoverClickToggle
*/
	window.onscroll = function () {
			var $timelineContainer = $('#content');
			var $timeline = $('.timeline');
			var $body = $('body');
			//var $timelineLarge = $('.timeline.animationHeightIn');
			var height = $(this).height();
			
			var $timelineTopSmall = $timelineContainer.offset().top + height-50;
			
			var $scrollTop = $(this).scrollTop();

			//wenn es das video erreicht
			if($scrollTop>=$timelineContainer.offset().top && $scrollTop<=$timelineContainer.offset().top+height-300){
				$timeline.addClass('animationHeightIn').removeClass('animationHeightOut');
			}
			else{
				$timeline.removeClass('animationHeightIn').addClass('animationHeightOut');
			}

			var $startVideo = $('#video_start').get(0);
			if($scrollTop>=$timelineContainer.offset().top-300){
				$startVideo.pause();
			}
			else{
				//console.log('paused');
				$startVideo.play();
			}

			//wenn es die Timeline erreicht
			if($scrollTop>=$timelineTopSmall){
				$body.addClass('downUnder');
				$timeline.addClass('fixed');
			}
			else{
				$timeline.removeClass('fixed');
				$body.removeClass('downUnder');
			}
			//console.log($scrollTop,$timelineTop)
	};

	$('.play.start').click(function(){
	});


});