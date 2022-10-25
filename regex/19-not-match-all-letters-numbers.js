//! '\W' capital W --> It excludes all the numbers and letters and underscore characters
//! It includes all the symbolic character except underscore

let quoteSample = "The five boxing wizards jump quickly.?,<>|_!@#$%^^&*()_+";
let pattern = /\W/g;

let result = quoteSample.match(pattern);
console.log(result);
/*
[ ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  '.',
  '?',
  ',',
  '<',
  '>',
  '|',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '^',
  '&',
  '*',
  '(',
  ')',
  '+' ]


*/
