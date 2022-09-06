//! Getting input value from dom
let username = document.querySelector("[name='username']");
let password = document.querySelector("[name='password']");

//! Creating a state
let state = {};

//! addeventListener
let onkeyUp = (e) => {
  var name = e.target.name;
  var value = e.target.value;

  state[name] = value;
};

username.addEventListener("keyup", onkeyUp);
password.addEventListener("keyup", onkeyUp);

console.log(state);
