jQuery(document).ready(function($){


//mobile switch
function detectmob() { 
if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){
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
	$hoverClicker = '.subnavi-container';
	$clicker = 'div#menu';

	$subnaviContainerWidth = 425;
	$elementsToMove = '#content, footer, .timeline.fixed';
	$('.startLink').click(function(){
		$('html,body').animate({
			top:'100%'
		},500);
	});




	$($handler).hoverClickToggle(
		function(){
			$($hoverClicker).animate({
				left:'0px'
			},250);
			$('body').css({
				'overflow-y':'hidden'
			});
			$('#menu').animate({
				left:'475px'
			},250);
			$($elementsToMove).animate({
				left:$subnaviContainerWidth+'px'
			},250);
		},
		function(){
			$($hoverClicker).animate({
				left:-$subnaviContainerWidth+'px'
			},250);
			$('body').css({
				'overflow-y':'visible'
			});
			$('#menu').animate({
				left:'40px'
			},250);
			$($elementsToMove).animate({
				left:'0px'
			},250);
	});//end of hoverClickToggle

	$('.timeline').hoverClickToggle(
		function(){
			$('.timeline').removeClass('animationHeightOut').addClass('animationHeightIn');
		},function(){
			$('.timeline').removeClass('animationHeightIn').addClass('animationHeightOut');
	});

	window.onscroll = function () {
			var $timelineContainer = $('#content');
			var $timeline = $('.timeline');
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
			if($scrollTop>=$timelineContainer.offset().top){
				$startVideo.pause();
			}
			else{
				//console.log('paused');
				$startVideo.play();
			}

			//wenn es die Timeline erreicht
			if($scrollTop>=$timelineTopSmall){
				$('body').addClass('downUnder');
				$timeline.addClass('fixed');
			}
			else{
				$timeline.removeClass('fixed');
				$('body').removeClass('downUnder');
			}
			//console.log($scrollTop,$timelineTop)
	};


});