//! Make range of numbers within Array
let n = 10;
let naturalElement = Array.from({ length: n }, (curr, index) => index + 1);
console.log(naturalElement); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//! Table of 8
let tableNum = 8;
let tableEight = Array.from(
  { length: 10 },
  (curr, index) => (index + 1) * tableNum
);
console.log(tableEight); // [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

//! Split the string
let string = "Hello";
let stringSplit = Array.from(string);

console.log(stringSplit); //[ 'H', 'e', 'l', 'l', 'o' ]

//! Adding by itself
let arr = [1, 2, 3, 4];

let added = Array.from(arr, (curr, index) => curr + curr);
console.log(added); //[ 2, 4, 6, 8 ]
