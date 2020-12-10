/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/



popupWhatsApp = () => {
  
	let btnClosePopup = document.querySelector('.closePopup');
	let btnOpenPopup = document.querySelector('.whatsapp-button');
	let popup = document.querySelector('.popup-whatsapp');
	let sendBtn = document.getElementById('send-btn');
  
	btnClosePopup.addEventListener("click",  () => {
	  popup.classList.toggle('is-active-whatsapp-popup')
	})
	
	btnOpenPopup.addEventListener("click",  () => {
	  popup.classList.toggle('is-active-whatsapp-popup')
	   popup.style.animation = "fadeIn .6s 0.0s both";
	})
	
	sendBtn.addEventListener("click", () => {
	let msg = document.getElementById('whats-in').value;
	let relmsg = msg.replace(/ /g,"%20");
	  //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
	 window.open('https://wa.me/15551234567?text='+relmsg, '_blank'); 
	
	});
  
	setTimeout(() => {
	  popup.classList.toggle('is-active-whatsapp-popup');
	}, 3000);
  }

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');


	});

	 
	popupWhatsApp();

})(jQuery);


 