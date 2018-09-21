$(window).on('load', function() {

	$window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= 1 ) {
	        $('#header-desktop').addClass('scroll');
	    } else {
	    	$('#header-desktop').removeClass('scroll');
	    };
	});

	$('.burger').click(function() {
		$(this.parentNode).parent().parent().toggleClass('active');
	})

	$('#header-desktop .wrapper .container .li-link a')
		.mouseover(function() {
			$('#header-desktop .wrapper .container .li-link a').addClass('active');
		})
		.mouseout(function() {
			$('#header-desktop .wrapper .container .li-link a').removeClass('active');
	});


	function animCarousel(){

		var delay = 5000;

		$('.card.order-3').removeClass('order-1 order-2 order-3').addClass('hide-top');
		$('.card.order-2').removeClass('order-1 order-2 order-3').addClass('order-3');
		$('.card.order-1').removeClass('order-1 order-2 order-3').addClass('order-2');
		setTimeout(function() {
			$('.card.hide-top').removeClass('hide-top').addClass('order-1');
			$('.li-el .el').removeClass('active');
			if ($('.card:nth-child(1)').hasClass('order-3')) {
				$('.li-el .el:nth-child(1)').addClass('active');
			} else if ($('.card:nth-child(2)').hasClass('order-3')) {
				$('.li-el .el:nth-child(2)').addClass('active');
			} else if ($('.card:nth-child(3)').hasClass('order-3')) {
				$('.li-el .el:nth-child(3)').addClass('active');
			};
			setTimeout(function() {
				animCarousel();
			}, delay);
		}, 200);
	}

	animCarousel();

	$('#common-section-quotes .wrapper .container-nav .nav').click(function(){
		let num = $(this).attr('data-liquote');

		$('#common-section-quotes .wrapper .container-nav .nav').removeClass('active');

		if(!$('.li-quotes:nth-child('+num+')').hasClass('active')) {

			$('.li-quotes').removeClass('active');
			setTimeout(function(){
				$('#common-section-quotes .wrapper .container-nav .nav:nth-child('+num+')').addClass('active');

				$('.li-quotes').show();
				$('.li-quotes:not(:nth-child('+num+')').hide();
				$('.li-quotes:nth-child('+num+')').addClass('active');
			}, 500)
		}
	});
	if (window.matchMedia("(max-width: 700px)").matches) {
		$('.li-quotes').addClass('active');
	}

})