// Task 1

// Create a page where you can insert multiple countdowns

// The page should have an input where the user can input the time in the following format: hh:mm:ss

// For example: 16:25:21 means 16 hours, 25 minutes, and 21 seconds

// The page should have an “Insert Countdown” button

// When the user presses this button, a new countdown should start on the screen starting from the time inserted, decreasing to zero

// If the user presses the button again, a new countdown should start

// Each countdown inserted must have a “Cancel” button. If the user presses this button, the countdown must be removed from the screen

// You should use a class to handle the countdowns

// // this is an example
// class Countdown {
//   start() {
//   }

//   cancel() {
//   }
// }

class Countdown {
	constructor(targetTime, container) {
		this.targetTime = targetTime;
		this.container = container;
		this.intervalId = null;

		this.render();
	}

	start() {
		this.intervalId = setInterval(() => {
			const currentTime = new Date().getTime();
			const timeRemaining = this.targetTime - currentTime;
			if (timeRemaining <= 0) {
				clearInterval(this.intervalId);
				this.container.removeChild(this.countdownElement);
			} else {
				this.updateDisplay(timeRemaining);
			}
		}, 1000);
	}

	cancel() {
		clearInterval(this.intervalId);
		this.container.removeChild(this.countdownElement);
	}

	render() {
		this.countdownElement = document.createElement('div');
		this.countdownElement.innerHTML = `
      Countdown: <span id="countdown">${this.formatTime(this.targetTime)}</span>
      <button id="cancel-countdown">Cancel</button>
    `;
		this.container.appendChild(this.countdownElement);

		const cancelBtn = this.countdownElement.querySelector('#cancel-countdown');
		cancelBtn.addEventListener('click', () => this.cancel());

		this.start();
	}

	updateDisplay(timeRemaining) {
		const countdownElement = this.countdownElement.querySelector('#countdown');
		countdownElement.textContent = this.formatTime(timeRemaining);
	}

	formatTime(time) {
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((time % (1000 * 60)) / 1000);
		return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(
			seconds,
		)}`;
	}

	padZero(value) {
		return value < 10 ? `0${value}` : value;
	}
}

const insertCountdownBtn = document.getElementById('insert-countdown');
insertCountdownBtn.addEventListener('click', () => {
	const countdownInput = document.getElementById('countdown-input');
	const targetTime = parseTimeInput(countdownInput.value);
	if (targetTime) {
		new Countdown(targetTime, document.getElementById('countdowns-container'));
		countdownInput.value = '';
	}
});

function parseTimeInput(input) {
	const pattern = /^(\d{2}):(\d{2}):(\d{2})$/;
	const match = pattern.exec(input);
	if (match) {
		const hours = parseInt(match[1], 10);
		const minutes = parseInt(match[2], 10);
		const seconds = parseInt(match[3], 10);
		const currentTime = new Date().getTime();
		return (
			currentTime +
			(hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000)
		);
	}
	return null;
}
