//! Match only numbers and digits
let numString = "Your sandwich will be $5.00";
let regex = /\d/g;

let result = numString.match(regex);
console.log(result); //[ '5', '0', '0' ]
