//! Merging object in two ways
//! 1. Object.assign()
let obj1 = {
  name: "Arafat",
  email: "Arafat@gmail.com",
};

let obj2 = {
  subscribed: true,
};

let obj3 = {
  phone: "555-555-555",
};

//merging
console.log(Object.assign(obj1, obj2, obj3));

//! 2. Spread operator

let newObj = { ...obj1, ...obj2, ...obj3 };
console.log(newObj);
// { name: 'Arafat',
//   email: 'Arafat@gmail.com',
//   subscribed: true,
//   phone: '555-555-555' }
