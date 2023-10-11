// Task 2

// Create a “Guess the capital” game using this file

// Create a separate file containing the list of countries

// Find out how to work with JSON files

// The game should work like a quizz

// Display a random country from the list and 4 alternatives of capitals

// Each alternative should be a button

// When the user clicks the button, its borders should turn red if the alternative is wrong and green if it’s right

// If the user guesses it correctly, he/she gets 1 point

// The game consists of 10 tries

// Display a ranking when the user finishes

// After the 10th try, the user must type his/her name so it can be displayed in the ranking

// The ranking must be saved in the local storage

let data;
let newGame = null;

async function fetchData() {
	try {
		const response = await fetch('./countries.json');
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		const jsonData = await response.text();
		data = JSON.parse(jsonData);
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

async function main() {
	await fetchData();
}

main();

class Game {
	constructor() {
		this.data = null;
		this.country = null;
		this.correctAnswers = 0;
		this.attempts = 0;
		this.redHerrings = null;
		this.ranking = [];
	}

	startNewGame(data) {
		this.data = data;
		return data;
	}

	getRandomCountry() {
		const randomIndex = Math.floor(Math.random() * this.data.length);
		this.country = this.data[randomIndex];
		return this.country;
	}

	getRandomRedHaerrings() {
		let redHerrings = [];

		for (let i = 0; i < 4; i += 1) {
			const randomIndex = Math.floor(Math.random() * this.data.length);

			if (this.country.city !== this.data[randomIndex].city) {
				redHerrings.push(this.data[randomIndex]);
			}
		}

		this.redHerrings = redHerrings;
		this.redHerrings.push(this.country);

		for (let i = redHerrings.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[redHerrings[i], redHerrings[j]] = [redHerrings[j], redHerrings[i]];
		}

		return redHerrings;
	}

	guess(str) {
		this.attempts += 1;

		if (this.country && str === this.country.city) {
			console.log('Good guess!');
			this.correctAnswers += 1;
			this.country = null;
			this.redHerrings = null;
			return true;
		} else {
			console.log('Try again!');
			return false;
		}
	}

	updateRanking(str) {
		this.ranking.push({name: str, points: this.correctAnswers});
		localStorage.setItem('ranking', JSON.stringify(this.ranking));
	}
}

function createNewGame() {
	newGame = new Game();
	newGame.startNewGame(data);
	newGame.getRandomCountry();
	newGame.getRandomRedHaerrings();
	console.log(newGame);
}
function newRound() {
	newGame.getRandomCountry();
	newGame.getRandomRedHaerrings();
	const gameBoard = document.getElementById('gameBoard');
	const country = document.createElement('p');
	country.textContent = `${newGame.country.country}`;
	gameBoard.appendChild(country);

	newGame.redHerrings.forEach(country => {
		const button = document.createElement('button');
		button.textContent = `${country.city}`;
		button.onclick = function () {
			guessCity(`${country.city}`);
		};
		button.id = `${country.city}`;
		gameBoard.appendChild(button);
	});
	console.log(newGame);
}

function guessCity(str) {
	newGame.guess(str);

	if (newGame.attempts === 10) {
		const newRound = document.getElementById('newRound');
		newRound.disabled = true;

		const rankingList = document.getElementById('rankingList');

		const addNameForm = document.createElement('form');

		const name = document.createElement('input');
		name.placeholder = 'Enter your name';

		const sendButton = document.createElement('button');
		sendButton.textContent = 'Send';

		rankingList.appendChild(addNameForm);
		addNameForm.appendChild(name);
		addNameForm.appendChild(sendButton);

		addNameForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const playerName = name.value.trim();
			if (playerName) {
				newGame.updateRanking(playerName, newGame.correctAnswers);
			}

			name.value = '';
		});
	}
}
