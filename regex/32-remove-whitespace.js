//! Remove all the whitespace from begining and from ending without using trim method of string
let str = "        Hello world          ";
//! using trim method
// console.log(str.trim());

//! using regex
let pattern = /^\s+|\s+$/g;
let result = str.replace(pattern, "");
console.log(result); //Hello world
