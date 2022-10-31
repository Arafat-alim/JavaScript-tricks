//! Fixing with math error
//! .1 + .2 --> .3

console.log(0.1 + 0.2 === 0.3); // false
console.log(Number((0.1 + 0.2).toFixed(1)) === 0.3); // true

//! 2nd Way
console.log(0.1 + 0.3 - 0.3 < Number.EPSILON);
let result = 0.1 + 0.2 - 0.3;
console.log(result < Number.EPSILON); //true
console.log(Number.EPSILON); //2.220446049250313e-16

//! 3rd way
console.log(Math.round((0.1 + 0.2) * 10) / 10); // .3

//4th way
console.log(Math.abs(0.1 + 0.2));
