/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
*/

let username = "JackOfAllTrades";
let pattern = /^[A-Za-z]{2,}\d*$/;
//! ^ --> Caret means starting with
//! [A-Za-z] --> Character includes only Caps and Small A - Z characters
//! {min, max} --> {2, max=infinity} --> previous case repeat atleast two character and upto infinity
//! \d --> only numbers or digits chracter can add
//! * --> digit can repeat n number of times
//! $ --> It means at the end

let result = pattern.test(username);
console.log(result); //true
