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
        duration: 370,
        easing: "linear" 
    });

    return false;
});

//бургер
$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}