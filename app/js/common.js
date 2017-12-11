$(function() {
	$('.reviews').owlCarousel({
		loop:true,
		items:4,
		nav: false,
		smartSpeed:700,
		responsiveClass: true,
		pagination: false,
		dots: true,
		//dotsData: true,
		stagePadding:30,		
		responsive:{
			0:{
				dotsEach:true,
				items: 1//1 на этом разрешении

			},
			800:{
				dotsEach:true,
				items: 4
			},
			1100: {
				dotsEach:true,
				items: 4,
				
			}
		},
		
	})

	
	//$('.owl-nav').removeClass('disabled');
	
});

$(window).on('load', function(){
	$('.preloader').delay(2000).fadeOut('slow');
	 //убрать прелодер со скоростью слоу
})
