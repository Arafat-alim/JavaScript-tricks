//! Wildcard period
let sentence = "There is a big bag and inside it a toy bug";
//! FInd out the big bag and bug
let regex = /b[aiu]g/g;

let resultOne = sentence.match(regex);
console.log(resultOne); //[ 'big', 'bag', 'bug' ]

//! Find out the vowels from it
let pattern = /[aeiou]/g;
let resulTwo = sentence.match(pattern);
console.log(resulTwo); //[ 'e', 'e', 'i', 'a', 'i', 'a', 'a', 'i', 'i', 'e', 'i', 'a', 'o', 'u' ]
