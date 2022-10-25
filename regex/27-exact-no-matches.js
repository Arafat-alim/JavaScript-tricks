//! Exact number of matches lower and upper bound
//! quantifier case{min, max}
let timStr = "Timmmmber";
let regex = /Tim{4}ber/;

let result = regex.test(timStr);
console.log(result); //true
