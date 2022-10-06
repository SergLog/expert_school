$(document).ready(function(){


    var sliderMainStatus = $('.slider-numbers');
    var sliderMain = $('.slider-main');
    
    sliderMain.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        sliderMainStatus.text(i + ' / ' + slick.slideCount);
    });
    
    sliderMain.slick({
        infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
    });

});