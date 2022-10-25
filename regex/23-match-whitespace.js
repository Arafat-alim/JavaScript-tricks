//! Matches whitespaces, tab and new line character
//! '\s' --> it helps us to match that pattern
let sample = "Whitespace is important in separating words   ";
let regex = /\s/g;
let result = sample.match(regex);
console.log(result); //! [ ' ', ' ', ' ', ' ', ' ' ]
