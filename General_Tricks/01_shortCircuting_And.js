//! Short circuiting with Logical AND
const h1 = document.querySelector("h1");

h1.style.display = "none";

let loggedIn = true;

//! Old School days
/*
if (loggedIn) {
  h1.style.display = "block";
}
*/

//! Newer way - shortcircuiting
loggedIn && (h1.style.display = "block");
loggedIn && (h1.style.display = "block") && console.log("cool");
