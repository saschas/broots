jQuery(document).ready(function($){
	var videoWidth,videoHeight;


	
	var normalizeTime = function($time){

		var $trueTime = $time.split(':'),
		    $min = parseFloat($trueTime[0]),  
		    $sek = parseFloat($trueTime[1]);
		    $trueTime = $min*60 + $sek;
		  
		    return $trueTime;
	};

	//holt die Dimensions für das Video
	// 
	// return [newVideoWidth,newVideoHeight]
	// 
	var getVideoDimensions = function ($x,$y) {
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight; 
		var windowProportion = windowWidth / windowHeight;
		var videoProportion = $x / $y;
		var newVideoWidth = 0;
		var newVideoHeight = 0;

		if (windowProportion >= videoProportion) {
			newVideoWidth = windowHeight  * videoProportion; 
			newVideoHeight = 'auto'; //windowHeight;
			/*
			newVideoWidth = 'auto' ;
			newVideoHeight = windowWidth * videoProportion; //windowWidth ;*/
		} else {
			newVideoWidth = windowHeight  * videoProportion; 
			newVideoHeight = 'auto'; //windowHeight;	
		}
		return [newVideoWidth,newVideoHeight];
	};

	//Init 

	var videoEl = function (){
		var video = document.getElementById("video_background");
		var $timestamps = $('.box[data-time]');

		var $duration;
		
		var $videoWidth,$videoHeight,$time;
		video.addEventListener("loadedmetadata", function () {
		    //Duration
		  	$videoWidth = video.videoWidth;
			$videoHeight = video.videoHeight;

			$duration = Math.floor(Math.round(video.duration));
			$.each($timestamps,function(){
				$time = normalizeTime($(this).attr('data-time'));
				var currTimeStamp = Math.round($time * 100 / $duration);
				//console.log(currTimeStamp);
				$(this).timeSet = $time;
				$(this).css({left:currTimeStamp+'%'});
				$(this).click(function(){
					var $curr = normalizeTime($(this).attr('data-time'));

					//console.log($time);
					$('.play').addClass('playing');
					var videoElement = $('#video_background').get(0);
					videoElement.currentTime = $curr;
					$('.play').addClass('playing');
					video.play();
				});
			}); //end of each
			
			var $videoSize = getVideoDimensions($videoWidth,$videoHeight);
			$('#video_background').css({
				width:$videoSize[0],
				height:$videoSize[1]
			});
			
		}, false);//end of loadmetadata

		var $authoren = $('.autor div[data-type="author"]').length;
		if($authoren>1){
			$('.autor div[data-type="author"]').css({float:'left'});
			$('.autor .inner').css({width: '940px',margin: '0 auto', position: 'relative'});
		}

		//on Time Change
		var $currentTimer = $('.timeline .current');
		video.addEventListener("timeupdate", function () {
		  // Current time  
		  var vTime = video.currentTime;
		  var currTime = vTime * 100 / $duration;

		  var $videoCurrentTimeNormalized = Math.round(vTime);
		  $.each($timestamps,function(){
		  		$time = normalizeTime($(this).attr('data-time'));
				//console.log($time,$videoCurrentTimeNormalized);
				if($videoCurrentTimeNormalized >=$time){
					$(this).addClass('saw');
				}else{}
				if($videoCurrentTimeNormalized <$time){
					$(this).removeClass('saw');
				}else{}
			});

		 //  console.log(currTime);
		  $currentTimer.css({width:currTime+'%'});

		  //console.log('vTime: '+vTime, '$duration' + $duration)
		  if($videoCurrentTimeNormalized === $duration){
		  	$('#video_background').addClass('finished');
		  	$('.nextread').animate({right:'-50%',width:'100%'});
		  	$('.video, .timeline, .play').animate({right:'50%'});
		  	//show next Post
		  }
		}, false);

		$('.content .play, video').click(function(){
				var $play = $('.content .play');
			if(!$play.hasClass('playing')){
				$play.addClass('playing');
				video.play();
				$('.timeline').removeClass('animationHeightIn').addClass('animationHeightOut');
			}
			else{
				video.pause();
				$play.removeClass('playing');
			}
		});


		$('.play.playing').click(function(){
			video.pause();
		});

		$('.timeline').click(function(event){
			var offset = $(this).offset();
			var $referenceWidth = window.innerWidth;
            var $jumpToTimeHelper = event.pageX - offset.left;

            var $jumpToTime = $jumpToTimeHelper / $referenceWidth;
            var $toTime = Math.round($duration * $jumpToTime);
            video.currentTime = $toTime;
		});

	}; // end of Videoel

//Ajaxing Content
	var pathname = window.location.pathname;
	var origin = window.location.origin;
	var root = origin+pathname;
	var getContent = function ($link){
		$("#content").load(root+ $link, function( response, status, xhr ) {
			if ( status === "error" ) {
			  var msg = "Sorry but there was an error: ";
			  $('#content').html();
//			  $( "#content" ).text( msg + xhr.status + " " + xhr.statusText );
			}
			if( status === 'success'){

				$('#content').fadeIn();

				//normalize the hash
				var current = $link.split('/')[1];
				
				//set the hash
		        var hash = current;
		        window.location.hash = hash;
		        videoEl();
			}

		});
    };

		
	window.onload = function(){
		var hash = window.location.hash.split('#')[1];

		if(hash === undefined){
			hash = 'Stier';
		}
		else{
			$('html,body').animate({
				top:'100%'
			},500);
		}

		var post_link = '/' + hash;
		
		getContent(post_link);

		//setSize for startVideo
		startVideoSize();
		//startseitenLinks init
		loaditem();		
	};

	var startVideoSize = function(){
		var startVideo = document.getElementById("video_start");
		
			startVideo.play();
		
		startVideo.addEventListener("timeupdate", function () {
		var $videoWidth = startVideo.videoWidth;
		var $videoHeight = startVideo.videoHeight;
			var $videoSize = getVideoDimensions($videoWidth,$videoHeight);
			$('#video_start').css({
				width:$videoSize[0],
				height:$videoSize[1]
			});
		});
	};
	//StartseitenLinks
	var $times =[];
	var loaditem = function(){
		
		$('.vorschau .links a').each(function(){
			
			var $startTime = $(this).attr('data-start');
				$startTime = normalizeTime($startTime);
			var $endTime = $(this).attr('data-end');
				$endTime = normalizeTime($endTime);

			$times.push({ "start": $startTime, "end": $endTime });
		});
	};

//--- Startseiten ----//
	//wenn das Video auf der Startseite laeuft
	$("#video_start").on("timeupdate", function(){

		var $currentTime = Math.round(this.currentTime);
		var $currentBuffer = Math.round(this.buffered.end(0));

		//console.log($currentBuffer);
		$('.buffered .inner').css({width:$currentBuffer+'%'});
		for(var i =0;i<$times.length;i++){
			var $y;
			if($currentTime === $times[i].start){
				$y = i+1;
				$('.vorschau .links a:nth-child('+ $y +')').addClass('onStage'); //console.log('start'+i)
			}
			if($currentTime === $times[i].end){
					$y = i+1;
				$('.vorschau .links a:nth-child('+ $y +')').removeClass('onStage');
			}
		}
		// console.log($currentTime)
    });
		/** To do loads twice weil einfacher link ebenfalls den Hash verändert

		$(window).on('hashchange',function(){
			var location = window.location;
			var hash = window.location.hash.split('#')[1];
			if(hash == undefined){
				hash = 'Stier';
			}
			post_link = '/' + hash;
			getContent(post_link);
			//console.log(pathname);
		});

**/
	//var hashHelper;
    //$.ajaxSetup({cache:false});
    $("body").on('click','a.post-link',function(){
    	var post_link = null;
        	post_link = $(this).attr("href");
        //var location = window.location.href;
        getContent(post_link);
 		//return false;
 		var	loadingGif = [ 'cat','disco','eddy','power','twinpeaks'];
 		var $randNum = Math.floor(Math.random()*loadingGif.length);
 		console.log('$randNum '+$randNum);
 		
        $("#content").html("<div class='loading "+ loadingGif[$randNum] +"'><div class='inner'></div></div>");
    return false;
    });

///////RESIZE


	var setUpDimensions = function(){
		var $videoSize = getVideoDimensions(videoWidth,videoHeight);
			$('#video_background').css({
				width:$videoSize[0],
				height:$videoSize[1]
			});
	};

	window.onresize = setUpDimensions;
	window.onorientationchange = setUpDimensions;

//////
});