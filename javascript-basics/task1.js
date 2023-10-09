/* Task 1
Create a JS file and write a simple encryption function that returns a string made of 0s and 1s as follows:

Takes a sentence as the argument;

For each word in the sentence (we consider a word any series of characters separated by space):

Uses 0 if the length is divisible by 3;

Uses 1 otherwise;

Returns the “encrypted” string.

Create an HTML page and load the JS file.

Call the function for different sentences and log the results in the browser’s console. */



function encrypt(sentence) {
let encryptedSentence = [];

    sentence.split(" ").map(word => word.length % 3 === 0?  encryptedSentence.push(0) : encryptedSentence.push(1));


 return encryptedSentence.join("");
}

console.log(encrypt("Hola Patrick!"));
console.log(encrypt("How are you?"));
console.log(encrypt("I love coffee too"));
console.log(encrypt("I am not sure if the other Patryk likes coffee"));
