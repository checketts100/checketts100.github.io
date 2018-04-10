$(".slider > div:gt(0)").hide();

setInterval(function() {
	$('.slider > div:first-child')
		.fadeOut()
		.next()
		.fadeIn()
		.end()
		.appendTo('.slider');
}, 5000);