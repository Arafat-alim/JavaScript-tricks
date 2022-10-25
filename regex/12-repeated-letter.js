//! NUmber of element repeated in a string
let input = "missippissis";
let pattern = /s+/g;
let result = input.match(pattern);
console.log(result); //[ 'ss', 'ss', 's' ]
