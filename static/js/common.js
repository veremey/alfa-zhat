$(document).ready(function() {
	AOS.init();

	$('.search__input').focus(function() {
		$(this).parent('.search__field').addClass('in_focus');
	});
	$('.search__input').focusout(function() {
		$(this).parent('.search__field').removeClass('in_focus');
	});

	// $('.has_sub').on('click', function(e) {
	// 	event.preventDefault();
	// 	$(this).addClass('is_active');
    //
	// });

	// $('.menu__list').on('click', function() {
	// 	$('.menu__list').removeClass('is_active');
	// 	$(this).addClass('is_active');
	// });


	if($('.mainSlider').length){
		$('.mainSlider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: true
		});
	}
	if($('.productSlider').length){
		$('.productSlider').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 5,//
			// centerMode: true,
			dots: true,
			responsive: [{
				breakpoint: 1140,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	if($('.eventSlider').length){
		$('.eventSlider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}


	// for current elipsis render
	if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
		document.querySelector('html').classList.add('webkit-line-clamp');
	}

	if($('.previewSliderWide').length) {
		$('.previewSliderWide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.previewSliderSmall'
		});

		$('.previewSliderSmall').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			asNavFor: '.previewSliderWide',
			dots: false,
			arrows: true,
			focusOnSelect: true
		});
	}

	if($('.popupSliderWide').length){

		$('.popupSliderSmall').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			asNavFor: '.popupSliderWide',
			dots: false,
			centerMode: false,
			arrows: false,
			focusOnSelect: true
		});

		$('.popupSliderWide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.popupSliderSmall',
			arrows: true,
			fade: true
			// centerMode: false,
		});

		$('.popupSliderWide').on({
			beforeChange: function(event, slick, current_slide_index, next_slide_index) {
				$('.popupSliderSmall .slick-slide').removeClass('slick-current');
				$('.popupSliderSmall .slick-slide[data-slick-index='+next_slide_index+']').addClass('slick-current');
			}
		});

	}

	// close__popup

	$('.js-popup-close').on('click', function(){
		$('.popup').removeClass('is_visible');
		return false;
	});


	$('.description__toogler').on('click', function(){
		$(this).siblings('.description__content').toggleClass('is_visible');
		$(this).toggleClass('is_active');
		return false;
	});

	$('.btn_menu').on('click', function() {
		$(this).toggleClass('is_active');
		$(this).siblings('.info').toggleClass('is_visible').find('.info__wrap').toggleClass('is_visible');
	});

	$('.catalog').on('click', function() {
		if($(window).width() < 650) {
			$(this).toggleClass('is_active');
		}
	});

	removeAside();

});


$(window).on('resize', function() {
	removeAside();
	$('.catalog').removeClass('is_active');
});


function removeAside () {
	if($(document).width() < 1017) {
		$('.catalog').removeClass('catalog_static');
		$('.propose').css({
			'width' : '100%'
		});
	} else {
		if($('.catalog').is('.simple') == false){

			$('.catalog').addClass('catalog_static');
			$('.propose').css({
				'width' : ''
			});
		}
		// $('.catalog').addClass('catalog_static');
		$('.propose').css({
			'width' : ''
		});
	}
}


function reinitPromoSlider() {
	if($(document).width() < 1000) {
		$('.previewSliderWide').slick('reinit');
		$('.previewSliderSmall').slick('reinit');
	}
}
