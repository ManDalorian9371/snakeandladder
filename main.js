const dicePlayer1 = document.querySelector('.dice1');
const dicePlayer2 = document.querySelector('.dice2');
const icon = document.querySelector('.iconImg');
const resDices1 = document.querySelector('.resDices1');
const resDices2 = document.querySelector('.resDices2');
const resPosition1 = document.querySelector('.resPosition1');
const resPosition2 = document.querySelector('.resPosition2');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p1name = document.getElementById('p1name');
const p2name = document.getElementById('p2name');
const bMusic = document.getElementById('backMusic');
const wMusic = document.getElementById('vicMusic');
const popup = document.getElementById('popup');
const namesPlayers = document.querySelectorAll('.namesPlayers');
const startBtn = document.querySelector('#start');
const bead1 = document.getElementById('bead1');
const bead2 = document.getElementById('bead2');

icon.addEventListener('click', () => {
	if (bMusic.paused) {
		icon.src = 'images/soundOn.png';
		bMusic.play();
	} else {
		icon.src = 'images/soundOff.png';
		bMusic.pause();
	}
});

let boardSqures = [ ...Array(100) ].map((x, i) => ++i);
boardSqures = boardSqures.map((x, i, a) => {
	if (document.getElementById('bordImg').width === 400) {
		x = [ 20 + 40 * Math.floor(x / 10.01) ];
		if (Math.ceil(a[i] / 9.99) % 2 === 0) {
			if (a[i] - Math.floor(a[i] / 10) * 10 != 0) {
				x.push(380 - 40 * (a[i] - Math.floor(a[i] / 10) * 10 - 1));
			} else {
				x.push(380);
			}
		} else {
			if (a[i] - Math.floor(a[i] / 10) * 10 != 0) {
				x.push(20 + 40 * (a[i] - Math.floor(a[i] / 10) * 10 - 1));
			} else {
				x.push(20);
			}
		}

		return x;
	} else if (document.getElementById('bordImg').width === 300) {
		x = [ 16 + 30 * Math.floor(x / 10.01) ];
		if (Math.ceil(a[i] / 9.99) % 2 === 0) {
			if (a[i] - Math.floor(a[i] / 10) * 10 != 0) {
				x.push(286 - 30 * (a[i] - Math.floor(a[i] / 10) * 10 - 1));
			} else {
				x.push(286);
			}
		} else {
			if (a[i] - Math.floor(a[i] / 10) * 10 != 0) {
				x.push(16 + 30 * (a[i] - Math.floor(a[i] / 10) * 10 - 1));
			} else {
				x.push(16);
			}
		}

		return x;
	}
});

const snakeAndLadderInit = [ 2, 7, 8, 15, 16, 21, 28, 36, 46, 49, 51, 62, 64, 71, 74, 78, 87, 89, 92, 95, 99 ];
const snakeAndLadderfinal = [ 38, 14, 31, 26, 6, 42, 84, 44, 25, 11, 67, 19, 60, 91, 53, 98, 94, 68, 88, 75, 80 ];
function makeSnakeLadder(pos, p){
	let curr = snakeAndLadderInit.indexOf(pos);
	let Apos;
	if (pos === 100) {
		popup.innerHTML = ` <h2> <strong>${p.innerHTML}</strong> WON !  And Made it To The Treasure , Congratulations ! <br> You Can Click To Play Again </h2> <strong><button onclick="refresh()"> Play Again </button></strong>`;
		popup.classList.add('open');
	}
	if (curr != -1) {
		Apos = snakeAndLadderfinal[curr];
		if (Apos > pos) {
			popup.innerHTML = ` <h2> <strong>${p.innerHTML}</strong>  Took The Ladder From ${pos} To ${Apos} </h2> <button onclick="removePop()"> OK </button>`;
			popup.classList.add('open');
		} else {
			popup.innerHTML = ` <h2> <strong>${p.innerHTML}</strong>  Has Been Bitten By Snake ! Droped From ${pos} To ${Apos} </h2> <button onclick="removePop()"> OK </button>`;
			popup.classList.add('open');
		}
	} else {
		Apos = pos;
	}

	return Apos;
}

function move(pos, bead){
	bead.style.bottom = `  ${boardSqures[pos - 1][0]}px`;
	bead.style.left = `  ${boardSqures[pos - 1][1]}px`;
}

popup.classList.add('open');
function refresh(){
	window.location.reload();
}
function removePop(){
	popup.classList.remove('open');
}
namesPlayers.forEach((x) =>
	x.addEventListener('input', (e) => {
		if (e.target.value != '' || e.target.value != undefined) {
			startBtn.disabled = false;
		}
	})
);
startBtn.addEventListener('click', () => {
	p1.innerHTML = p1name.value.toUpperCase();
	p2.innerHTML = p2name.value.toUpperCase();
	popup.style.width = '300px';
	popup.style.height = '300px';
	bMusic.play();
	document.querySelector('.icon').classList.remove('hidden');
	popup.classList.remove('open');
});

let position1 = 0;
let position2 = 0;
let gameEnds = false;
function randomDice(){
	return Math.ceil(Math.random() * 6);
}

dicePlayer1.addEventListener('click', async () => {
	if (gameEnds) {
		return;
	} else if (p1.innerHTML == 'MSR') {
		gameEnds = true;
		bMusic.pause();
		wMusic.play();
		await (position1 = makeSnakeLadder(100, p1));
	} else {
		let dice1 = randomDice();
		let dice2 = randomDice();
		resDices1.innerHTML = ` <img src="images/dice${dice1}.png"> and <img src="images/dice${dice2}.png">`;
		if (dice1 + dice2 + position1 === 100) {
			gameEnds = true;
			bMusic.pause();
			wMusic.play();
			await (position1 = makeSnakeLadder(100, p1));
		} else {
			if (dice1 + dice2 + position1 > 100) {
				if (position1 + dice1 === 100 || position1 + dice2 === 100) {
					gameEnds = true;
					bMusic.pause();
					wMusic.play();
					position1 = makeSnakeLadder(100, p1);
				} else {
					position1 = position1;
				}
			} else {
				position1 += dice1 + dice2;
			}

			position1 = makeSnakeLadder(position1, p1);
			await move(position1, bead1);
		}

		resPosition1.innerHTML = position1;

		if (!(dice1 === 6 && dice2 === 6)) {
			dicePlayer2.disabled = false;
			dicePlayer1.disabled = true;
		}
	}
});
dicePlayer2.addEventListener('click', async () => {
	if (gameEnds) {
		return;
	}

	let dice1 = randomDice();
	let dice2 = randomDice();
	resDices2.innerHTML = ` <img src="images/dice${dice1}.png"> and <img src="images/dice${dice2}.png">`;
	if (dice1 + dice2 + position2 === 100) {
		gameEnds = true;
		bMusic.pause();
		wMusic.play();
		await (position2 = makeSnakeLadder(100, p2));
	} else {
		if (dice1 + dice2 + position2 > 100) {
			if (position2 + dice1 === 100 || position2 + dice2 === 100) {
				gameEnds = true;
				bMusic.pause();
				wMusic.play();
				position2 = makeSnakeLadder(100, p2);
			} else {
				position2 = position2;
			}
		} else {
			position2 += dice1 + dice2;
		}

		position2 = makeSnakeLadder(position2, p2);
		await move(position2, bead2);
	}

	resPosition2.innerHTML = position2;

	if (!(dice1 === 6 && dice2 === 6)) {
		dicePlayer1.disabled = false;
		dicePlayer2.disabled = true;
	}
});
