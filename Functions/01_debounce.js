//! Debpunce Function  - It helps us to limit the rate of api or heavy function calls, it only runs
//! after a certain period of time has been passed.
//! It is created with the help of HOF and Closure concept

function resizeWin(event) {
  console.log(event, window.innerHeight, window.innerWidth);
}

const debounce = (fn, delay) => {
  let timeOut;
  return function (args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn(args);
    }, delay);
  };
};
window.addEventListener("resize", debounce(resizeWin, 500));
