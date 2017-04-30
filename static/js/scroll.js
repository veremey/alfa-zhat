var Scroll = new ScrollClass();

function ScrollClass() {
	var globalScope = this;

	/*--- init scroll ---*/
	/*---------------------------------------------------------------------*/
	this.initScroll = function(opt) {
		var $conteiner = $(opt.conteiner);

		(function($){
			$(window).on("load",function(){
				$conteiner.mCustomScrollbar({
				});
			});
		})(jQuery);

	};

	// slow scroll to elem
	this.slowAncorScroll = function (opt) {
		var $conteiner = $(opt.conteiner);
		var $clickItem = opt.clickItem;
		var $time = opt.time;

		$conteiner.on("click", $clickItem, function (event) {
			event.preventDefault();

			var id  = $(this).attr('href'),
			$top = $(id).offset().top - 80;
			console.log(id);

			$('body,html').animate({scrollTop: $top}, $time);

		});


	};

	// slow scroll to elem at menu
	this.slowAncorMenuScroll = function (opt) {
		var $class = opt.class;
		var $time = opt.time;
		var $offset = opt.offset;

		$('.menu').on('click', '.menu__link', function(){

			$moveItem = $(this).attr('href');
			// console.log($moveItem);

			$('.page').removeClass($class);
			$($moveItem).addClass($class);
			// фнимация переключения
			 $("html, body").animate({scrollTop : $($moveItem).offset().top - $offset}, $time);
			return false;
		});
//
	}
}