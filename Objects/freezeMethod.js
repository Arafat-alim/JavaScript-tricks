//! Prevent Object Properties from Being Changed at All
// Prevented from add, modify and delted

let user = {
  name: "Arafat",
  email: "a@gmail.com",
};

console.log(Object.getOwnPropertyDescriptors(user));
// { name:
//    { value: 'Arafat',
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   email:
//    { value: 'a@gmail.com',
//      writable: true,
//      enumerable: true,
//      configurable: true }
// }
Object.freeze(user);

//check whether our object is frozen or not
console.log(Object.isFrozen(user));

//!property check
console.log(Object.getOwnPropertyDescriptors(user));
// { name:
//    { value: 'Arafat',
//      writable: false,
//      enumerable: true,
//      configurable: false },
//   email:
//    { value: 'a@gmail.com',
//      writable: false,
//      enumerable: true,
//      configurable: false } }

//! trying to add , delete and modify
user.password = "Gohan";
user.email = "asif@gmail.com";
delete user.email;
console.log(user);
