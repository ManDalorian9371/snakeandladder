const dicePlayer1 = document.querySelector('.dice1');
const dicePlayer2 = document.querySelector('.dice2');
const resDices1 = document.querySelector('.resDices1');
const resDices2 = document.querySelector('.resDices2');
const resPosition1 = document.querySelector('.resPosition1');
const resPosition2 = document.querySelector('.resPosition2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p1t = prompt('player 1 name ?');
const p2t = prompt('player 2 name ?');
console.log(p1t, p2t);
if (p1t != '') {
	p1.innerHTML = p1t;
}
if (p2t != '') {
	p2.innerHTML = p2t;
}
let position1 = 0;
let position2 = 0;
let gameEnds = false;
function randomDice(){
	return Math.ceil(Math.random() * 6);
}

dicePlayer1.addEventListener('click', () => {
	if (gameEnds) {
		return;
	}

	let dice1 = randomDice();
	let dice2 = randomDice();
	resDices1.innerHTML = ` <img src="images/dice${dice1}.png"> and <img src="images/dice${dice2}.png">`;
	if (dice1 + dice2 + position1 === 100) {
		gameEnds = true;
		position1 = `${p1.innerHTML} HAVE FOUND THE TREASURE !`;
		alert(` ${p1.innerHTML} You Won ! `);
	} else {
		if (dice1 + dice2 + position1 > 100) {
			position1 = 100 - (dice1 + dice2 + position1 - 100);
		} else {
			position1 += dice1 + dice2;
		}
		if (position1 === 2) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 38`);
			position1 = 38;
		}
		if (position1 === 7) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 14`);
			position1 = 14;
		}
		if (position1 === 15) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 26`);
			position1 = 26;
		}
		if (position1 === 8) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 31`);
			position1 = 31;
		}
		if (position1 === 21) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 42`);
			position1 = 42;
		}
		if (position1 === 28) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 84`);
			position1 = 84;
		}
		if (position1 === 36) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 44`);
			position1 = 44;
		}
		if (position1 === 51) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 67`);
			position1 = 67;
		}
		if (position1 === 71) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 91`);
			position1 = 91;
		}
		if (position1 === 78) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 98`);
			position1 = 98;
		}
		if (position1 === 87) {
			alert(`YOU GOT THE LADDER FROM ${position1} TO 94`);
			position1 = 94;
		}

		if (position1 === 16) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 6`);
			position1 = 6;
		}
		if (position1 === 46) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 25`);
			position1 = 25;
		}
		if (position1 === 49) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 11`);
			position1 = 11;
		}
		if (position1 === 62) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 19`);
			position1 = 19;
		}
		if (position1 === 64) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 60`);
			position1 = 60;
		}
		if (position1 === 74) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 53`);
			position1 = 53;
		}
		if (position1 === 89) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 68`);
			position1 = 68;
		}
		if (position1 === 92) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 88`);
			position1 = 88;
		}
		if (position1 === 95) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 75`);
			position1 = 75;
		}
		if (position1 === 99) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position1} TO 80`);
			position1 = 80;
		}
	}

	resPosition1.innerHTML = position1;
	if (!(dice1 === 6 && dice2 === 6)) {
		dicePlayer2.disabled = false;
		dicePlayer1.disabled = true;
	}
});
dicePlayer2.addEventListener('click', () => {
	if (gameEnds) {
		return;
	}

	let dice1 = randomDice();
	let dice2 = randomDice();
	resDices2.innerHTML = ` <img src="images/dice${dice1}.png"> and <img src="images/dice${dice2}.png">`;
	if (dice1 + dice2 + position2 === 100) {
		gameEnds = true;
		position2 = `${p2.innerHTML} HAVE FOUND THE TREASURE !`;
		alert(` ${p2.innerHTML} You Won ! `);
	} else {
		if (dice1 + dice2 + position2 > 100) {
			position2 = 100 - (dice1 + dice2 + position2 - 100);
		} else {
			position2 += dice1 + dice2;
		}

		if (position2 === 2) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 38`);
			position2 = 38;
		}
		if (position2 === 7) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 14`);
			position2 = 14;
		}
		if (position2 === 15) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 26`);
			position2 = 26;
		}
		if (position2 === 8) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 31`);
			position2 = 31;
		}
		if (position2 === 21) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 42`);
			position2 = 42;
		}
		if (position2 === 28) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 84`);
			position2 = 84;
		}
		if (position2 === 36) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 44`);
			position2 = 44;
		}
		if (position2 === 51) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 67`);
			position2 = 67;
		}
		if (position2 === 71) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 91`);
			position2 = 91;
		}
		if (position2 === 78) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 98`);
			position2 = 98;
		}
		if (position2 === 87) {
			alert(`YOU GOT THE LADDER FROM ${position2} TO 94`);
			position2 = 94;
		}

		if (position2 === 16) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 6`);
			position2 = 6;
		}
		if (position2 === 46) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 25`);
			position2 = 25;
		}
		if (position2 === 49) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 11`);
			position2 = 11;
		}
		if (position2 === 62) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 19`);
			position2 = 19;
		}
		if (position2 === 64) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 60`);
			position2 = 60;
		}
		if (position2 === 74) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 53`);
			position2 = 53;
		}
		if (position2 === 89) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 68`);
			position2 = 68;
		}
		if (position2 === 92) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 88`);
			position2 = 88;
		}
		if (position2 === 95) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 75`);
			position2 = 75;
		}
		if (position2 === 99) {
			alert(`YOU HAVE BITTEN BY SNAKE ! FROM ${position2} TO 80`);
			position2 = 80;
		}
	}

	resPosition2.innerHTML = position2;
	if (!(dice1 === 6 && dice2 === 6)) {
		dicePlayer1.disabled = false;
		dicePlayer2.disabled = true;
	}
});
