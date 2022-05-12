const dice = document.querySelector('.dice');
const resDices = document.querySelector('.resDices');
const resPosition = document.querySelector('.resPosition');
let position = 0;
let gameEnds = false;
function randomDice(){
	return Math.ceil(Math.random() * 6);
}

dice.addEventListener('click', () => {
	if (gameEnds) {
		return;
	}
	let dice1 = randomDice();
	let dice2 = randomDice();
	resDices.innerHTML = `${dice1} and ${dice2}`;
	if (dice1 + dice2 + position === 100) {
		gameEnds = true;
		position = 100;
		alert('You Won !');
	} else if (dice1 + dice2 + position > 100) {
		position = position;
	} else {
		position += dice1 + dice2;
	}

	resPosition.innerHTML = position;
});
