

$(document).ready(function(){
	// remove for production
	sizedebuggin();


	$('.media button').addClass("pad-left-by-x");

	$(window).scroll(function(){
		var position = $('body').scrollTop();
		var width = $(window).width();
		$(".magazine-logo").removeClass("magazine-logo-change");
		$(".container-fluid").removeClass("container-fluid-change");
		$(".msudenver-logo").removeClass("msudenver-logo-change");

		// reset image path 
		// changeImagePath("img/responsive/msud-logo-A.png");

		if(position > 10 || width > 550) {
			// changeImagePath();
			$(".container-fluid").toggleClass("container-fluid-change");
			$(".magazine-logo").toggleClass("magazine-logo-change");
			$(".msudenver-logo").toggleClass("msudenver-logo-change");
		}
	});
});

function changeImagePath(path){
	var _path = path ||  "img/responsive/msud-logo-C.png";
	$("img.msudenver-logo").attr('src', _path);
	// $(".msudenver-logo").css("top", "5px");
}


// remove for production

function sizedebuggin(){
	var container = $('#content-width');
	// on load 
	container.text(" "+ $(window).width());

	// on resize
	$(window).resize(function(){
		container.text(" "+ $(window).width());
	});
}

