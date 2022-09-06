//! Get All Values in Object

let user = {
  first: "Arafat",
  last: "Alim",
  email: "Arafat@gmail.com",
};

let allValues = Object.keys(user).map((x) => user[x]);
console.log(allValues); //[ 'Arafat', 'Alim', 'Arafat@gmail.com' ]

let simpleWay = Object.values(user);
console.log(simpleWay); //[ 'Arafat', 'Alim', 'Arafat@gmail.com' ]
