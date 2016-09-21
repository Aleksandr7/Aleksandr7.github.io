$(function(){
		$('a[href^="#"]').click(function(){
			var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 700);
    return false; 
}); 
	});


$(document).ready(function() {
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


$(document).ready(function() {
  $("#owl-list").owlCarousel({
      autoPlay: 10000,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet : [768,2],
      itemsTabletSmall : [480,1],
      navigation : true,
      navigationText : ["&lt;","&gt;"]
  });
});


$(document).ready(function() {
  $("#owl-slide").owlCarousel({
      slideSpeed : 10000,
      singleItem : true,
      touchDrag : false,
      mouseDrag : false
  });
});


$(document).ready(function($) {
	$('#touch-menu').click(function(event) {
		$(this).next().fadeToggle();
	});
});

$(function(){
	$('#Container').mixItUp();
});
