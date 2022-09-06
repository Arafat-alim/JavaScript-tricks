//! Prevent object from adding property to it

var user = {
  username: "Arafat",
  email: "arafat@gmail.com",
};
//! Checking property access
// console.log(Object.getOwnPropertyDescriptor(user));
console.log(Object.getOwnPropertyDescriptors(user));

Object.preventExtensions(user);

user.password = "jeff"; //trying to password
console.log(Object.getOwnPropertyDescriptors(user));
console.log(user); // { username: 'Arafat', email: 'arafat@gmail.com' }
delete user.username;
console.log(user); //{ email: 'arafat@gmail.com' }
