//! Match the ending pattern string
let caboose = "The last car on a train is the caboose";
let cabooseFail = "The last car on a train caboose is the";
let pattern = /caboose$/;

let result = pattern.test(caboose);
let resultTwo = pattern.test(cabooseFail);
console.log(result); //true
console.log(resultTwo); //false
