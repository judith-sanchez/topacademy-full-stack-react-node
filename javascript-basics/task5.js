// Task 5
// Create the JS game Guess the Magic Number:

// Generate a random number between 1 and 100 when the page loads;

// Use prompt to read input from the user;

// Use alert to display messages in the browser;

// The user has 7 tries to guess the magic number - every time they enter a value:

// Keep track of the number of tries;

// If the guess is correct, the game ends and the user sees the message You won in <value> tries!;

// If the guess is incorrect:

// Display a message informing the user that the magic number is greater or lesser than the number just entered - The magic number is greater than <entered number>! You have <value> tries left.

// Then allow the user to enter a new value;

// If the value entered is not a number, take away one try and show them a message with how many tries they have left;

// If the user didn’t guess the correct number in 7 tries:

// The game ends;

// The message You lost! The magic number was <value> will be displayed.

// The user can replay by reloading the page.

// Create an HTML page and run the JS code.

const magicNumber = Math.floor(Math.random() * 100) + 1;

function guessMagicNumber(tries) {
	if (tries === 0) {
		alert(`You lost! The magic number was ${magicNumber}.`);
		location.reload();
	} else {
		const userInput = prompt(`Guess the magic number! Tries left: ${tries}`);

		const userGuess = parseInt(userInput);

		if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
			alert(`Invalid input. You have ${tries - 1} tries left.`);
			guessMagicNumber(tries - 1);
		} else if (userGuess === magicNumber) {
			alert(`You won in ${7 - tries + 1} tries!`);
		} else {
			const message = userGuess < magicNumber ? 'greater' : 'lesser';
			alert(
				`The magic number is ${message} than ${userGuess}. You have ${
					tries - 1
				} tries left.`,
			);
			guessMagicNumber(tries - 1);
		}
	}
}

guessMagicNumber(7);
