//! Use capture group and replace method in string
let wrongText = "The sky is silver.";
//! Replace the word silve to blue
let regex = /silver/;
let result = wrongText.replace(regex, "blue");
console.log(result); //The sky is blue

//! Q. Replace "Code Camp" to "Camp Code"
let inputStr = "Code Camp";
//! using capture group
let pattern = /(\w+)\s(\w+)/;
//! using replace method
let resultTwo = inputStr.replace(pattern, "$2 $1"); // strange one
console.log(resultTwo); //! Camp Code

//! Q.2
let huhText = "This sandwich is good.";
let patternTwo = /good/;
let resultThree = huhText.replace(patternTwo, "okie-dokie");
console.log(resultThree); //! This sandwich is okie-dokie.
