//!  Get Random Element from Array

let ages = [11, 12, 32, 48, 65, 97, 2];

//! get random array elements

console.log(Math.round(Math.random() * ages.length));

let randomAges = ages[Math.round(Math.random() * ages.length)];
console.log(randomAges);
