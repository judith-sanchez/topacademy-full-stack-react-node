// Task 1 -- WATCH VIDEO

// Create a new HTML page with the following body:

// <button type="button">Start timer (0/3)</button>
// <div id="timers"></div>
// Write a JavaScript function startTimer that takes the number of seconds as a parameter and:

// Returns a Promise that resolves itself after the specified value.

// The promise resolves with a string similar to 'Done in 6 seconds!'.

// Create the JavaScript code for the following requirements:

// Every time the button is pressed, a new timer must be started using the function defined above, with a random duration between 2 and 9 seconds (it must be an integer value, including 2 and 9).

// The label of the button must reflect at all times the number of timers currently running:
// Start Timer (0/3), or Start Timer (1/3), etc.

// If 3 timers are running, the button must become disabled until at least one timer stops.

// When there are less than 3 timers running, the button must be enabled.

// When a timer finishes:

// Add a new div to the #timers element, displaying the text returned by the Promise
// e.g. Done in 6 seconds!

// Update the button to reflect the number of timers still running.

// Use your creativity to add nice styling to the application.

// You can use the following recording as a reference for the main functionality.

const startButton = document.getElementById('startButton');
const timersDiv = document.getElementById('timers');

// Cpunter that limits how many timers can be running at once
let runningTimers = 0;

// Could it also be with async?

function startTimer(seconds) {
	// When the function startTimer() gets called it returns the promise that-> "in x seconds I will return a string"
	// On this case, the passing of the seconds is the condition that needs to be eet in order to the promise to resolve succesfully
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Done in ${seconds} seconds!`);
		}, seconds * 1000);
	});
}

// Keeps track of the counter
function updateButtonLabel() {
	startButton.textContent = `Start Timer (${runningTimers}/3)`;
	if (runningTimers === 3) {
		startButton.disabled = true;
	} else {
		startButton.disabled = false;
	}
}

// Using async to be able to use await later
startButton.addEventListener('click', async () => {
	if (runningTimers < 3) {
		runningTimers++;
		updateButtonLabel();

		const randomDuration = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
		// It needs to wait for the promise mentioned before to be resolved on x seconds in order to continue with the following line of code
		const result = await startTimer(randomDuration);

		const timerResultDiv = document.createElement('div');
		timerResultDiv.textContent = result;
		timersDiv.appendChild(timerResultDiv);

		runningTimers--;
		updateButtonLabel();
	}
});
