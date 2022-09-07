//! Remove Falsy Values in Array
let arr = ["", 0, null, undefined, 12, 32, 56, false, NaN];

console.log(arr); //[ '', 0, null, undefined, 12, 32, 56, false, NaN ]

let truthyVal = arr.filter((temp) => temp);
console.log(truthyVal); //[ 12, 32, 56 ]

// Checking Task
if (0) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // Falsy
}
