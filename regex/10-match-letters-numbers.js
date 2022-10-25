//! Matching all the number range 2-4 and letters range h to s
let quoteSample = "Blueberry 3.141592653s are delicious.";
let pattern = /[2-4h-s]/gi;

let result = quoteSample.match(pattern);

console.log(result); //[ 'l', 'r', 'r', '3', '4', '2', '3', 's', 'r', 'l', 'i', 'i', 'o', 's' ]
