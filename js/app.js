$(document).foundation();
$('.button').click(function(event) {
	event.preventDefault();
	$('.button').removeClass('active');
	$(this).addClass('active');
});

