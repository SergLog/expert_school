$(document).ready(function () {

  var sliderMain = $('.recomendations-container');

  sliderMain.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          centerMode: false,
          slidesToScroll: 1,
          variableWidth: true
        }
      }
    ]
  });

});