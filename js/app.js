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
$('#load-btn').click(function(e){
	e.preventDefault();
	if ($('.hide-me').hasClass('hide')) {
		$('.hide-me').removeClass('hide');
		$('#load-btn').text('Read Less...');
	}else {
		$('.hide-me').addClass('hide');
		$('#load-btn').text('Load More...')
	}


});
