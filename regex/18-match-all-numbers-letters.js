//! Match all the letters and numbers in the string
//! "\w" --> it matches all the numbers from 0-9, small and capital letters (a-z) and also include underscore
//! It exclude the whitespaces and period
let quoteSample = "The five boxing wizards jump quickly.";
console.log(quoteSample.length); //37

let regex = /\w/g;
let result = quoteSample.match(regex);
console.log(result.length); //31
