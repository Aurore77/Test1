//Ajout d'un bouton scroll vers le haut

$(document).ready(function () {
	// Add return on top button
	$('body').append('<div id="returnOnTop" title="Return on top">&nbsp;</div>');

	// On button click, let's scroll up to top
	$('#returnOnTop').on ('click', function() {
		$('html,body').animate({scrollTop: 0}, 'slow');
	});
});

$(window).scroll(function() {
	// If on top fade the bouton out, else fade it in
	if ( $(window).scrollTop() == 0 )
		$('#returnOnTop').fadeOut();
	else
		$('#returnOnTop').fadeIn();
});

// Essai slide performances

$(document).ready(function() {
    
});


