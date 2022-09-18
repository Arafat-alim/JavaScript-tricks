//!Find certain element,index, Indices from an array
let person = ["Joe", "Doe", { name: "Mary" }, "Sam", "Joe"];

console.log(person);
//! we want Doe
let findDoe = person.find((p) => p === "Doe");
console.log(findDoe); // Doe

//! Find Mary
let findMary = person.find((p) => p.name === "Mary");
console.log(findMary.name); // Mary

//! find Doe index
let findDoeIndex = person.findIndex((p) => p === "Doe");
console.log(findDoeIndex); //1

//! FindIndices number of elements occurs in an array

// let findIndexAll = function(arr, value){
//     let indices = [];
//     arr.forEach((el, i) => {
//         if(el===value){
//             indices.push(i);
//         }
//     })
//     return indices;
// }

//! Optimised version of the code
let findIndexAll = function (arr, value) {
  let indices = [];
  arr.forEach((el, i) => el === value && indices.push(i));
  return indices;
};

//! calling our function

console.log(findIndexAll(person, "Joe")); //[0,4]
