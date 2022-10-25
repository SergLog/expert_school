
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



    // Закрытие попапов


	$('.popup .close').on('click', function() {
		$(this).closest('.popup').removeClass('active');
		$('body').removeClass('openPopap');
	})
	  
	  
	  
	  
		  

	function checkFields(obj) {
		let result = true;

		function setInvalidField(field) {
			$(field).closest('.ui-input-container').addClass('error');
			$(field).closest('.ui-textarea-container').addClass('error');
			$(field).closest('.ui-checkbox-container').addClass('error');
			
			if (result) result = false;
		}

		function setValidField(field) {
			$(field).closest('.required').removeClass('error');
		}

		obj.find('.ui-input, .ui-textarea').each(function () {
			let el = $(this);
			let val = el.val();
			const numbersRegex = /^[0-9]+$/;
			if(el[0].innerText.length > 1) val = el[0].innerText;
		
			el.closest('.error').removeClass('error');
			
			if (el.hasClass('required')){
				val.length < 1 ? setInvalidField(el) : setValidField(el);
			}

			if (el.hasClass('only-numbers')) {
				numbersRegex.test(val) ? setValidField(el) : setInvalidField(el);
			}
		});


		return result;
	}


	function submitForm(obj) {
		if (checkFields(obj)) {
			sendMessage(obj);
		} else {

		  $('html').animate({
			  scrollTop: $('#fields .error')[0].offsetTop
		  }, 300);
		}
	};

	function sendMessage(formObj) {
		const msg = formObj.serialize();
		const formName = formObj[0].id;
		$.ajax({
			type: 'POST',
			url: '../PHPMailer.php',
			data: msg,
			success: function (data) {
				if (data.status === 'success') {
					$('#success-popup').addClass('active');
				}
			},
			error: function (xhr, str) {
				console.log('Возникла ошибка: ' + xhr.responseCode);
			}
		});
	}

	$('body').on('submit', '#fields', function (e) {
		e.preventDefault();
		submitForm($('#fields'));
	});

	$('#input[type="text"]').each(function () {
		$(this).on("input", function () {
			$(this).parent().removeClass('error');
		});
	});

	$('#dropdown').each(function () {
		$(this).on("change", function () {
			$(this).parent().parent().removeClass('error');
		});
	});


		  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  
});