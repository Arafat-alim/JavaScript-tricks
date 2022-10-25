//! match non whitespaces
//! '\S' --> it will helps us in this situation
let sample = "Whitespace is important in separating words";
let regex = /\S/g;
//! Remove whitespace, tab and new Line character
let result = sample.match(regex);
console.log(result);
/*
[ 'W',
  'h',
  'i',
  't',
  'e',
  's',
  'p',
  'a',
  'c',
  'e',
  'i',
  's',
  'i',
  'm',
  'p',
  'o',
  'r',
  't',
  'a',
  'n',
  't',
  'i',
  'n',
  's',
  'e',
  'p',
  'a',
  'r',
  'a',
  't',
  'i',
  'n',
  'g',
  'w',
  'o',
  'r',
  'd',
  's' ]

*/
