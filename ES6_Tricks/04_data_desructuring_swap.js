//! Using data destructuring we can swap the variables values

let name = "arafat@gmail.com";
let email = "Arafat";

[email, name] = [name, email];

console.log(email); //arafat@gmail.com
console.log(name); //arafat
