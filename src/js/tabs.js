
//табы для блока "Услуги и цены"
(function TabsBlock($) {
  $(function() {
    
    $('ul.price__list').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.price').find('div.price__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);
