(function ($) {
"use strict";


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});



// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});



// select
		$('select').niceSelect();
		
// Slider Active

function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// shop-categories-active

$('.shop-categories-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			480:{
					items:2
			},
			767:{
					items:3
			},
			992:{
					items:4
			},
			1200:{
					items:5
			}
	}
})


// single-product-active

$('.single-product-active').owlCarousel({
	loop:true,
	margin:30,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
})


// featured-products-active
$('.featured-products-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			768:{
					items:2
			},
			992:{
					items:3
			},
			1200:{
					items:4
			}
	}
})



// testimonial-active


$('.testimonial-active').owlCarousel({
	loop:true,
	margin:30,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:true,
	autoplay:false,
	dotsData:true,
})


// Blog-active

$('.blog-active').owlCarousel({
	loop:true,
	margin:30,
	nav:false,
	dots:false,
	autoplay:true,
	responsive:{
			0:{
					items:1
			},
			768:{
					items:2
			},
			992:{
					items:3
			}
	}
})



// sponsor-logo-active

$('.sponsor-logo-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			400:{
					items:2
			},
			768:{
					items:4
			},
			1200:{
					items:6
			},
			992:{
					items:5
			}
	}
})



//off-canvas-menu

$(".menu-trigger").on("click", function() {
	$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
	return false;
});
$(".menu-close, .off-canvas-overlay").on("click", function() {
	$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
});


// others page js

// happy-customer-active

$('.happy-customer-active').owlCarousel({
	loop:true,
	margin:30,
	items:1,
	navText:['<i class="fas fa-minus"></i>','<i class="fas fa-plus"></i>'],
	nav:true,
	dots:false,
})



})(jQuery);