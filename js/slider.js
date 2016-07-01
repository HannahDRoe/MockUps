// Initalize Slick Slider
  $(document).ready(function () {
        $(".top-slider").slick({
          	dots: true,
          	arrows: true,
          	mobileFirst: true,
          	infinite: false,
          	draggable: false,
          	prevArrow:"<img class='slick-prev' src='css/img/arrowPrev.svg'>",
      		nextArrow:"<img class='slick-next' src='css/img/arrowNext.svg'>",
	   		responsive: [{
	   			breakpoint:1024,
	   			settings: {
	   				arrows: true
	   			},
	   			 breakpoint: 600,
	   			 settings:{
	   			 	arrows: true
	   			 }
	   		}],
	
        });

    })