// console.log("JS file is connected to HTML! Woo!")
// var cardOne= "queen";
// var cardTwo= "queen";
// var cardThree= "king";
// var cardFour= "king";
var gameBoard = document.getElementById('game-board');


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay= [];

function createCards(){
	




	for(var i= 0; i< cards.length; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';


		gameBoard.appendChild(newCard);
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);

		board.appendChild(newCard);
		board.appendChild(newCard);
	}
}

function isMatch(){
		 if (cards[0]===cards[1]){
		alert('You found a match!');
	}
	else {
		alert('Sorry, try again.')
	}
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png'>"; //queen
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
createCards();