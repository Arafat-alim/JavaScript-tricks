//! Converting object into an array
let obj1 = {
  name: "Arafat",
  age: 21,
};

//! Using Object.keys().ForEach()
let arr = [];
console.log(Object.keys(obj1));
Object.keys(obj1).forEach((key) => arr.push([key, obj1[key]]));
console.log(arr); //[ ['name ', 'Arafat'], ['age', 21]]

//! using Object.keys().map()

let newArr = Object.keys(obj1).map((key) => [key, obj1[key]]);
console.log(newArr); //[ ['name ', 'Arafat'], ['age', 21]]

//! Using object.entries
console.log(Object.entries(obj1)); //[ ['name ', 'Arafat'], ['age', 21]]
