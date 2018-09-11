$(window).on('load', function() {

	$window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= 1 ) {
	        $('#header-desktop').addClass('scroll');
	    } else {
	    	$('#header-desktop').removeClass('scroll');
	    };
	});
})