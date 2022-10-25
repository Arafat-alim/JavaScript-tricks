//! case insensitive in a given string match
let input = "BiggBOSS";
let regex = /BiggBoss/i; //! by adding the flag i = ignore flag

let result = regex.test(input);
console.log(result); //true
