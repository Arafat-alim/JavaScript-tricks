//! In american english we spell favourite or in uk english we spell favorite
//! Develped an application that letter "u" does not matter
//! Here "?" gives us that flexibility .

let input = "favourite";
let input2 = "favorite";
let pattern = /favou?rite/;
//! u? --> u can be or cannot be added

let testOne = pattern.test(input);
let testtwo = pattern.test(input2);

console.log(testOne); //true
console.log(testtwo); //true
