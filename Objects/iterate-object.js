//! Iterate over JS

let username = {
  first: "Arafat",
  last: "Alim",
};

console.log(typeof Object.keys(username)); //Array
//! for..in loop
for (let u in username) {
  console.log(u); //getting only property --> first, last
  if (username.hasOwnProperty(u)) {
    console.log(u, username[u]);
  }
}

//! for...of loop
for (let v of Object.keys(username)) {
  console.log(v); //first, last
  console.log(v, username[v]); // first Arafat, last Alim
}

//! forEach... ES7 --> Object.entries()
console.log(typeof Object.entries(username).length);

//! paste this code into the browser console
console.log(
  Object.entries(username).forEach(([key, value]) => console.log(key, value))
);
