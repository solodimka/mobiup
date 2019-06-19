$(function() {

	// Плавающий виджет социальных сетей
	var offset = $('#social__widget').offset();
	var topPadding = 45;
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			$('#social__widget').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
		} else {
			$('#social__widget').stop().animate({marginTop: 0});
		}
	});
		
	// Кнопка вверх
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('#arrow__widget').fadeIn();
		} else {
			$('#arrow__widget').fadeOut();
		}
	});
		 
	$('#arrow__widget').click(function() {
		$('body,html').animate({scrollTop:0},800); 
	});
		 
	// Выпадающее меню
	$('.menu__open').on('click', function () {
		var isOpened = $('.mobile__menu .header__menu').hasClass('opened')
		if (isOpened) {
			$('.mobile__menu .header__menu').removeClass('opened')
		} else {
			$('.mobile__menu .header__menu').addClass('opened')
		}
	})
		
	// Выпадающее меню (подменю)
	$('.mobile__menu .has-submenu').on('click', function () {
		var submenu = $(this).children('.submenu')
		var isOpened = $(submenu).hasClass('opened')
		if (isOpened) {
			$(submenu).removeClass('opened')
		} else {
			$(submenu).addClass('opened')
		}
	})

});
