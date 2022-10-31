//! There are two main function which are responsible for playing the decimal
//! 1. number.toFIxed();
//! 2. number.toPrecision();

let number = 1.2345;

let fixedMethod = number.toFixed(2);
let precisionMethod = number.toPrecision(2);

console.log(fixedMethod); //1.23
console.log(precisionMethod); // 1.2
