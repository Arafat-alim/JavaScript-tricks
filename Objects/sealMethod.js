//! Prevent Object Properties from Being Added Deleted
let user = {
  name: "Arafat",
  email: "Arafat@gmail.com",
};

//! checking the object property
console.log(Object.getOwnPropertyDescriptors(user));

//! sealed the object
Object.seal(user); //make configutaion to false

console.log(Object.getOwnPropertyDescriptors(user));

//! trying to add the property
user.password = "jeff";

//! trying to delete the email property
delete user.email;
console.log(user); //{ name: 'Arafat', email: 'Arafat@gmail.com' }

//checking object is sealed or not
console.log(Object.isSealed(user)); // true

user.email = "aquib@gmail.com";
console.log(user); //{ name: 'Arafat', email: 'aquib@gmail.com' }
