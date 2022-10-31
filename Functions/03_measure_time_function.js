//! Measure time taken by the function called

const getUser = async (user) =>
  await fetch(`https://api.github.com/users/${user}`);

let time = (fn, ...args) => {
  //rest operator
  console.time("time");
  let result = fn(...args); //spread operator
  console.timeEnd("time");
  return result;
};

let data = time(() => getUser("arafat-alim")); //time: 9ms - timer ended
console.log(data);
/*
time: 9ms - timer ended 03_measure_time_function.js:10:11
Promise { <state>: "pending" }
*/
