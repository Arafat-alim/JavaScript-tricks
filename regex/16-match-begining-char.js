//! Find the beginning matching character
let rickyAndCal = "Cal and Ricky both like racing.";
let inputTwo = "and Ricky Cal  both like racing.";

let pattern = /^Cal/;

let resultOne = pattern.test(rickyAndCal);
let resultTwo = pattern.test(inputTwo);

console.log(resultOne); //true
console.log(resultTwo); //false
