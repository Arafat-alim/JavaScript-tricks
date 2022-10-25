//! Match string - case sensitive word matching
let str = "Hello Sir! How are you?";
let regex = /Sir/;

let result = regex.test(str);
console.log(result); //true
