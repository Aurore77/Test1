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


//Essai slideToggle Texte Artists

$(document).ready(function() {
	$('.develop').click(function() {
		$('.description').hide();
		var artist= $(this).data('artist');
		$('.description[data-artist="' + artist+ '"]').slideToggle('fast', function() {		
		});			
	});	
});



// Essai slide performances

$(document).ready( function() {

});
