//слайдер галереи
$(function() {
	$('#carousel').slick({
        Infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: $('.carousel_left'),
        nextArrow: $('.carousel_right')
    });
});

//плавный переход по ссылкам навигации
$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});