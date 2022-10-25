//! Capture group - it helps us to find the repeated words in the same group.
let input = "regex regex";
let pattern = /(\w+)\s\1/;

let matchOne = input.match(pattern);
let testOne = pattern.test(input);
console.log(matchOne); //['regex regex','regex',]
console.log(testOne); //true

//! repeat num
let num = "42 42 42 42 42 42";
let num2 = "42 42 42";
let patternNum = /(\d+)\s\1\s\1/;
let patternNumBest = /^(\d+)\s\1\s\1$/;

let matchTwo = num.match(patternNum);
let testTwo = patternNum.test(num);

let matchBest = num2.match(patternNumBest);
let testBest = patternNumBest.test(num2);

console.log(matchTwo); // ['42 42 42','42',]
console.log(testTwo); //true
//! Best matching
//! ANswer is coming the same as before but there is exact match, not giving to add
console.log(matchBest); // ["42 42 42", "42"];
console.log(testBest); //true
