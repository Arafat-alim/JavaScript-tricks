//! remove element from the left side of the array.

let nums = [23, 789, 45, 87];

//! Slice method return a new pop array, whereas
//! Pop emthod updated the existed array
//! slice is used for cloning shallow clonning
let removeFromLeft = nums.slice(0, 3);
console.log(removeFromLeft); // [ 23, 789, 45 ]

let removeFromRight = nums.slice(2);
console.log(removeFromRight); // [ 45, 87 ]

let getNItem = (arr, num) => arr.slice(num - 1, num)[0];

let res = getNItem(nums, 3);
console.log(res); // 45

function offsetArray(arr, offset) {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

let result = offsetArray([1, 2, 3, 4, 5], 4);
console.log(result); // [ 2, 3, 4, 5, 1 ]
