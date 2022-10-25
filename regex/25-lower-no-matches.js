//! find out the lower number of matches using quantifier
let haStr = "Hazzzzah";
let pattern = /z{4,}/;
let result = pattern.test(haStr);
console.log(result); //true
