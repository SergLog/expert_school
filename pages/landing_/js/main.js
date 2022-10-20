
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
          }
        }
      ]
    });
  
  
  

    $('.form-wrap .header').on('click', function() {
      $(this).toggleClass('active');
    })
  
  
  
  
  });