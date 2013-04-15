

$(document).ready(function(){
	sizedebuggin()


	$('.media button').addClass("pad-left-by-x");

	$(window).scroll(function(){

		var position = $('body').scrollTop();
		$(".magazine-logo").removeClass("magazine-logo-change");
		$(".container-fluid").removeClass("container-fluid-change");
		$(".msudenver-logo").removeClass("msudenver-logo-change");
		// console.log(position);

		if(position >= 100) {
			$(".container-fluid").toggleClass("container-fluid-change");
			$(".magazine-logo").toggleClass("magazine-logo-change");
			$(".msudenver-logo").toggleClass("msudenver-logo-change");
		}
	});
});



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

