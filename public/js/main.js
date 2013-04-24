
$(document).ready(function(){
	'use strict' ;

	var width_threshold = 1200;

	// remove for production
	sizedebuggin();

	// makes magazine preview clickable 
	$("section.magazine-preview").click(function(){
		var ulr = $(this).data().href ;
		window.open(ulr, '_blank');
	});

	// scrollTop function
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		var width = $(window).width();
		$(".magazine-logo").removeClass("magazine-logo-change");
		$(".container-fluid").removeClass("container-fluid-change");
		$(".msudenver-logo").removeClass("msudenver-logo-change");

		if( position > 10 && width > width_threshold) {
			$(".container-fluid").toggleClass("container-fluid-change");
			$(".magazine-logo").toggleClass("magazine-logo-change");
			$(".msudenver-logo").toggleClass("msudenver-logo-change");
		}
	});
});



// remove for production  dlsamdlsa

function sizedebuggin(){
	var container = $('#content-width');
	// on load 
	container.text(" "+ $(window).width());

	// on resize
	$(window).resize(function(){
		container.text(" "+ $(window).width());
	});
}

