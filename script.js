$(document).ready( function() {
	var win = Math.floor((Math.random()*9));
	console.log(win);
	$('#game').find('div:eq(' + win + ')').addClass('winner');
	var gameStates = {
		'on': 'Treasure Hunt',
    'won': 'You won!',
    'lost': 'Game Over'
	}
	var remainingTurns = 3;
	var currentGameState = 'on';
	$("#title").text(gameStates[currentGameState]);
	$('#turnsRemaining').text(remainingTurns);
	var changeRemainingturns = function(remainingTurns) {
		$('#turnsRemaining').text(remainingTurns);
	}
	var changeGameState = function(newState) {
		currentGameState = newState;
		$("#title").text(gameStates[currentGameState]);
	}
		
		$( '.box' ).click( function() {
			var $boxClicked = $(this);
			event.preventDefault();
			if ( currentGameState === 'on' && remainingTurns > 0) {
				if ( $boxClicked.hasClass('winner') ) {
					$boxClicked.css("background-image" , "url('diamonds.png')")
					.css('background-size', 'cover');
					remainingTurns= remainingTurns - 1;
					currentGameState = 'won';
					changeGameState(currentGameState);
					changeRemainingturns(remainingTurns);
					return;
				} else { 
					$boxClicked.css("background-image" , "url('dead_fish.png')");
					remainingTurns= remainingTurns - 1;
					changeRemainingturns(remainingTurns);
					if (remainingTurns === 0 ) {
						currentGameState = 'lost';
						changeGameState(currentGameState);
					}
					return;
				} 
			}	
		})
})