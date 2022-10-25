//! Match non numbers characters
//! '\D' takes place here

let numString = "Your ?sandwich will be $5.00";
let pattern = /\D/g;

let result = numString.match(pattern);
console.log(result);
/*
[ 'Y',
  'o',
  'u',
  'r',
  ' ',
  '?',
  's',
  'a',
  'n',
  'd',
  'w',
  'i',
  'c',
  'h',
  ' ',
  'w',
  'i',
  'l',
  'l',
  ' ',
  'b',
  'e',
  ' ',
  '$',
  '.' ]


*/
