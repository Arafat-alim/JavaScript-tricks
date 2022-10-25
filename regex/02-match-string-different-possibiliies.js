//! FInding any given word found in the string then it will gives us true.
let input = "There is a snake";
let regex = /bird|cat|dog|snake/;

let result = regex.test(input);
console.log(result); //true
