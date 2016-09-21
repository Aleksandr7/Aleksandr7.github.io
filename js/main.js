	$(function(){
		$('a[href^="#"]').click(function(){
			var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 700);//800 - длительность скроллинга в мс
    return false; 
}); 
	});
	
	$(document).ready(function(){
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroller').fadeIn();
			} 
			else {
				$('#scroller').fadeOut();
			}
		});
		$('#scroller').click(function () {
			$('body,html').animate({
				scrollTop: 0}, 500);
			return false;
		});
	});

$(document).ready(function($) {
	$('#touch-menu').click(function(event) {
		$(this).next().slideToggle();
	});
});