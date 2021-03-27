$(function() {
	$('#carousel').slick({
        Infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: $('.carousel_left'),
        nextArrow: $('.carousel_right')
    });
});