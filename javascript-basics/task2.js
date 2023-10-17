/* Task 2
Create a JS file and write a function that:

Checks all the numbers between 1 and 100 (inclusive);

For multiples of 5 prints to the console Ping instead of the actual number;

For multiples of 7 prints Pong;

For multiples of both 5 and 7 prints PingPong;

For any other situation prints the actual number.

Create an HTML page and load the JS file to see the results in the browser’s console.

Create another function that returns a string with the values concatenated, using the same logic as above.

Call this function and display the result in the browser’s console.

Refactor the code above so that the conversion logic isn’t duplicated between the two functions. */

function pingPong() {
	for (let num = 1; num <= 100; num += 1) {
		if (num % 5 === 0 && num % 7 === 0) {
			console.log('PingPong');
		} else if (num % 7 === 0) {
			console.log('Pong');
		} else if (num % 5 === 0) {
			console.log('Ping');
		} else {
			console.log(num);
		}
	}
}

// pingPong();

function pingPongString() {
	let str = '';

	for (let num = 1; num <= 35; num += 1) {
		if (num % 5 === 0 && num % 7 === 0) {
			str += 'PingPong';
		} else if (num % 7 === 0) {
			str += 'Pong';
		} else if (num % 5 === 0) {
			str += 'Ping';
		} else {
			str += num;
		}
	}
	return str;
}

// console.log(pingPongString());

function pingPongRefractored(num) {
	if (num > 100) return;

	if (num % 5 === 0 && num % 7 === 0) console.log('PingPong');
	else if (num % 7 === 0) console.log('Pong');
	else if (num % 5 === 0) console.log('Ping');
	else console.log(num);
	pingPongStringRefractored(num + 1);
}

// pingPongRefractored(1);

// let str = '';
// Better than a global variable
function pingPongStringRefractored(num, str = '') {
	if (num > 100) console.log(str);

	// I can't make the function return when it reaches this condition. Why? :(
	if (num > 100) return str;

	if (num % 5 === 0 && num % 7 === 0) str += 'PingPong';
	else if (num % 7 === 0) str += 'Pong';
	else if (num % 5 === 0) str += 'Ping';
	else str += num;
	// Added return
	// I forgot to add str as the second parameter
	return pingPongStringRefractored(num + 1, str);
}

console.log(pingPongStringRefractored(1));
