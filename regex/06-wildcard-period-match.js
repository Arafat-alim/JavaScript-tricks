//! WIldcard period.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let pattern = /hu./;

let resultOne = humStr.match(pattern);
let resulTwo = hugStr.match(pattern);
console.log(resultOne); //[ 'hum', index: 5, input: 'I\'ll hum a song', groups: undefined ]
console.log(resulTwo); // [ 'hug', index: 5, input: 'Bear hug', groups: undefined ]
