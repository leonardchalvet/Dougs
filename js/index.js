$(window).on('load', function() {

	$window = $(window);

	/* HEADER */

	$window.scroll(function() {
	    if ( $window.scrollTop() >= 1 ) {
	        $('#header-desktop').addClass('scroll');
	        $('#header-mobile').addClass('scroll');
	    } else {
	    	$('#header-desktop').removeClass('scroll');
	    	$('#header-mobile').removeClass('scroll');
	    };
	});

	$('.burger').click(function() {
		$(this.parentNode).parent().parent().parent().toggleClass('active');
	})

	$('#header-desktop .wrapper .container .li-link a')
		.mouseover(function() {
			$('#header-desktop .wrapper .container .li-link a').addClass('hide');
		})
		.mouseout(function() {
			$('#header-desktop .wrapper .container .li-link a').removeClass('hide');
	});

	/* END HEADER */


	function animCarousel(){

		var delay = 2500;

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

	/* FEATURES APP */

	if($('body').attr('id') == 'features') {
		$window.scroll(function() {
		    		    
			const offsetTopSectonApp = $('#section-app .wrapper .container-img').offset().top;
			const wHeight = $( window ).height();

		    if ( $window.scrollTop() + (wHeight/2) - (wHeight/8) >= offsetTopSectonApp ) {
		    	if(!$('#section-app .wrapper .container-img').hasClass('anim'))
		    		$('#section-app .wrapper .container-img').addClass('anim');
		    }
		})
	}

	/* END FEATURES APP */


	/* HOME APP */

	if($('body').attr('id') == 'home') {
		$window.scroll(function() {
		    		    
			const offsetTopSectonApp = $('#section-app').offset().top;
			const wHeight = $( window ).height();

		    if ( $window.scrollTop() + (wHeight/2) >= offsetTopSectonApp ) {
		    	if(!$('#section-app .wrapper .container-illu').hasClass('anim'))
		    		$('#section-app .wrapper .container-illu').addClass('anim');
		    }
		})
	}

	/* END HOME APP */


	/* QUOTE */

	$('.li-quotes:not(:first-child)').hide();

	let boucle = 1;

	function animQuote(num) {
		$('#common-section-quotes .wrapper .container-nav .nav').removeClass('active');

		if(!$('.li-quotes:nth-child('+num+')').hasClass('active')) {

			$('.li-quotes').removeClass('active');
			setTimeout(function(){
				$('#common-section-quotes .wrapper .container-nav .nav:nth-child('+num+')').addClass('active');

				$('.li-quotes').show();

				for( let i=1 ; i <= $('.li-quotes').length ; i++ ) {
					if(i != num) {
						$('.li-quotes:nth-child('+i+')').hide();
					}
				}

				$('.li-quotes:nth-child('+num+')').addClass('active');
			}, 500)
		}
	}

	if (window.matchMedia("(max-width: 700px)").matches) {
		$('.li-quotes').addClass('active');
	}
	else {
		let num = 2;
		setInterval(function() {
			if(boucle) {
				animQuote(num);
				num = num >= $('#common-section-quotes .wrapper .container-nav .nav').length ? 1 : num+=1;
			}
		}, 5000);
	}

	$('#common-section-quotes .wrapper .container-nav .nav').click(function(){
		animQuote($(this).attr('data-liquote'));
		boucle = 0;
	});
	$('#common-section-quotes .wrapper .container-quotes .li-quotes .quote .quote-content .link').click(function() {
		$(this.parentNode).parent().toggleClass('show');
		boucle = 0;
	})

	/* END QUOTE */

	/* ANIMATION SCROLL */

	function animScroll() {
		var windowHeight = $window.height() / 1.5;
	    $('.container__anim').each(function() {
	        if ($window.scrollTop() >= $(this).offset().top - windowHeight) {
	            if (!$(this).hasClass('reach')) {
	                $(this).addClass('reach');
	            }
	        }
	    });
	};

	$window = $(window);
	$window.scroll(function() {
	    animScroll();
	});
	animScroll();

	/* END ANIMATION SCROLL */
})