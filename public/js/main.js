

$(document).ready(function(){

	$('.media button').addClass("pad-left-by-x");

	$(window).scroll(function(){

		var position = $('body').scrollTop();

		if(position !== 0) {
			$(".magazine-logo").removeClass("magazine-logo-change");
			$(".container-fluid").removeClass("container-fluid-change");
		}else if(position ===0){
			// $(".magazine-logo").toggleClass("magazine-logo-change");
		}
		$(".container-fluid").toggleClass("container-fluid-change");
		$(".magazine-logo").toggleClass("magazine-logo-change");

	});


});

