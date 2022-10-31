//! Getting random decimals
//! from 2 - 10
console.log(Math.random() * (10 - 2) + 2);

function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}

let resultOne = getRandomDecimal(2, 10);
let resultTwo = getRandomDecimal(3, 10);
let resultThree = getRandomDecimal(4, 10);
let resultFour = getRandomDecimal(5, 10);

console.log(resultOne); //! 9.020770431008112
console.log(resultTwo); //! 9.383605038139741
console.log(resultThree); //! 9.341232826764607
