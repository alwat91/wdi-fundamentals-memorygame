// console.log("JS file is connected to HTML! Woo!")
// var cardOne= "queen";
// var cardTwo= "queen";
// var cardThree= "king";
// var cardFour= "king";

//  if (cardTwo=== cardFour){
// 	alert('You found a match!');
// }
// else if (cardTwo !== cardFour){
// 	alert('Sorry, try again.')
// }
function createCards(){
	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i<4 ; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}

createCards();