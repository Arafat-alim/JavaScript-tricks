//! We can hide the data(password) using IIFE
let user = (() => {
  let name = "arafat";
  let email = "Arafat@gmail.com";
  let password = "bdhiasbdas";
  return { email, name };
})();

console.log(user.name); // arafat
console.log(user.email); // arafat@gmail.com
console.log(user.password); // undefined
