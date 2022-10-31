//! It called only for once
const once = (fn, ...args) => {
  //rest operator
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return fn(...args); // spread operator
    }
  };
};

const onClick = (text, date) => console.log(`${text} is clicked at ${date}`);

let button = document.querySelector("button");

button.addEventListener("click", once(onClick, "Button", new Date(Date.now())));
