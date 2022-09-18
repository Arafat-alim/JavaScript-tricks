//! Find the difference between two array

let arr1 = ["red", "blue", "pink", "pink"];
let arr2 = ["red", "blue", "green"];

//! shared  value
let sharedValue = arr1.filter((el) => arr2.includes(el));
console.log(sharedValue);

//! Uncommon values
let differenceValue = arr1.filter((el) => !arr2.includes(el));
console.log(differenceValue);

//! unique difference value
let uniqueDiff = [...new Set(arr1)].filter((el) => !arr2.includes(el));
console.log(uniqueDiff);
