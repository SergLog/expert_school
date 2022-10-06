function $$(q) {
	return document.querySelectorAll(q);
}

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

var $aos = $$('[data-aos]');

function aos (e) {
	var wh = window.innerHeight;
	
	for (var i = 0; i < $aos.length; i++) {
		var top = $aos[i].getBoundingClientRect().top;
		var t = $aos[i].getAttribute('data-aos-treshold') || '85';
		t = wh * t / 100;
		
		if (top < t) {
			if ($aos[i].classList) {
				$aos[i].classList.add('aos-animate');
			} else {
				$aos[i].setAttribute('class', 'aos-animate');
			}
		}
		if (top >= t) {
			if ($aos[i].classList) {
				$aos[i].classList.remove('aos-animate');
			} else {
				$aos[i].setAttribute('class', '');
			}
		}
	}
}


if (isIE11 && $aos) {
	for (var i = 0; i < $aos.length; i++) {
		$aos[i].removeAttribute('data-aos');
	}
} else if ($aos.length) {
	window.addEventListener("scroll", aos);
	aos();
}
