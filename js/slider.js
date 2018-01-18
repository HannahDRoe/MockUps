// Initalize Slick Slider
  $(document).ready(function () {
        $(".top-slider").slick({
          	dots: true,
          	arrows: true,
          	mobileFirst: true,
          	infinite: false,
          	draggable: false,
          	prevArrow:"<img class='slick-prev' src='css/img/slider-arrows/whiteArrowPrev.svg'>",
      		  nextArrow:"<img class='slick-next' src='css/img/slider-arrows/whiteArrowNext.svg'>",
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
        $(".team-slider").slick({
          	dots: true,
      			arrows: true,
            slidesToShow: 4,
            draggable: false,
            prevArrow:"<img class='slick-prev' src='css/img/slider-arrows/greyArrowPrev.svg'>",
            nextArrow:"<img class='slick-next' src='css/img/slider-arrows/greyArrowNext.svg'>",
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
      });

    })
