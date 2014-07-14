
$(document).ready(function(){
	'use strict' ;

	var location1 = "http://msudenver.edu/magazine/";
	var location2 = "http://sitemanager.msudenver.edu/m/";
	var location3 = "http://msudenver.edu/m/";


	var docLocation =  document.location.href;

	// make thumbails clickable if location == main magainze site
	if(docLocation === location1 || docLocation === location2 || docLocation === location3){
		// makes magazine preview clickable 
		$(".magazine-preview, .thumbnail, .carousel-caption").click(function(){
			var ulr = $(this).data().href ;
			window.open(ulr,"_self");
		});
	}else{
		// reset cursor if not on main magainze site
		$('.thumbnail').css('cursor', 'inherit');
	}


	var width_threshold = 1200;

	// remove for production
	sizedebuggin();



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

