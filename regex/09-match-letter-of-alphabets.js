//! Find every alphabetic letters are prseent or not
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let pattern = /[a-z]/gi;

let result = quoteSample.match(pattern);
let bool = pattern.test(quoteSample);

console.log(result);
console.log(bool); //true
