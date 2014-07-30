
$(document).ready(function(){
	'use strict' ;

	var width_threshold = 900;
	var href = document.location.href;
	
	// Turns elements with class .clickable into links
	$(".clickable")
		.click(function(event) {
		if ($(this).data().href) {
			//event.preventDefault()
			return window.open($(this).data().href, "_self");
		}
	});


	// scrollTop function
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		var width     =  $(window).width();
		$(".magazine-logo").removeClass("magazine-logo-change");
		$(".container-fluid").removeClass("container-fluid-change");
		$(".msudenver-logo").removeClass("msudenver-logo-change");

		if( position > 15 && width > width_threshold) {
			$(".container-fluid").toggleClass("container-fluid-change");
			$(".magazine-logo").toggleClass("magazine-logo-change");
			$(".msudenver-logo").toggleClass("msudenver-logo-change");
		}

	});
});
