$(function(){

	// scrollbar js initialization
	$(".nano").nanoScroller();


	// Window Width/Height
	wwwh = function(){
		ww = $(window).width();
		wh = $(window).height();
	}
	wwwh();

	// Cancelling fixed header Height
	manageHeaderHeight = function(){
		hh = $('.header').height();
		hp = parseInt($(".header").css('padding-top').substr(0, 2) );
		$('#headerHeight').height(hh + hp*2);
	}
	manageHeaderHeight();
	$(window).bind('resize orientationchange', function(){
		manageHeaderHeight();
	})
})