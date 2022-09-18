//! Unique elements
const username = ["Joe", "Doe", "Joe", "Mary", "Joe"];

//! One Method
const uniqueArr = username.filter(
  (curr, index, array) => array.indexOf(curr) === index
);
console.log(uniqueArr); //[ 'Joe', 'Doe', 'Mary' ]

//! two Method

const uniqueElement = [...new Set(username)];
console.log(uniqueElement); //[ 'Joe', 'Doe', 'Mary' ]
