//! Generating random integer from 2 - 10
//! inclusive of min and max
console.log(Math.round(Math.random() * (10 - 2) + 2)); // 9

//! inclusive of min
console.log(Math.floor(Math.random() * (10 - 2) + 2)); // 9

//! inclusive of max
console.log(Math.ceil(Math.random() * (10 - 2) + 2)); // 10

//! creating a function to getRandomInteger

function getRandomInteger(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

//! number getting from 1 - 100
let result = getRandomInteger(1, 100);
console.log(result);
