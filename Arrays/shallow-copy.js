//! Shallow Copy Clone Array
let arr = ["red", "blue", "green"];

let newArr = arr;

newArr.push("Black");
console.log(newArr); //[ 'red', 'blue', 'green', 'Black' ]
console.log(arr); //[ 'red', 'blue', 'green', 'Black' ]

//! The above program seem here that we are copying reference
//! Slice Method
let sliceCopy = arr.slice(0);
sliceCopy.push("rainbow");
console.log(sliceCopy); //[ 'red', 'blue', 'green', 'Black', 'rainbow' ]
console.log(arr); //[ 'red', 'blue', 'green', 'Black' ]

//! concat method
let concatCopy = arr.concat("reddish");
console.log(concatCopy); //[ 'red', 'blue', 'green', 'reddish' ]
console.log(arr); //[ 'red', 'blue', 'green' ]

//! Spread operator
let spreadCopy = ["yello", ...arr, "pink"];
console.log(spreadCopy); //[ 'yello', 'red', 'blue', 'green', 'pink' ]
console.log(arr); //[ 'red', 'blue', 'green' ]
let name = "Arafat";
let nameSplit = name.split("");
let nameCopy = [...name];
console.log(nameCopy); //[ 'A', 'r', 'a', 'f', 'a', 't' ]
console.log(nameSplit); //[ 'A', 'r', 'a', 'f', 'a', 't' ]
