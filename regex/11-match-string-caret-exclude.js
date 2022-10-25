//! Remove the number range from 0-9 and also remove the vowel letters
let quoteSample = "3 blind mice.";
let pattern = /[^0-9aeiou]/gi;

let result = quoteSample.match(pattern);
console.log(result); //! [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]
