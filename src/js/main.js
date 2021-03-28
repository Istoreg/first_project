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


//табы для блока "Услуги и цены"
(function($) {
    $(function() {
      
      $('ul.price__list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.price').find('div.price__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);