$(document).ready(function() {

	select();
	filter();

	$(document).on('click', function(el){
		var childr = $('.select').find('*');

		if($(el.target).is(childr) == false ){
			$('.select').removeClass('is-active');
			$('.select__list').slideUp('fast');
		}
	});

});

function select() {
	$(".js-select").each(function(){
		var select_list = $(this).children(".js-select-list");
		var content = select_list.find("li").first().html();
		//$(this).find(".js-select-text").html(content);//.text(text);//content
		$(this).click(function(event){
			$(".js-filter").removeClass("is-active");
			$(".js-filter-list").hide();

				var $self = $(this);

				if ($(this).hasClass("is-active")) {
						setTimeout(function () {
							$self.removeClass('is-active');
						}, 400);
						select_list.slideUp("fast");
				} else {
						$(".js-select").removeClass("is-active");
						$(".js-select-list").hide();
						select_list.slideDown("fast");
						$(this).addClass("is-active");
				}

			event.stopPropagation();
		});
		select_list.find("li").click(function(event) {
			var id = $(this).attr("data-id");
			var content = $(this).html();
			$(this).parent().parent().find(".js-select-text").html(content);
			$(this).parent().parent().find(".js-select-input").val(id);
			$(this).parent().hide();
			$(this).parents(".js-select").removeClass("is-active");
			event.stopPropagation();
		});
	});
}

function filter() {
	$(".js-filter").each(function(){
		var filter_list = $(this).children(".js-filter-list");
		var content = filter_list.find("li").first().html();
		$(this).click(function(event){
			// $(".js-select-list").slideUp("fast");
			$(".js-select").removeClass("is-active");
			$(".js-select-list").hide();
			var $self = $(this);

			if ($(this).hasClass("is-active")) {
					setTimeout(function () {
						$self.removeClass('is-active');
					}, 400);

					filter_list.slideUp("fast");
				} else {
						$(".js-filter").removeClass("is-active");
						$(".js-filter-list").hide();
						filter_list.slideDown("fast");
						$(this).addClass("is-active");
				}

			event.stopPropagation();
		});

		filter_list.find("li").click(function(event) {
			var id = $(this).attr("data-id");

			$(this).parent().parent().find(".js-filter-input").val(id);

			event.stopPropagation();
		});

	});
}
