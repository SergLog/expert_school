
$(document).ready(function () {
  
  var sliderExperts = $('.experts-slider');
  
  sliderExperts.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 1.65,
          centerMode: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 639,
        settings: {
          speed: 400,
          slidesToShow: 1.33,
          centerMode: false,
          slidesToScroll: 1,
    focusOnSelect: true
        }
      }
    ]
  });
  

    $('.form-wrap .header').on('click', function() {
      $(this).toggleClass('active');
    })
  
  

    $('a[href^="#"').on('click', function() {
      let href = $(this).attr('href');

      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, 300);
      return false;
    });

    $('[data-anchor]').on('click', function() {
      let anchor = $(this).attr('data-anchor');

      $('html, body').animate({
          scrollTop: $(anchor).offset().top
      }, 300);
      return false;
    });






	/* Подсветка активных пунктов меню при скролле*/
		var sections = $('section');
		var nav = $('.ui-link');

		$(window).on('scroll', function () {
			let cur_scroll_pos = $(this).scrollTop();
			sections.each(function() {
				var top = $(this).offset().top - 50,
					bottom = top + $(this).outerHeight();
				
				if (cur_scroll_pos >= top && cur_scroll_pos <= bottom) {
					nav.removeClass('active');
					$('.ui-link[href="#'+$(this).attr('id')+'"]').addClass('active');
					$('.ui-link[data-anchor="#'+$(this).attr('id')+'"]').addClass('active');
				}
			});
		});


  
  
});