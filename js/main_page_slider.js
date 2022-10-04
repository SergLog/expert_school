$(document).ready(function(){

    // var sliderMainStatus = $('.slider-numbers');
     var sliderMain = $('.recomendations-container');
    
    // sliderMain.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     sliderMainStatus.text(i + ' / ' + slick.slideCount);
    // });
    
    sliderMain.slick({
        infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 640,
              settings: {
              slidesToShow: 2,
              centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
              slidesToScroll: 1
              }
            },
            {
                breakpoint: 560,
                settings: {
                slidesToShow: 1,
                centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
                slidesToScroll: 1
                }
              },
            {
                breakpoint: 360,
                settings: {
                slidesToShow: 1,
                centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
                slidesToScroll: 1
                }
              }
           ]
    });

});