$(document).ready( function() {
	var win = Math.floor((Math.random()* $('.box').length )+1);
	console.log(win);
	$('div:eq(' + win + ')').filter('.box').addClass('winner');
	$( 'div' ).click( function() {
		$(this).slideUp();
	})

})