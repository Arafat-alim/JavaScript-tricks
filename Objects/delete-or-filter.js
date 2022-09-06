//! Delete or Filter Property of Object

let user = {
  first: "Arafat",
  last: "Khan",
};
// Typical delete
// delete user.first;
// delete user.last;
console.log(user);

let filterObj = {};

let newObj = Object.keys(user)
  .filter((x) => x !== "last")
  .map((key) => (filterObj[key] = user[key]));

console.log(filterObj); //{ first: 'Arafat' }
