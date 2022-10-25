//! Positive and negative lookahead -  both of them are used to check two or more pattern in one string
let quit = "qu";
let noquit = "qt";

let patternPostive = /q(?=u)/;
let patternNegative = /q(?!u)/;

let resultOne = quit.match(patternPostive);
let resultTwo = noquit.match(patternNegative);

console.log(resultOne); //q
console.log(resultTwo); //q

// ! Q. Greater than 5 character and two consecutive digits
let sampleWord = "astronaut";
let sampleWord2 = "astronaut12";
let pattern = /(?=\w{5})(?=\D*\d{2})/;

//! (?=)(?=) --> Two positive lookahead
//! (?=\w) --> looking only alphabets and numebers character
//! (?=\w{5}) --> looking only alphabets and numebers character with 5 characters is must.
//! (?=\D) --> looking only non digit characters
//! (?=\D*) --> looking only non digit characters repeated term accepted
//! (?=\D*\d) --> looking only non digit characters repeated term accepted with last character must be digits
//! (?=\D*\d{2}) --> looking only non digit characters repeated term accepted with last character must be digits using quantifier last must have 2 digits only

// let result = sampleWord.match(pattern);
let result = pattern.test(sampleWord);
let result2 = pattern.test(sampleWord2);
console.log(result);
console.log(result2);
