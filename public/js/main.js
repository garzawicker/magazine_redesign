

$(document).ready(function(){

	$('.media button').addClass("pad-left-by-x");

	$(window).scroll(function(){

		var position = $('body').scrollTop();
		$(".magazine-logo").removeClass("magazine-logo-change");
		$(".container-fluid").removeClass("container-fluid-change");
		$(".msudenver-logo").removeClass("msudenver-logo-change");
		console.log(position);

		if(position >= 100) {
			$(".container-fluid").toggleClass("container-fluid-change");
			$(".magazine-logo").toggleClass("magazine-logo-change");
			$(".msudenver-logo").toggleClass("msudenver-logo-change");
		}
		

	});


});

