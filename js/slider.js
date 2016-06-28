// Initalize Slick Slider
  $(document).ready(function () {
        $(".top-slider").slick({
          dots: true,
          arrows: true,
          
        //   customPaging : function(slider, i) {
        // var thumb = $(slider.$slides[i]).data('thumb');
        // return '<a><img src="'+thumb+'"></a>';
   // },

	   		responsive: [{
	   			breakpoint:1024,
	   			settings: {
	   				arrows: false
	   			}
	   		}]
        });
    })