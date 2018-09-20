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
})