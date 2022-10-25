let input = "I love Javascript. Love is truely insane";
let regex = /love/;

//! extract the word from the given string
let result = input.match(regex);
console.log(result);

//! [ 'love',
//! index: 2,
//!  input: 'I love Javascript',
//!  groups: undefined ]
