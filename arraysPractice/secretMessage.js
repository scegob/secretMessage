let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// removes the last element in an array
secretMessage.pop();
// adds elements to the end of the index
secretMessage.push('to', 'program');
// replaces the 7 elements in the array to 'right'
secretMessage[7] = 'right';
// removes the first string of the array
secretMessage.shift();
// adds an element to the beginning of the array
secretMessage.unshift('Programming');
// removes stings and replaces it with a string
secretMessage.splice(6, 5, 'know');
//to print secret message as a sentence
console.log(secretMessage.join(' '));
