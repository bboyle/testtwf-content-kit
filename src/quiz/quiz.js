(function( $ ) {
	'use strict';


	// hide all answers
	$( '.note' ).prop( 'hidden', true );

	// show answer when answering
	$( document ).on( 'click', ':radio', function() {
		var radio = $( this );
		var value = radio.val();
		var question = radio.closest( 'fieldset' ).parent();
		var note = question.find( '.note' );

		// hide any notes not relevant to the current answer
		note.find( '[class]' ).not( '.' + value ).prop( 'hidden', true );
		note.find( '.' + value ).prop( 'hidden', false );
		// show the note
		note.prop( 'hidden', false );
	});


}( jQuery ));