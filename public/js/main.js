var position;

$(document).ready(function(){
	$('.media button').addClass("pad-left-by-x");
	$(window).scroll(function(){
		position = $('body').scrollTop();
		console.log(position);
	});
});