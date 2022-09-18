//! Hide the numbers --> Example Phone numbers
let phoneString = "828-298-5207";

//! convert the number into an array
let phoneNumArrDash = phoneString.split("");
console.log(phoneNumArrDash); //[ '8', '2', '8', '-', '2', '9', '8', '-', '5', '2', '0', '7' ]
//! Remove the "-"
let phoneNumArr = phoneNumArrDash.filter((n) => n !== "-");
console.log(phoneNumArr); //[ '8', '2', '8', '2', '9', '8', '5', '2', '0', '7' ]

//! Fill method to fill or hide the number with "*"
let hideNumber = phoneNumArr.fill("*", 6);
console.log(hideNumber); //[ '8', '2', '8', '2', '9', '8', '*', '*', '*', '*' ]

let protectedNumber = hideNumber.join("");
console.log(protectedNumber); //828298****
