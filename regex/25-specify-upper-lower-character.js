//! Specify upper and lower number of matches
//! case{min, max}

let input = "Ohhhhhh no";
let pattern = /Oh{2,6} no/; //! exact h will be 6

let result = input.match(pattern);
let testing = pattern.test(input);
console.log(testing); // true
console.log(result); // ['Ohhhhhh no']
