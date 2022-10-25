//! Find every alphabetic letters are prseent or not
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let pattern = /[a-z]/gi;

let result = quoteSample.match(pattern);
console.log(result); // Array(35) [ "T", "h", "e", "q", "u", "i", "c", "k", "b", "r", … ]
