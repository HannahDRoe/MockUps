$(document).foundation();
$('.menu-btn').click(function(event) {
	event.preventDefault();
	$('.menu-btn').removeClass('active');
	$(this).addClass('active');
});
$('.work-btns').click(function(event) {
	event.preventDefault();
	$('.work-btns').removeClass('selected');
	$(this).addClass('selected');
});

