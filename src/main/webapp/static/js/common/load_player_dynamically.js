$(document).ready(function() {	
	$('.item_wrapper').delegate('.icon-play-episode', 'click',  function () {
		var currentDiv=$(this).closest("div.item_wrapper");
		var playerDiv = currentDiv.find("div.not_shown")
		playerDiv.removeClass('not_shown').addClass('shown');
		var jwpId = currentDiv.find("div.jwplayer ").attr("id")
		
		// if we load the player, the div containing the player will set the distance to the share, play and download buttons
		currentDiv.find("div.ep_desc").css("margin-bottom","5px");
		
		//and also widen the distance to the share buttonsif they are available
		var shareButtonsDiv = currentDiv.find("div.share_buttons");
		if(shareButtonsDiv.length > 0){
			playerDiv.css("margin-bottom","75px");
		}
		
		$('html, body').animate({
			scrollTop: currentDiv.offset().top
		}, 150);
		if(typeof jwpId != 'undefined'){
			jwplayer(jwpId).play();	
		}			
	 });		
});  