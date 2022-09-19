// Find Shared Values Between Two Arrays

let men = ["Sam", "Ron", "Jim"];
let over50 = ["Ram", "Paul", "Jim"];

//! Find men is sharing his man with over50?

const myMan = men.filter((man) => over50.includes(man));
console.log(myMan); // [ 'Jim' ]

//! Find over50 person in man arrays

const myPerson = over50.filter((person) => men.includes(person));

console.log(myPerson); // ["Jim"]
