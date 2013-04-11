$(document).ready(function(){
	//  add pad left by x amount class
	$('.media button').addClass("pad-left-by-x");

	// $(window).scroll(function(e){
	// 	console.dir(e);
	// 	console.log(e.type);
	// 	$('.container-fluid').css('height', '100px');
	// });

	$(window).scroll(function(){
		var position = $('body').scrollTop();
		$('#black-container').css('height', '150px');
		$('#black-container >img').css("width", "300px");	
		if(position !== 0 ) {
			$('#black-container').css(
				{
					'height':'100px'

				});
			$('#black-container >img').css("width", "10%");
		}
	})
});
