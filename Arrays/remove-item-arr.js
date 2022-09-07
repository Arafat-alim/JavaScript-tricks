let arr = [34, 54, 67];

//! splice method
// // arr.splice(0); // []
// let removeElement = arr.splice(-1); // 67
// console.log(removeElement); // [67]
// console.log(arr); // [34,64]

let addNew = arr.splice(1, 1, "hello", "Miya");
console.log(addNew); //[ 54 ]
console.log(arr); //[ 34, 'hello', 'Miya', 67 ]

//! Remnve first and last letter from the string
let string = "Hello WOrld";
// Convert string into an array
let newString = string.split("");
//! Removing first element
newString.splice(0, 1);

//! Removing last element
newString.splice(newString.length - 1, 1);

console.log(newString.join(""));

console.log(string); // hello WOrld

let ints = [3, 7, 1, 6];
// console.log(ints.indexOf(5)); //-1
// const result = ints.filter(el => el > 5).map(i => {
//     ints.splice(ints.indexOf(i), 1);
//     return i;
// })
// console.log(result)
// console.log(ints);

function removeElement(arr, fn) {
  return arr.filter(fn).map((el) => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  });
}

const res = removeElement(ints, (num) => num > 1);
console.log(res); //[ 3, 7, 6 ]
console.log(ints); //[ 1 ]
